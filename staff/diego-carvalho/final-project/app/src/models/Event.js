import createId from '../utils/createId'

function Event(id, title, description, date) {
    if (id != null && typeof id !== 'string') throw new TypeError('id is not a string')
    if (userId != null && typeof userId !== 'string') throw new TypeError('userId is not a string')
    if(title !== null && typeof title!== 'string') throw new TypeError('title is not a string')
    if(description !== null && typeof description !== 'string') throw new TypeError('description is not a string')
    if (date != null && !(date instanceof Date)) throw new TypeError('date is not Date')


    this.id = id || createId()
    this.userId = userId || createId()
    this.title = title
    this.description = description
    this.date = date || new Date
}
export default Event