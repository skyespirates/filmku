import { useState, useEffect } from "react";
import { Spin, Card, Row, Col } from "antd";

function Movies() {
  const [movies, setMovies] = useState(null);
  const respo = { xs: 24, sm: 24, md: 12, lg: 6 };
  const { Meta } = Card;

  const arr = [1, 2, 3, 4, 5, 6, 7];
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=42d3f8d886180928e42d0cabfb523b63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="min-h-screen px-12" style={{ backgroundColor: "#1B2124" }}>
      (
      {movies === null ? (
        <Spin />
      ) : (
        <Row gutter={[16, 24]}>
          {movies.map((movie) => (
            <Col key={movie.id} xs={24} sm={24} md={18} lg={12} xl={6}>
              <Card
                hoverable
                className="w-full"
                cover={
                  <img
                    alt={movie.title}
                    src={
                      "http://image.tmdb.org/t/p/" + "w780" + movie.poster_path
                    }
                  />
                }
              >
                <Meta
                  title={movie.title}
                  description={movie.overview.substring(0, 100)}
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
