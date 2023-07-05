import { useRef, useCallback } from "react";
import { Spin, Card, Row, Col } from "antd";
import useGetMovies from "../hooks/useGetMovies";
import { Link } from "react-router-dom";
import { StarFilled } from "@ant-design/icons";
function Movies() {
  // const [movies, setMovies] = useState(null);

  const {
    isLoading,
    error,
    data: movies,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetMovies();

  // observer
  const intObserver = useRef(null);

  // lastMovieRef ini akan mendeteksi apakah movie terakhir yang berhasil ditarik
  // dari API telah tampil sepenuhnya, jika sudah maka fetch page/halaman berikutnya
  const lastMovieRef = useCallback(
    (movie) => {
      if (isFetchingNextPage) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver(
        ([movie]) => {
          if (movie.isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        },
        { threshold: 0.5 }
      );

      if (movie) intObserver.current.observe(movie);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  const { Meta } = Card;

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spin />
      </div>
    );
  if (error) return <p>An error occured: {error.message}</p>;

  return (
    <div className="min-h-screen p-12" style={{ backgroundColor: "#1B2124" }}>
      <Row className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {movies.pages.map((page) => {
          return page.results.map((movie, i) => {
            if (i + 1 === page.results.length) {
              return (
                <Col ref={lastMovieRef} key={movie.id}>
                  <Card
                    hoverable
                    className="w-full border-none bg-surface"
                    cover={
                      <img
                        className="object-cover w-36 h-60"
                        alt={movie.title}
                        src={
                          "http://image.tmdb.org/t/p/" +
                          "w500" +
                          movie.poster_path
                        }
                      />
                    }
                  >
                    <Meta
                      className="text-left"
                      title={<h3 className="text-white">{movie.title}</h3>}
                    />
                  </Card>
                </Col>
              );
            }
            return (
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                <Col>
                  <Card
                    hoverable
                    className="w-full border-none bg-surface"
                    cover={
                      <img
                        className="object-cover w-36 h-60"
                        alt={movie.title}
                        src={
                          "http://image.tmdb.org/t/p/" +
                          "w500" +
                          movie.poster_path
                        }
                      />
                    }
                  >
                    <Meta
                      className="text-left"
                      title={<h3 className="text-white">{movie.title}</h3>}
                      description={
                        <div className="flex justify-between">
                          <span style={{ color: "#cbd5e1" }}>
                            {movie.release_date.split("-")[0]}
                          </span>{" "}
                          <span className="flex items-center space-x-1">
                            <StarFilled
                              style={{ color: "#eab308" }}
                              twoToneColor="#60a5fa"
                            />
                            <span style={{ color: "#cbd5e1" }}>
                              {movie.vote_average}
                            </span>
                          </span>
                        </div>
                      }
                    />
                  </Card>
                </Col>
              </Link>
            );
          });
        })}
      </Row>
    </div>
  );
}

export default Movies;
