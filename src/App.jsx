import bgMobile from "./assets/bg-main-mobile.png";
import bgDesktop from "./assets/bg-main-desktop.png";
import cardFront from "./assets/bg-card-front.png";
import cardBack from "./assets/bg-card-back.png";
import { useEffect, useState } from "react";

function App() {
  const [background, setBackground] = useState(bgMobile);
  const [errors, setErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });

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

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    // Clear errors as user types
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }

    // Real-time validation for card number
    if (id === "cardNumber") {
      if (value && !/^[0-9\s]*$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          cardNumber: "Wrong format, numbers only",
        }));
      } else {
        setErrors((prev) => ({ ...prev, cardNumber: "" }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Name validation
    if (!formData.cardName.trim()) {
      newErrors.cardName = "No name, please add your name";
    }

    // Card number validation
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = "Can't be blank";
    } else if (!/^[0-9\s]*$/.test(formData.cardNumber)) {
      newErrors.cardNumber = "Wrong format, numbers only";
    }

    // Other fields validation
    if (!formData.expMonth.trim()) {
      newErrors.expMonth = "Can't be blank";
    }
    if (!formData.expYear.trim()) {
      newErrors.expYear = "Can't be blank";
    }
    if (!formData.cvc.trim()) {
      newErrors.cvc = "Can't be blank";
    }

    setErrors(newErrors);

    // If no errors, show thank you page
    if (Object.keys(newErrors).length === 0) {
      setShowThankYou(true);
    }
  };

  return (
    <main className=" h-screen flex  items-center justify-center bg-[#21092f66]">
      <div className="w-11/12 mx-auto lg:grid grid-cols-[1fr_2fr] lg:h-[80vh]">
        <section
          className="h-[25vh] sm:h-[32vh] md:h-[38vh] lg:h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="relative h-full">
            <div className="absolute top-[20%] lg:top-[55%] right-[5%] sm:right-[8%] lg:left-[45%] w-4/6 sm:w-3/6 lg:w-5/6 ">
              <img src={cardBack} alt="" />
            </div>
            <div className="absolute top-[58%] lg:top-[30%] left-[5%] sm:left-[8%] lg:left-[38%] w-4/6 sm:w-3/6 lg:w-5/6">
              <img src={cardFront} alt="" />
            </div>
          </div>
        </section>

        {!showThankYou ? (
          <form
            className="pt-20 sm:pt-30 lg:pt-10 bg-white px-4"
            onSubmit={handleSubmit}
          >
            <div className="lg:w-6/12 m-auto ">
              <div className="flex flex-col mb-3 lg:w-6/12">
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
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className={`p-2 border rounded-xl ${
                    errors.cardName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.cardName && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.cardName}
                  </span>
                )}
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
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className={`p-2 border rounded-xl ${
                    errors.cardNumber ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.cardNumber && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.cardNumber}
                  </span>
                )}
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
                      value={formData.expMonth}
                      onChange={handleInputChange}
                      className={`border rounded-xl px-2 py-2 mr-2 w-2/6 ${
                        errors.expMonth ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    <input
                      type="text"
                      id="expYear"
                      placeholder="YY"
                      maxLength="2"
                      value={formData.expYear}
                      onChange={handleInputChange}
                      className={`border rounded-xl px-2 py-2 mr-2 w-2/6 ${
                        errors.expYear ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  </div>
                  {(errors.expMonth || errors.expYear) && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.expMonth || errors.expYear}
                    </span>
                  )}
                </div>
                <div className="">
                  <label
                    htmlFor="cvc"
                    className="mb-1 font-black text-[#21092fff]"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    placeholder="e.g. 123"
                    maxLength="3"
                    value={formData.cvc}
                    onChange={handleInputChange}
                    className={`border rounded-xl px-2 py-2 mr-2 w-6/6 ${
                      errors.cvc ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.cvc && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.cvc}
                    </span>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#21092fff] text-white w-full rounded-xl mt-8 mb-10 p-3.5 "
              >
                Confirm
              </button>
            </div>
          </form>
        ) : (
          <div className="pt-20 sm:pt-30 lg:pt-10 bg-white px-4 flex items-center justify-center">
            <div className="text-center max-w-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                THANK YOU!
              </h2>
              <p className="text-gray-500 mb-8">
                We've added your card details
              </p>

              <button
                onClick={() => {
                  setShowThankYou(false);

                  setFormData({
                    cardName: "",
                    cardNumber: "",
                    expMonth: "",
                    expYear: "",
                    cvc: "",
                  });
                  setErrors({});
                }}
                className="bg-[#21092fff] text-white w-full rounded-xl py-4 font-medium mb-5"
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
