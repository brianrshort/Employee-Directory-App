import React, {useState, useEffect} from "react";
import axios from "axios";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import {Jumbotron} from "./Components/Jumbotron";
import {Navbar} from "./Components/Navbar";
import {Buttons} from "./Components/Buttons";
import {Table} from "./Components/Table";
import {Search} from "./Components/Search";
import './App.css';
import { data } from './Data/Data';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get(
      "https://randomuser.me/api/?results=20"
    ).then((response) => {
      //console.log(response.data.results);
      setEmployees(response.data.results);
    }).catch(err => {
      console.log(err);
      setEmployees(data.results);
    })
  }, [])

  const eastOf = () => {
    setEmployees(
      employees.filter(emp => {
        return emp.location.coordinates.longitude > 0;
      })
    )
  }

  const westOf = () => {
    setEmployees(
      employees.filter(emp => {
        return emp.location.coordinates.longitude < 0;
      })
    )
  }

  const alpha = () => {
    console.log("Alpha clicked")
    const sortedEmps = [...employees].sort(function (a, b) {
          if (a.name.first > b.name.first) {
              return -1;
          }
          if (b.name.first > a.name.first) {
              return 1;
          }
          return 0;
      })
    //console.log(sortedEmps);
    setEmployees(sortedEmps);
  }

  const reversed = () => {
    const sortedEmps = [...employees].sort(function (a, b) {
          if (a.name.first > b.name.first) {
              return 1;
          }
          if (b.name.first > a.name.first) {
              return -1;
          }
          return 0;
      })
    //console.log(sortedEmps);
    setEmployees(sortedEmps);
  }

  const map = employees.map(emp => {
      //console.log(emp);
      return <tr key={emp.name.first}>
        <td className="p-3"><img src={emp.picture.thumbnail} alt="Employee" /></td>
        <td className="px-3">{emp.name.first} {emp.name.last}</td> 
        <td className="px-3">{emp.location.city}</td>
        <td className="px-3">{emp.location.country}</td>
        <td className="px-3">{emp.email}</td>
        </tr>
    })
  




  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Search employees={employees} setEmployees={setEmployees} />
      <Buttons alpha={alpha} reversed={reversed} eastOf={eastOf} westOf={westOf} />
      <Table map={map} />
    </div>
  );
}

export default App;
