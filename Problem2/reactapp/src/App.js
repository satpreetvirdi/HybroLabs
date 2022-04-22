import axios from "axios"
import { useState } from "react"
import './App.css';


function App() {
  const [apidata, setData] = useState([]);


  const getDATA = async () => {
    const number = Math.floor(Math.random() * 10) + 1
      
    const appData =  await axios.get(`https://swapi.dev/api/people/${number}`)
    .then(res => res.data);
 
    
    if(apidata.some((user) => user.name === appData.name)){
      console.log("User already exist");
    }else{
      setData([...apidata, appData])
    };
  };
  console.log(apidata)
  const deleteUser = (itemtoDelete) => {
    setData(apidata.filter(user => user.name !== itemtoDelete));
  }

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      marginTop :10
    }} >
      <button onClick={() => { getDATA() }}>Add Record</button>
      <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
        
      }}>
        {
          apidata.map((users) => {
            return (
              <div key={users.name}>
                <h2>{users.name}</h2>
                <button onClick={() => { deleteUser(users.name) }}>Delete</button>
              </div>
            )
          })
        }
      </div>



    </div>
  )
}

export default App;
