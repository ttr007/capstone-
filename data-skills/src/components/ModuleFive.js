import React from 'react';
import ModulePage from './ModulePage';
import ListBlock from './ListBlock';
import ParaBlock from './ParaBlock';
import CalloutBlock from './CalloutBlock';
import TableBlock from './TableBlock';

export function ModuleFive() {
    return (
        <ModulePage
            title="Uncertainty"
            url="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video if needed
        >
            <ParaBlock
                items={[
                    <span key="intro">Understanding uncertainty in data collection helps us account for <strong>errors</strong> and <strong>improve decision-making</strong>. This module covers:</span>,
                ]}
            />

            <ListBlock
                title="Table of Contents"
                items={[
                    <a href="#summary" key="summary">Summary</a>,
                    <a href="#noise" key="noise">Noise</a>,
                    <a href="#inaccuracy" key="inaccuracy">Inaccuracy</a>,
                    <a href="#accuracy-vs-precision" key="accuracy-vs-precision">Accuracy vs. Precision</a>,
                    <a href="#comparing-noise-inaccuracy" key="comparing-noise-inaccuracy">Comparing Noise and Inaccuracy</a>,
                    <a href="#why-this-matters" key="why-this-matters">Why This Matters</a>
                ]}
            />

            <ParaBlock
                items={[
                    <span key="data-summary">Recognizing errors and uncertainties in data collection helps us ensure more reliable and accurate data, which leads to better decision-making.</span>,
                ]}
            />

            <div id="summary">
                <ParaBlock title="Summary" items={[]} />
                <ListBlock
                    items={[
                        <span key="summary-noise"><strong>Noise</strong> = Random variation that makes it harder to interpret data.</span>,
                        <span key="summary-inaccuracy"><strong>Inaccuracy</strong> = Consistent, repeatable mistakes in data collection.</span>,
                        "Both distort your data—but in very different ways.",
                        "Reducing them improves trust and confidence in your results."
                    ]}
                />
            </div>

            <div id="noise">
                <ParaBlock title="Noise" items={[]} />
                <CalloutBlock
                    type="info"
                    title="💡 Noise"
                    description="Random variation in data that isn’t caused by meaningful differences. It’s natural, but too much hides real patterns."
                />
                <TableBlock
                    title="Sources of Noise"
                    headers={['Source', 'Description']}
                    rows={[
                        ['Measurement Errors', 'Human mistakes (misreading instruments), malfunctioning tools, or incorrect procedures'],
                        ['Sampling Variation', 'Natural randomness from collecting only part of a population—even if done correctly']
                    ]}
                />
                <ParaBlock
                    title="Example"
                    items={[
                        <span key="noise-example">Inaccurately filled client intake forms in Pierce County may create noise and reduce the ability to analyze service needs accurately.</span>
                    ]}
                />
                <ParaBlock
                    title="How to Reduce Noise"
                    items={[
                        <span key="reduce-noise">Use <strong>visualizations</strong>: Box plots and scatter plots help spot outliers.</span>,
                        <span key="reduce-noise-tools">Use <strong>better tools</strong>: Calibrate devices and standardize procedures.</span>,
                        <span key="reduce-noise-data">Collect more data: Bigger datasets help smooth out random fluctuations.</span>
                    ]}
                />
            </div>

            <div id="inaccuracy">
                <ParaBlock title="Inaccuracy" items={[]} />
                <CalloutBlock
                    type="info"
                    title="Inaccuracy"
                    description="Systematic, repeatable errors that lead to consistently wrong data—often due to flawed tools or methods."
                />
                <ParaBlock
                    title="Example"
                    items={[
                        <span key="inaccuracy-example">An inaccurate clock (always 10 minutes ahead) gives you the wrong time every time. Similarly, Pierce County’s GPS or GIS tagging technologies may report inaccurate construction progress.</span>
                    ]}
                />
                <ParaBlock
                    title="Why It Matters"
                    items={[
                        <span key="inaccuracy-text"><strong>Inaccuracy</strong> misleads analysis by skewing results in one direction.</span>,
                        "Unlike noise, inaccuracy is <strong>fixable</strong> once you identify the cause.",
                        "Unchecked inaccuracy leads to <strong>harmful decisions</strong>."
                    ]}
                />
                <ParaBlock
                    title="How to Address Inaccuracy"
                    items={[
                        "<strong>Calibrate tools</strong> and test software regularly.",
                        "Watch for recurring <strong>errors</strong> or patterns.",
                        "Adjust processes based on <strong>observed bias</strong>."
                    ]}
                />
            </div>

            <div id="accuracy-vs-precision">
                <ParaBlock title="Accuracy vs. Precision" items={[]} />
                <CalloutBlock
                    type="info"
                    title="Accuracy vs. Precision"
                    description="Accuracy is how close a measurement is to the true value, while precision refers to the consistency of repeated measurements."
                />
                <ListBlock
                    items={[
                        "<strong>High Precision, Low Accuracy:</strong> Results are consistent, but wrong.",
                        "<strong>High Accuracy, Low Precision:</strong> Results are close to the true value, but inconsistent.",
                        "<strong>High Accuracy + High Precision:</strong> Ideal—consistent and correct."
                    ]}
                />
            </div>

            <div id="comparing-noise-inaccuracy">
                <ParaBlock title="Comparing Noise and Inaccuracy" items={[]} />
                <TableBlock
                    title="Noise vs. Inaccuracy"
                    headers={['Concept', 'Type of Error', 'Source', 'Can You Fix It?', 'Effect']}
                    rows={[
                        ['Noise', 'Random', 'Natural variation or human inconsistency', 'Can be reduced, but not fully removed', 'Makes patterns harder to detect'],
                        ['Inaccuracy', 'Systematic', 'Bad tools, bias, poor setup', 'Often fixable with better design or measurement', 'Leads to misleading conclusions']
                    ]}
                />
            </div>

            <div id="why-this-matters">
                <ParaBlock title="Why This Matters" items={[]} />
                <ListBlock
                    items={[
                        "Unaddressed uncertainty can result in:",
                        "Misleading charts.",
                        "Incorrect conclusions.",
                        "Harmful decisions in public policy, business, healthcare, and more."
                    ]}
                />
                <ParaBlock
                    items={[
                        "When you account for noise and inaccuracy, your data becomes more trustworthy—and your insights more valuable."
                    ]}
                />
            </div>
        </ModulePage>
    );
}
