let carts = document.querySelectorAll('.btn');
//--Open Comment Assingment David
// Whole of this is SUPPOSE TO string out the currency sign which is attached to our HTML Price so we can run our price_Amount without any errors and as a number
// let A = '$';
// let B = '₦';
// let C = '€';
// let D = '£';
// parseFloat(A.replace(/[^\d.]/g, ''));
// // parseFloat(B.replace(/[^\d.]/g, ''));
// parseFloat(C.replace(/[^\d.]/g, ''));
// parseFloat(D.replace(/[^\d.]/g, ''));
// // var s = '$148,326.01';
// // parseFloat(s.replace(/[^\d.]/g, '')); // => 148326.01
//-- Close the comment Man wow--
for (let i = 0; i < carts.length; i++){
	carts[i].addEventListener('click', function (e) {
		let product = [
			{
				Name: e.target.parentElement.parentElement.parentElement.children[0].textContent,
				//Price: e.target.parentElement.parentElement.parentElement.children[1].textContent, [1] is for list Price
				Price: e.target.parentElement.parentElement.parentElement.children[2].textContent,
				//Egg_Codition: e.target.parentElement.parentElement.parentElement.children[4].textContent, this will printOut the whole html div class="row"
				Egg_Codition_1: e.target.parentElement.parentElement.parentElement.children[4].children[0].children[1].children[1].value,
				//Egg_Codition_2: e.target.parentElement.parentElement.parentElement.children[4].children[0].children[1].children[2].value,
				Cake_flavour: e.target.parentElement.parentElement.parentElement.children[4].children[1].children[1].value,
				Cake_message: e.target.parentElement.parentElement.parentElement.children[7].value,
				//Cake_message: e.target.parentElement.parentElement.parentElement.children[7], David You've forgoten include .textContent
				Quantity: e.target.parentElement.parentElement.parentElement.children[9].children[0].children[1].value, //David You've forgoten include .textContent
				Item_Code: e.target.parentElement.parentElement.parentElement.children[9].children[0].children[2].value,
				inCart: 0
			},
		]
		cartNumbers(product[i]);
		totalCost(product[i]);
	});
}
function onLoadCartNumber() {
	let productNumbers = localStorage.getItem('cartNumbers');

	if (productNumbers) {
		document.querySelector('.badge').textContent = productNumbers;
	}
}
function cartNumbers(product) {
	let productNumbers = localStorage.getItem('cartNumbers');

	productNumbers = parseInt(productNumbers);

	if (productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.badge').textContent = productNumbers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.badge').textContent = 1;
	}
	setItems(product);
}
function setItems(product) {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);

	if (cartItems != null) {
		if (cartItems[product.Name] == undefined) {
			cartItems = {
				...cartItems,
				[product.Name]: product
			}
		}
		cartItems[product.Name].inCart += 1;
	} else {
		product.inCart = 1;
		cartItems = {
			[product.Name]: product
		}

	}
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}
//Calcute Product totalCost
function totalCost(product) {
	let cartCost = localStorage.getItem('totalCost');

	if (cartCost != null) {
		//var priceNum = parseFloat(price.replace(/£/g, ""));
		Sum = parseInt(product.Price);
		cartCost = parseInt(cartCost);
		localStorage.setItem('totalCost', cartCost + Sum);
	} else {
		localStorage.setItem("totalCost", product.Price);
	}

}

function displayCart() {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelector('.body-table');
	let cartCost = localStorage.getItem('totalCost');
	if (cartItems && productContainer) {
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => {
			productContainer.innerHTML += `
			<table class="body-table">
				<tr>
					<td class="col-sm-8 col-md-6">
						<div class="media">
							<div class="media-body">
								<h4 class="media-heading">
									<a href="#"><span>${item.Name}</span></a>
								</h4>
								<span>Status: </span>
								<span class="text-success">
									<strong>In Stock</strong>
								</span>
							</div>
						</div>
					</td>
					<td class="col-sm-1 col-md-1" style="text-align: center">
						<input type="number" class="form-control" id="Qty" value="${item.Quantity}" style="max-width:; height:30px; border:1px solid #888">
					</td>
					<td class="col-sm-1 col-md-1 text-center">
						<strong>&#8358;${item.Price},00</strong>
					</td>
					<td class="col-sm-1 col-md-1 text-center">
						<strong>${item.Cake_message}</strong>
					</td>
					<td class="col-sm-1 col-md-1 text-center">
						<strong>${item.Egg_Codition_1}</strong>
					</td>
					<td class="col-sm-1 col-md-1 text-center">
						<strong>${item.Item_Code}</strong>
					</td>
				</tr>
			</table>`

		});
		productContainer.innerHTML += `
		<thead >
			<tr>
				<th></th>
				<th><small style="font-size:18px;">Total:</small></th>
				<th><h4>&#8358;${cartCost},00</h4></th>
				<th></th>
				<th></th>

			</tr>
		</thead>`
		productContainer.innerHTML += `
		<div class="ckechout">
			<a href="./checkout.html"><button type="button" class="btn btn-success btn-lg" style="font-size:12px">
					Process Chechout
			</button></a>
		</div>`
	} else {
		productContainer.innerHTML += `<h3 class="text-center">Empty Cart</h3>`
	}
}
onLoadCartNumber();
displayCart();
