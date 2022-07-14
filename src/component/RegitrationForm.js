import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export const RegitrationForm = () => {
  const rows = [{
    id: "1",
    firstName: "Frozen",
    lastName: "yoghurt",
    age: "24",
    disease: "Asthma",
    contactno: 1234567876,
    altcontactno: 9876543456,
    Address: "At post pune",
    city: "pune",
    State: "Maharashtra",
    Zipcode: 411015,
    Country: "India",
    DateofBirth:"16/8/1998"
  },
  {
    id: 2,
    firstName: "Alice",
    lastName: "Audrey",
    age: 25,
    disease: "cough",
    contactno: 1234567876,
    altcontactno: 9876543456,
    Address: "At post pune",
    city: "pune",
    State: "Maharashtra",
    Zipcode: 411015,
    Country: "India",
    DateofBirth:"16/8/1999"

  }, {
    id: 3,
    firstName: "Liam",
    lastName: "Brooke",
    age: 19,
    disease: "Toothache",
    contactno: 1234567876,
    altcontactno: 9876543456,
    Address: "At post pune",
    city: "pune",
    State: "Maharashtra",
    Zipcode: 411015,
    Country: "India",    
    DateofBirth:"16/8/1997"

  }, {
    id: 4,
    firstName: "Alyssa",
    lastName: "Alyssa",
    age: 20,
    disease: "Malaria",
    contactno: 1234567876,
    altcontactno: 9876543456,
    Address: "At post pune",
    city: "pune",
    State: "Maharashtra",
    Zipcode: 411015,
    Country: "India",    
    DateofBirth:"16/8/1990"
  }
  ];
  const [patientData, setPatientData] = React.useState(rows)

  const location = useLocation();
  const navigate = useNavigate();

React.useEffect(() => {
 if(location.state){
  console.log("location",location)
  let arr = [...rows]
  arr.push({
    firstName: location.state.firstname,
    lastName: location.state.lastName,
    age: location.state.age,
    disease: location.state.disease,
    contactno:location.state.contactNo,
    altcontactno:location.state.altcontactNo,
    Address:location.state.Address,
    city:location.state.city,
    State:location.state.state,
    Zipcode:location.state.zipcode,
    Country:location.state.country,
    id:location.state.id,
    DateofBirth:location.state.DateofBirth
  })
  console.log("arr", arr)
setPatientData(arr)
 }
}, [location]);

  return (
    <div style={{ paddingTop: "80px" }}>
      <Button align="end" style={{ marginBottom: "30px", marginLeft: "70rem" }} variant="contained" href="/AddPatient">Add Patient</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Patient ID</StyledTableCell>
              <StyledTableCell align="center">First Name</StyledTableCell>
              <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">Age</StyledTableCell>
              <StyledTableCell align="center">Disease</StyledTableCell>


            </TableRow>
          </TableHead>
          <TableBody>
            {patientData.map((row, index) => {
              console.log(row)
              return(<StyledTableRow onClick={() => navigate("/Details", { state: { row: row } })}
                key={index}>
                <StyledTableCell align="center" component="th" scope="row">{index}</StyledTableCell>
                <StyledTableCell align="center">{row.firstName}</StyledTableCell>
                <StyledTableCell align="center">{row.lastName}</StyledTableCell>
                <StyledTableCell align="center">{row.age}</StyledTableCell>
                <StyledTableCell align="center">{row.disease}</StyledTableCell>
              </StyledTableRow>)
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
