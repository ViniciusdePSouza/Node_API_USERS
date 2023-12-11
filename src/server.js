const express = require('express');
const dotenv =  require('dotenv') ;
const cors = require('cors')

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {res.send('hello world')})

app.listen(PORT, () => console.log('listening on port',PORT));
