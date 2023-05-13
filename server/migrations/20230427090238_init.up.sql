-- Add up migration script here
create table cars(
    car_id varchar not null primary key,
    brand varchar not null,
    rating int not null,
    carName varchar not null,
    imgUrl varchar not null,
    model varchar not null,
    price int not null,
    speed varchar not null,
    gps varchar not null,
    seatType varchar not null,
    reserved boolean default false,
    automatic varchar not null,
    AC_type varchar,
    description varchar not null
);
create index car_idx on cars (car_id);

-- reserved
create table reserved_cars(
    car_id varchar primary key not null,
    firstName varchar not null,
    lastName varchar not null,
    email varchar not null,
    phoneNumber int not null,
    numberOfDays varchar not null,
    numberOfLuggage varchar not null,
    numberOfPerson varchar not null,
    drive varchar not null,
    fromAddress varchar not null,
    toAddress varchar not null,
    journeyTime varchar not null,
    journeyDate varchar not null,
    amount int not null,
    reason varchar,
    transactionOption varchar not null,
    MerchantRequestID varchar not null

);
create index reserved_idx on reserved_cars (car_id);

-- transaction
create table mpesa_transactions(
    phoneNumber int not null,
    amount int not null,
    MerchantRequestID varchar not null primary key,
    ResultCode varchar not null,
    ResultDesc varchar not null,
    MpesaReceiptNo varchar not null,
    TransactionDate varchar not null
);
create index mpesa_idx on mpesa_transactions (MerchantRequestID);

-- contact table
create table user_contact(
    user_name varchar not null,
    user_email varchar not null,
    user_message varchar not null
);