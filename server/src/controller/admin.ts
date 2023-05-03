const adminLogin=async(req:any,res:any)=>{
    try {
        const {Username,password}=req.body
        if(Username===process.env.ADMIN_USERNAME&&password===process.env.ADMIN_PASSWORD){
            res.status(201).send({msg:'Sucessfull login', link:'/admin/home'})
        }else{
            res.status(401).send({error:'Not Authorized'})
        }
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
}

export{
    adminLogin
}