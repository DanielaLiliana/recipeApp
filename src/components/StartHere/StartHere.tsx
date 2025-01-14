import React, { useState } from "react";
import classes from './startHere.module.scss';

const StartHere: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessages, setErrorMessages] = useState<{ name?: string; email?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Resetarea mesajelor de eroare
    setErrorMessages({});

    // Validarea formularului
    let hasError = false;
    const errors: { name?: string; email?: string } = {};

    if (!name.trim()) {
      errors.name = "Name is required.";
      hasError = true;
    }

    if (!email.trim()) {
      errors.email = "Email is required.";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format.";
      hasError = true;
    }

    if (hasError) {
      setErrorMessages(errors);
      return;
    }

    // Formular valid
    setSuccessMessage("Thank you for signing up!");
    setName('');
    setEmail('');
  };

  return (
    <div className={classes.startHereContainer}>
      <h1>Welcome to Pinch of Yum</h1>
      <h2>Let’s talk food, shall we?</h2>
      <p>
        Well, we hope that’s why you’re here. Our recipes are designed for real, actual, everyday life, and we try to focus on real foods and healthy recipes (which honestly means a lot of different things to us, including the perfect chocolate chip cookie and cheese on cheese on cheese, because health is all about balance, right?).
      </p>
      <p>
        This is the place to find those recipes — everything from our most popular, to meal prep, to Instant Pot recipes, or if you just, like, have some sad greens in your fridge to use up and you need some inspiration.
      </p>
      <p>
        You’re here! Have fun. We hope you find something (many things) you love.
      </p>

      <div className={classes.imageContainer}>
        <img src="cookies.jpg" alt="Food inspiration" className={classes.startImage} />
      </div>

      <h3>Sign up for email updates</h3>
      
      {/* Mesaj de succes */}
      {successMessage && <div className={classes.successMessage}>{successMessage}</div>}

      <form className={classes.form} onSubmit={handleSubmit}>
        {/* Input pentru nume */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={classes.input}
        />
        {errorMessages.name && <div className={classes.error}>{errorMessages.name}</div>}

        {/* Input pentru email */}
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.input}
        />
        {errorMessages.email && <div className={classes.error}>{errorMessages.email}</div>}

        <button type="submit" className={classes.submitButton}>Go</button>
      </form>
    </div>
  );
};

export default StartHere;
