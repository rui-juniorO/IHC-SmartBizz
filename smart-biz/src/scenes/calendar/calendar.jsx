import React, { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogEvent, setDialogEvent] = useState(null);

  const handleConfirmDialog = () => {
    if (dialogTitle.trim() !== "") {
      const calendarApi = dialogEvent.view.calendar;
      calendarApi.unselect();

      if (dialogEvent.event) {
        // Update existing event
        dialogEvent.event.setProp("title", dialogTitle);
      } else {
        // Create new event
        calendarApi.addEvent({
          id: `${dialogEvent.dateStr}-${dialogTitle}`,
          title: dialogTitle,
          start: dialogEvent.startStr,
          end: dialogEvent.endStr,
          allDay: dialogEvent.allDay,
        });
      }

      setDialogTitle(""); // Clear the dialog title
      setOpenDialog(false); // Close the dialog
    }
  };

  const handleDeleteEvent = () => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${dialogEvent.event.title}'`
      )
    ) {
      dialogEvent.event.remove();
      setDialogTitle(""); // Clear the dialog title
      setOpenDialog(false); // Close the dialog
    }
  };

  const handleCloseDialog = () => {
    setDialogTitle(""); // Clear the dialog title
    setOpenDialog(false); // Close the dialog
  };

  const handleDateClick = (selected) => {
    setDialogTitle(selected.dateStr);
    setDialogEvent(selected);
    setOpenDialog(true);
  };

  const handleEventClick = (selected) => {
    setDialogTitle(selected.event.title);
    setDialogEvent(selected);
    setOpenDialog(true);
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
               <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={() => handleEventClick({ event: event })}
                  >
                  Edit
              </Button>

              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog} PaperProps={{ style: { backgroundColor: '#ffffff' } }}>
        <DialogTitle style={{ color: '#000000' }}>{dialogTitle}</DialogTitle>
          <DialogContent style={{ color: '#000000' }}>
            <h4>Enter a title for your event</h4>
          <TextField
            label="Event Title"
            value={dialogTitle}
            onChange={(e) => setDialogTitle(e.target.value)}
            fullWidth
            margin="normal"
            
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmDialog} color="primary">
            Confirm
          </Button>
          {dialogEvent?.event && (
            <Button onClick={handleDeleteEvent} color="error">
              Delete
            </Button>
          )}
          <Button onClick={handleCloseDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Calendar;
