# My App

## Intro

blah blah blah

![](https://media4.giphy.com/media/JstJbnt6r9Dul4QoUj/giphy.gif?cid=ecf05e47jsaq8xpd0e2t07t15cf1vepou1izxe3m4ky19knm&rid=giphy.gif&ct=g)


## Functional Description

### Use Cases

TODO list use cases

- Add Spot
- Search Spots
- Edit Spot
- See user Spots
- ...

### Wireframes

TODO show wireframes (screens) images


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

![](images/data-model.svg)