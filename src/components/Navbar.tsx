import { HStack, Image, Switch } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import { useColorMode } from "./ui/color-mode"

const Navbar = () => {
    const { toggleColorMode } = useColorMode()
  return (
    <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px" borderRadius="15px"></Image>
        <Switch.Root colorPalette={"green"}>
        <Switch.HiddenInput onChange={toggleColorMode}/>
        <Switch.Control />
        <Switch.Label>Dark Mode</Switch.Label>
        </Switch.Root>
    </HStack>
  )
}

export default Navbar