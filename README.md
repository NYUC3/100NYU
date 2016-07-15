100 NYU Web App
===
This repository contains the code to the 100 NYU App. The wireframe of design is also included as submodules.

Structure
---
The system is developed with ReactJS and other related technologies.

Data Seeding
---
mongoimport --db 100NYUTest --collection events --type csv --headerline --file EventData.csv

Starting
---
First install the node dependencies

``` 
    npm install
```


To start the application

```
    npm start
```

Versioning
---
The version system is based in three different degrees of changes:
* Major release
* Sprint (Minor release / New Features)
* Fix/patch

Folowing the form {`Majore release`}.{`Sprint`}.{`Minor Fix`}

Every time a left number changes, the numbers after go back to zero. That is, if we have a major release, the number of sprints goes back to 0. If we have a new Sprint, the numbers of fixes goes back to 0.

Therefor the version 1.4.3, means that we are on the sprint 4 of our 1st major release and 3 fixes have been applied.
