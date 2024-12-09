# New Stride
A fitness tracker web application that provides workouts for you to follow based on your needs and body.

## Backend Setup

> [!IMPORTANT]
> This assumes that you already have an IDE, Git, and a MYSQL Database Manager installed.

Install Deno for windows<br>
```
irm https://deno.land/install.ps1 | iex
```
<i>Alternative Deno installations can be found at https://docs.deno.com/runtime/getting_started/installation/<br></i>

> [!WARNING] 
> Don't forget to add deno in the path environment if it is not installed through powershell

Clone the repository
```
git clone https://github.com/LaurenceTest/New-Stride
```
Establish your MYSQL Database<br>

> [!TIP]
> If you don't have a database installed yet, you can install XAMPP or MySQL Workbench

### Required properties of .env
- DB_NAME
    - The name of the database
- DB_PASSWORD
    - Password required to access the database
- DB_USERNAME
    - The username used to log into the database
- DB_HOST
    - Domain name of the database
- DB_PORT
    - Port of the database
- AI_API_KEY
    - API Key for Gemini LLM
- JWT_ACCESS_TOKEN
    - The key required to sign JWT


## Endpoints
**Users**
- ``` GET /user```
- ``` POST /user```
- ``` PUT /user```
<!-- List End -->
**Plans**
- ``` GET /user/plan```
<!-- List End -->
**Goals**
- ``` GET /user/goal```
- ``` POST /user/goal```
<!-- List End -->
**Workouts**
- ``` GET /user/workout/{amount}```
- ``` POST /user/workout```
- ``` PUT /user/workout```
<!-- List End -->
**Auth**
- ``` POST /auth/login```
- ``` GET /auth/logout```