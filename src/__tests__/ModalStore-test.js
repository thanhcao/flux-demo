
'use strict';

import ModalStore from 'modals/ModalStore';
describe('ModalStore', function() {
    beforeEach(function() {
        // Always start with the initial state.
        this.state = ModalStore.getState()

    })

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
