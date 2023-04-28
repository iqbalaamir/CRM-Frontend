import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Dashboard = () => {
    const [numLeads, setNumLeads] = useState(10);
    const [numServices, setNumServices] = useState(5);
    const [numContacts, setNumContacts] = useState(20);
  
    

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6">Leads</Typography>
              <Typography variant="h4">{numLeads}</Typography>
              
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6">Services</Typography>
              <Typography variant="h4">{numServices}</Typography>
              
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6">Contacts</Typography>
              <Typography variant="h4">{numContacts}</Typography>
              
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
  
};

export default Dashboard;
