import { Flex } from '@/shared/flex'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export const Confirmation = () => {
  return (
    <Card
      sx={{
        padding: '3px',
        margin: '10px',
        background: '#126deb',
        color: '#fff',
        borderRadius: '5px'
      }}
    >
      <CardHeader title={<Typography variant='subtitle2'>Confirmation</Typography>} sx={{ padding: '5px' }} />
      <CardContent
        sx={{
          backgroundColor: '#fff',
          padding: '20px',
          color: '#000'
        }}
      >
        <Flex sx={{ flexDirection: 'column', gap: '20px' }}>
          <Typography variant='caption'>
            I confirm that I have read & understood the content of the above assessment, and that I have been instructed
            on the hazards & control measures associated with the task including the task specific information. I also
            confirm that if the work environment changes or other hazards occur I will bring it to the attention of my
            immediate supervisor.
          </Typography>
          <TextField
            sx={{ '& fieldset': { border: 'none' }, background: '#ccc', borderRadius: '5px', height: '200px' }}
          />

          <Flex sx={{ gap: '20px', alignItems: 'center' }}>
            <Typography variant='subtitle2'>Signed By</Typography>
            <TextField
              sx={{
                flex: 1,
                '& fieldset': { border: 'none' },
                background: '#ccc',
                borderRadius: '5px'
              }}
              inputProps={{ style: { height: '10px', padding: '10px' } }}
            />
          </Flex>

          <Flex sx={{ gap: '20px', alignItems: 'center' }}>
            <Typography variant='subtitle2'>Signed On</Typography>
            <TextField
              sx={{
                flex: 1,
                '& fieldset': { border: 'none' },
                background: '#ccc',
                borderRadius: '5px'
              }}
              inputProps={{ style: { height: '10px', padding: '10px' } }}
            />
          </Flex>

          <Flex sx={{ justifyContent: 'space-around' }}>
            <Button sx={{ width: '120px', background: '#ccc', borderRadius: '10px' }}>clear</Button>
            <Button sx={{ width: '120px', background: '#126deb', color: '#fff', borderRadius: '10px' }}>save</Button>
          </Flex>
        </Flex>
      </CardContent>
    </Card>
  )
}
