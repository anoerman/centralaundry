export function formatEventDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Generic alias — same formatter, used outside the events context (e.g. blog). */
export const formatDate = formatEventDate;
