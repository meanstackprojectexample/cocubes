$(document).ready(function(){
  var its_cnt1 = $("#good").val();
  var its_cnt2 = $("#train").val();
  var its_cnt3 = $("#practice").val();
  var itp_cnt1 = $("#good1").val();
  var itp_cnt2 = $("#train1").val();
  var itp_cnt3 = $("#practice1").val();
  var kpo_cnt1 = $("#good2").val();
  var kpo_cnt2 = $("#train2").val();
  var kpo_cnt3 = $("#practice2").val();

var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["ITProduct", "ITServices", "KPO", "NetworkAdministrator"],
 datasets: [
        {
          label: "Good to go",
          backgroundColor: "#66ff33",
          data: [its_cnt1,itp_cnt1,kpo_cnt1]
        },{
          label: "Need training",
          backgroundColor: "#ffff4d",
          data: [its_cnt2,itp_cnt2,kpo_cnt2]
        },

       

         {
          label: "Need Practice",
          backgroundColor: "#ff6666",
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
          max: 200,
          maxTicksLimit: 10,
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