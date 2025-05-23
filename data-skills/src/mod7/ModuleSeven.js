import React from 'react';
import ModulePage from '../components/ModulePage';
import ListBlock from '../components/ListBlock';
import ParaBlock from '../components/ParaBlock';
import CalloutBlock from '../components/CalloutBlock';
import TableBlock from '../components/TableBlock';
import AdditionalSourcesBlock from '../components/AdditionalBlock';
import ModuleIntro from '../components/ModuleIntro';

const overview = (
    <div className="overview-text">
        <p>
            Data comes from real people—so how we collect and interpret it affects real lives.
            This module focuses on the ethical and social responsibilities involved in data work, especially around representation and reinforcing bias.
        </p>
    </div>
);

const toc = (
    <div className="toc-container">
        <h5>Table of Contents</h5>
        <ul style={{ listStylePosition: 'inside', paddingRight: '1rem' }}>
            <li><a href="#representation">Representation</a></li>
            <li><a href="#representative-sample">What is Representative Sample?</a></li>
            <li><a href="#representation-risks">Risks of Over and Under Representation</a></li>
            <li><a href="#improving-representation">How to Improve Representation</a></li>
            <li><a href="#reinforcing-bias">Reinforcing Bias</a></li>
            <li><a href="#real-world-impacts">Real World Impacts</a></li>
            <li><a href="#why-it-matters">Why It Matters</a></li>
        </ul>
    </div>
);

export function ModuleSeven() {
    return (
        <ModulePage
            title="Social Implications"
            url="https://www.youtube.com/embed/dQw4w9WgXcQ"
        >
            <ModuleIntro
                title="Social Implications"
                readTime="6 min read"
                overview={overview}
                toc={toc}
            />
            <ParaBlock title="Summary" level={1} />
            <div id="summary">
                <ListBlock
                    items={[
                        <span><strong>Representation</strong> = Making sure data reflects all groups fairly.</span>,
                        <span><strong>Bias</strong> = When data or methods lead to unfair or inaccurate results.</span>,
                        "Under- or over-representation can lead to discrimination and poor decisions.",
                        "Fair sampling and bias checks help improve equity in data use.",
                        "Ethical data practices build trust and support better outcomes for everyone."
                    ]}
                />
            </div>

            <div id="representation">
                <ParaBlock
                    title="Representation"
                />
                <CalloutBlock
                    type="info"
                    title="Representation"
                    description={[<span key="1">Representation ensures your sample reflects the full diversity of the population. When data doesn’t represent people fairly, it can lead to harmful outcomes such as discrimination, exclusion, or misleading policies.</span>]}
                />
            </div>

            <div id="representative-sample">
                <ParaBlock
                    title="What is Representative Sample?"
                    items={[<span key="1">A representative sample includes people whose characteristics match those of the overall population. This ensures your results are meaningful and generalizable.</span>]}
                />
            </div>

            <div id="representation-risks">
                <ParaBlock
                    title="Risks of Over and Under Representation"
                    items={[<span key="1">Both over and under representation lead to bias, which can reinforce stereotypes, limit opportunities, and worsen inequalities.</span>]}
                />

                <TableBlock
                    headers={["Type", "Definition", "Example"]}
                    rows={[
                        ["Over-Representation", "A group appears more often than it does in reality", "Surveying popular parks → Responses may overrepresent some users and miss voices from underserved areas."],
                        ["Under-Representation", "A group appears less often than it does in reality", "Public input on community events may underrepresent non-English-speaking communities"]
                    ]}
                />
            </div>

            <div id="improving-representation">
                <ParaBlock
                    title="How to Improve Representation"
                />

                <TableBlock
                    headers={["Method", "Description", "Example"]}
                    rows={[
                        ["Random Sampling", "Give every person an equal chance to be selected", "Assign numbers and randomly pick 100 from population list"],
                        ["Stratified Sampling", "Divide population into groups and sample each one proportionally", "In political polling, sample equal numbers by race, gender, and income"],
                        ["Bias Checks", "Review your data sources and collection methods for systemic gaps", "Ask: Who is missing? Are certain groups oversampled?"]
                    ]}
                />

                <CalloutBlock
                    title="Sampling"
                    type="success"
                    description={[<span key="1">Fair sampling = fairer insights → better decisions.</span>]}
                />
            </div>

            <div id="reinforcing-bias">
                <ParaBlock
                    title="Reinforcing Bias"
                    items={[<span key="1">When data reflects only part of a population, it can reinforce existing inequalities.</span>]}
                />

                <CalloutBlock
                    type="info"
                    title="Bias Reinforcement"
                    description={[<span key="1">Bias reinforcement can lead to policies that don't work for everyone and algorithms that perpetuate discrimination.</span>]}
                />
            </div>

            <div id="real-world-impacts">
                <ParaBlock
                    title="Real-World Impacts"
                    items={[<span key="1">The risks of reinforcing bias are visible in domains like hiring tools, healthcare, and education.</span>]}
                />

                <TableBlock
                    headers={["Domain", "Effect on Bias"]}
                    rows={[
                        ["Hiring tools", "Favor applicants with specific names, schools, or backgrounds"],
                        ["Healthcare", "Miss warning signs or symptoms in underrepresented populations"],
                        ["Education", "Data from wealthier schools might mislead funding decisions"]
                    ]}
                />
            </div>

            <div id="why-it-matters">
                <ListBlock
                    title="Why It Matters"
                    items={[
                        <span key="1">Accurate, ethical data practices help us recognize systemic issues, serve the entire community, and avoid making harmful or unfair decisions.</span>,
                        <span key="2">Ethical data practices help build public trust in research and systems.</span>
                    ]}
                />
            </div>

            <AdditionalSourcesBlock
                sources={[
                    {
                        label: "University of Manchester: What is Social Statistics?",
                        url: "https://www.humanities.manchester.ac.uk/social-statistics/study/what-is-social-statistics/",
                    },
                    {
                        label: "Data.org: Data Science for Social Impact",
                        url: "https://data.org/news/why-how-and-what-of-data-science-for-social-impact/",
                    },
                    {
                        label: "UC San Diego: IPE Data Science Research",
                        url: "https://ipe.ucsd.edu/research/data-science.html",
                    },
                ]}
            />
        </ModulePage>
    );
}
