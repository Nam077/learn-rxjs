import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const data$ = of(1, 2, 3);

data$.pipe(
  map(value => value * 2)
).subscribe(result => console.log(result));
