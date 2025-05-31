import React from 'react';
import ModulePage from '../components/ModulePage';
import ListBlock from '../components/ListBlock';
import ParaBlock from '../components/ParaBlock';
import CalloutBlock from '../components/CalloutBlock';
import FormulaBlock from '../components/FormulaBlock';
import TableBlock from '../components/TableBlock';
import ImageBlock from '../components/ImageBlock';
import AdditionalSourcesBlock from '../components/AdditionalBlock';
import ModuleIntro from '../components/ModuleIntro';
import QuizBlock from '../components/QuizBlock';

const skewleft = '/mod4/image (1).png';
const uniform = '/mod4/image (2).png';
const skewright = '/mod4/image (3).png';
const unimodal = '/mod4/image (4).png';
const stdf = '/mod4/notion3.png';

const overview = (
    <div className="overview-text">
        <p>
            Understanding the <strong>shape</strong>, <strong>spread</strong>, and <strong>trends</strong> of data reveal the story behind the numbers. There are also many numbers related to the shape, so picking the best option for different types of number sets is important. This module covers:
        </p>
    </div>
);

const toc = (
    <div className="toc-container">
        <h5>Table of Contents</h5>
        <ul style={{ listStylePosition: 'inside', paddingRight: '1rem' }}>
            <li><a href="#distribution">Distribution</a></li>
            <li><a href="#variance">Variance</a></li>
            <li><a href="#standard-deviation">Standard Deviation</a></li>
            <li><a href="#averages-vs-means">Averages vs. Means</a></li>
            <li><a href="#mean-median-mode">Mean, Median, Mode</a></li>
            <li><a href="#why-it-matters">Why It Matters</a></li>
            <li><a href="#pat-quiz">Module Quiz</a></li>
        </ul>
    </div>
);

const quizData = [
  {
    id: 1,
    question: "What does the shape of a data distribution tell you?",
    options: [
      "The cause of the data values",
      "The average of the values",
      "How values are spread out or clustered",
      "Whether the data is biased"
    ],
    correctAnswer: "How values are spread out or clustered",
    explanation: {
      correct: "The distribution's shape reveals patterns—whether values are tightly packed, spread out, or skewed.",
      incorrect: "Distribution doesn't explain causes, averages, or bias—it shows how data values are arranged and spread."
    }
  },
  {
    id: 2,
    question: "What is a characteristic of a right-skewed distribution?",
    options: [
      "Most values are high, with a few very low outliers",
      "Most values are low, with a few high outliers",
      "Values are spread evenly across the range",
      "The distribution has two peaks"
    ],
    correctAnswer: "Most values are low, with a few high outliers",
    explanation: {
      correct: "Right-skewed distributions have a long tail on the right—most values are lower, but a few large ones stretch the distribution.",
      incorrect: "A left-skewed distribution has low outliers, a uniform distribution spreads values evenly, and two peaks suggest a bimodal shape."
    }
  },
  {
    id: 3,
    question: "What does high variance indicate in a dataset?",
    options: [
      "The values are very similar",
      "There is a consistent pattern",
      "Values differ widely from each other",
      "The data is not skewed"
    ],
    correctAnswer: "Values differ widely from each other",
    explanation: {
      correct: "High variance means the data points are spread out and less consistent.",
      incorrect: "Low variance indicates similarity; consistent patterns aren’t implied by variance; and skewness is unrelated to variance."
    }
  },
  {
    id: 4,
    question: "When is it better to use the median instead of the mean?",
    options: [
      "When the data is normally distributed",
      "When the data contains outliers",
      "When all values are the same",
      "When calculating variance"
    ],
    correctAnswer: "When the data contains outliers",
    explanation: {
      correct: "The median isn’t pulled by extreme values, so it gives a better central value when outliers are present.",
      incorrect: "The mean works fine for normal distributions or identical values, and variance specifically requires the mean."
    }
  },
  {
    id: 5,
    question: "What does standard deviation measure?",
    options: [
      "The number of modes in the dataset",
      "The average distance of values from the mean",
      "The middle value in the dataset",
      "The shape of the distribution"
    ],
    correctAnswer: "The average distance of values from the mean",
    explanation: {
      correct: "Standard deviation tells you how much the data typically varies from the mean—it's a measure of spread.",
      incorrect: "It doesn't count modes, identify the median, or describe the shape of the distribution—just the spread."
    }
  }
];



export function ModuleFour() {
    return (
        <ModulePage
            title="Patterns and Variability"
            url="https://www.youtube.com/embed/VIDEO_ID" // Replace with actual video URL if available
        >
            <ModuleIntro
                title="Patterns and Variability"
                readTime="7 min read"
                overview={overview}
                toc={toc}
            />

            <ListBlock
                title="Summary"
                items={[
                    "Patterns in data help reveal trends and important differences.",
                    "Distribution shows the shape of your data—how values are spread out.",
                    "Variance and standard deviation tell you how much the data values differ.",
                    <span><strong>Averages aren’t all the same:</strong> mean, median, and mode each tell a different story.</span>,
                    <span>These tools help you make smarter decisions by understanding what the data is really saying.</span>
                ]}
            />

            <div id="distribution">
                <ParaBlock title="Distribution" level={1} items={[]} />
                <CalloutBlock
                    type="info"
                    title="Distribution"
                    description="Describes how frequently certain values appear and the overall shape of the dataset."
                />
                <TableBlock
                    title="Types of Distribution"
                    headers={['Type', 'Description', 'Example']}
                    rows={[
                        ['Left Skewed', 'Most values are high; fewer low values (long left tail)', 'Seniors’ bedtime at a retirement home'],
                        ['Normal (unimodal)', 'Most values are in the middle, fewer at extremes', 'Height'],
                        ['Right Skewed', 'Most values are low; fewer high values (long right tail)', 'Number of pets'],
                        ['Uniform', 'All values are equally likely', 'Rolling a die'],
                    ]}
                />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
                    <ImageBlock src={skewleft} style={{ width: '50%' }} />
                    <ImageBlock src={skewright} style={{ width: '50%' }} />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
                    <ImageBlock src={uniform} style={{ width: '50%' }} />
                    <ImageBlock src={unimodal} style={{ width: '50%' }} />
                </div>
                <ParaBlock
                    items={[
                        <span key="distribution-explanation">Understanding <strong>distribution</strong> can help assess equity, access, and consistency. For example:</span>,
                        <ul key="distribution-examples">
                            <li><strong>Equity index:</strong> Distribution of access to transportation, parks, or healthcare across neighborhoods can reveal service gaps.</li>
                            <li><strong>Human Services:</strong> Distribution of food assistance uptake by ZIP code could indicate issues with outreach or accessibility.</li>
                        </ul>
                    ]}
                />
            </div>

            <div id="variance">
                <ParaBlock title="Variance" level={1} items={[]} />
                <CalloutBlock
                    type="info"
                    title="Variance"
                    description="Measures how much values differ from each other on average."
                />
                <TableBlock
                    title="Types of Variance"
                    headers={['Type', 'Description', 'Example']}
                    rows={[
                        ['Low', 'Values are close together', 'Height of preschoolers'],
                        ['High', 'Values are very different', 'Heights at a basketball game (kids, adults, tall players)'],
                    ]}
                />
                <ParaBlock
                    items={[
                        <span key="variance-tip">Tips for dealing with high variability:</span>,
                        <ul key="variance-tips">
                            <li>Use a <strong>larger sample size</strong></li>
                            <li><strong>Clean</strong> or <strong>transform</strong> skewed data</li>
                            <li>Be cautious when comparing high-variance datasets—<strong>context matters</strong></li>
                        </ul>
                    ]}
                />
            </div>

            <div id="standard-deviation">
                <ParaBlock title="Standard Deviation" level={1} items={[]} />
                <CalloutBlock
                    type="info"
                    title="Standard Deviation"
                    description="A measure of how far values typically fall from the mean."
                />
                <ListBlock
                    items={[
                        <span key="sd-low">Low standard deviation: Values are close to the mean.</span>,
                        <span key="sd-high">High standard deviation: Values are far from the mean.</span>,
                    ]}
                />
                <ParaBlock title="Formula" level={2} items={[
                    <FormulaBlock title="Standard Deviation Formula">
                        <span key="sd-formula">σ = √(Σ(xi - μ)² / N)</span>
                    </FormulaBlock>
                ]} />
                <ImageBlock src={stdf} />
            </div>

            <div id="averages-vs-means">
                <ParaBlock title="Averages vs. Means" level={1} items={[]} />
                <CalloutBlock
                    type="info"
                    title="Mean"
                    description="The sum of all numbers divided by the number of values."
                />
                <ListBlock
                    items={[
                        <span key="mean-definition">Best to use when your data is <strong>normal</strong> and <strong>balanced</strong>.</span>,
                        <span key="median-definition">If everything is normal, then the average won't be getting dragged by outliers.</span>,
                    ]}
                />
            </div>

            <div id="mean-median-mode">
                <ParaBlock title="Mean, Median, and Mode" level={1} items={[]} />
                <CalloutBlock
                    type="info"
                    title="What are Mean, Median, and Mode?"
                    description="These are three common ways to find the 'average' in a set of numbers. Each tells a different part of the story."
                />
                <ListBlock
                    items={[
                        <span key="mean"><strong>Mean:</strong> Add up all the numbers, then divide by how many there are. This is the typical average.</span>,
                        <span key="median"><strong>Median:</strong> Line up the numbers in order and find the one in the middle. This helps when there are extreme values.</span>,
                        <span key="mode"><strong>Mode:</strong> The number that appears the most. Useful when one number stands out.</span>,
                        <span key="tip">Choose the one that best fits your data. For example, use median if your data has outliers that could skew the mean.</span>
                    ]}
                />
            </div>

            <div id="why-it-matters">
                <ParaBlock title="Why It Matters" level={1} items={[
                    "Understanding distribution, variance, standard deviation, and averages helps you:",
                ]} />
                <ListBlock
                    items={[
                        <span key="takeaway-1">See whether values are <strong>clustered</strong> or <strong>spread apart</strong></span>,
                        <span key="takeaway-2">Identify <strong>extreme outliers</strong></span>,
                        <span key="takeaway-3">Determine if the average gives a <strong>reliable summary</strong></span>
                    ]}
                />
            </div>

            <ParaBlock
                items={[
                    "These tools are the foundation of statistical thinking and help you recognize patterns, spot bias, and ask better questions.",
                ]}
            />

            <div id="pat-quiz">
                <ParaBlock title="Module Quiz" level={1} />
                <QuizBlock quizData={quizData} />
            </div>
            <AdditionalSourcesBlock
                sources={[
                    {
                        label: "K2 Analytics: Standard Deviation and Variance",
                        url: "https://www.k2analytics.co.in/measures-of-dispersion-standard-deviation/",
                    },
                    {
                        label: "Data Science Dojo: Types of Statistical Distributions",
                        url: "https://datasciencedojo.com/blog/types-of-statistical-distributions-in-ml/",
                    },
                    {
                        label: "Airbyte: Data Distribution Types",
                        url: "https://airbyte.com/data-engineering-resources/data-distribution-types",
                    },
                    {
                        label: "SERJ: Reasoning with Variability",
                        url: "https://iase-pub.org/ojs/SERJ/article/view/547",
                    },
                ]}
            />
        </ModulePage>
    );
}
