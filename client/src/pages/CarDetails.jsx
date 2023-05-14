import React, { useEffect, useState } from "react";

import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import { toast } from "react-hot-toast";

const CarDetails = () => {
  const { slug } = useParams();
  const [ifReserved,setIfReserved]=useState(null)
  const [Btn,setBtn]=useState(null)
  
  const singleCarItem = carData.find((item) => item.carName === slug);
  
  async function seeIfReserved(){
    try {
      const url=`http://localhost:8000/api/reserve_car/${singleCarItem.id}`
      const response=await fetch(url)
      const parseRes=await response.json();
      if (parseRes.not_reserved){
        setBtn(parseRes.not_reserved)
        setIfReserved(
          <p style={{color:'#fff', fontSize:'small', background:"green", padding:"9px 20px",borderRadius: '50px'}} title="This car is available">
            {parseRes.not_reserved}
          </p>
        )
      }else if(parseRes.reserved){
        setBtn(parseRes.reserved)
        setIfReserved(
        <p style={{color:'#fff', fontSize:'small', background:"#333", padding:"9px 20px",borderRadius: '50px'}} title="This car is already reserved">
          <i className="ri-lock-fill" style={{ marginRight:"10px" }}></i> {parseRes.reserved}
        </p>
        )
      }else if (parseRes.error.code){
        toast.error(parseRes.error.code)
        console.log(parseRes.error)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    seeIfReserved();
  }, [singleCarItem]);


  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <div style={{display:'flex',flexWrap:'wrap', justifyContent:'space-between'}}>
                  <h2 className="section__title">{singleCarItem.carName}</h2>
                  {ifReserved}
                </div>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    KSH{singleCarItem.price}.00 / Day
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.speed}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.seatType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col>

            <BookingForm price={singleCarItem.price} car_id={singleCarItem.id} Btn={Btn}/>

            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
