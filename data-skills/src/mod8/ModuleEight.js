import React from 'react';
import ModulePage from '../components/ModulePage';
import ListBlock from '../components/ListBlock';
import ParaBlock from '../components/ParaBlock';
import CalloutBlock from '../components/CalloutBlock';
import TableBlock from '../components/TableBlock';

export function ModuleEight() {
    return (
        <ModulePage title="Skewing the Data" url="https://www.youtube.com/embed/dQw4w9WgXcQ">
            
            <div id="intro">
                <ParaBlock
                    items={[
                        <span key="1">Some data entries—whether missing or extreme—can <strong>distort your results</strong> and lead to misleading conclusions.</span>
                    ]}
                />
                
                <ParaBlock
                    items={[
                        <span key="1"><strong>Understanding how to recognize and handle these values</strong>—especially missing data and outliers—is essential to making fair, accurate, and useful decisions based on your data.</span>
                    ]}
                />
            </div>
            
            <div id="table-of-contents">
                <ListBlock
                    items={[
                        <a href="#missing-data" key="1">Missing Data</a>,
                        <a href="#outliers" key="2">Outliers</a>,
                        <a href="#why-it-matters" key="3">Why It Matters</a>
                    ]}
                />
            </div>

            <div id="summary">
                <ListBlock
                    title="Summary"
                    items={[
                        <span key="1"><strong>Missing data</strong> occurs when information is incomplete, often causing bias or weak conclusions.</span>,
                        <span key="2"><strong>Outliers</strong> are data points that don’t fit the trend and can skew the results.</span>,
                        <span key="3">These values need careful evaluation—not automatic deletion.</span>,
                        <span key="4">How you handle them can significantly change your conclusions.</span>
                    ]}
                />
            </div>

            <div id="missing-data">
                <ParaBlock
                    title="Missing Data"
                    items={[
                        <span key="1">Missing data is often unavoidable, but if left unaddressed, it can introduce <strong>bias</strong> or make your conclusions <strong>inconclusive</strong>.</span>
                    ]}
                />

                <CalloutBlock
                    type="info"
                    title="Missing Data"
                    description={[
                        <span key="1">Gaps in your dataset caused by skipped questions, tech issues, or participant drop-off.</span>
                    ]}
                />

                <TableBlock
                    headers={["Type", "Description", "Example"]}
                    rows={[
                        ["MCAR (Missing Completely at Random)", "Missing without reason or pattern", "Lab results deleted by a system glitch"],
                        ["MAR (Missing at Random)", "Missing due to a factor that can be measured", "More men skip mental health survey questions"],
                        ["MNAR (Missing Not at Random)", "Missing because of the thing being measured", "Unhappy employees avoid a workplace survey"]
                    ]}
                />

                <CalloutBlock
                    type="warning"
                    title="Skewing"
                    description={[
                        <span key="1">Missing data—especially MNAR—can hide important truths and create bias in decision-making.</span>
                    ]}
                />

                <ListBlock
                    title="How to Handle Missing Data"
                    items={[
                        <span key="1">Investigate <strong>why</strong> data is missing</span>,
                        <span key="2">Use statistical methods like <strong>imputation</strong> (filling in blanks based on other data)</span>,
                        <span key="3">Collect more complete data when possible</span>,
                        <span key="4">Be <strong>transparent</strong> when reporting missing data and its potential effects</span>
                    ]}
                />
            </div>

            <div id="outliers">
                <ParaBlock
                    title="Outliers"
                    items={[
                        <span key="1"> Outliers are data points that are much higher or lower than the rest of the dataset.</span>
                    ]}
                />

                <CalloutBlock
                    type="info"
                    title="Outliers"
                    description={[
                        <span key="1">Data points that are much higher or lower than the rest of the dataset.</span>
                    ]}
                />

                <ListBlock
                    items={[
                        <span key="1"><strong>Outliers can be mistakes—or important findings.</strong> It’s important to know when they matter.</span>,
                        <span key="2">Some outliers result from errors, like a mistyped number. But others might reveal something meaningful.</span>,
                        <span key="3">Understanding the <strong>context</strong> behind an outlier helps you decide if it should be kept or removed.</span>
                    ]}
                />

                <TableBlock
                    headers={["Type", "Description", "Example"]}
                    rows={[
                        ["Univariate", "Unusual value in one variable", "A single huge expense in an otherwise low-cost budget"],
                        ["Multivariate", "Two+ combined values are unusual", "Lower-income areas with unusually high internet access"],
                        ["Point/Extreme", "One value is far outside the typical range", "A contractor charging $100 million when most would only charge $100 thousand"],
                        ["Contextual", "Value is unusual in one context, normal in another", "$5,000 equipment might seem odd at a community food program, but this price might be normal in other public works"],
                        ["Collective", "A whole group behaves unusually", "All participants in a job program are unable to find jobs"]
                    ]}
                />
            </div>

            <div id="how-to-spot-outliers">
                <ParaBlock
                    title="How to Spot Outliers"
                    items={[
                        <span key="1">You can spot outliers through <strong>visualizing data</strong> in the following ways:</span>
                    ]}
                />
            </div>

            <div id="statistical-methods">
                <ListBlock
                    title="Statistical Methods"
                    items={[
                        <span key="1"><strong>Z-score</strong> tells how far a point is from the average. If a score is very high or low, it might be an outlier.</span>,
                        <span key="2"><strong>Interquartile Range (IQR)</strong> finds values that are far from the middle of the dataset.</span>
                    ]}
                />
            </div>

            <div id="what-to-do-with-outliers">
                <ListBlock
                    title="What to Do With Outliers"
                    items={[
                        <span key="1">Keep them if they show something important (e.g., a new trend or at-risk group).</span>,
                        <span key="2">Remove or correct them if they are mistakes or skew your analysis unfairly.</span>,
                        <span key="3">Don’t delete outliers without understanding <strong>why</strong> they exist.</span>
                    ]}
                />
            </div>

            <div id="why-it-matters">
                <TableBlock
                    headers={["Problem", "Impact"]}
                    rows={[
                        ["Too much missing data", "Weakens conclusions, introduces bias"],
                        ["Ignored outliers", "Can lead to missed insights or flawed decisions"],
                        ["Misrepresented data", "Leads to unfair outcomes or misleading policy"]
                    ]}
                />
                
                <CalloutBlock
                    title="Outliers"
                    type="info"
                    description={[
                        <span key="1"><strong>Every data point tells a story.</strong> Some are noise—others are warning signs. Knowing the difference is essential to forming accurate conclusions.</span>
                    ]}
                />
            </div>

        </ModulePage>
    );
}
