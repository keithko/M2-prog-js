class App
{
    runApplication()
    {
        //code gaat hier
        for (let tafel =1;tafel <= 10;tafel++)
        {
            for(let keer = 1; keer <=50; keer++)
            {
                console.log(tafel, "*",keer, "=",tafel *keer);
            }
        }
    }
}






let app = new App();
app.runApplication();