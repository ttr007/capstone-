import React from 'react';
import ModulePage from '../components/ModulePage';
import ListBlock from '../components/ListBlock';
import ParaBlock from '../components/ParaBlock';
import CalloutBlock from '../components/CalloutBlock';
import TableBlock from '../components/TableBlock';
import AdditionalSourcesBlock from '../components/AdditionalBlock';
import ImageBlock from '../components/ImageBlock';
import ModuleIntro from '../components/ModuleIntro';
import QuizBlock from '../components/QuizBlock';

const randomvsys = '/capstone-/mod5/RandomVsSystematic.png';

const overview = (
    <div className="overview-text">
        <p>
            Understanding uncertainty in data collection helps us account for <strong>errors</strong> and <strong>improve decision-making</strong>. Recognizing errors and uncertainties in data collection helps us ensure more reliable and accurate data, which leads to better decision-making. This module covers:
        </p>
    </div>
);

const toc = (
    <div className="toc-container">
        <h5>Table of Contents</h5>
        <ul style={{ listStylePosition: 'inside', paddingRight: '1rem' }}>
            <li><a href="#noise">Noise</a></li>
            <li><a href="#inaccuracy">Inaccuracy</a></li>
            <li><a href="#accuracy-vs-precision">Accuracy vs. Precision</a></li>
            <li><a href="#comparing-noise-inaccuracy">Comparing Noise and Inaccuracy</a></li>
            <li><a href="#why-this-matters">Why This Matters</a></li>
            <li><a href="#unc-quiz">Module Quiz</a></li>
        </ul>
    </div>
);
const quizData = [
  {
    id: '1',
    question: 'What is "noise" in data collection?',
    options: [
      'Consistent errors caused by faulty instruments',
      'Random variation that makes it harder to interpret data',
      'Accurate and precise data measurements',
      'A type of deliberate data manipulation'
    ],
    correctAnswer: 'Random variation that makes it harder to interpret data',
    explanation: {
      correct: 'Correct! Noise is random variation that naturally occurs and can obscure real patterns in data.',
      incorrect: 'Incorrect. Noise refers to random variation, not consistent errors, deliberate manipulation, or ideal data.'
    }
  },
  {
    id: '2',
    question: 'Which of the following best describes "inaccuracy"?',
    options: [
      'Random variation in data collection',
      'Consistent, repeatable errors caused by flawed tools or methods',
      'Natural variability in the population',
      'A perfectly calibrated instrument'
    ],
    correctAnswer: 'Consistent, repeatable errors caused by flawed tools or methods',
    explanation: {
      correct: 'Exactly! Inaccuracy refers to systematic errors that cause consistent bias in measurements.',
      incorrect: 'Nope. Inaccuracy means systematic, repeatable errors—unlike randomness, population variability, or perfection.'
    }
  },
  {
    id: '3',
    question: 'How can noise be reduced?',
    options: [
      'Ignoring outliers in data',
      'Collecting more data and calibrating tools',
      'Using inaccurate instruments intentionally',
      'Avoiding data visualization'
    ],
    correctAnswer: 'Collecting more data and calibrating tools',
    explanation: {
      correct: 'Yes! Collecting more data helps smooth out random noise, and calibrating tools reduces measurement errors.',
      incorrect: 'Incorrect. Reducing noise involves collecting more data, improving tools, and using visuals—not ignoring or misusing data.'
    }
  },
  {
    id: '4',
    question: 'Which statement is TRUE about accuracy and precision?',
    options: [
      'High precision means measurements are close to the true value',
      'High accuracy means measurements are consistent but wrong',
      'High accuracy and high precision mean measurements are both correct and consistent',
      'Accuracy and precision are the same concept'
    ],
    correctAnswer: 'High accuracy and high precision mean measurements are both correct and consistent',
    explanation: {
      correct: 'Correct! Ideal data has both high accuracy (correctness) and high precision (consistency).',
      incorrect: 'Incorrect. Accuracy and precision are not the same—true quality means being both accurate and precise.'
    }
  },
  {
    id: '5',
    question: 'Why is addressing inaccuracy important?',
    options: [
      'It helps reduce random noise in data',
      'It prevents misleading conclusions caused by biased data',
      'It makes data collection faster',
      'It eliminates the need for calibration'
    ],
    correctAnswer: 'It prevents misleading conclusions caused by biased data',
    explanation: {
      correct: 'Exactly! Fixing inaccuracy prevents systematic bias that leads to wrong conclusions.',
      incorrect: 'No, addressing inaccuracy corrects bias—not noise, speed, or tool calibration avoidance.'
    }
  }
];

const sum = encodeURI('/capstone-/mod5/M5 Uncertainty (T).pdf');

export function ModuleFive() {
    return (
        <ModulePage
            title="Uncertainty"
            url="https://www.youtube.com/embed/dQw4w9WgXcQ"
        >
            <ModuleIntro
                title="Uncertainty"
                readTime="4 min read"
                overview={overview}
                toc={toc}
                pdfUrl={sum}
                downloadFileName="Uncertainty.pdf"
            />

            <div id="summary">
                <ParaBlock title="Summary" items={[]} />
                <ListBlock
                    items={[
                        <span key="summary-noise"><strong>Noise</strong> = Random variation that makes it harder to interpret data.</span>,
                        <span key="summary-inaccuracy"><strong>Inaccuracy</strong> = Consistent, repeatable mistakes in data collection.</span>,
                        "Both distort your data—but in very different ways.",
                        "Reducing them improves trust and confidence in your results."
                    ]}
                />
            </div>

            <div id="noise">
                <ParaBlock title="Noise" items={[]} />
                <CalloutBlock
                    type="info"
                    title="Noise"
                    description="Random variation in data that isn’t caused by meaningful differences. It’s natural, but too much hides real patterns."
                />
                <TableBlock
                    title="Sources of Noise"
                    headers={['Source', 'Description']}
                    rows={[
                        ['Measurement Errors', 'Human mistakes (misreading instruments), malfunctioning tools, or incorrect procedures'],
                        ['Sampling Variation', 'Natural randomness from collecting only part of a population—even if done correctly']
                    ]}
                />
                <CalloutBlock
                    title="Example"
                    type="example"
                    description={[
                        <span key="noise-example">Inaccurately filled client intake forms in Pierce County may create noise and reduce the ability to analyze service needs accurately.</span>
                    ]}
                />
                <ListBlock
                    title="How to Reduce Noise"
                    items={[
                        <span key="reduce-noise">Use <strong>visualizations</strong>: Box plots and scatter plots help spot outliers.</span>,
                        <span key="reduce-noise-tools">Use <strong>better tools</strong>: Calibrate devices and standardize procedures.</span>,
                        <span key="reduce-noise-data">Collect more data: Bigger datasets help smooth out random fluctuations.</span>
                    ]}
                />
            </div>

            <div id="inaccuracy">
                <ParaBlock title="Inaccuracy" items={[]} />
                <CalloutBlock
                    type="info"
                    title="Inaccuracy"
                    description="Systematic, repeatable errors that lead to consistently wrong data—often due to flawed tools or methods."
                />
                <CalloutBlock
                    title="Example"
                    type="example"
                    description={[
                        <span key="inaccuracy-example">An inaccurate clock (always 10 minutes ahead) gives you the wrong time every time. Similarly, Pierce County’s GPS or GIS tagging technologies may report inaccurate construction progress.</span>
                    ]}
                />
                <ListBlock
                    title="Why It Matters"
                    items={[
                        <span key="inaccuracy-text"><strong>Inaccuracy</strong> misleads analysis by skewing results in one direction.</span>,
                        <span>Unlike noise, inaccuracy is <strong>fixable</strong> once you identify the cause.</span>,
                        <span>Unchecked inaccuracy leads to <strong>harmful decisions</strong>.</span>
                    ]}
                />
                <ListBlock
                    title="How to Address Inaccuracy"
                    items={[
                        <span><strong>Calibrate tools</strong> and test software regularly.</span>,
                        <span>Watch for recurring <strong>errors</strong> or patterns.</span>,
                        <span>Adjust processes based on <strong>observed bias</strong>.</span>
                    ]}
                />
            </div>

            <div id="accuracy-vs-precision">
                <ParaBlock title="Accuracy vs. Precision" items={[]} />
                <CalloutBlock
                    type="info"
                    title="Accuracy vs. Precision"
                    description="Accuracy is how close a measurement is to the true value, while precision refers to the consistency of repeated measurements."
                />
                <ImageBlock src={randomvsys} />
                <ListBlock
                    items={[
                        <span>High Precision, Low Accuracy: Results are consistent, but wrong.</span>,
                        <span>High Accuracy, Low Precision: Results are close to the true value, but inconsistent.</span>,
                        <span>High Accuracy + High Precision: Ideal—consistent and correct.</span>
                    ]}
                />
            </div>

            <div id="comparing-noise-inaccuracy">
                <ParaBlock title="Noise vs. Inaccuracy" items={[]} />
                <TableBlock
                    headers={['Concept', 'Type of Error', 'Source', 'Can You Fix It?', 'Effect']}
                    rows={[
                        ['Noise', 'Random', 'Natural variation or human inconsistency', 'Can be reduced, but not fully removed', 'Makes patterns harder to detect'],
                        ['Inaccuracy', 'Systematic', 'Bad tools, bias, poor setup', 'Often fixable with better design or measurement', 'Leads to misleading conclusions']
                    ]}
                />
            </div>

            <div id="why-this-matters">
                <ParaBlock title="Why It Matters" level={1} items={[]} />
                <ListBlock
                    items={[
                        "Unaddressed uncertainty can result in:",
                        "Misleading charts.",
                        "Incorrect conclusions.",
                        "Harmful decisions in public policy, business, healthcare, and more."
                    ]}
                />
                <ParaBlock
                    items={[
                        "When you account for noise and inaccuracy, your data becomes more trustworthy—and your insights more valuable."
                    ]}
                />
            </div>

            <div id="unc-quiz">
                <ParaBlock title="Module Quiz" level={1} />
                <QuizBlock quizData={quizData} />
            </div>
            <AdditionalSourcesBlock
                sources={[
                    {
                        label: "NPL: Difference Between Accuracy and Uncertainty",
                        url: "https://www.npl.co.uk/resources/q-a/difference-accuracy-uncertainty",
                    },
                    {
                        label: "NSWTF: Uncertainty, Error, and Confidence in Data",
                        url: "https://cpl.nswtf.org.au/journal/semester-1-2020/uncertainty-error-and-confidence-in-data/",
                    },
                    {
                        label: "ONS UK: How Government Agencies May Deal With Uncertainty",
                        url: "https://www.ons.gov.uk/methodology/methodologytopicsandstatisticalconcepts/uncertaintyandhowwemeasureit#:~:text=Uncertainty%20relates%20to%20how%20the,confidence%20interval",
                    },
                ]}
            />
        </ModulePage>
    );
}
