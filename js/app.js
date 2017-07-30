/*Najpierw tworzymy zmienną orderCount, która będzie nam zliczać liczbę zamówień. Za każdym razem, gdy wywołamy funkcję takeOrder zmienna inkrementuje o jeden.*/

var orderCount = 0;

/*Funkcja takeOrder ma dwa argumenty: topping oraz crustType w bloku funkcji mamy skrócony zapis inkrementacji zmiennej orderCount  oraz consol.log, który będzie wyświetlał formułę zawartą w nawiasach().*/
function takeOrder(topping, crustType) {
	orderCount +=1;
  console.log("Order: " + crustType + " pizza topped with " + topping);
}

/*W tej funkcji chodzi o to, żeby policzyć ile będzie łącznie trzeba zapłacić za zamówienie. Ma ona jeden argument, czyli itemCount. W bloku funkcji znajduje się formułą return zwracająca wynik zmiennej orderCount pomnożony przez cenę jednej pizzy. W konsoli wyświetli się wynik mnożenia.*/
function getSubTotal(itemCount) {
  return orderCount * 7.5;
}
/*Funkcja getTax służy do policzenia ceny z podatkiem. Nie ma ona argumentu. Zwraca wynik mnożenia wyniku funkcji getSubTotal przez wartość podatku. W tym wypadku 0.06.*/

function getTax() {
  return getSubTotal(orderCount) * 0.06;
}
/*Funkcja getTotal również nie ma argumentu. Służy do zsumowania wyniku z funkcji getSubTotal oraz getTax. Wyjdzie suma całego zamówienia z podatkiem.*/
function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

/*Za pomocą takeOrder() wywołujemy funkcję zamówienia. */
takeOrder("bacon", "thin crust");
takeOrder("flatbread crust", "olives");
takeOrder("thick crust", "salami");

/*consol log wyświetlający sumę netto */
console.log(getSubTotal(orderCount));
/*consol log wyświetlający sumę brutto - z podatkiem*/
console.log(getTotal());
