import {
  Box,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  Text,
  StackDivider,
  Container,
  Button,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import axios from "axios";

const TicketView = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [err, setErr] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { title, status, priority, Description, Assignee } = data;

  async function getData(id) {
    setLoading(true);
    try {
      let res = await axios.get(`http://localhost:3000/tickets/${id}`);
      setData(res?.data);
      // console.log(res?.data)
      setLoading(false);
    } catch (error) {
      setErr(true);

      alert("Something went wrong-",error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData(id);
    
  }, [id]);

  function handleDelete(id){
    axios.delete(`http://localhost:3000/tickets/${id}`)
    navigate("/tickets")
  }

  if (loading) {
    return <Loading />;
  }


  return (
    <Container mt={4}>
      <Card>
        <CardHeader>
          <Heading size="md">Your Ticket</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Title
              </Heading>
              <Text pt="2" fontSize="sm">
                {title}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Description
              </Heading>
              <Text pt="2" fontSize="sm">
                {Description}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Assignee
              </Heading>
              <Text pt="2" fontSize="sm">
                {Assignee}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Status
              </Heading>
              <Text pt="2" fontSize="sm">
                {status}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Priority
              </Heading>
              <Text pt="2" fontSize="sm">
                {priority}
              </Text>
            </Box>
            <Flex  gap={4}>
              <Button
                variant={"outline"}
                colorScheme="teal"
                onClick={() => navigate(`/tickets/edit/${id}`)}
              >
                Edit
              </Button>
              <Button variant={"outline"} colorScheme="teal" onClick={() => handleDelete(id)}>
                Delete
              </Button>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
};

export default TicketView;
