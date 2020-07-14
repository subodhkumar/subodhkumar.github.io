const express = require(`express`);
const app = express();
const _PORT = process.env.PORT || 5000;

// TODO: ADD FILTERS
// STATIC
app.use(express.static(`public`));
// HANDLERS
const callback_Start = ()=>{console.log(`Server started @${_PORT}`)};
const defaultHandler = (req,res)=>{res.sendFile(`${__dirname}/index.html`)}

app.get(`/`,defaultHandler);
app.listen(_PORT,callback_Start);
