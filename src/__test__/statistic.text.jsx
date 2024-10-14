import { render, screen } from "@testing-library/react";
import Statistic from "../pages/home/Statistic";

test("bileşen renderlandığında ekrana önceloader sonra data gelir.", async () => {
  render(<Statistic />);
  // elementi çağırma aynı zamanda ekranda mı testini yaparız ayrıca toBeInTheDocument testi yapılmaz.
  screen.getByTestId("loader");

  // asenkron şekilde renderlandığı için find kullanıdk
  await screen.findByText("Toplam Vaka", {}, { timeout: 3000 });
  await screen.findByText("Toplam İyileşen", {}, { timeout: 3000 });
  await screen.findByText("Toplam Vefat", {}, { timeout: 3000 });
});

/* 
  ! Seçiciler
 1) Method  Tipi | 2) All İfadesi | 3) Seçici Method

 * get > render anında DOM'da olan elementleri almak için kullanılır | elementi bulamazsa hata verir

 * query > elementin ekranda olma durumu kesin değilse kullanılır get ile benzer çalışır | elementi bulamazsa hata vermez

 * find > elementin ekrana basılmasının asenkron olduğu durumlarda kullanılır
 * not: find methodu promise döndürdüğü için async await ile kullanılmalı
 
 * eğer seçici methoda all ifadesi eklersek seçici koşula uyan bütün elemanları getirir
 * not: all kullanıırsa dönen cevapta 1 eleman olsa bile dizi döner
 * not: all kullanılmzsa ama ekranda koşula uyan 1den fazla eleman varsa hatat verir  

 */