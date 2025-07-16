import express from 'express'

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
    res.send("Hello Mee")
})
app.listen(PORT, () => console.log(`App is Running on http://localhost:${PORT}`))