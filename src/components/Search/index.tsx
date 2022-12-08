import * as Styled from './styles'
import SearchIcon from '@mui/icons-material/Search'
interface Search {
    searchChange: React.ChangeEventHandler<HTMLInputElement>,
    search: string,
    onSearch: React.MouseEventHandler<HTMLButtonElement> | any 
}

export const Search = ({search, searchChange, onSearch}: Search) => {
return(
    <Styled.Container>
        <Styled.ContentForm>
        <Styled.Form onSubmit={onSearch}>
        <Styled.Button><SearchIcon/></Styled.Button>
        <Styled.Input onChange={searchChange} value={search} type='text' placeholder='Pesquisar...'/>
        </Styled.Form>
        </Styled.ContentForm>
    </Styled.Container>
)

}