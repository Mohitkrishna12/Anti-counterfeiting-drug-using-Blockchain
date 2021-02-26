export const initialState={
	role:""
};

const reducer =(state,action) =>{
	console.log(action.roles);
	switch (action.type){
		case "ADD":
			return {
				...state,
				role:action.roles,
			};
			default:
				return state;
	}
};

export default reducer;