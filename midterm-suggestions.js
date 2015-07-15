$(document).on('ready', function(){

	$('#send-button').on('click', function(){
		var inputValue = $('#input-box').val()

		$('.container').append(inputValue)
	})


})