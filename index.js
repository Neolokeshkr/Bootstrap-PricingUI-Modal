const express = require('express')
const app = express()
const port = 3182

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => console.log(`App listening @ port ${port}`))

// D:\Lokesh\Develpoment\Challanges\NextGrowthLabs\npm-implementation\index.html