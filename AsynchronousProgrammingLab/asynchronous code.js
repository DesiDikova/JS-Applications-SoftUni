console.log('Start');

setTimeout(() => {    //да се изпълни дадена функция след определено време, което сме задали
    console.log('Done');   
}, 2000);

setTimeout(() => {    
    console.log('Done0');   
}, 0);

console.log('End');