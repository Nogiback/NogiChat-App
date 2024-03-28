export function extractTime(dateString: Date) {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 || 12;

  // Pad minutes with leading zero if necessary
  const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hour12}:${paddedMinutes}${period}`;
}
