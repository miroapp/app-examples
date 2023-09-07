import * as React from "react";
import ReactDOM from "react-dom";
import { useCalendar } from "./useCalendar";

function App() {
  const { board } = window.miro;

  const d = new Date();
  const currentYear = d.getFullYear();
  const currentMonth = d.getMonth() + 1;

  const [month, setMonth] = React.useState(currentMonth);
  const [year, setYear] = React.useState(currentYear);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(Number(e.target.value));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(Number(e.target.value));
  };

  const handleInsertCalendar = async () => {
    const calendar = useCalendar(month, year);

    // Generate calendar title
    await board.createText({
      content: `<b>${months[month - 1]} ${year}</b>`,
      x: 375,
      y: -175,
    });

    // Generate calendar headers
    days.map(async (day: string, index: number) => {
      const xSpacing = index * 120;

      await board.createShape({
        content: `<b>${day}</b>`,
        shape: "rectangle",
        x: xSpacing,
        y: -100,
        width: 100,
        height: 50,
      });
    });

    // Generate calendar days
    calendar.map((monthRow: number[], index: number) => {
      const ySpacing = index * 120;

      monthRow.map(async (day: number, index: number) => {
        const xSpacing = index * 120;

        await board.createShape({
          content: day === 0 ? `` : `<b>${day.toString()}</b>`,
          shape: "round_rectangle",
          style: {
            fillColor: "#ffffff",
          },
          x: xSpacing,
          y: ySpacing,
          width: 100,
          height: 100,
        });
      });
    });
  };

  return (
    <div className="grid" style={{ height: "auto", width: "100%" }}>
      <div className="cs1 ce12">
        <p className="p-medium">
          Select the month and year, and click "Insert Calendar" to add an
          editable calendar to the board.
        </p>
      </div>
      <div className="cs1 ce12">
        <h4 className="h4">Month</h4>
        <select className="select" value={month} onChange={handleMonthChange}>
          {months.map((month: string, index: number) => {
            return (
              <option value={(index + 1).toString()} key={index}>
                {month}
              </option>
            );
          })}
        </select>
      </div>
      <div className="cs1 ce12">
        <h4 className="h4">Year</h4>
        <select className="select" value={year} onChange={handleYearChange}>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="2030">2030</option>
        </select>
      </div>
      <div className="cs1 ce12">
        <button
          className="button button-primary"
          onClick={handleInsertCalendar}
        >
          Insert Calendar
        </button>
      </div>
    </div>
  );
}

// Render App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
