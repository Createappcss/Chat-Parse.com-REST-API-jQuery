$(document).ready(function(){
	var parseApplicationId="GWfc40Z9WBlQdIBHaBR1cUdtIozM95e4Htsos2ui";
	var parseJavaScriptKey="oWsqyU28JLe57f3yBK3aXh0ezC0dGvD3V8cXQHsm";
	Parse.initialize(parseApplicationId, parseJavaScriptKey);
	var Test = Parse.Object.extend("Test");
	var test = new Test();
	test.save({
	name: "John",
	text: "hi"}, {
		success: function(object) {
		console.log("Parse.com object is saved: "+object);
	},
	error: function(object) {
		console.log("Error! Parse.com object is not saved: "+object);
	}
	});
})
