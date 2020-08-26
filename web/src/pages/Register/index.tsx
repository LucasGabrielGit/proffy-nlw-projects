import React, { useState } from "react";
import InputLogin from "../../components/InputLogin";

//Import images
import logoImg from "../../assets/images/logo.svg";
//Import style page
import "./styles.css";

const Register = () => {
  const [isHidden, setIsHidden] = useState(true);

  function toggleShowPassword() {
    setIsHidden(!isHidden);
  }

  return (
    <div id="page-login">
      <div id="page-login-side">
        <div id="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
      </div>
      <main>
        <form>
          <fieldset>
            <legend>Cadastro</legend>
            <span>Preencha os dados abaixo para começar</span>
            <InputLogin
              name="name"
              type="text"
              placeholder="Nome"
              autoComplete="off"
            />
            <InputLogin
              name="surname"
              type="text"
              placeholder="Sobrenome"
              autoComplete="off"
            />
            <InputLogin
              name="email"
              type="email"
              placeholder="E-mail"
              autoComplete="off"
            />
            <InputLogin
              name="senha"
              type={isHidden ? "password" : "text"}
              placeholder="Senha"
            />

            <div id="check">
              <input
                type="checkbox"
                id="showPass"
                onClick={toggleShowPassword}
              />
              <label htmlFor="showPass">Mostrar senha</label>
            </div>
            <button type="button" className="login-button">
              Cadastrar
            </button>
          </fieldset>
        </form>
      </main>
    </div>
  );
};

export default Register;
