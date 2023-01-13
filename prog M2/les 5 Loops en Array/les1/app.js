class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier
        let arr = ["Will Smith", "Eminem", "Snoop Dog","Pharrell Williams", "Ryan Reynolds", "Tom Holland"]
        console.log(arr)

        let headers = document.getElementsByTagName("bandname")
        let header = document.getElementsByTagName("h1")

        headers[0].innerHTML =arr[0]
        headers[1].innerHTML =arr[1]
        headers[2].innerHTMl =arr[2]
        headers[3].innerHTML =arr[3]
        
        for(let i = 0; i < headers.length; i++){
            headers[i].innerHTML = arr[i];
        }
    }
}

let app = new App();
app.runApplication();