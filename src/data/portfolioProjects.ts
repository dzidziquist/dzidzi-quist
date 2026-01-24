import { BarChart2, Code, Map, Music, Tv, ShoppingCart, Vote, Users, LucideIcon } from "lucide-react";

// Import portfolio images
import genderInequalityImg from "@/assets/portfolio/gender-inequality-parliament.png";
import electionsImg from "@/assets/portfolio/trend-elections-ghana.png";
import musicPlaysImg from "@/assets/portfolio/music-plays-2023.png";
import accraMapImg from "@/assets/portfolio/accra-map-layers.png";
import rugratsImg from "@/assets/portfolio/rugrats-viz.png";
import boondocksImg from "@/assets/portfolio/boondocks-viz.png";
import salesOverviewImg from "@/assets/portfolio/sales-overview.png";

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  image: string;
  externalLink: string;
  icon: LucideIcon;
  tools: string[];
  year: string;
  collaborators?: string;
  pdfUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "gender-inequality-parliament",
    title: "Gender Inequality in Ghana's Parliament",
    description: "Interactive infographic analyzing gender representation across parliamentary sessions, regional distribution, and party representation from 1960-2020.",
    fullDescription: `This visualization explores the journey of female representation in Ghana's Parliament since independence. The female voice has yet to be fully heard in Ghana's parliament since independence. In 1960, Mabel Dove Danquah, a journalist, became the first female elected to parliament when she won the Ga Rural seat.

The infographic analyzes:
- **Historical Timeline**: Tracking the number of women MPs from the 1st Parliament to the 7th Parliament (2016), showing a gradual increase from 7 women (out of 129 members) in 1979 to 36 women (out of 275 members) in 2016.
- **Regional Representation**: Breaking down female representatives across all 16 regions of Ghana, with Greater Accra leading in female representation.
- **Party Representation**: Examining how the NDC and NPP, Ghana's dominant parties, compare in terms of female candidates elected.
- **The Need for Women in Power**: Highlighting the importance of gender equality in political decision-making.

A collaboration between Lowar Akrofi and Maureen Dzifa Quist.`,
    category: "Tableau",
    image: genderInequalityImg,
    externalLink: "https://public.tableau.com/app/profile/dzidzi.quist",
    icon: Users,
    tools: ["Tableau", "Data Research", "Infographic Design"],
    year: "2020",
    collaborators: "Lowar Akrofi"
  },
  {
    id: 2,
    slug: "trend-of-elections-ghana",
    title: "Trend of Elections in Ghana",
    description: "Comprehensive visualization of Ghana's electoral history, examining voting patterns, regional preferences, and macroeconomic factors affecting election results.",
    fullDescription: `Since the first presidential election in 1992 following the country's transition to multi-party democracy, Ghana has held seven presidential elections with the two major parties—NDC and NPP—alternating power.

This visualization explores:
- **Vote Trends**: Tracking the total votes received by NDC and NPP from 1992 to 2016, showing how electoral support has shifted over time.
- **Regional Analysis**: An interactive map showing which party won in each region and year, revealing regional voting patterns and strongholds.
- **Macroeconomic Factors**: Examining whether GDP per capita, inflation rates, and unemployment rates correlate with election outcomes.
- **Predictive Analysis**: Using historical data to explore whether economic factors can predict future election results.

The data reveals interesting patterns about how Ghanaians vote and what factors influence their decisions at the polls.`,
    category: "Tableau",
    image: electionsImg,
    externalLink: "https://public.tableau.com/app/profile/dzidzi.quist",
    icon: Vote,
    tools: ["Tableau", "Data Analysis", "Geographic Mapping"],
    year: "2020"
  },
  {
    id: 3,
    slug: "music-plays-2023",
    title: "Know Me By My 2023 Music Plays",
    description: "Personal data visualization of Apple Music listening habits - 27,215 minutes of music analyzed by top songs, monthly patterns, and listening trends.",
    fullDescription: `They often say music is food for the soul, and I find great pleasure in immersing myself in its beautiful melodies. This year, I listened to about 27,215 minutes of music, savoring various genres.

This personal data visualization explores:
- **Top 15 Songs Played**: Featuring "All Over" by Magixx as the #1 most played song with 157 plays (433.7 minutes), followed by "Xtra Cool" by Young Jonn and "Sinner" by Adekunle Gold & Lucky Daye.
- **Top 100 Plays by Month**: A radial visualization showing the distribution of top songs across all 12 months, with peaks during February, March, April, May, and July corresponding to road trips and international travels.
- **Monthly Listening Patterns**: A bar chart showing total minutes listened each month, with March (3,294 minutes) being the highest.

This visualization tells the story of my year through the music I listened to—revealing travel periods, mood patterns, and musical preferences.`,
    category: "Data Viz",
    image: musicPlaysImg,
    externalLink: "https://public.tableau.com/app/profile/dzidzi.quist",
    icon: Music,
    tools: ["Tableau", "Apple Music Data", "Personal Analytics"],
    year: "2023"
  },
  {
    id: 4,
    slug: "places-accra-map",
    title: "Places I Have Been To in Accra",
    description: "Interactive map using parameter actions and map layers in Tableau, showcasing locations visited across Greater Accra with toggle-able categories.",
    fullDescription: `This project demonstrates the use of map layers and parameters in Tableau. Parameter actions give end-users of a dashboard more control in terms of interactivity, while map layers allow adding multiple layers of geographic data to a map.

Key features include:
- **Interactive Layer Controls**: Toggle on/off different location categories including Desserts, Malls, Recreational Centers, Restaurants & Bars, Beaches, Salons, Cafés, Supermarkets, and Roads.
- **Geographic Data Sources**: Using shapefiles from data.gov.gh for Greater Accra roads and Google Maps coordinates for personal location history.
- **Technical Implementation**: Combining QGIS for location selection by radius with Tableau for visualization.

This visualization serves as practice for mastering Tableau's advanced mapping capabilities while creating a personal geography of experiences in Accra.`,
    category: "Tableau",
    image: accraMapImg,
    externalLink: "https://public.tableau.com/app/profile/dzidzi.quist",
    icon: Map,
    tools: ["Tableau", "QGIS", "OpenStreetMap", "Google Maps"],
    year: "2022"
  },
  {
    id: 5,
    slug: "rugrats-analysis",
    title: "Rugrats: Animated Series Analysis",
    description: "Creative data visualization exploring the Rugrats animated series (1991-2001) - season ratings, character timelines, and episode premier history.",
    fullDescription: `Rugrats reveals the world from a baby's point of view. Everything looks bigger, more mysterious and uncontrollable. Angelica, the oldest, likes to terrorize her cousin, Tommy, and his friends, and is famous for screaming, "You stupid babies!" The adults in the series are often clueless.

This visualization explores:
- **Season Ratings**: Average ratings for all 9 seasons, with Season 2 achieving the highest average rating of 7.532 and Season 1 at 7.160.
- **Character Profiles**: Introducing the main characters including Tommy Pickles (main protagonist), Chuckie Finster (Tommy's best friend), Angelica Pickles (main antagonist), Reptar (fictional dinosaur), and Spike (family pet).
- **Timeline**: Tracking when each season premiered from 1991 to 2002, showing the show's evolution over more than a decade.
- **Number of Votes**: Visualizing audience engagement across all 9 seasons.

Data sourced from Wikipedia, IMDb, Fandom, and Pinterest with sound from Redringtones.`,
    category: "Data Viz",
    image: rugratsImg,
    externalLink: "https://public.tableau.com/app/profile/dzidzi.quist",
    icon: Tv,
    tools: ["Tableau", "IMDb Data", "Creative Design"],
    year: "2022"
  },
  {
    id: 6,
    slug: "boondocks-analysis",
    title: "The Boondocks: Series Deep Dive",
    description: "Visual analysis of The Boondocks animated series featuring character breakdowns, episode ratings per season, and series timeline from 2005-2014.",
    fullDescription: `Cantankerous Robert "Granddad" Freeman is the legal guardian of his grandsons, 10-year-old revolutionary Huey and 8-year-old Riley, a product of contemporary rap culture. After moving the family from Chicago's South Side to the safety of suburban Woodcrest—aka the boondocks—Granddad hopes to ignore the grandkids and enjoy his golden years in peace.

This visualization explores:
- **Series Overview**: 4 seasons, 55 episodes, first aired November 6, 2005, last aired June 23, 2014.
- **Character Classification**: Main characters (Huey, Robert, Riley Freeman), secondary characters (Thomas Lancaster DuBois, Sarah DuBois, Jazmine DuBois), other major characters (Uncle Ruckus, Ed Wuncler Jr., and more), and recurring characters.
- **Rating per Episode**: Bar chart visualizations showing episode ratings across all 4 seasons, featuring character illustrations of Riley and Robert.
- **Votes per Season**: Circular visualization showing audience engagement trends.

Data sourced from IMDb and Wikipedia, with icons from The Noun Project and audio from YouTube.`,
    category: "Data Viz",
    image: boondocksImg,
    externalLink: "https://public.tableau.com/app/profile/dzidzi.quist",
    icon: Tv,
    tools: ["Tableau", "IMDb Data", "Creative Design", "Audio Integration"],
    year: "2022"
  },
  {
    id: 7,
    slug: "sales-overview-dashboard",
    title: "Sales Overview Dashboard",
    description: "Executive sales dashboard with KPI tracking, regional breakdowns, sales trends, and category analysis for business intelligence reporting.",
    fullDescription: `A comprehensive executive dashboard designed for tracking sales performance across multiple dimensions. This dashboard demonstrates proficiency in creating business intelligence solutions that enable data-driven decision making.

Key features include:
- **KPI Cards**: Total Sales ($13,794), Total Profit ($1,030), Total Quantity (256), and Profit Percentage (7.47%) for the selected region.
- **Regional Filtering**: Filter views by different regions (Central, East, West, South) with a date selector for temporal analysis.
- **Breakdown by State**: Ranked list showing sales performance by state, from Michigan ($2,903) to Oklahoma ($11).
- **Sales Trend Analysis**: Time series visualization showing sales patterns from 2015-2019 with notable peaks and valleys.
- **Top Sellers**: Identifying best-performing products including Phones ($2,832), Chairs ($2,424), and Appliances ($2,382).
- **Category Breakdown**: Sparklines showing sales trends for Furniture, Office Supplies, and Technology segments.
- **Export Options**: PDF and image export functionality for reporting.`,
    category: "Tableau",
    image: salesOverviewImg,
    externalLink: "https://public.tableau.com/app/profile/dzidzi.quist",
    icon: ShoppingCart,
    tools: ["Tableau", "Business Intelligence", "KPI Design"],
    year: "2023"
  },
  {
    id: 8,
    slug: "consumer-purchase-journey",
    title: "Consumer Purchase Journey Analysis",
    description: "Market research project analyzing consumer buying behavior for smart home products using qualitative research methods and customer insights frameworks.",
    fullDescription: `This market research project analyzes the consumer buying journey to understand decision-making processes for smart home products, specifically focusing on robot vacuum cleaners.

**Research Objectives:**
- Analyze the consumer buying journey to better understand their decision-making process
- Assess customer satisfaction with the product and likelihood of repeat purchases
- Determine whether customers would recommend the products to others
- Explore the relationship model between the company and the customer
- Identify complementary quantitative research opportunities

**Case Study: Meet Brittany**
A business owner and mother of two who purchased a robot vacuum for convenience. Her journey began when she moved to a new home and was looking for cleaning supplies.

**Key Insights:**
- Purchase decisions influenced by Amazon reviews and Prime membership
- Smartphone connectivity is a valued feature over traditional vacuums
- Visual content (pictures & videos) played a significant role in purchase decisions
- Price comparison with traditional vacuums justified the investment

**Methodology:** Qualitative interview and consumer behavior analysis framework.`,
    category: "Python",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    externalLink: "#",
    icon: Code,
    tools: ["Python", "Consumer Research", "Qualitative Analysis"],
    year: "2024",
    pdfUrl: "/documents/consumer-purchase-journey.pdf"
  },
  {
    id: 9,
    slug: "customer-commitment-study",
    title: "Customer Commitment Study",
    description: "Five-factor customer commitment analysis for Crew's Cup using Python - examining economic, forced, habitual, normative, and affective commitment drivers.",
    fullDescription: `A comprehensive customer commitment analysis for Crew's Cup fitness center, examining the optimal investment strategy to increase customer retention and reduce churn.

**Background:**
Crew's Cup underwent ownership changes, leading to customer churn rates of 70% annually. Through strategic interventions including the return of popular instructors and positive media coverage, churn was reduced to 60%. This analysis examines how to further improve retention.

**Five-Factor Commitment Model:**
1. **Economic Commitment**: Loyalty driven by benefits gained from being a customer
2. **Forced Commitment**: When customers feel compelled to stay due to external pressures
3. **Habitual Commitment**: Routine-based loyalty from consistent usage patterns
4. **Normative Commitment**: Moral or values-based connection to the brand
5. **Affective Commitment**: Emotional attachment and genuine love for the brand

**Investment Options Analyzed:**
- Monk's Strategy: Addressing normative commitment through brand values
- Proposed Subscription: Economic commitment through stable pricing
- Instructor's New Product: Reducing forced commitment through variety

**Recommendation:** Implement the Monk's Strategy focusing on normative commitment, as it encourages loyalty based on values rather than just personal benefit, creating more sustainable customer relationships.

**Methodology:** Survey of 1,500 respondents with cluster analysis and commitment factor modeling.`,
    category: "Python",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    externalLink: "#",
    icon: Code,
    tools: ["Python", "Survey Analysis", "Cluster Analysis", "Customer Analytics"],
    year: "2024"
  }
];

export const categories = ["All", "Tableau", "Python", "Data Viz"];

export const categoryIcons: Record<string, typeof BarChart2> = {
  Tableau: BarChart2,
  Python: Code,
  "Data Viz": BarChart2
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};
