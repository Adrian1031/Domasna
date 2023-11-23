// 1.Функција за враќање на решено ветување (then/catch):
function resolvedPromise() {
    return new Promise((resolve) => {
      resolve('Решено!');
    });
  }
  
  resolvedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

// 2.Функција за враќање на решено ветување (async/await):
async function asyncResolvedPromise() {
    return 'Async Решено!';
  }
  
  (async () => {
    try {
      const result = await asyncResolvedPromise();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  })();
  //Функција што враќа одбиено ветување (async/await):
  async function asyncRejectedPromise() {
    throw 'Async Одбиено!';
  }
  
  (async () => {
    try {
      const result = await asyncRejectedPromise();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  })();
  
        //4.Случајна функција (then/catch):
        function randomPromise(resolve = true) {
            return new Promise((res, rej) => {
              if (resolve) {
                res('Решено!');
              } else {
                rej('Одбиено!');
              }
            });
          }
          
          randomPromise(Math.random() >= 0.5)
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
          
    // 5.Функција Враќање на одбиено ветување (then/catch):
    function rejectedPromise() {
        return new Promise((resolve, reject) => {
          reject('Одбиено!');
        });
      }
      
      rejectedPromise()
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

      
        



  