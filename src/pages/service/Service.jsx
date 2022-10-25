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
            <div className="mt-3" key={films.maHeThongRap}>
              <img className="h-100" src={films.logo} alt={films.biDanh} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Service;
