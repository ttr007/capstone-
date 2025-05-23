import React from 'react';
import ModulePage from '../components/ModulePage';
import ListBlock from '../components/ListBlock';
import ParaBlock from '../components/ParaBlock';
import CalloutBlock from '../components/CalloutBlock';
import TableBlock from '../components/TableBlock';
import AdditionalSourcesBlock from '../components/AdditionalBlock';


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
                <ParaBlock title="What is Statistical Significance?" />
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
                />
            </div>

            <CalloutBlock
                type="info"
                title="P-value"
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

            <CalloutBlock title="Example: Membership Program" type="example" description={[
                <ParaBlock items={[<span key="1">Pierce County launches a pilot mentorship program aimed at reducing youth reoffending.</span>]} />,
                <ListBlock
                    items={[
                        "10% of mentored youth reoffended",
                        "20% of non-mentored youth reoffended"
                    ]}
                />, <ParaBlock
                    items={[
                        <span key="1">To determine if the difference is meaningful, we use statistical significance.</span>,
                        <span key="2">If the result is statistically significant (e.g., p &lt; 0.05), we can be more confident that the mentorship program had a real impact—not just a difference due to chance.</span>
                    ]}
                />]}
            />

            <CalloutBlock type="example" title="Example: COVID-19 Vaccine Trial" description={[<ParaBlock items={[<span key="1">The vaccine showed 95% efficacy with a p-value &lt; 0.0001.</span>]} />,
            <ListBlock
                items={[
                    <span>95% efficacy rate & p-value &lt; 0.0001</span>,
                    <span>That means there was <strong>less than 0.01% </strong> chance the result happened by chance</span>
                ]}
            />
            ]} />

            <div id="statistically-vs-practically">
                <ParaBlock title="Statistically Significant ≠ Practically Important" items={[<span key="1">A result may be statistically significant but not practically important in the real world.</span>]} />
            </div>

            <TableBlock
                headers={["Scenario", "Significance", "Practical Value"]}
                rows={[
                    ["A medication reduces recovery time by 0.5%", "p < 0.05", "May not help patients meaningfully"],
                    ["A vaccine cuts hospitalization by 90%", "p < 0.05", "Huge real-world impact"]
                ]}
            />

            <CalloutBlock title="Example: County Wide Survey"
                type="example"
                description={[
                    <span key="1">Pierce County conducts county-wide surveys to assess public trust in local government services.</span>,
                    <ListBlock
                        items={[
                            "In 2023, 65% of residents reported trust in local services",
                            "In 2024, that number rose to 70% — a 5% increase"
                        ]}
                    />, <ParaBlock
                        items={[
                            <span>However, if only a small number of people were surveyed, we need to ask:</span>,
                        ]}
                    />,
                    <ListBlock
                        items={[
                            "Is this increase due to real change, or could it be chance?"
                        ]} />,
                    <ParaBlock items={[<span key="2">Using statistical significance (like checking if p &lt; 0.05), we can determine if the increase reflects a meaningful shift in public sentiment—or if it might be the result of chance due to a small sample size.</span>
                    ]}
                    />
                ]} />

            <div id="why-it-matters">
                <ListBlock title="Why It Matters" items={[
                    <span key="1">Helps us know which results we can trust</span>,
                    <span key="2">Reduces guesswork and assumptions in decision-making</span>,
                    <span key="3">Keeps us from making choices based on random variation</span>
                ]} />
            </div>
            <AdditionalSourcesBlock
                sources={[
                    {
                        label: "Statsig: A Comprehensive Guide to Statistical Significance",
                        url: "https://www.statsig.com/perspectives/a-comprehensive-guide-to-statistical-significance#:~:text=Statistical%20significance%20is%20a%20way,the%20concept%20of%20p-values",
                    },
                    {
                        label: "W3Schools: Hypothesis Testing",
                        url: "https://www.w3schools.com/statistics/statistics_hypothesis_testing.php",
                    },
                    {
                        label: "National Library of Medicine: Statistical Significance",
                        url: "https://www.ncbi.nlm.nih.gov/books/NBK459346/",
                    },
                    {
                        label: "National Ataxia Foundation: What is Statistical Significance?",
                        url: "https://www.ataxia.org/scasourceposts/snapshot-what-is-statistical-significance/",
                    },
                ]}
            />
        </ModulePage>
    );
}
