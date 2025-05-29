import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import { listSX } from '@/shared/style'
import ListItem from '@mui/material/ListItem'

export const AboutCard = () => {
  return (
    <>
      <Typography variant="body1" color="secondary" component="h3">
        Some of the gear I use:
      </Typography>
      <List sx={listSX}>
        <ListItem>
          <Typography variant="body1" color="secondary">
            Canon EOS R7 (wildlife camera)
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1" color="secondary">
            Canon 5D MKIV (everyday camera)
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1" color="secondary">
            Sigma 120-300mm 2.8 Sport
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1" color="secondary">
            Sigma 70-200mm 2.8 Sport
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1" color="secondary">
            Sigma 105mm 2.8 Macro
          </Typography>
        </ListItem>
      </List>
      <Typography variant="body1" color="secondary" mb={2}>
        Hiking, camping and the great outdoors have been a passion of mine for a
        number of years. Regularly getting out and about in the hills of the
        Peak District enabled me to see some spectacular sights and scenes. The
        only unfortunate thing about combining photography with hiking is the
        backpack weight!
      </Typography>
      <Typography variant="body1" color="secondary" mb={2}>
        During my early experimental photography, I discovered a photographer
        who has over the years become my idol, his name is Morten Hilmer. After
        watching his YouTube videos and seeing his passion for nature and
        wildlife, I was inspired and filled with such love of all the things the
        natural world has to offer.
      </Typography>
    </>
  )
}
