import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './card.css';
import Mod1Image from '../images/Mod1.png';
import Mod2Image from '../images/Mod2.png';
import Mod3Image from '../images/Mod3.png';
import Mod4Image from '../images/Mod4.png';
import Mod5Image from '../images/Mod5.png';
import Mod6Image from '../images/Mod6.png';
import Mod7Image from '../images/Mod7.png';
import Mod8Image from '../images/Mod8.png';

const Home = () => {
    return (
        <div>
            <Header />
            <div>
              <h1>Modules</h1>

              <div>
                <p>Quick links</p>
                <a></a>
                <a></a>
              </div>

              <div class="row">

                <div class="column">
                  <div class="card">
                    <h3>Module 1</h3>
                    <img 
                      src={Mod1Image} 
                      alt="Module 1 cover pic"
                    />
                    <li>Define Sample Size and Its Importance</li>
                    <li>Determine Appropriate Sample Sizes for Various Analyses</li>
                    <li>Understand relationship Between Sample Size & Statistical Significance</li>
                    <li>Assess the Impact of Sample Size on Data Representation</li>
                    <Link to="/ModuleOne" className="button-style">
                      <button>Begin Learning</button>
                    </Link>
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3>Module 2</h3>
                    <img 
                      src={Mod2Image} 
                      alt="Module 2 cover pic"
                    />
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3>Module 3</h3>
                    <img 
                      src={Mod3Image} 
                      alt="Module 3 cover pic"
                    />
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3>Module 4</h3>
                    <img 
                      src={Mod4Image} 
                      alt="Module 4 cover pic"
                    />
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3>Module 5</h3>
                    <img 
                      src={Mod5Image} 
                      alt="Module 5 cover pic"
                    />
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3>Module 6</h3>
                    <img 
                      src={Mod6Image} 
                      alt="Module 6 cover pic"
                    />
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3>Module 7</h3>
                    <img 
                      src={Mod7Image} 
                      alt="Module 7 cover pic"
                    />
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3>Module 8</h3>
                    <img 
                      src={Mod8Image} 
                      alt="Module 8 cover pic"
                    />
                    <li>Define Missing Data Types (MCAR, MAR, MNAR)</li>
                    <li>Address Missing Data Impact on accuracy and bias</li>
                    <li>Identify Outliers using visual/statistical methods</li>
                    <li>Manage Outliers to balance accuracy and insights</li>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Home;