import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TicketCard from "../Components/TicketCard";
import Loading from "../Components/Loading";
import { useNavigate } from "react-router-dom";

const Tickets = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const [filterVal, setFilterVal] = useState("");
  const [sorting, setSorting] = useState("");

  async function getData(sorting, filterVal) {
    setLoading(true);
    setErr(false);
    try {
      let queryParams = {};
      if (filterVal) {
        queryParams.status = filterVal;
      }
      if (sorting) {
        queryParams._sort = "priority";
        queryParams._order = sorting;
      }

      let res = await axios.get("http://localhost:3000/tickets", {
        params: queryParams,
      });

      setLoading(false);
      setData(res?.data);
      // console.log(res?.data)
    } catch (error) {
      setLoading(false);
      setErr(true);

      alert("Something went wrong");
    }
  }

  useEffect(() => {
    getData(sorting, filterVal);
  }, [sorting, filterVal]);

  if (loading) {
    return <Loading />;
  }
  return (
    <Container maxW={"80%"} mt={4}>
      <HStack>
        <Select
          placeholder="Filter By Status"
          value={filterVal}
          w={"50%"}
          onChange={(e) => setFilterVal(e.target.value)}
        >
          <option value="completed">Completed</option>
          <option value="progress">Progress</option>
          <option value="pending">Pending</option>
        </Select>
        <Select
          w={"50%"}
          placeholder="Sort By priority"
          value={sorting}
          onChange={(e) => setSorting(e.target.value)}
        >
          <option value="asc">Low To High</option>
          <option value="desc">High to Low</option>
        </Select>
        <Button
          colorScheme="teal"
          variant={"outline"}
          float={"right"}
          onClick={() => navigate("/tickets/create")}
        >
          Create Ticket
        </Button>
      </HStack>

      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
        mt={16}
        spacing={10}
      >
        {data.map((card) => {
          return <TicketCard key={card.id} {...card} />;
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Tickets;
