<img src="https://ucladatares.com/static/media/logo.416d2c1d.svg" width="9%"></img>  
&ensp; 
![GitHub last commit](https://img.shields.io/github/last-commit/datares/website) 
[![Netlify Status](https://img.shields.io/netlify/ede91354-e171-4150-996e-564c70411cfb)](https://img.shields.io/netlify/ede91354-e171-4150-996e-564c70411cfb)
[![GitHub Super-Linter](https://img.shields.io/github/workflow/status/datares/website/Lint%20Code%20Base?label=linter)](https://img.shields.io/github/workflow/status/datares/website/Lint%20Code%20Base?label=linter)


# The Official DataRes Website

## Getting Started
To set up the development environment,
```bash
git clone https://github.com/datares/website.git && cd website
yarn install
yarn start
```
which installs all the dependencies, and starts the website on `http://localhost:3000`.

## Developing
When creating a new branch in git, please name the branch using the following format, `<your name>/<feature>`.  For example, if I'm updating the navbar for the website, a good convention would be to name the branch `colin/update-navbar`.

Before pushing, please ensure the app builds using `yarn build`, because otherwise the CI/CD will reject your changes.  Also, ensure your code passes the linter to maintain style guidelines.

When you're done developing your feature, please make a pull request on GitHub to trigger our testing suite.

## Deployment
We host the website on Netlify under the domain `ucladatares.com`.  When a new pull request is merged into the master branch, the website is automatically rebuilt and deployed to Netlify.
