$(document).ready(function(){
	alert("hai");
	$('.edit').click(function()
	{
		
		var id =$(this).val();
		alert(id);
		$.post("/remove",{no:id},function(data){
			location.reload('/');

		});
	});
