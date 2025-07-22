import express from 'express'

const PORT = 3000
const app = express()

app.get("/", (req, res) => {
    res.send("<h1>yo</h1>")
    console.log("YO")
})

app.listen(PORT, () => { console.log(`App is running on http://localhost:${PORT}`) })