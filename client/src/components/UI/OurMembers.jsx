import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";

const OUR__MEMBERS = [
  {
    name: "Riggy G",
    experience: "10 years of experience",
    fbUrl: "https://facebook.com/imrany",
    instUrl: "https://instagram.com/imrany",
    twitUrl: "https://twitter.com/matano_imran",
    linkedinUrl: "https://linkedin.com/",
    imgUrl: ava01,
  },

  {
    name: "Jeff Koinange",
    experience: "10 years of experience",
    fbUrl: "https://facebook.com/imrany",
    instUrl: "https://instagram.com/imrany",
    twitUrl: "https://twitter.com/matano_imran",
    linkedinUrl: "https://linkedin.com/",
    imgUrl: ava02,
  },

  {
    name: "Truphosa Magdalena",
    experience: "10 years of experience",
    fbUrl: "https://facebook.com/imrany",
    instUrl: "https://instagram.com/imrany",
    twitUrl: "https://twitter.com/matano_imran",
    linkedinUrl: "https://linkedin.com/imrany",
    imgUrl: ava03,
  },

  {
    name: "Josinta Maria",
    experience: "10 years of experience",
    fbUrl: "https://facebook.com/imrany",
    instUrl: "https://instagram.com/imrany",
    twitUrl: "https://twitter.com/matano_imran",
    linkedinUrl: "https://linkedin.com/imrany",
    imgUrl: ava01,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <a href={item.fbUrl} target="_blank" rel="noreferrer">
                  <i class="ri-facebook-line"></i>
                </a>
                <a href={item.twitUrl} target="_blank" rel="noreferrer">
                  <i class="ri-twitter-line"></i>
                </a>

                <a href={item.linkedinUrl} target="_blank" rel="noreferrer">
                  <i class="ri-linkedin-line"></i>
                </a>

                <a href={item.instUrl} target="_blank" rel="noreferrer">
                  <i class="ri-instagram-line"></i>
                </a>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
