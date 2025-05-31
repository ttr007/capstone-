import React from 'react';
import ModulePage from '../components/ModulePage';
import ListBlock from '../components/ListBlock';
import ParaBlock from '../components/ParaBlock';
import CalloutBlock from '../components/CalloutBlock';
import TableBlock from '../components/TableBlock';
import FormulaBlock from '../components/FormulaBlock';
import ImageBlock from '../components/ImageBlock';
import AdditionalSourcesBlock from '../components/AdditionalBlock';
import ModuleIntro from '../components/ModuleIntro';
import QuizBlock from '../components/QuizBlock';

const missing = '/mod8/MissingData.png';
const iqr = '/mod8/IQR.png';
const bpo = '/mod8/BoxPlotOutlier.png';
const spo = '/mod8/ScatterPlotOutlier.png';

const overview = (
    <div id="intro">
        <ParaBlock
            items={[
                <span key="1">
                    Some data entries—whether missing or extreme—can <strong>distort your results</strong> and lead to misleading conclusions. Understanding <strong>how to recognize and handle these values</strong>—especially missing data and outliers—is essential to making fair, accurate, and useful decisions based on your data.
                </span>
            ]}
        />
    </div>
);

const toc = (
    <div className="toc-container">
        <h5>Table of Contents</h5>
        <ul style={{ listStylePosition: 'inside', paddingRight: '1rem' }}>
            <li><a href="#missing-data">Missing Data</a></li>
            <li><a href="#how-to-handle-missing-data">How to Handle Missing Data</a></li>
            <li><a href="#outliers">What is an Outlier</a></li>
            <li><a href="#what-to-do-with-outliers">How to Approach Outliers</a></li>
            <li><a href="#types-of-outliers">Types of Outliers</a></li>
            <li><a href="#statistical-methods">How to Spot Outliers</a></li>
            <li><a href="#impact-of-skew">The Impact of Skewed Data</a></li>
            <li><a href="#why-it-matters">Why It Matters</a></li>
            <li><a href="#skew-quiz">Module Quiz</a></li>
        </ul>
    </div>
);
const quizData = [
  {
    id: 1,
    question: "What is missing data in a dataset?",
    options: [
      "Data that was collected incorrectly",
      "Incomplete information or gaps in the dataset",
      "Data points that are unusually high or low",
      "Data that has been duplicated"
    ],
    correctAnswer: "Incomplete information or gaps in the dataset",
    explanation: {
      correct: "Correct! Missing data refers to gaps or incomplete entries in your dataset.",
      incorrect: "Incorrect. Missing data refers to gaps in the dataset—not errors, outliers, or duplicates.",
    }
  },
  {
    id: 2,
    question: "Which type of missing data occurs when data is missing due to the thing being measured?",
    options: [
      "MCAR (Missing Completely at Random)",
      "MAR (Missing at Random)",
      "MNAR (Missing Not at Random)",
      "None of the above"
    ],
    correctAnswer: "MNAR (Missing Not at Random)",
    explanation: {
      correct: "Right! MNAR means data is missing because of the value itself, like unhappy employees skipping a survey.",
      incorrect: "Incorrect. MNAR happens when the missingness is related to the value being measured.",
    }
  },
  {
    id: 3,
    question: "Which of the following is NOT a recommended way to handle missing data?",
    options: [
      "Investigate why data is missing",
      "Use imputation to fill in missing values",
      "Automatically delete all missing data points",
      "Be transparent about missing data in reports"
    ],
    correctAnswer: "Automatically delete all missing data points",
    explanation: {
      correct: "Correct! Automatically deleting missing data can introduce bias and lose important information.",
      incorrect: "Incorrect. Automatically deleting missing data can be harmful—better to investigate or impute.",
    }
  },
  {
    id: 4,
    question: "What is an outlier?",
    options: [
      "A data point that is typical of the dataset",
      "A missing data point",
      "A data point that significantly differs from the rest",
      "A duplicated data entry"
    ],
    correctAnswer: "A data point that significantly differs from the rest",
    explanation: {
      correct: "Exactly! Outliers are values that lie far outside the typical pattern of the data.",
      incorrect: "Incorrect. Outliers are values that differ a lot from the rest—not typical, missing, or duplicates.",
    }
  },
  {
    id: 5,
    question: "Why shouldn’t you automatically delete outliers?",
    options: [
      "They may be data entry errors",
      "They can be meaningful signals about the data",
      "Removing them can bias results",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    explanation: {
      correct: "Correct! Outliers need investigation since they could be errors or important insights.",
      incorrect: "Incorrect. Outliers may be important or error-prone—don't delete them without checking.",
    }
  },
  {
    id: 6,
    question: "Which visualization is good for spotting univariate outliers?",
    options: [
      "Scatter Plot",
      "Box Plot",
      "Pie Chart",
      "Bar Graph"
    ],
    correctAnswer: "Box Plot",
    explanation: {
      correct: "Right! Box plots are great for visualizing extreme values in one variable.",
      incorrect: "Incorrect. Box plots are best for finding outliers in single variables—not scatter, pie, or bar charts.",
    }
  },
  {
    id: 7,
    question: "What does the Interquartile Range (IQR) method help identify?",
    options: [
      "Missing data",
      "Values far from the middle 50% of the dataset (potential outliers)",
      "The average value",
      "Duplicates in data"
    ],
    correctAnswer: "Values far from the middle 50% of the dataset (potential outliers)",
    explanation: {
      correct: "Correct! IQR helps find values that are far from the center, which may be outliers.",
      incorrect: "Incorrect. IQR identifies potential outliers—not averages, missing data, or duplicates.",
    }
  },
  {
    id: 8,
    question: "What is a potential impact of ignoring missing data or outliers?",
    options: [
      "Stronger conclusions",
      "More reliable analysis",
      "Biased or misleading results",
      "Faster processing"
    ],
    correctAnswer: "Biased or misleading results",
    explanation: {
      correct: "Exactly! Ignoring these can lead to incorrect or unfair conclusions.",
      incorrect: "Incorrect. Ignoring missing data or outliers often results in misleading or biased conclusions.",
    }
  }
];

const sum = encodeURI('/mod8/M8 Skewing the Data (T).pdf');


export function ModuleEight() {
    return (
        <ModulePage
            title="Skewing the Data"
            url="https://www.youtube.com/embed/dQw4w9WgXcQ"
        >
            <ModuleIntro
                title="Skewing the Data"
                readTime="7 min read"
                overview={overview}
                toc={toc}
                pdfUrl={sum}
                downloadFileName="Skewing.pdf"
            />

            <div id="summary">
                <ParaBlock title="Summary" level={1} items={[]} />

                <ListBlock
                    items={[
                        <span key="1"><strong>Missing data</strong> occurs when information is incomplete, often causing bias or weak conclusions.</span>,
                        <span key="2"><strong>Outliers</strong> are data points that don’t fit the trend and can skew the results.</span>,
                        <span key="3">These values need careful evaluation—not automatic deletion.</span>,
                        <span key="4">How you handle them can significantly change your conclusions.</span>
                    ]}
                />
            </div>

            <div id="missing-data">
                <ParaBlock title="Missing Data" level={1} items={[
                    <span key="1">Missing data is often unavoidable, but if left unaddressed, it can introduce <strong>bias</strong> or make your conclusions <strong>inconclusive</strong>.</span>
                ]} />
                <CalloutBlock
                    type="info"
                    title="Missing Data"
                    description={[
                        <span key="1">Gaps in your dataset caused by skipped questions, tech issues, or participant drop-off.</span>
                    ]}
                />
                <TableBlock
                    headers={["Type", "Description", "Example"]}
                    rows={[
                        ["MCAR (Missing Completely at Random)", "Missing without reason or pattern", "Lab results deleted by a system glitch"],
                        ["MAR (Missing at Random)", "Missing due to a factor that can be measured", "More men skip mental health survey questions"],
                        ["MNAR (Missing Not at Random)", "Missing because of the thing being measured", "Unhappy employees avoid a workplace survey"]
                    ]}
                />
                <CalloutBlock
                    type="warning"
                    title="Skewing"
                    description={[
                        <span key="1">Missing data—especially MNAR—can hide important truths and create bias in decision-making.</span>
                    ]}
                />
            </div>

            <div id="how-to-handle-missing-data">
                <ListBlock
                    title="How to Handle Missing Data"
                    items={[
                        <span key="1">Investigate <strong>why</strong> data is missing</span>,
                        <span key="2">Use statistical methods like <strong>imputation</strong> (filling in blanks based on other data)</span>,
                        <span key="3">Collect more complete data when possible</span>,
                        <span key="4">Be <strong>transparent</strong> when reporting missing data and its potential effects</span>
                    ]}
                />
                <CalloutBlock type="example" title="Example: Missing Data"
                    description={["In the example below, missing data (NaN) is handled by using the previous entry to fill in the data"]}
                />
                <ImageBlock src={missing} />
            </div>

            <div id="outliers">
                <ParaBlock title="What is an Outlier?" level={1} items={[
                    <span key="1">Outliers are data points that are significantly different from the rest of your dataset. They can pull your results in misleading directions.</span>
                ]} />
                <CalloutBlock
                    type="info"
                    title="Outliers"
                    description={[
                        <span key="1">Unusual values that lie far outside the overall pattern of a dataset. They may be errors—or important signals.</span>
                    ]}
                />
            </div>

            <div id="what-to-do-with-outliers">
                <ParaBlock title="How to Approach Outliers" level={1} items={[]} />

                <ListBlock
                    items={[
                        <span key="1"><strong>Don’t automatically delete:</strong> Investigate whether it’s a data entry mistake or a meaningful point.</span>,
                        <span key="2"><strong>Check context:</strong> Some values are only “outliers” in certain settings.</span>,
                        <span key="3"><strong>Document your decision:</strong> Be transparent about why you kept or removed them.</span>
                    ]}
                />
            </div>

            <div id="types-of-outliers">
                <ParaBlock title="Types of Outliers" level={1} items={[
                    "Here are common types of outliers you may encounter in your data."
                ]} />
                <TableBlock
                    headers={["Type", "Description", "Example"]}
                    rows={[
                        ["Univariate", "Unusual value in one variable", "A single huge expense in an otherwise low-cost budget"],
                        ["Multivariate", "Two+ combined values are unusual", "Lower-income areas with unusually high internet access"],
                        ["Point/Extreme", "One value is far outside the typical range", "A contractor charging $100 million when most would only charge $100 thousand"],
                        ["Contextual", "Value is unusual in one context, normal in another", "$5,000 equipment might seem odd at a community food program, but this price might be normal in other public works"],
                        ["Collective", "A whole group behaves unusually", "All participants in a job program are unable to find jobs"]
                    ]}
                />
            </div>

            <div id="statistical-methods">
                <ParaBlock title="How to Spot Outliers" level={1} items={[
                    <span key="1">You can spot outliers through <strong>visualizing data</strong> or using statistical methods.</span>
                ]} />
                <ListBlock items={[
                    <span><strong>Box Plots - </strong>Great for showing extreme values</span>
                ]} />
                <ImageBlock src={bpo} />
                <ListBlock items={[
                    <span><strong>Scatter Plots - </strong>Great for showing outliers in multi-variable relationships</span>
                ]} />
                <ImageBlock src={spo} />
                <ListBlock
                    title="Statistical Methods"
                    items={[
                        <span key="1">Z-score tells how <strong>far</strong> a point is from the average. If a score is very high or low, it might be an outlier.</span>
                    ]}
                />
                <FormulaBlock>
                    <span key="sd-formula">z = (x - mean) / standard deviation</span>
                </FormulaBlock>
                <ListBlock
                    items={[
                        <span key="2">Interquartile Range (IQR) <strong>finds</strong> values that are far from the middle of the dataset.</span>
                    ]}
                />
                <FormulaBlock>
                    <span key="iqr-formula">Outliers = values &lt; Q1 - 1.5 * IQR OR values &gt; Q3 + 1.5 * IQR</span>
                </FormulaBlock>
                <ImageBlock src={iqr} />
            </div>

            <div id="impact-of-skew">
                <ParaBlock title="The Impact of Skewed Data" level={1} />
                <ParaBlock items={[
                    <span key="1">Here’s how skewed data—if left unchecked—can affect your conclusions:</span>
                ]} />
                <TableBlock
                    headers={["Problem", "Impact"]}
                    rows={[
                        ["Too much missing data", "Weakens conclusions, introduces bias"],
                        ["Ignored outliers", "Can lead to missed insights or flawed decisions"],
                        ["Misrepresented data", "Leads to unfair outcomes or misleading policy"]
                    ]}
                />
            </div>

            <div id="why-it-matters">
                <ParaBlock title="Why It Matters" level={1} items={[]} />
                <ListBlock
                    items={[
                        <span key="1">Every data point tells a story. Some are noise—others are warning signs. Knowing the difference is essential to forming accurate conclusions.</span>,
                        <span key="2">Being aware of missing data and outliers helps ensure your conclusions are fair, accurate, and reliable. Don’t just clean your data—<strong>understand it</strong>.</span>
                    ]}
                />
            </div>

            <div id="skew-quiz">
                <ParaBlock title="Module Quiz" level={1} />
                <QuizBlock quizData={quizData} />
            </div>
            <AdditionalSourcesBlock
                sources={[
                    {
                        label: "PubMed Central: The Prevention and Handling of Missing Data",
                        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3668100/",
                    },
                    {
                        label: "Scribbr: Dealing with Outliers and Missing Data",
                        url: "https://www.scribbr.com/statistics/outliers/#:~:text=Outliers%20are%20extreme%20values%20that,results%20of%20any%20hypothesis%20tests",
                    },
                    {
                        label: "NeenOpal: Outliers and Missing Values",
                        url: "https://www.neenopal.com/dealing-with-outliers-and-missing-values-in-a-dataset.html",
                    },
                    {
                        label: "MDPI: Handling Skewed Data",
                        url: "https://www.mdpi.com/2076-3417/10/18/6247",
                    },
                ]}
            />
        </ModulePage>
    );
}
