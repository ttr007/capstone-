import React from 'react';
import ModulePage from './ModulePage';
import ListBlock from './ListBlock';
import ParaBlock from './ParaBlock';
import CalloutBlock from './CalloutBlock';
import TableBlock from './TableBlock';

export function ModuleSix() {

    return (
        <ModulePage
            title="Statistical Significance"
            url="https://www.youtube.com/embed/dQw4w9WgXcQ">

            <ParaBlock
                items={[<span key="1">Did the result happen for a real reason, or was it just chance?</span>]}
            />

            <ListBlock
                items={[
                    <a href="#what-is-statistical-significance" key="1">What is Statistical Significance?</a>,
                    <a href="#how-its-measured" key="2">How it's Measured</a>,
                    <a href="#why-it-matters" key="8">Why It Matters</a>
                ]}
            />

            <div id="what-is-statistical-significance">
                <ParaBlock title="What is Statistical Significance?" items={[<span key="1">Statistical significance tells us if a result is real or just by chance.</span>]} />
            </div>

            <CalloutBlock
                type="info"
                title="Statistical Significance"
                description={[<span key="1">A result is statistically significant when it’s unlikely to have occurred by chance.</span>]}
            />

            <div id="how-its-measured">
                <ParaBlock items={[
                    <span>When analyzing your data, you might find a pattern. But before acting on it, ask:</span>,
                    <span style={{ paddingLeft: '20px' }}>"Could this have happened by coincidence?"</span>
                ]} />
            </div>

            <div id="how-it’s-measured">
                <ParaBlock
                    title="How it’s Measured: The p-value"
                    items={[<span key="1">The p-value helps us determine if a result is due to chance.</span>]}
                />
            </div>

            <CalloutBlock
                type="info"
                title="p-value"
                description={[<span key="1">The probability that your results happened by chance.</span>]}
            />

            <ListBlock
                items={[
                    <span key="1"><strong>Low p-value (&lt; 0.05)</strong> = unlikely to be chance → <strong>statistically significant</strong></span>,
                    <span key="2"><strong>High p-value (&gt; 0.05)</strong> = could be chance → <strong>not significant</strong></span>
                ]}
            />

            <TableBlock
                headers={["p-value", "Meaning", "Example"]}
                rows={[
                    ["0.03", "There’s a 3% chance the result is due to chance → statistically significant", "Your new teaching method improves test scores"],
                    ["0.20", "20% chance it’s random → not significant", "Your new sales technique may not actually work"]
                ]}
            />

            <div id="real-world-analogy">
                <ParaBlock title="Real-World Analogy" items={[<span key="1">Adding a little salt doesn’t change the flavor, but adding a cup does.</span>]} />
            </div>

            <div id="example-1">
                <ParaBlock title="Example 1 from Pierce County" items={[<span key="1">Pierce County launches a pilot mentorship program aimed at reducing youth reoffending.</span>]} />
            </div>

            <ListBlock
                items={[
                    "10% of mentored youth reoffended",
                    "20% of non-mentored youth reoffended"
                ]}
            />

            <div id="example-1-impact">
                <ParaBlock
                    items={[
                        <span key="1">To determine if the difference is meaningful, we use statistical significance.</span>,
                        <span key="2">If the result is statistically significant (e.g., p &lt; 0.05), we can be more confident that the mentorship program had a real impact—not just a difference due to chance.</span>
                    ]}
                />
            </div>

            <div id="covid-example">
                <ParaBlock title="Real Example: COVID-19 Vaccine Trial" items={[<span key="1">The vaccine showed 95% efficacy with a p-value &lt; 0.0001.</span>]} />
            </div>

            <ListBlock
                items={[
                    "The vaccine showed 95% efficacy",
                    "The result had a p-value &lt; 0.0001",
                    "That means there was less than 0.01% chance the result happened by chance"
                ]}
            />

            <div id="statistically-vs-practically">
                <ParaBlock title="Statistically Significant ≠ Practically Important" items={[<span key="1">A result may be statistically significant but not practically important in the real world.</span>]} />
            </div>

            <TableBlock
                headers={["Scenario", "Significance", "Practical Value"]}
                rows={[
                    ["A medication reduces recovery time by 0.5%", "p &lt; 0.05", "May not help patients meaningfully"],
                    ["A vaccine cuts hospitalization by 90%", "p &lt; 0.05", "Huge real-world impact"]
                ]}
            />

            <div id="example-2">
                <ParaBlock title="Example 2 from Pierce County" items={[<span key="1">Pierce County conducts county-wide surveys to assess public trust in local government services.</span>]} />
            </div>

            <ListBlock
                items={[
                    "In 2023, 65% of residents reported trust in local services",
                    "In 2024, that number rose to 70% — a 5% increase"
                ]}
            />

            <div id="example-2-analysis">
                <ParaBlock
                    items={[
                        <span key="1">However, if only a small number of people were surveyed, we need to ask:</span>,
                        <span key="2">Using statistical significance (like checking if p &lt; 0.05), we can determine if the increase reflects a meaningful shift in public sentiment—or if it might be the result of chance due to a small sample size.</span>
                    ]}
                />
            </div>

            <div id="why-it-matters">
                <ListBlock title="Why It Matters" items={[
                    <span key="1">Helps us know which results we can trust</span>,
                    <span key="2">Reduces guesswork and assumptions in decision-making</span>,
                    <span key="3">Keeps us from making choices based on random variation</span>
                ]} />
            </div>

        </ModulePage>
    );
}
