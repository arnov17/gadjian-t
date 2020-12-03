const reverse = require("../function/reverse-func");

exports.create = (req, res, next) => {
  try {
    const { character } = req.body;
    const resultRev = reverse(character);

    return res.status(200).json({
      message: "Success reverse word",
      data: resultRev,
    });
  } catch (error) {
    return next(error);
  }
};
