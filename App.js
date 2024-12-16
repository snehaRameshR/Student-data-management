import StudentForm from './StudentForm';
import './App.css';
// import React,{useState} from 'react';
function App() {

  // const [user,serUser]=useState([]);
  // const [userInfo,setUserInfo]=useState({
  //   name:"",
  //   age:"",
  //   Email:""
  // })

  // const handleChange =()=>{}

  // return (
  //   <div >
  //    <div className='Container'> 
  //       <h1>USER FORM</h1>
  //      <form> <label> Users Name:</label>
  //       <input type="text" placeholder='Enter Name' ></input>

  //       <label>Users Age:</label>
  //       <input type="Number" placeholder='Enter Age' ></input>

  //       <label> Users Email:</label>
  //       <input type='text' placeholder='Enter Email'></input>

  //       <button type='submit'>Submit</button>
  //      </form>
  //    </div>

  
  //   </div>
  // );

  return(
    <div>
      <StudentForm></StudentForm>
    </div>
  );
}

export default App;
