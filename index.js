import express from "express";

const app = express();

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Hello Devraj",
  });
});

const port = 5000;

app.listen(port, () => {
  console.log(`✅ Server is running on port: ${port}`);
});
