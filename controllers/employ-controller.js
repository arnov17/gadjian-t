require("dotenv").config();
const { EmployeeModel } = require("../db/models/employees");

exports.create = async (req, res, next) => {
  try {
    const { name, phone_number, jobtitle } = req.body;

    const newEmployee = await EmployeeModel.create({
      name,
      phone_number,
      jobtitle,
    });

    return res.status(200).json({
      message: "Success create new employee",
      data: newEmployee,
    });
  } catch (error) {
    return next(error);
  }
};

exports.read = async (req, res, next) => {
  try {
    const employees = await EmployeeModel.findAll();
    return res.status(200).json({
      message: "Success get all employees",
      data: employees,
    });
  } catch (error) {
    return next(error);
  }
};

exports.findById = async (req, res) => {
  try {
    const params = req.params;
    const id = params.id;

    const findEmployee = await EmployeeModel.findByPk(id);
    res.send(findEmployee);
  } catch (error) {
    res.status(500).send({
      message: "Error when find employee by id",
    });
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id, name, phone_number, jobtitle } = req.body;
    console.log(req.body);

    const existEmployee = await EmployeeModel.findOne({
      where: {
        id: id,
      },
    });

    if (!existEmployee) {
      const error = new Error("employee not found");
      error.statusCode = 404;
      throw error;
    }

    const updateEmployee = await EmployeeModel.update(
      {
        name,
        phone_number,
        jobtitle,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return res.status(200).json({
      message: "Success update employee",
      data: updateEmployee,
    });
  } catch (error) {
    // console.log(error);
    return next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const params = req.params;
    const id = params.id;
    // const { id } = req.body;
    console.log(id);

    await EmployeeModel.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      message: "Success delete Employee",
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

// // reverse
// exports.create = async (req, res, next) => {
//   try {
//     const { character } = req.body;

//     const reverseChar = await EmployeeModel.create({
//       name,
//       phone_number,
//       jobtitle,
//     });

//     return res.status(200).json({
//       message: "Success create new employee",
//       data: reverseChar,
//     });
//   } catch (error) {
//     return next(error);
//   }
// };
