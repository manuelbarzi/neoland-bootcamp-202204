# PitchUs

## Intro

![](https://media.giphy.com/media/3o72EX5QZ9N9d51dqo/giphy.gif)

PItchUs is a social media for musicians who want to play and share song interpretations. It is created to encourage musicians to interact with each other and have the freedom to publish their interpretations with fewer restrictions.

## Funcional Description

### Use Cases
- Register an user
- Edit the user profile
- Change password
- Unregister an User
- Publish an interpretation
- Explore personalized interpretations connecting with the Spotify user account
- Search interpretations of an Artist or a Song
- Rate an interpretation
- Update an interpretation rate
- Remove an interpretation rate

### Wireframes

## Technical Description




## Technologies
- React
- NextJS
- Tailwind

### Data Model

#### User
- id (ObjectId)
- email (String)
- username (String)
- password (String)
- firstName (String)
- LastName (String)
- dateOfBirth (Date)
- spotifySession (Object)
- image - TODO

#### Artist
- id (ObjectId)
- name (String)
- genres (Array of Numbers)
- country (String)
- image - TODO

#### Song
- id (ObjectId)
- artist (ObjectId)
- name (String)
- genres (Array of Numbers)
- album (String)
- Date (Date)
- interpretations ([Interpretation])

#### Interpretation
- id (ObjectId)
- user (ObjectId)
- ranks ([Rank])
- date (Date)
- content (String)
- comments ([Comment]) - TODO

#### Rank
- id (ObjectId)
- user (ObjectId)
- amout (Number)

#### Comment - TODO
- id (ObjectId)
- user (ObjectId)
- text (String)
- date (Date)
- like (Array of ObjectId)