const io = require("socket.io")(3001, {
  cors: {
    origin: "https://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", socket=>{
    
})