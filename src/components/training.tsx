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
import { LoremIpsum } from 'lorem-ipsum'
import { useState } from 'react'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

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

export const Training = () => {
  const [expanded, setExpanded] = useState(false)
  const [selected, setSelected] = useState(0)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card
      sx={{
        padding: '3px',
        margin: '10px',
        background: '#EDA901',
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
          <Flex sx={{ flexDirection: 'column' }}>
            <Typography variant='caption'>Training recommendations from</Typography>
            <Typography variant='subtitle2'>The Knights of Safety Academy</Typography>
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
        <Flex sx={{ flexDirection: 'column', gap: '20px' }}>
          <Typography variant='caption'>
            View a list of recommended training courses tailored to the hazards and controls above by identifying
            whether you are a Risk Assessor or Task Operator.
          </Typography>

          <Flex
            sx={{
              background: '#EAEAEA',
              padding: '5px',
              width: '90%',
              height: '150px',
              justifyContent: 'space-between',
              borderRadius: '10px',
              alignSelf: 'center'
            }}
          >
            <Button
              onClick={() => setSelected(0)}
              style={{
                height: '30px',
                width: '55%',
                borderRadius: '10px',
                color: '#000',
                ...(selected === 0 && { background: '#EDA901' })
              }}
            >
              risk assessor
            </Button>
            <Button
              onClick={() => setSelected(1)}
              style={{
                height: '30px',
                width: '45%',
                borderRadius: '10px',
                color: '#000',
                ...(selected === 1 && { background: '#EDA901' })
              }}
            >
              task operator
            </Button>
          </Flex>
        </Flex>
      </CardContent>

      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent sx={{ backgroundColor: '#fff', color: '#000', padding: '0px 20px 20px' }}>
          <Flex sx={{ flexDirection: 'column', gap: '20px' }}>
            <Divider />
            {Array.from({ length: 4 }).map((_, i) => (
              <>
                <Flex key={i} sx={{ gap: '20px' }}>
                  <img style={{ width: '30%' }} src='/public/assets/images/IACS-logo.png' alt='course-logo' />
                  <Flex sx={{ flexDirection: 'column', gap: '20px' }}>
                    <Typography variant='subtitle2'>
                      {lorem.generateWords(5)}
                      <span
                        style={{
                          border: '1px solid #F2B705',
                          color: '#F2B705',
                          fontSize: '8px',
                          padding: '3px 8px',
                          borderRadius: '10px',
                          margin: '5px'
                        }}
                      >
                        FREE
                      </span>
                    </Typography>
                    <Typography variant='caption'>{lorem.generateParagraphs(1)}</Typography>
                    <Button sx={{ background: '#F2B705', color: '#000', borderRadius: '10px', width: '80%' }}>
                      Enroll for free
                    </Button>
                  </Flex>
                </Flex>
                <Divider />
              </>
            ))}
          </Flex>

          <Flex sx={{ padding: '20px 0px' }}>
            <Checkbox size='large' />
            <Typography variant='caption'>
              By ticking this box, I confirm fully understanding of hazards of the substance. I have been taught how to
              implement the proper safety controls by a separate course provider or with the courses above.
            </Typography>
          </Flex>
        </CardContent>
      </Collapse>
    </Card>
  )
}
