import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    id: 1,
    title: "Building Interactive Dashboards with Tableau: A Complete Guide",
    excerpt: "Learn the key principles of creating engaging, user-friendly data visualizations that tell a story and drive action.",
    content: `Data visualization is more than just creating charts—it's about telling a story that drives action. In this comprehensive guide, we'll explore the key principles of building interactive dashboards with Tableau that engage users and communicate insights effectively.

## Understanding Your Audience

Before diving into Tableau, it's crucial to understand who will be using your dashboard. Are they executives who need high-level KPIs? Analysts who want to drill down into details? Understanding your audience shapes every design decision.

## Key Design Principles

### 1. Start with the Big Picture
Place your most important metrics at the top-left of your dashboard. This is where users naturally look first. Use large, bold numbers for KPIs that matter most.

### 2. Use Color Purposefully
Color should highlight insights, not decorate. Use a consistent color palette and reserve bright colors for important data points or alerts.

### 3. Enable Interactivity
Tableau's strength lies in its interactivity. Add filters, parameters, and actions that let users explore the data on their own terms.

## Best Practices for Performance

- Limit the number of marks on a single view
- Use extracts instead of live connections when possible
- Optimize calculated fields by moving them to the data source level

## Conclusion

Building effective dashboards is an iterative process. Gather feedback from your users, measure engagement, and continuously refine your designs.`,
    category: "Tableau",
    readTime: "8 min read",
    date: "January 15, 2024",
  },
  {
    id: 2,
    title: "Python for Data Analysis: A Beginner's Guide",
    excerpt: "Getting started with pandas, numpy, and matplotlib for your data analysis journey. Everything you need to know.",
    content: `Python has become the go-to language for data analysis, and for good reason. Its ecosystem of libraries makes complex data tasks surprisingly approachable. Let's explore the essential tools every data analyst should know.

## The Essential Libraries

### Pandas: Your Data Manipulation Swiss Army Knife
Pandas provides DataFrame structures that make working with tabular data intuitive. Whether you're cleaning data, merging datasets, or calculating aggregations, pandas has you covered.

\`\`\`python
import pandas as pd
df = pd.read_csv('data.csv')
df.groupby('category').mean()
\`\`\`

### NumPy: The Foundation of Scientific Computing
NumPy provides efficient array operations that power most of Python's data science stack. Understanding NumPy arrays is fundamental to working with any data in Python.

### Matplotlib & Seaborn: Visualization Made Simple
While Tableau excels at interactive dashboards, Python's visualization libraries are perfect for exploratory analysis and creating publication-ready figures.

## Getting Started

1. Install Anaconda for a complete data science environment
2. Start with Jupyter notebooks for interactive exploration
3. Practice with real datasets from Kaggle or UCI Machine Learning Repository

## Next Steps

Once comfortable with these basics, explore scikit-learn for machine learning and SQLAlchemy for database connections.`,
    category: "Python",
    readTime: "12 min read",
    date: "January 10, 2024",
  },
  {
    id: 3,
    title: "The Art of Data Storytelling",
    excerpt: "How to transform raw numbers into compelling narratives that resonate with stakeholders and drive business decisions.",
    content: `Numbers alone rarely inspire action. The most impactful data professionals know how to weave data into narratives that resonate with their audience and drive decisions.

## The Three Pillars of Data Storytelling

### 1. Data: The Foundation
Your story must be built on solid, accurate data. This means understanding your data sources, acknowledging limitations, and being transparent about uncertainty.

### 2. Narrative: The Structure
Every good story has a beginning, middle, and end. In data storytelling:
- **Beginning**: Set the context. What question are we answering?
- **Middle**: Present the evidence. What does the data show?
- **End**: Call to action. What should we do about it?

### 3. Visuals: The Engagement
The right visualization can make complex patterns immediately apparent. Choose charts that match your message—trends call for line charts, comparisons call for bar charts.

## Common Pitfalls to Avoid

- Overwhelming your audience with too many metrics
- Using jargon that alienates non-technical stakeholders
- Presenting data without clear recommendations

## Practice Makes Perfect

The best way to improve is through practice. Start with low-stakes presentations and gather feedback. Over time, you'll develop an intuition for what resonates with your audience.`,
    category: "Insights",
    readTime: "6 min read",
    date: "January 5, 2024",
  },
  {
    id: 4,
    title: "Advanced Tableau Calculations: LOD Expressions Explained",
    excerpt: "Master Level of Detail expressions to create more powerful and flexible calculations in your dashboards.",
    content: `Level of Detail (LOD) expressions are one of Tableau's most powerful features, yet they're often misunderstood. Let's demystify them.

## What Are LOD Expressions?

LOD expressions let you control the granularity at which a calculation is performed, independent of the visualization's level of detail. This opens up possibilities that are otherwise impossible with regular calculated fields.

## The Three Types

### FIXED
Computes a value at a specified level, ignoring the view's dimensions and filters.
\`\`\`
{FIXED [Region]: SUM([Sales])}
\`\`\`

### INCLUDE
Adds dimensions to the computation beyond what's in the view.
\`\`\`
{INCLUDE [Customer Name]: SUM([Sales])}
\`\`\`

### EXCLUDE
Removes dimensions from the computation.
\`\`\`
{EXCLUDE [Month]: SUM([Sales])}
\`\`\`

## Practical Examples

- **Customer's First Purchase Date**: {FIXED [Customer ID]: MIN([Order Date])}
- **Percent of Total**: SUM([Sales]) / {FIXED: SUM([Sales])}
- **Cohort Analysis**: Compare customers based on when they first purchased

## Performance Considerations

LOD expressions can be computationally expensive. Use them judiciously and consider moving complex calculations to your data source when possible.`,
    category: "Tutorials",
    readTime: "10 min read",
    date: "December 28, 2023",
  },
  {
    id: 5,
    title: "Breaking Into Data Analytics: My Career Journey",
    excerpt: "Personal insights and lessons learned from transitioning into a data analytics career. Tips for aspiring analysts.",
    content: `Transitioning into data analytics wasn't a straight path for me. Here's what I learned along the way that might help others on a similar journey.

## My Background

I didn't start in a technical field. My journey began with a curiosity about why certain business decisions worked and others didn't. That curiosity led me to data.

## Key Lessons Learned

### 1. Start with the Business Problem
Technical skills matter, but understanding business context is what makes you valuable. Always ask "why" before "how."

### 2. Build a Portfolio
Nothing speaks louder than demonstrated work. Create projects that showcase your ability to:
- Clean messy data
- Find meaningful insights
- Communicate findings clearly

### 3. Network Authentically
The data community is incredibly generous. Engage on LinkedIn, attend meetups, and don't be afraid to reach out to people whose work you admire.

### 4. Embrace Continuous Learning
The field evolves rapidly. Stay curious and dedicate time each week to learning something new.

## Resources That Helped Me

- Coursera and DataCamp for structured learning
- Kaggle for practice datasets
- Medium and Towards Data Science for staying current

## Final Thoughts

Every expert was once a beginner. Be patient with yourself, celebrate small wins, and keep building.`,
    category: "Career",
    readTime: "7 min read",
    date: "December 20, 2023",
  },
  {
    id: 6,
    title: "Automating Reports with Python and Tableau",
    excerpt: "Combine the power of Python scripting with Tableau Server to automate your reporting workflows.",
    content: `Manual reporting is a time sink. Let's explore how to combine Python and Tableau to automate your reporting workflows and free up time for actual analysis.

## The Automation Stack

### Tableau Server REST API
Tableau Server provides a comprehensive REST API that lets you:
- Refresh data sources
- Download workbooks
- Publish updates
- Manage users and permissions

### Python's tableau-api-lib
This library simplifies interactions with Tableau Server:
\`\`\`python
from tableau_api_lib import TableauServerConnection

conn = TableauServerConnection(config)
conn.sign_in()
\`\`\`

## Common Automation Scenarios

### Scheduled Data Refreshes
Trigger extract refreshes based on upstream data availability, not just a fixed schedule.

### Report Distribution
Automatically export views as PDFs and email them to stakeholders.

### Data Quality Monitoring
Run validation checks before refreshing published data sources.

## Implementation Tips

1. Start small—automate one report before scaling
2. Build in error handling and notifications
3. Document your automation logic
4. Version control your scripts

## The ROI of Automation

Time invested in automation pays dividends. A report that takes 2 hours weekly becomes a script that runs in minutes. That's 100+ hours saved per year—time you can spend on higher-value analysis.`,
    category: "Python",
    readTime: "15 min read",
    date: "December 15, 2023",
  },
];

const categoryColors: Record<string, string> = {
  Tableau: "bg-coral/10 text-coral",
  Python: "bg-mint/20 text-accent-foreground",
  Tutorials: "bg-lavender/20 text-secondary-foreground",
  Insights: "bg-peach/20 text-foreground",
  Career: "bg-soft-pink/20 text-foreground",
};

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Post not found</h1>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <AnimatedSection>
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-display font-bold mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-display font-semibold mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('```')) {
                  const code = paragraph.replace(/```\w*\n?/g, '');
                  return (
                    <pre key={index} className="bg-muted p-4 rounded-lg overflow-x-auto my-4">
                      <code className="text-sm">{code}</code>
                    </pre>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                  return (
                    <ul key={index} className="list-disc pl-6 my-4 space-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="text-muted-foreground">
                          {item.replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.match(/^\d+\./)) {
                  const items = paragraph.split('\n').filter(line => line.match(/^\d+\./));
                  return (
                    <ol key={index} className="list-decimal pl-6 my-4 space-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="text-muted-foreground">
                          {item.replace(/^\d+\.\s*/, '')}
                        </li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed my-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
