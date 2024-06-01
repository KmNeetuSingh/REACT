import {
  Container,
  Button,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TicketCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const navigate = useNavigate();

  async function handleSubmit() {
    const newTicket = {
      title: title,
      Description: description,
      Assignee: assignee,
      status: status,
      priority: priority,
    };
    try {
      await axios({
        method: "post",
        url: "http://localhost:3000/tickets",
        data: newTicket,
      });
      console.log(newTicket)
      navigate("/tickets");
    } catch (error) {
      alert("Error occurred while posting ticket ");
    }
  }

  return (
    <Container mt={4}>
      <Heading>Create Your Own Ticket</Heading>
      <VStack spacing={4} mt={6}>
        <Input
          placeholder="Enter Title"
          focusBorderColor="teal.400"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Enter Description"
          focusBorderColor="teal.400"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Select
          placeholder="Select Assignee"
          onChange={(e) => setAssignee(e.target.value)}
        >
          <option value="ayush">Ayush</option>
          <option value="manu">Manu</option>
          <option value="ankur">Ankur</option>
          <option value="arpit">Arpit</option>
          <option value="rajiv">Rajiv</option>
        </Select>
        <Select
          placeholder="Select Status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="completed">Completed</option>
          <option value="progress">Progress</option>
          <option value="pending">Pending</option>
        </Select>
        <Select
          placeholder="Select Priority"
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </Select>
        <Button colorScheme="teal" variant={"outline"} onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </Container>
  );
};

export default TicketCreate;
