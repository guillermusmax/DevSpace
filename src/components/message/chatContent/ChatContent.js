import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import SendIcon from '@mui/icons-material/Send';
import IosShareIcon from '@mui/icons-material/IosShare';

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://www.mancity.com/meta/media/z00hnhu0/kevin-de-bruyne.png",
      type: "",
      msg: "Hola como estas?",
    },
    {
      key: 2,
      image:
        "https://b.fssta.com/uploads/application/soccer/headshots/5858.vresize.350.350.medium.80.png",
      type: "other",
      msg: "Todo bien de este lado.",
    },
    {
      key: 3,
      image:
        "https://b.fssta.com/uploads/application/soccer/headshots/5858.vresize.350.350.medium.80.png",
      type: "other",
      msg: "Cuentame acerca el proyecto que estas trabajando.",
    },
    {
      key: 4,
      image:
        "https://www.mancity.com/meta/media/z00hnhu0/kevin-de-bruyne.png",
      type: "",
      msg: "Es algo muy interesante, una red social.",
    },
    {
      key: 5,
      image:
        "https://b.fssta.com/uploads/application/soccer/headshots/5858.vresize.350.350.medium.80.png",
      type: "other",
      msg: "Genial, cuentame mas.",
    },
    {
      key: 6,
      image:
        "https://www.mancity.com/meta/media/z00hnhu0/kevin-de-bruyne.png",
      type: "",
      msg: "Es un proyecto que estoy haciendo con React y Firebase.",
    },
    {
      key: 7,
      image:
        "https://b.fssta.com/uploads/application/soccer/headshots/5858.vresize.350.350.medium.80.png",
      type: "other",
      msg: "Suena super cool, y hacia que esta orientado el proyecto?",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://b.fssta.com/uploads/application/soccer/headshots/5858.vresize.350.350.medium.80.png"
              />
              <p>Jack Grealish</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="scroll-container">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <IosShareIcon />
            </button>
            <input
              type="text"
              placeholder="Escriba un mensaje aqui"
              onChange={this.onStateChange}
              value={this.state.msg}
              color="Secondary" 
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
