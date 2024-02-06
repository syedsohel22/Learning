import { Stack, Input, Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singInfn } from "../redux/authReducer/action";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignIn = () => {
    //
    console.log(email, Password);
    const data = { email: email, password: Password };
    dispatch(singInfn(data));
    setEmail("");
    setPassword("");
    // navigate("/board");
  };
  return (
    <Box w={"100%"} margin={"auto"}>
      <Stack w="30%" border="1px solid black" p={"10px"} spacing="24px">
        <Input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handleSignIn}>Sign In</Button>
      </Stack>
    </Box>
  );
};

export default SignIn;
