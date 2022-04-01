const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Action Diagram",
      data: [0, 1, 5, 60],
      borderColor: "#4F4282",
      backgroundColor: '#CCE8FE',
    },
  ],
};

// var canvas = document.querySelector("canvas");
// var ctx = canvas.getContext("2d");
// var gradient = ctx.createLinearGradient(0, 0, 0, 400);
// gradient.addColorStop(0, "rgba(251,189,8, 0.1)");
// gradient.addColorStop(1, "rgba(251,189,8, 1)");

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Action Diagram",
//       data: [27, 100, 86, 87, 45, 46, 55, 67],
//       borderColor: "#4F4282",
//       backgroundColor: gradient,
//     },
//   ],
// };

export const options = {
  maintainAspectRatio: false,
  // datasetStrokeWidth: 3,
  // pointDotStrokeWidth: 4,
  scales: {
    xAxes: {
      // display: false,
      grid: {
        display: true,
      },
    },
    yAxes: {
      // display: false,
      grid: {
        display: true,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.5,
      borderJoinStyle: "round",
    },
  },
};
