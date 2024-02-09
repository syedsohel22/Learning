import "./App.css";
import Avatar from "./Components/Avatar";
import ButtonEventListener from "./Components/ButtonEventListener";
import ConditionalRender from "./Components/ConditionalRender";
import RenderLisr from "./Components/RenderLisr";
import UserProfle from "./Components/UserProfle";

function App() {
  const usersData = [
    {
      name: "Sohel Syed",
      avatar_url: "https://avatars.githubusercontent.com/u/83800834?v=4",
      title: "Full Stack Developer",
      skillsets: [
        {
          icon: "https://w1.pngwing.com/pngs/711/379/png-transparent-green-grass-mongodb-database-documentoriented-database-dashboard-nosql-bson-javascript-thumbnail.png",
          description: "Mongo DB",
        },
        {
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
          description: "React Js",
        },
        {
          icon: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
          description: "Node js",
        },
        {
          icon: "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png",
          description: "Javascript",
        },
        {
          icon: "https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2019/07/image2-1.png?fit=600%2C315&ssl=1",
          description: "SQL",
        },
        {
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
          description: "Python",
        },
        {
          icon: "https://miro.medium.com/max/512/1*e6hkdDHSmasfubzxW-8jcg.jpeg",
          description: "React Hooks",
        },
        {
          icon: "https://toppng.com/uploads/preview/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994zqcpwozsvy.png",
          description: "React Native",
        },
      ],
    },
  ];

  return (
    <div className="App">
      <Avatar />
      <hr />
      <h1>CONDITIONAL RENDER</h1>
      <ConditionalRender
        src="https://avatars.githubusercontent.com/u/83800834?v=4"
        name="Sohel Syed"
        rounded={false}
        hideName={false}
      />
      <ConditionalRender
        src="https://avatars.githubusercontent.com/u/83800834?v=4"
        name="Sohel Syed"
        rounded={true}
        hideName={true}
      />
      <hr />
      <h1>RENDER LIST OF ITEMS</h1>
      <RenderLisr items={["coding", "painting", "badminton"]} />
      <hr />
      <h1>BUTTON EVENT LISTENER</h1>
      <ButtonEventListener />
      <hr />
      <h1>USERPROFILE</h1>
      <UserProfle usersData={usersData} />
    </div>
  );
}

export default App;
