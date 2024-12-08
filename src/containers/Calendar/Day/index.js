import './index.modules.sass'
import { format } from 'date-fns'
import { EVENT_TYPE } from '../../../data'

const Day = ({ day, events, handleDotClick }) => {
  const getEventsForDay = (day) => {
    return events.filter((event) => {
      const eventDate = new Date(event.dateTime)
      return eventDate.toDateString() === day.toDateString()
    })
  }
  const eventsForDay = getEventsForDay(day)
  const getEventBadgeColor = (t) => {
    const event = EVENT_TYPE[t]
    return event ? event.bgColor : 'gray'
  }

  return (
    <div className="day">
      <>{format(day, 'd')}</>
      <div className="dotList">
        {eventsForDay.length > 0
          ? eventsForDay.map((item) => {
              return (
                <div
                  className="dotList__item"
                  key={item.id}
                  onClick={(e) => handleDotClick(e, item)}
                  style={{ backgroundColor: getEventBadgeColor(item.type) }}
                ></div>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default Day
