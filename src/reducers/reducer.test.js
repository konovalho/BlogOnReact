import { createStore } from 'redux';
import blogApp from './index';
import {addPost} from '../actions/index';
import {removePost} from '../actions/index';


describe('Reducer test', ()=> {
  it('should correct object', ()=> {
    const expectedReducer = {
      posts: [],
      visibilityFilter: ''
    };
    expect(blogApp(undefined, {type: 'ADD_TEST'})).toEqual(expectedReducer);
  });
});

describe('from dispatch to Reducer test', ()=> {
  it('should correct object', ()=> {
    let store = createStore(blogApp);
    store.dispatch(addPost('Anna'));
    let myStore = {
      posts: [
        {
          id: 0,
          text: 'Anna'
        }
      ],
      visibilityFilter: ''
    };
    expect(store.getState()).toEqual(myStore);
});

  it('should correct object from to variant', ()=> {
    let store = createStore(blogApp);
    store.dispatch(addPost('Anna'));
    store.dispatch(addPost('Roman'));
    let myStore = {
      posts: [
        {
          id: 0,
          text: 'Anna'
        },
        {
          id: 1,
          text: 'Roman'
        }
      ],
      visibilityFilter: ''
    };
    expect(store.getState()).toEqual(myStore);
  });
});

describe('Remove post testing', ()=> {
  it('should remove post', ()=> {
    let store = createStore(blogApp);
    store.dispatch(addPost('Anna'));
    store.dispatch(addPost('Roman'));
    let myStore = {
      posts: [
        {
          id: 0,
          text: 'Anna'
        }
      ],
      visibilityFilter: ''
    };
    store.dispatch(removePost(1));
    expect(store.getState()).toEqual(myStore);
  });
});
