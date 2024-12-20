

import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/pages/signupComplete.scss";

const SignupComplete = () => {
  const navigate = useNavigate();

  const handleOrderMoreTickets = () => {
    navigate("/");
  };

  return (
    <div className="start">
    <div className="signup-complete">
      <p><strong>CONFIRMATION</strong></p>
      <h1>Signup Complete!</h1>
      <p>We look forward seeing you at the event</p>
      <button className="order-tickets-button" onClick={handleOrderMoreTickets}>
        Order More Tickets
      </button>
    </div>
    </div>
  );
};

export default SignupComplete;

