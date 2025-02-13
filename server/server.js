const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let data = JSON.parse(fs.readFileSync(`./data/main.json`, "utf-8"))
let needSave = false;

app.get("/", (req, res)=>{
    res.json(data);
});

app.put("/", (req, res) => {
    const newData = req.body;
    data = {...data, ...newData};
    needSave = true;
    res.json(data);
});

setInterval(() => {
    if(needSave) {
        fs.writeFileSync(`./data/main.json`, JSON.stringify(data, null, 2));
        needSave = false;
    }
}, 1000);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

