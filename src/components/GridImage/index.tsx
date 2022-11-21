import * as Styled from "./styles"
import { Image } from "./styles"
import { GridImageInterface } from "../../interfaces/GridImage.interface"
import { ModalContent } from "../ModalImage"
import { useState } from "react"
export const GridImage = ({ data, image }: GridImageInterface) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Styled.Container>
      <Styled.Grid>
        {data?.map((image) => (
          <div key={image.id}>
            <Image src={image.src.large} onClick={() => setIsOpen(true)} />

            {isOpen && (
              <ModalContent onClose={() => setIsOpen(false)}>
                <Image
                  src={image.src.large}
                  onClick={() => {
                    setIsOpen(true)
                    console.log(image.id)
                  }}
                />
              </ModalContent>
            )}
          </div>
        ))}
      </Styled.Grid>
    </Styled.Container>
  )
}
