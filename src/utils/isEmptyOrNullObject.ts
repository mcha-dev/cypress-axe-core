export function isEmptyOrNullObject(value: any) {
	if (value == null) {
		return true;
	}
	return Object.entries(value).length === 0 && value.constructor === Object;
}
