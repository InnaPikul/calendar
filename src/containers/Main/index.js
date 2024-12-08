import Container from '../../components/Container'
import Calendar from '../Calendar'
import Filter from '../../components/Filter'
import './index.modules.sass'
import { eventsData, labels } from '../../data'
import { useState } from 'react'

const Main = () => {
  const [events, setEvents] = useState([...eventsData])
  const [activeTypes, setActiveTypes] = useState([])

  const handleLabelClick = (type) => {
    setActiveTypes((prevActiveTypes) => {
      const updatedActiveTypes = prevActiveTypes.includes(type)
        ? prevActiveTypes.filter((activeType) => activeType !== type)
        : [...prevActiveTypes, type]
      setEvents(() => {
        if (updatedActiveTypes.length === 0) {
          return eventsData
        }
        return eventsData.filter((item) => updatedActiveTypes.includes(item.type))
      })
      return updatedActiveTypes
    })
  }

  return (
    <main className="main">
      <Container>
        <h1 className="title">Calendar</h1>
        <Filter items={labels} handleLabelClick={handleLabelClick} activeTypes={activeTypes} />
        <Calendar year={2024} selectedMonths={6} events={events} />
      </Container>
    </main>
  )
}

export default Main
