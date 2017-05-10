const initState = {
	items : [
		{"title":"boots","desc":"Lorem ipsum","image":"image1.jpg"},
		{"title":"hats","desc":"Lorem ipsum","image":"image2.jpg"},
		{"title":"umbrellas","desc":"Lorem ipsum","image":"image3.jpg"},
		{"title":"jackets","desc":"Lorem ipsum","image":"image4.jpg"}
	],
	resultCount: 4
};

export default function productReducer (state = initState, action) {
	switch (action.type) {
		default:
		return state
	}
}