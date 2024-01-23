const mongoose =  require('mongoose');
const Schema = mongoose.Schema({


    name:{
        type: String,
        required: [true,"please enter your name"]

    },
    quantiy:{

        type: Number,
        required:[true,"enter a number"],
        default:0

    },
    price:{
        type:Number,
        required:[true,"price is needed"],
    },
    image:{
        type:String,
        required:[true,"image path is needed"]
    }
 
},{
    timestamp:true
})
const product =mongoose.model('Product' , Schema);

module.exports= product;