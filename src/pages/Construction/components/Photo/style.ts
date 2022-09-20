import styled, { keyframes } from 'styled-components'

const fade = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`

export const PhotoContainer = styled.div`
    position: relative;
    width: 17.5rem;
    height: 17.5rem;
    background: ${({ theme }) => theme.gray};
    border-radius: 100%;
    padding: .5rem;
    

    img {
        width: 100%;
        height: 100%;
    }

    &:not(:hover) a.active {
        z-index: 2;
        img {
            animation: ${fade} 1s alternate;
        }
    }

    #teste1, #teste2, #teste3 {
        bottom: 50%;
        transform: translateY(50%) rotate(60deg);
        transform-origin: center center;
        img {
            transform: rotate(-60deg);
        }
    }

    &:hover #teste2 {
        transform: translateY(50%) rotate(20deg);
        img {
            transform: rotate(-20deg);
        }
    }

    &:hover #teste3 {
        transform: translateY(50%) rotate(-20deg);
        img {
            transform: rotate(20deg);
        }
    }
`

export const SocialNetwork = styled.a`
    position: absolute;
    width: 100%;
    height: 3rem;
    right: 0;
    transition: .5s ease-in-out;

    div {
        position: absolute;
        right: 0;
        transform: translateX(40%);
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        background: ${({ theme }) => theme.blue};
        transition: .5s ease-in-out;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
            transition: .5s ease-in-out;
            width: 1.5rem;
        }
    }
`

