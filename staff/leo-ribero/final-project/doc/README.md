# APP: BNautas!

## Intro

Community of Barcelonans who occasionally go on urban treks to discover unexplored corners of the city that stand out for their beauty, rarity or some particularity that they consider special. Through BNautas! you can record those finds and also share them with other Bnauts!

![](https://media.giphy.com/media/GgqOfnSGhwyfDjJI0C/giphy.gif)


## Functional Description

### Use Cases


- Add Spot
- Search Spots
- Edit Spot
- See user Spots
- Ban user Spot
- Comment user Spot

### Wireframes

![](images/basic-flow.svg)


## Technical Description

...

### Data Model

TODO list data entities

#### User
- id (ObjectId)
- name (String)
- surname (String)
- age (Number)
- usermame (String)
- password (String)

#### Spot
- id (ObjectId)
- user (ObjectId)
- title (String)
- comments ([Comment])
- ...

#### Comment
- id (ObjectId)
- user (ObjectId)
- text (String)
- date (Date)
- ...

![](images/BNautas.drawio.svg)