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
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Components/Loading";

const TicketEdit = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const { title: Title, Description, Assignee, priority, status } = data;

  async function getData(id) {
    setLoading(true);
    try {
      let res = await axios.get(`http://localhost:3000/tickets/${id}`);
      setLoading(false);
      setData(res?.data);
      // console.log(res?.data)
    } catch (error) {
      setLoading(false);
      setErr(true);

      alert("Something went wrong");
    }
  }
  // console.log("Data",data);
  useEffect(() => {
    getData(id);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  async function handleEdit() {
    const newTicket = {
      title: data.title,
      Description: data.Description,
      Assignee: data.Assignee,
      status: data.status,
      priority: data.priority,
    };
    
    setLoading(true)
    try {
      await axios({
        method: "put",
        url: `http://localhost:3000/tickets/${id}`,
        data: newTicket,
      });
      
      navigate("/tickets");
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setErr(true)
      alert("Error occurred while editing ticket ");
    }
  }

   
  return (
    <Container mt={4}>
      <Heading>Edit Your Ticket</Heading>
      <VStack spacing={4} mt={6}>
        <Input
          placeholder="Enter Title"
          focusBorderColor="teal.400"
          value={Title}
          onChange={(e) =>
            setData({
              ...data,
              title: e.target.value,
            })
          }
        />
        <Textarea
          placeholder="Enter Description"
          focusBorderColor="teal.400"
          value={Description}
          onChange={(e) => setData({ ...data, Description: e.target.value })}
        />
        <Select
          placeholder="Select Assignee"
          value={Assignee}
          onChange={(e) => setData({ ...data, Assignee: e.target.value })}
        >
          <option value="ayush">Ayush</option>
          <option value="manu">Manu</option>
          <option value="ankur">Ankur</option>
          <option value="arpit">Arpit</option>
          <option value="rajiv">Rajiv</option>
        </Select>
        <Select
          placeholder="Select Status"
          value={status}
          onChange={(e) => setData({ ...data, status: e.target.value })}
        >
          <option value="completed">Completed</option>
          <option value="progress">Progress</option>
          <option value="pending">Pending</option>
        </Select>
        <Select
          placeholder="Select Priority"
          value={priority}
          onChange={(e) => setData({ ...data, priority: Number(e.target.value) })}
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
        <Button colorScheme="teal" variant={"outline"} onClick={handleEdit}>
          Edit Ticket
        </Button>
      </VStack>
    </Container>
  );
};

export default TicketEdit;
