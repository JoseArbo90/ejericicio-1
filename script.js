// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true
//  * name: usuario2, country: france, money: 0, premiumAccount: false
//  * name: usuario3, country: spain, money: 537, premiumAccount: false
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true
//  * name: usuario5, country: spain, money: 250, premiumAccount: false
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter".
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  var arrayUsuarios = [];

  function createUsers(name, country, money, premiumAccount) {
    var usuario = new Object();
    usuario.name = name;
    usuario.country = country;
    usuario.money = money;
    usuario.premiumAccount = premiumAccount;
    arrayUsuarios.push(usuario);
  }
  createUsers("Usuario1", "spain", 199, true);
  createUsers("Usuario2", "france", 0, false);
  createUsers("Usuario3", "spain", 537, false);
  createUsers("Usuario4", "italy", 1004, true);
  createUsers("Usuario5", "spain", 250, false);
  createUsers("Usuario6", "ireland", 799, true);
  createUsers("Usuario7", "spain", 3345, false);

  function filterUsers(arrayUsuarios1) {
    var arrayCondicion1 = [];
    for (i = 0; i < arrayUsuarios.length; i++) {
      objeto = arrayUsuarios[i];
      if ((objeto.country = "spain" && object.money > 200)) {
        array;
      }
    }
    arrayCondicion = arrayCondicion1;
  }
  filterUsers(arrayUsuarios);
  console.log(arraycondicion1);
  
}
