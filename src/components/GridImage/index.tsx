import * as Styled from "./styles"
import { Image } from "./styles"
import { GridImageInterface } from "../../interfaces/GridImage.interface"
import { ModalContent } from "../ModalImage"
import { useState } from "react"
import { Download } from "@mui/icons-material"

export const GridImage = ({ data }: GridImageInterface) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [imageState, setImageState] = useState<string>("")


  return (
    <Styled.Container>
      {isOpen && (
        <ModalContent onClose={() => setIsOpen(false)} image={imageState} />
      )}

      <Styled.Grid>
        {data.map((image, index) => (
          <Styled.ContentImage key={index}>
            <Image
              alt={image.alt}
              src={image.src.large}
              onClick={() => {
                setIsOpen(true), setImageState(image.src.large)
              }}
            />
      
            <Styled.MenuContent>
              <a
                href={image.photographer_url}
                target={"_blank"}
                rel="noreferrer"
              >
                <p>
                  By:
                  {image.photographer}
                </p>
              </a>
              <a href={image.url} target={"_blank"} rel="noreferrer">
                <Download fontSize="large" />
              </a>
            </Styled.MenuContent>
          </Styled.ContentImage>
          
        ))}
      </Styled.Grid>
    </Styled.Container>
  )
}
