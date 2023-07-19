import React, {useEffect} from 'react'

const Authen = () => {
    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch("http://localhost:3000/authen", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+token
                  }
            })
            .then(response => {
                return response.json()
            })
            .then(data => {
                if(data.status === "ok") {


                } else {
                    alert("You can login before")
                    sessionStorage.removeItem("id");
                    sessionStorage.removeItem("name");
                    sessionStorage.removeItem("department");
                    localStorage.removeItem("token");
                    window.location = "/login";
                }

            })
            .catch((error) => {
                console.log("Error: ", error)
            })
    }, []);

}

export default Authen
