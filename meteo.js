$('#bVille').click( function(){
	var location = "https://www.prevision-meteo.ch/services/json/"+ $('#inVille').val();
	$.get(location , function (meteo) {

		var ville = meteo.city_info.name;
		var temperature = meteo.current_condition.tmp;
		var humidite = meteo.current_condition.humidity;
		var vent = meteo.current_condition.wnd_spd;
		var imageUrl = meteo.current_condition.icon;
		var mertemp = meteo.fcst_day_1.tmax;
		var jeutemp = meteo.fcst_day_2.tmax;
		var ventemp = meteo.fcst_day_3.tmax;
		var samtemp = meteo.fcst_day_4.tmax;



		$('#vil').append('<p>' + ville + '</p>');
		$('#prevision').append('<p> Aujourd hui la temperature est de ' + temperature + 'C° <img src=" ' + imageUrl + '"></p>');
		$('#prevision').append('<p> Le vent souffle a ' + vent + 'Km/h </p>');
		$('#prevision').append('<p> L humidité est de ' + humidite + '%</p>');

		$('#joursuivant').append('<p> Mercredi 11 juillet la temperature est de ' + mertemp + 'C° <img src=" ' + imageUrl + '"></p>');
		$('#joursuivant').append('<p> Jeudi 12 juillet la temperature est de ' + jeutemp + 'C° <img src=" ' + imageUrl + '"></p>');
		$('#joursuivant').append('<p> Vendredi 13 juillet la temperature est de ' + ventemp + 'C° <img src=" ' + imageUrl + '"></p>');
		$('#joursuivant').append('<p> Samedi 14 juillet la temperature est de ' + samtemp + 'C° <img src=" ' + imageUrl + '"></p>');

	});
});

 d = new Date(); 

  $('#dateheure').html(d.toLocaleDateString()+'  '+d.toLocaleTimeString()+'.')