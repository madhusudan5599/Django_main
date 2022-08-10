import React from 'react'
// import '/index.py'
import './style.css'

function App() {
  return (
          <div class="container">
              <form action="http://localhost:3001/result " method="POST" >
  
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr/>
  
      <label for="name"><b>Name</b></label>
      <input type="text" placeholder="Enter Your Name" name="name" id="name" required />
  
      <label for="email"><b>Email</b></label>
      <input type="email" placeholder="Enter Your Email" name="email" id="email" required />
  
      <label for="password"><b>Password</b></label>
      <input type="password" placeholder="Enter Your Password" name="password" id="password" required />
      <hr/>
  
      <center>By creating an account you agree to our <a href="/">Terms & Privacy</a>.</center>
  
      <button type="submit" class="registerbtn">Register</button>
  
  
  
     </form>
    </div>
  
  

    
  );
}

export default App;
