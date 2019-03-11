# Test05

### Installation

- Clone Repository
- Ensure NodeJS is installed and working on system
- Open another terminal, first run `npm i`
- Ensure TypeScript is globally installed through npm: `npm i -g typescript`
- Open 1 terminal in root directory of the project, then run `tsc -w` (Leave it open the whole time)
- To run tests, run `IP=INSERT YOUR DB IP USER=INSERT YOUR DB USER PASSWORD=DB PASSWORD DATABASE=DB NAME npm test`

### Introduction
Unfortunately, we were unable to mock the database, so it's required to run some sort of database with the `testfive.sql` mysql file imported into your database.
Tests include: 
- Mocking 
- Dummy
- Coverage Reports
- Stubs