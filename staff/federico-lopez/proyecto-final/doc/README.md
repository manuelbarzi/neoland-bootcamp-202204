# PitchUs

## Intro

![](https://media.giphy.com/media/3o72EX5QZ9N9d51dqo/giphy.gif)

MyApp is a social media for musicians who want to play and share song interpretations. It is created to encourage musicians to interact with each other and have the freedom to publish their interpretations with fewer restrictions.

## Funcional Description

### Use Cases
- Register an User
- Edit an User profile
- Share a interpretation
- Search an interpretation
- Like a interpretation
- Comment a interpretation

### Wireframes

## Technical Description

### Data Model

#### User
- id (ObjectId)
- username (String)
- name (String)
- surname (String)
- email (String)
- password (String)
- date of birth (Date)
- photo

#### Artist
- id (ObjectId)
- name (String)
- genres (Array of Numbers)
- country (Array of Numbers)
- image

#### Song
- id (ObjectId)
- name (String)
- artist (ObjectId)
- Interpretations ([Interpretation])
- genre (Array of Numbers)
- album (String)
- Date (Date)

#### Interpretation
- id (ObjectId)
- user (ObjectId)
- likes (Array of ObjectId)
- date (Date)
- text (String)
- Comments ([Comment])
- Chords (Array of ObjectId)

#### Comment
- id (ObjectId)
- user (ObjectId)
- text (String)
- date (Date)
- like (Array of ObjectId)

#### Chord
- id (ObjectId)


