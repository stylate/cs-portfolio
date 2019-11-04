import React from 'react';
import styled from 'styled-components';
import resume from '../assets/resume.pdf';

const Content = styled.div`
  min-width: 540px;
  max-width: 700px;
  padding: 64px;
  margin-left: 70px;
  font-weight: 100;
`;

const Heading = styled.h1`
  font-family: 'EB Garamond', sans-serif;
  font-size: 48px;
  font-weight: inherit;
  letter-spacing: 1.2px;
  opacity: 0.9;
`

const Text = styled.div`
  font-size: ${(props) => props.size === 'small' ? 12 : 16}px;
  line-height: ${(props) => props.size === 'small' ? 0.3 : 1.5}em;
  margin-bottom: 20px;
  width: 80%;
`;

const Link = styled.a`
  color: inherit;
`

const Splash = () => (
  <Content>
    <Heading>
      alan nguyen
    </Heading>
    <Text>
      currently a fourth year student at UC Berkeley studying computer science.
      interests lie heavily within design, digital media, social good, and computer graphics.
    </Text>
    <Text size='small'>
      previously >> akamai, fox networks
    </Text>
    <Text size='small'>
      cv >> <Link href={resume}>here</Link>
    </Text>
    <Text size='small'>
      github >> <Link href="http://github.com/stylate">here</Link>
    </Text>
  </Content>
);

export default Splash;
