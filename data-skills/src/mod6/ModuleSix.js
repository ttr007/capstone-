import React from 'react';
import ModulePage from '../components/ModulePage';
import ListBlock from '../components/ListBlock';
import ParaBlock from '../components/ParaBlock';
import CalloutBlock from '../components/CalloutBlock';
import TableBlock from '../components/TableBlock';
import ImageBlock from '../components/ImageBlock';
import AdditionalSourcesBlock from '../components/AdditionalBlock';
import ModuleIntro from '../components/ModuleIntro';
import QuizBlock from '../components/QuizBlock';

const graph = '/mod6/graph.png';

const overview = (
    <div className="overview-text">
        <p>
            Did the result happen for a real reason, or was it just chance? When analyzing your data, you might find a pattern. But before acting on it, ask:
        </p>
        <p style={{ paddingLeft: '20px', fontStyle: 'italic' }}>
            "Could this have happened by coincidence?"
        </p>
    </div>
);

const toc = (
    <div className="toc-container">
        <h5>Table of Contents</h5>
        <ul style={{ listStylePosition: 'inside', paddingRight: '1rem' }}>
            <li><a href="#what-is-statistical-significance">What is Statistical Significance?</a></li>
            <li><a href="#p-value">How It's Measured: P-value</a></li>
            <li><a href="#statistically-vs-practically">Statistically Significant vs Practically Important</a></li>
            <li><a href="#why-it-matters">Why It Matters</a></li>
            <li><a href="#stat-quiz">Module Quiz</a></li>
        </ul>
    </div>
);
const quizData = [
  {
    id: '1',
    question: 'What does it mean if a result is statistically significant?',
    options: [
      'The result is unlikely due to chance',
      'The result happened by coincidence',
      'The result is always practically important',
      'The result has a p-value greater than 0.05',
    ],
    correctAnswer: 'The result is unlikely due to chance',
    explanation: {
      correct: 'Correct! Statistical significance means the result is unlikely to have occurred just by chance.',
      incorrect: 'Incorrect. Statistical significance means the result is unlikely to be due to chance—not likely or due to coincidence, and it doesn’t imply practical importance or a high p-value.',
    },
  },
  {
    id: '2',
    question: 'What does a low p-value (less than 0.05) indicate?',
    options: [
      'The result is likely due to random chance',
      'The result is unlikely to be due to chance',
      'The result is not statistically significant',
      'The sample size was too small',
    ],
    correctAnswer: 'The result is unlikely to be due to chance',
    explanation: {
      correct: 'Exactly! A p-value below 0.05 means the result is unlikely due to chance, indicating statistical significance.',
      incorrect: 'No, a low p-value means the result is unlikely to be due to chance—not that it’s random, insignificant, or about sample size.',
    },
  },
  {
    id: '3',
    question: 'Which of the following is TRUE about statistical significance and practical importance?',
    options: [
      'Statistical significance always means the result matters practically',
      'Statistical significance and practical importance are the same thing',
      'A result can be statistically significant but not practically important',
      'Practical importance is not related to data analysis',
    ],
    correctAnswer: 'A result can be statistically significant but not practically important',
    explanation: {
      correct: 'Correct! A result may be statistically significant but have little real-world impact.',
      incorrect: 'Incorrect. Statistical significance does not guarantee the result is important in practical terms.',
    },
  },
  {
    id: '4',
    question: 'What is the meaning of a p-value greater than 0.05?',
    options: [
      'The result is statistically significant',
      'The result is unlikely due to chance',
      'The result may be due to chance and is not significant',
      'The data is always accurate',
    ],
    correctAnswer: 'The result may be due to chance and is not significant',
    explanation: {
      correct: 'Correct! A p-value greater than 0.05 suggests the result might be due to chance and is not statistically significant.',
      incorrect: 'No, a p-value above 0.05 means the result is not statistically significant and may be due to chance—not that it’s meaningful or always accurate.',
    },
  },
  {
    id: '5',
    question: 'Why is it important to consider statistical significance in decision-making?',
    options: [
      'To avoid making choices based on random variation',
      'To always accept every observed difference as true',
      'To ignore p-values in data analysis',
      'To increase guesswork and assumptions',
    ],
    correctAnswer: 'To avoid making choices based on random variation',
    explanation: {
      correct: 'Exactly! Statistical significance helps reduce guesswork by showing which results are likely real.',
      incorrect: 'Incorrect. Considering significance helps *reduce* guesswork—it’s not about accepting everything, ignoring p-values, or encouraging assumptions.',
    },
  },
];

export function ModuleSix() {
    return (
        <ModulePage
            title="Statistical Significance"
            url="https://www.youtube.com/embed/dQw4w9WgXcQ"
        >
            <ModuleIntro
                title="Statistical Significance"
                readTime="5 min read"
                overview={overview}
                toc={toc}
            />
            <div id="summary">
                <ListBlock
                    title="Summary"
                    items={[
                        <span key="1"><strong>Statistical significance</strong> = The result is unlikely to be due to chance.</span>,
                        <span key="2"><strong>p-value</strong> = Tells how likely it is the result happened randomly.</span>,
                        <span key="3">A low p-value (&lt; 0.05) suggests a real effect, not just coincidence.</span>,
                        <span key="4">Statistical significance doesn't always mean the result matters in real life.</span>,
                        <span key="5">Helps us trust data and make better decisions.</span>
                    ]}
                />
            </div>

            <div id="what-is-statistical-significance">
                <ParaBlock title="What is Statistical Significance?" />
            </div>

            <CalloutBlock
                type="info"
                title="Statistical Significance"
                description={[
                    <span key="1">A result is statistically significant when it’s unlikely to have occurred by chance.</span>
                ]}
            />

            <CalloutBlock
                title="Example: Membership Program"
                type="example"
                description={[
                    <span key="1">Pierce County launches a pilot mentorship program aimed at reducing youth reoffending.</span>,
                    <ul key="2">
                        <li>10% of mentored youth reoffended</li>
                        <li>20% of non-mentored youth reoffended</li>
                    </ul>,
                    <span key="3">To determine if the difference is meaningful, we use statistical significance.</span>,
                    <span key="4">If the result is statistically significant (e.g., p &lt; 0.05), we can be more confident that the mentorship program had a real impact—not just a difference due to chance.</span>
                ]}
            />

            <div id="p-value">
                <ParaBlock title="How it’s Measured: The p-value" />
            </div>

            <CalloutBlock
                type="info"
                title="P-value"
                description={[
                    <span key="1">The probability that your results happened by chance.</span>
                ]}
            />

            <ListBlock
                items={[
                    <span key="1"><strong>Low p-value (&lt; 0.05)</strong> = unlikely to be chance → <strong>statistically significant</strong></span>,
                    <span key="2"><strong>High p-value (&gt; 0.05)</strong> = could be chance → <strong>not significant</strong></span>
                ]}
            />

            <TableBlock
                headers={["P-value", "Meaning", "Example"]}
                rows={[
                    ["0.03% (<0.05)", "There’s a 3% chance the result is due to chance → statistically significant", "Your new teaching method improves test scores"],
                    ["0.20% (>0.05)", "20% chance it’s random → not significant", "Your new sales technique may not actually work"]
                ]}
            />

            <ImageBlock src={graph} />

            <CalloutBlock
                title="Example: COVID-19 Vaccine Trial"
                type="example"
                description={[
                    <span key="1">The vaccine showed 95% efficacy with a p-value &lt; 0.0001.</span>,
                    <ul key="2">
                        <li>95% efficacy rate & p-value &lt; 0.0001</li>
                        <li>That means there was less than 0.01% chance the result happened by chance</li>
                    </ul>
                ]}
            />

            <CalloutBlock
                title="Example: Real-World Analogy"
                type="example"
                description={[
                    <span key="1">Adding a little salt doesn’t change the flavor, but adding a cup does.</span>
                ]}
            />

            <div id="statistically-vs-practically">
                <ParaBlock
                    title="Statistically Significant ≠ Practically Important"
                    items={[
                        <span key="1">A result may be statistically significant but not practically important in the real world.</span>
                    ]}
                />
            </div>

            <TableBlock
                headers={["Scenario", "Significance", "Practical Value"]}
                rows={[
                    ["A medication reduces recovery time by 0.5%", "p < 0.05", "May not help patients meaningfully"],
                    ["A vaccine cuts hospitalization by 90%", "p < 0.05", "Huge real-world impact"]
                ]}
            />

            <CalloutBlock
                title="Example: County Wide Survey"
                type="example"
                description={[
                    <span key="1">Pierce County conducts county-wide surveys to assess public trust in local government services.</span>,
                    <ul key="2">
                        <li>In 2023, 65% of residents reported trust in local services</li>
                        <li>In 2024, that number rose to 70% — a 5% increase</li>
                    </ul>,
                    <span key="3">However, if only a small number of people were surveyed, we need to ask:</span>,
                    <ul key="4">
                        <li>Is this increase due to real change, or could it be chance?</li>
                    </ul>,
                    <span key="5">Using statistical significance (like checking if p &lt; 0.05), we can determine if the increase reflects a meaningful shift in public sentiment—or if it might be the result of chance due to a small sample size.</span>
                ]}
            />

            <div id="why-it-matters">
                <ParaBlock title="Why It Matters" level={1} items={[]} />

                <ListBlock
                    items={[
                        <span key="1">Helps us know which results we can trust</span>,
                        <span key="2">Reduces guesswork and assumptions in decision-making</span>,
                        <span key="3">Keeps us from making choices based on random variation</span>
                    ]}
                />
            </div>
            <div id="stat-quiz">
                <ParaBlock title="Module Quiz" level={1} />
                <QuizBlock quizData={quizData} />
            </div>
            <AdditionalSourcesBlock
                sources={[
                    {
                        label: "Statsig: A Comprehensive Guide to Statistical Significance",
                        url: "https://www.statsig.com/perspectives/a-comprehensive-guide-to-statistical-significance#:~:text=Statistical%20significance%20is%20a%20way,the%20concept%20of%20p-values",
                    },
                    {
                        label: "W3Schools: Hypothesis Testing",
                        url: "https://www.w3schools.com/statistics/statistics_hypothesis_testing.php",
                    },
                    {
                        label: "National Library of Medicine: Statistical Significance",
                        url: "https://www.ncbi.nlm.nih.gov/books/NBK459346/",
                    },
                    {
                        label: "National Ataxia Foundation: What is Statistical Significance?",
                        url: "https://www.ataxia.org/scasourceposts/snapshot-what-is-statistical-significance/",
                    },
                ]}
            />
        </ModulePage>
    );
}
