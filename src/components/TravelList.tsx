import { useMemo, useState } from 'react'
import type { ListProps } from './Form'
import Item from './Item'
interface TravelListProps {
  list: ListProps[]
  onChangeItem: (arg: number) => void
  onDeleteItem: (arg: number) => void
  onClearList: () => void
}
const TravelList: React.FC<TravelListProps> = ({ list, onChangeItem, onClearList, onDeleteItem }) => {
  const [sortBy, setSortBy] = useState('input')
  function handleToggle(id: number) {
    onChangeItem(id)
  }
  const orderList: ListProps[] = useMemo(() => {
    if (sortBy === 'description') {
      return [...list].sort((a, b) => a.item.localeCompare(b.item))
    } else if (sortBy === 'input') {
      return [...list]
    } else if (sortBy === 'packed') {
      // packed true是1，false是0，1-0返回值>0,则a在b后，0-1<0，则a在b前
      return [...list].sort((a, b) => Number(a.packed) - Number(b.packed))
    } else {
      return []
    }
  }, [sortBy, list])
  function handleDeleteItem(id: number) {
    onDeleteItem(id)
  }
  return (
    <>
      <div className="list" style={{ height: '300px' }}>
        <ul>
          {orderList.map(item => (
            <Item key={item.id} item={item} onToggleItem={handleToggle} OnDeleteItem={handleDeleteItem} />
          ))}
        </ul>
        <div className="actions">
          <select
            value={sortBy}
            onChange={e => {
              setSortBy(e.target.value)
            }}>
            <option value="input"> Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={onClearList}>Clear list</button>
        </div>
      </div>
    </>
  )
}

export default TravelList
