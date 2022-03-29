// Import Components
import React from 'react';
import {Header, Container, Image, 
            Segment, Grid, Divider} from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown'

// Import JS
import '../Styles/DataBlog.css';
import '../Styles/Utils.css';
import 'semantic-ui-css/semantic.min.css';

// Import Images
import blogImage from '../Assets/DataBlog/blog_image.svg';
import wave from '../Assets/DataBlog/team_wave.svg';
import datablog_intro from '../Assets/DataBlog/intro.js'

// Temporarily added articles (in datewise order)
// Will eventually replace with articles dynamically updated from Medium website
const Articles = [
    {
        'url': 'https://ucladatares.medium.com/exploring-factors-that-make-countries-vulnerable-to-covid-19-risk-fe535fc5ba34',
        'image': 'https://miro.medium.com/max/1400/0*jWmb6XH65-kBvPKd',
        'title': 'Exploring Factors that Make Countries Vulnerable to COVID-19 Risk',
        'meta': 'March 19, 2022',
        'authors': 'Samantha Chung, Akshat Srivastav, Erica Zhou, Jim Liu, Megha Velakacharla, Shubh Kathuria'
    },
    {
        'url': 'https://ucladatares.medium.com/what-does-it-take-to-make-it-into-the-nba-hall-of-fame-6b59288caf3e',
        'image': 'https://miro.medium.com/max/1400/0*UxFiHAea8S-w2hrB',
        'title': 'What Does it Take to Make it Into the NBA Hall of Fame?',
        'meta': 'March 20, 2022',
        'authors': 'Kunal Patil (Project Lead), Derek Nakagawa, Reilly Chin'
    }, 
    {
        'url': 'https://ucladatares.medium.com/the-secret-to-beating-bobby-flay-aae2d90fdd52',
        'image': 'https://miro.medium.com/max/1400/0*zvepCbAtLPNg3kdi',
        'title': 'The Secret to Beating Bobby Flay',
        'meta': 'March 21, 2022',
        'authors': 'Kayla Teng (Lead), Taylor Kim, Kevin Hamakawa, Hyerin Lee, and Nicole Ju'
    }, 
    {
        'url': 'https://ucladatares.medium.com/discover-covid-19-vaccination-patterns-in-the-united-states-9729df33f2b3',
        'image': 'https://miro.medium.com/max/1400/0*7omVKbwSwynoEg-I.jpg',
        'title': 'Discover COVID-19 Vaccination Patterns In The United States',
        'meta': 'March 22, 2022',
        'authors': 'Binze Li (Lead), Kara Chu, Christine Shen, Paige Lee, and Huiyuan Li'
    },
    {
        'url': 'https://ucladatares.medium.com/will-you-get-a-second-date-a-predictive-model-of-dating-match-rates-53c955bf2c68',
        'image': 'https://miro.medium.com/max/1400/1*DBvWvxONMukhtA9CJMBfMQ.jpeg',
        'title': 'Will You Get a Second Date? — A Predictive Model of Dating Match Rates',
        'meta': 'March 23, 2022',
        'authors': 'Alan Wang (Lead), Zoeb Jamal, Justin Gong, Brandon Pan, Kowoon Jeong, and Yashas Jain'
    }, 
    {
        'url': 'https://ucladatares.medium.com/sky-high-rent-prices-in-los-angeles-c1607e017b4c',
        'image': 'https://miro.medium.com/max/1400/0*sAqHnAyRwG51f_y8',
        'title': 'Sky-High: Rent Prices in Los Angeles',
        'meta': 'March 24, 2022',
        'authors': 'Nishaanth Krishnan (Project Lead), Tracy Charles, Anika Chakrabati, Hyuma Tio, and Lily Zhou'
    }, 
    {
        'url': 'https://ucladatares.medium.com/gdp-is-outdated-we-need-a-better-alternative-d1fcf06fa998',
        'image': 'https://miro.medium.com/max/1400/0*22OfmOO2fvN7wJWb',
        'title': 'GDP is Outdated: We Need a Better Alternative',
        'meta': 'March 25, 2022',
        'authors': 'Shiyu Murashima, Austin Ma, Joyce Jeon, Audrey Tey, David Spector, Robi Chatterjee'
    }, 
    {
        'url': 'https://ucladatares.medium.com/exploring-the-covid-19-pandemics-effect-on-quality-of-life-and-democracy-on-a-global-scale-62b60a5ab61a',
        'image': 'https://miro.medium.com/max/1400/0*qpVnAous--btPgOI',
        'title': 'Exploring the COVID-19 Pandemic’s Effect on Quality of Life and Democracy on a Global Scale',
        'meta': 'March 26, 2022',
        'authors': 'Julia Craciun and Dhruv Krishan (Team Co-Leads), Ryan Barney, Lebogang Mooketsi, and Yufei Wang'
    }, 
    {
        'url': 'https://ucladatares.medium.com/whos-getting-married-in-the-u-s-today-741a940d13b9',
        'image': 'https://miro.medium.com/max/1400/1*TDPXl0tsl7l2-jcvJonetg.png',
        'title': 'Who’s Getting Married in the U.S. Today?',
        'meta': 'March 26, 2022',
        'authors': 'Wiona Tan, Eric Xia, Alyssa Liu, and Lina Molla'
    }, 
    {
        'url': 'https://ucladatares.medium.com/congressional-resignations-money-power-or-scandal-de9e323ec927',
        'image': 'https://miro.medium.com/max/1400/1*8gjt8Giw_NymyNXOExoF3g.png',
        'title': 'Congressional Resignations: Money, Power, or Scandal?',
        'meta': 'March 28, 2022',
        'authors': 'Tian Ouyang, Disha Beeraladinni, Sean Lim, Melody Chen, Nalin Chopra'
    },
    {
        'url': 'https://ucladatares.medium.com/the-success-of-movies-at-the-oscars-box-office-and-reviews-e33e5059ea40',
        'image': 'https://miro.medium.com/max/1400/0*hzc8q8-AwMQHy4N7',
        'title': 'The Success of Movies at the Oscars, Box Office, and Reviews',
        'meta': 'March 28, 2022',
        'authors': 'Anvesha Dutta (Project Lead), Amelie Ionescu, Casey Truong, Darren Sohn, Prateik Sinha'
    },
    {
        'url': 'https://medium.com/geekculture/covid-19-vaccinations-and-interesting-trends-87cb99f4b551',
        'image': 'https://miro.medium.com/max/1400/0*FUtdVuSZZKReSPuV',
        'title': 'COVID-19 Vaccinations and Interesting Trends',
        'meta': 'June 22, 2021',
        'authors': 'Samantha Chung, Annie Li, Shreesh Karjagi, and Isha Shah'
    },
    {
        'url': 'https://ucladatares.medium.com/when-dating-met-the-internet-9de9ac76dc62',
        'image': 'https://miro.medium.com/max/1224/0*39ZK6mklD_4Kg5zU',
        'title': '“When Dating Met the Internet”',
        'meta': 'June 21, 2021',
        'authors': 'Sivaji Turimella, Brandon Zhao, Robi Chatterjee, Kevin Hahn, Matthew Maemura'
    },
    {
        'url': 'https://ucladatares.medium.com/what-defines-a-championship-team-nba-playoff-predictions-b9f3ea2413bc',
        'image': 'https://miro.medium.com/max/1400/0*P8d7xKtQ0nEERnQA',
        'title': 'What Defines a Championship Team — NBA Playoff Predictions',
        'meta': 'June 20, 2021',
        'authors': 'Alan Wang, Rebecca Xu, Siddarth Chalasani'
    },
    {
        'url': 'https://ucladatares.medium.com/exploring-machine-learning-with-the-kepler-telescope-dc1dfada5431',
        'image': 'https://miro.medium.com/max/1400/0*38C8eA9wyJbfBuOl',
        'title': 'Exploring Machine Learning with the Kepler Telescope',
        'meta': 'June 19, 2021',
        'authors': 'Luke Rivers, Ashley Lu, Ben Brill, Hyerin Lee'
    },
    {
        'url': 'https://ucladatares.medium.com/we-all-scream-for-ice-cream-cf04d75739be',
        'image': 'https://miro.medium.com/max/1252/0*MFPRj813IEHdwwLb',
        'title': 'We All Scream for Ice Cream!',
        'meta': 'June 18, 2021',
        'authors': 'Nicole Lam, Kuan-Ting (Andrew) Chen, Kayla Teng, Paige Lee, Joshua Li'
    },
    {
        'url': 'https://medium.com/geekculture/whats-the-price-of-education-9d053a7d55d6',
        'image': 'https://miro.medium.com/max/1400/0*QVJR-gpyxeSxk5PJ',
        'title': 'What’s the Price of Education?',
        'meta': 'June 17, 2021',
        'authors': 'Yixin Chen, Charisse Hung, Tianlang Ouyang, Shiyu Ma, Daphne Chen'
    },
    {
        'url': 'https://medium.com/geekculture/chartmetrics-5f1d0b89ece8',
        'image': 'https://miro.medium.com/max/2000/0*lLoKNo_UXvfDUhpt',
        'title': 'ChartMetrics',
        'meta': 'June 16, 2021',
        'authors': 'Dara Tan, Jeffrey Yang, Giselle Kurniawan, Austin Pham, Natanael Wijaya'
    },
    {
        'url': 'https://ucladatares.medium.com/what-does-everyone-buy-on-amazon-3cc6955a182c',
        'image': 'https://miro.medium.com/max/2000/0*ixet91NkGFjK04p2',
        'title': 'What does Everyone Buy on Amazon?',
        'meta': 'June 15, 2021',
        'authors': 'Avishek Ghosh, Sudhanshu Agrawal, Angelina Kim, Zoey Meng, Cyrus Ho'
    },
    {
        'url': 'https://ucladatares.medium.com/representation-of-women-in-the-film-industry-e98a0456a75f',
        'image': 'https://miro.medium.com/max/2000/0*l05oFH2RrXcwjEV3',
        'title': 'Representation of Women in the Film Industry',
        'meta': 'June 14, 2021',
        'authors': 'Siew Fen Eow, Ovie Soman, Melina Diaz, Naomi Golin'
    },
    {
        'url': 'https://ucladatares.medium.com/being-woke-about-strokes-9f20be18715b',
        'image': 'https://miro.medium.com/max/1400/0*cbNRakMjjwB8prsf',
        'title': 'Being Woke About Strokes!',
        'meta': 'June 13, 2021',
        'authors': 'Anish Dulla, Akshat Srivastav, Eleanor Pae, Ojas Bardiya, Zoeb Jamal'
    },
    {
        'url': 'https://ucladatares.medium.com/transcending-quarantine-analyzing-character-traits-and-mental-health-during-covid-19-lockdowns-da8f757db86d',
        'image': 'https://miro.medium.com/max/1400/0*DQ3czTSA1Uc7dfxX',
        'title': 'Transcending Quarantine: Analyzing Character Traits and Mental Health During Covid-19 Lockdowns',
        'meta': 'April 14, 2021',
        'authors': 'Aileen Tang, Charisse Hung, Josh Li, Sivaji Turimella, Giselle Kurniawan'
    },
    {
        'url': 'https://ucladatares.medium.com/a-comprehensive-analysis-of-covid-19-vaccination-rollout-343b56355098',
        'image': 'https://miro.medium.com/max/1380/0*ntyBllDUoMXCMvNK.png',
        'title': 'A Comprehensive Analysis of COVID-19 Vaccine Rollout',
        'meta': 'April 2, 2021',
        'authors': 'Adhvaith Vijay, Deana Moghaddas, Sylvia Ma, Deepthi Gangiredla'
    },
    {
        'url': 'https://ucladatares.medium.com/everything-you-avo-wanted-to-know-about-avocados-510aa0450bb1',
        'image': 'https://miro.medium.com/max/1400/0*rf3vYHB2_wonfkBN',
        'title': 'Everything You Avo Wanted to Know About Avocados',
        'meta': 'March 29, 2021',
        'authors': 'Tara Jaigopal, Aarushi Gupta, Amy Tang, Emily Ng, Tiffany Feng'
    },
    {
        'url': 'https://ucladatares.medium.com/streaming-wars-netflix-prime-video-hulu-and-disney-c568a77a36ff',
        'image': 'https://miro.medium.com/max/1400/0*sQ7vsPMILKmfm5AM',
        'title': 'Streaming Wars: Netflix, Prime Video, Hulu, and Disney+',
        'meta': 'March 27, 2021',
        'authors': 'Zachary Chang, Eleanor Pae, Kevin Xu, Nora Liu, Annie Li'
    },
    {
        'url': 'https://ucladatares.medium.com/red-vs-blue-a-study-in-numbers-of-the-us-2020-election-f4f1e65c2943',
        'image': 'https://miro.medium.com/max/1400/0*H6S9v74QrKjStMpj',
        'title': 'Red vs. Blue: A Study in Numbers of the US 2020 Election',
        'meta': 'March 26, 2021',
        'authors': 'Ishaan Shah, Alan Wang, Yixin Chen, Ovie Soman, Nicole Park'
    },
    {
        'url': 'https://ucladatares.medium.com/understanding-healthcare-expenditure-in-the-united-states-5603bc086d2c',
        'image': 'https://miro.medium.com/max/1400/0*UZ6H3ZUguDmUfAZS',
        'title': 'Understanding Healthcare Expenditure in the United States',
        'meta': 'March 25, 2021',
        'authors': 'Naomi Golin, Avishek Ghosh, Jun Bae, Samantha Chung, Angelina Kim'
    },
    {
        'url': 'https://ucladatares.medium.com/what-makes-an-ultimate-fighter-ufc-sports-analytics-prediction-2d4cf4314b14',
        'image': 'https://miro.medium.com/max/1378/0*Yq_AQhLizc_6qFdy',
        'title': 'What makes an Ultimate Fighter? UFC sports analytics & prediction',
        'meta': 'March 25, 2021',
        'authors': 'Hana Lim , Zoeb Jamal, Dara Tan, Ben Brill, Kaushik Naresh, and Lia Bergman-Turnbull'
    },
    {
        'url': 'https://ucladatares.medium.com/unraveling-the-games-among-us-79eedb26835c',
        'image': 'https://miro.medium.com/max/1400/0*3DZI_XY-NbyM1Cxy',
        'title': 'Unraveling the Games Among Us',
        'meta': 'March 23, 2021',
        'authors': 'Rachel Li, Anish Dulla, Anika Chakrabarti, Zoey Meng, Ojas Bardiya'
    },
    {
        'url': 'https://ucladatares.medium.com/what-makes-a-movie-5d345aa68863',
        'image': 'https://miro.medium.com/max/2942/1*kXuXRqaGXpqEneoCZlV9Tw.png',
        'title': 'What Makes a Movie?',
        'meta': 'March 22, 2021',
        'authors': 'Madison Kohls, Bonnie Liu, Polina Pranovich, Danielle Goldwirth, Isha Shah'
    },
    {
        'url': 'https://ucladatares.medium.com/uber-vs-lyft-how-do-they-decide-their-price-92222122f482',
        'image': 'https://miro.medium.com/max/1400/0*-5xIMW2zPW7DEnUw',
        'title': 'Uber VS Lyft: How do they decide their price?',
        'meta': 'January 7, 2021',
        'authors': 'Yupeng Chen, Sylvia Ma, Hana lim, Lu Cheng, Anish Dulla'
    },
    {
        'url': 'https://ucladatares.medium.com/analyzing-questions-asked-to-the-troubleshooter-of-all-tech-teams-stack-overflow-a2c561a8b8e',
        'image': 'https://miro.medium.com/max/2000/0*CKQnNDvQuwh1LsYE',
        'title': 'Analyzing Questions Asked To The Troubleshooter Of All Tech Teams — Stack Overflow',
        'meta': 'January 6, 2021',
        'authors': 'Agrim Gupta, Darren Tsang, Nora Liu, Yuan Shen'
    },
    {
        'url': 'https://ucladatares.medium.com/visualizing-trends-and-patterns-in-pitchfork-reviews-cad1a130869b',
        'image': 'https://miro.medium.com/max/1400/0*IertjaMBGCwO2_hW',
        'title': 'Visualizing Trends and Patterns in Pitchfork Reviews',
        'meta': 'December 29, 2020',
        'authors': 'Joe Fregault, Karina Santoso, Ashley Lu, Ishaan Shah'
    },
    {
        'url': 'https://ucladatares.medium.com/dont-worry-be-happy-45920dd182d4',
        'image': 'https://miro.medium.com/max/1400/0*3B5v8yfq-nj5w9T-',
        'title': "Don't Worry, Be Happy",
        'meta': 'December 25, 2020',
        'authors': 'Rachel Li, William Huang, Charisse Hung, Aarushi Gupta, Charlotte Huang'
    },
    {
        'url': 'https://ucladatares.medium.com/uncovering-what-traits-make-a-kickstarter-campaign-successful-dd4b62df9eb4',
        'image': 'https://miro.medium.com/max/1400/0*mBv93BkaVOEK2PRi',
        'title': 'Uncovering What Traits Make A Kickstarter Campaign Successful',
        'meta': 'December 24, 2020',
        'authors': 'Raymond Bai, Samantha Chung, Emily Hou, Amy Tang'
    },
    {
        'url': 'https://ucladatares.medium.com/how-to-become-tiktok-famous-fe38ccdf7df6',
        'image': 'https://miro.medium.com/max/1400/0*NWQKICZCNOTsvo7K',
        'title': 'How To Become TikTok Famous',
        'meta': 'December 23, 2020',
        'authors': 'Ivan Tran, Isha Shah, Kaushik Naresh, Madison Kohls'
    },
    {
        'url': 'https://ucladatares.medium.com/spotify-trends-analysis-129c8a31cf04',
        'image': 'https://miro.medium.com/max/982/1*Vj5RB1YvdS6kR8mhJpigyA.png',
        'title': 'Spotify Trends Analysis',
        'meta': 'December 22, 2020',
        'authors': 'Deepthi Gangiredla, Deana Moghaddas, Ovie Soman, Trina Nguyen, Zoeb Jamal'
    },
    {
        'url': 'https://ucladatares.medium.com/an-investigation-of-the-california-wildfire-crisis-7104b1cb4a69',
        'image': 'https://miro.medium.com/max/1400/0*ItJqZEPpFNtGFrHO',
        'title': 'An Investigation of the California Wildfire Crisis',
        'meta': 'December 21, 2020',
        'authors': 'Adhvaith Vijay (Project Lead), Danielle Goldwirth, Tara Jaigopal, Jaclyn Chiu, Angelina Kim'
    },
    {
        'url': 'https://medium.com/@ucladatares/secrets-to-maximizing-success-in-the-speed-dating-experience-7f4f50c40019',
        'image': 'https://miro.medium.com/max/1400/0*KiVI-aajNSVLC7wc',
        'title': 'Secrets to Maximizing Success in the (Speed) Dating Experience',
        'meta': 'June 5, 2020',
        'authors': 'Aaron Lee, Aden Chiu, Charlotte Huang, Grace Panos, Michelle Lee, Teresa Rexin'
    },
    {
        'url': 'https://medium.com/@ucladatares/analyzing-domestic-airlines-and-flights-4ea21f31d932',
        'image': 'https://miro.medium.com/fit/c/1400/420/0*CIQMZBw2K3OGsRn5',
        'title': 'Analyzing Domestic Airlines and Flights',
        'meta': 'Jan 27, 2020',
        'authors': 'Olivia Heiner, Eddie Liu, Siddarth Chalasani, Allen Chun, Yupeng William Chen'
    },
    {
        'url': 'https://medium.com/@ucladatares/how-refereeing-and-fans-affect-35bb3c2ead58',
        'image': 'https://miro.medium.com/fit/c/936/282/0*bPoXdkbeh6ZZ3Cz7',
        'title': 'How Refereeing and Fans Affect the NBA',
        'meta': 'Jan 20, 2020',
        'authors': 'Andrew Liu, Joe Fregault, Kaushik Naresh and Matei Lupu'
    },
    {
        'url': 'https://medium.com/@ucladatares/all-about-ramen-3a4e657a4bd4',
        'image': 'https://miro.medium.com/max/1400/0*fOqlBV_r59UayaWe',
        'title': 'All About Ramen',
        'meta': 'Jan 20, 2020',
        'authors': 'Jun Bae, Celia Jin, Ovie Soman'
    },
    {
        'url': 'https://medium.com/@ucladatares/how-to-make-your-video-trend-on-youtube-not-clickbait-f1de5266cc2f',
        'image': 'https://miro.medium.com/max/1400/0*aMzoWddPOlAvqEPs',
        'title': 'How to Make Your Video Trend on YouTube! (Not Clickbait)',
        'meta': 'Dec 8, 2019',
        'authors': 'Aaron Lee, Aden Chiu, Charlotte Huang, Grace Panos, Michelle Lee, Teresa Rexin'
    },
    {
        'url': 'https://medium.com/@ucladatares/modern-astrophysics-at-the-forefront-of-data-science-2fd9b4e64ea9',
        'image': 'https://miro.medium.com/max/1400/0*zsdCH5M5uWnXnO_x.png',
        'title': 'Modern Astrophysics At The Forefront of Data Science',
        'meta': 'May 31, 2019',
        'authors': 'Mason MacDougall'
    },
    {
        'url': 'https://medium.com/@ucladatares/visualizations-on-crime-in-los-angeles-7013cd8f9c8b',
        'image': 'https://miro.medium.com/max/1240/0*2u3Fp3pA04Syo2eE',
        'title': 'Visualizations On Crime In Los Angeles',
        'meta': 'May 28, 2019',
        'authors': 'Boyang Yu, Radhika Ahuja'
    },
    {
        'url': 'https://medium.com/@ucladatares/movie-ratings-analysis-478c0de6c9f8',
        'image': 'https://miro.medium.com/max/1400/1*o_tUkNLdlXy127J-aWPxwQ.png',
        'title': 'Movie Ratings Analysis',
        'meta': 'May 28, 2019',
        'authors': ' Tanvi Pati, Vivek Menon'
    },
    {
        'url': 'https://medium.com/@ucladatares/a-quick-look-into-some-suicide-statistics-59fcd4819f35',
        'image': 'https://miro.medium.com/max/1400/0*hfQtQNNDubKw5sse',
        'title': 'A Quick Look Into Some Suicide Statistics',
        'meta': 'May 28, 2019',
        'authors': 'Chingyi Ie, Richard Yim'
    },
    {
        'url': 'https://medium.com/@ucladatares/analyzing-denzel-currys-lyrics-through-text-mining-methods-63608318d2',
        'image': 'https://miro.medium.com/max/1400/1*dLHJTeEW5MJRAPoAlKumeA.jpeg',
        'title': 'Analyzing Denzel Curry’s Lyrics Through Text Mining Methods',
        'meta': 'May 9, 2019',
        'authors': 'Nikhil Sharma, Raghava Govil'
    }
]

// const articles_per_row = 4;
// const num_articles = Articles.length;
// const num_rows = Math.ceil(num_articles/articles_per_row);

class DataBlog extends React.Component {
    componentDidMount(){
        const {handleActive} = this.props;
        handleActive("Data Blog");
    }
    render() {
        return (
            <div className='Body'>

                {/* Main Description  */}
                <div className="Header">
                    <Container>
                        <Grid>
                            <Grid.Row columns={2}>
                                <Grid.Column width={7}>
                                    <Image src={blogImage} size='large'></Image>
                                </Grid.Column>
                                <Grid.Column width={9}>
                                    <div className='Title'>
                                        <Header> Data Blog </Header>
                                    </div>
                                    <p className='Description'>
                                        Our teams publish a variety of data-centric journal articles,
                                        complemented by colorful visualizations. Take a look at some of
                                        the analytical insights we've unearthed.
                                        <Divider/>
                                        <div style={{marginTop: '5%'}}>
                                            {/* <Button fluid floated="right" color="orange" size="massive"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open('https://airtable.com/shrB31U11OMoyyoxV', "_blank");
                                                }}>
                                                Apply
                                            </Button> */}
                                        </div>
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </div>
                <div>
                    <Container style={{paddingBottom: 50}}>
                        <Segment style={{textAlign: 'left'}}>
                            <ReactMarkdown source={datablog_intro} />
                        </Segment>
                    </Container>
                </div>
                {/* Wave Image */}
                <div style={{backgroundImage: `url(${wave})`,
                                                backgroundSize: "cover",
                                                height: "50vh",
                                                width: "auto",
                                                paddingBottom: 80}}>
                </div>

                {/* Ideally, add react search bar */}

                {/* Will replace with medium API for dynamic updates when 
                    access token is approved */}
                <div>
                    <Container style={{paddingBottom: 50}}>
                        <Container fluid>
                            <div style={{fontSize: 40, marginBottom: '5%', marginTop: '5%'}}>
                                <Header >
                                    Latest DataBlog Articles
                                </Header>
                            </div>
                        </Container>
                        <div style={{paddingTop: '2%'}}>
                                {/* TODO: Need to create an auto grid */}
                                {Articles.map(article => (
                                        <Container className='card-body'>
                                            <a href={article.url} rel="noopener noreferrer" target="_blank">
                                            <Segment className='segment-body' size="big" onClick={() => {}}>
                                                <Image centered size="large" src={article.image}></Image>
                                                    <Header style={{fontSize: 20, overflow: 'auto'}}>{article.title}</Header>
                                                    <Header style={{fontSize: 16}}>{article.meta}</Header>
                                                    <div style={{ fontSize: 15, color: "black"}}>
                                                        {article.authors}
                                                    </div>
                                            </Segment>
                                            </a>
                                        </Container>
                                ))}
                        </div>
                    </Container>
                </div>

            </div>
        );
    }
}

export default DataBlog;