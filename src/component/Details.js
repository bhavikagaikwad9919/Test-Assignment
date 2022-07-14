import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { useNavigate } from "react-router-dom";

const MainDiv = styled.div`
 borderColor:black;
 `;

export const Details = () => {

    const location = useLocation();
    const navigate = useNavigate();



    useEffect(() => {
        if (location.state) {
            console.log("datalocation", location.state.row)
        }
    }, [location]);

    return (
        <MainDiv>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: "50px" }}>
                <Box sx={{ border: 4 }}>
                    <React.Fragment>
                        <Typography style={{ paddingTop: "20px", paddingBottom: "30px" }} variant="h4" gutterBottom>
                            Patient Details
                        </Typography>
                        <div style={{ display: "flex", marginLeft: "1150px" }}>
                            <div style={{ marginRight: "20px" }}>
                                <Button align="end" variant="contained" onClick={() => navigate("/EditPatient",{ state: { row: location.state} })}>Edit</Button>
                            </div>
                            <div>
                                <Button align="end" variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={() =>console.log("clicked")}>Delete</Button>
                            </div>
                        </div>
                        <div>
                        </div>

                        <Grid style={{ paddingLeft: "40px", paddingRight: "40px", paddingBottom: "50px", textAlign: "center" }} container spacing={6}>

                            <Grid item xs={12}><div>ID:{location.state.row.id}</div></Grid>
                            <Grid item xs={12}><div>First Name:{location.state.row.firstName}</div></Grid>
                            <Grid item xs={12}><div>Date Of Birth:{location.state.row.DateofBirth}</div></Grid>
                            <Grid item xs={12}><div>Last Name:{location.state.row.lastName}</div></Grid>
                            <Grid item xs={12}><div>Age:{location.state.row.age}</div></Grid>
                            <Grid item xs={12}><div>Disease:{location.state.row.disease}</div></Grid>
                            <Grid item xs={12}><div>Contact No:{location.state.row.contactno}</div></Grid>
                            <Grid item xs={12}><div>Alt Contact No:{location.state.row.altcontactno}</div></Grid>
                            <Grid item xs={12}><div>Address:{location.state.row.Address}</div></Grid>
                            <Grid item xs={12}><div>City:{location.state.row.city}</div></Grid>
                            <Grid item xs={12}><div>State/Province/Region:{location.state.row.State}</div></Grid>
                            <Grid item xs={12}><div>Zip / Postal code:{location.state.row.Zipcode}</div></Grid>
                            <Grid item xs={12}><div>Country:{location.state.row.Country}</div></Grid>
                        </Grid>
                    </React.Fragment>
                </Box>
            </Box>
        </MainDiv>

    )
}
