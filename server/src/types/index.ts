type contactBody={
    name:string,
    email:string,
    message:string
}
export interface contactItems{
    body:contactBody
}

type reserveBody={
    car_id:number,
    phoneNumber:number,
    amount:number,
    firstName:string,
    lastName:string,
    email:string,
    numberOfDays:string,
    numberOfLuggage:string,
    numberOfPerson:string,
    drive:string,
    fromAddress:string,
    toAddress:string,
    journeyTime:string,
    journeyDate:string,
    reason:string,
    transactionOption:string
}
export interface reserveRequest{
    body:reserveBody,
    token:string,
    data:reserveBody
}