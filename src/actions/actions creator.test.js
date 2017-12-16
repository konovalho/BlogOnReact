import * as actions from './index';

describe('actions', ()=> {
	it('should correct object', ()=> {
		const text = 'artem';
		const expectedAction = {
			type: 'ADD_POST',
			text
		}
		expect(actions.addPost('artem')).toEqual(expectedAction)
	})
})
