const mogoose = require('mongoose')
mogoose
.connect("mongodb://127.0.0.1:27017/todos")
.then(()=>{
    console.log("DB Ready To Use");
})
.catch((err)=>{
    console.log(err);
})