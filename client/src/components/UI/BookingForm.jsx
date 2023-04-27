import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import Select from "react-select";
import masterCard from "../../assets/all-images/master-card.jpg";
import mpesa from "../../assets/all-images/mpesa.png";
import "../../styles/payment-method.css";
import {toast} from "react-hot-toast"

const persons=[
  {
    label:"1 Person",
    value:1
  },
  {
    label:"2 Person",
    value:2
  },
  {
    label:"3 Person",
    value:3
  },
  {
    label:"4 Person",
    value:4
  },
  {
    label:"5+ Person",
    value:"5+ person"
  }
]

const luggages=[
  {
    label:"1 luggage",
    value:1
  },
  {
    label:"2 luggage",
    value:2
  },
  {
    label:"3 luggage",
    value:3
  },
  {
    label:"4 luggage",
    value:4
  },
  {
    label:"5+ luggage",
    value:"5+ luggage"
  }
]
const days=[
  {
    label:"1 day",
    value:1
  },
  {
    label:"2 days",
    value:2
  },
  {
    label:"3 days",
    value:3
  },
  {
    label:"4 days",
    value:4
  },
  {
    label:"5+ days",
    value:"5+ days"
  }
]

const driveOption=[
  {
    label:"Self Drive",
    value:"Self Drive"
  },
  {
    label:"With A Drive",
    value:"With A Driver"
  }
]

const BookingForm = ({price}) => {
  const [numberOfPerson,setNumberOfPerson]=useState({})
  const [numberOfLuggage,setNumberOfLuggage]=useState({})
  const [numberOfDays,setNumberOfDays]=useState({})
  const [drive,setDrive]=useState({})

  const [transactionOption,setTransactionOption]=useState("");

  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState(0);
  const [fromAddress,setFromAddress]=useState("");
  const [toAddress,setToAddress]=useState("");
  const [journeyTime,setJourneyTime]=useState('');
  const [journeyDate,setJourneyDate]=useState("");
  const [text,setText]=useState("")

  const submitHandler = async(e) => {
    e.preventDefault()
    try {
      let url=`http://localhost:5000/api/reserve_car`
      const response = await fetch(url,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          numberOfDays,
          numberOfLuggage,
          numberOfPerson,
          drive,
          fromAddress,
          toAddress,
          journeyTime,
          journeyDate,
          text,
          transactionOption,
          price
        })
      })
      // document.getElementById("Form").reset()
      const parseRes=await response.json();
      function reserveProcessing(a){
        
      }
      toast.promise(
        reserveProcessing(parseRes),
         {
           loading: 'Processing car reservation...',
           success: <b>Car reserved!</b>,
           error: <b>Could not reserve.</b>,
         }
       );
      console.log(parseRes)
    } catch (error) {
      toast.error(error.message);
    }
  };


  return (
    <Form onSubmit={submitHandler} id="Form">
      <Container>
        <Row>
          <Col lg="7" className="mt-5">
            <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input type="text" placeholder="First Name" onChange={e=>setFirstName(e.target.value)} required/>
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input type="text" placeholder="Last Name" onChange={e=>setLastName(e.target.value)} required/>
              </FormGroup>

              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} required/>
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input type="number" placeholder="Phone Number" onChange={e=>setPhone(e.target.value)} required/>
              </FormGroup>

              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input type="text" placeholder="From Address" onChange={e=>setFromAddress(e.target.value)} required/>
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input type="text" placeholder="To Address" onChange={e=>setToAddress(e.target.value)} required/>
              </FormGroup>

              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <Select
                  placeholder="Select Number of person"
                  options={persons}
                  onChange={setNumberOfPerson}
                  required
                />
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
              <Select
                placeholder="Select Number of luggage"
                options={luggages}
                onChange={setNumberOfLuggage}
                required
              />
              </FormGroup>

              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <Select
                  placeholder="Select Number of days"
                  options={days}
                  onChange={setNumberOfDays}
                  required
                />
              </FormGroup>

              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <Select
                  placeholder="Self Drive"
                  options={driveOption}
                  onChange={setDrive}
                  required
                />
              </FormGroup>

              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input type="date" placeholder="Journey Date" onChange={e=>setJourneyDate(e.target.value)} required/>
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input
                  type="time"
                  placeholder="Journey Time"
                  className="time__picker"
                  required
                  onChange={e=>setJourneyTime(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <textarea
                  rows={5}
                  type="textarea"
                  className="textarea"
                  placeholder="Write"
                  onChange={e=>setText(e.target.value)}
                  required
                ></textarea>
              </FormGroup>
            </div>
          </Col>

          <Col lg="5" className="mt-5">
            <div className="payment__info mt-5">
              <h5 className="mb-4 fw-bold ">Payment Information</h5>
            <div className="payment">
              <label htmlFor="" className="d-flex align-items-center gap-2">
                <input disabled type="radio" value="direct bank transfer" onChange={e=>setTransactionOption(e.target.value)}/> Direct Bank Transfer
              </label>
            </div>

            <div className="payment mt-3">
              <label htmlFor="" className="d-flex align-items-center gap-2">
                <input disabled type="radio" value="cheque payment" onChange={e=>setTransactionOption(e.target.value)}/> Cheque Payment
              </label>
            </div>

            <div className="payment mt-3 d-flex align-items-center justify-content-between">
              <label htmlFor="" className="d-flex align-items-center gap-2">
                <input disabled  type="radio" value="master card" onChange={e=>setTransactionOption(e.target.value)}/> Master Card
              </label>

              <img src={masterCard} alt="" />
            </div>

            <div className="payment mt-3 d-flex align-items-center justify-content-between">
              <label htmlFor="" className="d-flex align-items-center gap-2">
                <input type="radio" value="mpesa" onChange={e=>setTransactionOption(e.target.value)}/> M-Pesa
              </label>

              <img src={mpesa} alt="" />
            </div>
            <div className="payment text-end mt-5">
              <button type="submit">Reserve Now</button>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default BookingForm;
