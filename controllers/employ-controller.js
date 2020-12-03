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
    if (!findEmployee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }
    res.send(findEmployee);
  } catch (error) {
    return next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { name, phone_number, jobtitle } = req.body;
    // console.log(req.body);
    const params = req.params;
    const id = params.id;

    const existEmployee = await EmployeeModel.findOne({
      where: {
        id: id,
      },
    });

    if (!existEmployee) {
      return res.status(404).json({
        message: "Employee not found",
      });
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
    return next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const params = req.params;
    const id = params.id;
    // const { id } = req.body;
    // console.log(id);

    const existEmployee = await EmployeeModel.destroy({
      where: {
        id: id,
      },
    });

    if (!existEmployee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    return res.status(200).json({
      message: "Success delete Employee",
    });
  } catch (error) {
    // console.log(error);
    return next(error);
  }
};
