import React from 'react';
import { Box as B } from 'theme-ui'

const Box = ({children}) => (
    <B
        p={4}
        color='white'
        bg='primary'>
        {children}
    </B>
);

export default Box;