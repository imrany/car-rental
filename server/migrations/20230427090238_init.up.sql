-- Add up migration script here
create table cars(
    id int not null primary key,
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
    description varchar not null
);
create index car_idx on cars (id);

-- reserved
create table reserved_cars(
    id int primary key not null,
    user_first_name varchar not null,
    user_last_name varchar not null,
    user_email varchar not null,
    user_phone_number int not null,
    from_address varchar not null,
    to_address varchar not null,
    number_of_person varchar not null,
    number_of_luggage varchar not null,
    number_of_day varchar not null,
    drive_detail varchar not null,
    taken_date date not null,
    journey_time time not null,
    reason varchar
);
create index reserved_idx on reserved_cars (id);