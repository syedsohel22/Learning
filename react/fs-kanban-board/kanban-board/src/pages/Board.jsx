import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";

const Board = () => {
  const arr = [
    {
      name: "Todo",
      tasks: [
        {
          title: "Build UI for onboarding flow",
          description: "",
          status: "Todo",
          subtasks: [
            {
              title: "Sign up page",
              isCompleted: true,
            },
            {
              title: "Sign in page",
              isCompleted: false,
            },
            {
              title: "Welcome page",
              isCompleted: false,
            },
          ],
        },
        {
          title: "Build UI for search",
          description: "",
          status: "Todo",
          subtasks: [
            {
              title: "Search page",
              isCompleted: false,
            },
          ],
        },
      ],
    },
    {
      name: "Doing",
      tasks: [
        {
          title: "Design settings and search pages",
          description: "",
          status: "Doing",
          subtasks: [
            {
              title: "Settings - Account page",
              isCompleted: true,
            },
            {
              title: "Settings - Billing page",
              isCompleted: true,
            },
            {
              title: "Search page",
              isCompleted: false,
            },
          ],
        },
        {
          title: "Add account management endpoints",
          description: "",
          status: "Doing",
          subtasks: [
            {
              title: "Upgrade plan",
              isCompleted: true,
            },
            {
              title: "Cancel plan",
              isCompleted: true,
            },
            {
              title: "Update payment method",
              isCompleted: false,
            },
          ],
        },
      ],
    },
    {
      name: "Done",
      tasks: [
        {
          title: "Conduct 5 wireframe tests",
          description:
            "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
          status: "Done",
          subtasks: [
            {
              title: "Complete 5 wireframe prototype tests",
              isCompleted: true,
            },
          ],
        },
      ],
    },
  ];
  return (
    <Flex h={"90vh"}>
      {/* Side Panel */}
      <Box flex="1" bg="#fff">
        <Center>
          <Text>ALL BOARDS ({arr.length})</Text>
          {arr.map((el, i) => {
            <Text key={i}>{el.name}</Text>;
          })}
        </Center>
      </Box>

      <Box flex="3" bg="#f4f7fd" h={"90vh"}>
        <Text>Box 3</Text>
        <Button bg={"#635fc7"} color={"#fff"}>
          ADD Board
        </Button>
      </Box>
    </Flex>
  );
};

export default Board;
