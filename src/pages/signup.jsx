

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "../style/pages/signup.scss"


export default function Signup() {

    const formElement = useRef(null);
    const [formData, setFormData] = useState(null);
    const [isFormFilled, setIsFormFilled] = useState(false); 
    const navigate = useNavigate();

    

    function submitHandler(event) {

        event.preventDefault();

        const data = new FormData(formElement.current);

        console.log(data);

        const dataObject = Object.fromEntries(data.entries());


        // Store data in localStorage
        localStorage.setItem('signupData', JSON.stringify(dataObject));

        setFormData(dataObject);
        setIsFormFilled(true);
        formElement.current.reset();

        
    }
    
    function signupComplete() {
         
          navigate("/signup-complete");
          }
        

        function clearForm() { 
            localStorage.removeItem('signupData'); 
             setFormData(null);
              setIsFormFilled(false);
               

        
    }

    


    return (

        <div className="start">
            <section className="signup">
                <div className="signup-left">

                    <img className="signup-img" src="./img-container.png" alt="signup" />
                </div>
                <div className="signup-text">


                    <p className="signup-p"><strong>SIGNUP FOR THE EVENT</strong></p>
                    <h1>Orange Rabbit Festival</h1>

                    <p className="signup-p"><strong>24 June 2025 - 1 july 2025</strong></p>
                    <p className="signup-p"><strong>Bunny Avenue 22, 2300, Rabbitliide</strong></p>

                    <form ref={formElement} className="signup-form" onSubmit={submitHandler}>

                        <h3>Your name</h3>
                        <input className="signup-form__input" name="fullName" placeholder="Full name" />

                        <h3>Email address</h3>
                        <input className="signup-form__input" name="email" type="email" placeholder="Email" />
                        <h3>Phone number</h3>
                        <input className="signup-form__input" name="phone" type="tel" placeholder="Phone " />
                        <h3>Your birthdate</h3>
                        <input className="signup-form__input" name="bod" type="tel" placeholder="bod " />

                        <input className="signup-form__button"  type="submit" value="Add participant" />


                        

                    </form>
                </div>



                <div className="participant-info">
                {!formData &&
                 <h2>0 Participants</h2>}
                    {formData && (
                        <>
                            <p>Your Participants</p>
                            <h2>Participant Information</h2>

                            
                            < hr className="inline" ></hr >
                            <button className="dustbin-icon" onClick={clearForm}>
                                 <FaTrash /> </button>
                            <p><strong> {formData.fullName}</strong></p>
                            <p>Email: {formData.email}</p>
                            <p>Phone: {formData.phone}</p>
                            <p className="participant-info__p">Date of Birth: {formData.bod}</p>
                            <hr />
                        </>

                    )}
                    
                

                         <input className=  {`participant-button ${isFormFilled ? '' : 'disabled'}`}
                         type="button" value="submit" onClick={signupComplete} 
                         disabled={!isFormFilled} />

                </div>

                
            </section >

        </div >

    );
}




