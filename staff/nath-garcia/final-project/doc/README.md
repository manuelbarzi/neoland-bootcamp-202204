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
- email (String)
- phone (Number)
- usermame (String)
- password (String)

#### Income
- id (ObjectId)
- user (ObjectId)
- title (String)
- text (String)
- amount (Number)
- date (Date)

#### Out
- id (ObjectId)
- user (ObjectId)
- title (String)
- text (String)
- amount (Number)
- date (Date)

![](images/data-model.svg)