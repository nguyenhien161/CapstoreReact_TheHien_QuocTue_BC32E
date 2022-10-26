import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovieRap } from "../../storeToolkit/quanLyRap/quanLyRapReducer";
import { useQuanLyRap } from "../../storeToolkit/quanLyRap/quanLyRapSelector";
const Service = () => {
  const dispatch = useDispatch();
  const { movieRap } = useQuanLyRap();

  useEffect(() => {
    dispatch(getMovieRap());
  }, []);
  return (
    <div className="Service">
      <div className="gird gird-rows-5 ">
        {movieRap &&
          movieRap.map((films) => (
            <div
              className="card flex flex-wrap mt-3 mb-3 text-center"
              key={films.maHeThongRap}
            >
              <img
                className="h-100 w-[100px] justify-center mt-3 ml-6"
                src={films.logo}
                alt={films.biDanh}
              />
              <div className="card-body">
                <p>{films.tenHeThongRap}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Service;
