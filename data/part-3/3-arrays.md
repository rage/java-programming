---
path: '/part-3/3-arrays'
title: 'Arrays'
hidden: true
---

<text-box variant='learningObjectives' name='Learning objectives'>

<!-- - Tunnet taulukon ja osaat käyttää sitä osana ohjelmia.
- Osaat luoda taulukon, asettaa taulukon indeksiin arvon ja käydä taulukon läpi toistolauseen avulla.
- Tiedät, että taulukko on viittaustyyppinen muuttuja ja osaat käyttää taulukkoa metodin parametrina. -->

- You know what an Array is and how to use it.
- You can create an Array, assign a value to a given index and iterate over it.
- You recognize, that array is a reference type and know how to use array as a parameter of a method

</text-box>

<!-- Edellä käsitelty lista -- ArrayList -- tarjoaa ohjelmoijan elämää helpottavia toiminnallisuuksia. Näistä ehkäpä tärkein liittyy arvon lisäämiseen: ohjelmoijan näkökulmasta listan koko ei ole rajoitettu. Todellisuudessa listoissa ei ole taikatemppuja -- ne ovat ohjelmoitu siinä missä kaikki muutkin ohjelmointikielen tarjoamat välineet ja ohjelmat. Kun lista luodaan, sille varataan rajattu tila koneen muistista. Listan metodit ovat toteutettu siten, että varatun tilan loppuessa metodi varaa suuremman tilan listan käyttöön ja kopioi vanhassa tilassa olevat tiedot uuteen paikkaan. -->

We've gotten familiar with ArrayList, which has a lot of functionality to make the life of a programmer easier. Perhaps the most important is about adding elements: From the point of view of the programmer the size of the ArrayList is unlimited. In reality there are no magic tricks in the ArrayList -- they have been programmed like any programs or tools offered by the programming language. When you create a list, a limited space is reserved in the memory of the computer. When the ArrayList runs out of space, larger space is reserved and the data from the previous space is copied to the new one.

<!-- ArrayListin helppokäyttöisyydesta huolimatta ohjelmissa on joskus tarvetta ArrayListin esi-isälle eli **taulukolle**. -->

Even though ArrayList is simple to use, sometimes we need the ancestor of the ArrayList, the Array.

<!-- Taulukko sisältää rajatun määrän numeroituja paikkoja arvoille. Taulukon pituus (tai koko) on siinä olevien paikkojen lukumäärä, eli kuinka monta arvoa taulukkoon voi laittaa. Taulukon arvoja kutsutaan taulukon **alkioiksi**. -->

An Array contains a limited amount of numbered spots (indices) for values. The length (or size) of an Array is the amount of these spots, i.e. how many values can you place in the Array. The values in an Array are called **elements**.

<!-- ## Taulukon luominen -->

## Creating an Array

<!-- Taulukon voi luoda kahdella eri tavalla. Tutustutaan ensin tapaan, jossa taulukon koko määritellään eksplisiittisesti taulukon luonnin yhteydessä. Kolme kokonaislukupaikkaa sisältävä taulukko luodaan seuraavasti: -->

There are two ways to create an Array. In the first one you have to explicitly define the size upon the creating. This is how you create an Array to hold three integers:

<!-- ```java
int[] luvut = new int[3];
``` -->

```java
int[] numbers = new int[3];
```

<!-- Taulukko määritellään hakasuluilla, jotka tulevat taulukon sisältämien alkioiden tyypin jälkeen (alkioidentyyppi[]). Uuden taulukon luominen tapahtuu `new`-kutsulla, jota seuraa taulukon alkioiden tyyppi, hakasulut, sekä hakasulkujen sisään taulukon alkioiden lukumäärä. -->

An array is declared by adding square brackets after the type of the elements it contains (typeofelements[]). A new Array is created by calling `new` followed by the type of the elements, square brackets and the number of the elements in the square brackets.

<!-- Taulukon, johon voi asettaa viisi merkkijonoa, voi luoda seuraavasti: -->

An Array to hold 5 Strings can be created like this:

<!-- ```java
String[] merkkijonot = new String[5];
``` -->

```java
String[] strings = new String[5];
```

<!-- ## Arvon asettamien ja arvon hakeminen -->

## Assigning and accessing elements

<!-- Taulukon alkioihin viitataan taulukon indeksien perusteella. Alla olevassa esimerkissä luodaan kolmepaikkainen kokonaislukutaulukko, jonka jälkeen taulukon indekseihin 0 ja 2 asetetaan arvot. Tämän jälkeen arvot tulostetaan. -->

An element of an Array is referred to by its index. In the example below we create an Array to hold 3 integers, and then assigning values to the indices 0 and 2. After that we print the values.

<!-- ```java
int[] luvut = new int[3];
luvut[0] = 2;
luvut[2] = 5;

System.out.println(luvut[0]);
System.out.println(luvut[2]);
``` -->

```java
int[] numbers = new int[3];
numbers[0] = 2;
numbers[2] = 5;

System.out.println(numbers[0]);
System.out.println(numbers[2]);
```

<!-- <sample-output>

2
5

</sample-output> -->

<!-- <code-states-visualizer input='{"code":"public class Example {\n    public static void main(String[] args) {\n        int[] numbers = new int[3];\n        numbers[0] = 2;\n        numbers[2] = 5;\n\n        System.out.println(numbers[0]);\n        System.out.println(numbers[2]);\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"numbers":["REF",143]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",0,0,0]}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"numbers":["REF",143]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"10","frame_id":10}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",2,0,0]}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"numbers":["REF",143]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",2,0,5]}},{"stdout":"2\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"numbers":["REF",143]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",2,0,5]}},{"stdout":"2\n5\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"numbers":["REF",143]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",2,0,5]}},{"stdout":"2\n5\n","event":"return","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"numbers":["REF",143],"__return__":["VOID"]},"ordered_varnames":["numbers","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",2,0,5]}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer> -->

<!-- Yksittäisen arvon asettaminen taulukon tiettyyn paikkaan tapahtuu aivan kuten arvon asetus tavalliseen muuttujaan, mutta taulukkoon asetettaessa kerrotaan indeksi, eli taulukon kohta mihin arvo tullaan asettamaan. Indeksi kerrotaan hakasulkeiden sisällä. ArrayListin metodi `get` käyttäytyy hyvin samalla tavalla kuin taulukon tietystä indeksistä haku. Taulukon kohdalla vain syntaksi, eli merkintätapa, on erilainen. -->

Assigning a value to a specific spot of an Array works much like assigning a value in a normal variable, but in the Array you must specify the index, i.e. to which spot you want to assign the value. The index is specified in in square brackets. The `get`-method of ArrayList works very similarly to accessing an element of an the Array. Just the syntax, i.e. the way things are written, is different.

<!-- Indeksi on kokonaisluku, jonka arvo on välillä [0, taulukon pituus - 1]. Esimerkiksi viiden alkion pituisessa taulukossa on indeksit 0, 1, 2, 3, ja 4. -->

The index is an integer, and it's value is between [0, length of the Array - 1]. For example an Array to hold 5 elements has indices 0, 1, 2, 3, and 4.

<!-- ```java
Scanner lukija = new Scanner(System.in);

int[] luvut = new int[5];
luvut[0] = 42;
luvut[1] = 13;
luvut[2] = 12;
luvut[3] = 7;
luvut[4] = 1;

System.out.println("Mistä indeksistä haetaan? ");
int indeksi = Integer.valueOf(lukija.nextLine());

System.out.println(luvut[indeksi]);
``` -->

```java
Scanner reader = new Scanner(System.in);

int[] numbers = new int[5];
numbers[0] = 42;
numbers[1] = 13;
numbers[2] = 12;
numbers[3] = 7;
numbers[4] = 1;

System.out.println("Which index should we access? ");
int index = Integer.valueOf(reader.nextLine());

System.out.println(numbers[index]);
```

<!-- Taulukossa olevan muuttujan voi tulostuksen sijaan hyvin esimerkiksi asettaa uuden muuttujan arvoksi. -->

The value held in an Array can also be assigned to be the value of another variable

<!-- ```java
Scanner lukija = new Scanner(System.in);

int[] luvut = new int[5];
luvut[0] = 42;
luvut[1] = 13;
luvut[2] = 12;
luvut[3] = 7;
luvut[4] = 1;

System.out.println("Mistä indeksistä haetaan? ");
int indeksi = Integer.valueOf(lukija.nextLine());

int luku = luvut[indeksi];
System.out.println(luku);
``` -->

```java
Scanner reader = new Scanner(System.in);

int[] numbers = new int[5];
numbers[0] = 42;
numbers[1] = 13;
numbers[2] = 12;
numbers[3] = 7;
numbers[4] = 1;

System.out.println("Which index should we access? ");
int index = Integer.valueOf(reader.nextLine());

int number = numbers[index];
System.out.println(numbers);
```

<quiz id="9acde5da-37ca-5065-83f6-f90010f366c4"></quiz>

<programming-exercise name='Swap' tmcname='part03-Part03_18.Swap'>

<!-- Tehtäväpohjaan on toteutettu valmiiksi ohjelma, missä luodaan taulukko sekä tulostetaan taulukon arvot kahteen kertaan. Muokkaa ohjelmaa siten, että sen jälkeen kun taulukon arvot on tulostettu ensimmäiseen kertaan, käyttäjältä kysytään kahta indeksiä, joiden osoittamat arvot vaihdetaan taulukossa päittäin. Tämän jälkeen alkiot tulee vaihtaa päittäin ja taulukon arvot tulostaa toiseen kertaan. -->

The exercise template already contains a program, that creates an array and prints the values of the array twice. Modify the program to do following: After the first printing, the program should ask for two indices from the user. The values in these two indices should be swapped, and in the end the values of the array should be printed once again.

<sample-output>

1
3
5
7
9

<!-- Mitkä indeksit vaihdetaan? -->
Give two indices to swap:
**2**
**4**

1
3
9
7
5

</sample-output>


<sample-output>

1
3
5
7
9

<!-- Mitkä indeksit vaihdetaan? -->
Give two indices to swap:
**0**
**1**

3
1
5
7
9

</sample-output>

<!-- Voit olettaa, että käyttäjän syöttämät indeksit löytyvät taulukosta. Vinkki! Tarvitset apumuuttujan jomman kumman vaihdettavan arvon hetkelliseen säilömiseen. -->

You can assume the array to contain the given indices. Tip! You'll need an additional variable to store one of the values for little while.

</programming-exercise>



<!-- ## Taulukon koko ja läpikäynti -->
## Size of an array and iterating

<!-- Taulukon koon saa selville taulukko-olioon liittyvän muuttujan `length` avulla. Tähän taulukkoon liittyvään muuttujaan pääsee käsiksi kirjoittamalla taulukon nimi piste muuttujan nimi, eli esimerkiksi `taulukko.length`. Huomaa, että kyseessä ei ole metodikutsu, eli `taulukko.length()` ei toimi. -->

You can find out the size of the array through the associated variable `length`. You can access this associated variable by writing name of the array dot name of the variable, i.e. `numbers.length`. Note, that this is not a method call, so `numbers.length()` doesn't work.


<!-- Taulukon alkioiden läpikäynti voidaan toteuttaa while-toistolauseen avulla. -->

You can iterate the array, i.e. go through each element of the array with a while loop.

<!-- ```java
int[] luvut = new int[4];
luvut[0] = 42;
luvut[1] = 13;
luvut[2] = 12;
luvut[3] = 7;

System.out.println("Taulukossa on " + luvut.length + " alkiota.");

int indeksi = 0;
while (indeksi < luvut.length) {
    System.out.println(luvut[indeksi]);
    indeksi = indeksi + 1;
}
``` -->

```java
int[] numbers = new int[4];
numbers[0] = 42;
numbers[1] = 13;
numbers[2] = 12;
numbers[3] = 7;

System.out.println("The array has " + luvut.length + " elements.");

int index = 0;
while (index < numbers.length) {
    System.out.println(numbers[index]);
    index = index + 1;
}
```

<sample-output>

The array has 4 elements.
42
13
12
7

</sample-output>


<!-- Yllä olevassa esimerkissä käydään indeksimuuttujan avulla läpi indeksit 0, 1, 2 ja 3, ja tulostetaan taulukon kussakin indeksissä olevan muuttujan arvo. Ensin siis tulostuu `luvut[0]`, sitten `luvut[1]` jne. Taulukon läpikäynti loppuu kun toistolauseen ehtolause `indeksi < luvut.length` on epätotta, eli kun indeksimuuttujan arvo on suurempi tai yhtäsuuri kuin taulukon pituus. Huom! Taulukon läpikäynti ei lopu heti kun indeksimuuttujan arvo kasvaa tarpeeksi suureksi; toistolauseen suorituksen jatkumista arvioidaan aina toistolauseen alussa. -->

The example above iterates over indices 0, 1, 2 and 3, and at each index prints the value held in the index. So first it prints `numbers[0]`, then `numbers[1]` etc. The iteration stops, once the condition of the loop `index < number.length` is false, i.e. once the index variable is greater or equal to the length of the array. NB! The iteration doesn't stop the moment the index variable grows too big; the condition is evaluated only in the beginning of the while loop.


<code-states-visualizer input='{"code":"public class Example {\n    public static void main(String[] args) {\n        int[] numbers = new int[4];\n        numbers[0] = 42;\n        numbers[1] = 13;\n        numbers[2] = 12;\n        numbers[3] = 7;\n\n        System.out.println(\"There are \" + numbers.length + \" elements in the array.\");\n\n        int index = 0;\n        while (index < numbers.length) {\n            System.out.println(numbers[index]);\n            index++;\n        }\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"numbers":["REF",143]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",0,["ELIDE",2],0]}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"numbers":["REF",143]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"10","frame_id":10}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,0,0,0]}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"numbers":["REF",143]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,0,0]}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"numbers":["REF",143]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,0]}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"numbers":["REF",143]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"numbers":["REF",143]},"ordered_varnames":["numbers"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"numbers":["REF",143],"index":0},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"numbers":["REF",143],"index":0},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"35","frame_id":35}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n42\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"numbers":["REF",143],"index":0},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n42\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"numbers":["REF",143],"index":1},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n42\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"numbers":["REF",143],"index":1},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n42\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"numbers":["REF",143],"index":1},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n42\n13\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"numbers":["REF",143],"index":1},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n42\n13\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"numbers":["REF",143],"index":2},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n42\n13\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"numbers":["REF",143],"index":2},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"56","frame_id":56}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n42\n13\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"numbers":["REF",143],"index":2},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"61","frame_id":61}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n42\n13\n12\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"numbers":["REF",143],"index":2},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"67","frame_id":67}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n42\n13\n12\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"numbers":["REF",143],"index":3},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"68","frame_id":68}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n42\n13\n12\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"numbers":["REF",143],"index":3},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n42\n13\n12\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"numbers":["REF",143],"index":3},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"74","frame_id":74}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n42\n13\n12\n7\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"numbers":["REF",143],"index":3},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"80","frame_id":80}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n42\n13\n12\n7\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"numbers":["REF",143],"index":4},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"81","frame_id":81}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n42\n13\n12\n7\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"numbers":["REF",143],"index":4},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"82","frame_id":82}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n42\n13\n12\n7\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"numbers":["REF",143],"index":4},"ordered_varnames":["numbers","index"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"87","frame_id":87}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}},{"stdout":"There are 4 elements in the array.\n42\n13\n12\n7\n","event":"return","line":16,"stack_to_render":[{"func_name":"main:16","encoded_locals":{"numbers":["REF",143],"index":4,"__return__":["VOID"]},"ordered_varnames":["numbers","index","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"89","frame_id":89}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"143":["LIST",42,13,12,7]}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<programming-exercise name='Index was not found' tmcname='part03-Part03_19.IndexWasNotFound'>

<!-- Tehtäväpohjassa on valmiina taulukko, joka sisältää lukuja. Täydennä ohjelmaa siten, että käyttäjältä kysyttyä lukua etsitään taulukosta. Jos luku löytyy taulukosta, ohjelma kertoo luvun indeksin. Jos lukua taas ei löydy taulukosta, ohjelma kertoo ettei lukua löydy. -->

The exercise template has already an array containing numbers. Complete the program to ask the user for a number to search in the array. If the array contains the given number, the program tells the index containing the number. If the array doesn't contain the given number, the program will tell the number wasn't found.

<sample-output>

<!-- Mitä etsitään? **3**
Luku 3 löytyy indeksistä 4. -->

Search for? **3**
3 is at index 4

</sample-output>


<sample-output>

<!-- Mitä etsitään? **7**
Luku 7 löytyy indeksistä 7. -->

Search for? **7**
7 is at index 7.

</sample-output>


<sample-output>

<!-- Mitä etsitään? **22**
Lukua 22 ei löydy. -->

Search for? **22**
22 was not found.

</sample-output>

</programming-exercise>


<!-- Jos indeksillä osoitetaan taulukon ohi, eli alkioon jota ei ole olemassa, niin saadaan virheilmoitus **ArrayIndexOutOfBoundsException**. Virhe ArrayIndexOutOfBoundsException kertoo että taulukossa ei ole haluttua indeksiä. Taulukon ohi, eli indeksiin joka on pienempi kuin 0 tai suurempi tai yhtäsuuri kuin taulukon koko ei saa viitata. -->

If the index is pointing outside the Array, i.e. the element doesn't exist, we get an **ArrayIndexOutOfBoundsException**. This error tells, that the Array doesn't contain the given index. You cannot access outside of the Array, i.e. index that's less than 0 or greater or equal to the size of the Array.

<!-- Seuraavassa esimerkissä on ohjelma, joka kysyy käyttäjältä lukujen määrän ja joukon lukuja. Tämän jälkeen ohjelma tulostaa luvut uudestaan samassa järjestyksessä. Käyttäjän antamat luvut säilötään taulukkoon. -->

The next example is a program that first asks the user to enter how many numbers, and then enter the numbers. Finally it prints back the numbers in the same order. The numbers are stored in an Array.


<!-- ```java
System.out.print("Kuinka monta lukua? ");
int lukuja = Integer.valueOf(lukija.nextLine());

int[] luvut = new int[lukuja];

System.out.println("Anna luvut:");

int indeksi = 0;
while (indeksi < luvut.length) {
    luvut[indeksi] = Integer.valueOf(lukija.nextLine());
    indeksi = indeksi + 1;
}


System.out.println("Luvut uudestaan:");

indeksi = 0;
while (indeksi < luvut.length) {
    System.out.println(luvut[indeksi]);
    indeksi = indeksi + 1;
}
``` -->

```java
System.out.print("How many numbers? ");
int howMany = Integer.valueOf(reader.nextLine());

int[] numbers = new int[howMany];

System.out.println("Enter the numbers:");

int index = 0;
while (index < numbers.length) {
    numbers[index] = Integer.valueOf(reader.nextLine());
    index = index + 1;
}


System.out.println("Here are the numbers again:");

index = 0;
while (index < numbers.length) {
    System.out.println(numbers[index]);
    index = index + 1;
}
```

<!-- Eräs ohjelman suorituskerta voisi olla seuraavanlainen: -->
An execution of the program might look like this:

<sample-output>

<!-- Kuinka monta lukua? **4**
Anna luvut:
**4**
**8**
**2**
**1**
Luvut uudestaan:
4
8
2
1 -->

How many numbers? **4**
Enter the numbers:
**4**
**8**
**2**
**1**
Here are the numbers again:
4
8
2
1

</sample-output>


<!-- ## Taulukon alkioiden tyyppi -->
## Type of the elements

<!-- Taulukon luominen tapahtuu kertomalla ensin taulukon sisältämien alkioiden tyyppi, jota seuraa hakasulut (alkiontyyppi[]). Taulukko-olion alkiot voivat siis olla käytännössä minkä tahansa tyyppisiä. Alla muutamia esimerkkejä: -->

You can create an array stating the type of the elements of the array followed by square brackets (typeofelements[]). Therefore the elements of the array can be of any type. Here's a few examples:

<!-- ```java
String[] kuukaudet = new String[12];
double[] approksimaatiot = new double[100];

kuukaudet[0] = "Tammikuu";
approksimaatiot[0] = 3.14;
``` -->

```java
String[] months = new String[12];
double[] approximations = new double[100];

months[0] = "January";
approximations[0] = 3.14;
```

<!-- <text-box variant='hint' name='Indekseistä ja muistin rakenteesta'> -->

<text-box variant='hint' name='Indices and the structure of the memory'>


<!-- Jokaisen ohjelmoijan on hyvä ymmärtää hieman tietokoneohjelman käytössä olevan muistin rakenteesta. Jokainen muuttuja -- on se sitten alkeistyyppinen tai viittaustyyppinen muuttuja -- tallennetaan muistiin. Jokaisella muuttujalla on myös koko, eli tietty määrä bittejä (nollia ja ykkösiä), jonka muuttuja vie muistista. Muuttujan arvo esitetään myös bitteinä. -->

Every programmer should know a bit about the structure of the memory used by a computer program. Each variable -- let it be primitive or reference type -- is saved in the memory. Each variable has size i.e. a defined number of bits (zeros and ones) it takes in the memory. The value of the variable is also represented in bits.

<!-- Taulukko-olion arvo on viite eli oikeastaan tieto muistipaikasta, missä olion tiedot ovat. Sanomalla `taulukko[0]` viitataan taulukon ensimmäiseen alkioon. Lausekkeen `taulukko[0]` voi lukea muodossa "mene taulukon alkuun ja siirry eteenpäin 0 kertaa taulukon sisältämän muuttujan koko -- anna siitä kohdasta eteenpäin muuttujan koon verran tietoa". Vastaavasti `taulukko[2]` voidaan lukea muodossa "mene taulukon alkuun ja siirry eteenpäin 2 kertaa taulukon sisältämän muuttujan koko -- anna siitä kohdasta eteenpäin muuttujan koon verran tietoa". -->

The reference of the array object is actually information about the location of the data. By stating `array[0]` we're referring to the first element of the array. The statement `array[0]` can also be read "Go to the beginning of the array and move forward 0 times the size of the variable contained in the array -- and return a chunk of data the size of the variable.

<!-- Javassa int-tyyppinen muuttuja on 32-bitin kokoinen. Yksi bitti varataan etumerkille, joten se voi esittää korkeintaan 2<sup>31</sup>-1 kokoista lukua. Kun luodaan int-taulukko, jossa on esimerkiksi 4 paikkaa, muistista varataan kokonaislukuja varten 4*32 bittiä. Sanomalla int-tyyppiselle taulukolle `taulukko[2]`, luetaan 32 bittiä alkaen kohdasta taulukon alku + 2 * 32 bittiä. -->

The size of an int variable in java is 32 bits. One bit is reserved for the sign, so the largest possible number to present in int is 2<sup>31</sup>-1. When you create an int array of 4 elements, 4 * 32 bits of memory is allocated to hold the integers. When you access `array[2]`, 32 bits are read starting from beginning of the array + 2 * 32 bits.

<!-- Osa ohjelmointikielistä pyrkii varmistamaan, ettei ohjelmoija mene "väärälle alueelle". Jos Java ei aiheuttaisi virhettä sanoessamme `taulukko[-1]`, saisimme tietoomme ohjelman muistissa juuri ennen taulukkoa olevan tiedon. Kukaan ei tällöin myöskään estäisi kirjoittamasta ohjelmaa, joka lukisi kaiken ohjelman muistissa olevan tiedon. -->

Some programming languages try to make sure the programmer doesn't go "in the wrong area". If java didn't cause the exception when we say `array[-1]`, we would find out the data located just before the array in the memory of the program. In such case there there wouldn't also be anything preventing us from writing a program reading the whole memory reserved for the program.

</text-box>


<!-- ## Taulukko metodin parametrina -->

## Array as a parameter of a method

<!-- Taulukkoja voidaan käyttää metodin parametrina aivan kuten kaikkia muitakin muuttujia. Koska taulukko on viittaustyyppinen muuttuja, on taulukon arvo viite taulukkoon liittyviin tietoihin. Kun taulukkoa käytetään metodin parametrina, metodin käyttöön kopioidaan viite taulukkoon. -->

You can use arrays as a parameter of a method just like any other variable. Because array is reference type, the value of the array is a reference to the information contained in the array. When you use array as a parameter of a method, the method receives a copy of the reference to the array.

<!-- ```java
public static void listaaAlkiot(int[] kokonaislukuTaulukko) {
    System.out.println("taulukon alkiot ovat: ");
    int indeksi = 0;
    while (indeksi < kokonaislukuTaulukko.length) {
        int luku = kokonaislukuTaulukko[indeksi];
        System.out.print(luku + " ");
        indeksi = indeksi + 1;
    }

    System.out.println("");
}
``` -->

```java
public static void listElements(int[] integerArray) {
    System.out.println("the elements of the array are: ");
    int index = 0;
    while (index < integerArray.length) {
        int number = integerArray[index];
        System.out.print(number + " ");
        index = index + 1;
    }

    System.out.println("");
}
```

<!-- ```java
int[] luvut = new int[3];
luvut[0] = 1;
luvut[1] = 2;
luvut[2] = 3;

listaaAlkiot(luvut);
``` -->

```java
int[] numbers = new int[3];
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;

listElemets(numbers);
```

<sample-output>

1 2 3

</sample-output>


<!-- Kuten olemme aiemmin jo huomanneet, parametrin nimi metodin sisällä voi olla aivan vapaasti valittu, nimen ei tarvitse missään tapauksessa olla sama kuin kutsuvassa. Edellä taulukkoa kutsutaan metodin sisällä nimellä `kokonaislukuTaulukko`, metodin kutsuja taas näkee saman taulukon `luvut`-nimisenä. -->

As noticed before, you can freely choose the name of the parameter inside the method, the name doesn't have to be the same as the name of the variable when you call the method. Above we call the array `integerArray`, meanwhile the caller of the method has named the same array `numbers`.

<!-- Taulukko on olio, joten kaikki metodissa tapahtuvat taulukon sisältöön vaikuttavat muutokset ovat olemassa myös metodin suorituksen jälkeen. -->

Array is an object, so when you change the array inside the method, the changes persist also after the execution of the method.

<programming-exercise name='Sum of array' tmcname='part03-Part03_20.SumOfArray'>

<!-- Täydennä luokassa Summaaja olevaa metodia `public static int laskeTaulukonLukujenSumma(int[] taulukko)` siten, että se laskee ja palauttaa sille parametrina annetussa taulukossa olevien lukujen summan. -->

The class SumMaker has a method `public static int sumOfNumbersInArray(int[] array)`. Complete the method so, that it computes and returns the sum of the numbers in the array it receives as parameter.

<!-- Voit kokeilla lukujen summan laskemista seuraavalla esimerkkikoodilla. -->

You can try out the computation of the sum with this example:

<!-- ```java
int[] taulukko = {5, 1, 3, 4, 2};
laskeTaulukonLukujenSumma(taulukko);
``` -->

```java
int[] numbers = {5, 1, 3, 4, 2};
sumOfNumbersInArray(numbers);
```

<sample-output>

15

</sample-output>

</programming-exercise>


<programming-exercise name='Print neatly' tmcname='part03-Part03_21.PrintNeatly'>


<!-- Täydennä luokan TaulukonTulostaja metodia `public static void tulostaTyylikkaasti(int[] taulukko)` siten, että metodi tulostaa parametrina saamansa taulukon luvut tyylikkäästi. Lukujen väliin tulee pilkku ja välilyönti. Viimeisen luvun jälkeen ei  pilkkua tule. -->
Complete the method `public static void printNeatly(int[] array)` in ArrayPrinter class to make it print the numbers of the array it receives more neatly. There should be a whitespace and a comma between each number. don't put a comma after the last number.

<!-- Tee tulostus yhdelle riville, eli käytä tässä komentoa `System.out.print`. -->
Print the numbers on one line using `System.out.print`.

<!-- Voit kokeilla tulostusta esimerkiksi seuraavalla esimerkkikoodilla. -->
You can try out your printing with this example:

<!-- ```java
int[] taulukko = {5, 1, 3, 4, 2};
tulostaTyylikkaasti(taulukko);
``` -->

```java
int[] array = {5, 1, 3, 4, 2};
printNeatly(array);
```

<sample-output>

5, 1, 3, 4, 2

</sample-output>

</programming-exercise>


<programming-exercise name='Print in stars' tmcname='part03-Part03_22.PrintInStars'>


<!-- Täydennä tiedostossa Tulostin olevaa metodia `public static void tulostaTaulukkoTahtina(int[] taulukko)`, siten, että se tulostaa jokaista taulukossa olevaa lukua vastaavan pituisen rivin tähtiä. -->

Complete the method `public static void printArrayInStars(int[] array)` in Printer class to make it print a row of stars for each number in the array. The amount of stars on each row is defined by the corresponding number in the array.

<!-- Voit kokeilla tulostusta esimerkiksi seuraavalla esimerkkikoodilla. -->
You can try out the printing with this example:

<!-- ```java
int[] taulukko = {5, 1, 3, 4, 2};
tulostaTaulukkoTahtina(taulukko);
``` -->

```java
int[] array = {5, 1, 3, 4, 2};
printArrayInStars(array);
```

<sample-output>
*****
*
***
****
**
</sample-output>

<!-- Eli koska taulukon nollannessa paikassa on luku 5, tulee ensimmäiselle riville 5 tähteä. Seuraavalla 1 tähti jne. -->
The 0th element of the array is 5, so the first line has 5 stars. The next one has 1 etc.

</programming-exercise>


<!-- ##  Lyhyempi merkintätapa taulukon luomiseen -->
## The shorter way to create an array

<!-- Merkkijono-olioiden lisäksi taulukko-olioiden luomiseen löytyy lyhyempi merkintätapa. Alla olevassa esimerkissä luodaan kolmepaikkainen kokonaislukutaulukko, johon asetetaan arvot 100, 1 ja 42. -->
Just like for Strings, there's also a shortcut to create an array. Here we create an array to hold 3 integers, and initiate it with values 100, 1 and 42 in it:

<!-- ```java
int[] luvut = {100, 1, 42};
``` -->

```java
int[] numbers = {100, 1, 42};
```

<!-- Taulukko-olio voidaan siis aiemmin näkemämme new-kutsun lisäksi alustaa myös lohkolla, jossa taulukkoon asetettavat arvot esitellään pilkulla eriteltyinä. Tämä toimii kaikille muuttujatyypeille: alla on esitelty ensin merkkijonoja sisältävä taulukko, jonka jälkeen esitellään liukulukuja sisältävä taulukko. Tämän jälkeen luvut tulostetaan. -->

So apart from calling for `new`, we can also initialize an array with a block, that contains comma-separated values to be assigned in the array. This works for all the types: below we initialize an array of strings, then an array of floating-point numbers. Finally the values are printed.

<!-- ```java
String[] merkkijonotaulukko = {"Matti L.", "Matti P.", "Matti V."};
double[] liukulukutaulukko = {1.20, 3.14, 100.0, 0.6666666667};

for (int i = 0; i < merkkijonotaulukko.length; i++) {
    System.out.println(merkkijonotaulukko[i] + " " +  liukulukutaulukko[i]);
}
``` -->

```java
String[] arrayOfStrings = {"Matti L.", "Matti P.", "Matti V."};
double[] arrayOfFloatingpoints = {1.20, 3.14, 100.0, 0.6666666667};

for (int i = 0; i < arrayOfStrings.length; i++) {
    System.out.println(arrayOfStrings[i] + " " +  arrayOfFloatingpoints[i]);
}
```

<sample-output>

Matti L. 1.20
Matti P. 3.14
Matti V. 100.0

</sample-output>

<!-- Lohkoalustusta käytettäessä taulukon koko on aina täsmälleen lohkossa määriteltyjen arvojen määrä. Lohkossa määritellyt arvot asetetaan taulukkoon järjestestyksessä siten, että ensimmäinen arvo asetetaan nollanteen indeksiin, toinen arvo ensimmäiseen indeksiin jne. -->

When you initialize an array with a block, the length of the array is precisely the number of the values specified in the block. The values of the block are assigned to the array in the order, eg. the first value is assigned to the index 0, the second value to the index 1 etc.

<!-- ```java
// indeksi       0   1    2    3   4   5     6     7
int[] luvut = {100,  1,  42,  23,  1,  1, 3200, 3201};

// tulostaa luvun taulukon indeksistä 0, eli luvun 100
System.out.println(luvut[0]);
// tulostaa luvun taulukon indeksistä 2, eli luvun 42
System.out.println(luvut[2]);
``` -->
```java
// index           0   1    2    3   4   5     6     7
int[] numbers = {100,  1,  42,  23,  1,  1, 3200, 3201};

// prints the number at index 0, i.e. number 100
System.out.println(numbers[0]);
// prints the number at index 2, i.e. number 42
System.out.println(luvut[2]);
```

<!-- Viittaus taulukon ulkopuolelle aivan kuten listan ulkopuolellekaan ei voi viitata. Kokeile alla olevaa esimerkkiä omalla koneella esimerkiksi hiekkalaatikossa. -->

Just like in ArrayLists, you can't access an index outside of the array. You can try out the following example on your own computer, for example in the sandbox.

<!-- ```java
String[] merkkijonotaulukko = {"Matti L.", "Matti P.", "Matti V."};
double[] liukulukutaulukko = {1.20, 3.14, 100.0, 0.6666666667};

for (int i = 0; i < liukulukutaulukko.length; i++) {
    System.out.println(merkkijonotaulukko[i] + " " +  liukulukutaulukko[i]);
}
``` -->

```java
String[] arrayOfStrings = {"Matti L.", "Matti P.", "Matti V."};
double[] arrayOfFloatingpoints = {1.20, 3.14, 100.0, 0.6666666667};

for (int i = 0; i < arrayOfFloatingpoints.length; i++) {
    System.out.println(arrayOfStrings[i] + " " +  arrayOfFloatingpoints[i]);
}
```
