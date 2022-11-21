import * as Styled from "./styles"
export const Menu = () => {
  return (
    <Styled.Container>
      <Styled.Menu>
        <Styled.Logo>
          <Styled.Image src="/Logo.png" />
          <Styled.Text>Logo</Styled.Text>
        </Styled.Logo>
        <Styled.MenuLink>
          <Styled.LinkMenu href={"/"}>HOME</Styled.LinkMenu>
          <Styled.LinkMenu href={"/About"}>ABOUT</Styled.LinkMenu>
          <Styled.LinkMenu href={"/About"}>GALLERY</Styled.LinkMenu>
        </Styled.MenuLink>
        <Styled.Social>
          <h1>ds</h1>
        </Styled.Social>
      </Styled.Menu>
    </Styled.Container>
  )
}
