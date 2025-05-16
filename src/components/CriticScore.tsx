import { Badge } from "@chakra-ui/react"

interface Props {
    score: number
}

const CriticScore = ({score} : Props) => {
  let color = score > 80 ? 'green' : score > 60 ? 'yellow' : ''
  return (
    <Badge color={color} fontSize="14px" borderRadius="4px" padding={2}>{score}</Badge>
  )
}

export default CriticScore