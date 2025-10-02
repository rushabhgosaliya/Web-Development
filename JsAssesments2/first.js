function startroutine() {
  let print = (document.getElementById("printtext").innerHTML =
    "Starting Routine");
  let print2 = (document.getElementById("printtext2").innerHTML =
    "Today's Task");

  let arrroutine = ["Prepare breakfast", "Wash dishes", "Make coffee"];
  let print3 = (document.getElementById("task1").innerHTML =
    "1)" + arrroutine[0]);
  let print4 = (document.getElementById("task2").innerHTML =
    "2)" + arrroutine[1]);
  let print5 = (document.getElementById("task3").innerHTML =
    "3)" + arrroutine[2]);

  let print6 = (document.getElementById("printtext3").innerHTML =
    "Starting Now");

  let clear = document.getElementById("cleartext").remove();

  function preparebreakfast() {
    return new Promise(function (resolve, reject) {
      let success = true;
      setTimeout(function () {
        if (success) {
          resolve("I am Prepare Breakfast");
        } else {
          reject("i am not prepare Breakfast");
        }
      }, 3000);
    });
  }

  function washdishes() {
    return new Promise(function (resolve, reject) {
      let success = true;
      setTimeout(function () {
        if (success) {
          resolve("I am Wash Dishes");
        } else {
          reject("i am not Wash Dishes");
        }
      }, 3000);
    });
  }

  function makecoffee() {
    return new Promise(function (resolve, reject) {
      let success = true;
      setTimeout(function () {
        if (success) {
          resolve("I am Make a coffee");
        } else {
          reject("i am Not make a coffee");
        }
      }, 3000);
    });
  }



  async function printvalue() {
    try {
      let container = document.getElementById("breakfast");

      let name = await preparebreakfast();
      container.append(name);

      let container2 = document.getElementById("washdish");
      let name2 = await washdishes();
      container2.append(name2);

      let container3 = document.getElementById("makecoffee");
      let name3 = await makecoffee();
      container3.append(name3);
    } catch (e) {
      console.error(e);
    }
  }

  printvalue();

}

let content = document.getElementById('maindiv')
function clrtxt(){
  content.innerHTML = "<h1>Click Start Routine to begin</h1>";
}
