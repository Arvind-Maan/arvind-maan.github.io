const pxregex = /^(.+)px$/;
const pcregex = /^(.+)%$/;

export const multiplyCss = (value, multiplier) => {
	const isPx = pxregex.exec(`${value}`);
	const isPc = pcregex.exec(`${value}`);

	if (isPx) return `${multiplier * parseInt(isPx[1])}px`;
	if (isPc) return `${multiplier * parseInt(isPc[1])}%`;

	return 'Unsupported type';
};
