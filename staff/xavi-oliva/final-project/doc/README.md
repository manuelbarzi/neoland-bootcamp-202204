# My App

## Intro

**Brun's Flats** is a website for managing rental apartments for tourist use, where the host can have them listed and manage their availability by dates. Later on, features such as the option to link them to portals like Booking or Airbnb will be added.

![](https://media.giphy.com/media/tKAYjlA5D36SZ2rqpK/giphy.gif)



## Functional Description

### Use Cases

TODO list use cases

- Register Host
- Edit host's profile
- Register Apartment
- Edit Apartment features
- Delete Apartment

### Wireframes

TODO show wireframes (screens) images


## Technical Description

The **_User_** has 2 roles or views: **_Host_** and **_Guest_**. From the **Host** view you can manage the apartments you enter, and from the **Guest** view you can see them listed, their characteristics and availability.

### Data Model

User, Apartment, Reserva.



#### User
- id(ObjectId)
- email (unique)
- name
- apellidos
- phone

#### Apartment
- id (ObjectId)
- user (objectId)
- address (string)
- images (array strings)
- title (string)
- description (string)
-

#### Reserva
- id (objectId)
- id piso (objectId)
- id dueño
- Date (entrada, salida)

![](images/data-model.svg)