//all requriment are here
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const product = require('./modules/productmodule')



//to show json file 
app.use(express.json())


//to use form url encoded for database update
app.use(express.urlencoded({extended:false}))


// this is home page route
app.get('/', function (req, res) {
  res.send('here is the home page bro ')
  console.log("|*you are in home page bro*|")
})



//product page route
app.get('/product' , async(req,res)=>{
  try {
    let  p1 = await product.find({})
    res.status(200).json(p1)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})

app.get('/product/:id', async  (req,res)=>{
  try {
     let {id} = req.params;
 let p2 = await product.findById(id);
    res.status(200).json(p2)

  } catch (error) {
    res.status(500).json({message: error.message})
  }
})




//blog page route
app.get('/blog', function (req, res) {
    res.send('here is the blog page for you ')
    console.log("|*you are in blog page bro*|")
  })

  //update of product 
  app.put('/product/:id', async (req,res)=>{

   try {
    let {id}= req.params;
    let p3 = await product.findByIdAndUpdate(id, req.body);
    //if product not found
    if(!p3){
      return res.status(404).json({message:`can not find any product with ID ${id}`})
    }
  
    res.status(200).json(p3)
   } catch (error) {
    console.log(error.message);
    res.status(500).json({messagebro: error.message})
   }

  })




//delete data from database
app.delete('/product/:id', async(req,res)=>{
  try {
    let {id}= req.params;
    let p4 = await product.findByIdAndDelete(id);
     
  
    if(!p4){
      return res.status(404).json({message:`can not find any product with ID ${id}`})
    }
  
    res.status(200).json(p4)
   } catch (error) {
    console.log(error.message);
    res.status(500).json({messagebro: error.message})
   }

 

})





//product page post route
  app.post('/product', async function (req, res) {
      
    try {
      let p = await product.create(req.body)
      res.status(200).json(p)
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message}
        )
    }



  })


  //app listining here ("porting is done here")
app.listen(3000 , ()=>{
    console.log("Server is running on port 3000 ");
})




//database setup here 
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://sahilsahoo:mongodb%409090@sahilapi.zcwlcff.mongodb.net/')
.then(()=>{
    console.log("connected to mongodb")
})
.catch((err)=>{
    console.log(err)
})