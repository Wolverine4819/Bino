
$(document).ready(function(){
	$('.mob_menu_btn').click(function(){
		$(this).toggleClass('open');
		$('.menu_mobile_wrapper').slideToggle(500);
	});
	$('.btn_appeal').click(function(e){
		e.preventDefault();
		$('.modal-wrapper').css('display', 'flex')
	});
	$('.close_modal').click(function(){
		$('.modal-wrapper').css('display', 'none')
	});
	$("#tel").mask("+38(999) 999-9999");
	$('#form_id #name').onkeypress(function validName(input) { 
		var value = input.value; 
		var rep = /[-\.;":'a-zA-Zа-яА-Я]/; 
		if (rep.test(value)) { 
			value = value.replace(rep, ''); 
			input.value = value; 
		} 
	});

});