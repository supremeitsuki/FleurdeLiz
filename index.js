const express = require('express')
const app = express()
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views',);
const { name, description, invite, support, pfp, intro, feature1, feature2, feature3, feature4 } = require("./config.json")
const port = 9999
app.listen(port, () => {
  console.log(`Quantumn Development`)
})

app.use(express.static("assets"));
// 35.186.245.55

app.get('/', (req, res) => {
        res.render("index", {name: name, description: description, invite: invite, support: support, pfp: pfp, intro: intro, f1: feature1, f2: feature2, f3: feature3, f4: feature4});
});

app.get('/shop', (req, res) => {

        res.render("shop", {name: name, description: description, invite: invite, support: support, pfp: pfp, intro: intro, f1: feature1, f2: feature2, f3: feature3, f4: feature4});

});