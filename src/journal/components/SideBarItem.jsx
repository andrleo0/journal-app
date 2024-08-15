import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";


export const SideBarItem = ({ title , body , id , date , imageUrls = [] }) => {
    
    const newTitle = useMemo(() => {
        if( title === '' ) return 'Sin título';
        return title.length > 17 
        ? title.substring(0, 20) + '...'
        : title;
    }, [ title ]);

    const dispatch = useDispatch();

    const onClickNote = () => { 
        dispatch(setActiveNote({
            id,
            title,
            body,
            date,
            imageUrls
        }));
    }

    return (
        <ListItem disablePadding >
            <ListItemButton onClick={ onClickNote }>
                <ListItemIcon>
                    <TurnedInNot/>
                </ListItemIcon>
                <Grid container >
                    <ListItemText primary={ newTitle } />
                    <ListItemText secondary={ body } />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
