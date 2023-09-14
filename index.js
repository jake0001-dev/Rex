const { log } = require('console');
const express = require('express')
const fs = require('fs');
const path = require('path');
const app = express()
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
const port = 7000



app.get('/login', (req, res) => {
    const { username, password } = req.query
    const users = fs.readFileSync('./dummy_data.json', 'utf-8')
    const user = JSON.parse(users).find(user => user.username === username && user.password === password)

    if (user) {
        res.status(200).send({ message: 'Login success', role: user.role })
    } else {
        res.status(401).send({ message: 'Login failed' })
    }
})


app.get('/console', (req, res) => {
    const file = fs.readFileSync('./random.txt', 'utf-8')

    // make it show only the last 50 lines
    const lines = file.split('\n')
    const last_lines_array = lines.slice(-40)
      

    res.render('console', { logs: last_lines_array })

})

function log_file(msg) { fs.appendFileSync('./log.log', msg + '\n') }


app.listen(port, () => console.log(`http://127.0.0.1:${port}`))
console.log('init')
