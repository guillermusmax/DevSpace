import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Sugerencias para ti</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>C</Avatar>
            </span>
            <div className="username__info">
              <span className="username">carlitos_</span>
              <span className="relation">Nuevo en DevSpace</span>
            </div>
          </div>
          <button className="follow__button">Seguir</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>K</Avatar>
            </span>
            <div className="username__info">
              <span className="username">kelvin.ge</span>
              <span className="relation">Nuevo en DevSpace</span>
            </div>
          </div>
          <button className="follow__button">Seguir</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>J</Avatar>
            </span>
            <div className="username__info">
              <span className="username">jcob</span>
              <span className="relation">Nuevo en DevSpace</span>
            </div>
          </div>
          <button className="follow__button">Seguir</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>C</Avatar>
            </span>
            <div className="username__info">
              <span className="username">cristhian.x0</span>
              <span className="relation">Nuevo en Devspace</span>
            </div>
          </div>
          <button className="follow__button">Seguir</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
