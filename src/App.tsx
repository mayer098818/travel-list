import { useState } from 'react'
import Form from './components/Form'
import Logo from './components/Logo'
import TravelList from './components/TravelList'
import type { ListProps } from './components/Form'
import Footer from './components/Footer'
function App() {
  const [list, setList] = useState<ListProps[]>([])
  const handleSendItem = (item: ListProps) => {
    setList(prev => [...prev, item])
    // 这里直接打印list不行，因为setList不会立即更新list，得在下次渲染
  }
  const handleChangeStatus = (id: number) => {
    setList(prev => prev.map(item => (item.id === id ? { ...item, packed: !item.packed } : item)))
  }
  const handleDeleteItem = (id: number) => {
    setList(prev => prev.filter(item => item.id !== id))
  }
  const handleClearList = () => {
    setList([])
  }
  return (
    <>
      <Logo />
      <Form sendItem={handleSendItem} />
      <TravelList list={list} onClearList={handleClearList} onChangeItem={handleChangeStatus} OnDeleteItem={handleDeleteItem} />
      <Footer list={list} />
    </>
  )
}

export default App
