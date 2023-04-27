import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import Select from "react-select";

const options=[
  {
    label:"Low to High",
    value:"low"
  },
  {
    label:"High to Low",
    value:"high"
  }
]

const CarListing = () => {
  const [selectedOption,setSelectedOption]=useState({})
  switch (selectedOption.value) {
    case "low":
      carData.sort((a,b)=>{
        return a.price-b.price
      })
      break;
    case "high":
      carData.sort((a,b)=>{
        return b.price-a.price;
      })
      break;
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[carData])
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <Select
                  defaultValue="Sort by price"
                  options={options}
                  onChange={setSelectedOption}
                />
              </div>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
