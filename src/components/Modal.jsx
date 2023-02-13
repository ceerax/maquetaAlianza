import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
  return (
    <div>
      <button
        type="button"
        class="btn "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <FontAwesomeIcon icon={faUser} />
      </button>
      <p>empieza aqui</p>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Nuevo empleado
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body row">
              <div class=" col-6 text-start ">
                <label for="nombre" class="form-label">
                  Nombre
                </label>
                <input type="text" class="form-control" />
              </div>
              <div class=" col-6 mb-3 text-start">
                <label for="apellidp" class="form-label">
                  Apellido
                </label>
                <input type="password" class="form-control" />
              </div>
              <div class=" col-6 mb-3 text-start">
                <label for="identificado" class="form-label">
                  Identificación
                </label>
                <input type="password" class="form-control" />
              </div>
              <div class=" col-6 mb-3 text-start ">
                <label for="telefono" class="form-label">
                  Teléfono
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class=" col-6 mb-3 text-start">
                <label for="ciudad" class="form-label">
                  ciudad
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class=" col-6 mb-3 text-start">
                <label for="departamento" class="form-label">
                  Departamento
                </label>
                <input type="password" class="form-control" />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
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
