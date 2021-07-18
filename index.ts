import {
  of,
  map,
  from,
  filter,
  first,
  last,
  find,
  single,
  interval,
  take,
  takeLast,
  takeUntil,
  fromEvent,
  takeWhile,
  skip
} from 'rxjs';

const array = [1, 2, 3, 4, 5, 6];

const observer = {
  next: val => console.log(val),
  error: err => console.log(err),
  complete: () => console.log('complete')
};

// filter
from(array).pipe(filter(x => x % 2 === 0));

// first
from(array).pipe(first(x => x > 4));

//last
from(array).pipe(last());

//find
from(array).pipe(find());

// single
from(array).pipe(single(x => x > 5));

//take
interval(1000).pipe(take(1));

interval(1000).pipe(
  take(5),
  takeLast(1)
);

//takeUntil
interval(1000).pipe(takeUntil(fromEvent(document, 'click')));

//takeWhile
interval(1000).pipe(takeWhile(x => x < 5));

//skip
interval(1000)
  .pipe(skip(2))
  .subscribe(observer);
