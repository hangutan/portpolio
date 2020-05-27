import React from 'react';
import './App.css';
import Header from './layout/Header/Header';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Portfolio} from './routes';

function App() {
  const ShowRoutePortfolio = () =>{
    return(
      Portfolio.map((item,index)=>{
        return(
          <Route
            key={index}
            path={item.path}
            exact={item.exact}
            component={item.component}
          />
        )
      })
    )
  }
  return (
    <Router>
      <div className="app">
        <div className="wapper">
          <div className="khung">
            <Header/>
            <section className="sec2">
              <div className="khung-img">
                <div className="rectangle"></div>
                <div className="triangle"></div>
                <div className="name">
                  <h4>Hà Ngủ Tân</h4>
                  <p>Dev ReactJs</p>
                </div>
                <div className="icon">
                  <i className="fa fa-facebook"></i>
                  <i className="fa fa-telegram"></i>
                  <i className="fa fa-skype"></i>
                  <i className="fa fa-twitter"></i>
                  <i className="fa fa-instagram"></i>
                </div>
                <div className="button">
                  <button

                  >
                    <a href="https://github.com/hangutan/CV/blob/master/CV.pdf"
                      className="btn-contact"
                    >
                      Download CV
                    </a>  
                  </button>
                  <button
                   
                    type="button"
                  ><Link  className="btn-contact" to="/contact">Contact Me</Link></button>
                </div>
              </div>
              
            </section>
            <section className="sec3">
              {ShowRoutePortfolio()}
            </section>
          </div>
        </div>
      </div>
      </Router>
  );
}

export default App;
