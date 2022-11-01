const makeFormat = (x) => {
  if (x < 10) {
    const res = "0" + String(x);
    return res;
  } else {
    return String(x);
  }
};

const presentDate = new Date();
//day1
const day1 = new Date(presentDate);
day1.setDate(day1.getDate() - 2);
const day1Str =
  String(day1.getFullYear()) +
  String(day1.getMonth() + 1) +
  makeFormat(day1.getDate());
const day1Nav = String(day1).split(" ");

//day 2
const day2 = new Date(presentDate);
day2.setDate(day2.getDate() - 1);
const day2Str =
  String(day2.getFullYear()) +
  String(day2.getMonth() + 1) +
  makeFormat(day2.getDate());
const day2Nav = String(day2).split(" ");

//day 3
const day3 = new Date(presentDate);
day3.setDate(day3.getDate());
const day3Str =
  String(day3.getFullYear()) +
  String(day3.getMonth() + 1) +
  makeFormat(day3.getDate());
const day3Nav = String(day3).split(" ");

//day4
const day4 = new Date(presentDate);
day4.setDate(day4.getDate() + 1);
const day4Str =
  String(day4.getFullYear()) +
  String(day4.getMonth() + 1) +
  makeFormat(day4.getDate());
const day4Nav = String(day4).split(" ");

//day5
const day5 = new Date(presentDate);
day5.setDate(day5.getDate() + 2);
const day5Str =
  String(day5.getFullYear()) +
  String(day5.getMonth() + 1) +
  makeFormat(day5.getDate());
const day5Nav = String(day5).split(" ");
// console.log(day5Nav);
export {
  day1Str,
  day2Str,
  day3Str,
  day4Str,
  day5Str,
  day1Nav,
  day2Nav,
  day3Nav,
  day4Nav,
  day5Nav,
};
