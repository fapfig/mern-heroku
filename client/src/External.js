import { useState, useEffect } from "react";

const External = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = "https://www.omdbapi.com/?s=star wars&apikey=263d22d8";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
      });
  }, []);

  return (
    <main>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {movies.map((e) => (
              <div className="col" key={e.imdbID}>
                <div className="card shadow-sm">
                  <img
                    className="card-img-top"
                    src={e.Poster}
                    alt="Card image"
                    style={{ width: "30%" }}
                  />

                  <div className="card-body">
                    <p className="card-text">{e.Title}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">Year: {e.Year}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default External;
