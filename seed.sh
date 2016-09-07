#!/bin/bash
mongo 100NYUTest --eval "db.dropDatabase()"
mongoimport --db 100NYUTest --collection events --type csv --headerline --file EventData.csv
mongoimport --db 100NYUTest --collection users --type csv --headerline --file UserData.csv
