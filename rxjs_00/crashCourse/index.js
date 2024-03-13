const { Observable } = require('rxjs')
const { map } = require('rxjs/operators')

const users = {
  data: [
    {
      id: 1,
      status: 'active',
      age: 14,
    },
    {
      id: 1,
      status: 'inactive',
      age: 12,
    },
    {
      id: 1,
      status: 'active',
      age: 42,
    },
    {
      id: 1,
      status: 'inactive',
      age: 42,
    },
    {
      id: 1,
      status: 'active',
      age: 13,
    },
    {
      id: 1,
      status: 'inactive',
      age: 75,
    },
    {
      id: 1,
      status: 'inactive',
      age: 43,
    },
    {
      id: 1,
      status: 'inactive',
      age: 54,
    },
    {
      id: 1,
      status: 'active',
      age: 7,
    },
    {
      id: 1,
      status: 'active',
      age: 17,
    },
  ],
}

// 定义Observable
// pipe 使用operator来处理数据
const observable = new Observable((subscriber) => subscriber.next(users)).pipe(
  map((values) => values.data),
  map((values) => values.filter((v) => v.age > 30)),
  map((values) => values.filter((v) => v.status === 'inactive'))
)

// 定义 observer

const observer = {
  next: (x) => console.log('observer got value ', x),
  error: (err) => console.log('observer got error', err),
  complete: () => console.log('observer got a complete notification'),
}

const observer2 = {
  next: (x) => console.log('observer got value ', x),
  error: (err) => console.log('observer got error', err),
  complete: () => console.log('observer got a complete notification'),
}

observable.subscribe(observer)
observable.subscribe(observer2)

// 订阅observer来处理observable 数据, observable.subscribe(observer)
