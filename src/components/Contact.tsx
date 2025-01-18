import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    if (name && email && message) {
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(
          "service_q2sqnmp", // Replace with your EmailJS Service ID
          "template_zvsr3h9", // Replace with your EmailJS Template ID
          templateParams,
          "h1jx--IP6OlQzqGu3" // Replace with your EmailJS Public Key
        )
        .then(
          (response) => {
            
             toast.success("Your message has been sent successfully!", {
        position: "top-right",
      })
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.error("FAILED...", error);
            alert(
              "An error occurred while sending your message. Please try again later."
            );
          }
        );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail} // Attach the sendEmail function to the form submission
          >
            <div className="form-flex">
              <TextField
                className="textfield"
                required
                id="outlined-required"
                name="name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                className="textfield"
                required
                name="email"
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              name="message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit" // Use "submit" type to trigger form submission
            >
              <ToastContainer />
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
