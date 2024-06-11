import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'

import { Flex } from '../shared/flex'

const HeaderContainer = styled('header')`
  display: flex;
  flex: 1;
  height: 80px;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  padding: 0px 10px;

  & img {
    width: auto;
    height: 30px;
  }
`

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Flex>
          <img src='/public/assets/images/logo.png' alt='logo' />
        </Flex>
        <Flex>
          <img src='/public/assets/images/IACS-logo.png' alt='IACS-logo' />
          <Divider orientation='vertical' flexItem sx={{ margin: '0px 10px', height: '100%' }} />
          <img src='/public/assets/images/isdss-logo-new-linear-sm.png' alt='IACS-linear-logo' />
        </Flex>
      </HeaderContainer>
      <Divider variant='middle' />
    </>
  )
}

export default Header
