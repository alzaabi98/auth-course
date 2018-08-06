const express = require("express")
const app = express()
//bring ejs template engine
//bring mysql


app.set('views', './views')
app.set('view engine', 'ejs')

const mysql = require("mysql")

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodeauthdb',
    port: 8889

})
// make db connection 
let post = []
connection.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('connection is succeeded')
        let sql = "select * from users"

        connection.query(sql, (err, data) => {
            console.log(data)
        })
    }
})
app.get('/', (req, res) => {
    res.send('Working...')
})
// 

app.get('/posts', (req, res) => {
    let sql = "select * from posts"
    let posts = []
    connection.query(sql, (err, data) => {
        //console.log(data)
        posts = data
        console.log(posts)
        res.render('index', {

            posts: posts,
            pageTitle: " list of all post1s"
        })
    })


})
app.listen(3000, () => {
    console.log(" working in port 3000")
})