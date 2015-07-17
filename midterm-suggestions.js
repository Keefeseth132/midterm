$(document).on('ready', function(){

	$('#send-button').on('click', function(){
		var inputValue = $('#input-box').val()
		$('#input-box').val('')

		$('.container').append(inputValue)
	})

	$('#input-box').keypress(function (e) {
	  if (e.which === 13) {
	    $('#send-button').click();
	    return false;   
	  }
	});

})