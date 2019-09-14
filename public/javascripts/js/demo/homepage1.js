$(document).ready(function(){
  var pre = $("#ece1").val();
  var pre1 = $("#cse1").val();
  var pre2 = $("#eee1").val();
  var pre3 = $("#mech1").val();
  var pre4 = $("#civil1").val();
  var pre5 = $("#it1").val();
  //alert(pre);
var ctx = document.getElementById("myBarChart1");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["ECE", "CSE", "EEE","MECH","CIVIL","IT"],
    datasets: [{
      label: "Percentage",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [pre,pre1,pre2,pre3,pre4,pre5],

    }],
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
          max: 100,
          maxTicksLimit: 5,
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
      display: false
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
