import React, { useEffect, useState } from 'react'

const Home = () => {


  const [users, setUser] = useState([]);
  const [detail, setDetail] = useState([]);

  async function DataUserAPI2() {
    const response = await fetch("http://localhost:3000/detail");
    const JsonData = await response.json()
      .then(data => {
        setDetail(data)
      });
}

useEffect(() => {
  DataUserAPI2();

}, [])

  const handleSubmit = (event) => {
    event.preventDefault();

    async function DataUserAPI() {
      const response = await fetch("http://localhost:3000/form");
      const JsonData = await response.json()
        .then(data => {
          setUser(data)
        });
      return JsonData;
    }
    DataUserAPI();
 
  }

  return (
    <>
      <h1>
        home
      </h1>
      <a href="/">App</a>
      <form onSubmit={handleSubmit}>
        <input type="submit" />
      </form>
      <div>
        <ul>
          {users.map(user => (
            <li key={user.fm_id}>{user.fm_name}: &nbsp;&nbsp;
              <input />
            </li>
          ))
          }
          {detail.map(de => (
            <li key={de.de_id}>{de.fm_id}: &nbsp;&nbsp;
              <input />
            </li>
          ))
          }
        </ul>
        


      </div>

    </>
  )
}

export default Home
