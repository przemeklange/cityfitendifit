import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rr7bu7e",
        "template_jb2mzen",
        form.current,
        "3sueB-X9Y2nl9AZzn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="header-section-contact" id="contact">
      <div className="wrapper-section">
        <h3>Skontaktuj się ze mną</h3>
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="info">
              <div className="details">
                <input placeholder="Imię i nazwisko" type="text" name="user_name" />
              </div>
              <div className="details">
                <input type="email" placeholder="Email" name="user_email" />
              </div>
              <select name="temat" id="pet-select">
                <option value="">--Wybierz temat--</option>
                <option value="question">Zadaj pytanie</option>
                <option value="Pakiet 5">Pakiet 5</option>
                <option value="Pakiet 10">Pakiet 10</option>
                <option value="Pakiet 15">Pakiet 15</option>
                <option value="Pakiet 20">Pakiet 20</option>
              </select>
            </div>
            <textarea placeholder="Wpisz treść wiadomości" rows={5} name="message" />
            <button type="submit" id="no-border">Wyślij wiadomość</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
