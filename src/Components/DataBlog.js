// Import Components
import React from 'react';
import {Header, Container, Image, 
            Segment, Grid, Button, Divider} from 'semantic-ui-react';

// Import JS
import '../Styles/DataBlog.css';
import '../Styles/Utils.css';
import 'semantic-ui-css/semantic.min.css';

// Import Images
import blogImage from '../Assets/DataBlog/blog_image.svg';
import wave from '../Assets/DataBlog/team_wave.svg';

// Temporarily added articles (in datewise order)
// Will eventually replace with articles dynamically updated from Medium website
const Articles = [
    {
        'url': 'https://medium.com/@ucladatares/secrets-to-maximizing-success-in-the-speed-dating-experience-7f4f50c40019',
        'image': 'https://miro.medium.com/max/1400/0*KiVI-aajNSVLC7wc',
        'title': 'Secrets to Maximizing Success in the (Speed) Dating Experience',
        'meta': 'June 5 2020',
        'authors': 'Aaron Lee, Aden Chiu, Charlotte Huang, Grace Panos, Michelle Lee, Teresa Rexin'
    },
    {
        'url': 'https://medium.com/@ucladatares/analyzing-domestic-airlines-and-flights-4ea21f31d932',
        'image': 'https://miro.medium.com/fit/c/1400/420/0*CIQMZBw2K3OGsRn5',
        'title': 'Analyzing Domestic Airlines and Flights',
        'meta': 'Jan 27 2020',
        'authors': 'Olivia Heiner, Eddie Liu, Siddarth Chalasani, Allen Chun, Yupeng William Chen'
    },
    {
        'url': 'https://medium.com/@ucladatares/how-refereeing-and-fans-affect-35bb3c2ead58',
        'image': 'https://miro.medium.com/fit/c/936/282/0*bPoXdkbeh6ZZ3Cz7',
        'title': 'How Refereeing and Fans Affect the NBA',
        'meta': 'Jan 20 2020',
        'authors': 'Andrew Liu, Joe Fregault, Kaushik Naresh and Matei Lupu'
    },
    {
        'url': 'https://medium.com/@ucladatares/all-about-ramen-3a4e657a4bd4',
        'image': 'https://miro.medium.com/max/1400/0*fOqlBV_r59UayaWe',
        'title': 'All About Ramen',
        'meta': 'Jan 20 2020',
        'authors': 'Jun Bae, Celia Jin, Ovie Soman'
    },
    {
        'url': 'https://medium.com/@ucladatares/how-to-make-your-video-trend-on-youtube-not-clickbait-f1de5266cc2f',
        'image': 'https://miro.medium.com/max/1400/0*aMzoWddPOlAvqEPs',
        'title': 'How to Make Your Video Trend on YouTube! (Not Clickbait)',
        'meta': 'Dec 8 2019',
        'authors': 'Aaron Lee, Aden Chiu, Charlotte Huang, Grace Panos, Michelle Lee, Teresa Rexin'
    },
    {
        'url': 'https://medium.com/@ucladatares/modern-astrophysics-at-the-forefront-of-data-science-2fd9b4e64ea9',
        'image': 'https://miro.medium.com/max/1400/0*zsdCH5M5uWnXnO_x.png',
        'title': 'Modern Astrophysics At The Forefront of Data Science',
        'meta': 'May 31 2019',
        'authors': 'Mason MacDougall'
    },
    {
        'url': 'https://medium.com/@ucladatares/visualizations-on-crime-in-los-angeles-7013cd8f9c8b',
        'image': 'https://miro.medium.com/max/1240/0*2u3Fp3pA04Syo2eE',
        'title': 'Visualizations On Crime In Los Angeles',
        'meta': 'May 28 2019',
        'authors': 'Boyang Yu, Radhika Ahuja'
    },
    {
        'url': 'https://medium.com/@ucladatares/movie-ratings-analysis-478c0de6c9f8',
        'image': 'https://miro.medium.com/max/1400/1*o_tUkNLdlXy127J-aWPxwQ.png',
        'title': 'Movie Ratings Analysis',
        'meta': 'May 28 2019',
        'authors': ' Tanvi Pati, Vivek Menon'
    },
    {
        'url': 'https://medium.com/@ucladatares/a-quick-look-into-some-suicide-statistics-59fcd4819f35',
        'image': 'https://miro.medium.com/max/1400/0*hfQtQNNDubKw5sse',
        'title': 'A Quick Look Into Some Suicide Statistics',
        'meta': 'May 28 2019',
        'authors': 'Chingyi Ie, Richard Yim'
    },
    {
        'url': 'https://medium.com/@ucladatares/analyzing-denzel-currys-lyrics-through-text-mining-methods-63608318d2',
        'image': 'https://miro.medium.com/max/1400/1*dLHJTeEW5MJRAPoAlKumeA.jpeg',
        'title': 'Analyzing Denzel Curry’s Lyrics Through Text Mining Methods',
        'meta': 'May 9 2019',
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
                                            <Button fluid floated="right" color="orange" size="massive"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open('https://airtable.com/shruXlMn10XpJ6opl', "_blank");
                                                }}>
                                                Apply
                                            </Button>
                                        </div>
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
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
                                {/* TODO: Need to create an auto grid */}
                                {Articles.map(article => (
                                        <Container fluid style={{margin: '5%'}}>
                                            <a href={article.url} rel="noopener noreferrer" target="_blank">
                                            <Segment style={{margin: 0}} size="big" onClick={() => {}}>
                                                <Image centered size="large" src={article.image}></Image>
                                                    <Header style={{fontSize: 20, overflow: 'auto'}}>{article.title}</Header>
                                                    <Header style={{fontSize: 15}}>{article.meta}</Header>
                                                    <div style={{ fontSize: 12, color: "black"}}>
                                                        {article.authors}
                                                    </div>
                                            </Segment>
                                            </a>
                                        </Container>
                                ))}
                        </Container>
                    </Container>
                </div>

            </div>
        );
    }
}

export default DataBlog;