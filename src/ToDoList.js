// src/TodoList.js
import React, { useState, useEffect } from 'react';
import { auth, firestore } from './firebase';
import { collection, addDoc, deleteDoc, getDocs, doc, updateDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import "./home.css"
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const color1="#162635"
  const color2=""
  const color3=""
  // const [divclass,setdivclass]=useState("")
  const [textclass,settextclass] = useState("unchecked")
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodos = async () => {
      if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const todosRef = collection(firestore, 'todos', userId, 'items');
        const snapshot = await getDocs(todosRef);
        const todosList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTodos(todosList);
      }
    };

    fetchTodos();
  }, [auth.currentUser]);

  const addTodo = async (e) => {
    e.preventDefault();
    if (auth.currentUser && newTodo.trim()) {
      const userId = auth.currentUser.uid;
      const todosRef = collection(firestore, 'todos', userId, 'items');
      const newDoc = await addDoc(todosRef, { text: newTodo, completed: false });
      setTodos([...todos, { id: newDoc.id, text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const deleteTodo = async (id) => {
    if (auth.currentUser) {
      const userId = auth.currentUser.uid;
      const todoDoc = doc(firestore, 'todos', userId, 'items', id);
      await deleteDoc(todoDoc);
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };
  const handleLogout = () => {
    signOut(auth).then(() => {
      // Handle successful logout
      console.log('User signed out');
      window.location.href="/login"
    }).catch((error) => {
      // Handle errors here
      console.error('Error signing out: ', error);
    });
  };
  const toggleComplete = async (id) => {
    const userId = auth.currentUser.uid;
    const todoDoc = doc(firestore, 'todos', userId, 'items', id);
    const todo = todos.find(todo => todo.id === id);
    await updateDoc(todoDoc, { completed: !todo.completed });
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };
  // const taskcomplete=()=>{
  //   setdivclass("bg-black")
  // }
  // const taskre=()=>{
  //   setdivclass("bg-white")
  // }
  return (
    <div className='min-h-screen bg-[#f4f6f1]'>
  <div className="mx-auto  px-4 py-6 mb-3 sm:px-6 sm:py-12 lg:px-8 bg-[#f4f6f1] h-24">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-[#162635] sm:text-3xl b">Welcome Back , Champion</h1>

        <p className="mt-1.5 text-sm text-[#162635] a">Your tasks await. Ready to conquer the day? ✔</p>
      </div>

      <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
        {/* <button
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-sm font-medium"> View Website </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button> */}

        <button onClick={handleLogout}
          className="block rounded-lg bg-[#162635] px-5 py-3 text-sm font-medium text-[#f4f6f1] transition hover:bg-[#162635] focus:outline-none focus:ring a"
          type="button"
        >
          Log Out
        </button>
      </div>
    </div>
  </div>
      {/* <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New Todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul> */}

{/*  */}

<div class="bg-[#f4f6f1] w-full pt-6 py-6 flex flex-col justify-center items-center p-4">
{/* <div className="sm:flex sm:items-center sm:justify-between"> */}

{/* <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New Todo"
        />
          <input class=" w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none " type="text" name="search" 
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New Todo" />

        <button type="submit">Add</button>
      </form> */}
      <form onSubmit={addTodo}>
      <div class='flex items-center justify-center py-5'>
      <div class="flex w-full mx-10 rounded bg-white">
      <input class=" w-full border-none bg-transparent px-4 py-1 text-[#162635] outline-none focus:outline-none " type="text" name="search" 
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New Todo" />        
          <button type="submit" class="m-2 rounded bg-[#162635] px-4 py-2 text-[#f4f6f1] a">
            {/* <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"  width="512px" height="512px">
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg> */}
            Add
        </button>
    </div>
    </div>
      </form>
 
  <div class="bg-[#fbfcfb] text-[#162635] w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
  {todos.map(todo => (
          <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} className='list-none' key={todo.id}>
             <div class="flex items-center justify-between py-2">
      <div class="flex items-center space-x-4">
        {/* <div  class={`rounded-full w-4 h-4 border border-black`} ></div> */}
        <button onClick={() => toggleComplete(todo.id)}>
              {todo.completed ?  <div  class={`rounded-full w-4 h-4 border border-[#162635] bg-[#162635]`} ></div> :  <div  class={`rounded-full w-4 h-4 border border-[#162635] `} ></div>}
              {/* <input type='checkbox' value={textclass} onChange={() => toggleComplete(todo.id)}></input> */}
            </button>
        <div class="text-md font-bold a"> {todo.text}</div>
      </div>
      <div class="flex items-center space-x-4">
        
        <button onClick={() => deleteTodo(todo.id)}>
        <div class="text-[#162635] hover:text-[#ff5459] cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg"  class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
<path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"/>
</svg>

        </div></button>
      </div>
    </div>
          
          </li>
        ))}
    {/* <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <div class="rounded-full w-4 h-4 border border-purple-500"></div>
        <div class="text-md font-bold">Investors Meeting</div>
      </div>
      <div class="flex items-center space-x-4">
        <div class="text-gray-500 hover:text-gray-300 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
        <div class="text-gray-500 hover:text-gray-300 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
        </div>
      </div>
    </div> */}
  </div>
</div>

    </div>
  );
}

export default TodoList;


/*

{<!-- component -->
<div class="bg-gray-200 w-full min-h-screen flex flex-col justify-center items-center p-4">
  <div class="bg-white text-black w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <div class="rounded-full w-4 h-4 border border-purple-500"></div>
        <div class="text-md font-bold">Investors Meeting</div>
      </div>
      <div class="flex items-center space-x-4">
        <div class="cursor-pointer">
          <img class="w-5 h-5 rounded-lg" src="https://i.pravatar.cc/300" />
        </div>
        <div class="text-gray-500 hover:text-gray-300 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
        <div class="text-gray-500 hover:text-gray-300 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
        </div>
      </div>
    </div>
    <div class="mt-4 text-gray-500 font-bold text-sm">
      # TODO
    </div>
  </div>
</div>}

*/