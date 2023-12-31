import React from 'react'
import Footer from '../Component/Footer';
import Authlevel from '../Component/Authlevel';


const Register = () => {

  Authlevel();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const JsonData = {
      email: data.get("email"),
      password: data.get("password"),
      name: data.get("name"),
      agency: data.get("agency")
    };
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(JsonData)
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        if (data.status === "ok") {
          alert("sucess");
        } else {
          alert("failed")
        }
      })
      .catch((error) => {
        console.log("Error: ", error)
      })

  }

  return (
    <>

      <div className='bgi'>
        <br /><br />
        <div className="card">
          <div className="container">
            <br />
            <h1 className='textc'>
              เพิ่มผู้ใช้งานระบบ
            </h1>
            <br /><br />
            <form onSubmit={handleSubmit} className='textc'>
              <label> <p>Username</p><input className='form-control' type="text" name='name' autoFocus /> </label>
              &nbsp;&nbsp;&nbsp;
              <label> <p>Email</p><input className='form-control' type="email" name='email' /></label>
              <br />
              <label> <p>Password</p><input className='form-control' type="password" name="password" /></label>
              &nbsp;&nbsp;&nbsp;
              <label> <p>Agency</p><input className='form-control' type="text" name='agency' /></label>
              <br /><br /><br />
              <button type='submit' className='btn btn-success'>Register</button>
            </form>
            <br />
            <div className='textc'><p className='inline textl'><a href="/">กลับหน้าหลัก</a></p>
              <p className='inline textr'><a href="login"></a></p>
              </div>
          </div>
        </div>
        <div><br /><br /><br /><br /><br /><br /><br /></div>

      </div>
      <Footer />
    </>
  )
}

export default Register
