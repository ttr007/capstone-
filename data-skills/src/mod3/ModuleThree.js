import React from 'react';
import ModulePage from '../components/ModulePage';
import ListBlock from '../components/ListBlock';
import ParaBlock from '../components/ParaBlock';
import CalloutBlock from '../components/CalloutBlock';
import TableBlock from '../components/TableBlock';
import ImageBlock from '../components/ImageBlock';
import relationships from './Relationships.png';
import AdditionalSourcesBlock from '../components/AdditionalBlock';


export function ModuleThree() {
  return (
    <ModulePage
      title="Relationships"
      url="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video if needed
    >
      <ParaBlock
        items={[
          <span>When looking at data, it’s not enough to just see <strong>what</strong> changed—you want to understand <strong>why</strong>. This module covers two key concepts that help explain how variables relate: <strong>assocation</strong> and <strong>causality</strong>
            . Understanding the difference between these can help you make better decisions and avoid drawing the wrong conclusions from your data.</span>
        ]}
      />

      <ListBlock
        title="Table of Contents"
        items={[
          <a href="#association" key="association">Association</a>,
          <a href="#causality" key="causality">Causality</a>,
          <a href="#why-it-matters" key="why-it-matters">Why It Matters</a>,
          <a href="#real-world-applications" key="real-world-applications">Real-World Applications</a>
        ]}
      />

      <ListBlock
        title="Summary"
        items={[
          "Association means two variables change together—it shows a relationship.",
          "Causality means one variable causes another to change.",
          <span><strong> Association ≠ Causation: </strong> Just because two things happen together doesn’t mean one caused the other. </span>,
          <span>These concepts are critical for interpreting data accurately and making
            informed decisions.</span>
        ]}
      />

      {/* Association Section */}
      <div id="association">
        <ParaBlock title="Association" items={[]} />
        <CalloutBlock
          type="info"
          title="Association"
          description="A relationship where two variables move together. When one changes, the other tends to change too."
        />
      </div>

      <TableBlock
        title="Types of Association"
        headers={['Type', 'Description', 'Example']}
        rows={[
          ['Positive', 'Both variables increase or decrease together.', 'As water in a balloon increases, the balloon expands.'],
          ['Negative (inverse)', 'One increases while the other decreases.', 'The faster you drive, the less time it takes to arrive.'],
          ['None (Independent)', 'No relationship.', 'The day of the week doesn’t affect a dice roll.']
        ]}
      />

      <div id="causality">
        <ParaBlock title="Causality" items={[]} />
        <CalloutBlock
          type="info"
          title="Causality"
          description="A relationship where one thing directly causes another to happen."
        />
      </div>

      <CalloutBlock title="Example" type="example" description={[
        <ParaBlock items={[
          "You want to know if changed meeting time improves attendance."]} />,
        <ListBlock items={[
          <span key="independent"><strong>Independent Variable:</strong> Meeting time</span>,
          <span key="dependent"><strong>Dependent Variable:</strong> Attendance</span>,
          <span key="control"><strong>Control Variables:</strong> Day of the week, meeting subject, invitation method</span>]} />,
        "By only changing the time and keeping everything else the same, you can measure if time causes a difference in attendance."
      ]} />

      <TableBlock
        title="How to Test for Causation"
        headers={['Step', 'Description']}
        rows={[
          ['1. Identify', 'What you think causes the change (independent variable)'],
          ['2. Measure', 'What you expect to change (dependent variable)'],
          ['3. Control', 'Keep all other factors the same'],
          ['4. Analyze', 'Determine whether the change came from the independent variable alone']
        ]}
      />

      <div id="association-causation">
        <ParaBlock title="Association ≠ Causation" items={[
        ]} />
        <CalloutBlock
          type="warning"
          title="Association ≠ Causation"
          description="Just because two things are associated doesn’t mean one caused the other."
        />
        <ImageBlock src={relationships} />
        <CalloutBlock type="example" title="Example: Random Coincidence" description={[
          <span key="random-coincidence">
            You notice that every Monday you roll a 3 on a die. That doesn’t mean Mondays cause you to roll 3s.
            This confusion is common in <strong>polls, media, and even research headlines. </strong>
          </span>
        ]} />

        <CalloutBlock type="example" title="Example: Workplace Scenario" description={[
          <span key="workplace-scenario">
            HR rolls out a new <strong>wellness program</strong>. Employees who participate seem to take <strong>less sick leave</strong>.
            At first glance, you might think the program caused better attendance. But maybe it’s the <strong>healthier employees </strong>
            who are more likely to sign up—not that the program reduced sick days. Without deeper analysis or a controlled experiment, we can’t say one caused the other.
          </span>
        ]} />
      </div>

      <div id="why-it-matters">
        <ParaBlock title="Why It Matters" items={["Knowing the difference between correlation and causation helps you:"]} />
        <ListBlock items={[
          "Avoid misleading interpretations",
          "Communicate findings clearly",
          "Make decisions based on evidence, not assumptions"
        ]} />
      </div>

      <CalloutBlock
        type="info"
        description={[
          "Statistical Significance helps determine whether an observation association is likely due to chance. Learn more here."
        ]}
      />

      <div id="real-world-applications">
        <TableBlock
          title="Real-World Applications"
          headers={['Field', 'Question']}
          rows={[
            ['Public Health', 'Does a vaccine reduce cases?'],
            ['Policy', 'Does providing food stamps improve nutrition?'],
            ['Business', 'Do loyalty programs increase customer retention?'],
            ['Education', 'Does more study time improve test scores?']
          ]}
        />
      </div>
      <AdditionalSourcesBlock
        sources={[
          {
            label: "Ledidi: Association vs. Causality",
            url: "https://ledidi.com/academy/the-difference-between-association-correlation-and-causation",
          },
          {
            label: "University of Oxford: How Do We Know if it's Association or Causation?",
            url: "https://catalogofbias.org/2019/03/05/association-or-causation-how-do-we-ever-know/",
          },
          {
            label: "SUDC Foundation: Association vs. Causation in Medical Research",
            url: "https://sudc.org/being-a-critical-consumer-of-medical-research-understanding-association-versus-causation/",
          },
          {
            label: "University of Chicago: Causation vs. Association in Data Science",
            url: "https://ds1.datascience.uchicago.edu/10/1/causality.html",
          },
        ]}
      />
    </ModulePage>
  );
}
