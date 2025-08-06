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
    <main className="bg-[#21092fff] h-screen flex items-center ">
      <div className=" w-9/12 mx-auto h-full ">
        <section
          className="h-1/3 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="relative h-full">
            <div className="absolute left-[31%] top-[20%] w-4/6">
              <img src={cardBack} alt="" />
            </div>
            <div className="absolute top-[60%] w-4/6">
              <img src={cardFront} alt="" />
            </div>
          </div>
        </section>
        <form className="pt-20 bg-white px-4 ">
          <div className="flex flex-col mb-2.5">
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
          <div className="flex flex-col mb-2.5">
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
                  className=" border border-gray-300 rounded-xl px-2 py-1.5 mr-2 w-2/6"
                />
                <input
                  type="text"
                  id="expYear"
                  placeholder="YY"
                  maxLength="2"
                  className=" border border-gray-300 rounded-xl px-2 py-1.5 mr-2 w-2/6"
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
                className="border border-gray-300 rounded-xl px-2 py-1.5 mr-2 w-6/6"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#21092fff] text-white w-full rounded-xl my-3 p-3.5 "
          >
            Confirm
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
