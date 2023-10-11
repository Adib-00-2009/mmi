const Express = require("express");
require("dotenv").config();

const app = Express();
const port = process.env.PORT || 2000;

app.get("/fun", (req, res) => {
  const names = [
    {
      id: 1,
      name: "Adib",
    },
    {
      id: 2,
      name: "Aariz",
    },
    {
      id: 3,
      name: "****",
    },
    {
      id: 4,
      name: "***",
    },
    {
      id: 5,
      name: "*",
    },
    {
      id: 6,
      name: "****",
    },
  ];

  res.send(names);
});

app.get("/nofun", (req, res) => {
  res.send(`hello`);
});

app.listen(port, () => {
  console.log(`Server is LISTENING at http://localhost:${port}`);
});
