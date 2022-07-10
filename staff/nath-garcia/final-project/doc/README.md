# MyBalance

## Intro

In this application you will be able to control expenses month by month, having the option of charging fixed expenses and variable expenses, as well as payment plans and more options that will make its use a great utility for people like me, very distracted with the movement of the coin. 

![](https://media.giphy.com/media/3ohze3cqkv058SUy2s/giphy.gif)


## Functional Description

### Use Cases

TODO list use cases

- Add available monthly money (income)
- Expenses: Fixed expenses
- Variable expends
- History of previous movements
- Add payment plan
- Select between different categories


### Wireframes

https://www.figma.com/file/AQZYdznaHRVHYu8XpqM5wx/final-project?node-id=0%3A1


## Technical Description

...

### Data Model

TODO list data entities

#### User
- id (ObjectId)
- name (String)
- surname (String)
- usermame (String)
- email (String)
- phone (Number)
- password (String)
- date (Date)

#### Account
- id (Objectid)
- user (ObjectId)
- type (String, enum ['bank account', 'credit card', 'debit card', 'paypal', 'cash'])
- text (String)

#### Movement
- id (ObjectId)
- user (ObjectId)
- type (String, enum ['income', 'outcome'])
- category (String, enum ['salary', '...'])
- concept (String)
- amount (Number)
- account (ObjectId)
- date (Date)

![](images/data-model.svg)