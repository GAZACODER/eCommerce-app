import React, { Component } from "react";
import "./style.css";
import text from "../../assets/jsonFile/text";
import image from "../../assets/image/image.svg";
import image1 from "../../assets/image/image1.svg";
import image2 from "../../assets/image/image2.svg";
import image3 from "../../assets/image/image3.svg";
import Typography from "../typography/typography";
const { bottomHeader, Header } = text;

const bottomHead = Object.values(bottomHeader);

const header = () => {
  return (
    <>
      <div className="header">
        <div className="header__top">
          <div className="header__top__left">
            <div className="header__top__left__title">
              {Header.contact.title}
            </div>
            <div>{Header.contact.phone}</div>
            <div>{Header.contact.email}</div>
          </div>
          <div className="header__top__right">
            <div>{Header.rightHeader.item1}</div>
            <div>{Header.rightHeader.item2}</div>
            <div>{Header.rightHeader.item3}</div>
          </div>
        </div>
        <div className="header__med">
          <div>
            <h1>{Header.midHeader.item1}</h1>
          </div>
          <div className="header__search">
            <Typography classN="Button" content={Header.midHeader.item2} />
            <img src={image} className="header__search__bottom__arrow" />{" "}
            <hr className="header__search__hr" />{" "}
            <input
              className="header__search__input"
              type="text"
              placeholder={Header.midHeader.item3}
            />
            <img src={image1} />
          </div>
          <div className="header__med__right">
            <img src={image2} /> <img src={image3} />
          </div>
        </div>
        <div className="header__bottom">
          <ul className="header__bottom__ul">
            {bottomHead.map((e, index) => (
              <li className="header__bottom__li" key={index}>
                <Typography classN="S5" content={e} /> <img src={image} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default header;
