const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(cors);

app.listen(port, (err) => {
    if (err) {
        process.exit();
    }
    console.log(`Server is running on port ${port}`);
});