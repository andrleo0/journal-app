import { IconButton, Typography } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../view"


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Laboris consectetur nisi mollit nostrud. Sint eu commodo consectetur irure labore sunt officia id incididunt fugiat. Eu anim ut minim ipsum sint fugiat tempor minim voluptate culpa velit. Tempor cupidatat in incididunt proident ut nulla veniam dolor do. Voluptate est cillum reprehenderit nisi occaecat culpa.
      </Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}


      <IconButton
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
