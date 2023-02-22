import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Vector.png";
import Tex from "../img/textLogo.png";
import Avatar from "../img/Avatar.png";
import { Navbar } from "../components/Navbar";
import { Api } from "../components/Api";
import { TabHome } from "../components/TabHome";

export const Home = () => {
  return (
    <>
      <div className="container-main px-5">
        <div className=" row justify-content-between ">
          <div className="col-4 p-0 d-flex align-items-center">
            <img className="logo-Home" src={Logo} alt="" />
            <img className="tex-Logo-Home" src={Tex} alt="" />
          </div>

          <div className="dropdown  col-4 d-flex justify-content-center align-items-center pt-2">
            <button
              className="btn button-avatar"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu bg-secondary-subtle ">
              <li>
                <a className="dropdown-item item-Text " href="#">
                  Perfiñ
                </a>
              </li>
              <li>
                <a className="dropdown-item item-Text" href="#">
                  Configuracion
                </a>
              </li>
              <li>
                <a className="dropdown-item item-Text" href="#">
                  Soporte
                </a>
              </li>
              <li>
                <Link className="dropdown-item item-Text" to={"/"}>
                  Salir
                </Link>
              </li>
            </ul>
            <div className="texts">
              <h2 className="m-0 ">Cesar Moreno</h2>
              <p className="m-0">Administradora</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-sm-6  col-md-4 col-lg-2">
          <Navbar />
        </div>
        <div className="col col-sm-6 col-md-6 col-lg-10">
          <Api />
        </div>
      </div>
    </>
  );
};
