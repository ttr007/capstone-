import React from 'react';
import ModulePage from '../components/ModulePage';
import ListBlock from '../components/ListBlock';
import ParaBlock from '../components/ParaBlock';
import CalloutBlock from '../components/CalloutBlock';
import FormulaBlock from '../components/FormulaBlock';
import ImageBlock from '../components/ImageBlock';

// images
import PercentIncrease from './PercentIncrease.png';
import PercentDecrease from './PercentDecrease.png';

export function ModuleTwo() {
  return (
    <ModulePage
      title="Change over Time"
    >
      <ParaBlock
        items={[
          <span>How do we track progress—or spot problems—over time?</span>,
          <span>We can do that using two powerful tools:</span>
        ]}
      />

      <div id="table-of-contents">
        <ListBlock
          items={[
            <span><a href="#percentage-change"><strong>Percentage Change</strong></a></span>,
            <span><a href="#percentage-point-difference"><strong>Percentage Point Difference</strong></a></span>,
            <span><a href="#why-it-matters"><strong>Why it Matters</strong></a></span>
          ]}
        />
      </div>

      <ParaBlock
        items={[
          <span>
            Together, these help you tell stories with data—so you can <strong>measure impact</strong>, <strong>make smart decisions</strong>, and <strong>communicate clearly</strong>.
          </span>
        ]}
      />

      <ListBlock
        title="Summary"
        items={[
          <span><strong>Percentage change</strong> shows how much a number has increased or decreased over time.</span>,
          <span><strong>Percentage point difference</strong> compares the differences between percentages to show how much change has happened.</span>,
          'These tools help turn raw numbers into clear insights.',
          'These concepts can help you track progress, make better decisions, and communicate results more effectively.'
        ]}
      />

      <div id="percentage-change">
        <ParaBlock title="Percentage Change" items={[
        ]} />
      </div>
      <CalloutBlock type="info" description="A way to show how much something has grown or shrunk over time, relative to its starting value." />


      <ParaBlock title="Formula" items={[
        <FormulaBlock>
          ((New Value - Original Value) / Original Value) * 100
        </FormulaBlock>
      ]} />

      <ListBlock title="Example" items={[
        "You work in HR:",
        "Last Year: 85% employee retention",
        "This Year: 88.55% employee retention",
      ]} />
      <FormulaBlock>
        ((88.55 - 85) / 85) * 100 = 4.18% change
      </FormulaBlock>
      <ParaBlock items={[
        "Employee retention increased by 4.18% compared to last year.",
        "Why it matters: Percentage change helps you track progress over time—whether you're improving retention, reducing turnover, or evaluating the impact of new policies."
      ]} />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
        <ImageBlock src={PercentIncrease} style={{ width: '50%' }} />
        <ImageBlock src={PercentDecrease} style={{ width: '50%' }} />
      </div>

      <div id="percentage-point-difference">
        <ParaBlock title="Percentage Point Difference" />
      </div>

      <CalloutBlock
        type="info"
        title="Percentage Point Difference"
        description="A way to show how much the percentage itself has changed."
      />

      <ParaBlock title="Formula" items={[
        <FormulaBlock>Percentage 2 - Percentage 1</FormulaBlock>
      ]} />

      <ListBlock title="Example" items={[
        'Let’s say you work in Planning and Public Works (PPW):',
        'In 2023: 78% of planned road projects were completed',
        'In 2024: 80% were completed'
      ]} />
      <FormulaBlock>80% - 78% = 2%</FormulaBlock>
      <ParaBlock items={[<span>The completion rate increased by <strong>2 percentage points</strong>, even though the percent change would be a smaller relative shift.</span>,
      ]} />
      <CalloutBlock
        title="Percentage Point Difference"
        description={[
          <p><strong>Percentage point difference</strong> is especially useful when you're comparing percentages directly—like completion rates, graduation rates, or voter turnout.</p>,
          <p>Unlike percent change, it tells you how much the actual <strong>percent value itself</strong> increased or decreased.</p>
        ]}
      />

      <div id="why-it-matters">
        <ListBlock title="Why It Matters" items={[
          <span><strong>Business</strong>: Measure growth in profits, losses, or customer retention.</span>,
          <span><strong>Government</strong>: Track changes in unemployment, crime rates, or public trust.</span>,
          <span><strong>Health</strong>: Compare vaccination rates or disease trends year over year.</span>,
          <span><strong>Everyday Life</strong>: Track fitness progress, budget changes, or price inflation.</span>
        ]} />
      </div>

      <ListBlock title="Common Mistakes to Avoid" items={[
        <span>Mixing up <strong>percentage change</strong> and <strong>percentage points</strong></span>,
        'Assuming 50% → 75% is a 25% increase (it’s 25 percentage points, but a 50% increase!)',
        'Forgetting to divide by the original value when calculating percentage change'
      ]} />

      <ParaBlock title="Final Takeaway" items={[
        'Understanding percentage change and percentage point different helps you analyze real-world data more accurately.',
        'Whether you’re working in policy, business, or daily life, these concepts guide smarter actions and better communication.'
      ]} />
    </ModulePage>
  );
}
