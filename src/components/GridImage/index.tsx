import * as Styled from "./styles"
import { Image } from "./styles"
import { GridImageInterface } from "../../interfaces/GridImage.interface"
import { ModalContent } from "../ModalImage"
import { useState } from "react"
export const GridImage = ({ data, image }: GridImageInterface) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [state, setState] = useState<any>()

  const OpenImage = (image: any) => {
    return(
      <>
       {/* {isOpen && (
              <ModalContent onClose={() => setIsOpen(false)}>
                <Image
                  src={image}
                  
                  
                  />
              </ModalContent>
            )} */}
            {console.log(image)}
      
      
      </>
    )
  }

  return (
    <Styled.Container>
        {isOpen && (
              <ModalContent onClose={() => setIsOpen(false)} image={state}/>
                
            )}

      <Styled.Grid>
        {data?.map((image) => (
          
          <div key={image.id}>
            <Image src={image.src.large} onClick={() => {setIsOpen(true), setState(image.src.large)}} />
           
          </div>
        ))}
        {/* {OpenImage(state)} */}
      </Styled.Grid>
    </Styled.Container>
  )
}
