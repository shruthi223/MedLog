//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Container, Panel, Box, ButtonCircle, Label, Border, Input } from 'rebass';

//Doctor form component on the My doctor list page.
const DoctorForm = () => [
    <Box color="white">
        <Panel color='black'>
            <Panel.Header
                color='white'
                bg='black'
                fontSize={24}>
                Add a doctor
            </Panel.Header>
                <Container>
                    <Label mt={3} fontSize={18}>
                        First Name
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <Label mt={3} fontSize={18}>
                        Last Name
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <Label mt={3} fontSize={18}>
                        Clinic
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <Label mt={3} fontSize={18}>
                        Street Address
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <Label mt={3} fontSize={18}>
                        City
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <Label mt={3} fontSize={18}>
                        State
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>


                    <Label mt={3} fontSize={18}>
                        Zip code
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>


                    <Label mt={3} fontSize={18}>
                        Phone number
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <ButtonCircle
                        children='Add Doctor'
                        bg='blue'
                        mt={4}
                        mb={4}
                    />
                </Container>
        </Panel>
    </Box>

];

export default DoctorForm;