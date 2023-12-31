import React, {useEffect} from 'react'

const Authen = () => {
    useEffect(() => {
        try{
            const token = localStorage.getItem("token").split("$")[0]
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
                if(data.status != "ok") {
                    alert("You can login before")
                    sessionStorage.removeItem("id");
                    sessionStorage.removeItem("name");
                    sessionStorage.removeItem("department");
                    localStorage.removeItem("token");
                    window.location = "/login";
                } else {
                    
                }

            })
            .catch((error) => {
                console.log("Error: ", error)
            })
        } catch {
            alert("You have to login before")
            window.location = "/login"
        }
        
        
    }, []);

}

export default Authen
