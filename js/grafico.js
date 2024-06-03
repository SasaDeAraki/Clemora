
document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById("myChart").getContext("2d");
    var data = {
        labels: [
            "Reciclado",
            "Incinerado",
            "Aterros / Meio ambiente"
        ],
        datasets: [{
            data: [9, 12, 79],
            backgroundColor: [
                "#76A2C0",
                "#1D3241",
                "#1E4B6A"
            ],
            hoverBackgroundColor: [
                "#6389A2",
                "#101B23",
                "#16384E"
            ]
        }]
    };
    
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: true
        }
    });
});
