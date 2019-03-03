const {of} = require('rxjs');
const {bufferCount, map, catchError} = require('rxjs/operators');

module.exports = (click$) => {
  return click$.pipe(
      bufferCount(2),
      map(() => 'd'),
      catchError(() => of('e')),
  );
};
