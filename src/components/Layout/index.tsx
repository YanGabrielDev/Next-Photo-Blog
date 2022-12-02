import { HeaderMenu } from "../Menu"
import { AuxProps } from "../../interfaces/AuxProps.interface"
import { Footer } from "../Footer"
export const Layout = ({ children }: AuxProps) => {
  return (
    <>
      <div>
        <HeaderMenu />
        {children}
        <Footer />
      </div>
    </>
  )
}
