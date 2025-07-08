import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send("Hello Mee")
})
app.listen(8000, () => console.log(`App is Running on Port 8000`))