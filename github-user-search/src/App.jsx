import './App.css'
import React from 'react';
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import Search from './components/Search';
function App() {
  

  return (
    <>
      <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <h1>GitHub User Search</h1>
        <Search />
       
        <UserList />
      </div>
      
    </>
  );
}

export default App
