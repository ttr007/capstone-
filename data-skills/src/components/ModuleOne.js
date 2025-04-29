import ListBlock from "./ListBlock";
import ParaBlock from "./ParaBlock";
import ModulePage from "./ModPageLayout";

import sampling from '../images/sampling photo.png';
import simplerand from '../images/simple random photo.png';
import systematic from '../images/systematic sampling.png';
import stratified from '../images/stratified sampling.png';
import cluster from '../images/cluster sampling.png';
import voluntary from '../images/voluntary sampling.png';
import sampbias from '../images/non random sampling bias.png';
import M1Quiz from './ModuleOneQuiz'

export function ModuleOne() {
  return (
    <ModulePage
      title="Representativeness"
      url="https://www.youtube.com/embed/7S7j75d3GM4"
    >
      <ParaBlock
        title="Overview"
        items={[
          "Determining the right sample size is crucial for research accuracy. A small sample may misrepresent the population, while a large one can be resource-intensive. Balancing statistical significance with practicality requires considering effect size and margin of error."
        ]}
      />

      <ListBlock
        title="Learning Objectives"
        items={[
          "Define Sample Size and Its Importance",
          "Determine Appropriate Sample Sizes for Various Analyses",
          "Understand the Relationship Between Sample Size and Statistical Significance",
          "Assess the Impact of Sample Size on Data Representation"
        ]}
      />

      <ListBlock
        title="Module Structure"
        items={[
          <a href="#sampling">Sampling</a>,
          <a href="#probability-sampling">Probability Sampling (Random Sampling)</a>,
          <a href="#non-prob-sampling">Non Probability Sampling</a>,
          <a href="#non-prob-bias">Non Probability Sampling Bias</a>,
          "Module Summary",
          "Module Quiz"
        ]}
      />

      {/* Sampling Section */}
      <div id="sampling">
        <h1 className="fw-bold">Sampling</h1>
        <img className="mx-auto" src={sampling} width="805" height="461" alt="Sampling" />
        <ListBlock
          title="What is Sampling?"
          items={[
            "Sampling methods are about how we select members to be a part of a study.",
            "It isn’t possible to take the results of an entire population, so we use sampling to make representative conclusions about the entire population.",
            "The way we choose members to represent a population can vary."
          ]}
        />
        <ParaBlock
          title="Examples of Sampling in Finance"
          items={[
            "A bank samples 10,000 loan applicants from a pool of 1 million to build a predictive model for default probability. This is to assess loan risks without processing every single application."
          ]}
        />
        <ParaBlock
          title="Types of Sampling"
          items={[
            "Probability Sampling: Every member has an equal random chance to be picked. A random number generator or process that relies on chance is needed to have a simple random sample. Aims to eliminate bias.",
            "Non-Probability Sampling: Not every unit has an equal chance of selection, often used when full population data is unavailable or when convenience matters."
          ]}
        />
      </div>

      {/* Probability Sampling */}
      <div id="probability-sampling">
        <h1 className="fw-bold">Types of Probability Sampling</h1>

        <ListBlock
          title="Simple Random Sampling"
          items={[
            "Probability sampling is a method of selecting a sample from a population using random selection.",
            "Random selection in sampling aims to eliminate bias by having an element of chance.",
            "Picking a name out of a hat for a raffle."
          ]}
        />
        <img src={simplerand} width="805" height="461" alt="Simple Random Sampling" />

        <ListBlock
          title="Systematic Random Sampling"
          items={[
            "Population members are put into an ordered queue, and at a random starting point every kth (5th, 3rd, 10th member etc) is chosen.",
            "Ex: Line up by birthday, select every 10th person."
          ]}
        />
        <img src={systematic} width="805" height="461" alt="Systematic Sampling" />

        <ListBlock
          title="Stratified Sampling"
          items={[
            "Stratified sampling divides a population into distinct groups (strata) based on a characteristic like income.",
            "Randomly selects a proportional number of individuals from each group to ensure fair representation in the sample."
          ]}
        />
        <img src={stratified} width="805" height="461" alt="Stratified Sampling" />

        <ListBlock
          title="Cluster Sampling"
          items={[
            "The population is split into groups and then some of the groups are randomly picked with each member in the selected groups making up the sample.",
            "Ex: Doctor’s office wants to know how their service is, so they randomly select all the patients of 3 doctors a day to survey.",
            "Pros: Gets every member from a group, so good when each group reflects the population."
          ]}
        />
        <img src={cluster} width="805" height="461" alt="Cluster Sampling" />
      </div>

      {/* Non-Probability Sampling */}
      <div id="non-prob-sampling">
        <h1>Non-Probability Sampling</h1>

        <ListBlock
          title="Voluntary Response Sampling"
          items={[
            "Ex: Researcher asks people on a college campus at 1:30 pm questions as they walk by.",
            "Bias: More likely to get college students, as time of day is during the work day and on college campus.",
            "Researcher asks people to join the sample and the people decide if they want to or not.",
            "Open to bias because people that want to respond will likely have stronger opinions than everyone else."
          ]}
        />
        <img src={voluntary} width="805" height="461" alt="Voluntary Response" />

        <ListBlock
          title="Non-Probability Sampling Bias"
          items={[
            "Non-probability sampling involves non-random selection for easier data collection and is more convenient.",
            "Researcher chooses a sample that is available in a non-random way. This can be affected by bias because the time of day and place where the researcher is choosing people can produce a sample that is biased."
          ]}
        />
        <img src={sampbias} width="805" height="461" alt="Sampling Bias" />
      </div>
      <M1Quiz />
    </ModulePage>
  );
}
