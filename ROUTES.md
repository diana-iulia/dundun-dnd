# Routes

## GET

/ - Home page - Introduction to app 
    >LOGIN/LOGOUT
    >demo video clip 
    >

![](./photos/homepage.png)

/login - Where the user logs in

/register - Where the user creates an account

/dashboard
    - Where the user can see their characters and campaigns
    - Where the user can create a new campaign

        /dashboard/campaign - Where the users can create a new campaign 
        -name
        -brief description

            /dashboard/ - Where the users can create a new npc
            -Name
            -alignment 
            -hp 
            -description



## POST

/api/users - CREATE a new user

/api/users/login - CREATE logged in session data

/api/npc - CREATE new flash cards

/api/campaign