import React from "react";
import ModalHome from "./Modal";
import Img from "../img/img2.png";

export const TabHome = () => {
  return (
    <>
      <div className="d-flex justify-content-center text-center container-Name">
        <h2>
          Bienvenida! <br /> Elisa Gómez
        </h2>
      </div>
      <div className="d-flex justify-content-center text-center container-text cont">
        <h4>
          Añade los datos personales de tus empleados y despúes agrega su cargo
          en tu empresa
        </h4>
      </div>
      <div className="d-flex justify-content-center text-center container-avatar">
        <ModalHome />
      </div>
      <div className="container-img-tab ">
        <img src={Img} alt="" />
      </div>
    </>
  );
};
