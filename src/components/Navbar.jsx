import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHouse,
  faList,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [state, setState] = useState(false);
  const openCloseMenu = () => {
    console.log("se hixo");
    setState((prevState) => !prevState);
  };
  return (
    <>
      <div className={`menu-Side ${state ? "menu-side-move" : "none"}`}>
        <div className="name-page">
          <FontAwesomeIcon
            className={`icon-name  ${state ? "body-move" : "none"}
             ${state && "justify-content-center"} `}
            onClick={() => {
              openCloseMenu();
            }}
            icon={faBell}
          />
        </div>
        <div className="option-menu">
          <a href="/">
            <div className="option">
              {state == false ? (
                <FontAwesomeIcon
                  className="icon-Menu"
                  icon={faHouse}
                  title="inicio"
                />
              ) : null}

              <h4>inicio</h4>
            </div>
          </a>
          <a href="/">
            <div className="option">
              {state == false ? (
                <FontAwesomeIcon
                  className="icon-Menu"
                  icon={faAngleUp}
                  title="lista"
                />
              ) : null}

              <div class="dropdown  col-4 d-flex justify-content-center align-items-center pt-2">
                <button
                  class="btn  "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h4 className="ms-4">list🔽</h4>
                </button>
                <ul class="dropdown-menu bg-transparent  ">
                  <li>
                    <a class="dropdown-item item-Text text-white " href="#">
                      Perfil
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item item-Text text-white" href="#">
                      Configuraciones
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item item-Text text-white" href="#">
                      Soporte
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item item-Text text-white" href="#">
                      Salida
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
