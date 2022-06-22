# My App

## Intro

![](https://media.giphy.com/media/l2Je9zHYveK012EVi/giphy.gif)

This App is made to record different mountain activities with the main focus in the altitude
from the start point to the end

It's a social media where users can comment and like each other's activities



## Functional Description

### Use Cases

- Record an activity
    - record diferents positions and altitude
    - show live data (distance, time, elevation, points in map)
    - save sport, dificult, text and photos
- Resume activities made within the last 6 
    - upload new o diferent information if its needed
- List activities from all users
    - Like activities
    - Comment activities
- List your activities
    - including a sumary of your total and last month data
    - including private activities
- Change your information 
    - name, email, password
    - delete activities
    - delete user

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
- usermame (String)
- password (String)
- email (String)

#### Activity
- id (ObjectId)
- user (ObjectId)
- title (String)
- text (String)
- date (Date)
- sport (String)
- dificult (String)
- private (Boolean)
- points ([point])
- comments ([comment])
- likes ([UserId])
- images ([String])

#### Point
- id (ObjectId)
- altitude (Number)
- latitude (Number)
- longitude (Number)
- time (Date)

#### Comment
- id (ObjectId)
- user (ObjectId)
- text (String)
- date (Date)

![](images/data-model.svg)