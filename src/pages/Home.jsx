import React from "react";
import Logo from "../img/Vector.png";
import Tex from "../img/textLogo.png";

export const Home = () => {
  return (
    <>
      <div className="m-4">
        <div class="row mt-3 justify-content-between ">
          <div class="col-4 p-0 ">
            <img className="logo" src={Logo} alt="" />
            <img className="tex-Logo" src={Tex} alt="" />
          </div>
          <div class="col-5 p-0 d-flex justify-content-end">
            <img src="" alt="cualquier" />
            <p>hola cesar</p>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
