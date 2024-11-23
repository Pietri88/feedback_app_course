import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',

    });

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        
        <input 

            type="text"
            name="name"
            placeholder="Twoje Imię"
            />

            <input 

            type="email"
            name="email"
            placeholder="Twój E-mail"
            />

            <textarea 
            name="feedback"
            placeholder="Twoja Opinia"
            ></textarea>
            <button type="submit">Wyślij Opinię</button>


      </form>
    </>
  );
};

export default FeedbackForm;
