import { render, screen } from "@testing-library/react";
import Heading from "../pages/detail/Heading";
import { Provider } from "react-redux";
// mock store
import configureStore from "redux-mock-store"; //ES6 modules
import { thunk } from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
const mockStore = configureStore([thunk]);

it("Store yüklenme durumundayken ekrana loader basılır.", () => {
  // store'un yüklenme durumundaki state'ini kopyasını oluştur
  const store = mockStore({
    covidSlice: { isLoading: true, error: null, data: null },
  });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );

  // ekrana loader geliyor mu ?
  screen.getByTestId("header-loader");
});

it("Store'da yüklenme bittiğinde ekranda loader yoktur.", () => {
  // store'un yüklenme bittiği durumunu
  const store = mockStore({
    covidSlice: { isLoading: false, error: null, data: null },
  });
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );

  // ekrana header-loader elementirin olmadığını test edeceğiz.
  // elementin ekranda olmamasını beklediğimiz için query ile aldık
  const ele = screen.queryByTestId("header-loader");

  // elementi bulamadığımı null mu diye kontrol edilir
  expect(ele).toBeNull();
});

it("Store'a veri geldiğinde ekrana veriler  basılır.", () => {
  //   render(<Heading />);
});
