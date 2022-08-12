const express = require ("express");
const cors = require ('cors');
const professionalRouters = require("./routers/professional.routers");
const prosRouters = require ("./routers/pros.routers")
const errorHandling = require("./error/errorHandling");

const app = express();

app.set ("port", process.env.PORT || 4000);

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(professionalRouters);
app.use(prosRouters);
app.use(function(req, res, next)
    {
        res.status(404).json({error:true, codigo: 404,message: "Endpoint not found"})
    })

app.use(errorHandling);

module.exports = app;