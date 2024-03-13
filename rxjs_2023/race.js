import { interval, map, race } from 'rxjs'

// node --require @babel/register ./race.js

const obs1 = interval(7000).pipe(map(() => 'slow one'))
const obs2 = interval(3000).pipe(map(() => 'fast one'))
const obs3 = interval(5000).pipe(map(() => 'medium one'))

const subscription = race(obs1, obs2, obs3).subscribe((winner) => {
  console.log(winner)
  subscription.unsubscribe()
})
