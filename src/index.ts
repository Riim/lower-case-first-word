let reFirstWord = /^[0-9A-Z]+?(?=[A-Z][a-z]|[0-9a-z])/;

function lowerCase(str: string): string {
	return str.toLowerCase();
}

let cache = Object.create(null);

export function lowerCaseFirstWord(str: any, useCache?: boolean): string {
	str = String(str);

	let value: string;

	return (
		(useCache && cache[str]) ||
		((value = str.replace(reFirstWord, lowerCase)), useCache ? (cache[str] = value) : value)
	);
}
