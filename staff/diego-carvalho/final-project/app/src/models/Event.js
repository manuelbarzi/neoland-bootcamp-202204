import createId from '../utils/createId'

function Event(userId, eventId, title, description, date) {
    if (userId != null && typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (eventId != null && typeof eventId  !== 'string') throw new TypeError('eventId  is not a string')
    if(title !== null && typeof title !== 'string') throw new TypeError('title is not a string')
    if(description !== null && typeof description !== 'string') throw new TypeError('description is not a string')
    if (date != null && !(date instanceof Date)) throw new TypeError('date is not Date')

   
    this.userId = userId || createId()
    this.eventId  = eventId  || createId()
    this.title = title
    this.description = description
    this.date = date || new Date
}
export default Event