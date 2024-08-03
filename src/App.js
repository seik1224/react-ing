import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import data from "./data";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

function App() {
  let [database, setDatabase] = useState(data);

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link
              className="text-white ml-6 mr-4 opacity-70 hover:!opacity-100"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-white mr-4 opacity-70 hover:!opacity-100"
              to="about"
            >
              About
            </Link>
            <Link
              className="text-white mr-4 opacity-70 hover:!opacity-100"
              to="detail"
            >
              Detail
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Swiper 코드 작성 */}
              <Swiper navigation={true} pagination={{type:'fraction'}} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                  <img src={`${process.env.PUBLIC_URL}/bg1.jpg`} />
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
              </Swiper>

              <div className="container my-32">
                <div className="row">
                  {data.map((v, i) => {
                    return (
                      <Card
                        database={database[i]}
                        i={i + 1}
                        key={i}
                        mt={i === 1 ? "mt-16" : null}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          }
        />

        {/* 
            Route 코드 작성

            /about 경로에 소개페이지 컴포넌트 만들기
            /detail 경로에 Detail 컴포넌트 만들기

        */}
      </Routes>
    </>
  );
}

function Card(props) {
  return (
    <div className={`col-md-4 text-center ${props.mt}`}>
      <img
        className="mb-2 rounded-3xl"
        src={`${process.env.PUBLIC_URL}/thumb${props.i}.jpg`}
        alt=""
      />
      <h4 className="text-6xl en-txt mb-2 text-[#ff541e]">
        {props.database.title}
      </h4>
      <p className="text-2xl en-txt">{props.database.price}</p>
      <p className="mb-2">{props.database.content}</p>
    </div>
  );
}

export default App;
