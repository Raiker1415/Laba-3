var row = 0;
var timerId = 0;


function construction() {
	let color = 'grey';
	if (row % 2 == 0)
		color = '#e6e6fa';
	if (row == 0)
		color = 'rgb(55, 55, 55)';
	$("#table").map(function(index, elem) { return $(elem).children()[row]}).css("fontSize","30px",)
	.css("fontWeight","bold").css("background",color);
	return;
}

//Побудова полів, виведення з масива рядків.
/*
function construction() {
	$("#table").map(function(index, elem) { return $(elem).children()[row]});
	return;
}*/

//Побудова таблиці
function buildTable() { 
	$("#table").append(buildRow());
	construction();
	row += 1;
	return;
}

//Формування стобчиків і рядків в табличку
function buildRow() {
    var td = "<td>" + Math.random() + "</td>";
	for (var j = 1; j < 3; j++) {
		td += td;
		}
	return ("<tr>" + td + "</tr>");
}

//Виконання функції по натиску кнопки з айдішніком run-generation, вивід таблиці построчно із затримкою.
$(document).on('click', '#run-generation', function() {
	if (!timerId) {
			var appendInterval = parseFloat($("#timeout").val());
			buildTable();
			timerId = setInterval(
				buildTable,
				appendInterval	
			);
		}
	});

//Виконання функції по натиску кнопки з айдішніком stop-generation, припиняє регулярне виконання функції встановлене setinterval.
$(document).on('click', '#stop-generation', function() {
	clearInterval(timerId);
		timerId = 0;
	});