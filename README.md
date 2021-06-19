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
npm install prettier # editor customizations (tabs, single-quotes, etc...)
npm install cypress cypress-cucumber-preprocessor # for Cucumber BDD
```

# Run
* To run in the UI and see the execution step by step: `npm run cy:open`
* To run in command line and capture snapshots on failures: `npm run cy:run:chrome`
* To run in command line and ?: `npx cypress run`
* To run Cypress Dashboard execute `cy:run-dashboard`.

# Folder structure
* **Fixture:** static data (e.g. data used by tests)
* **Folders:** where tests are stored
* **Plugins:** cypress extensions specified in the index.js (e.g. Cucumber, extensions wrote by you)
* **Support:** pre-run scripts for defining (for instance, custom commands)

# Parts of a test
* `describe` (a test)
* `it` (one test step)

# CI/CD
**Continous integration (CI):** 
> "process of automatically detecting, pulling, building, and automated testing the changes in the code. CI is the activity that start the pipeline." - Kaniel Outis
**Continuous delivery (CD):** 
> "overall chain of processes that automatically gets source code changes and runs them through build, test, packaging, and related operations to produce a deployable release, largely without human intervention." - Kaniel Outis

# Jenkins
* Download Jenkins and place the jenkins.war file in the root folder of the repository
* Start Jenkins: `java -jar jenkins.war --httpPort=8080 --enable-future-java`
* Access Jenkins: `localhost:8080`
* Setup your project, or, alternatively, restore our backup:
    * Install Jenkins's ThinBackup plugin from http://localhost:8080/pluginManager/
    * Restore the configuration from jenkinsBackup.zip (need to decompress it first)
    * Further details: https://devopscube.com/jenkins-backup-data-configurations/

# Docker

To install docker on Ubuntu follow the steps below gotten [from here](https://www.digitalocean.com/community/tutorials/como-instalar-y-usar-docker-en-ubuntu-18-04-1-es):
```
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt update
apt-cache policy docker-ce
sudo apt install docker-ce
```

Verify that docker is running by executing `sudo systemctl status docker`

If you get _Got permission denied while trying to connect to the Docker daemon socket at unix:_ add your user to the docker group as per [this thread](https://stackoverflow.com/questions/48957195/how-to-fix-docker-got-permission-denied-issue):
```
sudo groupadd docker
sudo usermod -aG docker $USER
docker run hello-world
```

To run the Docker file of the project run `docker build -t cypress .`

# After feedback by E. Duarte and O. Valerio at 06/14/21  
* Checked failed TCs.
* Set API URL using `Cypress.env('')` on Cypress.json
* Moved all locators to Page classes to follow POM
* Removed unused commands defined on commands.js

Pending:
* For Jenkins, add a stage to clone the repository
* Install Jenkins on a docker containe
* Use cy.log to decrease the number of logs
* Check what functionalities of Cypress Dashboard are free (concurrency?)
* Investigate Chai and Mocha as alternatives for Jest
* Investigate about Selenide? (https://selenide.org/documentation.html)
