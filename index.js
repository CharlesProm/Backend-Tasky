const express = require('express');
const app = express()
const routes = require('./src/routes')

// app.use(express.json({ limit: '15MB' }))
app.use(express.urlencoded({ extended: fasle }));
app.use(routes)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Example app listening on ${PORT} 4000!`))
