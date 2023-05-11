import React, { useState } from "react";
import { Link } from 'react-router-dom';


function Form() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const [allEntry, setallEntry] = useState([]);

  const submitForm = (e) =>{
    e.preventDefault();     // thise for donot relode
    const newentry = {Email:Email , Password:Password}
    setallEntry([...allEntry,newentry]);
    //   ...allEntry storing the data 
    console.log(allEntry)
  }
  return (
<>

    <form className="form1" onSubmit={submitForm}>
    <h1 className="loginname">LOG IN </h1>
    <div className="container">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          placeholder="Email address"
          autoComplete="off"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn" type="submit" class="btn btn-primary btn_custmise">
        login
      </button>
      <div className="alr">
      <span >Not a member?  <Link className="link" to='/signup'>Sign Up</Link></span>
      </div>
      </div>
    </form>

    <div>
        {
            allEntry.map((curElem)=>{
                 return(
                    <div >
                        <p className="text">{curElem.Email}</p>
                        <p className="text">{curElem.Password}</p>
                    </div>
                 )
            })   
        }
    </div>
    
    </>
  );
}

export default Form;
