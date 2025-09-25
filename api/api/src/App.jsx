import React, {useState, useEffect} from "react";
import axios from "axios";
import RapidApi from "./components/RapidApi";


const App = () => {
  let [user, setUser] = useState(null)
  let [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        //fetch doesn't throw an error for 404s, so we must check `ok`status

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
      })
      .catch(error => {
        setError(error);
      })
      .fnally(() => {
        // setIsLoading(false);
        console.log("for loading stage" )
      });
  }, []);
  // if (isLoading) return <p>loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(user);
  return(<>
   <h1>Welcome, {user.name}</h1>;
   <RapidApi />
   <br/>
    <br />
    <br />
    <br />
    <br />
    <h1>rapid api</h1>
    </>
  );
};
