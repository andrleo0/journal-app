import { TurnedInNot } from "@mui/icons-material"
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"


export const SideBarItem = () => {
  return (
    <ListItem key={ note.id } disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <TurnedInNot/>
            </ListItemIcon>
            <Grid>
                <ListItemText primary={ note.title } />
                <ListItemText secondary="nota" />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
