import React from "react";
import { useState } from "react";
import envelope from "../images/envelope.png"
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
    /*function handleSubmit(e) {
    e.preventDefault();
    setFormData({
      name: "",
      number: "",
      email: "",
    });
    console.log(formData);
  }*/
  return (
    <section className="form-container ">
      <div className="section-center">
        <article className="form">
          <img
            src={envelope}
            alt="envelope"
            className="img form-img"
          />
          <p>
            Join DNI waiting list: We will notify you when the platform is live
          </p>
          <form  action= "https://formspree.io/f/mrgdyrpa" method="POST">
            <input
              value={formData.name}
              onChange={handleChange}
              id="name"
              name="name"
              type="text"
              placeholder="Full Name"
              className="form-input"
            />

            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              placeholder="Email"
              className="form-input"
            />

            <input
              type="telephone"
              value={formData.number}
              onChange={handleChange}
              name="number"
              placeholder="Phone"
              className="form-input"
            />
            <button
              className="btn submit-btn"
              type="submit"
            >
              Notify Me
            </button>
          </form>
        </article>
      </div>
    </section>
  );
};

export default Form;
