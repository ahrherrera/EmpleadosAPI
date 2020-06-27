var pool = require("../../controllers/mysql/mysqlconnector");

const GETEMPLOYEES = `CALL spGetEmployees()`
const INSERTEMPLOYEES = `CALL spCreateEditEmployee(?)`

exports.getEmpleados = function() {
    return new Promise((resolve, reject) => { //return promise, callbacks are bad!
        pool.getConnection(function(err, connection) {
            if (err) {
                if (!connection) {
                    var response = {
                        success: false,
                        message: `Connection returned null, please check connection details!. ${err}`,
                        objects: err
                    };
                    return reject(response);
                }
                connection.release();
                var response = {
                    success: false,
                    message: 'Error Get Empleados',
                    objects: err
                };
                return reject(response);
            }
            connection.query(GETEMPLOYEES, function(err, employees) {
                connection.release();
                if (!err) {
                    var response = {
                        success: true,
                        message: 'Empleados Obtenidos exitosamente',
                        objects: employees[0]
                    };
                    return resolve(response);
                }

                var response = {
                    success: false,
                    message: 'Error obteniendo Empleados',
                    objects: err
                };
                return reject(response);
            });
            connection.on("error", function(err) {
                var response = {
                    success: false,
                    message: 'Error get Empleados',
                    objects: err
                };
                return reject(response);
            });
        });
    });
};

exports.createEmpleado = function(empleado) {
    return new Promise((resolve, reject) => { //return promise, callbacks are bad!
        pool.getConnection(function(err, connection) {
            if (err) {
                if (!connection) {
                    var response = {
                        success: false,
                        message: `Connection returned null, please check connection details!. ${err}`,
                        objects: err
                    };
                    return reject(response);
                }
                connection.release();
                var response = {
                    success: false,
                    message: 'Error Save Empleados',
                    objects: err
                };
                return reject(response);
            }
            var values = [
                [
                    empleado.nombres,
                    empleado.apellidos,
                    empleado.correo,
                    empleado.cedula,
                    empleado.nInss,
                    empleado.fechaNac,
                    empleado.activo,
                    null
                ]
            ];
            connection.query(INSERTEMPLOYEES, values, function(err, employees) {
                connection.release();
                if (!err) {
                    var response = {
                        success: true,
                        message: 'Empleado Actualizado exitosamente',
                    };
                    return resolve(response);
                }

                var response = {
                    success: false,
                    message: 'Error obteniendo Empleados',
                    objects: err
                };
                return reject(response);
            });
            connection.on("error", function(err) {
                var response = {
                    success: false,
                    message: 'Error find expertises by status and trainer',
                    objects: err
                };
                return reject(response);
            });
        });
    });
};

exports.updateEmpleado = function(empleado) {
    return new Promise((resolve, reject) => { //return promise, callbacks are bad!
        pool.getConnection(function(err, connection) {
            if (err) {
                if (!connection) {
                    var response = {
                        success: false,
                        message: `Connection returned null, please check connection details!. ${err}`,
                        objects: err
                    };
                    return reject(response);
                }
                connection.release();
                var response = {
                    success: false,
                    message: 'Error Save Empleados',
                    objects: err
                };
                return reject(response);
            }
            var values = [
                [
                    empleado.nombres,
                    empleado.apellidos,
                    empleado.correo,
                    empleado.cedula,
                    empleado.nInss,
                    empleado.fechaNac,
                    empleado.activo,
                    empleado.id
                ]
            ];
            connection.query(INSERTEMPLOYEES, values, function(err, employees) {
                connection.release();
                if (!err) {
                    var response = {
                        success: true,
                        message: 'Empleado Actualizado exitosamente',
                    };
                    return resolve(response);
                }

                var response = {
                    success: false,
                    message: 'Error obteniendo Empleados',
                    objects: err
                };
                return reject(response);
            });
            connection.on("error", function(err) {
                var response = {
                    success: false,
                    message: 'Error find expertises by status and trainer',
                    objects: err
                };
                return reject(response);
            });
        });
    });
};