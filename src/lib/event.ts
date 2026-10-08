// Single source of truth for when and where the event is.
// Edit here and the hero pill and both registration forms update together.
export const EVENT = {
  weekday: "Tuesday",
  date: "October 20",
  time: "6:00 – 7:00 PM",
  venue: "MSD Library",
};

export const EVENT_SUMMARY = `${EVENT.weekday}, ${EVENT.date} · ${EVENT.time} · ${EVENT.venue}`;
