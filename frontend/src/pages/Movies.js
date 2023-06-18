import { useState, useEffect } from "react";
import { Spin, Card, Row, Col } from "antd";
import Description from "../components/Description";

function Movies() {
  const [movies, setMovies] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const respo = { xs: 24, sm: 24, md: 12, lg: 6 };
  const { Meta } = Card;

  const arr = [1, 2, 3, 4, 5, 6, 7];
  useEffect(() => {
    // console.log("API_URL:", process.env.REACT_APP_API_URL);
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=42d3f8d886180928e42d0cabfb523b63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="min-h-screen px-12" style={{ backgroundColor: "#1B2124" }}>
      (
      {movies === null ? (
        <Spin />
      ) : (
        <Row className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {movies.map((movie) => (
            <Col key={movie.id}>
              <Card
                hoverable
                className="w-full bg-surface border-none"
                cover={
                  <img
                    className="w-36 h-60 object-cover"
                    alt={movie.title}
                    src={
                      "http://image.tmdb.org/t/p/" + "w500" + movie.poster_path
                    }
                  />
                }
              >
                <Meta
                  className="text-justify"
                  title={<h3 className="text-secondary">{movie.title}</h3>}
                  description={<Description text={movie.overview} />}
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}
      )
    </div>
  );
}

export default Movies;
