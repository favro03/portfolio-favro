import React, {useState} from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
      

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
              setErrorMessage('Your email is invalid.');
            } else {
              setErrorMessage('');
            }
          } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
      }
      
      

        return (
          <section id="contact" class="parallax-section">
          <div class="container">
               <div class="row">
     
                    <div class="col-md-6 col-sm-12 ">
                         <div class="contact-form">
                              <div class="wow fadeInUp " data-wow-delay="0.2s">
                                   <h1 class="color-black">Contact Me</h1>
                                  
                              </div>
              <div id="contact-form">
                <form id="contact-form" onSubmit={handleSubmit}>  
                  <div>
                    <label htmlFor="name">Name:</label>
                    <input className="form-control" type="text" defaultValue={name} onChange={handleChange} onBlur={handleChange} name="name" />
                  </div>
                  <div>
                    <label htmlFor="email">Email address:</label>
                    <input className="form-control" type="email" defaultValue={email} name="email" onChange={handleChange} onBlur={handleChange}/>
                  </div>
                  <div>
                    <label htmlFor="message">Message:</label>
                    <input className="form-control" name="message" defaultValue={message} onChange={handleChange} onBlur={handleChange} rows="5" />
                  </div>
                  {errorMessage && (
                    <div>
                      <p className="error-text">{errorMessage}</p>
                    </div>
                  )}
                  <div class="wow fadeInUp col-md-6 col-sm-8" data-wow-delay="1.6s">
                    <input name="submit" type="submit" class="form-control" id="submit" value="Send"/>
                  </div>
                </form>
                </div>
                
                </div>
                </div>
                </div>
              </div>
            </section>
        );

    }
    
    export default ContactForm;
    