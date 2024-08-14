export const formateDate = (date: string) => {
	const localDate = new Date(date);
   
    const year = localDate.getFullYear();
    const formattedDate = localDate
      .toLocaleDateString("ru-RU", { year: "numeric", month: "long", day: "numeric" })
      .replace(/\s*\d{4}\s*г\./, `, ${year}`);
  return formattedDate;
}