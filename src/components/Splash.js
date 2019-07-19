import React from 'react';
import styled from 'styled-components';
import Directory from './Directory';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// this is text for the splash page.

const Text = styled.div`
    font-weight: 100;
    padding-left: 4em;
    padding-top: 0em;
    width: 45%;
`

const Mini = styled.p`
    font-size: 12px;
    line-height: 0.7;
`

const blurb = "currently a fourth year student at UC Berkeley studying computer science. " +  
"interests lie heavily within design, digital media, security, and computer graphics."

const Splash = (
    <Text>
        <p>{blurb}</p>
        <Mini>previously >> akamai, fox networks</Mini>
        <Mini>project directory >> here</Mini>
    </Text>
);

export default Splash;