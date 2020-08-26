import React from "react";

import successIcon from "../../assets/images/icons/success-check-icon.svg";

import "./styles.css";
const SuccessPage = () => {
  return (
    <div id="page-success">
      <div id="page-success-content">
        <div id="logo-container">
          <img src={successIcon} alt="Cadastrado" />
          <h2>Cadastro concluído</h2>
          <span>
            Agora você faz parte da plataforma Proffy.
            <br />
            Tenha uma ótima experiência.
          </span>
        </div>
        <button>Fazer login</button>
      </div>
    </div>
  );
};

export default SuccessPage;
