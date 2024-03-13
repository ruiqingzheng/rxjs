// const rxjs = require('rxjs')

// example 1:

// const { forkJoin } = rxjs

// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000))
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000))
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000))

// Promise.all([promise1, promise2, promise3]).then((data) => console.log('promise all return :', data))

// forkJoin([promise1, promise2, promise3]).observerAll.subscribe((data) => console.log('forkJoin return: ', data))

// -----------------------------------------

import { Observable, forkJoin, map, of, timer } from 'rxjs'
// const observable = forkJoin({ob1: of(1, 2, 3, 4), ob2: Promise.resolve(8), ob3: timer(4000)})

function of2(...args) {
  return new Observable((observer) => {
    args.forEach((arg) => observer.next(arg))
    observer.complete()
  })
}

const o1 = new Observable((ob) => {
  setTimeout(() => {
    ob.next(1)
    // ob.complete()
  }, 1000)
})

const o2 = new Observable((ob) => {
  setTimeout(() => {
    ob.next(2)
    // ob.complete()
  }, 2000)
})

const o3 = new Observable((ob) => {
  setTimeout(() => {
    ob.next(3)
    // ob.complete()
  }, 3000)
})

const observable = forkJoin({
  ob1: o1,
  ob2: o2,
  ob3: o3,
})

observable.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('This is how it ends!'),
})

setTimeout(() => {
  console.log('exit after 4 seconds')
}, 4000)

// const subscription = forkJoin([of(1, 2, 3, 4), ob1, ob2, ob3]).subscribe({
//   next: value => console.log(value),
//   complete: () => {
//     console.log('This is how it ends!')
//     subscription.unsubscribe()
//   },
// })

// race(ob1, ob2, ob3).subscribe(data => console.log('race return : ', data))

// example 2:
// import { forkJoin, of, timer } from 'rxjs';
// const { forkJoin, of, timer } = rxjs;

// const observable = forkJoin({
//   foo: of(1, 2, 3, 4),
//   bar: Promise.resolve(8),
//   baz: timer(4000)
// });
// observable.subscribe({
//  next: value => console.log(value),
//  complete: () => console.log('This is how it ends!'),
// });

// Logs:
// { foo: 4, bar: 8, baz: 0 } after 4 seconds
// 'This is how it ends!' immediately after
