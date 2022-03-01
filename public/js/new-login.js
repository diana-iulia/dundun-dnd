

const onSubmit = async () => {

    try {
        await fetch("/api/users/logout",{
            method: "POST"
        });
    }
    catch{}

    let name = document.getElementsByClassName("userName")[0].value;
    let email = document.getElementsByClassName("userEmailForm")[0].value;
    let password = document.getElementsByClassName("userPassword")[0].value;

    try {
        let req = await fetch("/api/users/register",{
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                name: name,
                email: email,
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


const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    var menuStatus = menu.getAttribute('data-visible');
    if (menuStatus === "false") {
        menu.setAttribute('data-visible', true);
    } else {
        menu.setAttribute('data-visible', false);
    }
});