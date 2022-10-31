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
import { Carousel, Header } from "../../components/Molecules";
import Service from "../service/Service";

const Home = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParam] = useSearchParams({
    isShowing: true,
  });

  const { movieRap } = useQuanLyRap();
  const [query, setQueryUrl] = useQueryUrl({
    isShowing: true,
  });

  console.log("query: ", query);
  const v = useQueryUrl();
  const { movieList, isFetching, error, number } = useQuanLyPhim();

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getMovieList());
    dispatch(getMovieRap());
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
          {/* {movieList
            .filter((item) => item.sapChieu.toString() === query.isShowing)
            .map((film) => (
              <div className="mt-3" key={film.maPhim}>
                <div className="card h-100">
                  <img className="h-100" src={film.hinhAnh} alt={film.name} />
                  <div className="card-body">
                    <p>{film.tenPhim}</p>
                    <button
                      className="btn btn-success"
                      onClick={() => navigate(`/detail/${film.maPhim}`)}
                    >
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            ))} */}
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
                    <button
                      className="px-3 py-2 bg-green-700 text-white rounded"
                      onClick={() => navigate(`/detail/${film.maPhim}`)}
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="mt-4 text-center">
          <nav aria-label="Page navigation example ">
            <ul class="inline-flex -space-x-px">
              <li>
                <a
                  href="#"
                  class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  class="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <Service movieRap={movieRap} />
      </div>
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
