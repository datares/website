const markdown = `

## Previous work 

In the past year, we started something quite unique at UCLA : we taught our research members how to work with cutting-edge, Applied Deep Learning. 

We like the term Applied Deep Learning, because it gives us an idea that we can solve problems with AI. 

We've had a lot of research in the past 10 years that has tried to understand how we can build better algorithms using neural networks. 

Our goal is to make use of this to research to understand how we can better apply these algorithms
to realistic, fun, extravagant problems. 

In the 2019-2020 academic year, we worked with [reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning#:~:text=Reinforcement%20learning%20(RL)%20is%20an,supervised%20learning%20and%20unsupervised%20learning.) 
and [supervised learning](https://en.wikipedia.org/wiki/Supervised_learning#:~:text=Supervised%20learning%20is%20the%20machine,a%20set%20of%20training%20examples.) problems, 
which required our members to apply their software engineering, research and critical thinking skills. 

The first problem, which you can read about [here](https://medium.com/@ucladatares/rlette-casino-roulette-through-reinforcement-learning-67e865843f0d), was to teach an agent how to gamble in the game of Roulette. 

Eventually, our members were able to learn from the agent, and understand they should in fact
not gamble at all, as most betting positions are far from being statistically convenient for the gambler. 

With the second problem, we took it a step further. We taught our members what a [ResNet](https://en.wikipedia.org/wiki/Residual_neural_network) is, and how we can use it
for regression, computer vision problems. 

Specifically, [we taught an AI how to predict speed from just video frames](https://medium.com/@ucladatares/predicting-speed-from-video-frames-dissecting-the-comma-ai-challenge-5da697b55886). 
This included a lot of preprocessing, one of the most fundamental steps in data science, which allowed our members 
to learn about the hassles of training a realistic model that generalizes well enough.

## Let's try something different this time. 

We noticed that the biggest hurdle in solving these problems is having to write an entire codebase throughout a single academic quarter, from scratch. This turns out to be quite difficult, the moment school starts and assignments are due. 

This year, we are excited to try a different approach for this year: we spent the entire summer writing [a framework to teach AI agents to trade in the stock market](https://github.com/datares/4castr). 
We hope that this is gonna provide a jumpstart for our new and old members, to experiment with and learn from.

Let's dive into what you will be working on this year. 

## The framework

Currently, 4castr uses [Stable Baselines](https://stable-baselines.readthedocs.io/) and [Optuna](https://optuna.org/) to train [Proximal Policy Optimization](https://openai.com/blog/openai-baselines-ppo/) (PPO) agents. 
The rather complicated algorithm has several tools that can help the agent learn. 

For instance, it can generate [TensorBoard](https://www.tensorflow.org/tensorboard) plots of all the agent's training stats.

Additionally, by default, the agent takes [OHLCV](https://acronyms.thefreedictionary.com/OHLCV#:~:text=Acronym,Volume%20(type%20of%20data%20feed)) values of AAPL (Apple's ticker) and attempts to maximize a reward, which corresponds to the net profit throughout the trading window (in days).

The agent, though, can also provide additional values to evaluate an action: it can generate a [technical analysis](https://www.investopedia.com/terms/t/technicalanalysis.asp#:~:text=Key%20Takeaways-,Technical%20analysis%20is%20a%20trading%20discipline%20employed%20to%20evaluate%20investments,the%20security's%20future%20price%20movements.) of the stock, which traders use to understand if the stock is experiencing a strong dip or rise. 

These two main components of the framework are going to be the our teams' scope of research, for this quarter. 

Although we are really trying to make this project grow through 2020/2021, we are starting from the basics. 
So fear not, you will be assigned to tasks that are tethered with your level in Python and proficiency with AI applications. 

### The Teams

So far, we are going to have you select a preference for which team you'd like to pick.

The following paragraphs are designed for you to get an idea on what you'll be working on and perhaps, start as soon you'd like to learn about ADL. 

### Agent Team

This team will learn in depth how PPO works and try to understand the relationship between reward and PPO hyperparameters, so that they can be varied and perhaps optimized for a specific stock.  

In this team, you will have the opportunity to learn one of the best reinforcement learning algorithms, used extensively on Robotics and Gaming problems, while learning how to update a large codebase, and use Tensorboard for veryfing your agents are in fact learning. 

[Here](https://medium.com/aureliantactics/understanding-ppo-plots-in-tensorboard-cbc3199b9ba2), this is a great place to start. 

### Trader team

This team will relate more to the [Input tensor](https://www.tensorflow.org/guide/tensor) of our agents. In specific, as mentioned in a previous section, we are only taking OHCLV values from the agent. 

We'd like to improve that, although generating too many terms is going to create noise in the features, and our agent will not be able to generalize well enough, because it will get confused. 

Thus, we are going to have you search for the best input tensors, which will (possibly) include a short technical analysis of the stock, as well as SOME of the OHCLV values (which ones should we keep, to minimize noise?)

And [here](https://towardsdatascience.com/feature-selection-correlation-and-p-value-da8921bfb3cf), this is a great place to start. 

## Remote Learning

We are experiencing a time where the whole world is switching to a remote learning platform. And so is Research@Datares. 

We are going to have weekly meetings, which will be recorded and will have practical examples on how we can play with this platform, created from scratch by your favorite Research team.

Additionally, our project lead will get into break out rooms on Zoom, and will directly assist you in your journey to understanding deep learning. 

## Apply, to learn, to grow, to make a change.

We are excited to meet you, learn from you, and help you grow. 
If you have any questions, feel free to email fcolonnese@ucla.edu

Cheers.`

export default markdown