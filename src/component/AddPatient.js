import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import styled from '@emotion/styled';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const MainDiv = styled.div`
 padding:90px;
 borderColor:black;
 `;

export const AddPatient = () => {

  const navigate = useNavigate();
  const [id, setId] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [DateofBirth, setDob] = React.useState("");
  const [disease, setDisease] = React.useState("");
  const [contactNo, setContactNo] = React.useState("");
  const [altcontactNo, setAltContactNo] = React.useState("");
  const [Address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zipcode, setZipcode] = React.useState("");
  const [country, setCountry] = React.useState("");



  return (
    <MainDiv>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ border: 4 }}>
          <React.Fragment>
            <Typography style={{ paddingTop: "20px", paddingBottom: "30px" }} variant="h4" gutterBottom>
              Add Patient
            </Typography>
            <Grid style={{ paddingLeft: "40px", paddingRight: "40px", paddingBottom: "50px" }} container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="First name"
                  name="First name"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="Last name"
                  name="Last name"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  id="Age"
                  name="Age"
                  label="Age"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="Date of Birth"
                  name="Date of Birth"
                  label="Date of Birth"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  value={DateofBirth}
                  onChange={(e) => setDob(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="Disease"
                  name="Disease"
                  label="Disease"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  value={disease}
                  onChange={(e) => setDisease(e.target.value)}

                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="Contact No"
                  name="Contact No"
                  label="Contact No*"
                  fullWidth
                  variant="standard"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="Alt Contact No"
                  name="Alt Contact No"
                  label="Alt Contact No*"
                  fullWidth
                  variant="standard"
                  value={altcontactNo}
                  onChange={(e) => setAltContactNo(e.target.value)}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  variant="standard"
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  variant="standard"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                  variant="standard"
                  value={state}
                  onChange={(e) => setState(e.target.value)}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  variant="standard"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  variant="standard"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}

                />
              </Grid>
            </Grid>
            <Button align="end" style={{ marginBottom: "20px" }} variant="contained" onClick={() =>
              navigate("/RegitrationForm",
                {
                  state: {
                    id: id, firstname: firstName, lastName: lastName, age: age, DateofBirth: DateofBirth, disease: disease,
                    contactNo: contactNo, altcontactNo: altcontactNo, Address: Address, city: city, state: state,
                    zipcode: zipcode, country: country
                  }
                })
            }>Register</Button>

          </React.Fragment>
        </Box>
      </Box>
    </MainDiv>
  )
}
