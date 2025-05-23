import ModulePage from '../components/ModulePage';
import ListBlock from '../components/ListBlock';
import ParaBlock from '../components/ParaBlock';
import CalloutBlock from '../components/CalloutBlock';
import ImageBlock from '../components/ImageBlock';
import TableBlock from '../components/TableBlock';
import AdditionalSourcesBlock from '../components/AdditionalBlock';

import popvssamp from './PopulationVsSample.png';
import types from './TypesSampling.png';
import M1Quiz from './ModuleOneQuiz'

export function ModuleOne() {
  return (
    <ModulePage
      title="Sampling"
      url="https://www.youtube.com/embed/7S7j75d3GM4"
    >
      <ParaBlock
        items={[
          "Determining the right sample size is crucial for research accuracy. A small sample may misrepresent the population, while a large one can be resource-intensive. Balancing statistical significance with practicality requires considering effect size and margin of error."
        ]}
      />

      <ListBlock
        title="Table of Contents"
        level={1}
        items={[
          <a href="#sample-size">Sample Size</a>,
          <a href="#statistical-significance">Statistical Significance</a>,
          <a href="#sampling-methods">Sampling Methods</a>,
          <a href="#probability-sampling">Probability Sampling (Random Sampling)</a>,
          <a href="#non-prob-sampling">Non Probability Sampling</a>,
          "Module Summary",
          "Module Quiz"
        ]}
      />

      <ListBlock
        title="Summary"
        level={1}
        items={[
          <span><strong>Sampling methods = </strong> (probability and non-probability) Help you select who's in your study.</span>,
          <span><strong>Sample size = </strong> Influences how much your results reflect the bigger population.</span>,
          <span><strong>Considerations: </strong> The approach you take determines how you reduce bias and draw stronger conclusions.</span>
        ]}
      />

      {/* Sampling Section */}
      <div id="sample-size" className="scroll-section">
        <ParaBlock
          title="Sampling Size"
          level={1}
        />
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
        />
        <ListBlock
          items={[
            "Sample size is important because it affects **how much you trust your results**. When you are collecting data, you are trying to learn about the entire group (e.g., those within Pierce County), but realistically, you cannot ask everyone. A well-sized sample lets you make reasonable assumptions about the whole.",
            "Generally, a smaller sample size is less conclusive than a larger one. However, sample size **varies based on context**. Rather than giving specific numbers, keep in mind:",
          ]}
        />
        <ListBlock
          items={[
            "A small, focused group can be useful for neighborhood-level questions.",
            "Larger, diverse populations typically require bigger samples for stronger conclusions."
          ]}
        />
        <ListBlock
          items={[<span><strong>It’s okay if you cannot reach everyone.</strong> The goal is to have enough participants to identify patterns and draw meaningful conclusions.</span>]}
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
        <ParaBlock
          title="Statistical Significance"
          level={1}
        />
        <CalloutBlock
          title="Statistical Significance"
          description={[
            "This tells you whether your result is likely real or just due to chance."
          ]}
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
            <span>While having larger sample sizes may generally be better, you also have to consider who is going to be sampled. Thus you should also consider <strong>sampling</strong> methods.</span>
          ]}
        />
      </div>
      <div id="sampling-methods">
        <ParaBlock level={1} title="Sampling Methods" />
        <CalloutBlock type="info" title="Sampling Methods" description="The process of choosing who you include in your data." />
        <ParaBlock items={["You usually can’t study everyone. So instead, you pick a sample — and how you pick it matters. Poor methods can lead to biased results."]} />
      </div>

      <div id="probability-sampling" className="scroll-section">

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
        <ParaBlock
          title="Non-Probability Sampling"
          level={1}
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
          description={[
            "Non-probability samples may leave out important voices or over-represent strong opinions."
          ]}
        />
      </div>

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