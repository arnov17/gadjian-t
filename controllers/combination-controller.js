exports.create = (req, res, next) => {
  try {
    const { n, r } = req.body;

    function faktorial(k) {
      var number = 1;
      var result = 1;
      while (number <= k) {
        result = result * number;
        number = number + 1;
      }
      return result;
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
