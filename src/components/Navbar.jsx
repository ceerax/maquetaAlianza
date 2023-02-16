import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTableCells,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [state, setState] = useState(false);
  const openCloseMenu = () => {
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
            icon={faTableCells}
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
                  class="btn list-btn "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h4 className="ms-3">lista</h4>
                </button>
                <ul className="dropdown-menu bg-transparent  ">
                  <li>
                    <a className="dropdown-item item-Text text-white " href="#">
                      Empleados
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item item-Text text-white" href="#">
                      Cargo
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
