import React from 'react';
import AmountBar from './components/AmountBar';
import UserList from './components/UserList';
import { useState } from 'react';
function App() {
    const [data,setData] = useState([]);
    const getData = (term) =>{
        setData(term);
    }
    // console.log(data);
    return (
        <div>
            <AmountBar getData = {getData}/>
            <UserList Userdata = {data}/>
        </div>
    )
}

export default App;