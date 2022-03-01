// sending a fetch request when the finalize button is hit
document.querySelector(".createNPC").addEventListener("click", async () => {



    const icon_path = document.querySelector(".selectedCharacter").getAttribute("src")


    const name = document.querySelector(".userNPCName").value;
    const alignment_id = 1;
    const hp = document.querySelector(".userNPCHp").value;
    const description = document.querySelector(".userNPCDesc").value;
    const campaign_id =  window.location.pathname.split('/')[2] ; 
    console.log( campaign_id);

    const icon_id = icon_path.substring(11,icon_path.length-4);


    const data = await fetch("/api/users/newNPC", {
        method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                name: name,
                alignment_id: alignment_id,
                hp: hp,
                description: description,
                campaign_id: campaign_id,
                icon_id: icon_id
            })
    });

    if (data.ok)
    {
        document.location.href = "/campaign/" + campaign_id;
    }
    else
    {
        const msg = await data.json();
        alert(msg.message);
    }

});

const alignOverlay = document.querySelector('.alignOverlay');
const alignIcon = document.querySelectorAll('.alignIcon');
const selectedAlign = document.querySelector('.selectedAlignment');
const emptyAlign = document.querySelector('.userNPCAlign');
const alignWord = document.querySelector('.alignWord');

for (i=0; i<alignIcon.length; i++) {
    alignIcon[i].addEventListener('click', (event) => {
        var src = event.currentTarget.getAttribute('src');
        var alt = event.currentTarget.getAttribute('alt');
        console.log(event.currentTarget)
        selectedAlign.setAttribute('aria-enabled', true);
        emptyAlign.setAttribute('data-visible', false);
        selectedAlign.setAttribute('src', src);
        alignOverlay.setAttribute('aria-enabled', false)
        alignWord.textContent = alt;
    })
};

selectedAlign.addEventListener('click', () => {
    alignOverlay.setAttribute('aria-enabled', true);
});

emptyAlign.addEventListener('click', () => {
    alignOverlay.setAttribute('aria-enabled', true);
});



const emptyIcon = document.querySelector('.userNPCIcon');
const selectedCharacter = document.querySelector('.selectedCharacter');
const npcIconOverlay = document.querySelector('.npcIconOverlay');
const characterIcon = document.querySelectorAll('.characterIcon');

for (i=0; i<characterIcon.length; i++) {
    characterIcon[i].addEventListener('click', (event) => {
        var src = event.currentTarget.getAttribute('src');
        selectedCharacter.setAttribute('src', src);
        selectedCharacter.setAttribute('aria-enabled', true);
        npcIconOverlay.setAttribute('aria-enabled', false);
        emptyIcon.setAttribute('data-visible', false);
    });
};

emptyIcon.addEventListener('click', () => {
    npcIconOverlay.setAttribute('aria-enabled', true);
});

selectedCharacter.addEventListener('click', () => {
    npcIconOverlay.setAttribute('aria-enabled', true);
});


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


const randomName = document.querySelector('.randomName');

randomName.addEventListener('click', async () => {
    const getName = await fetch("/api/users/getRandomName", {
        method: "GET",
            // headers: {'Content-Type': 'application/json'}, 
    })
    txt = await getName.json();
    console.log(txt);
    document.getElementById('randomName').value = txt.message
})

