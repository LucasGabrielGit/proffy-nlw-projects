import React from "react";
import { Link } from "react-router-dom";
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
        <Link className="to-login" to="/login">Fazer login</Link>
      </div>
    </div>
  );
};

export default SuccessPage;
