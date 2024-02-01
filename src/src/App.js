import "./App.css";
import Test1 from './components/users/1';
import Test2 from './components/users/2';
import Test3 from './components/users/3';
import Test4 from './components/users/4';
import Test5 from './components/users/5';
import Test6 from './components/users/6';
import Test7 from './components/users/7';
import Test8 from './components/users/8';
import Test9 from './components/users/9';
import Test10 from './components/users/10';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
 

import Home from "./components/Home";

const components = [];

function App() {
  const userComponents = [
      Test1, Test2, Test3, Test4, Test5,
      Test6, Test7, Test8, Test9, Test10
  ];

  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<Home />} />
              {userComponents.map((UserComponent, index) => (
                  <Route
                      key={index}
                      path={`/users/${index + 1}`}
                      element={<UserComponent />}
                  />
              ))}
              <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </Router>
  );
}
 
export default App;