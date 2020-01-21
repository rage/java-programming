---
path: '/part-12/4-multidimensional-data'
title: 'Multidimensional data'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

<!-- - Tunnet menetelmiä moniulotteisen tiedon esittämiseen. -->
<!-- - Osaat luoda ja käyttää moniulotteisia taulukoita. -->
 -  Know ways to represent multidimensional data
  - Can create and use multidimensional arrays

</text-box>

<!-- Aiemmat esimerkkimme ovat käsitelleet yksiulotteisia taulukoita, missä indeksi kertoo sijainnin yhdessä ulottuvuudessa. Taulukon voi luoda myös useampiulotteisena, jolloin taulukossa olevaa tietoa voi tarkastella useamman indeksin avulla. Tämä on kätevää esimerkiksi silloin, jos tieto on useampiulotteista kuten esimerkiksi koordinaatistossa. -->
Previously we have used one dimensional arrays, where the index tells us the location of a value in the only dimension.
We can also create multidimensional arrays. Then we need the indexes of a value in each dimension to access the value.
This comes handy when our data is multidimensional, for example when dealing with coordinates.

<!-- Kaksiulotteinen taulukko, jossa on kaksi rowä ja kolme columntta, luodaan seuraavasti: -->
A two dimensional array with two rows and three columns can be created like so:


```java
int rows = 2;
int columns = 3;
int[][] twoDimensionalArray = new int[rows][columns];
```

<!-- Yllä luomme taulukon, jonka jokainen row viittaa taulukkoon, jossa on tietty määrä sarakkeita. Kaksiulotteisen taulukon läpikäynti onnistuu kahden sisäkkäisen for-toistolauseen avulla seuraavasti: -->
In the array we created above, each row refers to an array with a certain number of columns.
We can iterate over a two dimensional array using two nested for loops like so:

```java
int rows = 2;
int columns = 3;
int[][] twoDimensionalArray = new int[rows][columns];

System.out.println("row, column, value");
for (int row = 0; row < twoDimensionalArray.length; row++) {
    for (int column = 0; column < twoDimensionalArray[row].length; column++) {
        int value = twoDimensionalArray[row][column];
        System.out.println("" + row + ", " + column + ", " + value);
    }
}
```

<!-- Ylläolevan ohjelman tulostus on seuraava. -->
The program output is as follows:

<sample-output>

row, column, value
0, 0, 0
0, 1, 0
0, 2, 0
1, 0, 0
1, 1, 0
1, 2, 0

</sample-output>

<!-- Yllä huomataan että `int`-tyyppisten muuttujien oletusvalue on 0. -->
We can see that the default value of variables type `int` is 0.

<!-- Voimme muuttaa taulukon valueja kuten ennenkin. Alla asetamme kolmeen kohtaan uudet valuet. -->
We can change the values in the array just like before.
Below we set new values to three elements of the array.

```java
int rows = 2;
int columns = 3;
int[][] twoDimensionalArray = new int[rows][columns];

twoDimensionalArray[0][1] = 4;
twoDimensionalArray[1][1] = 1;
twoDimensionalArray[1][0] = 8;

System.out.println("row, column, value");
for (int row = 0; row < twoDimensionalArray.length; row++) {
    for (int column = 0; column < twoDimensionalArray[row].length; column++) {
        int value = twoDimensionalArray[row][column];
        System.out.println("" + row + ", " + column + ", " + value);
    }
}
```

Nyt tulostus näyttää seuraavalta:

<sample-output>

row, column, value
0, 0, 0
1, 0, 4
2, 0, 0
0, 1, 8
1, 1, 1
2, 1, 0

</sample-output>


<!-- <programming-exercise name='Taulukko merkkijonona' tmcname='osa12-Osa12_09.TaulukkoMerkkijonona'> -->

<programming-exercise name='Array as a string' tmcname='part12-Part12_09.ArrayAsAString'>

<!-- Luo tehtäväpohjaan metodi `public static String taulukkoMerkkijonona(int[][] taulukko)`, joka muodostaa parametrina saamastaan taulukosta merkkijonomuotoisen esityksen ja palauttaa sen. -->

Create in the exercise base a method called `public static String arrayAsString(int[][] array)`. It should create a string representation of the array it receives as the parameter and return it.

<!-- Kertaa yhdeksännestä osasta StringBuilderin käyttö ennen tehtävän tekoa. Alla muutamia esimerkkejä metodin odotetusta toiminnasta. -->

Brush up on using StrinBuilder in part nine before taking  on this exercise. Below there are a few examples of how the method is expected to  work.

<!-- ```java
int rows = 2;
int columns = 3;
int[][] matriisi = new int[rows][columns];
matriisi[0][1] = 5;
matriisi[1][0] = 3;
matriisi[1][2] = 7;
System.out.println(taulukkoMerkkijonona(matriisi));
``` -->

```java
int rows = 2;
int cols = 3;
int[][] matrix = new int[rows][columns];
matrix[0][1] = 5;
matrix[1][0] = 3;
matrix[1][2] = 7;
System.out.println(arrayAsString(matrix));
```

<sample-output>

050
307

</sample-output>

<!-- ```java
int[][] matriisi = {
    {3, 2, 7, 6},
    {2, 4, 1, 0},
    {3, 2, 1, 0}
};

System.out.println(taulukkoMerkkijonona(matriisi));
``` -->

```java
int[][] matrix = {
    {3, 2, 7, 6},
    {2, 4, 1, 0},
    {3, 2, 1, 0}
};

System.out.println(arrayAsString(matrix));
```

<sample-output>

3276
2410
3210

</sample-output>

</programming-exercise>


<!-- <programming-exercise name='Taikaneliö (4 osaa)' tmcname='osa12-Osa12_10.Taikanelio'> -->

<programming-exercise name='Magic square (4 parts)' tmcname='part12-Part12_10.MagicSquare'>

<!-- <a href="https://fi.wikipedia.org/wiki/Taikaneli%C3%B6" target="_blank">Taikaneliöt</a> ovat kokonaisluvuista järjestettyjä neliöitä, joiden jokaisen rown, sarakkeen ja lävistäjän summa on sama. Harjoitellaan taulukoiden käyttöä taikaneliöiden yhteydessä. -->

<a href="https://en.wikipedia.org/wiki/Magic_square" target="_blank">Magic squares</a> are squares composed of integers, where the sum of each row, column, and diagonal is the same. Let's practice our array skills and play around with magic squares.

<br/>

<!-- Ohjelmassa on annettu osittain toteutettu luokka `Taikanelio`, jota voidaan käyttää lähtökohtana. Tehtävänäsi on ensin lisätä luokkaan toiminnallisuutta, jolla tarkistetaan onko neliö taikaneliö. Tämän jälkeen toteutat algoritmin taikaneliön luomiseen. -->

In the exercise base there is a partially implemented class called `MagicSquare` that we can use as a basis for our program. Your assignment is to first add functionality to the class so that it can check whether a given square is magical. After this you'll implement an algorithm for creating a magic square.


<!-- <h2>Rivien summat</h2> -->

<h2>Sums of rows</h2>

<!-- Luokassa Taikanelio on valmiina metodi `public ArrayList<Integer> rowenSummat()`, joka palauttaa tyhjän ArrayList-olion. Muuta metodin toiminnallisuutta siten, että se palauttaa listan, jossa on jokaisen taikaneliön rown summa. -->

In the class MagicSquare there is already a method called `public ArrayList<Integer> sumsOfRows()`, which returns an empty ArrayList object. Change the functionality of the method so that it returns a list of sums of every row of the (magic) square.

<!-- Esimerkiksi seuraavanlaisella taikaneliöllä rowenSummat-metodin pitäisi palauttaa lista, jossa on luvut `15, 15, 15`. -->

For example, with the following magic square the `sumOfRows` method should return a list that contains the integers `15, 15, 15`.

```plaintext
8 1 6
3 5 7
4 9 2
```

<!-- Vaikka taikaneliö ei olisi "oikea" taikaneliö, tulee rowen summat silti palauttaa. Allaolevalla esimerkillä rowenSummat-metodin pitäisi palauttaa lista, jossa on luvut `6, 15, 24`. -->

Even if the magic square is not a "legitimate" magic square, the sums of the rows should still be returned. With the input below, the `sumsOfRows` should return a list with the integer contents `6, 15, 24`.

```plaintext
1 2 3
4 5 6
7 8 9
```


<!-- <h2>Sarakkeiden summat</h2> -->

<h2>Sums of columns</h2>

<!-- Luokassa Taikanelio on valmiina metodi `public ArrayList<Integer> sarakkeidenSummat()`, joka palauttaa tyhjän ArrayList-olion. Muuta metodin toiminnallisuutta siten, että se palauttaa listan, jossa on jokaisen taikaneliön sarakkeen summa. -->

There already exists a stub for the method `public ArrayList<Integer> sumsOfColumns`. At the moment it only returns an empty ArrayList object. Change the functionality of the method so that it returns a list that contains the sums of every column of the magic square.

<!-- Esimerkiksi seuraavanlaisella taikaneliöllä sarakkeidenSummat-metodin pitäisi PALAUTTAA lista, jossa on luvut `15, 15, 15`. -->

As an example, when receiving the following magic square the sumsOfColumns should return a list that contains the integers `15, 15, 15`.

```plaintext
8 1 6
3 5 7
4 9 2
```

<!-- Vaikka taikaneliö ei olisi "oikea" taikaneliö, tulee sarakkeiden summat silti palauttaa. Allaolevalla esimerkillä sarakkeidenSummat-metodin pitäisi palauttaa lista, jossa on luvut `12, 15, 18`. -->

Even if the magic square is not a "legitimate" magic square, the sum of columns should be returned. In the example below, the sumsOfColumns method should return a list that contains the integers `12, 15, 18`.


```plaintext
1 2 3
4 5 6
7 8 9
```


<!-- <h2>Lävistäjien summat</h2> -->

<h2>Sums of diagonals</h2>

<!-- Toteuta seuraavaksi metodi `public ArrayList<Integer> lavistajienSummat()`, joka palauttaa listan, jossa on taikaneliön lävistäjien summat. -->

Next, implement the method `public ArrayList<Integer> sumsOfDiagonals()` that returns a list with the sums of the diagonals of a magic square.

<!-- Esimerkiksi seuraavanlaisella taikaneliöllä lavistajienSummat-metodin pitäisi palauttaa lista, jossa on luvut `15, 15` (8 + 5 + 2) ja (4 + 5 + 6). -->

With the following magic square, for instance, the method should return a list with the contents `15, 15` (8 + 5 + 2) and (4 + 5 + 6).

```plaintext
8 1 6
3 5 7
4 9 2
```

<!-- Vaikka taikaneliö ei olisi "oikea" taikaneliö, tulee lävistäjien summat silti palauttaa. Allaolevalla esimerkillä lavistajienSummat-metodin pitäisi palauttaa lista, jossa on luvut `15, 15` (1 + 5 + 9) ja (7 + 5 + 3). -->

Even if the square is not a "legitimate" magic square, the sums of the diagonals should still be returned. With the square below, the sumsOfDiagonals should return a list with the integer contents `(15, 15)` (1 + 5 + 9) and (7 + 5 + 3).

```plaintext
1 2 3
4 5 6
7 8 9
```


<!-- <h2>Taikaneliön luominen</h2> -->

<h2>Conjuring a magic square</h2>

<!-- Huom! Tämä tehtävä on melko visainen, kannattanee palauttaa edelliset osat ennen tämän aloitusta. -->

NB! This part might be quite tricky, so you might want to return the previous sections before beginning it.

<!-- Taikaneliön pystyy myös luomaan. Tutustutaan <a href="https://en.wikipedia.org/wiki/Siamese_method" target="_blank">Siamese method</a>-menetelmään, jonka avulla voidaan luoda parittomien lukujen kokoisia taikaneliöitä. -->

It's also possible to create magic squares of your own. Let's familiarize ourselves with the <a href="https://en.wikipedia.org/wiki/Siamese_method" target="_blank">Siamese method</a>. It can be used to create magic squares that have an odd size (as opposed to even).

<br/>

<!-- Siamese method -algoritmi toimii siten, että numero yksi asetetaan ylimmän rown keskimmäiseen sarakkeeseen. Tämän jälkeen siirrytään yksi ylös ja yksi oikealle ja asetetaan luku kaksi. Tämän jälkeen taas siirrytään yksi ylös ja yksi oikealle, ja asetetaan luku kolme jne. -->

The Siamese method algorithm works in the following manner. You set number one to the centermost column of the top row. After this, we move one row up and one column right, and place number two in this cell. We continue by moving one right, one up, and placing the number 3, etc.

<!-- Lukujen lisäämiseen liittyy kaksi sääntöä: -->

Two rules govern the number placements:

<!-- 1. Jos siirtymä tapahtuu siten, että mennään taikaneliön alueen ulkopuolelle, hypätään toiselle laidalle. Jos siis mennään "oikealta yli" mennään vasempaan laitaan ja jos mennään "ylhäältä yli" mennään alalaitaan. -->

1. If the transition would leave us outside the bounds of the magic square, we jump to the opposite edge. In other words, if we go "over the right edge" we continue from the left edge, and if we go "over the top edge" we continue from the bottom.

<!-- 2. Jos kohdassa on jo luku, ei mennäkään ylös ja oikealle, vaan astutaan yksi askel alaspäin. -->

2. If the place already contains a number, we don't go up and right. Instead we take one step downwards.

<!-- Käy katsomassa yllä kuvatun algoritmin visualisaatio Wikipedian sivulta <a href="https://en.wikipedia.org/wiki/Siamese_method" target="_blank">Siamese method</a>. -->

Check the visualization for the described algorithm on the Wikipedia page <a href="https://en.wikipedia.org/wiki/Siamese_method" target="_blank">Siamese method</a>.

<br/>

<!-- Toteuta luokkaan `Taikaneliotehdas` metodi `luoTaikanelio` joka palauttaa taikaneliön jonka sivun pituus annetaan parametrina. Metodin tarvitsee toimia vain tilanteissa, missä neliön leveys on pariton luku. -->

Implement in the class `MagicSquareFactory` the method `createMagicSquare`. It should return a magic square whose side has the length that is specified as the parameter. The method only needs to work in cases where the width of the square is an odd integer.

</programming-exercise>


<text-box variant='hint' name='Array vs. Hash table'>

<!-- Taulukon toiminnallisuutta vastaavan toiminnallisuuden pystyy toteuttamaan hajautustaulun avulla. Eikö hajautustaulun käyttö olisi yleisesti ottaen parempi vaihtoehto, sillä sitä ei esimerkiksi tarvitse kasvattaa lainkaan? -->
We can implement the same functionality using a hash table. Wouldn't a hash table be a better option, since we do not have to worry about increasing its size at any point?


<!-- Kun hajautustaulusta haetaan tietoa tietyllä avaimella, metodin hashCode perusteella selvitetään paikka, mistä tietoa haetaan. Samassa paikassa voi olla useampi value (listassa), jolloin haettavaa avainta verrataan jokaiseen listalla olevaan valueon equals-metodia käyttäen. Kun taulukosta haetaan valuea tietyllä avaimella -- eli indeksillä -- ei vastaavaa toiminnallisuutta tarvitse tehdä. Taulukossa joko on value tai valuea ei ole. Taulukkoon liittyy pieni tehokkuushyöty ohjelman suorituskyvyn kannalta. -->
When we search for a value of a key from a hash table, we use the hashCode method to find the index to search from.
There can be multiple values at the same index (on a list). Then we have to kompare the key we want to find the value for to the key of each key-value pair on the list using the equals method.
When we search for a a value of a key -- or index -- in an array, we do not have to do any of that.
An array either contains a certain value or it does not, so there is a small performance beneft on using arrays.

<!-- Tämä tehokkuushyöty kuitenkin tulee lisääntyneen virhealttiuden sekä työmäärän kustannuksella. Hajautustauluun on valmiiksi toteutettuna sisäisen taulukon kasvattaminen ja sen toiminnallisuutta on testattu hyvin laajasti. Taulukkoa käytettäessä tällaista etua ei ole -- uutta toiminnallisuutta toteuttaessa saattaa päätyä virheisiin, mikä kasvattaa työmäärää. Virheet ovat toki luonnollinen osa ohjelmistokehitystä. -->
This performance benefit comes with some added workload and proneness to errors.
Hash tables have tested and proven functionality for increasing the size of the table. Arrays do not come with this benefit, and when implementing a new functionality we might cause errors which increases the workload.
However, errors are accepted and natural part of software development.

<!-- Kun ajattelemme muistin käyttöä, hajautustaululla voi olla -- tapauksesta riippuen -- pieni etu. Kun taulukko luodaan, muistista varataan heti tila koko taulukolle. Mikäli taulukon jokaiseen indeksiin ei tarvitse lisätä tietoa, on osa tästä tiedosta varattuna turhaan. Hajautustaululla taas tällaista muistin varaamista ei ennakkoon tehdä -- hajautustaulun kokoa kasvatetaan tarvittaessa. -->
When we consider the memory usage, hash table might -- in some situations -- have some benefits.
When an array is created, enough memory for the whole array is allocated for it.
If we do not have values in each element of the array, some of the memory stays unused.
With hash tables this does not happen -- the size of the hash table is increased only when necessary.

</text-box>


<!-- TODO: tänne game of life tai schellingin malli? -->
