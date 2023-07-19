import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blog/:id'>
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;

// ESEMPI

// function App() {
//   const title = 'Welcome to the new blog';
//   const like = 50;
//   // const person = {name: 'emma', age: 23}
//   const link = "https://www.google.com"

//   return (
//     <div className="App">
//       <div className="content">
//         <h1>{title}</h1>
//         <p>Liked {like} times</p>
//         {/* <p>{person}</p> */}

//         <p>{ 10 }</p>
//         <p>{ "emma" }</p>
//         <p>{ [1,2,3,4] }</p>
//         <p>{ Math.random(0,10)*2 }</p>

//         <a href={link}>GOOGLE SITE</a>
//       </div>
//     </div>
//   );
// }
