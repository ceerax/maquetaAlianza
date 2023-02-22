import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Spinners } from "./Spinners";

export const Api = () => {
  const [searchTerm, setSearchTerm] = useState("margarita");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const showAlert = () => {
    Swal.fire({
      title: "¡No existe el elemento que buscas!",
      icon: "warning",
    });
  };

  const handleSearchFormSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    setLoading(true);
    axios
      .get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => {
        setSearchResults(response.data.drinks);
        setLoading(false);
        if (!response.data.drinks) {
          showAlert();
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        setSearchTerm("");
      });
  };

  useEffect(() => {
    handleSearchFormSubmit();
  }, []);

  return (
    <>
      <div className="container ">
        <form
          className="row d-flex justify-content-center"
          onSubmit={handleSearchFormSubmit}
        >
          <label>Buscar cóctel:</label>
          <div className="col-4 mb-2">
            <div className=" input-group ">
              <input
                onChange={handleSearchInputChange}
                type="text"
                value={searchTerm}
                className="form-control "
                placeholder="escribe tu cóctel favorito"
              />
              <div className="col-2">
                <button
                  className="btn btn-primary"
                  type="submit"
                  id="button-addon2"
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {loading ? (
        <div className=" d-flex justify-content-center mt-5 ">
          {<Spinners />}
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {searchResults &&
              searchResults.map((cocktail) => (
                <div
                  key={cocktail.idDrink}
                  className="card m-1 "
                  style={{ width: 288 }}
                >
                  <div>
                    <img
                      src={cocktail.strDrinkThumb}
                      className="card-img-top mt-2"
                      alt="..."
                    />
                    <h2>{cocktail.strDrink}</h2>
                    <div className="card-body">
                      <p className="card-text">{cocktail.strInstructions}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};
