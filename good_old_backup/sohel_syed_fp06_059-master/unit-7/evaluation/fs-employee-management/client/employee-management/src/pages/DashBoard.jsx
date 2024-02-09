import { Stack, Heading, Box, Button, Flex } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { getEmployeeFn } from "../redux/employeeReducer/action";
import { useDispatch, useSelector } from "react-redux";

const DashBoard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployeeFn());
  }, []);

  const { isLoading, isError, emp } = useSelector(
    (state) => state.employeeReducer
  );
  console.log(isLoading, isError, emp);
  return (
    <Stack>
      <Box>
        <Heading>Employee Management Software</Heading>
      </Box>
      <Flex>
        <Button>Add Employee</Button>
        <Button>Logout</Button>
      </Flex>
      <Box>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>No.</Th>
                <Th>First Name</Th>
                <Th>last Name</Th>
                <Th>Email</Th>

                <Th>Salary</Th>
                <Th>Date</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  );
};

export default DashBoard;
