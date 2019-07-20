import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// cs184/194 writeups + github repos

const Projects = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const Project = styled.li`
    &:before {
        content: " > ";
    }
    line-height: 1.4;
`

const Directory = (
    <Projects>
        <Project>virtual reality</Project>
        <Project>cloth simulator</Project>
    </Projects>
);

export default Directory;
