var express = require("express");
var router = express.Router();
var employeesModel = require("../models/empleados/empleados");

router.get("/", function(req, res, next) {
    employeesModel // call the promise
        .getEmpleados(req.query)
        .then(
            function(response) { //success
                console.log("Success!");
                res.send(response); //return the data
            },
            function(error) { //failed
                console.error("Failed!", error);
                res.status(500).send(error); //return error with 500
            }
        )
        .catch(function(ex) { //exception
            console.error("Exception!", ex);
            res.status(500).send(ex); //return exception with 500
        });
});

router.post("/", function(req, res, next) {
    employeesModel // call the promise
        .createEmpleado(req.body)
        .then(
            function(response) { //success
                console.log("Success!");
                res.send(response); //return the data
            },
            function(error) { //failed
                console.error("Failed!", error);
                res.status(500).send(error); //return error with 500
            }
        )
        .catch(function(ex) { //exception
            console.error("Exception!", ex);
            res.status(500).send(ex); //return exception with 500
        });
});

router.put("/", function(req, res, next) {
    console.log(req.body);
    employeesModel // call the promise
        .updateEmpleado(req.body)
        .then(
            function(response) { //success
                console.log("Success!");
                res.send(response); //return the data
            },
            function(error) { //failed
                console.error("Failed!", error);
                res.status(500).send(error); //return error with 500
            }
        )
        .catch(function(ex) { //exception
            console.error("Exception!", ex);
            res.status(500).send(ex); //return exception with 500
        });
});

module.exports = router;