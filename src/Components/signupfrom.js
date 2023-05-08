import React, { useState } from "react";

import { Link } from 'react-router-dom';


function SignUp() {
    // const navigate = useNavigate();
    // const navTopage = (url)=>{
    //     navigate(url)
    //   }
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Phonenumber, setPhonenumber] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const [allEntry, setallEntry] = useState([]);

    const submitForm = (e) =>{
      e.preventDefault();     // thise for donot relode
      const newentry = {Firstname:Firstname,Lastname:Lastname,Phonenumber:Phonenumber,Email:Email , Password:Password}
      setallEntry([...allEntry,newentry]);
      //   ...allEntry storing the data 
      console.log(allEntry)
    }
  return (
  <>
  <div className="page">
    <form className="form" onSubmit={submitForm} >
    <div className="container">
    <h1 className="loginname">SIGN UP</h1>
      <div class="mb-3">
        <label className="name" for="name"  class="form-label">
         First name
        </label>
        <input class="form-control"  type="text" placeholder="First name" name="First name" required></input>
        {/* <input
          type="name"
          placeholder=" First name"
          autoComplete="off"
        //   class="form-control"
          id="name"
          aria-describedby="name"
          value={Firstname}
          onChange={(e) => setFirstname(e.target.value)}
        /> */}
      </div>

      <div class="mb-3">
        <label for=" last name" class="form-label">
         Last name
        </label>
        <input
          type=" last name"
          placeholder=" last name"
          autoComplete="off"
          class="form-control"
          id=" lastname"
          aria-describedby=" lastnameHelp"
        //   value={ Lastname}
        //   onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
         Email id
        </label>
        <input
          type="email"
          placeholder="Email address"
          autoComplete="off"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        //   value={Phonenumber}
        //   onChange={(e) => setPhonenumber(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for=" Phonenumber" class="form-label">
        Phone number
        </label>
        <input
          type="number"
          placeholder=" Phone number"
          autoComplete="off"
          class="form-control"
          id=" Phone number"
          aria-describedby=" Phone numberHelp"
        //   value={Email}
        //   onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          autoComplete="off"
          class="form-control"
          id="exampleInputPassword1"
        //   value={Password}
        //   onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" class="btn btn-primary btn_custmise">
        Register 
      </button><br/>
      
      <div className="alr">
      <span >Already have an account?  <Link className="link" to='/form'>Login</Link></span>
      </div>
      </div>
      
    </form>

    {/* <button onClick={() => navTopage('/from')}>Go to about pages</button> */}


<div>
        {
            allEntry.map((curElem)=>{
                 return(
                    <div >
                    <p className="text">{curElem.Firstname}</p>
                    <p className="text">{curElem.Lastname}</p>
                    <p className="text">{curElem.Phonenumber}</p>
                        <p className="text">{curElem.Email}</p>
                        <p className="text">{curElem.Password}</p>
                    </div>
                 )
            })   
        }
    </div>
    </div>
    
  </>
  )
}

export default SignUp;