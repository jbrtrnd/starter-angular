# Angular starter project

A project starter built with [Angular](https://angular.io/).

Be careful, this starter has a strong dependency with Angular, you should read the docs before starting.


## Table of content
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installing dependencies](#installing-dependencies)
    * [Run](#run)
* [Overview](#overview)
    * [Base project structure](#base-project-structure)
* [Build](#build)
    

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
Go to deployment section for notes on how to deploy the project on a live system.

This project starter provides an Angular skeleton app that you can extends to build your own app. It also provide some 
reusing components and providers to help you building an app faster.

### Prerequisites

* [npm](https://www.npmjs.com/get-npm) 

    Needed to install Javascript dependencies.
    
    
### Installing dependencies

At the root directory of the starter, run :

```shell
npm install
```

### Run

At the root directory of the starter, run :

```shell
npm start
```

Internally, the NPM command will launch the ``ng serve`` command.

## Overview

### Base project structure

```
|-- node_modules/         --> Javascript dependencies installed from NPM
|-- src/                  --> Sources files root directory
    |-- app/              --> Modules files root directory
        |-- bootstrap/    --> Bootstrap module
        |-- app.module.ts --> App module (first loaded module by the Angular app)
    |-- assets/           --> Assets directory (images etc...)
    |-- environments/     --> Application environments files
    |-- scss/             --> Global SCSS files
    |-- index.html        --> HTML entry point
    |-- main.ts           --> Angular entry point
    |-- polyfills.ts      --> Polyfills
    |-- tsconfig.json     --> Application typescript config
|-- .angular-cli.json     --> Angular config
|-- .gitignore         
|-- package.json       
|-- package-lock.json  
|-- tsconfig.json      --> Parent typescript config
```

## Build

At the root directory of the starter, run :

```shell
npm run build
```

Internally, the NPM command will launch the ``ng build`` command.

Will produce the built files in the ``build`` directory.


## Automated NPM tasks

All the following tasks must be ran at root directory of the starter.

### Checking code style
```shell
npm run style
```
Using [Codelyzer](https://github.com/mgechev/codelyzer).

