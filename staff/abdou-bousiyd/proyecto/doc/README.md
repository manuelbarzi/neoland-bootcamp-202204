# PitchUs

## Intro

![](https://media3.giphy.com/media/k0ijJhqrUP4T2EvmJ1/giphy.gif?cid=ecf05e47erc2aua9odet8z16q2vbwgdonasms8uqdzqov53g&rid=giphy.gif&ct=g)

The project is a clone of the popular Codepen web. Is an online community for testing and displaying user-created HTML, CSS, and JavaScript code snippets. It works as an online code editor and an open code learning environment, where developers can create code snippets, annotate "pens", share and test them.

## Funcional Description

### Use Cases

- Create snippets [HTML - JS - CSS].
- Download the code in zip format
- Custumize editor settings.
- Share project/pens
- Login and register
  - Add pens to favorite
  - Save aon project

## Technical Description

### Data Model

#### User

- id (ObjectId)
- username (String)
- name (String)
- email (String)
- password (String)
- favProjects ([ObjectId (Project)])

#### Project

- id (ObjectId)
- user (ObjectId)
- title (String)
- description (String)
- files [File]

#### File

- id (ObjectId)
- text (String)
- type (String, enum ['html', 'css', 'js'])

// done
Auth
Create project and preview
Custom Editor

// TODO
More test cases
Download project in zip format
improve design
