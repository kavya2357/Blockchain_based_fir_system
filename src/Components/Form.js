import * as config from "./library/config.json";
import React, { useEffect, useState } from "react";
import { add, getValue, multiply, update } from "./library/interact";
import { connectWalletBeacon, setup } from "./library/connect";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import "./Form.css"
const Styles = styled.div`
 background: lavender;
 padding: 20px;

 h1 {
   border-bottom: 1px solid white;
   color: #3d3d3d;
   font-family: sans-serif;
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   width:50%;
   padding: 30px 50px;
 }

 input {
   border: 1px solid black;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
   margin-bottom: 15px;
 }

 label {
   color: #3d3d3d;
   display: block;
   font-family: sans-serif;
   font-size: 14px;
   font-weight: 500;
   margin-bottom: 5px;
 }

 .error {
   color: red;
   font-family: sans-serif;
   font-size: 12px;
   height: 30px;
 }

 .submitButton {
   background-color: #6976d9;
   color: black;
   font-family: sans-serif;
   font-size: 18px;
   margin: 20px 0px;
 `;
const Form=() => {
    const [Tezos, setTezos] = useState(undefined);
    const [status, setStatus] = useState("No Operations Performed");
    const [value, setValue] = useState(0);
    const [loader, setLoader] = useState(true);
    const { register, handleSubmit } = useForm();
    useEffect(() => {
      console.log("run");
      setup().then(setTezos).catch(console.error);
    }, []);
  
    useEffect(() => {
      if (Tezos === undefined) return;
      getValue(Tezos)
        .then(setValue)
        .then(() => setLoader(false))
        .catch(console.error);
      const timer = setInterval(() => {
        getValue(Tezos).then(setValue).catch(console.error);
      }, 60000);
  
      return () => {
        clearInterval(timer);
      };
    }, [Tezos]);
  
    const handleEvent = async (e, func, params) => {
      e.preventDefault();
      try {
        const wal = await connectWalletBeacon();
        Tezos.setWalletProvider(wal);
        setLoader(true);
        await func(Tezos, params, setStatus);
        await getValue(Tezos)
          .then(setValue)
          .then(() => setLoader(false));
      } catch (err) {
        console.error(err);
        alert("Couldn't connect wallet");
      }
    };
  
    return (
      <div className="App">
       
        <Styles>
        <form
          onSubmit={async (e) => {
            await handleEvent(e, update,
          {
            fname:e.target.fname.value,
            lname:e.target.lname.value,
            fathersName: e.target.fathersName.value,
            aadhar:e.target.aadhar.value,
            gender: e.target.gender.value,
            age: e.target.age.value,
            PhoneNumber: e.target.PhoneNumber.value,
            address: e.target.address.value,
            city: e.target.city.value,
            state: e.target.state.value,
            zip: e.target.zip.value,
            doi: e.target.doi.value,
            comments: e.target.comments.value,
            
          }
              );
          }}
        >
          <b style={{marginBottom:'20px'}}>Personal Details:</b>
          <div className="names">
            <div>
              <label>First Name : </label>
              <input type="text" name="fname" step="1" />
            </div>
            
            <div>
              <label>Last Name : </label>
              <input type="text" name="lname" step="1" />
            </div>
            
          </div>
          
          <div>
              <label>Father's Name : </label>
              <input type="text" name="fathersName" step="1" />
          </div>
          
          <div>
              <label>Aadhar Number : </label>
              <input type="text" name="aadhar" step="1" /><br></br>
          </div>

          <div>
              <label>Gender : </label>
              <input type="text" name="gender" step="1" /><br></br>
          </div>

          <div>
            <label> Age : </label>
            <input type="text" name="age" step="1" />
          </div>

          <div>
            <label>Phone : </label>
            <input type="text" name="PhoneNumber" step="1" />
          </div>

          <div>
            <div>
                <label>Street Adress:</label>
                <input type="text" name="address" step="1"/>
            </div>
            
            <div className="address">
              <div>
                <label>City/Town:</label>
                <input type="text" name="city" step="1"/>
              </div>
              <div>
                <label>State/Province:</label>
                <input type="text" name="state" step="1"/>
              </div>
              <div>
                <label>Zip/Postal code:</label>
                <input type="text" name="zip" step="1"/>
              </div>
                
            </div>
          </div>

          <b style={{marginBottom:'20px'}}>Complaint Details:</b>
          <div>
            <label>Date of Incident : </label>
            <input type="text" name="doi" step="1"  />
          </div>

          <div>
            <label>Complaint : </label>
            <input type="text" name="comments" step="1"  />
          </div>
          
          <input type="submit" value="Submit" />
        </form>
        </Styles>
      </div>
    );
  };
  
  const Loader = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          display: "block",
          marginTop: "3vw",
          marginBottom: "-1vw",
        }}
        width="3vw"
        height="3vw"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#0a0a0a"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    );
};

export default Form