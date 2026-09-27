import "../css/Calendar.css";
import { isWeekend } from "../utils/weekendChecker";

function Calendar({ day, actionsRemaining, onEndDay }) {
  // Calculate current month based on game day
  // Assuming game starts on day 1 of month 1 (Monday)
  const monthNames = [
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

  const daysInMonth = 30; // Simplification: all months have 30 days

  // Calculate game calendar
  const gameDay = day;
  const currentMonth = Math.floor((gameDay - 1) / daysInMonth);
  const currentDayOfMonth = ((gameDay - 1) % daysInMonth) + 1;
  const monthName = monthNames[currentMonth % 12];
  const year = Math.floor(currentMonth / 12) + 1; // Year starts at 1

  // Calculate day of week (0-6, where 0 is Monday in our bootcamp calendar)
  const dayOfWeek = (gameDay - 1) % 7;
  const isCurrentDayWeekend = isWeekend(gameDay);
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Generate days for current month view
  const generateCalendarDays = () => {
    const days = [];

    // Calculate first day of the month's day of week
    // This ensures proper continuity between months
    const firstDayOfMonth = gameDay - currentDayOfMonth + 1;
    const firstDayOfWeek = (firstDayOfMonth - 1) % 7;

    // Generate empty cells for days before the 1st of the month
    const emptyDays = firstDayOfWeek;

    // Generate all days in the month with correct weekends
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        dayNum: i,
        isWeekend: isWeekend(firstDayOfMonth + i - 1),
      });
    }

    return { days, emptyDays };
  };

  const { days: calendarDays, emptyDays } = generateCalendarDays();

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>
          {monthName} {year}
        </h2>
        <div className="calendar-info">
          <p>Bootcamp Day: {gameDay}</p>
          <p>Today: {dayNames[dayOfWeek]}</p>
          {!isCurrentDayWeekend ? (
            <p>Actions: {actionsRemaining}/8</p>
          ) : (
            <p className="weekend-label">No Bootcamp</p>
          )}
        </div>
      </div>

      <div className="calendar-grid">
        {/* Day names header - starting with Monday for bootcamp context */}
        {dayNames.map((dayName, index) => (
          <div
            key={`header-${index}`}
            className={`calendar-day-name ${index >= 5 ? "weekend" : ""}`}
          >
            {dayName}
          </div>
        ))}

        {/* Empty days to align first day of month with correct day of week */}
        {Array.from({ length: emptyDays }).map((_, i) => (
          <div key={`empty-${i}`} className="calendar-day empty"></div>
        ))}

        {/* Calendar days */}
        {calendarDays.map(({ dayNum, isWeekend: isWeekendDay }) => (
          <div
            key={`day-${dayNum}`}
            className={`calendar-day ${
              dayNum === currentDayOfMonth ? "current" : ""
            } ${isWeekendDay ? "weekend" : ""}`}
          >
            {dayNum}
          </div>
        ))}
      </div>

      <div className="calendar-actions">
        <button onClick={onEndDay} className="end-day-btn">
          {isCurrentDayWeekend ? "Skip to Monday" : "End Day Early"}
        </button>
      </div>
    </div>
  );
}

export default Calendar;
