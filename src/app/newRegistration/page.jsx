"use client";
import React, { useState , useEffect} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function RegistrationModal() {
    const [open, setOpen] = useState(false);
    const [registrations, setRegistrations] = useState([
       
      ]
    );
    const [formData, setFormData] = useState({
        registrationNumber: "1000",
        firstName: "",
        middleName: "",
        lastName: "",
        emailId: "",
        phoneNumber: "",
        aadharNumber: "",
        panNumber: "",
        address1: "",
        address2: "",
        state: "",
        country: "",
        pinCode: "",
    });

    const [errors, setErrors] = useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setErrors({});
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let tempErrors = {};

        if (!formData.firstName) tempErrors.firstName = "First Name is required";
        if (!formData.lastName) tempErrors.lastName = "Last Name is required";
        if (!formData.emailId)
            tempErrors.emailId = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.emailId))
            tempErrors.emailId = "Email is not valid";

        if (!formData.phoneNumber)
            tempErrors.phoneNumber = "Phone Number is required";
        else if (!/^\d{10}$/.test(formData.phoneNumber))
            tempErrors.phoneNumber = "Phone Number is not valid";

        if (!formData.address1) tempErrors.address1 = "Address 1 is required";
        if (!formData.state) tempErrors.state = "State is required";
        if (!formData.country) tempErrors.country = "Country is required";
        if (!formData.pinCode)
            tempErrors.pinCode = "Pin Code is required";
        else if (!/^\d{6}$/.test(formData.pinCode))
            tempErrors.pinCode = "Pin Code is not valid";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }

            const response = await fetch("/api/Registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

        if (response.ok) {
            // alert("Registration successful!");
            setRegistrations([...registrations, formData]);  // Add new registration to the list
            setFormData({
                registrationNumber: "",
                firstName: "",
                middleName: "",
                lastName: "",
                emailId: "",
                phoneNumber: "",
                aadharNumber: "",
                panNumber: "",
                address1: "",
                address2: "",
                state: "",
                country: "",
                pinCode: "",
            });
            handleClose();
            GetUserRegister()
        } else {
            alert("Registration failed. Please try again.");
        }
    };


    const GetUserRegister = async() => {

        const response = await fetch("/api/Registration", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
           
        }).then((res) => res.json()).then((data) => {
            console.log(data.result)
           setRegistrations(data.result)
        })

    
    }


    useEffect(() => {
        GetUserRegister()
    }, [])
    
    return (
        <div>
           
            <Box sx={{ width: "200px" , alignContent:"flex-end"}}>
                <Button variant="contained" onClick={handleClickOpen} fullWidth>
                    New Registration 
                </Button>
           
            </Box>
            <TableContainer component={Paper} sx={{ mt: 4 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Address 1</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>Pin Code</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {registrations.map((registration, index) => (
                            <TableRow key={index}>
                                <TableCell>{registration.FirstName}</TableCell>
                                <TableCell>{registration.LastName}</TableCell>
                                <TableCell>{registration.EmailId}</TableCell>
                                <TableCell>{registration.PhoneNumber}</TableCell>
                                <TableCell>{registration.Address1}</TableCell>
                                <TableCell>{registration.State}</TableCell>
                                <TableCell>{registration.Country}</TableCell>
                                <TableCell>{registration.PinCode}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
                <DialogTitle>Registration Form</DialogTitle>
                <DialogContent>
                    <Box component="form" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="firstName"
                                    required
                                    fullWidth
                                    label="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    error={!!errors.firstName}
                                    helperText={errors.firstName}
                                    sx={{ mb: 2 }}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="middleName"
                                    fullWidth
                                    label="Middle Name"
                                    value={formData.middleName}
                                    onChange={handleChange}
                                    sx={{ mb: 2 }}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="lastName"
                                    required
                                    fullWidth
                                    label="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    error={!!errors.lastName}
                                    helperText={errors.lastName}
                                    sx={{ mb: 2 }}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="emailId"
                                    required
                                    fullWidth
                                    label="Email"
                                    type="email"
                                    value={formData.emailId}
                                    onChange={handleChange}
                                    error={!!errors.emailId}
                                    helperText={errors.emailId}
                                    sx={{ mb: 2 }}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="phoneNumber"
                                    required
                                    fullWidth
                                    label="Phone Number"
                                    type="tel"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    error={!!errors.phoneNumber}
                                    helperText={errors.phoneNumber}
                                    sx={{ mb: 2 }}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="aadharNumber"
                                    fullWidth
                                    label="Aadhar Number"
                                    value={formData.aadharNumber}
                                    onChange={handleChange}
                                    sx={{ mb: 2 }}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="panNumber"
                                    fullWidth
                                    label="PAN Number"
                                    value={formData.panNumber}
                                    onChange={handleChange}
                                    sx={{ mb: 2 }}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="address1"
                                    required
                                    fullWidth
                                    label="Address 1"
                                    value={formData.address1}
                                    onChange={handleChange}
                                    error={!!errors.address1}
                                    helperText={errors.address1}
                                    sx={{ mb: 2 }}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="address2"
                                    fullWidth
                                    label="Address 2"
                                    value={formData.address2}
                                    onChange={handleChange}
                                    sx={{ mb: 2 }}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="state"
                                    required
                                    fullWidth
                                    label="State"
                                    value={formData.state}
                                    onChange={handleChange}
                                    error={!!errors.state}
                                    helperText={errors.state}
                                    sx={{ mb: 2 }}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="country"
                                    required
                                    fullWidth
                                    label="Country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    error={!!errors.country}
                                    helperText={errors.country}
                                    sx={{ mb: 2 }}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="pinCode"
                                    required
                                    fullWidth
                                    label="Pin Code"
                                    value={formData.pinCode}
                                    onChange={handleChange}
                                    error={!!errors.pinCode}
                                    helperText={errors.pinCode}
                                    sx={{ mb: 2 }}
                                    size="small"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary" variant="contained">
                        Register
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
