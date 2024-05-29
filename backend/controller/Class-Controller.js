const bcrypt=require('bcryptjs')
const GetClasss=async(req,res)=>{
    res.send('welcome to getclfas')
}

const GetClass=async(req,res)=>{
    res.send('welcome to getsdffdclas')
    let salt=await bcrypt.genSalt(10)
    let hasps=await bcrypt.hash(req.body.Password,salt)
    console.log(hasps)
}


const AddClass=async(req,res)=>{
    res.send('welcome to getcdslas')
}


const UpdateClass=async(req,res)=>{
    res.send('welcome to getclas')
}

const DeleteClass=async(req,res)=>{
    res.send('welcome to getclas')
}

module.exports={GetClass,GetClasss,AddClass,UpdateClass,DeleteClass}