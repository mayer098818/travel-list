const Item = ({ item, onToggleItem, deleteItem }: any) => {
  return (
    <>
      <li>
        <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
        <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
          {item.count} {item.item}
          {item.packed}
        </span>
        <button onClick={() => deleteItem(item.id)}>❌</button>
      </li>
    </>
  )
}

export default Item
