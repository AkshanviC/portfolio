import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Fornt End Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__icon"></BiCheck>
              <p>Single Page web application</p>
            </li>
            <li>
              <BiCheck className="service__icon"></BiCheck>
              <p>Portfolio</p>
            </li>
            <li>
              <BiCheck className="service__icon"></BiCheck>
              <p>React web applications</p>
            </li>
            <li>
              <BiCheck className="service__icon"></BiCheck>
              <p>Migration to React</p>
            </li>
            <li>
              <BiCheck className="service__icon"></BiCheck>
              <p>Upgrade to React</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Back End Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__icon"></BiCheck>
              <p>Node Server</p>
            </li>
            <li>
              <BiCheck className="service__icon"></BiCheck>
              <p>Database management (MongoDb)</p>
            </li>
            <li>
              <BiCheck className="service__icon"></BiCheck>
              <p>NodeJs Application with ejs</p>
            </li>
            <li>
              <BiCheck className="service__icon"></BiCheck>
              <p>Migration to NodeJs</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Conent creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__icon"></BiCheck>
              <p>text content</p>
            </li>
            <li>
              <BiCheck className="service__icon"></BiCheck>
              <p>Audio content</p>
            </li>
            <li>
              <BiCheck className="service__icon"></BiCheck>
              <p>video content</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;
