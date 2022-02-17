# Routes

## GET

/ - Home page - 
    >Introduction to app (click to disappear)
    >demo video clip 
    >navbar with login

    ![](./photos/homepage.png)

/login 
    - Where the user can log in or create an account

then user is redirected to 

/campaigns
    - button to create new campaigns    
    leads to 
        /dashboard/campaigns/new - Where the users can create a new campaign 
            -name
            -brief description

            /dashboard/campaign/add - Where the users can create a new npc
            -Name
            -alignment 
            -hp 
            -description

    - see all campaigns
    when user clicks on a campaign
        /dashboard/campaign/:id

        /dashboard/campaign/npcs - Where the users can create a new npc
            -Name
            -alignment 
            -hp 
            -description



## POST

/api/users - CREATE a new user

/api/users/login - CREATE logged in session data

/api/npc - CREATE new flash cards

/api/campaign