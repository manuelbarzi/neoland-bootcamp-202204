# My App

## Intro

![](https://media.giphy.com/media/l2Je9zHYveK012EVi/giphy.gif)

This App is made to record different mountain activities with the main focus in the altitude
from the start point to the end

It's a social media where users can comment and like each other's activities



## Functional Description

### Use Cases

- Record an activity
- List activities from all users
- List your activities
- Like activities
- Comment activities
- Change your information (name, password...)
- Delete activities

### Wireframes

TODO show wireframes (screens) images

#
## Technical Description

...

### Data Model

TODO list data entities

#### User
- id (ObjectId)
- name (String)
- surname (String)
- usermame (String)
- password (String)
- email (String)
- birthday (Number)

#### Activity
- id (ObjectId)
- user (ObjectId)
- title (String)
- time (Date)
- likes ([UserId])
- comments ([Comment])
- checkpoints ([Point])

#### Point
- id (ObjectId)
- altitude (Number)
- latitude (Number)
- longitude (Number)
- time (Date)
- foto
- text (String)

#### Comment
- id (ObjectId)
- user (ObjectId)
- text (String)
- date (Date)

![](images/data-model.svg)