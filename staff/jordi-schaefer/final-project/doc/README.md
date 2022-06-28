# My App

## Intro

![](https://media.giphy.com/media/l2Je9zHYveK012EVi/giphy.gif)

This **App** is made to record different mountain activities with the main focus in the altitude
from the start point to the end

It's a social media where users can comment and like each other's activities


## Functional Description

### Use Cases

- Record an activity
    - record diferents positions and altitude
    - show live data (distance, time, elevation, points in map)
    - save sport, dificult, text and photos
- Resume activities made within the last 6 hours
    - upload new o diferent information if its needed
- List activities from all users
    - Like activities
    - Comment activities
- Seach activities
    - search for title (with or without capital letters)
    - filter for sport
- List your activities
    - including a sumary of your total and last month data
    - including private activities
- Change your information 
    - name, email, password
    - update personal Foto (one default)
    - delete activities
    - delete user

### Wireframes

[Figma url]: https://www.figma.com/file/haWT288GikgqrQmxQphSnj/Project?node-id=0%3A1

[Figma url]


<img src="images/Component-1.png" width="250">
<img src="images/Component-2.png" width="510">

#
## Technical Description

The user can record points during the activity, once they click the start button the first point is recorded and showed in the map, next points could be recorded with the record button, and again with the finish button one last point is also recorded.

There is a hide posibility to record automaticaly for every new found position
To use this funtion user have to click 6 time in the upper right corner, and one button will appear.

Once the user finish the activity the title is requiered, other imputs are optional and sport could be changed again or maintain the first selection.

If the activity stops in the middle of process it will be saved as a private, but if it ends with the correct process, and user does not select anythyns, by defoult will be public.

User could resume an activity in his personal profile within the last 6 hours, the activity will be opened with all the points and data saved

User could change profile Foto in settings, there is a defaulf Foto for every new user registered

Activities could be deleted in personal profile -> settings -> delete activities


### Data Model

User, Activity, Point, Comment

#### User
- id (ObjectId)
- name (String)
- usermame (String)
- password (String)
- email (String)
- foto (String)

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
