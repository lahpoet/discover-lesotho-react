
import React, { useState } from "react";
import attractions from "../data/attractions";

function EnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    visitors: "1",
    visitDate: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Update the form when the visitor types or selects an option
  
function handleChange(event) {
  const { name, value } = event.target;

  // Remove numbers from the Full Name field
  const updatedValue =
    name === "fullName" ? value.replace(/[0-9]/g, "") : value;

  setFormData({
    ...formData,
    [name]: updatedValue,
  });

  // Clear the error when the user corrects the field
  if (errors[name]) {
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));
  }
}


  // Check that the visitor entered valid information
  function validateForm() {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[+0-9()\-\s]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.destination) {
      newErrors.destination = "Please select a destination.";
    }

    if (
      !formData.visitors ||
      Number(formData.visitors) < 1 ||
      !Number.isInteger(Number(formData.visitors))
    ) {
      newErrors.visitors = "Enter at least one visitor.";
    }

    if (!formData.visitDate) {
      newErrors.visitDate = "Please select your preferred visit date.";
    } else {
      const selectedDate = new Date(
        formData.visitDate + "T00:00:00"
      );
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.visitDate = "Please choose today or a future date.";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your enquiry message.";
    }

    return newErrors;
  }

  // Submit the form if all the fields are valid
  function handleSubmit(event) {
    event.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setSuccessMessage(
        "Thank you, " +
          formData.fullName +
          "! Your enquiry has been submitted successfully."
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        destination: "",
        visitors: "1",
        visitDate: "",
        message: ""
      });
    } else {
      setSuccessMessage("");
    }
  }

  return (
    <div className="enquiry-container">
      <h2>Plan Your Visit</h2>

      <p>
        Fill in the form below to ask us about your next
        trip to Lesotho.
      </p>

      {successMessage && (
        <div className="success-message" role="status">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            onKeyDown={(event) => {
             if (/^[0-9]$/.test(event.key)) {
               event.preventDefault();
            }
            }}
            autoComplete="name"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          {errors.fullName && (
            <p className="error-message" id="fullName-error">
              {errors.fullName}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p className="error-message" id="email-error">
              {errors.email}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p className="error-message" id="phone-error">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="destination">Selected Destination</label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            aria-invalid={Boolean(errors.destination)}
            aria-describedby={
              errors.destination ? "destination-error" : undefined
            }
          >
            <option value="">Choose a destination</option>

            {attractions.map((attraction) => (
              <option key={attraction.id} value={attraction.name}>
                {attraction.name}
              </option>
            ))}
          </select>

          {errors.destination && (
            <p className="error-message" id="destination-error">
              {errors.destination}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="visitors">Number of Visitors</label>
          <input
            id="visitors"
            name="visitors"
            type="number"
            min="1"
            max="100"
            value={formData.visitors}
            onChange={handleChange}
            aria-invalid={Boolean(errors.visitors)}
            aria-describedby={errors.visitors ? "visitors-error" : undefined}
          />

          {errors.visitors && (
            <p className="error-message" id="visitors-error">
              {errors.visitors}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="visitDate">Preferred Visit Date</label>
          <input
            id="visitDate"
            name="visitDate"
            type="date"
            min={new Date().toLocaleDateString("en-CA")}
            value={formData.visitDate}
            onChange={handleChange}
            aria-invalid={Boolean(errors.visitDate)}
            aria-describedby={errors.visitDate ? "visitDate-error" : undefined}
          />

          {errors.visitDate && (
            <p className="error-message" id="visitDate-error">
              {errors.visitDate}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your travel plans..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />

          {errors.message && (
            <p className="error-message" id="message-error">
              {errors.message}
            </p>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit Enquiry
        </button>
      </form>
    </div>
  );
}

export default EnquiryForm;
