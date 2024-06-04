// src/App.js
import React from 'react';
import {useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch ,Routes } from 'react-router-dom';
import Register from '../src/components/Register';
import Login from '../src/components/login';
import TodoList from './ToDoList';
import { auth } from './firebase';
import Home from './home';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
    <Routes>
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todo" element={user ? <TodoList /> : <Login />} />
      <Route path="/" element={<Home></Home>} />
    </Routes>
  </Router>
  );
}

export default App;
