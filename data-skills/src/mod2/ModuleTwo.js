import React from 'react';
import ModulePage from '../components/ModulePage';
import ListBlock from '../components/ListBlock';
import ParaBlock from '../components/ParaBlock';
import CalloutBlock from '../components/CalloutBlock';
import FormulaBlock from '../components/FormulaBlock';
import ImageBlock from '../components/ImageBlock';
import TableBlock from '../components/TableBlock';
import AdditionalSourcesBlock from '../components/AdditionalBlock';
import ModuleIntro from '../components/ModuleIntro';

import PercentIncrease from './PercentIncrease.png';
import PercentDecrease from './PercentDecrease.png';

const overview = (
  <div className="overview-text">
    <p>
      How do we track progress—or spot problems—over time? Together, these help you tell stories with data—so you can <strong>measure impact</strong>, <strong>make smart decisions</strong>, and <strong>communicate clearly</strong>.
    </p>
  </div>
);

const toc = (
  <div className="toc-container">
    <h5>Table of Contents</h5>
    <ul style={{ listStylePosition: 'inside', paddingRight: '1rem' }}>
      <li><a href="#percentage-change">Percentage Change</a></li>
      <li><a href="#percentage-point-difference">Percentage Point Difference</a></li>
      <li><a href="#real-world-applications">Real World Applications</a></li>
      <li><a href="#why-it-matters">Why it Matters</a></li>
    </ul>
  </div>
);

export function ModuleTwo() {
  return (
    <ModulePage
      title="Change Over Time"
      url="https://www.youtube.com/embed/VIDEO_ID" // Replace with actual video URL if available
    >
      <ModuleIntro
        title="Change Over Time"
        readTime="5 min read"
        overview={overview}
        toc={toc}
      />

      <ListBlock
        title="Summary"
        level={1}
        items={[
          <span><strong>Percentage change = </strong> How much a number has increased or decreased over time.</span>,
          <span><strong>Percentage point difference =</strong> Comparing the differences between percentages to show how much change has happened.</span>,
          'These concepts can help you track progress, make better decisions, and communicate results more effectively.'
        ]}
      />

      <div id="percentage-change">
        <ParaBlock title="Percentage Change" level={1} />
      </div>
      <CalloutBlock
        type="info"
        title="Percentage Change"
        description="A way to show how much something has grown or shrunk over time, relative to its starting value."
      />

      <ParaBlock title="Formula" level={2} items={[
        <FormulaBlock>
          ((New Value - Original Value) / Original Value) * 100
        </FormulaBlock>
      ]} />

      <ParaBlock title="Example: HR Statistics" level={2} />
      <CalloutBlock
        type="example"
        description={[
          <ListBlock items={[
            "You work in HR:",
            "Last Year: 85% employee retention",
            "This Year: 88.55% employee retention",
          ]} />
        ]}
      />
      <FormulaBlock>
        ((88.55 - 85) / 85) * 100 = 4.18% change
      </FormulaBlock>
      <CalloutBlock
        title="Example: HR Statistics continued"
        type="example"
        description={[
          <ListBlock items={[
            "Employee retention increased by 4.18% compared to last year.",
            "Why it matters: Percentage change helps you track progress over time—whether you're improving retention, reducing turnover, or evaluating the impact of new policies."
          ]} />
        ]}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
        <ImageBlock src={PercentIncrease} style={{ width: '50%' }} />
        <ImageBlock src={PercentDecrease} style={{ width: '50%' }} />
      </div>

      <div id="percentage-point-difference">
        <ParaBlock title="Percentage Point Difference" level={1} />
      </div>
      <CalloutBlock
        type="info"
        title="Percentage Point Difference"
        description="A way to show how much the percentage itself has changed."
      />

      <ParaBlock title="Formula: Percentage Point Difference" level={2} items={[
        <FormulaBlock>
          Percentage 2 - Percentage 1
        </FormulaBlock>
      ]} />

      <ParaBlock title="Example: PPW" level={2} />
      <CalloutBlock
        type="example"
        description={[
          <ListBlock items={[
            'Let’s say you work in Planning and Public Works (PPW):',
            'In 2023: 78% of planned road projects were completed',
            'In 2024: 80% were completed'
          ]} />
        ]}
      />

      <FormulaBlock>80% - 78% = 2%</FormulaBlock>

      <CalloutBlock
        title="Example: PPW cont."
        type="example"
        description={[
          <ListBlock items={[
            <span>The completion rate increased by <strong>2 percentage points</strong>, even though the percent change would be a smaller relative shift.</span>,
          ]} />
        ]}
      />

      <CalloutBlock
        type="success"
        description={[
          <p><strong>Percentage point difference</strong> is especially useful when you're comparing percentages directly—like completion rates, graduation rates, or voter turnout.</p>,
          <p>Unlike percent change, it tells you how much the actual <strong>percent value itself</strong> increased or decreased.</p>
        ]}
      />

      <div id="real-world-applications">
        <ParaBlock title="Real-World Applications" level={1} />
        <TableBlock
          headers={['Field', 'Question']}
          rows={[
            ['Business', 'Measure growth in profits, losses, or customer retention.'],
            ['Government', 'Track changes in unemployment, crime rates, or public trust.'],
            ['Health', 'Compare vaccination rates or disease trends year over year.'],
            ['Everyday Life', 'Track fitness progress, budget changes, or price inflation.']
          ]}
        />
      </div>

      <CalloutBlock
        type="warning"
        title="Common Mistakes to Avoid"
        description={[
          <ListBlock items={[
            <span>Mixing up <strong>percentage change</strong> and <strong>percentage points</strong></span>,
            'Assuming 50% → 75% is a 25% increase (it’s 25 percentage points, but a 50% increase!)',
            'Forgetting to divide by the original value when calculating percentage change'
          ]} />
        ]}
      />

      <div id="why-it-matters">
        <ListBlock
          title="Why It Matters"
          level={1}
          items={[
            'Understanding percentage change and percentage point different helps you analyze real-world data more accurately.',
            'Whether you’re working in policy, business, or daily life, these concepts guide smarter actions and better communication.'
          ]}
        />
      </div>

      <AdditionalSourcesBlock
        sources={[
          {
            label: "Harvard: Percent Change Math for Journalists",
            url: "https://journalistsresource.org/home/percent-change-math-for-journalists/#:~:text=Keep%20in%20mind%20the%20“percent,relation%20to%20a%20previous%20number",
          },
          {
            label: "Macroption: Percentage Point vs. Percent",
            url: "https://www.macroption.com/percentage-point-vs-percent/",
          },
          {
            label: "European Commission: Percentage Change and Percentage Points Explained",
            url: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Beginners:Statistical_concept_-_Percentage_change_and_percentage_points",
          },
          {
            label: "Reed College: Primer on Percentage Change",
            url: "https://www.reed.edu/academic_support/pdfs/qskills/percent.pdf",
          },
        ]}
      />
    </ModulePage>
  );
}
