export type TimeSlot = {
  dateIso: string;
  labelDate: string;
  slots: string[];
};

const slotValues = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

export function getUpcomingSlots(days = 15): TimeSlot[] {
  const result: TimeSlot[] = [];
  const now = new Date();

  for (let i = 1; i <= days; i += 1) {
    const candidate = new Date(now);
    candidate.setDate(candidate.getDate() + i);
    const day = candidate.getDay();
    if (day === 0) {
      continue;
    }

    const dateIso = candidate.toISOString().split("T")[0];
    const labelDate = new Intl.DateTimeFormat("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long"
    }).format(candidate);

    result.push({
      dateIso,
      labelDate: labelDate.charAt(0).toUpperCase() + labelDate.slice(1),
      slots: day === 6 ? slotValues.slice(0, 4) : slotValues
    });
  }

  return result;
}

