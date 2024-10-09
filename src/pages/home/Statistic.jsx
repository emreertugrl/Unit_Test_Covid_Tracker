import Container from "../../components/container";
import Item from "./Item";

const Statistic = () => {
  return (
    <Container design={"!py-0 "}>
      <div className="bg-white shadow-lg rounded-xl p-5 grid grid-cols-3 gap-5 mt-[-42px] md:mt-[-60px]">
        <Item color="text-pink-500" text="Toplam Vaka" value="1,234,567" />
        <Item color="text-green-500" text="Toplam İyileşen" value="1,234,332" />
        <Item color="text-gray-500" text="Toplam Vefat" value="235,523" />
      </div>
    </Container>
  );
};

export default Statistic;
