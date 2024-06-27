import React, { useState } from "react";
import logo from "../assets/logo.svg"; // Make sure the path to your logo is correct

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    // Basic client-side validation
    if (!formData.name || !formData.phoneNo || !formData.location) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      // Your fetch request and submission logic here...
      // For example:
      // const response = await fetch('/api/book-appointment', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (!response.ok) {
      //   throw new Error('Something went wrong');
      // }

      setSuccessMessage("Appointment booked successfully!");
    } catch (error) {
      setErrorMessage("Error booking appointment: " + error.message);
    }
  };

  return (
    <section className="relative lg:w-[450px] w-full h-auto bg-white lg:rounded-[20px] rounded-none flex flex-col shadow-md mt-[70px] m-[10px] p-[20px] border-[0.5px] z-10">
      <div className="flex flex-col items-center mt-[8px]">
        <img src={logo} alt="Company Logo" width={100} height={100} />
        <h1 className="text-[25px] font-extrabold">Book your appointment</h1>
        <p className="text-center mt-[7px]">Get free consultation</p>

        {successMessage && (
          <div className="text-brown text-center mb-4">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-brown text-center mb-4">{errorMessage}</div>
        )}

        <form className="flex rounded-l-lg flex-col items-center gap-[10px] mt-[18px] w-[270px]" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full">
            
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="flex flex-col w-full">
            
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Mobile No"
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="flex flex-col w-full">
            
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location "
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="flex flex-col w-full">
            
            <select
              name="services"
              value={formData.services}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
            >
              <option value="">Select Service</option>
              <option value="Interior">Interior</option>
              <option value="Construction">Construction</option>
            </select>
          </div>
          <button type="submit" className="bg-[#A46254] text-white py-2 px-4 rounded mt-4">
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};
