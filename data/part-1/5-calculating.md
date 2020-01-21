---
path: "/part-1/5-calculating"
# title: "Laskentaa luvuilla"
title: "Calculating with numbers"
hidden: false
---

<text-box variant='learningObjectives' name='Learning objectives'>

<!-- - Osaat tehdä laskutoimintoja muuttujien avulla. -->

- learn to perform calculations with the help of variables.

<!-- - Osaat muodostaa tulostuslauseita, jossa on mukana sekä laskuoperaatioita (lausekkeita) että merkkijonoja. -->
- know how to form printable statements including both calculations (expressions) and strings.

</text-box>

<!-- Laskuoperaatiot ovat tuttuja ja suoraviivaisia: yhteenlasku `+`, erotus `-`, kertolasku `*` ja jakolasku `/`. Laskentajärjestys on myös tuttu: laskenta tehdään vasemmalta oikealle sulut huomioon ottaen. Kuitenkin `*` ja `/` lasketaan ennen `+` ja `-` operaatioita, samoin kuin perus- tai kansakoulumatematiikassa on tullut tutuksi. -->

The basic mathematical operations are both familiar and straightforward: addition `+`, subtraction `-`, multiplication `*`, and division`/`. The precedence is also familiar: operations are performed from left to right with the parentheses taken into account. Expressions involving `*` and `/` are calculated before those involving `+` and `-`, as is customary in elementary school mathematics.

<!-- ```java
int eka = 2;
System.out.println(eka); // tulostaa 2
int toka = 4;
System.out.println(toka); // tulostaa 4

int summa = eka + toka; // muuttujaan summa asetetaan muuttujien eka ja toka arvojen summa
System.out.println(summa); // tulostaa 6
``` -->

```java
int first = 2;
System.out.println(first); // prints 2
int second = 4;
System.out.println(second); // prints 4

int sum = first + second; // The sum of the values of the variables first and second is assigned to the variable sum
System.out.println(sum); // prints 6
```

<!-- ## Laskujärjestys ja sulut -->
## Precedence and Parentheses

<!-- Laskujärjestykseen voi vaikuttaa sulkujen avulla. Sulkujen sisällä olevat laskuoperaatiot suoritetaan ennen niiden ulkopuolella olevia laskuoperaatioita. -->

You can affect the order of operations by using of parentheses. Operations within parentheses are performed before those outside them.

<!-- ```java
int laskuSuluilla = (1 + 1) + 3 * (2 + 5);
System.out.println(laskuSuluilla); // tulostaa 23

int laskuSuluitta = 1 + 1 + 3 * 2 + 5;
System.out.println(laskuSuluitta); // tulostaa 13
``` -->

```java
int calculationWithParentheses = (1 + 1) = 3 * (2 + 5);
System.out.println(calculationWithParentheses); // prints 23

int calculationWithoutParentheses = 1 + 1 + 3 * 2 + 5;
System.out.println(calculationWithoutParentheses); // prints 13

```

<!-- Yllä olevan esimerkin voi jakaa myös osiin. -->

The example above can also be divided into steps.

<!-- ```java
int laskuSuluilla = (1 + 1);
System.out.println(laskuSuluilla); // tulostaa 2
laskuSuluilla = laskuSuluilla + 3 * (2 + 5);
System.out.println(laskuSuluilla); // tulostaa 23

int laskuSuluitta = 1 + 1;
laskuSuluitta = laskuSuluitta + 3 * 2;
laskuSuluitta = laskuSuluitta + 5;
System.out.println(laskuSuluitta); // tulostaa 13
``` -->

```java
int calculationWithParentheses = (1 + 1);
System.out.println(calculationWithParentheses); // prints 2
calculationWithParentheses = calculationWithParentheses + 3 * (2 + 5);
System.out.println(calculationWithParentheses); // prints 23

int calculationWithoutParentheses = 1 + 1;
calculationWithoutParentheses = calculationWithoutParentheses + 3 * 2;
calculationWithoutParentheses = calculationWithoutParentheses + 5;
System.out.println(calculationWithoutParentheses); // prints 13
```

<!-- <programming-exercise name="Sekunnit vuorokaudessa" tmcname='osa01-Osa01_16.SekunnitVuorokaudessa'> -->


<programming-exercise name="Seconds in a day" tmcname='part01-Part01_16.SecondsInADay'>


<!-- Toteuta tehtäväpohjaan ohjelma, joka kysyy käyttäjältä vuorokausien lukumäärää. Tämän jälkeen ohjelma tulostaa sekuntien määrän annetuissa vuorokausissa. -->

In the exercise template, implement a program that asks the user for the number of days. After that, the program prints the number of seconds in the given number of days.

<!-- Opimme aiemmin, että luvun lukeminen onnistuu seuraavasti: -->

Earlier we learned to read an integer in the following manner:

<!-- ```java
Scanner lukija = new Scanner(System.in);

System.out.println("Kirjoita luku ");
int luku = Integer.valueOf(lukija.nextLine());
System.out.println("Kirjoitit " + luku);
``` -->

```java
Scanner scanner = new Scanner(System.in);

System.out.println("Give a number:");
int number = Integer.valueOf(scanner.nextLine());
System.out.println("You gave " + number);
```

<!-- Esimerkkitulostuksia: -->

Examples of expected output:

<!-- <sample-output>

Kuinka monen vuorokauden sekunnit tulostetaan?
**1**
86400

</sample-output> -->

<sample-output>

How many days would you like to convert to seconds?
**1**
86400

</sample-output>

<!-- <sample-output>

Kuinka monen vuorokauden sekunnit tulostetaan?
**3**
259200

</sample-output> -->

<sample-output>

How many days would you like to convert to seconds?
**3**
259200

</sample-output>

<!-- <sample-output>

Kuinka monen vuorokauden sekunnit tulostetaan?
**7**
604800

</sample-output> -->

<sample-output>

How many days would you like to convert to seconds?
**7**
604800

</sample-output>

</programming-exercise>


<quiz id="54056702-b227-5747-8d6c-d3f15e8f5c8a"></quiz>

<!--
<text-box variant='hint' name='Lauseke ja lause'>

Lauseke (expression) on arvojen yhdistelmä, joka muuntuu arvoksi laskuoperaation tai evaluaation yhteydessä. Alla oleva lause sisältää lausekkeen `1 + 1 + 3 * 2 + 5`, joka evaluoidaan ennen arvon asetusta muuttujaan.

```java
int laskuSuluitta = 1 + 1 + 3 * 2 + 5;
```

Lausekkeen evaluaatio tapahtuu aina ennen muuttujan arvon asetusta, eli yllä lasku "1 + 1 + 3 * 2 + 5" suoritetaan ennen tuloksen asetusta muuttujaan.

</text-box> -->

<text-box variant='hint' name='Expression and Statement'>

An *expression* is a combination of values that is turned into another value through a calculation or evaluation. The *statement* below includes the expression `1 + 1 + 3 * 2 + 5`, which is evaluated prior to its assignment to the variable.

```java
int calculationWithoutParentheses = 1 + 1 + 3 * 2 + 5;
```

The evaluation of an expression is always performed before its value is assigned to a variable. As such, the calculation "1 + 1 + 3 * 2 + 5" in the example above is performed before the result is assigned to the variable.

</text-box>


<!-- Lausekkeen evaluointi tapahtuu ohjelmakoodissa siinä kohtaa, missä lauseke on. Evaluointi onnistuu siis esimerkiksi myös tulostuslauseen yhteydessä, jos lauseketta käytetään tulostuslauseen parametrin arvon laskemisessa. -->

An expression is evaluated where it occurs in the program's source code. As such, the evaluation can occur within a print statement, if the expression is used in calculating the value of the print statement's parameter.


<!-- ```java
int eka = 2;
int toka = 4;

System.out.println(eka + toka); // tulostaa 6
System.out.println(2 + toka - eka - toka); // tulostaa 0
``` -->

```java
int first = 2;
int second = 4;

System.out.println(first + second); // prints 6
System.out.println(2 + second - first - second); // prints 0
```

<!-- Lauseke ei muuta muuttujassa olevaa arvoa, ellei lausekkeen lopputulosta aseteta muuttujan arvoksi tai anneta parametrina esimerkiksi tulostukselle. -->

An expression does not change the value stored in a variable unless the expression's result is assigned to a variable or used as a parameter, for instance, in printing.

<!-- ```java
int eka = 2;
int toka = 4;

// alla oleva lauseke ei edes toimi, sillä lauseketta
// ei aseteta minkään muuttujan arvoksi tai anneta parametrina
// tulostuslauseelle
eka + toka;
``` -->

```java
int first = 2;
int second = 4;

// the expression below does not even work, since
// the result is not assigned to any variable
// or given as a parameter to a print statement
first + second;
```

<quiz id="f9af4add-d06f-59bb-ab42-d1cb9733ba88"></quiz>


<!-- ## Laskentaa ja tulostamista -->

## Calculating and Printing

<!-- Muuttujan arvon voi tulostaa komennolla `System.out.println`. Tulostettavaan hipsuilla merkittyyn merkkijonoon, esim. "Pituus ", voidaan lisätä muuta tulostettavaa operaation `+` avulla. -->
The command `System.out.println` prints the value of a variable. The string literal to be printed, which is marked by quotation marks, can be appended with the operation `+`.

<!-- ```java
int pituus = 42;
System.out.println("Pituus " + pituus);
``` -->

```java
int length = 42;
System.out.println("Length " + length);
```

<!-- <sample-output>

Pituus 42

</sample-output> -->

<sample-output>

Length 42

</sample-output>

<!-- ```java
System.out.println("tuossa on kokonaisluku -- > " + 2);
System.out.println(2 + " < -- tuossa on kokonaisluku");
```
-->

```java
System.out.println("here is an integer --> " + 2);
System.out.println(2 + " <-- here is an integer");
```


<!-- <sample-output>

tuossa on kokonaisluku -- > 2
2 <-- tuossa on kokonaisluku

</sample-output> -->

<sample-output>

here is an integer --> 2
2 <-- here is an integer

</sample-output>

<!-- Jos toinen operaation `+` kohteista on merkkijono, muutetaan myös toinen operaation kohteista merkkijonoksi ohjelman suorituksen yhteydessä. Alla olevassa esimerkissä kokonaisluku `2` on muutettu merkkijonoksi "2", ja siihen on yhdistetty merkkijono. -->

If one of the operands of the operation `+` is a string, the other operand will be changed into a string too during program execution. In the example below, the integer `2` is turned into the string "2", and a string has been appended to it.

<!-- Aiemmin esitellyt laskusäännöt pätevät täälläkin: -->

The precedence introduced earlier also apply here:

<!-- ```java
System.out.println("Neljä: " + (2 + 2));
System.out.println("Mutta! kaksikymmentäkaksi: " + 2 + 2);
``` -->

```java
System.out.println("Four: " + (2 + 2));
System.out.println("But! Twenty-two" + 2 + 2);
```

<!-- <sample-output>

Neljä: 4
Mutta! kaksikymmentäkaksi: 22

</sample-output> -->

<sample-output>

Four: 4
But! Twenty-two: 22

</sample-output>

<!-- <code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        System.out.println(\"Neljä: \" + (2 + 2));\n        System.out.println(\"Mutta! kaksikymmentäkaksi: \" + 2 + 2);\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Neljä: 4\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Neljä: 4\nMutta! kaksikymmentäkaksi: 22\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Neljä: 4\nMutta! kaksikymmentäkaksi: 22\n","event":"return","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer> -->

<code-states-visualizer input='{"code":"public class Example {\n    public static void main(String[] args) {\n        System.out.println(\"Four: \" + (2 + 2));\n        System.out.println(\"But! Twenty-two: \" + 2 + 2);\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Four: 4\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Four: 4\nBut! Twenty-two: 22\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Four: 4\nBut! Twenty-two: 22\n","event":"return","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<!-- <programming-exercise name="Kahden luvun summa" tmcname='osa01-Osa01_17.KahdenLuvunSumma'> -->

<programming-exercise name="Sum of two numbers" tmcname='part01-Part01_17.SumOfTwoNumbers'>

<!-- Kirjoita ohjelma, joka kysyy käyttäjältä kahta lukua. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämien lukujen summan. -->

Write a program that asks the user for two numbers. After this, the program prints the sum of the numbers given by the user.

<!-- Kun kysyt useampaa lukua, tee kullekin luvulle oma muuttuja: -->

When you ask for multiple numbers, create a separate variable for each:

<!-- ```java
Scanner lukija = new Scanner(System.in);

System.out.println("Syötä ensimmäinen luku!");
int eka = Integer.valueOf(lukija.nextLine());
System.out.println("Syötä toinen luku!");
int toka = Integer.valueOf(lukija.nextLine());

// tee jotain luvuilla
``` -->

```java
Scanner scanner = new Scanner(System.in);

System.out.println("Give the first number:");
int first = Integer.valueOf(scanner.nextLine());
System.out.println("Give the second number:");
int second = Integer.valueOf(scanner.nextLine());

// do something with the numbers
```

<!-- Alla on annettuna ohjelman toivottuja esimerkkitulostuksia: -->

Here's how the program is expected to work:

<!-- <sample-output>

Syötä ensimmäinen luku!
**8**
Syötä toinen luku!
**3**
Lukujen summa on 11

</sample-output> -->

<sample-output>
̈́Give the first number:
**8**
Give the second number:
**3**
The sum of the numbers is 11
</sample-output>

<!-- <sample-output>

Syötä ensimmäinen luku!
**3**
Syötä toinen luku!
**-1**
Lukujen summa on 2

</sample-output> -->

<sample-output>

Give the first number:
**3**
Give the second number:
**-1**
The sum of the numbers is 2

</sample-output>

</programming-exercise>


<!-- <programming-exercise name="Kolmen luvun summa" tmcname='osa01-Osa01_18.KolmenLuvunSumma'> -->

<programming-exercise name="Sum of three numbers" tmcname='part01-Part01_18.SumOfThreeNumbers'>

<!-- Kirjoita ohjelma, joka kysyy käyttäjältä kolmea lukua. Tämän jälkeen ohjelma tulostaa käyttäjän syöttämien lukujen summan. -->

Write a program that asks the user for three numbers. After this the program prints the sum of the numbers given by the user.

<!-- Alla on annettuna ohjelman esimerkkitulostuksia: -->

The program should work like this:

<!-- <sample-output>

Syötä ensimmäinen luku!
**8**
Syötä toinen luku!
**3**
Syötä kolmas luku!
**3**
Lukujen summa on 14

</sample-output> -->

<sample-output>

Give the first number:
**8**
Give the second number:
**3**
Give the third number:
**3**
The sum of the numbers is 14

</sample-output>

<!-- <sample-output>

Syötä ensimmäinen luku!
**3**
Syötä toinen luku!
**-1**
Syötä kolmas luku!
**2**
Lukujen summa on 4

</sample-output> -->

<sample-output>


Give the first number:
**3**
Give the second number:
**-1**
Give the third number:
**2**
The sum of the numbers is 4

</sample-output>


</programming-exercise>


<!-- Edellistä tietoa soveltamalla voimme luoda lausekkeen, joka sisältää tekstiä ja muuttujan, ja joka evaluoidaan tulostuksen yhteydessä: -->

Applying this knowledge, we can create an expression consisting of some text and a variable, which is evaluated in connection with the printing:

<!-- ```java
int x = 10;

System.out.println("muuttujan x arvo on: " + x);

int y = 5;
int z = 6;

System.out.println("y on " + y + " ja z on " + z);
``` -->

```java
int x = 10;

System.out.println("The value of the variable x is: " + x);

int y = 5;
int z = 6;

System.out.println("y is " + y + " and z is " + z);
```

<!-- Tulostus: -->

<!-- <sample-output>

muuttujan x arvo on: 10
y on 5 ja z on 6

</sample-output> -->


<sample-output>

The value of the variable x is: 10
y is 5 and z is 6

</sample-output>


<!-- <programming-exercise name="Yhteenlasku ja kaava" tmcname='osa01-Osa01_19.YhteenlaskuJaKaava'> -->

<programming-exercise name="Addition formula" tmcname='part01-Part01_19.AdditionFormula'>



Create a program that can be used to add two integers together. In the beginning, the user is asked to give two integers that are to be summed. The program then prints the formula that describes the addition of the numbers.


<!-- Tulostusesimerkkejä: -->
Exampe output:

<!-- <sample-output>

Syötä ensimmäinen luku!
**5**
Syötä toinen luku!
**4**
5 + 4 = 9

</sample-output> -->

<sample-output>

Give the first number:
**5**
Give the second number:
**4**
5 + 4 = 9

</sample-output>

<!-- <sample-output>

Syötä ensimmäinen luku!
**73457**
Syötä toinen luku!
**12888**
73457 + 12888 = 86345

</sample-output> -->

<sample-output>

Give the first number:
**73457**
Give the second number:
**128888**
73457 + 12888 = 86345

</sample-output>

</programming-exercise>


<!-- <programming-exercise name="Kertolasku ja kaava" tmcname='osa01-Osa01_20.KertolaskuJaKaava'> -->

<programming-exercise name="Multiplication formula" tmcname='part01-Part01_20.MultiplicationFormula'>


<!-- Tee edellistä ohjelmaa mukaillen ohjelma, joka laskee kahden kokonaislukumuuttujaan sijoitetun arvon kertolaskun. -->

Similar to the previous exercise, create a program that multiplies the values stored in two integer variables.

<!-- Esimerkiksi jos syötetyt luvut ovat 2 ja 8, ohjelman suoritus on seuraava: -->

For instance, if the entered numbers are 2 and 8, the program should print the following:

<!-- <sample-output>

Syötä ensimmäinen luku!
**2**
Syötä toinen luku!
**8**
2 * 8 = 16

</sample-output> -->

<sample-output>

Give the first number:
**2**
Give the second number:
**8**
2 * 8 = 16

</sample-output>

<!-- Jos taas syötetyt luvut ovat 277 ja 111, ohjelman suoritus on seuraava: -->

Likewise, if the entered numbers are 277 and 111, the print should be the following:

<!-- <sample-output>

Syötä ensimmäinen luku!
**277**
Syötä toinen luku!
**111**
277 * 111 = 30747

</sample-output> -->

<sample-output>

Give the first number:
**277**
Give the second number:
**111**
277 * 111 = 30747

</sample-output>

</programming-exercise>

<!-- TODO: miksi alla oleva teksti näkyy pienellä? (Onglema: sub tag - täytyy korjata) -->

<!-- Kun olet saanut edellisen tehtävän toteutettua, kokeile mikä on suurin mahdollinen kertolasku minkä saat laskettua. Huomaamasi ilmiön taustalla on se, että kokonaislukumuuttujan arvo voi olla korkeintaan 2<sup>31</sup>-1 eli 2147483647. Tämä johtuu siitä, että kokonaislukumuuttujat esitetään tietokoneen muistissa 32 bitin avulla. Tähän tutustutaan tarkemmin muunmuassa kurssilla Tietokoneen toiminta. -->

Once you have completed the previous exercise, try finding out the greatest possible multiplication that you can calculate. The reason behind the phenomenon you've observed is that the value of an integer value is capped at the maximum of 2<sup>31</sup>-1(i.e. 2147483647). This is because integer variables are represented with 32 bits in the computer's memory. Variable representation is covered in more detail on the Computer Organization course.


<!-- ## Jakolasku -->

## Division

<!-- Kokonaislukujen jakolasku on hieman hankalampi operaatio. Jakolausekkeessa käytettyjen muuttujien tyyppi määrää evaluaation tuloksena saatavan arvon tyypin. Jos kaikki jakolausekkeessa olevat muuttujat ovat kokonaislukuja, on tulos myös kokonaisluku. -->

Division of integers is a slightly trickier operation. The types of the variables that are part of the division determine the type of result achieved by executing the command. If all of the variables in the division expression are integers, the resulting value is an integer as well.

<!-- ```java
int tulos = 3 / 2;
System.out.println(tulos);
``` -->

```java
int result = 3 / 2;
System.out.println(result);
```

<sample-output>

1

</sample-output>

<!-- Edellinen esimerkki tulostaa luvun 1, sillä 3 ja 2 ovat kokonaislukuja ja kahden kokonaisluvun jakolaskun tulos on kokonaisluku. -->

The previous example prints 1: both 3 and 2 are integers, and the division of two integers always produces an integer.

<!-- ```java
int eka = 3;
int toka = 2;
double tulos = eka / toka;
System.out.println(tulos);
``` -->

```java
int first = 3;
int second = 2;
double result = first / second;
System.out.println(result);
```

<sample-output>

1

</sample-output>

<!-- Nytkin tulostus on 1, sillä eka ja toka ovat (yhä) kokonaislukuja. -->

The output 1 again, since first and second are (still) integers.

<!-- Jos jakolaskun jakaja tai jaettava (tai molemmat!) ovat liukulukuja, tulee tulokseksi myös liukuluku. -->

If the dividend or divisor (or both!) of the division is a floating point number, the result is a floating point number as well.

<!-- ```java
double kunJaettavaOnLiukuluku = 3.0 / 2;
System.out.println(kunJaettavaOnLiukuluku); // tulostaa 1.5

double kunJakajaOnLiukuluku = 3 / 2.0;
System.out.println(kunJakajaOnLiukuluku); // tulostaa 1.5
``` -->

```java
double whenDividendIsFloat = 3.0 / 2;
System.out.println(whenDividendIsFloat); // prints 1.5

double whenDivisorIsFloat = 3 / 2.0;
System.out.println(whenDivisorIsFloat); // prints 1.5
```


<sample-output>

1.5
1.5

</sample-output>

<!-- Kokonaisluku voidaan tarvittaessa muuttaa liukuluvuksi lisäämällä sen eteen tyyppimuunnosoperaatio `(double)`: -->

An integer can be converted into a floating point number by placing a type-casting operation `(double)` before it:

<!-- ```java
int eka = 3;
int toka = 2;

double tulos1 = (double) eka / toka;
System.out.println(tulos1); // tulostaa 1.5

double tulos2 = eka / (double) toka;
System.out.println(tulos2); // tulostaa 1.5

double tulos3 = (double) (eka / toka);
System.out.println(tulos3); // tulostaa 1.0
``` -->

```java
int first = 3;
int second = 2;

double result1 = (double) first / second;
System.out.println(result1); // prints 1.5

double result2 = first / (double) second;
System.out.println(result2); // prints 1.5

double result3 = (double) (first / second);
System.out.println(result3); // prints 1.0
```

<sample-output>

1.5
1.5
1.0

</sample-output>


<!-- Jälkimmäisessä esimerkissä tulos pyöristyy väärin sillä laskuoperaatio kokonaisluvuilla suoritetaan ennen tyyppimuunnosta. -->

The last example produces an incorrectly rounded result, because the integer division is executed before the type casting.

<!-- Jos jakolausekkeen tulos asetetaan kokonaislukutyyppiseen muuttujaan, on tulos automaattisesti kokonaisluku. -->

If the result of a division is assigned to an integer-type variable, the result is automatically an integer.

<!-- ```java
int kokonaisluku = 3.0 / 2;
System.out.println(kokonaisluku);
``` -->

```java
int integer = 3.0 / 2;
System.out.println(integer);
```

<sample-output>

1

</sample-output>

<!-- Seuraava esimerkki tulostaa "1.5", sillä jaettavasta tehdään liukuluku kertomalla se liukuluvulla (1.0 * 3 = 3.0) ennen jakolaskua. -->

The next example prints "1.5"; the dividend is converted into a floating-point number by multiplying it with a floating-point number prior to executing the division.

<!-- ```java
int jaettava = 3;
int jakaja = 2;

double tulos = 1.0 * jaettava / jakaja;
System.out.println(tulos);
``` -->

```java
int dividend = 3;
int divisor = 2;

double result = 1.0 * dividend / divisor;
System.out.println(result);
```

<sample-output>

1.5

</sample-output>


<!-- <text-box variant='hint' name='Keskiarvon laskeminen'> -->

<text-box variant='hint' name='Calculating the average'>


<!-- Seuraavissa tehtävissä pyydetään laskemaan syötettyjen lukujen keskiarvo. Kerrataan peruskoulu- tai kansakoulumatematiikasta tutun keskiarvon käsite pikaisesti. -->

The next exercises task you with calculating the average of the entered numbers. Let's briefly review the concept of *average*.

<!-- Keskiarvolla tarkoitetaan lukujen summaa jaettuna niiden lukumäärällä. Esimerkiksi, jos haluaisimme lukujen 5 ja 3 keskiarvon, laskettaisiin keskiarvo kaavalla (5+3)/2. Vastaavasti, mikäli haluaisimme laskea lukujen 1, 2 ja 4 keskiarvon, laskettaisiin keskiarvo kaavalla (1+2+4)/3. -->

An average refers to the sum of numbers divided by their count. For instance, the average of the numbers 5 and 3 can be calculated with the formula (5+3)/2. Similarly, the average of the numbers 1, 2, and 4 is produced by the formula (1+2+4)/3.

<!-- Ohjelmoinnissa tähän liittyy muutamia asioita, jotka tulee muistaa. Ensiksi, nollalla jakaminen ei tyypillisesti ole sallittua. Tämä tarkoittaa sitä, että nollan luvun keskiarvon laskeminen ei onnistu. Toiseksi, mikäli ohjelma käsittelee lukujen lukumäärän ja summan kokonaislukumuuttujina, tulee muuttujista jompikumpi (tai kummatkin) muuntaa liukulukumuuttujaksi kertomalla luku arvolla 1.0 ennen jakolaskua. -->

In the context of programming, there are a few things to keep in mind. Firstly, dividing by zero is typically not permitted. This implies that calculating the average of the number zero is impossible. Secondly, if the program handles both the sum of the numbers and their total count as integers, one (or both) of the variables should be casted to a floating-point number by multiplying it by 1.0 before the division.

</text-box>


<!-- <programming-exercise name="Kahden luvun keskiarvo" tmcname='osa01-Osa01_21.KahdenLuvunKeskiarvo'> -->

<programming-exercise name="Average of two numbers" tmcname='part01-Part01_21.AverageOfTwoNumbers'>


<!-- Kirjoita ohjelma, joka kysyy käyttäjältä kahta kokonaislukua ja tulostaa lukujen keskiarvon. -->

Write a program that asks the user for two integers and prints their average.

<!-- <sample-output>

Syötä ensimmäinen luku!
**8**
Syötä toinen luku!
**2**
Syötettyjen lukujen keskiarvo on 5.0

</sample-output> -->

<sample-output>

Give the first number:
**8**
Give the second number:
**2**
The average is 5.0

</sample-output>

</programming-exercise>


<!-- <programming-exercise name="Kolmen luvun keskiarvo"  tmcname='osa01-Osa01_22.KolmenLuvunKeskiarvo'> -->

<programming-exercise name="Average of three numbers"  tmcname='part01-Part01_22.AverageOfThreeNumbers'>


<!-- Kirjoita ohjelma, joka kysyy käyttäjältä kolme kokonaislukua ja tulostaa lukujen keskiarvon. -->

Write a program that asks the user for three integers and prints their average.

<!-- <sample-output>

Syötä ensimmäinen luku!
**8**
Syötä toinen luku!
**2**
Syötä kolmas luku!
**3**
Syötettyjen lukujen keskiarvo on 4.333333333333333

</sample-output> -->

<sample-output>

Give the first number:
**8**
Give the second number:
**2**
Give the third number:
**3**
The average is 4.333333333333333

</sample-output>

<!-- <sample-output>

Syötä ensimmäinen luku!
**9**
Syötä toinen luku!
**5**
Syötä kolmas luku!
**-1**
Syötettyjen lukujen keskiarvo on 4.333333333333333

</sample-output> -->

<sample-output>

Give the first number:
**9**
Give the second number:
**5**
Give the third number:
**-1**
The average is 4.333333333333333

</sample-output>

</programming-exercise>


<quiz id="cff67523-26f0-5f35-b00f-070778b40541"></quiz>


<!-- <programming-exercise name="Nelilaskin" tmcname='osa01-Osa01_23.Nelilaskin'> -->

<programming-exercise name="Simple calculator" tmcname='part01-Part01_23.SimpleCalculator'>


<!-- Kirjoita ohjelma, joka lukee käyttäjältä kaksi lukua ja tulostaa lukujen summan, lukujen erotuksen, lukujen kertolaskun, ja lukujen jakolaskun. Alla on kaksi esimerkkiä ohjelman toiminnasta. -->

Write a program that asks the user for two numbers and prints their sum, difference, product, and quotient. Two examples of the execution of the program are given below.

<!-- <sample-output>

Syötä ensimmäinen luku!
**8**
Syötä toinen luku!
**2**
8 + 2 = 10
8 - 2 = 6
8 * 2 = 16
8 / 2 = 4.0

</sample-output> -->

<sample-output>

Give the first number:
**8**
Give the second number:
**2**
8 + 2 = 10
8 - 2 = 6
8 * 2 = 16
8 / 2 = 4.0

</sample-output>


<sample-output>

Give the first number:
**9**
Give the second number:
**2**
9 + 2 = 11
9 - 2 = 7
9 * 2 = 18
9 / 2 = 4.5

</sample-output>



</programming-exercise>


<!-- ## Muuttujan arvoon liittyviä väärinkäsityksiä -->

## Misunderstandings Related to the Value of a Variable

<!-- Kun tietokone suorittaa ohjelmakoodia, suorittaa se sitä käsky kerrallaan, edeten aina täsmälleen siten, kuin ohjelmakoodissa sanotaan. Kun muuttujaan asetetaan arvo, tapahtuu aina sama asia, eli yhtäsuuruusmerkin oikealla puolella oleva arvo kopioidaan yhtäsuuruusmerkin vasemmalla puolella olevan muuttujan arvoksi, eli muuttujan nimeämään paikkaan. -->

When a computer executes program code, it does it one command at a time, always advancing exactly as specified by the code. When a value is assigned to a variable, the same chain of events always occurs: the value on the right-hand side of the equality sign is copied and assigned to the variable on the left-hand side (i.e., copied to the location specified by that variable).

<!-- On tärkeää, että ohjelmoija ymmärtää, että arvon asettaminen muuttujaan tekee aina saman asian. -->

It's crucial for a programmer to understand that assigning a value to a variable always does the same thing.

<!-- Kolme yleistä väärinkäsitystä, jotka liittyvät muuttujan arvon asettamiseen ovat seuraavat: -->

Here's three common misunderstanding related to assigning a value to a variable:

<!-- * Muuttujan asettamisen näkeminen siirtona kopioimisen sijaan: ohjelmakoodin `eka = toka` suorituksen jälkeen ajatellaan, että muuttujan `toka` arvo on siirtynyt muuttujan `eka` arvoksi, jonka jälkeen muuttujalla `toka` ei ole enää arvoa, tai sen arvo on esimerkiksi nolla. Tämä ei pidä paikkansa, sillä ohjelmakoodin `eka = toka` suorituksessa muuttujan `toka` nimeämässä paikassa oleva arvo kopioidaan muuttujan `eka` nimeämään paikkaan. Muuttujan `toka` arvo ei siis muutu. -->

* Viewing value assignment as a transfer instead of a copy operation: once `first = second` has been executed, it's often assumed that the value of the variable `second` has been moved to the value of the variable `first`, and that the variable `second` no longer holds a value, or that its value is 0, for instance. This is incorrect,  as executing `first = second` means that the value in the position specified by `second` is merely copied to the place specified by the variable `first`. Hence, the variable `second` is not modified.

<!-- * Muuttujan asettamisen näkeminen riippuvuutena kopioimisen sijaan: ohjelmakoodin `eka = toka` suorituksen jälkeen ajatellaan, että mikä tahansa muutos muuttujaan `toka` vaikuttaa automaattisesti myös muuttujaan `eka`. Tämä ei pidä paikkansa, sillä asetus -- kopiointi -- on yksittäinen tapahtuma. Se tapahtuu vain silloin, kun ohjelmakoodi `eka = toka` suoritetaan. -->

* Viewing value assignment as creating a dependency instead of being a copy operation: once `first = second` has been executed, it's often assumed that any change in the value of the variable `second` is automatically also reflected in the value of the variable `first`. This is incorrect; assignment -- i.e., copying -- is a one-off event. It only occurs when the program code `first = second` is executed.

<!-- * Kolmas väärinkäsitys liittyy kopioimisen suuntaan: ohjelmakoodin `eka = toka` suorituksessa ajatellaan, että muuttujan `toka` arvoksi kopioidaan muuttujan `eka` arvo. Tämä näkyy myös tilanteina, missä ohjelmoija voi vahingossa kirjoittaa esimerkiksi `42 = arvo` -- onneksi ohjelmointiympäristöt tukevat myös tässä. -->

* The third misunderstanding concerns the direction of copying: it's often thought that in executing `first = second` the value of the variable `first` is set as the value of the variable `second`. The confusion also manifests itself in situations where the programmer accidentally writes e.g. `42 = value -- fortunately, IDEs provide support on this issue too.

<!-- Ehkäpä paras tapa tietokoneen ohjelmakoodin suorittamisen ymmärtämiseen on paperin ja kynän käyttäminen. Kun luet ohjelmakoodia, kirjoita paperille uusien muuttujien nimet, sekä kirjoita ylös rivi riviltä, miten ohjelmakoodissa olevien muuttujien arvot muuttuvat. Havainnollistetaan suoritusta seuraavalla ohjelmakoodilla: -->

Perhaps the best way to understand a program's execution flow is through the use of pen and paper. As you're reading the program, write down the names of any new variables, while making a note of how the values of the variables in the code change line by line. Let's demonstrate the execution with the following program code:

<!-- ```java
rivi 1: int eka = (1 + 1);
rivi 2: int toka = eka + 3 * (2 + 5);
rivi 3:
rivi 4: eka = 5;
rivi 5:
rivi 6: int kolmas = eka + toka;
rivi 7: System.out.println(eka);
rivi 8: System.out.println(toka);
rivi 9: System.out.println(kolmas);
``` -->

```java
rivi 1: int first = (1 + 1);
rivi 2: int second = first + 3 * (2 + 5);
rivi 3:
rivi 4: first = 5;
rivi 5:
rivi 6: int third = first + second;
rivi 7: System.out.println(first);
rivi 8: System.out.println(second);
rivi 9: System.out.println(third);
```

<!-- Alla on kirjoitettu yllä olevan ohjelmakoodin suoritus auki. -->

The execution flow of the program above has been broken down below.

<!-- <sample-output>

rivi 1: luodaan muuttuja eka
rivi 1: kopioidaan muuttujan eka arvoksi laskun 1 + 1 tulos
rivi 1: muuttujan eka arvo on 2
rivi 2: luodaan muuttuja toka
rivi 2: lasketaan 2 + 5, 2 + 5 -> 7
rivi 2: lasketaan 3 * 7, 3 * 7 -> 21
rivi 2: lasketaan eka + 21
rivi 2: kopioidaan muuttujan eka arvo laskuun, muuttujan eka arvo on 2
rivi 2: lasketaan 2 + 21, 2 + 21 -> 23
rivi 2: kopioidaan muuttujan toka arvoksi 23
rivi 2: muuttujan toka arvo on 23
rivi 3: (tyhjä, ei tehdä mitään)
rivi 4: kopioidaan muuttujan eka arvoksi 5
rivi 4: muuttujan eka arvo on 5
rivi 5: (tyhjä, ei tehdä mitään)
rivi 6: luodaan muuttuja kolmas
rivi 6: lasketaan eka + toka
rivi 6: kopioidaan muuttujan eka arvo laskuun, muuttujan eka arvo on 5
rivi 6: lasketaan 5 + toka
rivi 6: kopioidaan muuttujan toka arvo laskuun, muuttujan toka arvo on 23
rivi 6: lasketaan 5 + 23 -> 28
rivi 6: kopioidaan muuttujan kolmas arvoksi 28
rivi 6: muuttujan kolmas arvo on 28
rivi 7: tulostetaan muuttuja eka
rivi 7: kopioidaan muuttujan eka arvo tulostettavaksi, muuttujan eka arvo on 5
rivi 7: tulostetaan arvo 5
rivi 8: tulostetaan muuttuja toka
rivi 8: kopioidaan muuttujan toka arvo tulostettavaksi, muuttujan toka arvo on 23
rivi 8: tulostetaan arvo 23
rivi 9: tulostetaan muuttuja kolmas
rivi 9: kopioidaan muuttujan kolmas arvo tulostettavaksi, muuttujan kolmas arvo on 28
rivi 9: tulostetaan arvo 28

</sample-output> -->

<sample-output>

row 1: initiate a variable first
row 1: copy the result of the calculation 1 + 1 as the value of the variable first
row 1: the value of the variable first is 2
row 2: create the variable second
row 2: calculate 2 + 5, 2 + 5 -> 7
row 2: calculate 3 * 7, 3 * 7 -> 21
row 2: calculate first + 21
row 2: copy the value of the variable first into the calculation, its value is 2
row 2: calculate 2 + 21, 2 + 21 -> 23
row 2: copy 23 to the value of the variable second
row 2: the value of the variable second is 23
row 3: (empty, do nothing)
row 4: copy 5 to the value of the variable first
row 4: the value of the variable first is 5
row 5: (empty, do nothing)
row 6: create variable third
row 6: calculate first + second
row 6: copy the value of the variable first into the calculation, its value is 5
row 6: calculate 5 + second
row 6: copy the value of the variable second into the calculation, its value is 23
row 6: calculate 5 + 23 -> 28
row 6: copy 28 to the value of the variable third
row 6: the value of the variable third is 28
row 7: print the variable first
row 7: copy the value of the variable first for the print operation, its value is 5
row 7: print the value 5
row 8: print the variable second
row 8: copy the value of the variable second for the print operation, its value is 23
row 8: print the value 23
row 9: print the variable third
row 9: copy the value of the variable third for the print operation, its value is 28
row 9: we print the value 28

</sample-output>

<!-- Alla edellinen ohjelma askeleittain visualisoituna. Käytössä oleva askeleittainen visualisointi käsittelee ohjelmakoodia riveittäin -- pohdi askeleiden kohdalla miten ohjelma päätyy sen tulostamaan lopputulokseen. -->

You'll find a step-by-step visualization of the previous program below, which goes through the program line by line -- on each step, reflect on how the program ends up with the result that it prints.

<code-states-visualizer input='{"code":"public class CalculationInSteps {\n  public static void main(String[] args) {\n    int first = (1 + 1);\n    int second = first + 3 * (2 + 5);\n\n    first = 5;\n\n    int third = first + second;\n    System.out.println(first);\n    System.out.println(second);\n    System.out.println(third);\n  }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"first":2},"ordered_varnames":["first"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"first":2,"second":23},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"first":5,"second":23},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"first":5,"second":23,"third":28},"ordered_varnames":["first","second","third"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{"first":5,"second":23,"third":28},"ordered_varnames":["first","second","third"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n23\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"first":5,"second":23,"third":28},"ordered_varnames":["first","second","third"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"24","frame_id":24}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n23\n28\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"first":5,"second":23,"third":28},"ordered_varnames":["first","second","third"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n23\n28\n","event":"return","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"first":5,"second":23,"third":28,"__return__":["VOID"]},"ordered_varnames":["first","second","third","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

<quiz id="286b44eb-0a4f-51de-9c67-68d5351a3b37"></quiz>
