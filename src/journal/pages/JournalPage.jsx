import { useDispatch, useSelector } from "react-redux"
import { IconButton, Typography } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../view"
import { startNewNote } from "../../store/journal"


export const JournalPage = () => {

  const { isSaving , active } = useSelector( state => state.journal )
  const dispatch = useDispatch()

  const onCLickNewNote = () => {

    dispatch( startNewNote() );

  }

  return (
    <JournalLayout>
      {
        (!!active) ? <NoteView /> : <NothingSelectedView  />
      }
      <IconButton
        disabled={ isSaving }
        onClick={ onCLickNewNote }
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main' , opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined  sx={{ fontSize:30 }}/>
      </IconButton>
    </JournalLayout>
  )
}
