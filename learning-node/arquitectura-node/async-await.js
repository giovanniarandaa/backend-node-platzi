const promiseFuncion = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("hello world");
    } else {
      reject(new Error("Hello error"));
    }
  }, 500);
})

async function asyncAwait () {
  try {
    const msg = await promiseFuncion();
    console.log("message", msg)
  } catch (error) {
    console.error("error", error)
  }
}

asyncAwait();