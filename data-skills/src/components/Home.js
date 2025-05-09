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
              <h1 class="modules-title">Modules</h1>
              <div class="row">

                <div class="column">
                  <div class="card">
                    <h3>Sampling</h3>
                    <img 
                      src={Mod1Image} 
                      alt="Module 1 cover pic"
                    />
                    <li>Define Sample Size and Its Importance</li>
                    <li>Determine Appropriate Sample Sizes for Various Analyses</li>
                    <li>Understand relationship Between Sample Size & Statistical Significance</li>
                    <li>Assess the Impact of Sample Size on Data Representation</li>
                    <Link to="/sampling" className="button-style">
                      <button>Begin Learning</button>
                    </Link>
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3>Change Over Time</h3>
                    <img 
                      src={Mod2Image} 
                      alt="Module 2 cover pic"
                    />
                    <li>Define Sample Size and Its Importance</li>
                    <li>Determine Appropriate Sample Sizes for Various Analyses</li>
                    <li>Understand relationship Between Sample Size & Statistical Significance</li>
                    <li>Assess the Impact of Sample Size on Data Representation</li>
                    <Link to="/change-over-time" className="button-style">
                      <button>Begin Learning</button>
                    </Link>
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3>Relationships</h3>
                    <img 
                      src={Mod3Image} 
                      alt="Module 3 cover pic"
                    />
                    <li>Define Sample Size and Its Importance</li>
                    <li>Determine Appropriate Sample Sizes for Various Analyses</li>
                    <li>Understand relationship Between Sample Size & Statistical Significance</li>
                    <li>Assess the Impact of Sample Size on Data Representation</li>
                    <Link to="/relationships" className="button-style">
                      <button>Begin Learning</button>
                    </Link>
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3>Patterns And Variability</h3>
                    <img 
                      src={Mod4Image} 
                      alt="Module 4 cover pic"
                    />
                    <li>Define Sample Size and Its Importance</li>
                    <li>Determine Appropriate Sample Sizes for Various Analyses</li>
                    <li>Understand relationship Between Sample Size & Statistical Significance</li>
                    <li>Assess the Impact of Sample Size on Data Representation</li>
                    <Link to="/patterns-and-variability" className="button-style">
                      <button>Begin Learning</button>
                    </Link>
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3>Uncertainty</h3>
                    <img 
                      src={Mod5Image} 
                      alt="Module 5 cover pic"
                    />
                    <li>Define Sample Size and Its Importance</li>
                    <li>Determine Appropriate Sample Sizes for Various Analyses</li>
                    <li>Understand relationship Between Sample Size & Statistical Significance</li>
                    <li>Assess the Impact of Sample Size on Data Representation</li>
                    <Link to="/uncertainty" className="button-style">
                      <button>Begin Learning</button>
                    </Link>
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3>Statistical Significance</h3>
                    <img 
                      src={Mod6Image} 
                      alt="Module 6 cover pic"
                    />
                    <li>Define Sample Size and Its Importance</li>
                    <li>Determine Appropriate Sample Sizes for Various Analyses</li>
                    <li>Understand relationship Between Sample Size & Statistical Significance</li>
                    <li>Assess the Impact of Sample Size on Data Representation</li>
                    <Link to="/statistical-signifiance" className="button-style">
                      <button>Begin Learning</button>
                    </Link>
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3>Societal Implications</h3>
                    <img 
                      src={Mod7Image} 
                      alt="Module 7 cover pic"
                    />
                    <li>Define Sample Size and Its Importance</li>
                    <li>Determine Appropriate Sample Sizes for Various Analyses</li>
                    <li>Understand relationship Between Sample Size & Statistical Significance</li>
                    <li>Assess the Impact of Sample Size on Data Representation</li>
                    <Link to="/social-implications" className="button-style">
                      <button>Begin Learning</button>
                    </Link>
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3>Skewing The Data</h3>
                    <img 
                      src={Mod8Image} 
                      alt="Module 8 cover pic"
                    />
                    <li>Define Missing Data Types (MCAR, MAR, MNAR)</li>
                    <li>Address Missing Data Impact on accuracy and bias</li>
                    <li>Identify Outliers using visual/statistical methods</li>
                    <li>Manage Outliers to balance accuracy and insights</li>
                    <Link to="/skewing-the-data" className="button-style">
                      <button>Begin Learning</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Home;