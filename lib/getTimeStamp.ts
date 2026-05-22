export function getTimeStamp(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();

  const diffMs = now.getTime() - date.getTime();

  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;

  if (diffMs < minute) {
    return "now";
  }

  if (diffMs < hour) {
    const mins = Math.floor(diffMs / minute);
    return `${mins} min ago`;
  }

  if (diffMs < day) {
    const hours = Math.floor(diffMs / hour);
    return `${hours} hr ago`;
  }

  if (diffMs < day * 2) {
    return "yesterday";
  }

  if (diffMs < week) {
    const days = Math.floor(diffMs / day);
    return `${days} days ago`;
  }

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
