

const main = async () => {

    console.log("Is this working?");

    await fetch("/api/users/logout",{
        method: "POST"
    });

    await fetch("/api/users/login",{
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({
            name: "Sal",
            email: "sal@hotmail.com",
            password: "password12345"
        })
    }); 

}

main();
