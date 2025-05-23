import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import ModuleBar from './ModuleBar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css';
import Mod1Image from '../images/Mod1.png';
import Mod2Image from '../images/Mod2.png';
import Mod3Image from '../images/Mod3.png';
import Mod4Image from '../images/Mod4.png';
import Mod5Image from '../images/Mod5.png';
import Mod6Image from '../images/Mod6.png';
import Mod7Image from '../images/Mod7.png';
import Mod8Image from '../images/Mod8.png';

const modules = [
  {
    title: 'Sampling',
    image: Mod1Image,
    link: '/sampling',
    items: [
      'Understanding how the size of a data set determines what it means',
      "Sampling methods (probability and non-probability): Choose who’s in your study",
      "Sample size: Influences how well your results reflect the whole population",
      "Method and size of sample influence trustworthy and importance of results are",
    ]
    ,
  },
  {
    title: 'Change Over Time',
    image: Mod2Image,
    link: '/change-over-time',
    items: [
      'Understanding the easiest ways to track progress and show results',
      'Percentage change: How a number has increased or decreased over time',
      'Percentage point difference: difference between percentages to show change',
      'Points ≠ Change: 50% → 75% is a 50% increase (NOT 25% increase, but 25 percentage points increase)'
    ],
  },
  {
    title: 'Relationships',
    image: Mod3Image,
    link: '/relationships',
    items: [
      "Understanding how two things can be connected and how to show it",
      "Association: Two variables change together—it shows a relationship",
      "Causality: One variable causes another to change",
      "Association ≠ Causation: Events at the same time don't mean one caused the other",
    ],
  },
  {
    title: 'Patterns & Variation',
    image: Mod4Image,
    link: '/patterns-and-variability',
    items: [
      "Understanding what different shapes of data can tell you",
      "Learn how to spot patterns in your data",
      "Distribution: Shape of your data and how values are spread out",
      "Variance & Standard Deviation: How much the data values are different to each other",
      "Choose the best average to represent your data.",
    ],
  },
  {
    title: 'Uncertainty',
    image: Mod5Image,
    link: '/uncertainty',
    items: [
      "Understanding what can make data tricky helps you trust your results more",
      "Noise: Random changes that make data confusing",
      "Inaccuracy: Repeated mistakes in collecting data",
      "Both can change what your data shows",
      "Fixing these problems makes your results clearer and more reliable"
    ]
  },
  {
    title: 'Statistical Signif.',
    image: Mod6Image,
    link: '/statistical-significance',
    items: [
      "Understanding if something really worked or just happened by luck",
      "Statistical significance: Showing if a result is unlikely to be due to chance",
      "P-value: How likely it is if the result happened randomly",
      "Low p-value (<0.05): Suggests a real effect, not just coincidence",
      "High p-value (>0.05): Suggests an effect is by chance or coincidence"
    ],
  },
  {
    title: 'Social Implications',
    image: Mod7Image,
    link: '/social-implications',
    items: [
      "Understanding how data choices affect real people and communities",
      "Representation: Making sure data includes all groups fairly",
      "Bias: When data leads to unfair or inaccurate results",
      "Fair sampling and bias checks help create better, more ethical data"
    ],
  },
  {
    title: 'Skewing The Data',
    image: Mod8Image,
    link: '/skewing-the-data',
    items: [
      "Understanding how incomplete or unusual data affect your results",
      "Missing data: When information is incomplete, causing bias or weak conclusions",
      "Outliers: Data points that don’t fit the trend and can skew results",
      "The context of these values and how you handle them greatly changes your data",
    ],
  },
];

const Home = () => {
  const [moduleBarExpanded, setModuleBarExpanded] = useState(true); // Open by default

  return (
    <div style={{ position: 'relative', overflowX: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <ModuleBar
        onExpand={() => setModuleBarExpanded(true)}
        onCollapse={() => setModuleBarExpanded(false)}
        expanded={moduleBarExpanded}
      />
      <main className="container flex-grow-1" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <h1 className="modules-title text-center my-4">Modules</h1>
        <div className="row">
          {modules.map((mod, index) => (
            <div className="col-md-3 mb-4 column d-flex" key={index}>
              <div className="card h-100 d-flex flex-column">
                <h3>{mod.title}</h3>
                <img src={mod.image} alt={`${mod.title} cover pic`} />
                <ul>
                  {mod.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <Link to={mod.link} className="button-style mt-auto">
                  <button>Begin Learning</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
