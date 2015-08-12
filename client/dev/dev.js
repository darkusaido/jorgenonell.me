$(document).ready(function(){
	var localHour = parseInt((moment(moment.utc().toDate()).format('HH')), 10);
	var source = '';
	console.log(localHour)
	if(localHour < 6 || localHour > 19){
		source = 'img/night.jpg';
	}
	else if((localHour >= 6 && localHour < 8) || (localHour >= 18 && localHour < 20)){
		source = 'img/riseset.jpg';
	}
	else {
		source = 'img/day.jpg';
	}
	$('#main_img').attr("src",source);
});