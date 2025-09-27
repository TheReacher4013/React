import React, { useEffect, useState } from "react";
import axios from "axios";
import RapidApi from "./components/RapidApi";
import Form from "./components/Form";
const App = () => {
  let [user, setUser] = useState(null);
  let [error, setError] = useState(null);
  let [loading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(response.data);
    }

    fetchUser();
  }, []);

  // useEffect(() => {
  //   fetch(
  //     "https://jsonplacehojsahlder.typicode.com/users/1"
  //   )
  //     .then((response) => {
  //       // fetch doesn't throw an error for 404s, so we must check `ok` status
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUser(data);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //       console.log("for loading stage");
  //     });
  // }, []); // Empty array means this runs once on mount


//this is RapidApi logic using async and await
  async function fetchData() {
    console.log("hello");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Reposnse was bad, Bad Request");
      }
      const data = await response.json();
      if (!data) {
        throw new Error("data not received");
      }
      setUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally block");
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(user);
  return (
    <>
      <h1>Rapid API COmponent</h1>
      <RapidApi />
      {/* <Form/> */}
      <br />
      <br />
      <br />
      <br />
      <h1>Welcome{user?.name} </h1>
    </>
  );
};

export default App;