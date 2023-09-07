const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

const getStartingDayOfMonth = (month: number, year: number) => {
  return new Date(year + "-" + month + "-01").getDay();
};

export const useCalendar = (month: number, year: number) => {
  const numberOfDays = getDaysInMonth(month, year);
  const startingDay = getStartingDayOfMonth(month, year);

  let startingIndex: number = startingDay;

  if (startingDay !== 0) {
    startingIndex = startingDay - 1;
  }

  let currentWeek = 0;
  let currentWeekIndex = 0;
  const dayArray = Array.from(
    { length: numberOfDays + startingIndex },
    (_, i) => (i < startingIndex ? 0 : i + (1 - startingIndex)),
  );

  const calendar = new Array(6);

  for (let i = 0; i < calendar.length; i++) {
    calendar[i] = Array.from(Array(7), () => 0);
  }

  dayArray.map((day) => {
    calendar[currentWeek][currentWeekIndex] = day;

    if (currentWeekIndex === 6) {
      currentWeek++;
    }

    if (currentWeekIndex < 6) {
      currentWeekIndex++;
    } else {
      currentWeekIndex = 0;
    }
  });

  return calendar;
};
