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
            <img src="https://www.mancity.com/meta/media/z00hnhu0/kevin-de-bruyne.png" />
          </div>
          <h4>Kevin Bruyne</h4>
          <p>Futbolista e Ingeniero de Software</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Hola soy un futbolista al cual le gusta programar y hacer música
          </div>
        </div>
      </div>
    );
  }
}
