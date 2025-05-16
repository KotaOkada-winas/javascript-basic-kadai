const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;

const fullDate = year + "年" + month + "月";
// console.log(fullDate);

document.getElementById("calendarDate").textContent = fullDate;

const firstDay = new Date(year, month - 1, 1);
const startDay = firstDay.getDay();
// console.log(startDay);


const lastDay = new Date(year, month, 0).getDate();
// console.log(lastDay);

const days = document.querySelectorAll("#days p");

const holidays = {
  "1/1": "元日",
  "1/13": "成人の日",
  "2/11": "建国記念の日",
  "2/23": "天皇誕生日",
  "3/20": "春分の日",
  "4/29": "昭和の日",
  "5/3": "憲法記念日",
  "5/4": "みどりの日",
  "5/5": "こどもの日",
  "5/6": "振替休日",
  "7/21": "海の日",
  "8/11": "山の日",
  "9/15": "敬老の日",
  "9/23": "秋分の日",
  "10/13": "スポーツの日",
  "11/3": "文化の日",
  "11/23": "勤労感謝の日"
};

let dayCount = 1;

for (let i = startDay; i < startDay + lastDay; i++) {
  days[i].textContent = dayCount;
  const key = `${month}/${dayCount}`;
  if (holidays[key]) {
    days[i].textContent += `\n${holidays[key]}`;
    days[i].style.backgroundColor = "red";
  }

  dayCount++;
};

let showYear = year;
let showMonth = month;

function createCalendar(y, m) {

  document.getElementById("calendarDate").textContent = `${y}年${m}月`;

  days.forEach(d => {
    d.textContent = "";
    d.style.backgroundColor = ""; 
  });

  const firstDay = new Date(y, m - 1, 1).getDay();
  
  const lastDay = new Date(y, m, 0).getDate();

  let dayCount = 1;

  for (let i = firstDay; i < firstDay + lastDay; i++) {
    days[i].textContent = dayCount;
    const key = `${m}/${dayCount}`;
    if (holidays[key]) {
      days[i].textContent += `\n${holidays[key]}`;
      days[i].style.backgroundColor = "red";
    }
    dayCount++;
  }
}

document.getElementById("prev").addEventListener("click", () => {
  showMonth--;
  if (showMonth < 1) {
    showMonth = 12;
    showYear--;
  }
  createCalendar(showYear, showMonth);
});

document.getElementById("next").addEventListener("click", () => {
  showMonth++;
  if (showMonth > 12) {
    showMonth = 1;
    showYear++;
  }
  createCalendar(showYear, showMonth);
});