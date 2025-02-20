import { forwardRef } from 'react'
import { format } from 'date-fns'
import './index.modules.sass'
import '../Filter/index.modules.sass'
import { EVENT_TYPE } from '../../data'

const EventPopup = forwardRef((props, ref) => {
  const { eventInfo, btnText, top, left } = props
  return (
    <div className="eventPopup" ref={ref} style={{ top: top, left: left }}>
      <div className="eventPopup__header">
        <h3 className="eventPopup__title">Event</h3>
      </div>
      <div className="eventPopup__body">
        <div className="event">
          <div className="event__header">
            <h4 className="event__title">{eventInfo.title}</h4>
            <div className="event__edit">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.53999 19.0469C1.92999 19.0469 1.35999 18.8369 0.949987 18.4469C0.429987 17.9569 0.179987 17.2169 0.269986 16.4169L0.639987 13.1769C0.709987 12.5669 1.07999 11.7569 1.50999 11.3169L8.34205 4.08541C8.3534 4.07256 8.36519 4.06008 8.37741 4.04799L9.71999 2.62692C11.77 0.45692 13.91 0.39692 16.08 2.44692C18.25 4.49692 18.31 6.63692 16.26 8.80692L8.04999 17.4969C7.62999 17.9469 6.84999 18.3669 6.23999 18.4669L3.01999 19.0169C2.95895 19.0205 2.9005 19.0254 2.84324 19.0302C2.74099 19.0387 2.64254 19.0469 2.53999 19.0469ZM2.59999 12.3369L8.51838 6.0653C9.25799 8.03436 10.8657 9.55618 12.8709 10.1898L6.94999 16.4569C6.74999 16.6669 6.26999 16.9269 5.97999 16.9769L2.75999 17.5269C2.42999 17.5769 2.15999 17.5169 1.97999 17.3469C1.79999 17.1769 1.71999 16.9069 1.75999 16.5769L2.12999 13.3369C2.16999 13.0469 2.39999 12.5469 2.59999 12.3369ZM15.16 7.76692L14.055 8.93656C11.9019 8.57138 10.1855 6.93318 9.71286 4.79952L10.81 3.63692C11.49 2.91692 12.16 2.43692 12.93 2.43692C13.55 2.43692 14.24 2.75692 15.04 3.52692C16.85 5.22692 16.4 6.44692 15.16 7.76692Z"
                  fill="#797979"
                />
              </svg>
            </div>
          </div>
          <p className="event__description">{eventInfo.description}</p>
          <address className="event__place">{eventInfo.place}</address>
          <div className="event__footer">
            <time className="event__time" dateTime={eventInfo.dateTime}>
              {format(eventInfo.dateTime, 'dd MMMM, HH:mm')}
            </time>
            <div className={`event__label label label--small label--${eventInfo.type}`}>
              {EVENT_TYPE[eventInfo.type].label}
            </div>
          </div>
        </div>
      </div>
      <div className="eventPopup__footer">
        <div className="button">{btnText}</div>
      </div>
    </div>
  )
})

export default EventPopup
