const app = require("./index");

const connect = require("./configs/db");

app.listen(4000, async () => {
  try {
    await connect();
    console.log("we are on the port 4000");
  } catch (error) {
    console.log({ message: error.message });
  }
});
