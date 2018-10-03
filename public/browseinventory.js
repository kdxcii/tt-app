$('#logout-btn').on('click', (e) => {
	event.preventDefault();
	console.log('Logging Out User');
	localStorage.clear();
	window.location = '/index.html';
});

function loadPublicInventory() {
	const username = localStorage.getItem('ownerInv');
		$.ajax({
			type: 'GET',
			url: `/${username}/inventory`,
			dataType: 'json',
			contentType: 'json/application'
		})
		.done(result => {
			console.log(result);
			for(let i = 0; i < result.length; i++){
			$('#public-inventory').append(
				`
				<section role="region" class="shoeinfo-region">
				<ul class="shoe-info">
					<li>Brand</li>
					<li>Model</li>
					<li>Color</li>
					<li>Size</li>
				</ul>
				<ul class="shoe-info-data">
					<li>${result[i].shoeBrand}</li>
					<li>${result[i].shoeModel}</li>
					<li>${result[i].primaryColor}</li>
					<li>${result[i].shoeSize}</li>
				</ul>
			</section>
				`
			)};
		});
	};
	function loadUserDashBoard() {
		console.log('getting user info')
	
		let username = localStorage.getItem('username');
		let shoeCount = localStorage.getItem('shoeCount');
	
		console.log(username,shoeCount);
	
		// hide dashboard if not logged in , else show dashboard
		if(username === null){
			$('#dashboard').addClass('hidden');
		} 
		else {
			$('#js-userinfo').append(`
			<p id="username">Username <a href="myaccount.html">${username}</a></p>
			<p id="shoeCount">Shoe Count ${shoeCount}</p>`
			);
		};
	};
	
function handleOnLoad(){
	$(loadPublicInventory);
	$(loadUserDashBoard);
}


$(handleOnLoad);