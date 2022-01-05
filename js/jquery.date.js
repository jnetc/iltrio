//----- Lounas -----//
window.onload = function() {
	//Расчет кол-во недель
	Date.prototype.getWeek = function(){
		var d = new Date(+this);
		d.setHours(0,0,0);
		d.setDate(d.getDate()+4-(d.getDay()||7));
		return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
	};
	var day = ['Sununtai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai']
	var month = ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu']
	var week = 'Viikko'
	var d = new Date();
	//setText('calendar-day', day[d.getDay()]); //День недели строчный
	setText('calendar-date', d.getDate()); //День месяца
	setText('calendar-week', [d.getWeek()]+' '+week); // Номер недели
	//setText('calendar-day-month', d.getDate()+' '+d.getMonth());
	setText('calendar-month', month[d.getMonth()]);
	//setText('calendar-month-year', month[d.getMonth()]+' '+d.getFullYear()); //Месяц строчный + год

function setText(id, val) {
	if(val < 10){
	 val = '0' + val;
	}
	document.getElementById(id).innerHTML = val;
	}; 
};