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

User, Apartment, Reserve.

#### User
- id (ObjectId)
- email (unique, string)
- name (string)
- surname (string)
- phone (string)

#### Apartment
- id (ObjectId)
- user (ObjectId)
- address (string)
- images ([strings])
- title (string)
- description (string)

#### Booking
- id (ObjectId)
- apartment (ObjectId)
- user (ObjectId (from admin))
- name (String)
- phone (String)
- email (String)
- notes (String)
- from (Date)
- to (Date)

![](images/data-model.svg)