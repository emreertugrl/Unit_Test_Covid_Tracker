import { getDetails } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Detail = () => {
  const { code } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((store) => store.covidSlice);
  console.log(data, isLoading, error);

  useEffect(() => {
    dispatch(getDetails(code));
  }, []);
  return (
    <div>
      <img src={`https://flagsapi.com/${data?.code}/shiny/64.png`} alt="flag" />
    </div>
  );
};

export default Detail;
