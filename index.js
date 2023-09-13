const {WebSocketServer} = require('ws')
var sql_client = require('sql-client')

const {username, password,email, serverid } = require('./dummy_data.json')
const wss = new WebSocketServer({port: 8080})

async function user_auth(user) {
    if (user.username == username && user.password == password) {
        return true
    } else {
        return false
    }
}

