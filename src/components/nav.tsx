import MenuIcon from '@mui/icons-material/Menu'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import { Flex } from '../shared/flex'

const NavContainer = styled('div')`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  height: 60px;
  justify-content: space-between;
  align-content: center;
  padding: 20px;
`

const Nav = () => {
  return (
    <>
      <NavContainer>
        <Flex style={{ flexDirection: 'column' }}>
          <Typography variant='body1' fontWeight='bold'>
            COSHH Risk Assessment
          </Typography>
          <Typography variant='caption'>for Industry Cleaner 500ml</Typography>
        </Flex>
        <Flex style={{ justifyContent: 'flex-end', flexWrap: 'wrap', flex: 0.3, alignItems: 'center' }}>
          <MenuIcon fontSize='large' />
        </Flex>
      </NavContainer>
      <Divider variant='middle' />
    </>
  )
}

export default Nav
