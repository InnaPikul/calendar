import { useRef, useEffect, useState } from 'react'
import EventPopup from '../../../components/EventPopup'
import './index.modules.sass'
import {
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  getDay,
  format,
  subDays,
  addDays,
} from 'date-fns'
import Day from '../Day'

const Month = ({ month, events }) => {
  const days = eachDayOfInterval({
    start: startOfMonth(month),
    end: endOfMonth(month),
  })
  const weeekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const startDayOffset = getDay(startOfMonth(month))
  const totalDaysInGrid = 35
  const totalInactiveDays = totalDaysInGrid - days.length

  const previousMonthDaysCount = startDayOffset
  const previousMonthDays = Array.from({ length: previousMonthDaysCount }).map((item, i) =>
    subDays(startOfMonth(month), previousMonthDaysCount - i)
  )

  const nextMonthDaysCount = totalInactiveDays - previousMonthDaysCount
  const nextMonthDays = Array.from({ length: nextMonthDaysCount }).map((item, i) =>
    addDays(endOfMonth(month), i + 1)
  )

  const popupContainer = useRef()
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 })
  const [selectedEvent, setSelectedEvent] = useState(null)

  const handleDotClick = (event, item) => {
    setSelectedEvent(item)
    setIsPopupOpen(true)

    const rect = event.target.getBoundingClientRect()
    const viewportWidth = window.innerWidth

    setTimeout(() => {
      if (!popupContainer.current) return
      const popupRect = popupContainer.current.getBoundingClientRect()
      let top = rect.top + window.scrollY + rect.height + 5
      let left = rect.left + window.scrollX + rect.width / 2
      if (left + popupRect.width > viewportWidth) {
        left = viewportWidth - popupRect.width - 10
      }
      if (left < 0) {
        left = 10
      }
      setPopupPosition({ top, left })
    }, 0)
  }

  const handleClickOutside = (event) => {
    if (popupContainer.current && !popupContainer.current.contains(event.target)) {
      setIsPopupOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return (
    <div className="month">
      {isPopupOpen && selectedEvent ? (
        <EventPopup
          ref={popupContainer}
          btnText={'Add event'}
          eventInfo={selectedEvent}
          top={popupPosition.top}
          left={popupPosition.left}
        />
      ) : null}
      <div className="month__inner">
        <h2 className="month__name">{format(month, 'MMMM')}</h2>
        <div className="month__grid">
          <div className="month__gridHeader">
            {weeekdays.map((day) => (
              <div key={day} className="weekday">
                {day}
              </div>
            ))}
          </div>
          <div className="month__gridBody">
            {previousMonthDays.map((day) => (
              <div key={`prev-${day}`} className="day day--inactive">
                {format(day, 'd')}
              </div>
            ))}
            {days.map((day) => {
              return <Day key={day} day={day} events={events} handleDotClick={handleDotClick} />
            })}
            {nextMonthDays.map((day) => (
              <div key={`next-${day}`} className="day day--inactive">
                {format(day, 'd')}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Month
