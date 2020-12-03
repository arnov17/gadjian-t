const combination = require("../function/fibonacci-func");

exports.create = (req, res, next) => {
  try {
    const { n } = req.body;

    // let fin = [0, 1];
    // for (let i = fin.length - 1; fin.length < n; i++) {
    //   fin.push(fin[i] + fin[i - 1]);
    // }
    // let finstr = "";
    // console.log(fin.length);
    // for (let j = 0; j < fin.length; j++) {
    //   str += fin[j].toString();
    //   str += " ";
    // }
    // console.log(str);

    finstr = combination(n);
    console.log(finstr);

    return res.status(200).json({
      message: "Success finabocci",
      data: finstr,
    });
  } catch (error) {
    return next(error);
  }
};
