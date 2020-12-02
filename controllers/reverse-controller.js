exports.create = (req, res, next) => {
  try {
    const { character } = req.body;

    //   function balikkata (str) {
    //     return str.split('').reverse().join('');
    //    }
    //    balikkata('makca')

    const resultRev = character.split("").reverse().join("");

    return res.status(200).json({
      message: "Success reverse word",
      data: resultRev,
    });
  } catch (error) {
    return next(error);
  }
};
