// ailments: stress,
//			 pain,
//			 depression,
//    		 insomnia,
//			 lack of appetite,
//			 seizures,
//			 muscle spasms,
//			 nausea

strainObj = { 
	strains: [
	{name:'Cotton Candy Kush', 
	 type:'indica', 
	 THC:'13.83%', 
	 CBD:'0.5%', 
	 CBN:'0.24%', 
	 effects:'relaxed, happy', 
	 ailments: ['stress', 'pain', 'depression'],
	 image:'images/cckush.jpg'},

	 {name:'Grape Ape', 
	 type:'indica', 
	 THC:'15%-23%', 
	 CBD:'0.07%', 
	 CBN:'0.03%', 
	 effects:'relaxed, happy, sleepy', 
	 ailments: ['pain', 'stress', 'insomnia'],
	 image:'images/grape-ape.jpg'},

	 {name:'Alien OG', 
	 type:'indica', 
	 THC:'20%-28%', 
	 CBD:'0.1%-0.2%', 
	 CBN:'0.04%', 
	 effects:'relaxed, happy, euphoric', 
	 ailments: ['stress', 'pain', 'depression'],
	 image:'images/alien-og.jpg'},

	 {name:'Canna Tsu', 
	 type:'hybrid Cannatonic x sour tsunami', 
	 THC:'7.52%', 
	 CBD:'7.46%', 
	 CBN:'0.16%', 
	 effects:'relaxed, hungry', 
	 ailments: ['pain', 'lack of appetite', 'seizures', 'muscle spasms'],
	 image:'images/canna-tsu.jpg'},

	 {name:'Blue Dream', 
	 type:'hybrid blueberry indica x sativa haze', 
	 THC:'17%-24%', 
	 CBD:'0.1%-0.2%', 
	 CBN:'0.01%', 
	 effects:'happy, euphoric, relaxed', 
	 ailments: ['pain', 'depression', 'nausea'],
	 image:'images/blue-dream.jpg'},

	 {name:'Girl Scout Cookies', 
	 type:'hybrid OG kush x durbin poison', 
	 THC:'17%-28%', 
	 CBD:'0.09%-0.2%', 
	 CBN:'0.5%', 
	 effects:'happy, relaxed, euphoric', 
	 ailments: ['pain', 'nausea', 'lack of appetite'],
	 image:'images/girl-scout-cookies.jpg'},

	 {name:'Sour Diesel', 
	 type:'sativa', 
	 THC:'19%-25%', 
	 CBD:'0.1%-0.3%', 
	 CBN:'0.04%', 
	 effects:'happy, uplifted, euphoric', 
	 ailments: ['stress', 'depression', 'pain'],
	 image:'images/sour-diesel.jpg'},

	 {name:'LA Confidential', 
	 type:'indica', 
	 THC:'19%-25%', 
	 CBD:'0.08%-0.1%', 
	 CBN:'0.01%-0.04%', 
	 effects:'relaxed, sleepy, happy', 
	 ailments: ['pain', 'stress', 'insomnia'],
	 image:'images/la-confidential.jpg'},

	 {name:'Chemdawg', 
	 type:'hybrid unkown origins', 
	 THC:'18%-26%', 
	 CBD:'0.01%-0.1%', 
	 CBN:'0.05%', 
	 effects:'happy, euphoric, uplifted', 
	 ailments: ['stress', 'pain', 'nausea'],
	 image:'images/chemdawg.jpg'},

	 {name:'Skywalker OG', 
	 type:'hybrid skywalker x OG kush', 
	 THC:'18%-30%', 
	 CBD:'0.06%-0.2%', 
	 CBN:'0.01%-0.03%', 
	 effects:'relaxed, happy', 
	 ailments: ['stress', 'pain', 'depression'],
	 image:'images/skywalker-og.jpg'}
]}

$(document).on('ready',function(){

	var theTemplateScript = $('#flip-card').html();
	var theTemplate = Handlebars.compile(theTemplateScript);
	var cardTemplate;
	// var cardTemplate = $('#card-content-area').html(theTemplate(strainObj));
	

// get value of input
// create new arr of objs that match the input val for ailments
// if ailments = stress return true

	$('#search-button').on('click', function(){
		var searchResults = {strains:[]}
		var inputValue = $('#input-box').val()
		$('#input-box').val('')
		// console.log(inputValue)
		for(var i = 0; i < strainObj.strains.length; i++){
			strainObj.strains[i].ailments.forEach(function(ailment){
				
				if(inputValue === ailment){
				// console.log('this is true')
				// console.log(strainObj.strains[i])
				searchResults.strains.push(strainObj.strains[i])
				// console.log(searchResults)
				}		 
				else {
					// alert('Sorry, there are no results for your search');

				}
			})
		}

		cardTemplate = $('#card-content-area').html(theTemplate(searchResults));

	})

	$('#input-box').keypress(function (e) {
	  if (e.which === 13) {
	    $('#search-button').click();
	    return false;   
	  }
	});











})

