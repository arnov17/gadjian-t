const faktorial = require("../function/combination-func");

exports.create = (req, res, next) => {
  try {
    const { n, r } = req.body;

    if (n <= r) {
      return res.status(409).send({
        message: "submit error, n > r",
      });
    }

    let resultComb = faktorial(n) / (faktorial(r) * faktorial(n - r));

    return res.status(200).json({
      message: "Success combination",
      data: resultComb,
    });
  } catch (error) {
    return next(error);
  }
};
