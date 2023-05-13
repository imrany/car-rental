import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";
import { toast } from "react-hot-toast";
import { preloader, preloaderOff } from "../components/preloader/preloader";

const socialLinks = [
  {
    url: "https://facebook.com/imrany",
    icon: "ri-facebook-line",
  },
  {
    url: "https://instagram.com/imrany00",
    icon: "ri-instagram-line",
  },
  {
    url: "https://linkedin.com/",
    icon: "ri-linkedin-line",
  },
  {
    url: "https://twitter.com/matano_imran",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('')
  
  
  async function submit(e){
    e.preventDefault();
    try {
      preloader()
      let url=`https://server-car-rental.onrender.com/api/contact`
      const response=await fetch(url,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({
          name,
          email,
          message
        })
      })
      document.querySelector("#Form").reset();
      const parseRes=await response.json();
      preloaderOff()
      if(parseRes.error){
        if(parseRes.error.code){
          toast.error(parseRes.error.routine)
        }else{
          toast.error(parseRes.error)
        }
      }else if(parseRes.msg){
        toast.success(parseRes.msg)
      }
    } catch (error) {
      preloaderOff()
      toast.error(error.message)      
    }
  }
  return (
    <Helmet title="Contact">
      <div className="preload"></div>
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form onSubmit={submit} id="Form">
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" onChange={(e)=>setName(e.target.value)} required/>
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" onChange={(e)=>setEmail(e.target.value)} required/>
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    onChange={(e)=>setMessage(e.target.value)}
                    required
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  Okore Road Millimani, Kisumu
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <a href="tel:+254 752260784" target="_blank" rel="noreferrer" style={{textDecoration:"none"}} className="section__description mb-0">+254 752260784</a>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <a href="mailto:austine@gmail.com" style={{textDecoration:"none"}} target="_blank" rel="noreferrer" className="section__description mb-0">
                    austine@gmail.com
                  </a>
                </div>


                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <a href={item.url}
                      key={index}
                      target="_blank"
                      rel="noreferrer"
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
