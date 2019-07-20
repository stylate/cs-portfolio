import React from 'react';
import MediaQuery from 'react-responsive';

const breakPoint = 1224;

export const Desktop = ({children}) => <MediaQuery minDeviceWidth={breakPoint}>{children}</MediaQuery>;