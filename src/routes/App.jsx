import React from 'react'
import '../styles/global.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path= "/" element={<Home/>}/>
          <Route exact path= "/login" element= {<Login />}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;