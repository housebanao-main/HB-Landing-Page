import React, { useState } from "react";
import logo from "../assets/logo.svg"; // Make sure the path to your logo is correct
import axios from "axios"
// import { useNavigate } from "react-router-dom";
export const BookForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    location: "",
    services: ""
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };
   async function BookNowClick(){
    // const navigate = useNavigate();
     await axios.post("https://backend4.priyanshulakra0061.workers.dev/api/v1/user/landing" , formData);

      setFormData({
        name: "",
        phoneNo: "",
        location: "",
        services: ""
      });

      // navigate("/ThankYou");

   }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!formData.name || !formData.phoneNo || !formData.location) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      setSuccessMessage("Appointment booked successfully!");
    } catch (error) {
      setErrorMessage("Error booking appointment: " + error.message);
    }
  };

  return (
    <section className="relative lg:w-[450px] w-full h-auto bg-white lg:rounded-[20px] rounded-lg flex flex-col shadow-md p-[20px] border-[0.5px] z-10 mx-auto mt-10 lg:mt-0 lg:mr-24">
      <div className="flex flex-col items-center mt-[8px]">
        <img src={logo} alt="Company Logo" width={100} height={100} />
        <h1 className="text-[25px] font-extrabold">Book your appointment</h1>
        <p className="text-center mt-[7px]">Get free consultation</p>

        {successMessage && (
          <div className="text-[#A46254] text-center mb-4">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-[#A46254] text-center mb-4">{errorMessage}</div>
        )}

        <form  className="flex flex-col items-center gap-[10px] mt-[18px] w-full lg:w-[250px]" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:border-[#A46254]"
            />
          </div>
          <div className="flex flex-col w-full">
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Mobile No"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:border-[#A46254]"
            />
          </div>
          <div className="flex flex-col w-full">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:border-[#A46254]"
            />
          </div>
          <div className="flex flex-col w-full">
            <select
              name="services"
              value={formData.services}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded focus:outline-none focus:border-[#A46254]"
            >
              <option value="">Select Service</option>
              <option value="Interior">Interior</option>
              <option value="Construction">Construction</option>
            </select>
          </div>
          <button onClick={BookNowClick} type="submit" className="bg-[#A46254] text-white py-2 px-4 rounded-full mt-4 w-full lg:w-[120px]">
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};
