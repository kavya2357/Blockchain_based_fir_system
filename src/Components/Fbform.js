import React, { useState } from 'react'
import './Form.css'

function Fbform() {

    const [info,setInfo]=useState(
        {
            fname:'',lname:'',fathersName:'',aadhar:'',gender:'',age:'',PhoneNumber:'',address:'',city:'',state:'',zip:'',doi:'',comments:''
        }
    )
    let name,value
    const data=(e) =>{
         name=e.target.name;
         value=e.target.value;
         setInfo({...info,[name]:value});
    }

    const getdata=(e)=>{
      const {fname,lname,fathersName,aadhar,gender,age,PhoneNumber,address,city,state,zip,doi,comments} =info;
      e.preventDefault();
      const options={
        method:'POST',
        headers:{
          'Content-Type':'aplication/json'
        },
        body:JSON.stringify({
          fname,lname,fathersName,aadhar,gender,age,PhoneNumber,address,city,state,zip,doi,comments
        })
      }
      const res=fetch('https://firdata-6411a-default-rtdb.firebaseio.com/FirData.json', options
      )
      if(res){
        alert("Data sent")
      }else{
        alert("Error occured")
      }
    }
  return (
    <div>
      <div style={{backgroundColor:'rgb(2 132 199)'}}>
        <h1 style={{fontSize:'25px', border:'none', color:'black', padding:'23px'}}>BlockchainFIR: Secure Incident Reporting System</h1>
      </div>
      <div>
    <form method='POST'>
          <b style={{marginBottom:'20px'}}>Personal Details:</b>
          <div className="name">
            <div>
              <label>First Name : </label>
              <input type="text" name="fname" step="1" style={{width:'280px'}} value={info.fname} onChange={data}/>
            </div>
            
            <div>
              <label>Last Name : </label>
              <input type="text" name="lname" step="1" style={{width:'280px'}} value={info.lname} onChange={data}/>
            </div>
          </div>
          
          <div>
              <label>Father's Name : </label>
              <input type="text" name="fathersName" step="1" value={info.fathersName} onChange={data}/>
          </div>
          
          <div>
              <label>Aadhar Number: </label>
              <input type="text" name="aadhar" step="1" required value={info.aadhar} onChange={data}/><br></br>
          </div>

          <div>
              <label>Gender : </label>
              <input type="text" name="gender" step="1" value={info.gender} onChange={data}/><br></br>
          </div>

          <div>
            <label> Age : </label>
            <input type="text" name="age" step="1" value={info.age} onChange={data}/>
          </div>

          <div>
            <label>Phone : </label>
            <input type="text" name="PhoneNumber" step="1" value={info.PhoneNumber} onChange={data}/>
          </div>

          <div>
            <div>
                <label>Street Adress:</label>
                <input type="text" name="address" step="1" value={info.address} onChange={data}/>
            </div>
            
            <div className="address">
              <div>
                <label>City/Town:</label>
                <input type="text" name="city" step="1" value={info.city} onChange={data}/>
              </div>
              <div>
                <label>State/Province:</label>
                <input type="text" name="state" step="1" value={info.state} onChange={data}/>
              </div>
              <div>
                <label>Zip/Postal code:</label>
                <input type="text" name="zip" step="1" value={info.zip} onChange={data}/>
              </div>
                
            </div>
          </div>

          <b style={{marginBottom:'20px'}}>Complaint Details:</b>
          <div>
            <label>Date of Incident : </label>
            <input type="text" name="doi" step="1" value={info.doi} onChange={data}/><br></br>
          </div>

          <div>
            <label>Complaint : </label>
            <input type="textarea" name="comments" step="1" value={info.comments} onChange={data}/><br></br>
          </div>
          
          <button onClick={getdata} style={{width:'100%', height:'40px', backgroundColor:'#6976d9', fontSize:'20px', border:'none'}}>Submit</button>
        </form>
        </div>
        </div>
  )
}

export default Fbform