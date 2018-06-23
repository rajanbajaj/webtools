/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

$(".hello").click(function(){
	console.warn("Log a warn level message.");
	console.error("Log an error level message!");
});
