import React, { useState } from 'react'; //import React Component
import sampling from '../images/sampling photo.png';
import simplerand from '../images/simple random photo.png';
import systematic from '../images/systematic sampling.png';
import stratified from '../images/stratified sampling.png';
import cluster from '../images/cluster sampling.png';
import voluntary from '../images/voluntary sampling.png';
import sampbias from '../images/non random sampling bias.png';
import Image from 'react-bootstrap/Image';
import Header from './Header';
import { Link } from 'react-router-dom';
import M1Quiz from './ModuleOneQuiz';


export function ModuleOne () {
    return (
        <div>
            <Header />
            <main className="module-container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '40px' }}>
                    <div style={{ flex: 4 }}>
                        <h1 className="module-title, fw-bold">Module 1 - Representativeness</h1>
                        <iframe 
                            width="805" 
                            height="461" 
                            src="https://www.youtube.com/embed/7S7j75d3GM4" 
                            title="Module 1 Video" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="module-video"
                        />
                    </div>

                    <div className="module-list" style={{ flex: 2 }}>
                        <h2>Other Modules</h2>
                        <ul>
                            <li>Representativeness</li>
                            <li>Change Over Time</li>
                            <li>Relationships</li>
                            <li>Patterns and Variability</li>
                            <li>Uncertainty</li>
                            <li>Drawing Conclusions</li>
                        </ul>
                    </div>
                </div>
                <div>  
                    <h2 className="fw-semibold">Overview</h2>
                    <p> Determining the right sample size is crucial for research accuracy. A small sample may misrepresent the population, while a large one can be resource-intensive. Balancing statistical significance with practicality requires considering effect size and margin of error. </p>
                </div>
                <div>
                    <h2 className="fw-semibold">Learning Objectives</h2>
                    <ul>
                        <li>Define Sample Size and Its Importance</li>
                        <li>Determine Appropriate Sample Sizes for Various Analyses</li>
                        <li>Understand the Relationship Between Sample Size and Statistical Significance</li>
                        <li>Assess the Impact of Sample Size on Data Representation</li>
                    </ul>
                </div>
                <div>
                    <h2 className="fw-semibold">Module Structure</h2>
                    <ul>
                        <li><a href="#sampling">Sampling</a></li>
                        <li><a href="#probability-sampling">Probability Sampling (Random Sampling)</a></li>
                        <li><a href="#non-prob-sampling">Non Probability Sampling</a></li>
                        <li><a href="#non-prob-bias">Non Probability Sampling Bias</a></li>
                        <li>Module Summary</li>
                        <li>Module Quiz</li>
                    </ul>
                </div>
                <div id="sampling">
                    <h1 className="fw-bold">Sampling</h1>
                    <img class="mx-auto" src={sampling} width="805" height="461" />
                    <h2 className="fw-semibold">What is Sampling?</h2>
                    <ul>
                        <li>Sampling methods are about how we select members to be a part of a study. </li>
                        <li>It isn’t possible to take the results of an entire population, so we use sampling to make representative conclusions about the entire population. </li>
                        <li>The way we choose members to represent a population can vary.</li>
                    </ul>
                    <h2 className="fw-semibold">Examples of Sampling in Finance</h2>
                    <p>A bank samples 10,000 loan applicants from a pool of 1 million to build a predictive model for default probability. This is toassess loan risks without processing every single application</p>
                    <h2 className="fw-semibold">Types of Sampling</h2>
                    <p>Probability Sampling: Every member has an equal random chance to be picked. A random number generator or process that relies on chance is needed to have a simple random sample. Aims to eliminate bias.</p>
                    <p>Non-Probability Sampling: Not every unit has an equal chance of selection, often used when full population data is unavailable or when convenience matters.</p>
                </div>
                <div id="probability-sampling">
                <h1 className="fw-bold">Types of Probability Sampling</h1>
                    <h2 className="fw-semibold">Simple Random Sampling</h2>
                    <img src={simplerand} width="805" height="461" />
                    <ul>
                        <li>Probability sampling is a method of selecting a sample from a population using random selection.</li>
                        <li>Random selection in sampling aims to eliminate bias by having an element of chance.</li>
                        <li>Picking a name out of a hat for a raffle.</li>
                    </ul>
                    <h2 className="fw-semibold">Systematic Random Sampling</h2>
                    <img src={systematic} width="805" height="461" />
                    <ul>
                        <li>Population members are put into an ordered queue, and at a random starting point every kth (5th, 3rd, 10th member etc) is chosen.</li>
                        <li>Ex: Line up by birthday, select every 10th person.</li>
                    </ul>
                    <h2 className="fw-semibold">Stratified Sampling</h2>
                    <img src={stratified} width="805" height="461" />
                    <ul>
                        <li>Stratified sampling divides a population into distinct groups (strata) based on a characteristic like income.</li>
                        <li>Randomly selects a proportional number of individuals from each group to ensure fair representation in the sample.</li>
                    </ul>
                    <h2 className="fw-semibold">Cluster Sampling</h2>
                    <img src={cluster} width="805" height="461" />
                    <ul>
                        <li>The population is split into groups and then some of the groups are randomly picked with each member in the selected groups making up the sample.</li>
                        <li>Ex: Doctor’s office wants to know how their service is, so they randomly select all the patients of 3 doctors a day to survey.</li>
                        <li>Pros: Gets every member from so group, so good when each group reflects the population.</li>
                    </ul>
                </div>
                <div id="non-prob-sampling">
                    <h1>Non-Probability Sampling</h1>
                    <h2 className="fw-semibold">Voluntary Response Sampling</h2>
                    <img src={voluntary} width="805" height="461" />
                    <ul>
                        <li>Ex: Researcher asks people on a college campus at 1:30 pm questions as they walk by.</li>
                        <li>Bias: More likely to get college students, as time of day is during the work day and on college campus.</li>
                        <li>Researcher asks people to join the sample and the people decide if they want to or not.</li>
                        <li>Open to bias because people that want to respond will likely have stronger opinions than everyone else.</li>
                    </ul>
                    <h2 id="non-prob-bias" className="fw-semibold">Non-Probability Sampling Bias</h2>
                    <img src={sampbias} width="805" height="461" />
                    <ul>
                        <li>Non-probability sampling involves non-random selection for easier data collection and is more convenient.</li>
                        <li>Researcher chooses a sample that is available in a non-random way. This can be affected by bias because the time of day and place where the researcher is choosing people can produce a sample that is biased.</li>
                    </ul>
                </div>

                <M1Quiz />

            </main>
        </div>
    )
}
