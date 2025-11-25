const Item = ({ item, onToggleItem, OnDeleteItem }: any) => {
  return (
    <>
      <li>
        <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
        <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
          {item.count} {item.item}
          {item.packed}
        </span>
        <button onClick={() => OnDeleteItem(item.id)}>❌</button>
      </li>
    </>
  )
}

export default Item
