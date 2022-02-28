

const onSubmit = async () => {

    try {
        await fetch("/api/users/logout",{
            method: "POST"
        });
    }
    catch{}

    let name = document.getElementsByClassName("userName")[0].value;
    let password = document.getElementsByClassName("userPassword")[0].value;

    try {
        let req = await fetch("/api/users/register",{
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                name: name,
                email: name + "@gmail.com",
                password: password 
            })
        });

        if (req.ok){
            document.location.reload();
        }
        else
        {
            let messsage = await req.json();

            console.log(req);
            console.log(messsage.message);
            alert(messsage.message);
        }
    } 
    catch
    {
        alert("Something went wrong. Please try again");
    }


}

document.getElementsByClassName("finalize")[0].addEventListener("click", onSubmit);
