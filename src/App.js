import Header from './components/Header/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LandingPage/LandingPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import { useState } from 'react';


function App() {
  const [item, setItem] = useState([])
  fetch(`https://www.googleapis.com/books/v1/volumes?q='+searchInput+'&key=AIzaSyC8h_mfSuQv6QnzAbucMydsQlFOVEvhU_o`)
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
  })

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage item={item}/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;