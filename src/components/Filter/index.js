import './index.modules.sass'

const Filter = ({ items, handleLabelClick, activeTypes }) => {
  return (
    <div className="filter">
      {items.length > 0
        ? items.map((item) => {
            return (
              <div
                key={item.id}
                className={`filter__item label label--${item.type} ${activeTypes.includes(item.type) ? 'active' : ''}`}
                onClick={() => handleLabelClick(item.type)}
              >
                {item.name}
              </div>
            )
          })
        : null}
    </div>
  )
}

export default Filter
