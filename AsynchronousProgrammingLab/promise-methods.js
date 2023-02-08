let alwaysResolvingPromise = Promise.resolve('YES'); //този промис винаги ще се резолва
let alwaysRejectingPromise = Promise.reject('NO'); //този промис винаги ще се реджеква

alwaysResolvingPromise
    .then(res => console.log(res))
    .catch((err) => console.log('NEVER USED'))
    // .finally(() => {  //без значение дали ще резолвне или реджекне, изпълни след това файнали
    //     console.log('finally');
    // });

alwaysRejectingPromise
    .catch((reason) => console.log(reason));

    //ако искаме да резолвнем много промиси наведнъж
let multiplePromise = Promise.all([
    alwaysResolvingPromise,
    Promise.resolve('YES2'),
]);

multiplePromise.then(res => {
    console.log(res);
});
