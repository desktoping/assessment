import { FC } from 'react'

import Header from '@/components/header'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { StateCard } from './components/card'
import Nav from './components/nav'
import { Training } from './components/training'
import { Confirmation } from './confirmation'
import { Flex } from './shared/flex'

const App: FC = () => {
  return (
    <>
      <Header />
      <Nav />

      <StateCard
        data={{
          icons: [
            { icon: 'GHS03.png', text: 'H22: Exteremely Flammable Aerosol' },
            { icon: 'GHS09-GUP.png', text: 'H336: Pressurized Container; May burst if heated' },
            {
              icon: 'GHS07.png',
              text: 'May cause drowsiness and dizziness; H315: Causes skin irritation; H317: May cause allergice skin reaction'
            },
            { icon: 'GHS10-AA1.png', text: 'H411: Toxic to aquatic life with long lasting effects' }
          ],
          riskLevel: 'warning',
          riskLevelMessage: 'MEDIUM RISK',
          agreement:
            'By ticking this box, I confirm that I have reviewed the selected SDS and the risk assessment to ensure all critical hazards and controls have been identified.'
        }}
        hasButton
      />

      <Flex
        sx={{
          borderRadius: '5px',
          border: '1px solid',
          margin: '10px',
          flexDirection: 'column',
          padding: '10px 20px',
          gap: '20px'
        }}
      >
        <Typography variant='body2' sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
          OWNER INFORMATION
        </Typography>
        <div>
          <Flex>
            <Typography variant='subtitle2' sx={{ flex: 0.5 }}>
              Company
            </Typography>
            <Typography variant='body2' sx={{ flex: 1 }}>
              Sevron Ltd.
            </Typography>
          </Flex>
          <Flex>
            <Typography variant='subtitle2' sx={{ flex: 0.5 }}>
              Assessed By
            </Typography>
            <Typography variant='body2' sx={{ flex: 1 }}>
              Sebastian Shaw
            </Typography>
          </Flex>
          <Flex>
            <Typography variant='subtitle2' sx={{ flex: 0.5 }}>
              Assessed On
            </Typography>
            <Typography variant='body2' sx={{ flex: 1 }}>
              07/07/2022
            </Typography>
          </Flex>
          <Flex>
            <Typography variant='subtitle2' sx={{ flex: 0.5 }}>
              Review Date
            </Typography>
            <Typography variant='body2' sx={{ flex: 1 }}>
              On SDS update
            </Typography>
          </Flex>
        </div>
      </Flex>

      <Flex sx={{ padding: '0px 20px' }}>
        <Typography variant='body2' sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
          REGULATORY STATEMENTS & CONTROLS
        </Typography>
      </Flex>

      <StateCard
        data={{
          icons: [
            { icon: 'GHS03.png', text: 'H22: Exteremely Flammable Aerosol' },
            { icon: 'GHS10-AA1.png', text: 'H411: Toxic to aquatic life with long lasting effects' }
          ],
          riskLevel: 'danger',
          riskLevelMessage: 'HIGH RISK',
          subAgreement:
            'I have read and understood the given hazard and controls needed for the safe use of this substance.',
          agreement:
            'By ticking this box, I confirm that I have been fully instructed on the hazards & controls associated with the use of this substance.'
        }}
        renderTopContent={() => (
          <Flex sx={{ flexDirection: 'column', gap: '20px' }}>
            <Flex sx={{ alignItems: 'center', gap: '20px' }}>
              <img src='/public/assets/images/CW119.png' height='60' width='auto' alt='flammable' />
              <Typography>H222: Extremely Flammable Aerosol</Typography>
            </Flex>
            <Divider />
          </Flex>
        )}
      />

      <StateCard
        data={{
          icons: [
            { icon: 'GHS03.png', text: 'H22: Exteremely Flammable Aerosol' },
            { icon: 'GHS09-GUP.png', text: 'H336: Pressurized Container; May burst if heated' },
            { icon: 'GHS10-AA1.png', text: 'H411: Toxic to aquatic life with long lasting effects' }
          ],
          riskLevel: 'warning',
          riskLevelMessage: 'MEDIUM RISK',
          subAgreement:
            'I have read and understood the given hazard and controls needed for the safe use of this substance.',
          agreement:
            'By ticking this box, I confirm that I have been fully instructed on the hazards & controls associated with the use of this substance.'
        }}
        renderTopContent={() => (
          <Flex sx={{ flexDirection: 'column', gap: '20px' }}>
            <Flex sx={{ alignItems: 'center', gap: '20px' }}>
              <img src='/public/assets/images/CW120.png' height='60' width='auto' alt='flammable' />
              <Typography>H222: Extremely Flammable Aerosol</Typography>
            </Flex>
            <Divider />
          </Flex>
        )}
      />

      <StateCard
        data={{
          icons: [
            { icon: 'GHS03.png', text: 'H22: Exteremely Flammable Aerosol' },
            { icon: 'GHS09-GUP.png', text: 'H336: Pressurized Container; May burst if heated' }
          ],
          riskLevel: 'low',
          riskLevelMessage: 'LOW RISK',
          subAgreement:
            'I have read and understood the given hazard and controls needed for the safe use of this substance.',
          agreement:
            'By ticking this box, I confirm that I have been fully instructed on the hazards & controls associated with the use of this substance.'
        }}
        renderTopContent={() => (
          <Flex sx={{ flexDirection: 'column', gap: '20px' }}>
            <Flex sx={{ alignItems: 'center', gap: '20px' }}>
              <img src='/public/assets/images/CW121.png' height='60' width='auto' alt='flammable' />
              <Typography>H222: Extremely Flammable Aerosol</Typography>
            </Flex>
            <Divider />
          </Flex>
        )}
      />

      <Training />

      <Confirmation />

      <Flex sx={{ justifyContent: 'center', margin: '20px 0px' }}>
        <Button
          size='small'
          sx={{ color: '#f7cb79', border: '1px solid #f7cb79', borderRadius: '20px', width: '200px' }}
        >
          Back to top
        </Button>
      </Flex>
    </>
  )
}

export default App
