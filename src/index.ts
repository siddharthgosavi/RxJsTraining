import { Observable } from "rxjs";

//Observable
const someObservable1$ = new Observable<string>(subscriber => {
  subscriber.next("Alice");
  subscriber.next("Ben");
  subscriber.next("Charlie");
  subscriber.complete();
});

//Observer
const observer = {
  next: (value: String) => console.log(value.toUpperCase())
};

//subscription
someObservable1$.subscribe(observer);



//unsubscribe
// console.log("");
const someObservable2$ = new Observable<string>(subscriber => {
  subscriber.next("Superman");
  setTimeout(() => subscriber.next("Flash"), 2000);
  setTimeout(() => subscriber.next("Batman"), 4000);
});

// const subscription = someObservable2$.subscribe(value => console.log(value.toUpperCase()));

// setTimeout(() => {
//   console.log("Unsubscribe");
//   subscription.unsubscribe();
// }, 3000);


console.log("");
// Multiple Subscription

console.log("Subscription 1: starts");
someObservable2$.subscribe(value => console.log("Subscription 1:", value.toUpperCase()));

setTimeout(() => {
  console.log("Subscription 2: starts");
  someObservable2$.subscribe(value => console.log("Subscription 2:", value.toUpperCase()));
}, 1000);