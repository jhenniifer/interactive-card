import bgMobile from "./assets/bg-main-mobile.png";
import bgDesktop from "./assets/bg-main-desktop.png";
import cardFront from "./assets/bg-card-front.png";
import cardBack from "./assets/bg-card-back.png";
import { useEffect, useState } from "react";

function App() {
  const [background, setBackground] = useState(bgMobile);

  // console.log("Current background:", background);
  useEffect(() => {
    const handleSizeChange = () => {
      if (window.innerWidth >= 1024) {
        setBackground(bgDesktop);
      } else {
        setBackground(bgMobile);
      }
    };

    handleSizeChange();

    window.addEventListener("resize", handleSizeChange);
    return () => {
      window.removeEventListener("resize", handleSizeChange);
    };
  }, []);
  return (
    <main className=" h-screen flex items-center justify-center bg-[#21092f66]">
      <div className="w-11/12 mx-auto">
        <section
          className="h-[25vh] sm:h-[32vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="relative h-full">
            <div className="absolute  top-[20%] right-[5%]  w-4/6 sm:w-3/6">
              <img src={cardBack} alt="" />
            </div>
            <div className="absolute top-[58%] left-[5%] w-4/6 sm:w-3/6">
              <img src={cardFront} alt="" />
            </div>
          </div>
        </section>
        <form className="pt-20 [541px]:pt-40 bg-white px-4 ">
          <div className="flex flex-col mb-3">
            <label
              htmlFor="cardName"
              className="mb-1 font-black text-[#21092fff]"
            >
              CARDHOLDER NAME
            </label>
            <input
              type="text"
              id="cardName"
              placeholder="e.g. Jane Appleseed"
              required
              className="p-2 border border-gray-300 rounded-xl"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label
              htmlFor="cardNumber"
              className="mb-1 font-black text-[#21092fff]"
            >
              CARD NUMBER
            </label>
            <input
              type="text"
              id="cardNumber"
              placeholder="e.g. 1234 5678 9123 000"
              required
              className="p-2 border border-gray-300 rounded-xl"
            />
          </div>
          <div className="flex gap-1">
            <div className="">
              <div className="flex gap-1.5">
                <label className="mb-1 font-black text-[#21092fff]">
                  EXP. DATE
                </label>
                <label className="mb-1 font-black text-[#21092fff]">
                  (MM/YY)
                </label>
              </div>
              <div className="flex">
                <input
                  type="text"
                  id="expMonth"
                  placeholder="MM"
                  maxLength="2"
                  className=" border border-gray-300 rounded-xl px-2 py-2 mr-2 w-2/6"
                />
                <input
                  type="text"
                  id="expYear"
                  placeholder="YY"
                  maxLength="2"
                  className=" border border-gray-300 rounded-xl px-2 py-2 mr-2 w-2/6"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="cvc" className="mb-1 font-black text-[#21092fff]">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                placeholder="e.g. 123"
                maxLength="3"
                className="border border-gray-300 rounded-xl px-2 py-2 mr-2 w-6/6"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#21092fff] text-white w-full rounded-xl mt-8 mb-10 p-3.5 "
          >
            Confirm
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
