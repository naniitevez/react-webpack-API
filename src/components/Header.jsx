import React from "react";

const Header = (props) => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="content">
            <h1 className="title">{props.title}</h1>
            <p className="text">
              This project illustrates the characters from the famous Rick and Morty series
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
