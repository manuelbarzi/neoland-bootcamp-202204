# FLASH App

## Intro

Estás en un bar. Tu y esa persona en la mesa de al lado os mirais sin parar. <br/>
Escaneas el codigo QR pegado en la esquina de tu mesa, click a 'Hacerme visible' <br/>
Y entonces observas que la aplicación te muestra a todas las personas solteras, o no,<br/>
de este bar.<br/>
Esa persona de al lado está mostrandose como solter@ y con ganas de inicar algo nuevo<br/>
¡Envias un FLASH y ella te responde con otro! <br/>
LA AVENTURA HA COMENZADO.


![](https://media4.giphy.com/media/JoaM2YSdV9JP9V3bBq/giphy.gif?cid=ecf05e47haerapqo4kxfvnhv2y4ede6wsli2ea0ur10zex0b&rid=giphy.gif&ct=g)

## Functional Description


- Sube tus mejores foto<s
- Describe en pocas palabras como eres
- Conectate al lugar donde estes con el QR
- Escoge tu interes
- Navega y descubre a la persona que te gusta
- Envia un FLASH
- Chatea con esa persona
- Desconectate


## Technical Description

- React Native
- Expo
- etc...

### Data Models

#### Users :
- id (ObjectId)
- role (String enum['admin', 'user'])
- name (String)
- username (String)
- password (String)
- age (Number)
- interest (String)
- gender (String)
- about me (String)
- work (String)
- location id (ObjectId)
- photo (string, base64)

#### Flash:
- id (ObjectId)
- from ([ObjectId (user)])
- to ([ObjectId (user)])

#### Match :
- id (ObjectId)
- users ([ObjectId (user)])
- message ([Message])

#### Chat :
- id (ObjectId)
- text (String)
- date (Date)

