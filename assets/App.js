$('.add-customer').on('click',function(){ 
	$(this).addClass('textChange');
	$('#search-customer').toggle();
	$('#addCustomer').toggle(); 
	$('.customers').toggle(); 
});
