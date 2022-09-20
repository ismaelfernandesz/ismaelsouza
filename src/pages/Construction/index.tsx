import { ConstructionContainer, Developer, LoadingContainer } from './styled'
import { CircleNotch } from 'phosphor-react'
import { Photo } from './components/Photo'

export function Construction () {
    return (
     <ConstructionContainer>
        <Photo />
        <Developer>
            <h1>Ismael Souza</h1>
            <h2>Desenvolvedor FullStack</h2>
        </Developer>
        <LoadingContainer>
            Em construção
            <CircleNotch size={20} weight="fill" />
        </LoadingContainer>
     </ConstructionContainer>   
    )
}