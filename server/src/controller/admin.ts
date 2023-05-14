const adminLogin=async(req:any,res:any)=>{
    try {
        const {Username,password}=req.body
        let $adminName=process.env.ADMIN_USERNAME
        let $adminPassword=process.env.ADMIN_PASSWORD
        let secret=process.env.JWT_SECRET
        if(Username===$adminName&&password===$adminPassword){
            let token=Buffer.from($adminName+":"+$adminPassword+":"+secret).toString('base64')
            res.status(201).send({msg:'Sucessfull login', link:'/admin/home',token:token})
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