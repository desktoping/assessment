import { Flex } from '@/shared/flex'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Checkbox from '@mui/material/Checkbox'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { ReactNode, useState } from 'react'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.short
  })
}))

type StateCardData = {
  readonly riskLevel: string
  readonly riskLevelMessage: string
  readonly icons: readonly Record<string, string>[]
  readonly agreement: string
  readonly subAgreement?: string
}

interface StateCardProps {
  readonly data: StateCardData
  readonly renderTopContent?: () => ReactNode
  readonly hasButton?: boolean
}

const riskLevelBgColorMap: Record<string, string> = {
  warning: 'linear-gradient(90deg, hsla(41, 56%, 74%, 1) 9%, hsla(23, 86%, 61%, 1) 100%)',
  danger: 'linear-gradient(90deg, hsla(0, 100%, 85%, 1) 6%, hsla(0, 100%, 58%, 1) 100%)',
  low: 'linear-gradient(90deg, hsla(111, 31%, 65%, 1) 6%, hsla(105, 100%, 28%, 1) 100%)'
}

export const StateCard = ({ data, hasButton, renderTopContent }: StateCardProps) => {
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card
      sx={{
        padding: '3px',
        margin: '10px',
        background: riskLevelBgColorMap[data.riskLevel],
        color: '#fff',
        borderRadius: '5px'
      }}
    >
      <CardHeader
        action={
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            <ExpandMoreIcon fontSize='large' sx={{ color: '#fff' }} />
          </ExpandMore>
        }
        title={
          <Flex sx={{ gap: '5px' }}>
            <Typography variant='subtitle1'>Rating Before Controls:</Typography>{' '}
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
              {data.riskLevelMessage}
            </Typography>
          </Flex>
        }
        sx={{ padding: '5px' }}
      />
      <CardContent
        sx={{
          backgroundColor: '#fff',
          padding: '20px',
          color: '#000',
          ...(expanded && { marginBottom: '-1px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }),
          ...(!expanded && { borderRadius: '5px' })
        }}
      >
        {typeof renderTopContent === 'function' ? (
          renderTopContent()
        ) : (
          <>
            <Typography variant='body2' sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
              Substance Information
            </Typography>

            <Flex sx={{ height: 15 }} />

            <Flex sx={{ flexWrap: 'wrap' }}>
              <Typography variant='subtitle2' sx={{ flex: 0.5 }}>
                Product Name
              </Typography>
              <Typography variant='body2' sx={{ flex: 1 }}>
                Industry Cleaner 500ml
              </Typography>
            </Flex>
            <Flex>
              <Typography variant='subtitle2' sx={{ flex: 0.5 }}>
                Product Code
              </Typography>
              <Typography variant='body2' sx={{ flex: 1 }}>
                0893 140
              </Typography>
            </Flex>
            <Flex>
              <Typography variant='subtitle2' sx={{ flex: 0.5 }}>
                Manufacturer
              </Typography>
              <Typography variant='body2' sx={{ flex: 1 }}>
                Wurth UK Ltd.
              </Typography>
            </Flex>
            <Flex>
              <Typography variant='subtitle2' sx={{ flex: 0.5 }}>
                SDS Number
              </Typography>
              <Typography variant='body2' sx={{ flex: 1 }}>
                9655096-00002
              </Typography>
            </Flex>

            <Typography variant='subtitle2' sx={{ flex: 0.5 }}>
              Hazard Symbols
            </Typography>
          </>
        )}
        {!expanded && (
          <Flex sx={{ gap: '25px', padding: '10px 0px' }}>
            {data.icons.map(({ icon }) => (
              <img
                src={`/public/assets/images/${icon}`}
                key={icon}
                alt={icon}
                style={{ height: '50px', width: 'auto' }}
              />
            ))}
          </Flex>
        )}
      </CardContent>

      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent sx={{ backgroundColor: '#fff', color: '#000', padding: '0px 20px 20px' }}>
          <Flex sx={{ gap: '20px', flexDirection: 'column', marginBottom: '20px' }}>
            {data.icons.map(({ icon, text }) => (
              <Flex key={icon} sx={{ gap: '20px', alignItems: 'center' }}>
                <img src={`/public/assets/images/${icon}`} style={{ height: '50px', width: 'auto' }} alt={icon} />
                <Typography variant='body2'>{text}</Typography>
              </Flex>
            ))}
          </Flex>
          <Divider />

          {data.subAgreement && (
            <Typography variant='subtitle2' sx={{ padding: '20px 0px 0px' }}>
              {data.subAgreement}
            </Typography>
          )}

          <Flex sx={{ padding: '20px 0px' }}>
            <Checkbox size='large' />
            <Typography variant='body2'>{data.agreement}</Typography>
          </Flex>

          {hasButton && (
            <>
              <Divider />
              <Flex sx={{ flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
                <Button sx={{ backgroundColor: 'orange', color: '#000', borderRadius: '20px' }} size='large'>
                  VIEW SAFETY DATA SHEET
                </Button>
                <Button sx={{ backgroundColor: 'orange', color: '#000', borderRadius: '20px' }} size='large'>
                  VIEW ONE PAGE ASSESSMENT PDF
                </Button>
              </Flex>
            </>
          )}
        </CardContent>
      </Collapse>
    </Card>
  )
}
