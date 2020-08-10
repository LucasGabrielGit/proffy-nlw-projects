import React, { useState } from "react";
import InputLogin from "../../components/InputLogin";

//Import images
import logoImg from "../../assets/images/logo.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

//Import style page
import "./styles.css";

const Login = () => {
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
            <legend>Fazer login</legend>

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

            <div id="remember-me">
              <div id="remember-me-check">
                <input type="checkbox" id="check" />
                <label htmlFor="check">Lembrar-me</label>
              </div>

              <a href="https://">Esqueci minha senha</a>
            </div>
            <div id="check">
              <input type="checkbox" id="showPass" onClick={toggleShowPassword} />
              <label htmlFor="showPass">Mostrar senha</label>
            </div>
            <button type="button" className="login-button">
              Entrar
            </button>
            <footer>
              <h3>Não tem conta?</h3>
              <div id="actions-info">
                <a href="https://" target="blank">
                  Cadastre-se
                </a>
                <span id="icon-heart">
                  É de graça <img src={purpleHeartIcon} alt="Coração" />
                </span>
              </div>
            </footer>
          </fieldset>
        </form>
      </main>
    </div>
  );
};

export default Login;
