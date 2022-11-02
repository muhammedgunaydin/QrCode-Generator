const express = require('express')
const path = require('path')
const qrcode = require('qrcode')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/scan', (req, res, next) => {
  const input_text = req.body.text
  qrcode.toDataURL(input_text, (err, src) => {
    if (err) res.send('Something went wrong!!')
    res.render('scan', {
      qr_code: src,
    })
  })
})

const port = 3000
app.listen(port, () => {
  console.log('Started listening on port ' + port)
})
