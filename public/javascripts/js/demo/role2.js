$(document).ready(function(){
  var its_cnt1 = $("#good6").val();
  var its_cnt2 = $("#train6").val();
  var its_cnt3 = $("#practice6").val();
  var itp_cnt1 = $("#good7").val();
  var itp_cnt2 = $("#train7").val();
  var itp_cnt3 = $("#practice7").val();
  var kpo_cnt1 = $("#good8").val();
  var kpo_cnt2 = $("#train8").val();
  var kpo_cnt3 = $("#practice8").val();
var ctx = document.getElementById("myBarChart2");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["ITProduct", "ITServices", "KPO", "NetworkAdministrator"],
 datasets: [
        {
          label: "Good to go",
          backgroundColor: "darkblue",
          data: [its_cnt1,itp_cnt1,kpo_cnt1]
        },{
          label: "Need training",
          backgroundColor: "skyblue",
          data: [its_cnt2,itp_cnt2,kpo_cnt2]
        },

       

         {
          label: "Need Practice",
          backgroundColor: "#337ab7",
          data: [its_cnt3,itp_cnt3,kpo_cnt3]
        }
      ]
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 3000,
          maxTicksLimit: 10  ,
          padding: 10,
          
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: true
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
          },
  }
});
});