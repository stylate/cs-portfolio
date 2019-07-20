import styled from 'styled-components';

export const Head = styled.h2`
    font-family: 'EB Garamond', sans-serif;
    opacity: 0.9;
    font-weight: 100;
    letter-spacing: 1.2px;
    font-size: 48px;
    padding-left: 0.65em;
    padding-top: 1em;

    @media screen and (max-width: 599px) {
        padding-top: 3em;
        font-size: 36px;
    }

    @media screen and (min-width: 600px) {
        padding-top: 8em;
    }

    @media screen and (min-width: 1200px) {
        padding-left: 1.3em;
        padding-top: 5em;
    }

    @media screen and (min-width: 1800px) {
        padding-top: 8em;
    }
`

export const Text = styled.div`
    font-weight: 100;
    padding-left: 1.9em;
    padding-top: 0em;

    @media screen and (max-width: 599px) {
        font-size: 12px;
        width: 70%;
    }

    @media screen and (min-width: 600px) {
        padding-left: 2em;
        width: 50%;
    }

    @media screen and (min-width: 1200px) {
        padding-left: 4em;
        padding-top: 0em;
        width: 45%;
    }
`

export const Mini = styled.p`
    font-size: 12px;
    line-height: 0.7;

    @media screen and (max-width: 599px) {
        font-size: 10px;
    }
`

