## Intro

![](https://media0.giphy.com/media/AJwnLEsQyT9oA/giphy.gif?cid=ecf05e47p6toyqjoc1r3ljv7n75a7hkps1enc5use3py1t7i&rid=giphy.gif&ct=g)


Hands-free personal safety app that keeps you safe wherever you go and helps advert an emergency from occurring in the first place. If you are in danger you can touch the SOS button and it will appear a message at anyone that has the app near you.

The app is integrated with public safety agencies to provide you with security wherever and whenever you need it.

It also has a ranking with the users that have helped resolve more cases.

## Funcional Description

### Use Cases
- Login and register.
- Contact safety agencies.
- Ranking more active users.
- A heat map.
- Ask for help.

## Technical Description

### Data Model

#### User
- id: (ObjectId)
- username: (String)
- name: (String)
- email: (String)
- password: (String)
- mobile: (String)

#### Message
- id (ObjectId)
- user (ObjectId)
- text (String)
- date (Date)

#### Incidence

    - id: (ObjectId)
    - user: (ObjectId) userid
    - altitude (String)
    - longitude (String)
    - description
    - date (Date)

TODO 

<!-- - Figma (Tomorrow)
- Hacer diagrama 
- Investigar  -->

- Proteger las rutas privadas front y back (solo si hay token el usuario puede acceder)

- 

