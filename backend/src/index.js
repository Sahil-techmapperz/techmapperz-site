const expres = require("express");
const cors = require("cors");
const ContactRoute = require("./routes/contact.routes");
const { connect } = require("./config/db.config");
const careerRoute = require("./routes/career.routes");
require('dotenv').config();
const app = expres();
const port = process.env.PORT
app.use(cors())
app.use(expres.json())
app.use('/contact',ContactRoute)

app.use('/career',careerRoute)


app.get('/',async(req,res)=>{
    res.send('welcome to home page')
})




app.listen(port,async()=>{
    await connect();
    console.log("Connect")
    console.log(`listening on http://localhost:${port}`)
})