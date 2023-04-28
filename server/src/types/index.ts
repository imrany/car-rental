type contactBody={
    name:string,
    email:string,
    message:string
}
export interface contactItems{
    body:contactBody
}

type stkBody={
    phoneNumber:number,
    amount:number
}
export interface stkRequest{
    body:stkBody,
    token:string
}