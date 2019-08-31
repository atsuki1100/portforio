window.draw_graph = -> 
    ctx = document.getElementById("myChart").getContext('2d')
    myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ["Rails", "Ruby", "HTML5", "CSS3", "jQuery", "github", "AWS", "Linux", "sql"],
        datasets: [
          {
            label: '技術度',
            backgroundColor: "rgba(255,66,66,0.5)",
            borderColor: "rgba(255,66,66,1)",
            pointBackgroundColor: "rgba(255,66,66,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            hitRadius: 5,
            data: [65, 55, 70, 65, 56, 75, 60, 50, 50]
          }
        ]
      },
      options: {
            scales: {
                  ticks: {
                    display: true,
                    stepSize: 10,
                    beginAtZero:true
                    min: 0,
                    max: 100,
                  }
            }
        }
    })