import "./App.css";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Lo from "./pages/Spinner"
import Users from "./components/Users"
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const instance = axios.create({
    baseURL: "https://dummyjson.com/users",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const getData = async () => {
    setIsLoading(true);
    const response = await instance.get();
    setData(response.data.users);
    setIsLoading(false);
  };
  

  useEffect(() => {
    getData();
  }, []);


  console.log(data);
  return (
    <div className="App">
      <div className="navbar">1</div>
      <div className="container">
        <div className="posts">2</div>
        <div className="profile">
        {data && isLoading ? (
          <Lo />
        ) : (
          data.map((user) => {
            return (
              <div>
                <Users user={user} />
              </div>
            );
          })
        )}
        </div>
      </div>
    </div>
  );
}

export default App;
