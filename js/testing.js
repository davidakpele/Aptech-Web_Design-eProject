
window.onload = function () {
	//cart box
	const iconShopping = document.querySelector('.iconShopping');
	const cartCloseBtn = document.querySelector('.fa-closeBtt');
	const cartBox = document.querySelector('.cartBox');
	iconShopping.addEventListener("click", function () {
		cartBox.classList.add('active');
	});
	cartCloseBtn.addEventListener("click", function () {
		cartBox.classList.remove('active');
	});

	$('.pass-quantity input').change(function () {
		updateQuantity(this);
	});

	// localstorage basics 
	//we are calling out class name from the index.html which is attToCart and we are using attToCartBtn as it Variable
	const attToCartBtn = document.getElementsByClassName('btn');
	//now we are defining out item so we can handle all data 
	let items = [];
	//this downbelow is checking how many times addtocart button is clicked in array format
	for (let i = 0; i < attToCartBtn.length; i++) {
		// (let i = 0; i < attToCartBtn.length; i++) what we did here is simply loop function, we are asking that when the addtocart button is clicked, it should also go True so the user can add more.. thats the meaning of i++.
		//in other words we called our variable 'attToCartBtn' which we use to hold our button then now hold then variable again with (i) so now we can call it (i) and (i) will also be true to validate as long as it set to be i++.
		attToCartBtn[i].addEventListener("click", function (e) {
			//The attToCartBtn[i].addEventListener is setting item id.. automatically 
			//console.log(e.target.parentElement.children[1].textContent);
			console.log(e.target.parentElement.children[2].children[0].textContent);

			if (typeof (Storage) !== 'undefined') {
				let item = {
					id: i + 1,
					Itemname: e.target.parentElement.children[0].textContent,
					itemcode: e.target.parentElement.children[1].textContent,
					price: e.target.parentElement.children[2].children[0].textContent,
					Qty: 1
				};
				if (JSON.parse(localStorage.getItem('items')) === null) {
					items.push(item);
					localStorage.setItem("items", JSON.stringify(items));
					window.location.reload();
				} else {
					const localItems = JSON.parse(localStorage.getItem("items"));
					localItems.map(data => {
						if (item.id == data.id) {
							item.Qty = data.Qty + 1;
						} else {
							items.push(data);

						}
					});
					items.push(item);
					localStorage.setItem('items', JSON.stringify(items));
					window.location.reload();
				}
			} else {
				alert('storage is not working on your browser');
			}
		});
	}
	//Adding data to shopping cart
	//the ShoppingP is the Shopping icon in the index page.
	const badge = document.querySelector('.badge');
	let Qty = 0;
	JSON.parse(localStorage.getItem('items')).map(data => {
		Qty = Qty + data.Qty;
		let total = data.price * data.Qty;
		console.log(total);
	});
	badge.innerHTML = Qty;
	//adding cartbox data in table
	const cardBoxTable = cartBox.querySelector('table');
	let tableData = '';
	//Noticed I replaced the [] with {}
	tableData += '<tr class="bg-primary"><th>ID</th><th>item Name</th><th>Item Price</th><th>Item Qty</th><th>Item Code</th><th>Action</th></<th>';
	if (JSON.parse(localStorage.getItem('items'))[0] === null) {
		tableData += '<tr><th colspan="6"No items is Found></th></tr>';
	} else {
		JSON.parse(localStorage.getItem('items')).map(data => {
			//console.log()
			tableData += '<tr class="bg-info"><th>' + data.id + '</th><th>' + data.Itemname + '</th><th>'+data.price+'</th><th><input type="number" class="form-control"value="'+ data.Qty+'" style="width:6rem; height:35px"></th><th>' + data.itemcode + '</th><th><button onclick=Delete(this);  style="color:#fff; background-color:red;">Delete</button></th></tr>';
			tableData += 'Hello';
		});
	}
	cardBoxTable.innerHTML = tableData;

}