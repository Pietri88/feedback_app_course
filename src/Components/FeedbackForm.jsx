import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: '',

    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `
        Imię: ${formData.name}
        Email: ${formData.email}
        Opinie: ${formData.feedback}
        Ocena: ${formData.rating}
    
        
        `;
    
        const isConfirmed = window.confirm(`Proszę potwierdzić swoje dane:\n\n${confirmationMessage}`);
    if (isConfirmed)
    {
        console.log('Wysyłanie opinii:', formData);
        setFormData({
            name:'',
            email: '',
            feedback: '',
            rating:'',
        });
        alert('Dziękujemy za cenną opinię');

    }
    
    };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        
        <input 

            type="text"
            name="name"
            placeholder="Twoje Imię"
            value={formData.name}
            onChange={handleChange}
            />

            <input 

            type="email"
            name="email"
            placeholder="Twój E-mail"
            value={formData.email}
            onChange={handleChange}
            />

            <textarea 
            name="feedback"
            placeholder="Twoja Opinia"
            value={formData.feedback}
            onChange={handleChange}
            ></textarea>

            <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
                    <span>Oceń nas:</span>
                    <p><input
                        type="radio"
                        name="rating"
                        value="1"
                        onChange={handleChange}
                    /> 1</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="2"
                        onChange={handleChange}
                    /> 2</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="3"
                        onChange={handleChange}
                    /> 3</p>
                   <p> <input
                        type="radio"
                        name="rating"
                        value="4"
                        onChange={handleChange}
                    /> 4</p>
                    <p><input
                        type="radio"
                        name="rating"
                        value="5"
                        onChange={handleChange}
                    /> 5</p>
                </div>

                <button type="submit">Wyślij Opinię</button>
      </form>
    </>
  );
};

export default FeedbackForm;
