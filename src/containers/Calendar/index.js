import { startOfYear, endOfYear, eachMonthOfInterval } from 'date-fns'
import './index.modules.sass'
import Month from './Month'

const Calendar = ({ year, selectedMonths, events }) => {
  const allMonths = eachMonthOfInterval({
    start: startOfYear(new Date(year, 0)),
    end: endOfYear(new Date(year, 0)),
  })
  const months = allMonths.slice(-selectedMonths)

  return (
    <div className="calendar">
      {months.map((month) => (
        <Month key={month} month={month} events={events} />
      ))}
    </div>
  )
}

export default Calendar
