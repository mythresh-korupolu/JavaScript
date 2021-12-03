import React,{useState} from 'react'
import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom';
import Leaves from './Leaves';
const Home = () => {
    
    let history=useHistory();
    return (
        <div>
            <center>
                <h1>welcome to home page</h1>
              
                <button onClick={()=> history.push('./Leaves')}>login</button>
            </center>
        </div>
    )
}

export default Home
