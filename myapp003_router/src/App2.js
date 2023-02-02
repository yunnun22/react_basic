import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dashboard from './components2/Dashboard';
import Home from './components2/Home';
import About from './components2/About';
import Layout from './components2/Layout';
import NoMatch from './components2/NoMatch';

// v6
// npm install react-router-dom
const App = () => {
  return (
    <div>
      <h1>Basic Example</h1>
      {/* 
      
      */}

      {/* Layout > Outlet */}
      {/* path = url */}
      {/* http://localhost:3000/~~~ */}
      <Routes>
        {/* <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route> */}

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;