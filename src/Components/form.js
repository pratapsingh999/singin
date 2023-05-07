import React, { useState } from "react";

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
<div className="color">
    <form className="form" onSubmit={submitForm}>
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
      <button type="submit" class="btn btn-primary">
        login
      </button>
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
    </div>
    </>
  );
}

export default Form;


  