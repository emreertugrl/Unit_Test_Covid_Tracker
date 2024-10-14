import { useSelector } from "react-redux";
import DetailLoader from "../../components/loaders/DetailLoader";
import Error from "../../components/error";

const Content = () => {
  const { data, isLoading, error } = useSelector((store) => store.covidSlice);
  return <div>Content</div>;
};

export default Content;
