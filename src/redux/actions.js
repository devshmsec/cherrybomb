import * as types from "./actionTypes";

let parentNodeID = 0;
let childNodeID = 0;

export const addParentNode = (name) => ({
	type: types.ADD_PARENT_NODE,
	payload: {
		id: ++parentNodeID,
		name,
	},
});

export const addChildNode = (name, parent) => ({
	type: types.ADD_CHILD_NODE,
	payload: {
		id: parseInt(parent.id.toString() + ++childNodeID.toString()),
		name,
		parent,
	},
});
