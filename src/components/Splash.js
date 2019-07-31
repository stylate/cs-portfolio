import React from 'react';
import resume from '../assets/resume.pdf';
import { Text, Mini, Link } from './core/Index';

// this is text for the splash page.

const blurb = "currently a fourth year student at UC Berkeley studying computer science. " +  
"interests lie heavily within design, digital media, security, and computer graphics."

export const Splash = (
    <Text>
        <p>{blurb}</p>
        <Mini>previously >> akamai, fox networks</Mini>
        <Mini>cv >> <Link href={resume}>here</Link></Mini>
        <Mini>github >> <Link href="http://github.com/stylate">here</Link></Mini>
    </Text>
);