import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://cdn.britannica.com/37/231937-050-9228ECA1/Drake-rapper-2019.jpg?w=400&h=300&c=crop" />
          </div>
          <h4>Aubrey Graham</h4>
          <p>Rapero e Ingeniero de Software</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Hola soy un rapero al cual le gusta programar y hacer música
          </div>
        </div>
      </div>
    );
  }
}
