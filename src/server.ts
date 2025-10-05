import app from "./app";

const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.status(200).send("Server is Listening")
})
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
