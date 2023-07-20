import React from 'react';

const Navbar = () => {

  const handleLogout = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("department");
    localStorage.removeItem("token");
    window.location = "/";
  }

  var a, b, c

  try {
    a = sessionStorage.getItem("department");
    document.getElementById("department").value = a;
    c = localStorage.getItem("token").split("$")[1]
  } catch {
    if (a === null) {
      b = <>
        <li style={{ float: "right" }}><a className="active" href="login">เข้าสู่ระบบ</a></li>
        <li className='navli'><a className='navli a' href="form">ส่งข้อมูลตัวชี้วัด</a></li>
        <li className='navli'><a className='navli a' href="dashboard">รายงานตัวชี้วัด</a></li>
      </>
    } else
      b = <>
        <li style={{ float: "right" }}><a className="red" href='' onClick={handleLogout}>ออกจากระบบ</a></li>
        <li style={{ float: "right" }}><a className="active">ส่วนราชการ: {a}</a></li>
        <li className='navli'><a className='navli a' href="addform">เพิ่มตัวชี้วัด</a></li>
        <li className='navli'><a className='navli a' href="register">เพิ่มผู้ใช้งาน</a></li>
        <li className='navli'><a className='navli a' href="calform">สรุปผลตัวชี้วัด</a></li>
      </>
  }

  return (
    <>
      <ul className='navul'>
        <li className='navli'><a className='navli a' href="/">หน้าแรก</a></li>
        {b}
      </ul>
    </>

  )
}

export default Navbar
