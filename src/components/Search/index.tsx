import * as Styled from './styles'
interface Search {
    searchChange: React.ChangeEventHandler<HTMLInputElement>,
    search: string,
    onSearch: React.MouseEventHandler<HTMLButtonElement>
}
export const Search = ({search, searchChange, onSearch}: Search) => {
return(
    <Styled.Form>
        <input onChange={searchChange} value={search} />
        <button onClick={onSearch}>Submit</button>
    </Styled.Form>
)

}