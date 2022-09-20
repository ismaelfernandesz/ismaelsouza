import styled, { keyframes } from 'styled-components'

export const ConstructionContainer = styled.main`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Developer = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 5rem;
    text-align: center;

    h1 {
        font-size: 5rem;
        color: ${({ theme }) => theme.blue};
        line-height: 1;
    }

    h2 {
        font-size: 2rem;
        font-weight: 400;
    }

`

const LoadingAnimation = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }

`

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;

    svg {
        animation: ${LoadingAnimation} 2s linear infinite;
    }
`
