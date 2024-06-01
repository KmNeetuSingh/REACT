import {
  Box,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  Text,StackDivider,
  Button
} from "@chakra-ui/react";
import React from "react";
import {  useNavigate  } from "react-router-dom";

const TicketCard = ({id, title, status, priority }) => {
    const navigate=useNavigate();
  
  return (
    <Card >
      <CardHeader>
        <Heading size="md">Task Card</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Title 
            </Heading>
            <Text pt="2" fontSize="sm">
              { title}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Status
            </Heading>
            <Text pt="2" fontSize="sm">
              { status}
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
          <Button variant={"outline"} colorScheme="teal" onClick={()=>  navigate(`/tickets/view/${id}`)}>View Ticket</Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default TicketCard;
