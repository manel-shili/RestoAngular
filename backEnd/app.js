//import express
const express = require ('express');

const mongoose = require('mongoose');
const bodyParser = require('./models/user');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
const app = express();
mongoose.connect('mongodb://localhost:27017/fullStackJuillet', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
  });
  

//traitemnt logique 
//CRUD Admin
app.get('/admins', (req,res)=>{
    console.log('here into Get ALL admins');
});

app.get('/admins/:id', (req,res)=>{
    console.log('here into get user by id');

});
app.delete('/admins/:id', (req,res)=>{
    console.log('here into delete admin');
});

app.post('/addAdmin', (req,res)=>{
    console.log('here into add admin');
});

app.put('/admins/:id' , (req,res)=>{
    console.log('here into edit admin');
});

//CRUD chefs
app.get('/chefs', (req,res)=>{
    console.log('here into Get ALL chefs');
});

app.get('/chefs/:id', (req,res)=>{
    console.log('here into get chefs by id');

});
app.delete('/chefs/:id', (req,res)=>{
    console.log('here into delete chef');
});

app.post('/chefs', (req,res)=>{
    console.log('here into add chef')
});

app.put('/chefs/:id' , (req,res)=>{
    console.log('here into edit chef')
});
module.exports = app;