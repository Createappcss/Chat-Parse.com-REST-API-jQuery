var parseID='GWfc40Z9WBlQdIBHaBR1cUdtIozM95e4Htsos2ui';
var parseRestKey='Pe9qfxxcluCtBHyUrAXdPqevlxWLz6DIdkyoOGuT';

$(document).ready(function(){ //когда контент страницы загружен
	getMessages(); //получить сообщения
	$("#send").click(function(){ //и определите событие click на SEND
		var username = $('input[name=username]').attr('value'); //присваиваем значение поля username переменной
		var message = $('input[name=message]').attr('value'); //присваиваем значение поля message переменной
		console.log(username) // выводим значение переменной в терминал, далее отправляем новое сообщение, делая HTTP-вызов функциеи jQuery.ajax
		console.log('!'') 
		$.ajax({ 
     		url: "https://api.parse.com/1/classes/MessageBoard",
      		headers: {
        		'X-Parse-Application-Id': parseID,
        		'X-Parse-REST-API-Key': parseRestKey
      		},
			contentType: 'application/json',
			dataType: 'json',
			processData: false,
			data: JSON.stringify({
        		'username': username,
        		'message': message
      		}),
			type: 'POST',
			success: function() {
        		console.log('sent');
        		getMessages();
      		},
			error: function() {
				console.log('error');
			}
		});
	});
})

function getMessages(){
	$.ajax({
    	url: "https://api.parse.com/1/classes/MessageBoard",
    	headers: {
      		'X-Parse-Application-Id': parseID,
      		'X-Parse-REST-API-Key': parseRestKey
    },
    contentType: 'application/json',
    dataType: 'json',
    type: 'GET',
    success: function(data) {
    	console.log('get');
    	updateView(data);
	},
	error: function() {
    	console.log('error');
	}
	});
}

function updateView(messages){
	var table=$('.table tbody');
	table.html('');
	$.each(messages.results, function (index, value) {
		var trEl =$('<tr><td>'
      		+ value.username
      		+ '</td><td>'
      		+ value.message +
      		'</td></tr>');
		table.append(trEl);
	});
	console.log(messages);
}



