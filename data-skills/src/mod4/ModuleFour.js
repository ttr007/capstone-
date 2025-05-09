import React from 'react';
import ModulePage from '../components/ModulePage';
import ListBlock from '../components/ListBlock';
import ParaBlock from '../components/ParaBlock';
import CalloutBlock from '../components/CalloutBlock';
import FormulaBlock from '../components/FormulaBlock';
import TableBlock from '../components/TableBlock';

export function ModuleFour() {
    return (
        <ModulePage
            title="Patterns and Variability"
            url="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video if needed
        >
            <ParaBlock
                items={[
                    <span key="intro">Understanding the <strong>shape</strong>, <strong>spread</strong>, and <strong>trends</strong> of data reveal the story behind the numbers. This module covers:</span>,
                ]}
            />

            <ListBlock
                title="Table of Contents"
                items={[
                    <a href="#distribution" key="distribution">Distribution</a>,
                    <a href="#variance" key="variance">Variation</a>,
                    <a href="#standard-deviation" key="standard-deviation">Standard Deviation</a>,
                    <a href="#averages-vs-means" key="averages-vs-means">Averages vs. Means</a>,
                    <a href="#why-it-matters" key="why-it-matters">Why It Matters</a>,
                ]}
            />

            <ParaBlock
                items={[
                    <span key="data-summary">By understanding how values are distributed and how much they vary, you’ll be better equipped to <strong>spot patterns</strong>, <strong>detect outliers</strong>, and <strong>make informed decisions</strong>.</span>,
                ]}
            />

            <div id="distribution">
                <ParaBlock title="Distribution" items={[]} />
                <CalloutBlock
                    type="info"
                    title="Distribution"
                    description="Describes how frequently certain values appear and the overall shape of the dataset."
                />

                <TableBlock
                    title="Types of Distribution"
                    headers={['Type', 'Description', 'Example']}
                    rows={[
                        ['Left Skewed', 'Most values are high; fewer low values (long left tail)', 'Seniors’ bedtime at a retirement home'],
                        ['Normal (unimodal)', 'Most values are in the middle, fewer at extremes', 'Height'],
                        ['Right Skewed', 'Most values are low; fewer high values (long right tail)', 'Number of pets'],
                        ['Uniform', 'All values are equally likely', 'Rolling a die'],
                    ]}
                />

                <ParaBlock
                    items={[
                        <span key="distribution-explanation">Understanding <strong>distribution</strong> can help assess equity, access, and consistency. For example:</span>,
                        <ul key="distribution-examples">
                            <li><strong>Equity index</strong>: Distribution of access to transportation, parks, or healthcare across neighborhoods can reveal service gaps.</li>
                            <li><strong>Human Services</strong>: Distribution of food assistance uptake by ZIP code could indicate issues with outreach or accessibility.</li>
                        </ul>
                    ]}
                />
            </div>

            <div id="variance">
                <ParaBlock title="Variance" items={[]} />
                <CalloutBlock
                    type="info"
                    title="Variance"
                    description="Measures how much values differ from each other on average."
                />
                <TableBlock
                    title="Types of Variance"
                    headers={['Type', 'Description', 'Example']}
                    rows={[
                        ['Low', 'Values are close together', 'Height of preschoolers'],
                        ['High', 'Values are very different', 'Heights at a basketball game (kids, adults, tall players)'],
                    ]}
                />
                <ParaBlock
                    items={[
                        <span key="variance-tip">Tips for dealing with high variability:</span>,
                        <ul key="variance-tips">
                            <li>Use a <strong>larger sample size</strong></li>
                            <li><strong>Clean</strong> or <strong>transform</strong> skewed data</li>
                            <li>Be cautious when comparing high-variance datasets—<strong>context matters</strong></li>
                        </ul>
                    ]}
                />
            </div>

            <div id="standard-deviation">
                <ParaBlock title="Standard Deviation" items={[]} />
                <CalloutBlock
                    type="info"
                    title="Standard Deviation"
                    description="A measure of how far values typically fall from the mean."
                />
                <ListBlock
                    items={[
                        <span key="sd-low">Low standard deviation: Values are close to the mean.</span>,
                        <span key="sd-high">High standard deviation: Values are far from the mean.</span>,
                    ]}
                />
                <ParaBlock
                    title="Forumla"
                    items={[
                        <FormulaBlock
                            title="Standard Deviation Formula"
                        >
                            <span key="sd-formula">σ = √(Σ(xi - μ)² / N)</span>
                        </FormulaBlock>]}
                />

            </div>

            <div id="averages-vs-means">
                <ParaBlock title="Averages vs. Means" items={[]} />
                <CalloutBlock
                    type="info"
                    title="Mean"
                    description="The sum of all numbers divided by the number of values."
                />
                <ListBlock>
                    items={[
                        <span key="mean-definition">Best to use when your data is <strong>normal</strong> and <strong>balanced</strong>.</span>,
                        <span key="median-definition">Median: The middle number in an ordered dataset.</span>,
                        <span key="mode-definition">Mode: The most frequent occurring value in the dataset.</span>
                    ]}
                </ListBlock>
            </div>

            <div id="why-it-matters">
                <ParaBlock title="Why It Matters" items={[
                    "Understanding distribution, variance, standard deviation, and averages helps you:",
                ]} />
                <ListBlock
                    items={[
                        <span key="takeaway-1">See whether values are <strong>clustered</strong> or <strong>spread apart</strong></span>,
                        <span key="takeaway-2">Identify <strong>extreme outliers</strong></span>,
                        <span key="takeaway-3">Determine if the average gives a <strong>reliable summary</strong></span>
                    ]}
                />

            </div>

            <ParaBlock
                items={[
                    "These tools are the foundation of statistical thinking and help you recognize patterns, spot bias, and ask better questions.",
                ]}
            />
        </ModulePage>
    );
}
