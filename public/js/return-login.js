

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
        let req = await fetch("/api/users/login",{
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                name: name,
                password: password 
            })
        });

        if (req.ok){
            document.location.reload();
        }
        else
        {
            alert("Incorrect email or password. Please try again");
        }
    } 
    catch
    {
        alert("Incorrect email or password. Please try again");
    }


}

document.getElementsByClassName("finalize")[0].addEventListener("click", onSubmit);
