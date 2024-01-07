"use client"
import React from "react";
import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFBgSFBUZGBIaHB0aGBgYHBgdHBwcHBgaHBoaGhocIS4lHCMtH..."
                alt=""
              />
              <span>David Suarez</span>
            </div>
            <div className="buttons">
              <button>Seguir</button>
              <button>Denegar</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://anitawynn.com/cdn/shop/files/A.png?height=628&pad_color=fff&v=1702953268&width=1200"
                alt=""
              />
              <span>Anita Max</span>
            </div>
            <div className="buttons">
              <button>Seguir</button>
              <button>Denegar</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://anitawynn.com/cdn/shop/files/A.png?height=628&pad_color=fff&v=1702953268&width=1200"
                alt=""
              />
              <p>
                <span>Anita Max</span> Cambio su foto de perfil
              </p>
            </div>
            <span>hace 30 min</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://anitawynn.com/cdn/shop/files/A.png?height=628&pad_color=fff&v=1702953268&width=1200"
                alt=""
              />
              <p>
                <span>Anita Max</span> Dio like a tu foto
              </p>
            </div>
            <span>hace 2hr</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://anitawynn.com/cdn/shop/files/A.png?height=628&pad_color=fff&v=1702953268&width=1200"
                alt=""
              />
              <p>
                <span>Anita Max</span> Comento tu foto
              </p>
            </div>
            <span>hace 4hr</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://anitawynn.com/cdn/shop/files/A.png?height=628&pad_color=fff&v=1702953268&width=1200"
                alt=""
              />
              <p>
                <span>Anita Max</span> Compartio tu foto
              </p>
            </div>
            <span>hace 17min</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://anitawynn.com/cdn/shop/files/A.png?height=628&pad_color=fff&v=1702953268&width=1200"
                alt=""
              />
              <div className="online" />
              <span>Anita Max</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://anitawynn.com/cdn/shop/files/A.png?height=628&pad_color=fff&v=1702953268&width=1200"
                alt=""
              />
              <div className="online" />
              <span>Anita Max</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://anitawynn.com/cdn/shop/files/A.png?height=628&pad_color=fff&v=1702953268&width=1200"
                alt=""
              />
              <div className="online" />
              <span>Anita Max</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://anitawynn.com/cdn/shop/files/A.png?height=628&pad_color=fff&v=1702953268&width=1200"
                alt=""
              />
              <div className="online" />
              <span>Anita Max</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
