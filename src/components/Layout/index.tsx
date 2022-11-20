import { Menu } from "../Menu"
import { AuxProps } from "../../interfaces/AuxProps.interface"
import { Footer } from "../Footer"
export const Layout = ({children}: AuxProps) => {
    return(
        <>
        <Menu/>
        {children}
        <Footer/>
        </>
        
    )
}