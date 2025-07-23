import express from 'express'

const PORT = 3000
const app = express()
const users = [{
    names: "leo",
    age: 23
}]
app.get("/", (req, res) => {
    res.json(users)
    console.log("YO")
})

app.listen(PORT, () => { console.log(`App is running on http://localhost:${PORT}`) })