$(document).ready(function(){

	var localHour = parseInt((moment(moment.utc().toDate()).format('HH')), 10);
	var source = '';

	if(localHour < 6 || localHour > 19){
		source = 'img/night.jpg';
	}
	else if((localHour >= 6 && localHour < 8) || (localHour >= 18 && localHour < 20)){
		source = 'img/riseset.jpg';
	}
	else {
		source = 'img/day.jpg';
	}
	var mainImg = $('#main_img');
	//mainImg. 
	mainImg.attr("src",source);
});