const rxjs = require('../rxjs_01/rxjs.umd.min')

/****
 * promise
 */

// promise executor 是立即执行
const asyncCall = new Promise((resolve) => {
  resolve(1)
})

asyncCall.then((data) => console.log('received :', data))

function getProducts() {
  return asyncCall
}
let handle = (display = console.log)

getProducts().then((products) => handle(products))

getProducts().then((products) => display(products))

//----------------------------------
// rxjs

const { Observable } = rxjs

const observer = new Observable(subscriber => {
  subscriber.next(1)
})

observer.subscribe(data => console.log('rxjs observer: ', data))
