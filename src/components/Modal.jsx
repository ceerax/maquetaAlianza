import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
  return (
    <div>
      <button
        type="button"
        className="btn "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <FontAwesomeIcon icon={faUser} />
      </button>
      <p>empieza aqui</p>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Nuevo empleado
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body row">
              <div className=" col-6 text-start ">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className=" col-6 mb-3 text-start">
                <label htmlFor="apellidp" className="form-label">
                  Apellido
                </label>
                <input type="password" className="form-control" />
              </div>
              <div className=" col-6 mb-3 text-start">
                <label htmlFor="identificado" className="form-label">
                  Identificación
                </label>
                <input type="password" className="form-control" />
              </div>
              <div className=" col-6 mb-3 text-start ">
                <label htmlFor="telefono" className="form-label">
                  Teléfono
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className=" col-6 mb-3 text-start">
                <label htmlFor="ciudad" className="form-label">
                  ciudad
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className=" col-6 mb-3 text-start">
                <label htmlFor="departamento" className="form-label">
                  Departamento
                </label>
                <input type="password" className="form-control" />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-primary">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
