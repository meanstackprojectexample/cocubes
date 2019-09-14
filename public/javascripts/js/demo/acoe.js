$(document).ready(function(){
  var pre = $("#ece").val();
  var pre1 = $("#cse").val();
  var pre2 = $("#eee").val();
  var pre3 = $("#mech").val();
  var pre4 = $("#ce").val();
  var pre5 = $("#it").val();
  var pre6 = $("#pte").val();
  var pre7 =$("#age").val();
var ctx = document.getElementById("myBarChart1");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["ECE", "CSE", "EEE","MECH","CIVIL","IT","PTE","AGE"],
    datasets: [{
      label: "Percentage",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [pre,pre1,pre2,pre3,pre4,pre5,pre6,pre7],

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
          maxTicksLimit: 8,
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
