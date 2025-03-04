export function getRandomDateInCurrentYear() {
	let year = new Date().getFullYear();
	let start = new Date(year, 0, 1);
	let end = new Date(year, 11, 31, 23, 59, 59, 999);
	let randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime());
	let randomDate = new Date(randomTimestamp);

	// Format DD.MM.YYYY
	let formattedDate =
		String(randomDate.getDate()).padStart(2, "0") +
		"." +
		String(randomDate.getMonth() + 1).padStart(2, "0") +
		"." +
		randomDate.getFullYear();

	return formattedDate;
}

export function addDaysToDate(dateStr, days) {
	let [day, month, year] = dateStr.split(".").map(Number);
	let date = new Date(year, month - 1, day); // month is zero-based in JS

	date.setDate(date.getDate() + days);

	// Format DD.MM.YYYY
	let formattedDate =
		String(date.getDate()).padStart(2, "0") +
		"." +
		String(date.getMonth() + 1).padStart(2, "0") +
		"." +
		date.getFullYear();

	return formattedDate;
}
