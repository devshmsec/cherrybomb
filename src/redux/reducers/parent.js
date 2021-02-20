import * as types from "../actionTypes";

const intitalState = {
	allIds: [],
	byIds: {},
};

export default function (state = intitalState, action) {
	switch (action.type) {
		case types.ADD_PARENT_NODE:
			const { id, name } = action.payload;
			return {
				...state,
				allIds: [...state.allIds, id],
				byIds: {
					...state.byIds,
					[id]: {
						name,
						children: {},
					},
				},
			};
		default:
			return state;
	}
}
