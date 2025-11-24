import type { ListProps } from './Form'
interface FooterProps {
  list: ListProps[]
}
const Footer: React.FC<FooterProps> = ({ list }) => {
  if (!list.length) {
    return (
      <>
        <p className="stats">
          <em>Start adding some items to your packing list 🚀</em>
        </p>
      </>
    )
  }
  const sum = list.reduce((sum, item) => sum + Number(item.count), 0)
  const packedSum = list.reduce((sum, item) => (item.packed ? sum + Number(item.count) : sum), 0)
  let rate = 0
  if (sum) {
    rate = Math.ceil((packedSum / sum) * 100)
  }
  return (
    <>
      <footer className="stats">
        <em>{rate === 100 ? 'You got everything! Ready to go ✈️' : ` 💼 You have ${sum} items on your list, and you already packed ${packedSum} (${rate}%)`}</em>
      </footer>
    </>
  )
}

export default Footer
