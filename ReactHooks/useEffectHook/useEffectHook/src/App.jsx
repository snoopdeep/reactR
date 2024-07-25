import { useState, useEffect } from "react";

// import './App.css'

// function App() {
//   const [items,setItem]=useState('')
//   const [resourceType, setResourceType] = useState("posts");
//   console.log('component render');
//   // useEffect examples
//   // useEffect(()=>{
//   //   console.log('This is useEffect without any parameters so it gonna run on each render ie all changes');
//   // })

//   // useEffect(() => {
//   //   console.log("resource type changed");
//   // }, [resourceType]);

//   // api example
//   useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then(response => response.json())
//       .then(json => {
//         setItem(json)
//         // console.log(json)
//       })

//   },[resourceType])

//   return (
//     <>
//       <button onClick={() => setResourceType("posts")}>Post</button>
//       <button onClick={() => setResourceType("users")}>User</button>
//       <button onClick={() => setResourceType("comments")}>Comment</button>
//       <br></br>
//       <h1>{resourceType}</h1>
//       <p>{JSON.stringify(items)}</p>

//     </>
//   );
// }

// when resize the window it should show the width using the useEffect
// we are changing the width so it should have some effect...

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleResize() {
    console.log("handleResize is executed");
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    console.log("useEffect is executed.. ");
    window.addEventListener("resize", handleResize);
    // when this app component is deleted it is necessory to remove the EL otherwise it will slow down the app
    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <h1>{width}</h1>
    </>
  );
}
export default App;
