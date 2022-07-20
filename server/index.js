const express = require('express')
const colors = require('colors')
const { graphql } = require('graphql')
const schema = require('../server/schema/schema')
const { graphqlHTTP } = require('express-graphql')
const connectDB = require('./config/db')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 8000

url = `http://localhost:${port}/`.bgBlue

const  colored_port = `${port}`.bgBlack


// MongoDB Connection
connectDB()


const app = express()

app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql :process.env.NODE_ENV === 'development'
}))


app.listen(port, console.log(`Server is running on ${url} and the port is ${colored_port}`))