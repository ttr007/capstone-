import React from 'react';
import ModulePage from '../components/ModulePage';
import ListBlock from '../components/ListBlock';
import ParaBlock from '../components/ParaBlock';
import CalloutBlock from '../components/CalloutBlock';
import FormulaBlock from '../components/FormulaBlock';
import ImageBlock from '../components/ImageBlock';
import TableBlock from '../components/TableBlock';

export function ModuleOne () {
  return (
    <ModulePage title="Sampling: Making Your Data Represent Your Population" url="">
      <div id="toc" className="table-of-contents">
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#summary">Summary</a></li>
          <li><a href="#sampling-size">Sampling Size</a></li>
          <li><a href="#statistical-significance">Statistical Significance</a></li>
          <li><a href="#sampling-methods">Sampling Methods</a></li>
          <li><a href="#takeaways">Takeaways</a></li>
        </ul>
      </div>

      {/* Intro Section */}
      <div id="introduction">
        <ParaBlock title="The groups you choose to collect data from can make or break your results.">
          This module explores two key concepts that shape the accuracy, fairness, and reliability of your data:
        </ParaBlock>
        <ListBlock
          items={[
            { text: 'Sampling Size' },
            { text: 'Sampling Methods' },
          ]}
        />
        <ParaBlock title="By understanding these concepts, you'll be able to collect **representative** data and make **smarter decisions**." />
      </div>

      <hr />

      {/* Summary Section */}
      <div id="summary">
        <ParaBlock title="Summary">
          <ListBlock
            items={[
              { text: 'Sampling methods (probability and non-probability) help you select who’s in your study.' },
              { text: 'The sample size influences how much your results reflect the bigger population.' },
              { text: 'Choosing the right approach helps reduce bias and draw stronger conclusions.' },
            ]}
          />
        </ParaBlock>
      </div>

      <hr />

      {/* Sampling Size Section */}
      <div id="sampling-size">
        <ParaBlock title="Sampling Size">
          <p><strong>Sample size</strong> refers to how many people or things you include in your analysis—and how that number affects your ability to see patterns and make generalizations.</p>

          <ParaBlock title="Why Sample Size Matters">
            <p>Sample size is important because it affects <strong>how much you trust your results</strong>. When you are collecting data, you are trying to learn about the entire group (e.g., those within Pierce County), but realistically, you cannot ask everyone. A well-sized sample lets you make reasonable assumptions about the whole.</p>
            <p>Generally, a smaller sample size is less conclusive than a larger one. However, sample size <strong>varies based on context</strong>. Rather than giving specific numbers, keep in mind:</p>
            <ul>
              <li>A small, focused group can be useful for neighborhood-level questions.</li>
              <li>Larger, diverse populations typically require bigger samples for stronger conclusions.</li>
            </ul>
            <p><strong>It’s okay if you cannot reach everyone</strong>. The goal is to have enough participants to identify patterns and draw meaningful conclusions.</p>
          </ParaBlock>

          <CalloutBlock title="Law of Large Numbers">
            <p>The greater the sample, the more accurate your results get.</p>
            <ul>
              <li>Flip a coin 3 times → you might get 3 heads.</li>
              <li>Flip it 1,000 times → you’ll likely get closer to 50/50 heads and tails.</li>
            </ul>
          </CalloutBlock>

          <ParaBlock title="Statistical Significance">
            <p><strong>Statistical Significance</strong> tells you whether your result is likely real or just due to chance.</p>
            <ul>
              <li>A larger sample size helps detect small, but meaningful differences.</li>
              <li>But what “meaningful” looks like depends on the context.</li>
            </ul>
            <p>For example:</p>
            <ul>
              <li>A 10% difference in favorite ice cream flavor = interesting</li>
              <li>A 10% difference in cancer treatment outcomes = critical</li>
            </ul>
          </ParaBlock>

          <CalloutBlock title="Magnitude of Difference">
            <span><strong>How big the difference is between two groups. Bigger differences are easier to detect.</strong></span>
          </CalloutBlock>

          <TableBlock
            data={[
              {
                sample: 'Flip a coin 3 times',
                outcome: 'Possible 3 heads, not representative of 50/50',
              },
              {
                sample: 'Flip a coin 1,000 times',
                outcome: 'More likely to show closer to 50/50',
              },
            ]}
          />
        </ParaBlock>
      </div>

      <hr />

      {/* Sampling Methods Section */}
      <div id="sampling-methods">
        <ParaBlock title="Sampling Methods">
          <p><strong>Sampling Methods</strong> refer to the process of choosing who you include in your data. You usually can’t study everyone, so instead, you pick a sample—and how you pick it matters. Poor methods can lead to biased results.</p>

          <ParaBlock title="Probability Sampling">
            <p>In probability sampling, <strong>everyone has a known chance</strong> of being selected. This reduces bias and increases the reliability of your findings.</p>
          </ParaBlock>

          <TableBlock
            data={[
              {
                method: 'Simple Random',
                description: 'Everyone has an equal chance to be picked.',
                example: 'Drawing names out of a hat',
              },
              {
                method: 'Systematic Random',
                description: 'Pick every nth person from a list.',
                example: 'Every 5th person in line',
              },
              {
                method: 'Stratified Random',
                description: 'Split into groups, sample from each group.',
                example: 'Randomly pick from each age group',
              },
              {
                method: 'Cluster Random',
                description: 'Randomly choose whole groups, then study everyone in them.',
                example: 'Survey all patients from 3 randomly chosen clinics',
              },
            ]}
          />

          <ParaBlock title="Non-Probability Sampling">
            <p>A method where not everyone has a chance to be picked. Easier to do, but more risk of bias.</p>
          </ParaBlock>

          <TableBlock
            data={[
              {
                method: 'Convenience',
                description: 'Sample whoever is easiest to reach.',
                risk: 'Researcher asks people on a college campus at 1:30 pm.',
                bias: 'More likely to get college students due to time of day.',
              },
              {
                method: 'Voluntary Response',
                description: 'People choose whether to participate.',
                risk: 'A restaurant asks you to answer questions about service.',
                bias: 'Open to bias because people with strong opinions are more likely to respond.',
              },
            ]}
          />

          <ParaBlock title="Be cautious!">
            <p>Non-probability samples may leave out important voices or over-represent strong opinions.</p>
          </ParaBlock>
        </ParaBlock>
      </div>

      <hr />

      {/* Takeaways */}
      <div id="takeaways">
        <ParaBlock title="Takeaways">
          <p>Sampling is how we make smart guesses about a population by collecting data from a smaller group.</p>
          <ListBlock
            items={[
              'Choose a sample size that fits your goals',
              'Use the best sampling method for your goals',
              'Always consider who’s missing from data',
            ]}
          />
        </ParaBlock>

        <CalloutBlock title="Representative Sample">
          <p>A <strong>representative sample</strong> is one that reflects the larger population accurately.</p>
        </CalloutBlock>
      </div>
    </ModulePage>
  );
};