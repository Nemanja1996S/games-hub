import { Button, HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import { useColorMode } from "./ui/color-mode"

const Navbar = () => {
    const { toggleColorMode } = useColorMode()
  return (
    <HStack>
        <Image src={logo} boxSize="60px"></Image>
        <Text>Navbar</Text>
        <Button onClick={toggleColorMode}>ColorMode</Button>
    </HStack>
  )
}

export default Navbar