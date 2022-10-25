import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../store/actions/movieActions";
import { useSearchParams, useNavigate } from "react-router-dom";
import cn from "classnames";
import styled from "styled-components";
import { getMovieList, quanLyPhimActions } from "../../storeToolkit/quanLyPhim";
import {
  getMovieRap,
  getThongTinRap,
  useQuanLyRap,
} from "../../storeToolkit/quanLyRap";
import { useQuanLyPhim } from "../../storeToolkit/quanLyPhim/quanLyPhimSelector";
import { useQueryUrl } from "../../hooks/useQueryUrl";
import { Skeleton } from "antd";
import { Footer, Header } from "../../components/Molecules";
import Carousel from "../../components/Molecules/Carousel";

const Home = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParam] = useSearchParams({
    isShowing: true,
  });
  const [query, setQueryUrl] = useQueryUrl({
    isShowing: true,
  });

  console.log("query: ", query);
  const v = useQueryUrl();
  const { movieList, isFetching, error, number } = useQuanLyPhim();
  const { movieRap, movieCinema } = useQuanLyRap();

  const navigate = useNavigate();
  console.log("RAP", movieRap);
  console.log("thongtin", movieCinema);
  useEffect(() => {
    dispatch(getMovieList());
    dispatch(getMovieRap());
    dispatch(getThongTinRap());
  }, []);
  if (isFetching) {
    return (
      <div className="container">
        <div className="row">
          {[...Array(20)].map((e) => {
            return (
              <div className="col-3 mt-4">
                <Skeleton.Button active block style={{ height: "350px" }} />
                <Skeleton.Input active block className="mt-3" />
                <Skeleton.Button active className="mt-3" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="Home bg-neutral-800">
      <Header />
      <Carousel />
      <div className="container-sm">
        <div className="mt-3">
          <Button
            className={cn({
              active: searchParams.get("isShowing") === "true",
            })}
            onClick={() => {
              setQueryUrl({
                isShowing: true,
              });
            }}
          >
            Showing Movie
          </Button>
          <Button
            className={cn("ms-3", {
              active: searchParams.get("isShowing") === "false",
            })}
            onClick={() => {
              setQueryUrl({
                isShowing: false,
              });
            }}
          >
            Coming Movie
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-3 ">
          {movieList
            .filter((item) =>
              query.isShowing == "false" ? item.sapChieu : !item.sapChieu
            )
            .map((film) => (
              <div className="mt-3" key={film.maPhim}>
                <div className="card h-100">
                  <img className="h-100" src={film.hinhAnh} alt={film.name} />
                  <div className="card-body">
                    <p className="text-20">{film.tenPhim}</p>
                    <a
                      className="px-3 py-2 bg-green-700 text-white rounded"
                      onClick={() => navigate(`/detail/${film.maPhim}`)}
                    >
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="Service">
          <div className="gird gird-rows-5 ">
            {movieRap &&
              movieRap.map((films) => (
                <div
                  className="card w-[150px] mt-3 flex"
                  key={films.maHeThongRap}
                >
                  <img className="h-25" src={films.logo} alt={films.biDanh} />
                  <div className="card-body">
                    <p className="text-18 text-center">{films.tenHeThongRap}</p>
                  </div>
                </div>
              ))}
            {movieCinema &&
              movieCinema.map((cinema) => (
                <div
                  className="card mt-3 col-span-2 w-[100px]"
                  key={cinema.maLichChieu}
                >
                  <div className="card-body">
                    <p>{cinema.maRap}</p>
                    <p>{cinema.tenRap}</p>
                    <p>{cinema.ngayChieuGioChieu}</p>
                    <p>{cinema.giaVe}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="gird gird-cols-5"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

const Button = styled.button`
  padding: 12px 20px;
  border: 1px solid #000;
  background-color: transparent;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 4px 4px rgba(0, 0, 0, 0.1);
  }

  &.active {
    background-color: #000;
    color: #fff;
  }
`;
