import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://b.fssta.com/uploads/application/soccer/headshots/5858.vresize.350.350.medium.80.png",
      id: 1,
      name: "Jack Grealish",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1634235947674943489/zdJeuso-_400x400.jpg",
      id: 2,
      name: "Max Verstappen",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://cdn.vox-cdn.com/thumbor/UzKSGV6Bv-T0GhvtKQnjp4XEOvk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25061145/HardenSelfish_Getty_Ringer.jpg",
      id: 3,
      name: "James Harden",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://www.albat.com/__export/1653858708051/sites/debate/img/2022/05/29/el_alfa.jpg_375108060.jpg",
      id: 4,
      name: "Emanuel Herrera",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://yt3.googleusercontent.com/D1lQ87X3Hp1T-Y51_e0IylDU_3Buitkjw_9v1W54lChulTF_5VIptlXp2lyz-1gteLD_PiNU=s900-c-k-c0x00ffffff-no-rj",
      id: 5,
      name: "El rey del trap",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Conor_McGregor_2018.jpg/640px-Conor_McGregor_2018.jpg",
      id: 6,
      name: "Connor McGregor",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/665487/headshot/67/current",
      id: 7,
      name: "Fernando Tatis",
      active: false,
      isOnline: true,
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
      filteredChats: this.allChatUsers,
      searchQuery: "",
    };
  }

  handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredChats = this.allChatUsers.filter((user) =>
      user.name.toLowerCase().includes(searchQuery)
    );

    this.setState({
      filteredChats,
      searchQuery,
    });
  };

  render() {
    const chatsToDisplay = this.state.searchQuery
      ? this.state.filteredChats
      : this.state.allChats;

    return (
      <div className="main__chatlist">
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input
              type="text"
              placeholder="Busca aquí"
              onChange={this.handleSearch}
              value={this.state.searchQuery}
              required
            />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="scroll-container">
          {chatsToDisplay.map((item, index) => (
            <ChatListItems
              name={item.name}
              key={item.id}
              animationDelay={index + 1}
              active={item.active ? "active" : ""}
              isOnline={item.isOnline ? "active" : ""}
              image={item.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
