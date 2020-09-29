const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const app = express();

var serviceAccount = require("./permissions.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://json-login.firebaseio.com"
});

const cors = require('cors')
app.use(cors({ origin: true }));


const DB = admin.firestore()


//CORS

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    if(req.session){
      res.header("mytoken",req.token);
    }
    next();
});

//Routes
app.get('/hello-world', (req,res) =>{
    return res.status(200).send('Hello World')
})

//Create
app.post('/users', (req,res) =>{
(async () => {
    try{
        await DB.collection('test').doc('/' + req.body.id + '/')
        .createUser({
            name:req.body.name,
            // email:req.body.email,
            // ip_address:req.body.ip_address,
            // gender:req.body.gender
        })

        return res.status(200).send();
        
    }catch(e){
        console.log(e)
        return res.status(500).send(e)
    }
})
})


//Reach


//Update

//Delete


//Exports the api to the Firestore Cloud Functions 
exports.app=functions.https.onRequest(app);