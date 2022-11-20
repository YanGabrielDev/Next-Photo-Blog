import * as Styled from './styles'
import { AuxProps } from '../../interfaces/AuxProps.interface'
export const Content = ({children}: AuxProps) => {
    return(
        <Styled.Container>
            {children}
        </Styled.Container>
    )
}