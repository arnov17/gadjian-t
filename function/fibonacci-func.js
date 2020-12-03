const combination = (n) => {
  let fin = [0, 1];
  for (let i = fin.length - 1; fin.length < n; i++) {
    fin.push(fin[i] + fin[i - 1]);
  }
  let finstr = "";
  //   console.log(fin.length);
  for (let j = 0; j < fin.length; j++) {
    finstr += fin[j].toString();
    finstr += " ";
  }
  //   console.log(finstr);
  return finstr.substring(0, finstr.length - 1);
};

module.exports = combination;
