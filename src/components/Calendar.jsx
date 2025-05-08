import "../css/Calendar.css";
import { useState, useEffect } from "react";

function Calendar({ day, actionsRemaining, onEndDay, page }) {
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
  const isWeekend = dayOfWeek >= 5; // 5 = Saturday, 6 = Sunday
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
      // Calculate actual day of the week for this date
      const thisDayOfWeek = (firstDayOfWeek + i - 1) % 7;
      const isWeekendDay = thisDayOfWeek >= 5;

      days.push({
        dayNum: i,
        isWeekend: isWeekendDay,
        dayOfWeek: thisDayOfWeek,
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
          {!isWeekend ? (
            <p>Actions: {actionsRemaining}/8</p>
          ) : (
            <p className="weekend-label">Weekend - No Bootcamp</p>
          )}
        </div>
      </div>

      <div className="calendar-grid">
        {/* Day names header - starting with Monday for bootcamp context */}
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
          (dayName, index) => (
            <div
              key={`header-${index}`}
              className={`calendar-day-name ${index >= 5 ? "weekend" : ""}`}
            >
              {dayName}
            </div>
          )
        )}

        {/* Empty days to align first day of month with correct day of week */}
        {Array.from({ length: emptyDays }).map((_, i) => (
          <div key={`empty-${i}`} className="calendar-day empty"></div>
        ))}

        {/* Calendar days */}
        {calendarDays.map(({ dayNum, isWeekend }) => (
          <div
            key={`day-${dayNum}`}
            className={`calendar-day ${
              dayNum === currentDayOfMonth ? "current" : ""
            } ${isWeekend ? "weekend" : ""}`}
          >
            {dayNum}
          </div>
        ))}
      </div>

      <div className="calendar-actions">
        <button onClick={onEndDay} className="end-day-btn">
          {isWeekend ? "Skip to Monday" : "End Day Early"}
        </button>
      </div>
    </div>
  );
}

export default Calendar;
