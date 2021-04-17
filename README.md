# cypressOutisCourse-gl

## Author
2021 Juan Fonseca Solis

## Description
* Repository for the assignments of the course https://gorillalogic.udemy.com/course/automated-testing-with-cypress
* For managing multiple accounts in the same machine see https://gist.github.com/jexchan/2351996

## Setup
```
npm init
npm install cypress
npm install prettier
```

# Run
```
npx cypress run
npm run cy:open
```

# Folder structure
* Fixture: static data (e.g. data used by tests)
* Folders: where tests are stored
* Plugins: cypress extensions (e.g. Cucumber, extensions wrote by you)
* Support: pre-run scripts for defining (for instance, custom commands)

# Parts of a test
* Describe: a test
* It: one test step