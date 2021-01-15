const regex = /^(-?\d+)(.*)$/;

export const multiplyCss = (value, multiplier) => {
	const re = regex.exec(`${value}`);

	if (re) return `${multiplier * parseInt(re[1])}${re[2]}`;

	return 'Unsupported type';
};

export const subtractCss = (value, amount) => {
	const re = regex.exec(`${value}`);

	if (re) return `${parseInt(re[1]) - amount}${re[2]}`;

	return 'Unsupported type';
};

export const addCss = (value, amount) => {
	const re = regex.exec(`${value}`);

	if (re) return `${parseInt(re[1]) + amount}${re[2]}`;

	return 'Unsupported type';
};
