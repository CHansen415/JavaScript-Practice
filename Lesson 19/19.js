
const currentDate = new dayjs();

console.log(currentDate);

console.log(`The current day is ${currentDate.date()}`);
console.log(`The current month  is ${currentDate.month() + 1}`);
console.log(`The current year is ${currentDate.year()}`);


console.log(`${currentDate.format("D MMM dddd")}`);
const startOfMonth = currentDate.startOf('month');
console.log(`${startOfMonth}`)

const lastDayLastMonth = startOfMonth.subtract(1, "day");
console.log(`last day of last month ${lastDayLastMonth}`);


console.log(`Next month is ${currentDate.add(1, 'month')}`);
