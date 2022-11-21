import * as Styled from "./styles"
import { GridImageInterface } from "../../interfaces/GridImage.interface"
export const GridImage = ({ data, image }: GridImageInterface) => {
  return (
    <Styled.Container>
      <Styled.Grid>
        {data?.map((image) => (
          <>
              <Styled.Image src={image.src.large}  />
          </>
        ))}
      </Styled.Grid>
    </Styled.Container>
  )
}
