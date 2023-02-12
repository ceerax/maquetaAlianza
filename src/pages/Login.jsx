import React from "react";
import Image from "../img/img1.png";
export const Login = () => {
  return (
    <>
      <section className="img-left">
        <h1>
          Bienvenido a la mejor plataforma <br />
          <span>organizacional online</span>
        </h1>

        <h3>Gestíon efectiva del talento</h3>
      </section>
      <section className="form-Right">
        <form action="">
          <h2>ejemplo</h2>
          <label htmlFor="usuario">Email</label>
          <input type="text" name="usuario" />
          <label htmlFor="usuario">Passwors</label>
          <input type="Password" name="Passwors" />
          <div className="check">
            <input type="checkbox" name="checkbox" />
            <span>Recordar</span>
          </div>
          <input type="submit" value="Ingresar" />
        </form>
      </section>
    </>
  );
};
