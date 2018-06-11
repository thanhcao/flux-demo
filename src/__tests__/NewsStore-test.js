'use strict';

import NewsStore from 'news/NewsStore';

describe('NewsStore', function() {

    beforeEach(function() {
        var {news} = NewsStore.getState()
        this.addTodos = (todos) => {
            todos.forEach(todo => {
                const id = Counter.increment();
                this.state = this.state.set(
                    id,
                    new Todo({id, text: todo.text, complete: !!todo.complete}),
                );
            });
        };

        // Because of how TodoStore is set up it's not easy to get access to ids of
        // todos. This will get the id of a particular todo based on the index it
        // was added to state in.
        this.id = (index) => {
            if (this.state.size <= index) {
                throw new Error(
                    'Requested id for an index that is larger than the size of the ' +
                    'current state.'
                );
            }
            return Array.from(this.state.keys())[index];
        };

        // This "dispatches" an action to our store. We can bypass the dispatcher
        // and just call the store's reduce function directly.
        this.dispatch = action => {
            this.state = TodoStore.reduce(this.state, action);
        };
    });

    ///// Begin tests /////
    it('toggles a particular todo', function() {
        this.addTodos([
            {text: 'test0', complete: true},
            {text: 'test1', complete: true},
        ]);

        this.dispatch({
            type: TodoActionTypes.TOGGLE_TODO,
            id: this.id(0),
        });

        expect(this.todos()).toEqual([
            {text: 'test0', complete: false},
            {text: 'test1', complete: true},
        ]);

        this.dispatch({
            type: TodoActionTypes.TOGGLE_TODO,
            id: this.id(0),
        });

        expect(this.todos()).toEqual([
            {text: 'test0', complete: true},
            {text: 'test1', complete: true},
        ]);

        this.dispatch({
            type: TodoActionTypes.TOGGLE_TODO,
            id: this.id(1),
        });

        expect(this.todos()).toEqual([
            {text: 'test0', complete: true},
            {text: 'test1', complete: false},
        ]);
    });
});
