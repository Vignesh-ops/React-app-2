import { useEffect, useState } from 'react';
import './App.css';
import Users from './Users';
import Comments from './Comments';
import Posts from './Posts';
import Form from './Form';
import List from './List';
import Listitem from './Listitem';

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/"

  const [userdata, setusers] = useState("users")
  const [listitems, setlistitems] = useState([])



  useEffect(() => {
    const handleusers = async () => {
      try {
        const response = await fetch(`${API_URL}${userdata}`);
        if (!response.ok) throw new Error('Something went wrong!');
        const data = await response.json();
        setlistitems(data);
      } catch (error) {
        console.error(error);
      }
    };
    handleusers();

  }, [userdata])


  return (
    <div className="App">

      <div className='apitab'>
        <Form setusers={setusers} />
        {/* <Posts listdata={listitems} setusers={setusers}  userdata={userdata}/>
      <Comments listdata={listitems} setusers={setusers} userdata={userdata} /> */}
      </div>
      <Listitem listdata={listitems} />

    </div>
  );
}

export default App;
