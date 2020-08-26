import React from "react";

import backIcon from "../../assets/images/icons/back.svg";

const HeaderPage = () => {
  return (
    <div className="top-bar-container">
      <a href="/">
        <img src={backIcon} alt="Voltar" className="logo-image" />
      </a>
    </div>
  );
};

export default HeaderPage;
