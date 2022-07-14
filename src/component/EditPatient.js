import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


export const EditPatient = () => {
    const location = useLocation();
    const navigate = useNavigate();

  const [firstName, setFirstName] = React.useState(location.state.row.row.firstName);
  const [lastName, setLastName] = React.useState(location.state.row.row.lastName);
  const [age, setAge] = React.useState(location.state.row.row.age);
  const [DateofBirth, setDob] = React.useState(location.state.row.row.DateofBirth);
  const [disease, setDisease] = React.useState(location.state.row.row.disease);
  const [contactNo, setContactNo] = React.useState(location.state.row.row.contactno);
  const [altcontactNo, setAltContactNo] = React.useState(location.state.row.row.altcontactno);
  const [Address, setAddress] = React.useState(location.state.row.row.Address);
  const [city, setCity] = React.useState(location.state.row.row.city);
  const [state, setState] = React.useState(location.state.row.row.State);
  const [zipcode, setZipcode] = React.useState(location.state.row.row.Zipcode);
  const [country, setCountry] = React.useState(location.state.row.row.Country);

  useEffect(() => {
    if (location.state) {
        console.log("location", location.state.row.row)
    }
}, [location]);

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'center',margin: "30px"}}>
        <Box sx={{ border: 4 }}>
          <React.Fragment>
            <Typography style={{ paddingTop: "20px", paddingBottom: "30px" }} variant="h4" gutterBottom>
              Edit Patient Details
            </Typography>
            <Grid style={{ paddingLeft: "40px", paddingRight: "40px", paddingBottom: "50px" }} container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
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
                  id="lastName"
                  name="lastName"
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
                  id="lastName"
                  name="lastName"
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
                  id="lastName"
                  name="lastName"
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
                  id="lastName"
                  name="lastName"
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
                  id="address2"
                  name="address2"
                  label="Contact No*"
                  fullWidth
                  autoComplete="address-line2"
                  variant="standard"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Alt Contact No*"
                  fullWidth
                  autoComplete="address-line2"
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
                  autoComplete="shipping address-line1"
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
                  autoComplete="shipping address-level2"
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
                  autoComplete="shipping postal-code"
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
                  autoComplete="shipping country"
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
                    firstname: firstName, lastName: lastName, age: age, DateofBirth: DateofBirth, disease: disease,
                    contactNo: contactNo, altcontactNo: altcontactNo, Address: Address, city: city, state: state,
                    zipcode: zipcode, country: country
                  }
                })
            }>Update</Button>

          </React.Fragment>
        </Box>
      </Box>
    </div>
  )
}
