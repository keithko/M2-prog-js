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
        g.fillStyle = "red";
        g.moveTo(30,10);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.lineTo(20,30)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "blue";
        g.moveTo(20,30);
        g.lineTo(60,40);
        g.lineTo(60,60);
        g.lineTo(20,50);
        g.lineTo(20,30);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "yello";
        g.moveTo(60,40);
        g.lineTo(60,60);
        g.lineTo(80,50);
        g.lineTo(80,30)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(80,30);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "white";
        g.moveTo(59,49);
        g.lineTo(59,45);
        g.lineTo(20,35);
        g.lineTo(20,39);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(36,44);
        g.lineTo(37,39);
        g.closePath();
        g.stroke();
        g.fill()


    }
}

let app = new App();
app.runApplication();