import './App.css';
import api from './api/axiosConfig'
import { useState, useEffect } from 'react'
import Layout from './component/Layout';
import { Routes, Route } from 'react-router-dom'

function App() {

  const [movies, setMovie] = useState();

  const getMovies = async () => {

    try {

      const response = await api.get("/api/v1/movies")

      setMovie(response.data)

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getMovies();
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={Layout}>


        </Route>
      </Routes>


    </div>
  );
}

export default App;
