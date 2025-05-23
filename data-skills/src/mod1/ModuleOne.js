import ModulePage from '../components/ModulePage';
import ListBlock from '../components/ListBlock';
import ParaBlock from '../components/ParaBlock';
import CalloutBlock from '../components/CalloutBlock';
import ImageBlock from '../components/ImageBlock';
import TableBlock from '../components/TableBlock';
import AdditionalSourcesBlock from '../components/AdditionalBlock';

import popvssamp from './PopulationVsSample.png';
import types from './TypesSampling.png';
import M1Quiz from './ModuleOneQuiz';
import ModuleIntro from '../components/ModuleIntro';

const overview = (
  <ParaBlock
    items={[
      "Determining the right sample size is crucial for research accuracy. A small sample may misrepresent the population, while a large one can be resource-intensive. Balancing statistical significance with practicality requires considering effect size and margin of error."
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
      <li>Module Quiz</li>
    </ul>
  </div>
);


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
            "10% difference in favorite ice cream flavor = interesting.",
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

      <ParaBlock title="Module Quiz" level={1} />
      <M1Quiz />

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
