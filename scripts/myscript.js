$(document).ready(function(){

	function getFibonacci(position){
		if (position==1 || position==0 ){
			return 1;
		}else{
			return  getFibonacci(position-1)+ getFibonacci(position-2);
		}
	}	

	function Even(fibresult,even){
		var even = fibresult%2;
		if (even == 0){
			return "turn-blue";
		}else
			return "turn-red";
		}

	$("form").on("submit", function(event){
	event.preventDefault();

		var position = parseInt($("input#position").val());
		var fibresult= getFibonacci(position);
		var even;
		var Evenresult = Even(fibresult,even);

			$("#tabl").append( "<tr><td>"+position+"</td><td class="+ Evenresult +">" +fibresult+"</td></tr>" );
	})
})