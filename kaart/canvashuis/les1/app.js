class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        
        console.log(canvas)
        //line
        g.beginPath();
        g.fillStyle = "lightblue";
        g.moveTo(0,0);
        g.lineTo(1200,0);
        g.lineTo(1200,400);
        g.lineTo(0,400)
        g.lineTo(0,0);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "lightgreen";
        g.moveTo(0,400);
        g.lineTo(1200,400);
        g.lineTo(1200,1200);
        g.lineTo(0,1200)
        g.lineTo(0,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle  = "yellow"
        g.arc(600, 399, 100, 1 * Math.PI,2 * Math.PI);
        g.stroke()
        g.fill();

        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(150,250);
        g.lineTo(120,350);
        g.lineTo(180,350)
        g.lineTo(150,250)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "gray";
        g.moveTo(400,1200);
        g.lineTo(580,400);
        g.lineTo(620,400)
        g.lineTo(800,1200)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "#cfd5d8";
        g.moveTo(0,500);
        g.lineTo(200,500);
        g.lineTo(200,700);
        g.lineTo(0,700)
        g.lineTo(0,0);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "#9c6cc9";
        g.moveTo(0,500);
        g.lineTo(200,500);
        g.lineTo(100,340);
        g.lineTo(0,500)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(200,500);
        g.lineTo(400,300);
        g.lineTo(330,220);
        g.lineTo(100,340)
        g.lineTo(200,500)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "#e08c27";
        g.moveTo(400,300);
        g.lineTo(400,400);
        g.lineTo(200,700);
        g.lineTo(200,500);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "#cfd5d8";
        g.moveTo(0,800);
        g.lineTo(300,800);
        g.lineTo(300,1100);
        g.lineTo(0,1100);
        g.lineTo(0,800);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "#9c6cc9";
        g.moveTo(0,800);
        g.lineTo(160,650);
        g.lineTo(300,800);
        g.lineTo(0,800)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(300,800);
        g.lineTo(160,650);
        g.lineTo(380,410);
        g.lineTo(435,530)
        g.lineTo(300,800)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "#e08c27";
        g.moveTo(300,1100);
        g.lineTo(300,800);
        g.lineTo(435,530);
        g.lineTo(440,630);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "#cfd5d8";
        g.moveTo(1200,700);
        g.lineTo(1000,700);
        g.lineTo(1000,500);
        g.lineTo(1200,500);
        g.lineTo(1200,700);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "#9c6cc9";
        g.moveTo(1200,500);
        g.lineTo(1000,500);
        g.lineTo(1100,360);
        g.lineTo(1200,500)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(1000,500);
        g.lineTo(1100,360);
        g.lineTo(860,240);
        g.lineTo(800,300);
        g.lineTo(1000,500)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "#e08c27";
        g.moveTo(800,300);
        g.lineTo(800,400);
        g.lineTo(1000,700);
        g.lineTo(1000,500);
        g.lineTo(800,300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(970,600);
        g.lineTo(1040,650);
        g.lineTo(1000,400)
        g.lineTo(970,600)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "#cfd5d8";
        g.moveTo(1200,1100);
        g.lineTo(900,1100);
        g.lineTo(900,800);
        g.lineTo(1200,800);
        g.lineTo(1200,1100);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "#9c6cc9";
        g.moveTo(900,800);
        g.lineTo(1200,800);
        g.lineTo(1040,550);
        g.lineTo(900,800)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(1040,550);
        g.lineTo(840,420);
        g.lineTo(760,540);
        g.lineTo(900,800)
        g.lineTo(1040,550)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "#e08c27";
        g.moveTo(900,800);
        g.lineTo(900,1100);
        g.lineTo(770,650);
        g.lineTo(760,540);
        g.lineTo(900,800);
        g.closePath();
        g.stroke();
        g.fill()
    }
}

let app = new App();
app.runApplication();