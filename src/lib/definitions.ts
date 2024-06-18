type CardInfo = {
	title: string;
	text: string;
	info: {
		couching: string[];
		translation: string[] | (string | CardInfoObject)[];
	};
};

type CardInfoObject = {
	id: string;
	data: string[];
};
