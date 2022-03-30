# The Official DataRes Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/ede91354-e171-4150-996e-564c70411cfb/deploy-status)](https://app.netlify.com/sites/celadon-salamander-26442a/deploys)

[![GitHub Super-Linter](https://github.com/datares/website/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)

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
