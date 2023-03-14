const expres = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const ContactRoute = require("./routes/Contact_route/contact.routes");
const { connect } = require("./config/db.config");

require('dotenv').config();
const app = expres();
const port = process.env.PORT
app.use(cors())
app.use(expres.json())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use('/contact',ContactRoute)



app.get('/',async(req,res)=>{
    res.send('welcome to home page')
})




app.listen(port,async()=>{
    await connect();
    console.log("Connect")
    console.log(`listening on http://localhost:${port}`)
})