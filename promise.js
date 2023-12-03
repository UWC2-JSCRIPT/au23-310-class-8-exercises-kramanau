let myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    const number = Math.random();
    if (number > 0.5) {
      resolve('success');
    }else {
      reject();
    }
  }, 1000);
});

myPromise
  .then(function(string) {
    console.log(string);
  })
  .catch(() => {
    console.log('failure');
  })
  .finally(function() {
    console.log('complete');
  });

