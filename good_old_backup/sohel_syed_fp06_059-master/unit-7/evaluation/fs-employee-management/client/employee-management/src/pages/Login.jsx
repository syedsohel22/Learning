import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Box,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const dispatch = useDispatch;
  const handleSignup = () => {
    console.log(email, password, cpassword);
    dispatch();
  };
  const handleLogin = () => {
    dispatch();
    console.log(email, password);
  };
  return (
    <Stack>
      <Box w="40%" margin={"auto"} border="1px solid black" mt="10%">
        <Tabs>
          <TabList>
            <Tab>Signup</Tab>
            <Tab>Login</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Input
                placeholder={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                placeholder={"confirm password"}
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
              <Button onClick={handleSignup}>Signup</Button>
            </TabPanel>
            <TabPanel>
              <Input
                placeholder={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleLogin}>Login</Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Stack>
  );
};

export default Login;
