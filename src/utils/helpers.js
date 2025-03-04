export function getRandomDateInCurrentYear() {
	let year = new Date().getFullYear();
	let start = new Date(year, 0, 1);
	let end = new Date(year, 11, 31, 23, 59, 59, 999);
	let randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime());
	let randomDate = new Date(randomTimestamp);

	// Format YYYY.MM.DD
	let formattedDate =
		randomDate.getFullYear() +
		"." +
		String(randomDate.getMonth() + 1).padStart(2, "0") +
		"." +
		String(randomDate.getDate()).padStart(2, "0");

	return formattedDate;
}

export function addDaysToDate(dateStr, days) {
	let [year, month, day] = dateStr.split(".").map(Number);
	let date = new Date(year, month - 1, day); // month is zero-based in JS

	date.setDate(date.getDate() + days);

	let formattedDate =
		date.getFullYear() +
		"." +
		String(date.getMonth() + 1).padStart(2, "0") +
		"." +
		String(date.getDate()).padStart(2, "0");

	return formattedDate;
}
