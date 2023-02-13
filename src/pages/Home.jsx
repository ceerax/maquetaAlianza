import React from "react";
import Logo from "../img/Vector.png";
import Tex from "../img/textLogo.png";
import Avatar from "../img/Avatar.png";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <>
      <div className="container-main px-5">
        <div class=" row justify-content-between ">
          <div class="col-4 p-0 d-flex align-items-center">
            <img className="logo-Home" src={Logo} alt="" />
            <img className="tex-Logo-Home" src={Tex} alt="" />
          </div>

          <div class="dropdown  col-4 d-flex justify-content-center align-items-center pt-2">
            <button
              class="btn button-avatar"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul class="dropdown-menu bg-secondary-subtle ">
              <li>
                <a class="dropdown-item item-Text " href="#">
                  Empleados
                </a>
              </li>
              <li>
                <a class="dropdown-item item-Text" href="#">
                  cargos
                </a>
              </li>
            </ul>
            <div class="texts">
              <h2 className="m-0 ">Elisa Gómez</h2>
              <p className="m-0">Administradora</p>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};
