import React from "react";

import { Link } from "react-router-dom";
import Logo from "../img/Vector.png";
import Tex from "../img/textLogo.png";
import Modal from "../components/Modal";
export const Login = () => {
  return (
    <>
      <section className="img-left">
        <h1>
          Bienvenido a la mejor plataforma <br />
          <span className="line">organizacional online</span>
        </h1>

        <h3>Gestíon efectiva del talento</h3>
      </section>
      <section className="form-Right">
        <form action="">
          <div className="content-Logo">
            <div className="d-flex">
              <img className="logo" src={Logo} alt="" />
              <img className="tex-Logo" src={Tex} alt="" />
            </div>
          </div>
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            name="usuario"
            placeholder="ingresa tu nombre de usuario"
          />
          <label htmlFor="usuario">Contraseña</label>
          <input
            type="Password"
            name="Passwors"
            placeholder="Escribe tu contraseña"
          />
          <div className="check d-flex justify-content-center">
            <input className="mx-2" type="checkbox" name="checkbox" />
            <span>Recordar</span>
          </div>
          <Link className="button-enter" to={"/home"}>
            <button className="button-enter">Ingresar</button>
          </Link>

          <div class="row mt-3 justify-content-between container-rescue">
            <div class="col-4 p-0 ">
              <a href="/">¿Olvidaste tu usuario?</a>{" "}
            </div>
            <div class="col-5 p-0 d-flex justify-content-end">
              <a href="/">¿Olvidaste tu contraseña?</a>{" "}
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
