import React, { useState } from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import Select from "react-select";
import { toast } from "react-hot-toast";

const options=[
  {
    label:"AC Car",
    value:"ac"
  },
  {
    label:"Non AC Car",
    value:"non-ac"
  }
]
const FindCarForm = () => {
  const [fromAddress,setFromAddress]=useState("");
  const [toAddress,setToAddress]=useState("");
  const [journeyDate,setJourneyDate]=useState("");
  const [journeyTime,setJourneyTime]=useState("");
  const [ACStatus,setACStatus]=useState("")

  async function handleSubmit(e){
    e.preventDefault()
    try {
      let url=`https://server-car-rental.onrender.com/api/find_car`
      const response=await fetch(url,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({
          fromAddress,
          toAddress,
          journeyDate,
          journeyTime,
          ACStatus
        })
      })
      document.querySelector(".form").reset();
      const parseRes=await response.json();

    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="From address" onChange={e=>setFromAddress(e.target.value)} required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="To address" onChange={e=>setToAddress(e.target.value)} required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" onChange={e=>setJourneyDate(e.target.value)} required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            onChange={e=>setJourneyTime(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <Select
            placeholder="AC Car"
            onChange={setACStatus}
            options={options}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn" type="submit">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
