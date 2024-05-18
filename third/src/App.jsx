import React, { useRef, useState } from 'react';
import './App.css';

const App = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const validateInput = (ref, type) => {
    if (ref.current) {
      const value = ref.current.value;
      let error = '';

      switch (type) {
        case 'name':
          if (value.length < 3) {
            error = 'Name must be at least 3 characters long';
          }
          break;
        case 'email':
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(value)) {
            error = 'Invalid email format';
          }
          break;
        case 'password':
          if (value.length < 6) {
            error = 'Password must be at least 6 characters long';
          }
          break;
        default:
          break;
      }

      setErrors((prevErrors) => ({
        ...prevErrors,
        [type]: error
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!errors.name && !errors.email && !errors.password) {
      const formData = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      };
      console.log('Form Data Submitted:', formData);
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <div className="container">
      <h1>Advanced Form Handling with useRef</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            ref={nameRef}
            type="text"
          id="name"
            placeholder="Enter your name"
            onBlur={() => validateInput(nameRef, 'name')}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            placeholder="Enter your email"
            onBlur={() => validateInput(emailRef, 'email')}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            placeholder="Enter your password"
            onBlur={() => validateInput(passwordRef, 'password')}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  
};

export default App;
