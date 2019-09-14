$(document).ready(function() {
    $('.example').DataTable( {
        dom: 'Bfrtip',
        "bPaginate": false,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
    $('.view').click(function()
	{
		var id=$(this).val();
		/*alert(id);*/
		$.post("/view",{no:id},function(data)
		{
			var a=JSON.stringify(data);
			/*alert(a);*/
			var parsedata=JSON.parse(a);
			// alert(parsedata[0].WrittenEnglish);
			// $("#tester").css("width", parsedata[0].WrittenEnglish);
			$(".AptitudePercent").css("width", parsedata[0].Aptitude+"%");
			$(".AptitudeText").html(parsedata[0].Aptitude+"%");
			$(".AnalyticalPercent").css("width", parsedata[0].Analytical+"%");
			$(".AnalyticalText").html(parsedata[0].Analytical+"%");
			$(".EnglishPercent").css("width", parsedata[0].English+"%");
			$(".EnglishText").html(parsedata[0].English+"%");
			$(".CodingPercent").css("width", parsedata[0].Coding+"%");
			$(".CodingText").html(parsedata[0].Coding+"%");
			
			

			// $("#id").val(parsedata[0]._id);
			// $("#wet").val(parsedata[0].WrittenEnglish);
			$("#studentroll").html(parsedata[0].RollNumber);
			$("#studentname").html(parsedata[0].StudentName);
			$("#studentcollege").html(parsedata[0].College);
			$("#Sem").html(parsedata[0].Sem);

			// $("#email1").val(parsedata[0].Email);
			// $("#telephone1").val(parsedata[0].Mobile);


			$("#studentroll").html(parsedata[0].RollNumber);
			$("#studentname").html(parsedata[0].StudentName);
			$("#studentcollege").html(parsedata[0].College);
			$("#studentbranch").html(parsedata[0].Branch);
			$("#studentsem").html(parsedata[0].Sem);
			$("#studentcore").html(parsedata[0].CorePlant);
			$("#studentcoreRd").html(parsedata[0].CoreRD);
			$("#studentites").html(parsedata[0].ITESBPO);
			$("#studentitproduct").html(parsedata[0].ITProduct);
			$("#studentitservices").html(parsedata[0].ITServices);
			$("#studentkpo").html(parsedata[0].KPO);
			$("#studentnetwork").html(parsedata[0].NetworkAdministrator);
			$("#studentoperations").html(parsedata[0].Operations);
			$("#studentsales").html(parsedata[0].Sales);
			$("#studentsoftware").html(parsedata[0].SoftwareTesting);
					});
			    
			} );

});
