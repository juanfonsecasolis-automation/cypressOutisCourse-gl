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
* To run in the UI and see the execution step by step: `npm run cy:open`
* To run in command line and capture snapshots on failures: `npm run cy:run`
* I don't remember what this one does: `npx cypress run`

# Folder structure
* Fixture: static data (e.g. data used by tests)
* Folders: where tests are stored
* Plugins: cypress extensions (e.g. Cucumber, extensions wrote by you)
* Support: pre-run scripts for defining (for instance, custom commands)

# Parts of a test
* Describe: a test
* It: one test step

# CI/CD
* Continous integration (CI): "process of automatically detecting, pulling, building, and automated testing the changes in the code. CI is the activity that start the pipeline." - Kaniel Outis
* Continuous delivery (CD): "overall chain of processes that automatically gets source code changes and runs them through build, test, packaging, and related operations to produce a deployable release, largely without human intervention." - Kaniel Outis

# Jenkins
* Download Jenkins and place the jenkins.war file in the root folder of the repository
* Start Jenkins: `java -jar jenkins.war --httpPort=8080 --enable-future-java`
* Access Jenkins: `localhost:8080`
* Install Jenkins's ThinBackup plugin from http://localhost:8080/pluginManager/
* Restore the configuration from jenkinsBackup.zip (need to decompress it first)
* Further details: https://devopscube.com/jenkins-backup-data-configurations/
