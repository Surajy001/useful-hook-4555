import {
  Box,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { TfiShoppingCartFull } from "react-icons/tfi";
import axios from "axios";

export const getData = (url) => {
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
};

const Stats = (props) => {
  const { title, stat, icon } = props;

  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      boxShadow={"base"}
      borderRadius={"3px"}
      border={"1px solid #CBD5E0"}
      backgroundColor={"white"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"bold"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
};

export const Statistics = () => {
  const [user, setUser] = useState(0);
  const [data, setData] = useState(0);
  const [userData, setUserData] = useState([]);
  const [order, setOrder] = useState(0);

  useEffect(() => {

    getData("http://localhost:8080/products").then((res) => {
      setData(res.length);
    });

    getData("http://localhost:8080/UserDetails").then((res) => {
      setUser(res.length);
    });

    getData("http://localhost:8080/UserDetails").then((res) => {
      setUserData(res);
    });

  }, []);

  useEffect(() => {
    let count = 0;
    userData.forEach((el) => {
      count += el.placedOrder.length;
    });
    setOrder(count);
  }, [userData]);
  

  return (
    <>
      <Box
        fontFamily={
          "Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
        }
        maxW="7xl"
        mx={"auto"}
        pt={5}
        px={{ base: 2, sm: 12, md: 17 }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <Stats
            title={"All Users"}
            stat={user}
            icon={<BsPerson size={"3em"} />}
          />
          <Stats
            title={"Total Products"}
            stat={data}
            icon={<TfiShoppingCartFull size={"3em"} />}
          />
          <Stats
            title={"Total  Orders"}
            stat={order}
            icon={<FiShoppingCart size={"3em"} />}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Statistics;