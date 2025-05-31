import ModulePage from '../components/ModulePage';
import ListBlock from '../components/ListBlock';
import ParaBlock from '../components/ParaBlock';
import CalloutBlock from '../components/CalloutBlock';
import ImageBlock from '../components/ImageBlock';
import TableBlock from '../components/TableBlock';
import AdditionalSourcesBlock from '../components/AdditionalBlock';
import QuizBlock from '../components/QuizBlock';
import ModuleIntro from '../components/ModuleIntro';

const popvssamp = '/mod1/PopulationVsSample.png';
const types = '/mod1/TypesSampling.png';
const sum = '/mod1/M1 Sampling (T).pdf';

const overview = (
  <ParaBlock
    items={[
      <span>
        Determining the right sample size is crucial for research accuracy. A small sample may <strong>misrepresent</strong> the population, while a large one can be <strong>resource-intensive</strong>. Balancing statistical significance with <strong>practicality</strong> requires considering effect size and margin of error.
      </span>
    ]}
  />

);
const toc = (
  <div className="toc-container">
    <h5>Table of Contents</h5>
    <ul style={{ listStylePosition: 'inside', paddingRight: '1rem' }}>
      <li><a href="#sample-size">Sample Size</a></li>
      <li><a href="#statistical-significance">Statistical Significance</a></li>
      <li><a href="#sampling-methods">Sampling Methods</a></li>
      <li><a href="#probability-sampling">Probability Sampling (Random Sampling)</a></li>
      <li><a href="#non-prob-sampling">Non Probability Sampling</a></li>
      <li><a href="#samp-quiz">Module Quiz</a></li>
    </ul>
  </div>
);

const quizData = [
  {
    id: 1,
    question: "What type of sampling method involves splitting the population into groups and selecting members randomly from each group?",
    options: ["Convenience Sampling", "Stratified Random Sampling", "Systematic Sampling", "Cluster Sampling"],
    correctAnswer: "Stratified Random Sampling",
    explanation: {
      correct: "Stratified sampling ensures each subgroup is proportionally represented by randomly selecting individuals within those subgroups.",
      incorrect: "Incorrect. Convenience sampling selects the easiest to access, Systematic sampling picks every nth person, and Cluster sampling selects entire groups rather than individuals."
    }
  },
  {
    id: 2,
    question: "What is the primary drawback of convenience sampling?",
    options: ["It’s too expensive", "It ensures too much diversity", "It may not represent the population well", "It takes too long to collect"],
    correctAnswer: "It may not represent the population well",
    explanation: {
      correct: "Convenience sampling often leads to bias because it doesn't fairly represent the broader population.",
      incorrect: "Incorrect. Convenience sampling is cheap, tends to limit diversity, and is fast to collect, so these options don't represent its main drawback."
    }
  },
  {
    id: 3,
    question: "Why is a larger sample size generally better for statistical analysis?",
    options: ["It guarantees better results", "It reduces variability and increases reliability", "It eliminates all bias", "It makes the process faster"],
    correctAnswer: "It reduces variability and increases reliability",
    explanation: {
      correct: "Larger sample sizes help detect patterns more reliably and reduce the margin of error.",
      incorrect: "Incorrect. Larger sample sizes don't guarantee correctness, eliminate all bias, or make the process faster."
    }
  },
  {
    id: 4,
    question: "Which method gives every individual in the population an equal chance of being selected?",
    options: ["Voluntary Sampling", "Simple Random Sampling", "Convenience Sampling", "Cluster Sampling"],
    correctAnswer: "Simple Random Sampling",
    explanation: {
      correct: "Simple random sampling means each member has an equal chance of being chosen, minimizing selection bias.",
      incorrect: "Incorrect. Voluntary sampling has self-selection bias, convenience sampling is not random, and cluster sampling selects groups, not individuals."
    }
  },
  {
    id: 5,
    question: "What does the law of large numbers state?",
    options: [
      "Larger samples always have more bias",
      "The more data, the more unpredictable results are",
      "With more data, results get closer to the true average",
      "Smaller samples are better for accuracy"
    ],
    correctAnswer: "With more data, results get closer to the true average",
    explanation: {
      correct: "The law of large numbers means the average result of a large sample tends to reflect the actual population average.",
      incorrect: "Incorrect. Bias depends on sampling method, larger datasets stabilize results, and smaller samples are less accurate."
    }
  }
];



export function ModuleOne() {
  return (
    <ModulePage
      title="Sampling"
      url="https://www.youtube.com/embed/7S7j75d3GM4"

    >
      <ModuleIntro
        title="Sampling"
        readTime="6 min read"
        overview={overview}
        toc={toc}
        pdfUrl={sum}
        downloadFileName="Sampling.pdf"
      />
      <ParaBlock title="Summary" level={1} />
      <ListBlock
        items={[
          <span><strong>Sampling methods =</strong> Help you select who's in your study.</span>,
          <span><strong>Sample size =</strong> Influences how well your results reflect the bigger population.</span>,
          <span>Consider both since who you include and how many affect the strength of your conclusions.</span>
        ]}
      />
      <div id="sample-size" className="scroll-section">
        <ParaBlock title="Sample Size" level={1} />
        <CalloutBlock
          title="Sample Size"
          type="info"
          description={[
            "How many people or things you include in your analysis—and how that number affects your ability to see patterns and make generalizations."
          ]}
        />
        <ParaBlock
          title="Why Sample Size Matters"
          level={2}
          items={[
            "Sample size affects how much you trust your results. A well-sized sample lets you make reasonable assumptions about the whole group you’re studying."
          ]}
        />
        <ListBlock
          items={[
            "Smaller samples = less reliable conclusions.",
            "Context matters: there’s no one-size-fits-all number."
          ]}
        />
        <div className="indent">
          <ListBlock
            items={[
              "A small, focused group can be useful for neighborhood-level questions.",
              "Larger, diverse populations typically require bigger samples for stronger conclusions."
            ]}
          />
        </div>
        <ListBlock
          items={[
            <span><strong>It’s okay if you cannot reach everyone.</strong> The goal is to have enough participants to identify patterns and draw meaningful conclusions.</span>
          ]}
        />
        <CalloutBlock
          title="Law of Large Numbers"
          type="info"
          description={["The greater the sample, the more accurate your results get."]}
        />
        <ListBlock
          items={[
            "Flip a coin 3 times → you might get 3 heads.",
            "Flip it 1,000 times → you’ll likely get closer to 50/50 heads and tails."
          ]}
        />
      </div>

      <div id="statistical-significance" className="scroll-section">
        <ParaBlock title="Statistical Significance" level={1} />
        <CalloutBlock
          title="Statistical Significance"
          description={["This tells you whether your result is likely real or just due to chance."]}
        />
        <ListBlock
          items={[
            "A larger sample size helps detect small, but meaningful differences.",
            "But what “meaningful” looks like depends on the context."
          ]}
        />
        <CalloutBlock
          title="Example: Context"
          type="example"
          description={[
            "10% difference in favorite ice cream flavor = interesting. ",
            "10% difference in cancer treatment outcomes = critical."
          ]}
        />
        <CalloutBlock
          title="Magnitude of Difference"
          type="info"
          description={[
            "How big the difference is between two groups. Bigger differences are easier to detect."
          ]}
        />
        <ImageBlock src={popvssamp} />
        <ParaBlock
          items={[
            <span>While larger sample sizes are often better, you also need to consider <strong>how</strong> you sample people. That’s where <strong>sampling methods</strong> come in.</span>
          ]}
        />
      </div>

      <div id="sampling-methods" className="scroll-section">
        <ParaBlock title="Sampling Methods" level={1} />
        <CalloutBlock
          type="info"
          title="Sampling Methods"
          description="The process of choosing who you include in your data."
        />
        <ParaBlock
          items={[
            "You usually can’t study everyone. So instead, you pick a sample — and how you pick it matters. Poor methods can lead to biased results."
          ]}
        />
      </div>

      <div id="probability-sampling" className="scroll-section">
        <ParaBlock title="Probability Sampling (Random Sampling)" level={1} />
        <TableBlock
          headers={["Sampling Method", "Description", "Example"]}
          rows={[
            [
              "Simple Random Sampling",
              "Uses random selection to eliminate bias.",
              "Picking a name out of a hat for a raffle."
            ],
            [
              "Systematic Random Sampling",
              "Selects every kth member from an ordered population starting at a random point.",
              "Line up by birthday, select every 10th person."
            ],
            [
              "Stratified Sampling",
              "Divides population into strata (e.g., by income), then randomly selects proportionally from each group.",
              "Ensure fair representation from each income group."
            ],
            [
              "Cluster Sampling",
              "Splits population into groups and randomly picks entire groups to sample all their members.",
              "Survey all patients from 3 randomly selected doctors."
            ]
          ]}
        />
        <ImageBlock src={types} />
      </div>

      <div id="non-prob-sampling" className="scroll-section">
        <ParaBlock title="Non-Probability Sampling" level={1} />
        <ParaBlock
          items={[
            "A method where not everyone has a chance to be picked. Easier to do, but more risk of bias."
          ]}
        />
        <TableBlock
          title="Types of Non-Probability Sampling"
          headers={["Method", "How it Works", "Risk Example", "Potential Bias"]}
          rows={[
            [
              "Convenience",
              "Sample whoever is easiest to reach.",
              "Researcher asks people on a college campus at 1:30 pm questions as they walk by.",
              "More likely to get college students, as time of day is during the work day and on college campus."
            ],
            [
              "Voluntary Response",
              "People choose whether to participate.",
              "A restaurant asks you to answer questions about service at the end of the meal.",
              "Open to bias because people that want to respond will likely have stronger opinions than everyone else."
            ]
          ]}
        />
        <CalloutBlock
          title="Be cautious!"
          type="warning"
          description={["Non-probability samples may leave out important voices or over-represent strong opinions."]}
        />
      </div>
      <div id="samp-quiz">
        <ParaBlock title="Module Quiz" level={1} />
        <QuizBlock quizData={quizData} />
      </div>

      <AdditionalSourcesBlock
        sources={[
          {
            label: "Qualtrics: Sampling Methods Explained",
            url: "https://www.qualtrics.com/experience-management/research/sampling-methods/",
          },
          {
            label: "UC Press: Sample Size Justification",
            url: "https://online.ucpress.edu/collabra/article/8/1/33267/120491/Sample-Size-Justification",
          },
          {
            label: "NIH: Sample Size and Its Importance in Research",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6970301/",
          },
        ]}
      />
    </ModulePage>
  );
}
