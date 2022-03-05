
const main = async () => {
    const connect = require("./config/connection");
    const allModels = require("./models")

    /*
    for (const property in allModels)
    {
        
        console.log(property);
        await allModels[property].sync({force: true});
    }
    */
    //await connect.sync({force: true});
    await connect.drop();


    await connect.close();
}

main();