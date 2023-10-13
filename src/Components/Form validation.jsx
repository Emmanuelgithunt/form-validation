import {useState} from 'react'
import './Form validation.css'
import React from 'react';

const initialState = {
  username: '',
  email: '',
  mothername: '',
  fathername: '',
  date: '',
  time: '',
  password: '',
  confirmPassword: '',
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);

  const {username, email, date, fathername, mothername, time, password, confirmPassword} = formData;

  const [errors, setErrors] = useState({});


    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
    };

    
  const validateForm = () =>{
    let newErrors = {};

    if (!username) {
      newErrors.username = 'Username is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Emial is invalid';
    }

    if (!date) {
      newErrors.date = 'Date is required';
    }

    if (!fathername) {
      newErrors.fathername = 'Fathername is required';
    }

    if (!mothername) {
      newErrors.mothername = 'Mothername is required';
    }

    if (!time) {
      newErrors.time = 'Time is required';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }  else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Password do not match';
    }
    setErrors(newErrors );

    return Object.keys(newErrors ).length === 0;
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm) {
      console.log ('Form submitted:', formData);
      setFormData(initialState);
    }
  };
  
    return (

      <form className='form' onSubmit={handleSubmit}>
        <h2>FORM VALIDATION</h2>
        <div className='form-group'>
          <div>
            <label>Username:</label>
             <input type="text" name="username" value={username} onChange={handleChange} />
             {errors.username && <span className='error'>{errors.username}</span>}
          </div>
          <div className='form-group'>
            <label>Mother's name</label>
            <input type="text" name="mothername" value={mothername} onChange={handleChange} />
            {errors.mothername && <span className='error'>{errors.mothername}</span>}
          </div>
          <div className='form-group'>
            <label>Father's name</label>
            <input type="text" name="fathername" value={fathername} onChange={handleChange} />
            {errors.fathername && <span className='error'>{errors.fathername}</span>}
          </div>
          <div className='form-group'>
            <label>Date</label>
            <input type="date" name="date" value={date} onChange={handleChange} />
            {errors.date && <span className='error'>{errors.date}</span>}
          </div>
          <div className='form-group'>
            <label>time</label>
            <input type="time" name="time" value={time} onChange={handleChange} />
            {errors.time && <span className='error'>{errors.time}</span>}
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handleChange} />
            {errors.password && <span className='error'>{errors.password}</span>}
          </div>
          <div className='form-group'>
            <label>Confirm password</label>
            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
          </div>
          <button type='submit'>Submit</button>
            
        </div>
  
      </form>    
    )


  };

 

export default Form;
