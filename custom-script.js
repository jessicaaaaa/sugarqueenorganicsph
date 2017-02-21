$(document).ready(function(){ 

	$('.btn-login').click(function(e){
		e.preventDefault();

		if($("#admin-username").val() == '' || $("#admin-password").val() == ''){
			$('.ui.form').find('.lbl-invalid').css({'display' : 'inline-block'})
		} else {
			$('.ui.form').find('.lbl-invalid').css({'display' : 'none'})
		}
 	});


	$('#product-modal').click(function(){
        $('#modal-div').modal('show');    
     });

	$('#product-modal2').click(function(){
        $('#modal-div').modal('show');    
     });
});  