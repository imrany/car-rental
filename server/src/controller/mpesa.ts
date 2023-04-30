import axios from 'axios'
import pool from "../postgres.js"
import { stkRequest } from '../types';
import * as dotenv from 'dotenv'
dotenv.config()

function formated(){
    const dt=new Date;
    let m=dt.getMonth()
    m++
    const month=m<10?`0${m}`:m
    const YmdHMS=`${dt.getFullYear()}${month}${dt.getDate()}${dt.getHours()}${dt.getMinutes()}${dt.getSeconds()}`
    return YmdHMS;
}

//generate password
const newPassword=()=>{
    const YmdHMS=formated()
    const passString=`${process.env.SHORT_CODE}${process.env.PASSKEY}${YmdHMS}`;
    const base64string=Buffer.from(passString).toString('base64')
    return base64string;
}

//token
export const token=(req:any,res:any,next:any)=>{
    const url= 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
    const auth= 'Basic ' + Buffer.from(process.env.CONSUMER_KEY +':'+ process.env.CONSUMER_SECRET).toString('base64'); 
    const headers={ 
        Authorization: auth 
    };
    axios.get(url,{
        headers:headers
    }).then((response)=>{
        let data=response.data;
        let access_token=data.access_token;
        req.token=access_token;
        next();
    })
    .catch(err=>res.send({error:err.message}));
}

//stk push
export const stkPush=(req:stkRequest,res:any)=>{
 const {phoneNumber,amount}=req.body;
 const token=req.token;
 const headers={
    Authorization:'Bearer '+token
 };
 const stkURL='https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
 let data={
    "BusinessShortCode": process.env.SHORT_CODE,//for Till use store number
    "Password": newPassword(),
    "Timestamp": formated(),
    "TransactionType": "CustomerPayBillOnline",//for Till use -> CustomerBuyGoodsOnline
    "Amount": amount,
    "PartyA": `254${phoneNumber}`, //254703730090
    "PartyB": process.env.SHORT_CODE,
    "PhoneNumber": `254${phoneNumber}`, //254703730090
    "CallBackURL": process.env.CALLBACK_URL, 
    "AccountReference": process.env.ACCOUNT_REF,
    "TransactionDesc": process.env.TRANSACTION_DESC
 };
 axios.post(stkURL,data,{
    headers:headers
 }).then(response=>res.send(response.data))
 .catch(err=>res.send({error:err.response.data}))
}

//callback 
// export const callBack=async(req:any,res:any)=>{
//     try {
//         const {MerchantRequestID,ResultCode,ResultDesc,CallbackMetadata}=req.body.Body.stkCallback;
//         if(CallbackMetadata){
//             const stored=await Transaction.create({
//                 MerchantRequestID,
//                 ResultCode,
//                 ResultDesc,
//                 amount:CallbackMetadata.Item[0].Value,
//                 MpesaReceiptNo:CallbackMetadata.Item[1].Value,
//                 TransactionDate:CallbackMetadata.Item[3].Value,
//                 PhoneNumber:CallbackMetadata.Item[4].Value
//             });

//               res.send({msg:"Recieved"})
//               console.log({msg:"Transaction process was successfull"},stored)
//         }else{
//             res.send({msg:"Recieved"})
//             console.log({msg:"Transaction process was cancelled"},req.body)
//         }
//     } catch (error:any) {
//         res.status(500).send({error:error.message})
//     }
// }

//get transactions
// export const getTransaction=async(req:any,res:any)=>{
//     try {
//         const transc=await Transaction.find({});
//         res.send({msg:"transaction data", transc})
//     } catch (error:any) {
//         res.status(500).send({error:error.message})
//     }
// }