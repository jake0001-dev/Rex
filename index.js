const {WebSocketServer} = require('ws')
var sql_client = require('sql-client')

const {username, password,email, serverid } = require('./dummy_data.json')
const wss = new WebSocketServer({port: 6666})

async function user_auth(user) {
    if (user.username == username && user.password == password) {
        return 200
    } else {
        return 401
    }
}


console.log('Server started on port 6666')
