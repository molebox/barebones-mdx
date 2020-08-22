/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex as F } from 'theme-ui'

const Flex = ({children, sx}) => (
   <F sx={{...sx}}>
       {children}
   </F>
);

export default Flex;