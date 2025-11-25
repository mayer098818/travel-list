import { useState } from 'react'

export type ListProps = {
  id: number
  count: string
  item: string
  packed: boolean
}
type FormProps = {
  sendItem?: (arg: ListProps) => void
  setItems?: React.Dispatch<React.SetStateAction<ListProps[]>>
  onAddItems: (arg: ListProps) => void
}
const Form: React.FC<FormProps> = ({ onAddItems }) => {
  const bagCounts = ['1', '2', '3', '4']
  const [bagCount, setBagCount] = useState('1')
  const [content, setContent] = useState('')
  // 把list这个提升到app上
  //   const [list, setList] = useState<ListProps[]>([])
  //   function handleAddItems(item: ListProps) {
  //     setItems(prev => [...prev, item])
  //   }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!content) return
    const newItem = { id: Date.now(), count: bagCount, item: content, packed: false }
    onAddItems(newItem)
    setContent('')
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value
    const englishOnly = input.replace(/[^a-zA-Z]/g, '')
    setContent(englishOnly)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <span style={{ display: 'inline-block', marginRight: '160px' }}>What do you need for your trip?</span>
        <select
          value={bagCount}
          onChange={e => {
            setBagCount(e.target.value)
          }}>
          {bagCounts.map(b => (
            <option value={b} key={b}>
              {b}
            </option>
          ))}
        </select>
        <input type="text" value={content} onChange={handleChange} />
        <button type="submit">ADD</button>
      </form>
    </>
  )
}

export default Form
