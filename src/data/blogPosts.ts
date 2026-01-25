export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "why-tableau",
    title: "Why Tableau?",
    excerpt: "This is my journey of learning Tableau and trying to build awesome dashboards in the months to come.",
    content: `This is my journey of learning Tableau and trying to build awesome dashboards in the months to come. Although schoolwork is intense now, I find myself loving the hours I spend working on data and putting things together for insight.

## The Beginning

I learnt about Tableau last year, 2019. I was working on a project for school about the gender pay gap. I loved working with the dataset. As I silently gathered my thoughts on how to visualize and predict the salary per employee based on different factors, I found a little difficulty using python to visualize the exact things I wanted to see.

## The Moment of Discovery

This was the moment when the heavens opened and a light shone down on me; complete with the light bulb popping up so bright. That was the moment I fell in love with Tableau. I did not know anything about it, I had just used it for a map visualization and that was it. Thinking I had accomplished something great. 🙈

## Taking the Leap

In January as I presented my final project, I was excited I used a different tool and I got results. That day, I came home and called a friend who is based in London, telling him how I excited I got using Tableau and that I think we should learn how to use the tool.

That night, I did a little research, looking at different visualization boards and how to get started officially. I decided then to build my first dashboard with the superhero dataset I got from Kaggle. I had so much fun doing that. I also built a coronavirus (dataset also from Kaggle) viz; this I did with my friend in London. Each of us trying to come up with a viz to inform others of the outbreak.

## The Journey Continues

As weeks passed, I started teaching myself Tableau. Learning from blogs, YouTube, anywhere I could find an article. Although I am still learning and trying to perfect my craft, I just love to take a break from schoolwork and just play with data in Tableau.

I love the tool and I am hoping one day, I will become super good at it. Oh, I forgot, Tableau has a great community. So why not Tableau? Easy to get help and directions.`,
    category: "Tableau",
    readTime: "5 min read",
    date: "May 28, 2020",
    featured: true,
  },
  {
    id: 2,
    slug: "my-workout-tracker-visualization",
    title: "My Workout Tracker Visualization",
    excerpt: "Coming home to Accra, Ghana has got me eating a lot. All the food I missed while I was away. Time to track those workouts!",
    content: `Coming home to Accra, Ghana has got me eating a lot. All the food I missed while I was away. I don't have a favourite food but not eating homemade delicious food for a while can give me a great appetite. It has just been a month and I feel like I need to get back on track with my fitness routine.

## The Inspiration

I decided to create a workout tracker visualization in Tableau to help me stay motivated and monitor my progress. This dashboard would show my completed tasks, missed workouts, and upcoming activities.

## Building the Calendar

Here's how I built the calendar view:

1. Set the marks to squares for a clean calendar look
2. Placed the day of the week to columns and the week number to rows
3. Changed the marks to circles for a more modern aesthetic
4. Created a calculated field to color-code completed, missed, and pending tasks

## Target Tracking

Each day in August has a certain target to be completed. I used custom icons downloaded from Flaticon, placing them in the Tableau repository folder.

### Steps to build the target tracker:
1. Create a new calculated field called "today" to select the current date
2. Drag this field to the filter box
3. Add measure names to filter box and select needed measures
4. Drag measure values to text on the marks card
5. Select shapes on the marks card, and drag measure names to shapes

## The Timeline Chart

For the timeline, I used an area chart:
1. Drag date to the columns pane, right-click and select the exact date option
2. Drag measure names to filter, select the needed measures
3. Drag measure values to the rows pane
4. Drag measure names to color, edit colors as needed

## Adding Dynamic Elements

I also added time and greeting features:
1. Created a calculated field to display the current time using NOW()
2. Created custom date formatting
3. Built a greetings formula that changes based on the hour of day

The layout was designed in Figma and brought into Tableau as a tiled image.

That's all for this simple yet fun dashboard. Thank you for reading. With love always ❤️😘`,
    category: "Tableau",
    readTime: "8 min read",
    date: "August 6, 2020",
    featured: true,
  },
  {
    id: 3,
    slug: "data-cleaning-to-machine-learning",
    title: "Data Cleaning to Machine Learning",
    excerpt: "A journey to re-learn Python and polish up my skills, from data cleaning to classification with the Titanic dataset.",
    content: `As part of my return journey to Python project; this is a journey to re-learn Python and polish up my skills, starting from the basics and climbing up to the advance; Machine Learning and Deep Learning, I look at data cleaning in Python and classification under the supervised learning algorithms.

## What is Data Cleaning?

This is the process of removing unwanted features, fixing or removing duplicates, incorrect entries, incomplete or missing values, incorrectly formatted data in the data to improve the quality of the data.

The term "garbage in, garbage out" is very crucial in the data environment. When you use a poor dataset for analysis, you get very poor and incorrect insights. Similarly, a poor dataset being fed into a machine learning algorithm leads to poor performance.

## Understanding the Data

Understanding your data leads you on the right path to cleaning the data and making the necessary wrangling to achieve your set goal.

The ultimate goal of the dataset being used here is to predict if an individual would survive or not on the Titanic shipwreck. This is a classification problem under supervised learning algorithms in data science.

## Getting Started

\`\`\`python
import numpy as np 
import pandas as pd 
import seaborn as sns 
import matplotlib.pyplot as plt
from scipy import stats
from sklearn.neighbors import KNeighborsClassifier

# Load dataset
train = pd.read_csv('train.csv')
test = pd.read_csv('test.csv')
\`\`\`

## Data Cleaning Process

Checking for missing values and handling them appropriately:

\`\`\`python
# Identifying missing values
print(data.isnull().values.any())
print(data.isnull().sum())

# Fill missing age values with median
median = dataset["Age"].median()
dataset["Age"].fillna(median, inplace=True)

# Fill missing embarked values with mode
dataset["Embarked"].fillna("S", inplace=True)
\`\`\`

## Feature Engineering

Creating new features to improve model performance:

\`\`\`python
# Creating alone feature
dataset["Alone"] = np.where((dataset["SibSp"] + dataset["Parch"]) > 0, 0, 1)

# Extracting titles from names
dataset["Title"] = dataset.Name.str.extract(' ([A-Za-z]+).', expand=False)
\`\`\`

## Building the Model

Using K-Nearest Neighbors for classification:

\`\`\`python
KNN = KNeighborsClassifier(n_neighbors=5, metric='euclidean')
KNN.fit(x_train, y_train)
prediction = KNN.predict(x_test)
\`\`\`

## Results

- Training Accuracy: 90%
- Test Accuracy: 87%

Using a higher number of neighbors, the accuracy on the test dataset increased from 0.83 to 0.87.

Data cleaning is a very crucial step in both data analysis and data science. Do not forget to run the codes! 🤗

Codes can be found on my GitHub. Thank you for reading. Happy cleaning ❤️`,
    category: "Python",
    readTime: "12 min read",
    date: "November 7, 2020",
    featured: true,
  },
  {
    id: 4,
    slug: "getting-started-with-data-before-a-build-or-model",
    title: "Getting Started with Data Before a Build or Model",
    excerpt: "Understanding data is the first step of getting things done in terms of analytics or data science.",
    content: `Having fallen in love with the fact that data is powerful, very powerful I mean and enjoying the sessions I have with friends, I find myself writing this blog to essentially get anyone started with data, with little or no skills, one can invest into the journey of understanding data and making sense out of it.

## The Foundation

In my data cleaning to machine learning post, I talked about how one must understand the data and what makes up the data. This is the very first step of getting things done in terms of analytics or data science. Because very poor data may lead to poor results such as poor insights or model leading to poor decisions or outcomes.

## The Power of Data

Data is so powerful, it can change decisions and possible outcomes of these decisions. Therefore understanding and using it in the right way for the right insight is deemed very important.

Incomplete data or data that contains a lot of missing values can be problematic. So in the bid to understanding data, one must seek to make sure that the data is completed, that is to handle missing values, either by completely removing them or imputing them depending on the features in the data.

## Before the Build

Before the great build which leads to a good decision, one must identify the audience and ask relevant questions to get the views that make up the build. With this step, in-depth understanding is crucial.

### For Machine Learning
For a machine learning task to predict house prices, one must ask questions to find out which features in the data strongly correlate to these prices. It will then lead to further feature engineering or not.

### For Visualization
If building a dashboard based on a senior management level audience, questions asked would influence the builds in a view.

## The Truth About Data Complexity

Data can be put as being complex or not depending on time spent to understand and cleaning it. I'm a strong advocate for data cleaning because garbage in, results to garbage out, and that's not what we want.

Once the data has been understood, the result becomes a new story to tell. Let's build now!

Thank you for reading ❤️❤️. Data is the new world.`,
    category: "Insights",
    readTime: "5 min read",
    date: "January 31, 2021",
    featured: false,
  },
  {
    id: 5,
    slug: "cyclistic-bike-share-analysis",
    title: "Cyclistic Bike Share Analysis: Members vs Casual Riders",
    excerpt: "Analyzing the difference between Cyclistic members and casual users across 12 months in Chicago.",
    content: `## Introduction

The Cyclistic bike share analysis is a project based on a fictional company in Chicago. As an analyst, the goal of this project is to maximize the number of annual memberships which would lead to the growth of the company.

The company launched in 2016 and has since then grown a fleet of 5,824 bicycles that are geotracked and locked into a network of 692 stations across Chicago.

**Goal**: Converting casual riders into annual members of the bike-share product.

## The Process

### Ask
Business task: Growth of the company by increasing the number of members through converting casual riders to annual members.

Key Stakeholders: The Director of Marketing, The Manager, Marketing Analytics Team and the Executive Team.

### Prepare
The data being used is the Divvy datasets. The previous 12 months of data (June 2020 to May 2021) were analyzed.

### Process
Key questions analyzed:
- What is the average riding times for both users?
- In which month records the highest number of rides for both users?
- What happens on weekdays, in terms of number of rides taken by both users?
- What times do we start both types of riders on the road?
- What is the percentage of members to casual riders?

## Key Findings

### Monthly Trends
The peak of bike rides are around the summer months with August recording the highest bike rides of 622,361:
- Members: 332,700
- Casual riders: 289,661

### Weekday Analysis
Saturday recorded the highest number of bike rides. As the week progresses into the weekend, the number of rides grows (Monday to Saturday).

Casual users tend to take more bike rides on weekends compared to members, and less on weekdays. This suggests some members may be using bikes as commute to work.

### Start Times
Members ride as early as 05:59:59 AM compared to casual riders who start at 06:00:46 AM.

## Recommendations

1. **Weekend Promotions**: Casual riders tend to ride more on weekends. Providing promotions or discounts can engage these users to subscribe.

2. **Summer Campaigns**: During summer, maximize engagement with both user types through incentives for members and subscription packages for casual riders.

3. **User Statistics App**: Providing an app to show ride statistics, health benefits, and calories burnt would engage both types of users.

This project is based on the Google Data Analytics Professional Certificate.`,
    category: "Tableau",
    readTime: "10 min read",
    date: "June 15, 2021",
    featured: true,
  },
  {
    id: 6,
    slug: "building-interactive-dashboards-with-tableau",
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
    category: "Tutorials",
    readTime: "8 min read",
    date: "December 28, 2023",
    featured: false,
  },
  {
    id: 7,
    slug: "python-for-data-analysis",
    title: "Python for Data Analysis: A Beginner's Guide",
    excerpt: "Getting started with pandas, numpy, and matplotlib for your data analysis journey.",
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
    readTime: "8 min read",
    date: "January 10, 2024",
    featured: false,
  },
  {
    id: 8,
    slug: "the-art-of-data-storytelling",
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
    featured: false,
  },
  {
    id: 9,
    slug: "breaking-into-data-analytics",
    title: "Breaking Into Data Analytics: My Career Journey",
    excerpt: "Personal insights and lessons learned from transitioning into a data analytics career.",
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
    featured: false,
  },
];

export const categories = ["All", "Tableau", "Python", "Tutorials", "Insights", "Career"];

export const categoryColors: Record<string, string> = {
  Tableau: "bg-coral/10 text-coral",
  Python: "bg-mint/20 text-accent-foreground",
  Tutorials: "bg-lavender/20 text-secondary-foreground",
  Insights: "bg-peach/20 text-foreground",
  Career: "bg-soft-pink/20 text-foreground",
};
