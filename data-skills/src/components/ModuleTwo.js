import React from 'react';
import ModulePage from './ModulePage';
import ListBlock from './ListBlock';
import ParaBlock from './ParaBlock';
import VideoBlock from './VideoBlock'; 
import CalloutBlock from './CalloutBlock';
import FormulaBlock from './FormulaBlock';

export function ModuleTwo () {
  return (
    <ModulePage
      title="Change over Time"
      url="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video if needed
    >
      <ParaBlock
        items={[
          "How do we track progress—or spot problems—over time?",
          "We can do that using two powerful tools:"
        ]}
      />
      <ListBlock
        items={[
          "Percentage Change",
          "Percentage Point Difference",
          "Why it Matters"
        ]}
      />
      <ParaBlock
        items={[
          "Together, these help you tell stories with data—so you can measure impact, make smart decisions, and communicate clearly."
        ]}
      />

      <ListBlock
        title="Summary"
        items={[
          "Percentage change shows how much a number has increased or decreased over time.",
          "Percentage point difference compares the differences between percentages to show how much change has happened.",
          "These tools help turn raw numbers into clear insights.",
          "These concepts can help you track progress, make better decisions, and communicate results more effectively."
        ]}
      />

      <ParaBlock title="Percentage Change" items={[
        "💡 Percentage Change: A way to show how much something has grown or shrunk over time, relative to its starting value."
      ]} />

      <ParaBlock title="Formula" items={[
        "((New Value - Original Value) / Original Value) * 100"
      ]} />

      <ParaBlock title="Example" items={[
        "You work in HR:",
        "Last Year: 85% employee retention",
        "This Year: 88.55% employee retention",
        "((88.55 - 85) / 85) * 100 = 4.18% change",
        "Employee retention increased by 4.18% compared to last year.",
        "Why it matters: Percentage change helps you track progress over time—whether you're improving retention, reducing turnover, or evaluating the impact of new policies."
      ]} />

      <VideoBlock title="Percent Increase Example" url="attachment:cfa8ed29-15da-4243-96e4-896c538ce921:PercentIncrease.png" />
      <VideoBlock title="Percent Decrease Example" url="attachment:12950691-4d04-40f1-8e7a-3d7c42aff4b8:PercentDecrease.png" />
      
      <ParaBlock title="Percentage Point Difference"></ParaBlock>
      <CalloutBlock 
        type="info"
        title="Percentage Point Difference"
        description="A way to show how much the percentage itself has changed."
      />


      <ParaBlock title="Formula" items={[
              <FormulaBlock>
              Percentage 2 - Percentage 1
          </FormulaBlock>
      ]} />

      <ParaBlock title="Example" items={[
        "Let’s say you work in Planning and Public Works (PPW):",
        "In 2023: 78% of planned road projects were completed",
        "In 2024: 80% were completed",
        "80% - 78% = 2%",
        "The completion rate increased by 2 percentage points, even though the percent change would be a smaller relative shift.",
        "Percentage point difference is especially useful when you're comparing percentages directly—like completion rates, graduation rates, or voter turnout.",
        "Unlike percent change, it tells you how much the actual percent value itself increased or decreased."
      ]} />

      <VideoBlock
        title="Visual Explanation"
        url="attachment:9f2f17f0-1090-44c4-b149-07789efe6711:image.png"
      />

      <ListBlock title="Why It Matters" items={[
        "Business: Measure growth in profits, losses, or customer retention.",
        "Government: Track changes in unemployment, crime rates, or public trust.",
        "Health: Compare vaccination rates or disease trends year over year.",
        "Everyday Life: Track fitness progress, budget changes, or price inflation."
      ]} />

      <ListBlock title="Common Mistakes to Avoid" items={[
      <span>Mixing up <strong>percentage change</strong> and <strong>percentage points</strong></span>,
      "Assuming 50% → 75% is a 25% increase (it’s 25 percentage points, but a 50% increase!)",
        "Forgetting to divide by the original value when calculating percentage change"
      ]} />

      <ParaBlock title="Final Takeaway" items={[
        "Understanding percentage change and percentage point difference helps you analyze real-world data more accurately.",
        "Whether you’re working in policy, business, or daily life, these concepts guide smarter actions and better communication."
      ]} />
    </ModulePage>
  );
}