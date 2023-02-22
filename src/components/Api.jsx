import React, { useState } from "react";
import axios from "axios";

export const Api = () => {
  const [searchTerm, setSearchTerm] = useState("margarita");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => {
        setSearchResults(response.data.drinks);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false); // Desactivar el loading
      });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSearchFormSubmit}>
          <label>
            Buscar cóctel:
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
          </label>
          <button type="submit">Buscar</button>
        </form>
      </div>
      {loading ? (
        <div>cargando</div>
      ) : (
        <div className="container">
          <div className="row">
            {searchResults == null ? (
              <h1>no existe</h1>
            ) : (
              searchResults.map((cocktail) => (
                <div className="card m-1 col-6" style={{ width: 288 }}>
                  <div key={cocktail.idDrink}>
                    <img
                      src={cocktail.strDrinkThumb}
                      className="card-img-top"
                      alt="..."
                    />
                    <h2>{cocktail.strDrink}</h2>
                    <div className="card-body">
                      <p className="card-text">{cocktail.strInstructions}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};
