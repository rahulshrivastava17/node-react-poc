# node-react-poc: (Job Profile APP)

1. git clone https://github.com/rahulshrivastava17/node-react-poc.git
2. To install nodejs dependencies:
    -Get inside "node-react-poc" then run "npm install"
3. To install ReactJs dependencies
    -Get inside "node-react-poc/client" folder then run "npm install"
4. Setup Database
    - Using Mongodb cloud
        - Signup and Login in https://account.mongodb.com/account/login?signedOut=true
        - Setup database on mongoDB cloud by following Docs: https://docs.atlas.mongodb.com/tutorial/create-atlas-account/
        - Change "mongoURI" in default.json file.
           - To Copy mongo URI from Mongodb Cloud follow the following steps
            
              - Click on connect then popup will be displayed
              - Then click on second option "Connect your application" 
              - Copy code ex: mongodb+srv://rahul123:<password>@devconnector.buerg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
              - Replace password which you have created using "Database access" option in side menu section.
    
    
      OR
    
    - you can setup MongoDB by installing in local as well (for that can use mongodb doc. Ref: https://www.section.io/engineering-education/nodejs-mongoosejs-mongodb/)
     
5. Start nodejs server (To run API's): Run "npm start" or "node server" (Run this command inside "node-react-poc" location)
6. Start React app: Run "npm start" (Run this command inside "node-react-poc/client" location)

    
# Features of the App
- SignIn/ SignUp 
- Create/Edit/Delete/View Profle
- Add/Delete Qualifications
- Add/Delete Experiences
- Add/Delete Posts
- Like/ Dislike
- Reply to post
