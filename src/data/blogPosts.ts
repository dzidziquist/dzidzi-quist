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
  image?: string;
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
    image: "/blog/coronavirus-tracking-tableau.png",
  },
  {
    id: 2,
    slug: "my-workout-tracker-visualization",
    title: "My Workout Tracker Visualization",
    excerpt: "Coming home to Accra, Ghana has got me eating a lot. All the food I missed while I was away. Time to track those workouts!",
    content: `Coming home to Accra, Ghana has got me eating a lot. All the food I missed while I was away. I don't have a favourite food but not eating homemade delicious food for a while can give me a great appetite. It has just been a month and I feel I gained a 1000 pound – I know that is impossible. So I have decided to go on a 28-day challenge, with the help of bae to keep me on my toes 😅, regardless I am going through with this challenge.

![Dashboard Preview](/blog/workout-tracker-1.png)

To push through to the end, I woke up 4 am on 3rd August just thinking why not create a viz board since it has been forever a built one to kill two birds with a stone.

With today's post, I will quickly but efficiently run you through how I achieved the dashboard for both desktop view and mobile view in tableau.

With the dashboard, I wanted it to feel like an interaction that one would have with an actual app but first, I needed to have some inspiration and also build the dataset. I took to Pinterest to gather some ideas, eventually, I had two good ideas I wanted to go for. Here are the links to both ideas.

Now let's get to the dataset. I had control on the variables I needed, using google sheets I manually inputted the data and imported it into tableau. This is a good way to update the dashboard without having to manually update it. For the daily weather, I got the data from here and the daily motivation quotes from here.

## Shall we create the viz.

**Calendar first.** Below is how it looks. There are writings showing the days tho 😅 because my dashboard is black, i used a white font color. Anyways, let's do this 💪🏾

![Calendar View](/blog/workout-tracker-2.png)

1. Let's create a date part with months, right-click on the date in the dimension pane, select create on the pop-up menu and click on custom date.

2. Under detail, the select month the dart part, click ok. Hurray, you did it!!!!!!!

3. Drag the new date field in the dimension pane to columns

4. Drag date to columns, right-click and choose more to select weekday

5. Drag date again to row, right-click and choose more again to select week number

6. Drag date to text on the marks card, right-click and select day.

7. Now let's change the marks to circles.

8. To colour, I created a new field using the calculated field in tableau. Drag this new field to colour on the marks card. Click on the colour, and edit colours as needed.

![Calculated Field - Completed](/blog/workout-tracker-3.png)

The calendar is done. Showing our completed tasks, missed and yet to be completed.

## Target Tracking

Each day in August has a certain target to be completed. Shall we create the target then?

![Targets for Day](/blog/workout-tracker-4.png)

Icons used are downloaded from flaticons. Place these downloaded icons in the tableau repository folder on your computer. Now let's build.

1. create a new calculated field called today, to selected the current date as [Date] = today()

2. drag this new field to the filter box

3. drag measure names to filter box; we want to show multiple variables(selected the needed measures)

4. drag measure values to text on the marks card

5. select shapes on the marks card, and drag measure names to shapes

![Calculated Field - Today](/blog/workout-tracker-5.png)

Now let's customize the shapes. Click on shapes on the marks card, locate the icons downloaded and assigned them accordingly.

![Edit Shapes](/blog/workout-tracker-6.png)

Almost there 🤗 For the arrow doughnut chart, there is a great tutorial on how to achieve that by Toan Hoang. Do check it out.

## The Timeline Chart

The last viz chart is the timeline chart using the area chart.

![Timeline Chart](/blog/workout-tracker-7.png)

1. Drag date to the columns pane, right-click and select the exact date option

2. drag measure names to filter, select the needed measures, click on apply then ok

3. drag measure values to the rows pane

4. drag measure names to colour, edit colours as needed

## Adding Dynamic Elements

Now assemble the dashboard. Before we do that, I almost forgot about the time and the greetings 😅

1. create a new calculated field to display the time now. In the calculated field box, type NOW(), click apply then ok.

2. create exact date from the new field and change the date format to custom, typing in this h: mm AMPM after right-clicking, selecting default property, date format and custom.

3. drag the new calculated field to text on the marks card

4. let's create the last calculated field to help with the greetings, just as the above new field in the custom box for formating type in HH to get just the hours of time.

5. now for the greetings, the formula below

6. drag the greetings field to the text card.

7. click on the text card, and type in It's before the measure in the text box.

![Greeting Formula](/blog/workout-tracker-8.png)

**Note:** the other icons on the dashboard are either places as images, resizing to fit and others as buttons of a container layout that has either texts, colour legends or the to-do worksheets.

The layout of the dashboard was designed in figma and bought into tableau as a tiled image, fit to size as usual.

That's all for this simple yet fun dashboard.

Thank you for reading.

With love always ❤️😘`,
    category: "Tableau",
    readTime: "8 min read",
    date: "August 4, 2020",
    featured: true,
  },
  {
    id: 3,
    slug: "data-cleaning-to-machine-learning",
    title: "Data Cleaning to Machine Learning",
    excerpt: "A journey to re-learn Python and polish up my skills, from data cleaning to classification with the Titanic dataset.",
    content: `As part of my return journey to python project; this is a journey to re-learn python and polish up my skills, starting from the basics and climbing up to the advance; Machine Learning and Deep Learning, I look at data cleaning in python and classification under the supervised learning algorithms.

**In this blog post:**
- What is data cleaning?
- Understanding your data
- Data cleaning
- Understand the data more after cleaning
- Feature Engineering
- Data Encoding
- The Model
- The Prediction
- The Evaluation
- Tuning the Model
- Visualization of Accuracy
- Final Evaluation

## What is data cleaning?

This is the process of removing unwanted features, fixing or removing duplicates, incorrect entries, incomplete or missing values, incorrectly formatted data in the data to improve the quality of the data.

The term garbage in garbage out is very crucial in the data environment. That is when you use a poor dataset for analysis, you get very poor and incorrect insights. Similarly, poor dataset being fed into a machine learning or deep learning algorithm or model leads to poor performance.

## Understanding the data

Understanding your data leads you on the right path to cleaning the data and making the necessary wrangling to achieve your set goal with the data.

In this post, using python, I will show how to understand the features of a data in order to achieve clean data for analysis or machine learning algorithm.

The ultimate goal of the dataset being used here is to predict if an individual would survive or not on the Titanic shipwreck. This is a classification problem under supervised learning algorithms in data science. The titanic dataset can be found on Kaggle. The datasets of this task consist of a train and test datasets. The train dataset will be used to train the model, whereas the test set will be used for the prediction of the survived variable. Also, it consists of the survived dataset which serves as the actual survival of the test dataset, hence using it for evaluation of the model.

**Shall we begin?**

Let's first import some packages.

\`\`\`python
import numpy as np 
import pandas as pd 
import seaborn as sns 
import matplotlib.pyplot as plt
from scipy import stats
from sklearn.neighbors import KNeighborsClassifier
\`\`\`

\`\`\`python
#load dataset
train = pd.read_csv('train.csv')
test = pd.read_csv('test.csv')

#save passengerid to be used for later
passengerid = test['PassengerId']
train.head()
\`\`\`

From the above codes, loading in the train dataset and taking a look at this. The Passenger Id is saved to be used after the prediction for submission.

\`\`\`python
#dropping the passenger ids in both dataset, this does not have any correlation to whether an 
#individual will survive or not 
train, test = train.drop('PassengerId', axis = 1) , test.drop('PassengerId', axis = 1)
\`\`\`

The main aim of this is to predict the survival on the titanic. therefore survival is the target variable. First, performing summary statistics.

\`\`\`python
#Let's take a look at the dataset 
train["Survived"].describe()
\`\`\`

From the summary statistics performed, it can be seen that the mean of the survived is 0.383838 with a minimum of zero and maximum of 1. It is also known that females and children have a higher chance of surviving so as the higher class. Finding a correlation of the other variables and the target variable to know the effect they have on the target variable.

**How do the features in the dataset relates or behaves with the target variable?**

\`\`\`python
#finding the relationship between the survived and other variables 
correlation = train.corr()
correlation.sort_values(["Survived"])
correlation.Survived
\`\`\`

From the above, it can be seen that Pclass has higher correlation to survived compared to the rest. Therefore, the higher the class(1), the higher the chance of surviving(1). That is, if the class has a high number(3), the lower the chances of surviving.

## Data Cleaning

In this part, the data will be cleaned or wrangled to suit what we intend to do with it. Mainly checking for missing values and imputing them when necessary or relevant.

\`\`\`python
#concating the trainset and the testset for cleaning 
data = pd.concat((train, test))

#identifying missing values 
print(data.isnull().values.any())

#check for missing values
print(data.isnull().sum())
\`\`\`

The missing values are found in the Survived, Age, Cabin and Embark Features.

\`\`\`python
len(data)
\`\`\`

Out of 1309 entries, there are 1014 missing cabin values. Imputing this variable and using it in the prediction might not be advisable. Hence it will be ignored and dropped.

\`\`\`python
#dropping the cabin variable from the dataset since it is not so relevant in the prediction
dataset = data.drop('Cabin', axis = 1)
\`\`\`

For the age, the median would be used to impute the missing values.

\`\`\`python
median = dataset["Age"].median()
dataset["Age"].fillna(median, inplace = True)
\`\`\`

Same would be done for the fare variable.

\`\`\`python
median = dataset["Fare"].median()
dataset["Fare"].fillna(median, inplace = True)
\`\`\`

For the embarked variable, the mode would be used to fill out the missing values.

\`\`\`python
print(dataset["Embarked"].mode())
dataset["Embarked"].fillna("S", inplace = True)
\`\`\`

\`\`\`python
#checking if all the missing values have been imputed 
print(len(test))
dataset.isnull().values.any()
\`\`\`

From the above code, we find out that the missing values are in the survived feature, which is the target variable needed to be predicted for the test dataset. The number of the missing values make up the length of the test dataset (the number of the data entries in the test dataset).

## Understanding the dataset more

\`\`\`python
#finding out which sex has the higher chances of suviving 
print(dataset.groupby(["Sex"]).mean())

#finding which class has the higher chances of surviving 
print(dataset.groupby(["Pclass"]).mean())
\`\`\`

The upper class (1st) has higher chances of surviving. It is in line with the above correlation found. Whereby, when the class is lower that is 3, the chances of surviving is less.

From the above, females have a higher chance of surviving as compared to males with a survival rate of 0.74.

## Feature Engineering

Feature engineering is extracting features from data which helps in the performance of a machine learning algorithm. The right features can help improve the accuracy of the model hence it is a very crucial step.

\`\`\`python
#creating a new variable to tell if the passenger was traveling alone or with either a parent or a sibling 
dataset["Alone"]=np.where((dataset["SibSp"]+dataset["Parch"]) >0, 0, 1)

#finding out the chances of surviving if the passenger traveled alone 
dataset.groupby(["Alone"]).mean()
\`\`\`

There is a 50.6% chance that the passenger will survival if traveling alone.

\`\`\`python
#creating a new feature using the titles of the individual 
dataset["Title"] = dataset.Name.str.extract(' ([A-Za-z]+).', expand=False)
dataset.head()
\`\`\`

\`\`\`python
#making some adjustments to the titles 
for i in dataset:
    dataset["Title"] = dataset["Title"].replace("Mlle", "Miss")
    dataset["Title"] = dataset["Title"].replace("Ms", "Miss")
    dataset["Title"] = dataset["Title"].replace("Mme", "Mrs")
    dataset["Title"] = dataset["Title"].replace(["Lady", "Sir", "Countess", "Jonkheer"], "Royalty")
    dataset["Title"] = dataset["Title"].replace(["Capt", "Col", "Don", "Dona", "Major", 
                                                 "Dr","Rev", "Master"], "High rank")

#finding out the chances of surviving based on the title of the individual 
dataset[["Title","Survived"]].groupby(["Title"]).mean()
\`\`\`

Royalties have higher chances of surviving as compared to the other titles. Therefore, titles and alone features will be very relevant in this ML model since they have a correlation with the survived target variable.

\`\`\`python
#dropping the name column and the ticket column which is irrevelant to our prediction
dataset = dataset.drop(["Name", "Ticket"], axis = 1)
print(dataset.head())
dataset.info()
\`\`\`

## Data Encoding

This is converting categorical data into numerical or quantitative data which is easily understood by the model.

\`\`\`python
#age is a categorical data not numerical in this case. therefore, grouping the into children, youngster ... and 
#converting them into proper numerical values 
dataset["Age"].astype(int)
dataset.loc[ dataset['Age'] <= 11, 'Age'] = 0                             #Children
dataset.loc[(dataset['Age'] > 11) & (dataset['Age'] <= 18), 'Age'] = 1    #Teens
dataset.loc[(dataset['Age'] > 18) & (dataset['Age'] <= 22), 'Age'] = 2    #Youngsters
dataset.loc[(dataset['Age'] > 22) & (dataset['Age'] <= 27), 'Age'] = 3    #Young Adults
dataset.loc[(dataset['Age'] > 27) & (dataset['Age'] <= 33), 'Age'] = 4    #Adults
dataset.loc[(dataset['Age'] > 33) & (dataset['Age'] <= 40), 'Age'] = 5    #Middle Age
dataset.loc[(dataset['Age'] > 40) & (dataset['Age'] <= 66), 'Age'] = 6    #Senior
dataset.loc[ dataset['Age'] > 66, 'Age'] = 7                              #Retired
\`\`\`

\`\`\`python
#for fare
dataset.loc[ dataset['Fare'] <= 7.91, 'Fare'] = 0                                 #Extremely low
dataset.loc[(dataset['Fare'] > 7.91) & (dataset['Fare'] <= 14.454), 'Fare'] = 1   #very low
dataset.loc[(dataset['Fare'] > 14.454) & (dataset['Fare'] <= 31), 'Fare']   = 2   #low
dataset.loc[(dataset['Fare'] > 31) & (dataset['Fare'] <= 99), 'Fare']   = 3       #high
dataset.loc[(dataset['Fare'] > 99) & (dataset['Fare'] <= 250), 'Fare']   = 4      #very high
dataset.loc[ dataset['Fare'] > 250, 'Fare'] = 5                                   #extremely high

dataset = dataset.drop("Survived", axis = 1)
dataset.info()
\`\`\`

Changing all other categorical data into numerical data using the label encoder module from scikit-learn.

\`\`\`python
from sklearn.preprocessing import LabelEncoder
cols = ("Embarked","Sex", "Title")
for i in cols:
    le = LabelEncoder()
    dataset[i] = le.fit_transform(list(dataset[i]))
\`\`\`

For the above test, One Hot Encoding could have be used. Below is the code for that.

\`\`\`python
dataset=pd.get_dummies(dataset, columns=["Embarked","Sex", "Title"])
\`\`\`

## The Model

Building the model for training using the K-nearest neighbors (knn). First, let's set up our train and test datasets.

\`\`\`python
y_train = train["Survived"]
trainset_len = len(train)
x_train = dataset[:trainset_len]
x_test = dataset[trainset_len:]
\`\`\`

The model; building the knn model with the nearest neighbors as 1. The model behaves by looking at the nearest one old data point to predict what the new data point is.

\`\`\`python
KNN = KNeighborsClassifier(n_neighbors=1, metric = 'euclidean')
KNN.fit(x_train, y_train)
\`\`\`

## The Prediction

\`\`\`python
prediction = KNN.predict(x_test)
\`\`\`

To save the prediction as csv with the passenger ids:

\`\`\`python
Survived = pd.DataFrame(prediction)
Survived["PassengerId"] = passengerid
Survived = Survived.rename(columns={0: "Survived"})
Survived = Survived[["PassengerId","Survived"]]
Survived.to_csv("Submission.csv", index=False)
\`\`\`

## The Evaluation

\`\`\`python
#training Accuracy
train_accuracy = KNN.score(x_train, y_train)
train_accuracy
\`\`\`

The train accuracy is 90%, therefore was able to learn 90% of the train dataset.

For the test data, let's load the actuals for evaluation.

\`\`\`python
#load in the actuals 
y_test = pd.read_csv('gender_submission.csv', usecols = ['Survived'])
y_test = y_test.to_numpy()
y_test.shape

test_accuracy = KNN.score(x_test, y_test)
print(test_accuracy)

from sklearn.metrics import accuracy_score
accuracy_score(y_test, prediction)
\`\`\`

The test accuracy is 83%, therefore the model was able to accurately predict 83% of the dataset.

## Tuning the model

\`\`\`python
from sklearn.model_selection import GridSearchCV

params = {"n_neighbors": np.arange(1,9),
"metric": ["euclidean"]}

grid = GridSearchCV(estimator=KNN,
param_grid=params)

grid.fit(x_train, y_train)
print(grid.best_score_)
print(grid.best_estimator_.n_neighbors)
\`\`\`

From the above, it is seen that a number of 5 neighbors gives a better score in accuracy.

## Visualization of Accuracy

Visualizing the above for clarity.

\`\`\`python
mean_score = grid.cv_results_['mean_test_score']
k = np.arange(1,9)

plt.plot(k, mean_score)
plt.xlabel('Number of Neighbors')
plt.ylabel('Testing Accuracy')
\`\`\`

## Final Evaluation

\`\`\`python
KNN = KNeighborsClassifier(n_neighbors=5)
KNN.fit(x_train, y_train)
y_pred = KNN.predict(x_test)

#training Accuracy
train_accuracy = KNN.score(x_train, y_train)
print('train accuracy is', train_accuracy)

test_accuracy = KNN.score(x_test, y_test)
print('test accuracy is', test_accuracy)

from sklearn.metrics import accuracy_score
accuracy_score(y_test, y_pred)
\`\`\`

Using a higher number of neighbors, it can be seen that the accuracy on the test dataset increases slightly from 0.83 to 0.87.

Data cleaning is a very crucial step in both data analysis and data science and I hope this blog shared some insights on that. Do not forget to run the codes.🤗

Codes can be found on my GitHub.

Thank you for reading. Happy cleaning ❤️`,
    category: "Python",
    readTime: "15 min read",
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
    image: "/blog/data-getting-started.png",
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
    slug: "making-music-cool-get-lyrics-from-spotify",
    title: "Making Music Cool; Get Lyrics From Spotify Music",
    excerpt: "Using the Spotify API and Genius API to retrieve lyrics of the song currently playing.",
    content: `![Headphones](/blog/spotify-lyrics-headphones.png)
*(image from Unsplash)*

I love music. Growing up I was introduced to different genres at a pretty young age. My dad's love for jazz and my brother's hip-hop nature. I appreciate and love all genres of music. Most importantly, I love the words that compose a song. Words are big for me in music. With my love for H.E.R, J Cole and Kendrick Lamar based on their choices of words in their art.

Apple Music has a pretty cool feature of getting the lyrics of the song while playing. In my bid to wanting to enjoy something like that from Spotify, I found myself looking at APIs that can help me achieve this task. An easy task when using the Spotify API to retrieve the song playing and the genius API to get the lyrics of the song (Thanks to my cool Data Scientist Friend who put me to the task of grabbing lyrics of some songs from genius for a pretty cool project- watch out for his project, he is AWESOME). You can find his profile here.

I know at this point, you are tired of reading. Let's get to the cool stuff.

## Setting Up Spotify API

In order to get started, we need to sign up to use the Spotify API. you can do so here and create an app. After doing so, let's get the client id and secret code. Also, add a direct URL 'http://localhost:8888/callback/' to your created app.

**Spotify API credentials:**

\`\`\`python
#getting my spotify credentials 
USERNAME = 'Your username'
SPOTIPY_CLIENT_ID = 'client id'
SPOTIPY_CLIENT_SECRET = 'client secret code'
SPOTIPY_REDIRECT_URI = 'http://localhost:8888/callback/'
\`\`\`

Do not forget to install the Spotipy by using the 'pip install command':

\`\`\`bash
pip install spotipy
\`\`\`

## Retrieving Current Song

Let's retrieve the song name and artist name of the music we are listening to on Spotify.

\`\`\`python
import spotipy
import spotipy.util as util

from config import USERNAME, SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET, SPOTIPY_REDIRECT_URI, access_token
import lyricsgenius 

#this is to tell spotify what you are doing with the script.
#'https://developer.spotify.com/documentation/general/guides/scopes/'
scope = 'user-read-currently-playing'

# providing credentials 
token = util.prompt_for_user_token(
    USERNAME, scope, client_id=SPOTIPY_CLIENT_ID, client_secret=SPOTIPY_CLIENT_SECRET, redirect_uri=SPOTIPY_REDIRECT_URI)


if token:
    # intialize with the token to gain access 
    sp = spotipy.Spotify(auth=token)
    # retrive name of song playing on spotify now 
    current_song = sp.currently_playing()
    # Extract artist
    artist = current_song['item']['artists'][0]['name']
    # Extract song name 
    song_name = current_song['item']['name']

    #print out the extracted items 
    print('\\nSong: {}\\nArtist: {}'.format(song_name, artist))
\`\`\`

## Setting Up Genius API

We are then going to feed this information into the Genius API but first let's setup the environment.

With this available API, the task of getting song lyrics by an artist has rather been simplified. To get the ball rolling, first you have to sign up for the Genius API on here. Once that is done, install the model by running the line below in your terminal. This is the python client for the Genius API.

\`\`\`bash
pip install lyricsgenius
\`\`\`

Generate your access token after signing up. We need it for our codes to work! Do not forget that. Now, save your access token.

\`\`\`python
access_token = 'Your Copied Token Goes Here'
\`\`\`

## Getting the Lyrics

Let's get the lyrics now!!!!! shall we!

\`\`\`python
# using the genius api to get the lyrics 
#getting the lyrics of songs by the artist 
genius = lyricsgenius.Genius(access_token)
song = genius.search_song(song_name, artist)
songlyrics = song.lyrics
print(songlyrics)
\`\`\`

## Full Code

Let's see the full codes, save and run in our terminal.

\`\`\`python
import spotipy
import spotipy.util as util

from config import USERNAME, SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET, SPOTIPY_REDIRECT_URI, access_token
import lyricsgenius 

scope = 'user-read-currently-playing'

# To connect succesfully you need to provide your own Spotify Credentials
# You can do this signing up in https://developer.spotify.com/ and creating a new app.
token = util.prompt_for_user_token(
    USERNAME, scope, client_id=SPOTIPY_CLIENT_ID, client_secret=SPOTIPY_CLIENT_SECRET, redirect_uri=SPOTIPY_REDIRECT_URI)

if token:
    # Create a Spotify() instance with our token
    sp = spotipy.Spotify(auth=token)
    # method currently playing return an actual song on Spotify
    current_song = sp.currently_playing()
    # Extract artist from json response
    artist = current_song['item']['artists'][0]['name']
    # Extract song name from json response
    song_name = current_song['item']['name']

    print('\\nSong: {}\\nArtist: {}'.format(song_name, artist))

    # using the genius api to get the lyrics 
    #getting the lyrics of songs by the artist 
    genius = lyricsgenius.Genius(access_token)
    song = genius.search_song(song_name, artist)
    songlyrics = song.lyrics
    print(songlyrics)

else:
    print("token can not be found for", username)
\`\`\`

That's it guys. Thank you for checking this out. Enjoy music, it is the food for the soul❤️.`,
    category: "Python",
    readTime: "5 min read",
    date: "December 20, 2023",
    featured: false,
    image: "/blog/spotify-lyrics-headphones.png",
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
