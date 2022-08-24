const doubleClickStream = require('./doubleClickStream.js');
const {TestScheduler} = require('rxjs/testing');


const createScheduler = () => new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

it('should transfer click stream to double click stream', () => {
  createScheduler().run(({hot, expectObservable}) => {
    const click$ = hot('--cc---c--c--');
    const expected$ = '---d------d--';

    const actual$ = doubleClickStream(click$);

    expectObservable(actual$).toBe(expected$);
  });
});

it('should complete the stream when click stream end', () => {
  createScheduler().run(({hot, expectObservable}) => {
    const click$ = hot('--cc--|');
    const expected$ = '---d--|';

    const actual$ = doubleClickStream(click$);

    expectObservable(actual$).toBe(expected$);
  });
});

it('should emit an \'e\' when the click stream throw error', () => {
  createScheduler().run(({hot, expectObservable}) => {
    const click$ = hot('--cc--#');
    const expected$ = '---d--(e|)';

    const actual$ = doubleClickStream(click$);

    expectObservable(actual$).toBe(expected$);
  });
});
