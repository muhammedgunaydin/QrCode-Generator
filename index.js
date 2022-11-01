const express = require('express')

const app = express()

const port = 3000
app.listen(port, () => {
  ;`Server running on port ${port}`
})

app.use('/', (req, res) => {
  res.json({ success: 'Node running' })
})
