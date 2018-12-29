---
path: '/osa-2/2-loogiset-operaatiot'
title: 'Loogiset operaatiot'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet loogiset operaatiot ja, tai, sekä ei, ja osaat käyttää niitä osana ehtolauseen lauseketta.
- Tunnet ehtolauseen suoritusjärjestyksen ja tiedät, että ehtolauseiden läpikäynti lopetetaan ensimmäiseen ehtoon, jonka lauseke evaluoituu todeksi.
- Osaat käyttää toistolauseen ehtona totuusarvon palauttavaa lauseketta, jolla päätetään jatketaanko toistoa vaiko ei.

</text-box>

Materiaalin esimerkeissä ja tehtävissä käytetyt ehtolauseet ovat tähän mennessä käyttäneet yksinkertaisia lausekkeita, joilla on tarkasteltu ehtolauseeseen ja toistolauseeseen liittyvän lähdekoodin suorittamista. Esim.

```java
int luku = 10;

if (luku == 0) { // lauseke
    System.out.println("Suoritetaan jos luku == 0 on totta");
}
```

```java
int luku = 2;

if (luku % 2 == 0) {
    System.out.println("Luku on parillinen");
}
```

<sample-output>

Luku on parillinen

</sample-output>

Ehtolauseen lauseke voi koostua useammasta osasta, joissa käytetään loogisia operaatioita **ja** `&&`, **tai** `||`, sekä **ei** `!`. 

* Kahdesta lausekkeesta koostuva lauseke, joka yhdistetään ja-operaatiolla, on totta jos ja vain jos yhdistettävistä lausekkeista molemmat evaluoituvat todeksi. 
* Kahdesta lausekkeesta koostuva lauseke, joka yhdistetään tai-operaatiolla, on totta jos jompikumpi tai molemmat yhdistettävistä lausekkeista evaluoituvat todeksi. 
* Loogista operaatiota ei käytetään totuusarvon muuntamiseen truesta falseksi tai falsesta trueksi.

Seuraavassa yhdistetään `&&`:lla eli ja-operaatiolla kaksi yksittäistä ehtoa. Koodilla tarkistetaan, onko muuttujassa oleva luku suurempi kuin 4 ja pienempi kuin 11, eli siis välillä 5-10:


```java
System.out.println("Onkohan luku väliltä 5-10: ");
int luku = 7;

if (luku > 4 && luku < 11) {
    System.out.println("On! :)");
} else {
    System.out.println("Ei ollut :(")
}
```

<sample-output>

Onkohan luku väliltä 5-10:
On! :)

</sample-output>

Seuraavassa annetaan `||`:n eli tai-operaation avulla kaksi vaihtoehtoa, onko luku pienempi kuin 0 tai suurempi kuin 100. Ehto toteutuu jos luku täyttää jommankumman ehdon:

```java
System.out.println("Onkohan luku pienempi kuin 0 tai suurempi kuin 100");
int luku = 145;

if (luku < 0 || luku > 100) {
    System.out.println("On! :)");
} else {
    System.out.println("Ei ollut :(")
}
```

<sample-output>

Onkohan luku pienempi kuin 0 tai suurempi kuin 100
On! :)

</sample-output>


Seuraavassa käännetään `!` ei-operaatiolla lausekkeen `luku > 4` tulos. Ei-operaatio merkitään lauseketta ennen niin, että käännettävä lauseke rajataan suluilla, ja ei-operaatio lisätään sulkuja ennen. 

```java
int luku = 7;

if (!(luku > 4)) {
    System.out.println("Luku ei ole suurempi kuin 4.");
} else {
    System.out.println("Luku on suurempi tai yhtäsuuri kuin 4.")
}
```

<sample-output>

Luku on suurempi tai yhtäsuuri kuin 4.

</sample-output>

Alla on kuvattuna lausekkeiden toimintaa kun lausekkeissa on loogisia operaatioita.



| luku  | luku > 0  | luku < 10  | luku > 0 && luku < 10  | !(luku > 0 && luku < 10)  | luku > 0 \|\| luku < 10  |
| ----- | --------- | ---------- | ---------------------- | ------------------------- | ---------------------- |
| -1    | false     | true       | false                  | true                      | true                   |
| 0     | false     | true       | false                  | true                      | true                   |
| 1     | true      | true       | true                   | false                     | true                   |
| 9     | true      | true       | true                   | false                     | true                   |
| 10    | true      | false      | false                  | true                      | true                   |



<programming-exercise name='Iän tarkistus' tmcname='osa02-Osa02_11.IanTarkistus'>

Tee ohjelma, joka kysyy käyttäjän iän ja tarkistaa, että se on mahdollinen (ainakin 0 ja korkeintaan 120). Käytä ohjelmassa vain yhtä `if`-komentoa.

<sample-output>

Kuinka vanha olet? **10**
OK

</sample-output>

<sample-output>

Kuinka vanha olet? **55**
OK

</sample-output>

<sample-output>

Kuinka vanha olet? **-3**
Mahdotonta!

</sample-output>

<sample-output>

Kuinka vanha olet? **150**
Mahdotonta!

</sample-output>

</programming-exercise>


## Ehtolauseiden suoritusjärjestys

Tutustutaan klassiseen ohjelmointiongelmaan:

_'Kirjoita ohjelma, joka kysyy käyttäjältä lukua yhden ja sadan väliltä ja tulostaa luvun. Jos luku on kolmella jaollinen, luvun sijaan tulostetaan "Fizz". Jos luku on viidellä jaollinen, luvun sijaan tulostetaan "Buzz". Jos luku on sekä kolmella että viidellä jaollinen, luvun sijaan tulostetaan "FizzBuzz"'._

Ohjelmoija lähtee ratkaisemaan tehtävää lukemalla ongelmakuvauksen, ja luomalla ohjelmakoodia ongelmakuvausta seuraten. Koska ohjelman suoritusehdot esitellään ongelmassa annetussa järjestyksessä, muodostuu ohjelman rakenne järjestyksen perusteella. Ohjelman rakenne muodostuu seuraavien askelten perusteella:

* Tee ohjelma, joka lukee luvun käyttäjältä ja tulostaa sen.
* Jos luku on jaollinen kolmella, tulosta luvun sijaan merkkijono "Fizz".
* Jos luku on jaollinen viidellä, tulosta luvun sijaan merkkijono "Buzz".
* Jos luku on jaollinen kolmella ja viidellä, tulosta luvun sijan merkkijono "FizzBuzz".

Jos-tyyppiset ehdot on helppo toteuttaa `if - else if - else` -valintakäskyjen avulla. Alla oleva koodi on toteutettu yllä olevien askelten perusteella, mutta se ei kuitenkaan toimi oikein, kuten alla olevista esimerkeistä huomataan.

```java
Scanner lukija = new Scanner(System.in);

int luku = Integer.valueOf(lukija.nextLine());

if (luku % 3 == 0) {
    System.out.println("Fizz");
} else if (luku % 5 == 0) {
    System.out.println("Buzz");
} else if (luku % 3 == 0 && luku % 5 == 0) {
    System.out.println("FizzBuzz");
} else {
    System.out.println(luku);
}
```

<sample-output>

**3**
Fizz

</sample-output>


<sample-output>

**4**
4

</sample-output>

<sample-output>

**5**
Buzz

</sample-output>

<sample-output>

**15**
Fizz

</sample-output>

Edellisessä lähestymistavassa ongelmana on se, että **ehtolauseiden läpikäynti lopetetaan ensimmäiseen ehtoon, jonka arvo on totta**. Esimerkiksi luvulla 15 tulostetaan merkkijono "Fizz", sillä luku on kolmella jaollinen (15 % 3 == 0).

Yksi lähestymistapa yllä olevan ajatusketjun kehittämiseen on ensin etsiä **vaativin ehto** ja toteuttaa se. Tämän jälkeen toteutettaisiin muut ehdot. Yllä olevassa esimerkissä ehto "jos luku on jaollinen kolmella **ja** viidellä" vaatii kahden tapauksen toteutumista. Nyt ajatusketju olisi muotoa.

1. Tee ohjelma, joka lukee luvun käyttäjältä.
2. Jos luku on jaollinen kolmella ja viidellä, tulosta luvun sijan merkkijono "FizzBuzz".
3. Jos luku on jaollinen kolmella, tulosta luvun sijaan merkkijono "Fizz".
4. Jos luku on jaollinen viidellä, tulosta luvun sijaan merkkijono "Buzz".
5. Muulloin ohjelma tulostaa käyttäjältä luetun luvun.


Nyt ongelmakin tuntuu ratkeavan.

```java
Scanner lukija = new Scanner(System.in);

int luku = Integer.valueOf(lukija.nextLine());

if (luku % 3 == 0 && luku % 5 == 0) {
    System.out.println("FizzBuzz");
} else if (luku % 3 == 0) {
    System.out.println("Fizz");
} else if (luku % 5 == 0) {
    System.out.println("Buzz");
} else {
    System.out.println(luku);
}
```

<sample-output>

**2**
2

</sample-output>

<sample-output>

**5**
Buzz

</sample-output>

<sample-output>

**30**
FizzBuzz

</sample-output>


<programming-exercise name='Karkausvuosi' tmcname='osa02-Osa02_12.Karkausvuosi'>

Vuosi on karkausvuosi, jos se on jaollinen 4:llä. Kuitenkin jos vuosi on jaollinen 100:lla, se on karkausvuosi vain silloin, kun se on jaollinen myös 400:lla.

Tee ohjelma, joka lukee käyttäjältä vuosiluvun, ja tarkistaa, onko vuosi karkausvuosi.

<sample-output>

Anna vuosi: **2011**
Vuosi ei ole karkausvuosi.

</sample-output>

<sample-output>

Anna vuosi: **2012**
Vuosi on karkausvuosi.

</sample-output>

<sample-output>

Anna vuosi: **1800**
Vuosi ei ole karkausvuosi.

</sample-output>

<sample-output>

Anna vuosi: **2000**
Vuosi on karkausvuosi.

</sample-output>

Vihje 1: Jollain luvulla jaollisuuden voi tarkastaa jakojäännösoperaation `%` avulla seuraavasti. 

```java
int luku = 5;

if (luku % 5 == 0) {
    System.out.println("Luku on viidellä jaollinen!");
}

if (luku % 6 != 0) {
    System.out.println("Luku ei ole kuudella jaollinen!")
}
```
  
<sample-output>

Luku on viidellä jaollinen!
Luku ei ole kuudella jaollinen!

</sample-output>  

Vihje 2: mieti ongelmaa if, else if, else if, ... -vertailujen ketjuna ja aloita ohjelman rakentaminen tilanteesta, missä voit olla varma, että ohjelma ei ole karkausvuosi.


```java
Scanner lukija = new Scanner(System.in);
int luku = Integer.valueOf(lukija.nextLine());

if (luku % 4 != 0) {
    System.out.println("Vuosi ei ole karkausvuosi.");
} else if (...) {
    ...
} ...
```

</programming-exercise>


## Toistolauseen ehto

Olemme tähän mennessä käyttäneet toistolausetta, jonka suluissa on totuusarvo `true`, jolloin toistoa on jatkettu ikuisesti (tai kunnes toistolauseessa päädytään komentoon `break`). Toistolauseen sulut, joihin olemme tähän mennessä asettaneet aina arvon `true` sisältävät oikeastaan ehtolausekkeen, aivan samalla tavalla kuin `if`-komentoa seuraavat sulut. Arvon true voi korvata lausekkeella, joka evaluoidaan ohjelman suorituksen yhteydessä. Lauseke määritellään täsmälleen samalla tavalla kuin ehtolauseen (if) lauseke.

Seuraavassa esimerkissä tulostetaan luvut 1, 2, ..., 5.  Kun `luku`-muuttujan arvo on yli 5, `while`-ehto ei ole enää voimassa ja toistaminen lopetetaan.


```java
int luku = 1;

while (luku < 6) {
    System.out.println(luku);
    luku++;
}
```

Lue ylläoleva "niin pitkään kuin muuttujan luku arvo on pienempi kuin 6, tulosta muuttujan luku arvo ja kasvata muuttujan luku arvoa yhdellä".


<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        int luku = 1;\n\n        while (luku < 6) {\n            System.out.println(luku);\n            luku++;\n        }\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":2},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":2},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"14","frame_id":14}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":2},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":2},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":3},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"23","frame_id":23}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":3},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"24","frame_id":24}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":3},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":3},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":4},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":4},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":4},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":4},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":5},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":5},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":5},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":5},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":6},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":6},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"luku":6},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"return","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"luku":6,"__return__":["VOID"]},"ordered_varnames":["luku","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


Yllä muuttujan `luku` arvoa kasvatetaan yhdellä aina kun toistolauseen lohko suoritetaan.

Alla on video toistolauseen käytöstä. 

<youtube id='us9GXUZ60ws'></youtube>


<programming-exercise name='Nollasta lukuun' tmcname='osa02-Osa02_13.NollastaLukuun'>

Kirjoita ohjelma, joka lukee käyttäjältä kokonaisluvun. Tämän jälkeen ohjelma tulostaa luvut nollasta käyttäjän syöttämään lukuun. Voit olettaa, että käyttäjä syöttää aina positiivisen luvun. Alla on muutamia esimerkkejä ohjelman toivotusta toiminnasta.

<sample-output>

**4**
0
1
2
3
4

</sample-output>

<sample-output>

**1**
0
1

</sample-output>

</programming-exercise>


<programming-exercise name='Luvusta sataan' tmcname='osa02-Osa02_14.LuvustaSataan'>

Kirjoita ohjelma, joka lukee käyttäjältä kokonaisluvun. Tämän jälkeen ohjelma tulostaa luvusta lähtien luvut sataan asti. Voit olettaa, että käyttäjä syöttää aina luvun, joka on pienempi kuin 100. Alla on muutamia esimerkkejä ohjelman toivotusta toiminnasta.


<sample-output>

**99**
99
100

</sample-output>


<sample-output>

**-4**
-4
-3
-2
-1
0
1
2
... (monta lukua välissä) ...
98
99
100

</sample-output>

</programming-exercise>


<text-box variant='hint' name='Moniosaisia tehtäviä'>

Huomaa, että tästä lähtien tehtävissä saattaa olla useampia osia. Jokainen osa lasketaan yksittäiseksi tehtäväksi, eli esimerkiksi seuraava tehtävä vastaa kahta yksiosaista tehtävää. Useampiosaiset tehtävät voi tyypillisesti palauttaa myös vaikka tehtävä ei olisi vielä valmis -- tällöin valmiista osista lisätään pisteet kirjanpitoon.

</text-box>


<programming-exercise name='Mihin ja mistä? (2 osaa)' tmcname='osa02-Osa02_15.MihinJaMista'>


Tämä tehtävä on ensimmäinen kaksiosainen tehtävä. Kun teet molemmat osat, saat tehtävästä kaksi tehtäväpistettä. Voit palauttaa tehtävän myös siten, että vain ensimmäinen osa on tehtynä.
  

<h2>Mihin asti?</h2>

Kirjoita ohjelma, joka tulostaa kokonaisluvut 1:stä käyttäjän antamaan lukuun asti.

<sample-output>

Mihin asti? **3**
1
2
3

</sample-output>

<sample-output>

Mihin asti? **5**
1
2
3
4
5

</sample-output>

**Vihje:** käyttäjältä lukemasi luku toimii nyt whilen lopetusehdon ylärajana. Muista että Javassa `a <= b` tarkoittaa _a pienempi tai yhtä suuri kuin b_.


<h2>Mistä lähtien?</h2>

Lisää ohjelmaan käyttäjältä kysyttävä alaraja.

<sample-output>

Mihin asti? **8**
Mistä lähtien? **5**
5
6
7
8

</sample-output>

Jos tavoite on suurempi kuin lähtökohta ei tulostu mitään:

<sample-output>

Mihin asti? **12**
Mistä lähtien? **16**

</sample-output>

**Huom!** muista että ala- ja yläraja voivat olla myös negatiivisia!

</programming-exercise>

Toistolauseen suoritus ei lopu heti kun toistolauseen ehtolauseke voisi evaluoitua todeksi. Toistolauseen ehtolauseke evaluoidaan aina kun saavutaan toistolauseen alkuun, eli (1) kun ohjelman seuraava suoritettava lause on toistolause, ja (2) kun toistolauseeseen liittyvän lohkon sisältämän ohjelmakoodin suoritus on saatu loppuun.

Tarkastellaan seuraavaa toistolausetta.

```java
int luku = 1;

while (luku != 2) {
    System.out.println(luku);
    luku = 2;
    System.out.println(luku);
    luku = 1;
}
```

Ohjelman tulostus seuraavanlainen:

<sample-output>
1
2
1
2
1
2
...
</sample-output>

Vaikka muuttujan `luku` arvo on välillä 2, toistolauseen suoritus ei lopu koskaan.

**Toistolauseen ehto tarkistetaan silloin kun toistolauseen toistaminen aloitetaan sekä silloin kun koodin suoritus on päässyt toistolauseen lopettavaan aaltosulkuun asti.** Mikäli toistolauseen ehdon lauseke on evaluoituu todeksi eli muotoon `true`, suoritus jatkuu toistolauseen alusta. Mikäli lauseke evaluoituu epätodeksi eli muotoon `false`, suoritus siirtyy toistolausetta seuraavaan lauseeseen.

Vaikka muuttujan `luku` arvo on ylläolevassa toistolauseessa välillä 2, ei se ole koskaan 2 toistolauseen lopussa. Lopussa ehto `luku != 2` on aina totta, ja suoritus jatkuu..

Eräs yleinen ongelmatyyppi on "tee jotain tietty määrä kertoja". Näissä ohjelmissa esiintyy toisto, jonka jokaisella toistokerralla tehdään haluttu toiminnallisuus sekä muutetaan kertojen lukumäärää laskevaa laskurimuuttujaa.

Seuraava ohjelma laskee tulon 4*3 hieman kömpelöllä tavalla eli summana 3 + 3 + 3 + 3:

```java
int tulos = 0;

int i = 0;
while (true) {
  tulos += 3; // tarkoittaa samaa kuin tulos = tulos + 3;
  i++;  // tarkoittaa samaa kuin i = i + 1;

  if (i == 4) {
    break;
  }
}

System.out.println(tulos);
```

<p>
  Saman toiminnallisuuden voi toteuttaa myös seuraavasti.
</p>

```java
int tulos = 0;

int i = 0;
while (i < 4) {
  tulos += 3; // tarkoittaa samaa kuin tulos = tulos + 3;
  i++;  // tarkoittaa samaa kuin i = i + 1;
}

System.out.println(tulos);
```


Mitä enemmän ohjelmassa on muuttujia, sitä haastavampaa ohjelman askeleittaisen suorituksen seuraaminen on. Ohjelman ymmärtämisen kannalta suorituksen seuraaminen on kuitenkin tärkeää.

Yksi näppärä tapa muuttujien arvojen tarkasteluun toistolauseessa on taulukko. Seuraavaan taulukkoon on kirjoitettu auki edellisen esimerkin muuttujien `tulos` ja `i` arvot kullakin toistolauseen ehdon `i < 4` vertailuhetkellä.


<table class="table">
  <tr>
    <th>tulos</th>
    <th>i</th>
    <th>i < 4</th>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>true</td>
  </tr>
  <tr>
    <td>3</td>
    <td>1</td>
    <td>true</td>
  </tr>
  <tr>
    <td>6</td>
    <td>2</td>
    <td>true</td>
  </tr>
  <tr>
    <td>9</td>
    <td>3</td>
    <td>true</td>
  </tr>
  <tr>
    <td>12</td>
    <td>4</td>
    <td>false</td>
  </tr>
</table>

Toistolauseen suoritus loppuu kun muuttujan `summa` arvo on 12 ja muuttujan `i` arvo on 4 (ehto `i < 4` on tällöin epätotta).


<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        int tulos = 0;\n\n        int i = 0;\n        while (i < 4) {\n            tulos += 3;\n            i++;\n        }\n\n        System.out.println(tulos);\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"tulos":0},"ordered_varnames":["tulos"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":0,"i":0},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":0,"i":0},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":3,"i":0},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":3,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":3,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":3,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":6,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":6,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"24","frame_id":24}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":6,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":6,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":9,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":9,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":9,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":9,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":12,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"47","frame_id":47}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"12\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"12\n","event":"return","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"tulos":12,"i":4,"__return__":["VOID"]},"ordered_varnames":["tulos","i","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<programming-exercise name='Lukusarjan summa' tmcname='osa02-Osa02_16.LukusarjanSumma'>

Tee ohjelma, joka laskee summan 1+2+3+...+n, missä n on käyttäjän syöttämä luku.

Esimerkkitulostuksia:

<sample-output>

Mihin asti? **3**
Summa on 6

</sample-output>

Edellisessä esimerkissä laskettiin 1 + 2 + 3 = 6

<sample-output>

Mihin asti? **7**
Summa on 28

</sample-output>

Ja nyt laskettiin 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28

**Vihje:** Tee ohjelma `while`-komennon avulla. Käytä ohjelmassasi apumuuttujaa toistokertojen muistamiseen. Lisää jokaisella toistokerralla toistokerrat muistavan muuttujan arvo apumuuttujaan johon lasket summan arvon.

</programming-exercise>


<programming-exercise name='Rajatun lukusarjan summa' tmcname='osa02-Osa02_17.RajatunLukusarjanSumma'>

Muuta edellistä tehtävää siten, että käyttäjä määrää summan laskemisen aloituskohdan. Voit olettaa, että käyttäjä antaa ensin pienemmän luvun ja sitten suuremman luvun.

Esimerkkitulostuksia:

<sample-output>

Ensimmäinen: **3**
Viimeinen: **5**
Summa on 12

</sample-output>

Edellisessä laskettiin 3 + 4 + 5 = 12

<sample-output>

Ensimmäinen: **2**
Viimeinen: **8**
Summa on 35

</sample-output>

Ja nyt laskettiin 2 + 3 + 4 + 5 + 6 + 7 + 8 = 35

</programming-exercise>


<programming-exercise name='Kertoma' tmcname='osa02-Osa02_18.Kertoma'>

Tee ohjelma, joka laskee käyttäjän syöttämän luvun kertoman.

Kertoma `n!` lasketaan kaavalla 1 * 2 * 3 * ... * n. Esimerkiksi luvun 4 kertoma on 24, eli 4! = 1 * 2 * 3 * 4 = 24. Lisäksi on määritelty, että luvun 0 kertoma on 1, eli 0! = 1.

Esimerkkitulostuksia:

<sample-output>

Anna luku: **3**
Kertoma on 6

</sample-output>

Nyt laskettiin 1 * 2 * 3 = 6

<sample-output>

Anna luku: **10**
Kertoma on 3628800

</sample-output>

Ja nyt laskettiin 1 * 2 * 3 * ... * 8 * 9 * 10 = 3628800

_Lisätietoa_: Kertomaa käytetään erityisesti todennäköisyyslaskennassa tilanteissa, missä halutaan esimerkiksi tarkastella jonkin joukon kaikkia erilaisia järjestyksiä. Esimerkiksi viiden hengen ryhmän voi järjestää 5! erilaiseen jonoon, ja 52 kortin korttipakka voi olla 52! erilaisessa järjestyksessä. Kertomaa voi käyttää myös <a href="http://fi.wikipedia.org/wiki/Kombinaatio" target="_blank" rel="noopener">kombinaatioiden</a> laskemiseen; esimerkiksi 52 kortin korttipakasta on mahdollista jakaa 52! / (5! * (52 - 5)!) erilaisella viiden kortin kättä, ja 40 numeron joukosta voi tehdä yhteensä 40! / (7! * (40 - 7)!) erilaista 7 numeron lottoriviä.

</programming-exercise>


<text-box variant='hint' name='Ohjelmien tekeminen pienissä paloissa'>

Kun teet ohjelmaa, oli se sitten harjoitustehtävä tai oma projektisi, mieti minkälaisia osia ohjelma tarvitsee toimiakseen, ja etene näitä pieniä osia yksitellen toteuttaen. Jokaisen osan toteuttamisen jälkeen kokeile tähänastisen ohjelmasi toimintaa.

Älä koskaan yritä ratkaista koko ongelmaa kerralla, sillä tällöin ohjelman suorittaminen ja testaaminen kesken ongelmanratkaisuprosessin on vaikeaa. Aloita jollain helpolla asialla jonka tiedät varmasti osaavasi. Kun yksi ohjelman osa on saatu toimimaan, voit siirtyä ratkaisemaan seuraavaa ongelmaa.

Osa kurssin tehtävistä on valmiiksi osiin pilkottuja. Usein osat pitää vielä pilkkoa ohjelmoinnin kannalta vieläkin pienempiin paloihin. Kannattaa tehdä siten, että suoritat ohjelman lähes jokaisen uuden koodirivin jälkeen. Tällöin varmistat, että ratkaisu on etenemässä haluttuun suuntaan.

</text-box>


<programming-exercise name='Silmukat, lopetus ja muistaminen (5 osaa)' tmcname='osa02-Osa02_19.SilmukatLopetusJaMuistaminen'>

Seuraavassa tehtävässä tehdään yksi ohjelma, mutta ohjelman rakentaminen tapahtuu hyvin pienissä paloissa. Tämä on ehdottoman suositeltava tapa aina kun ohjelmoit.

Tehtäväsarja muodostaa yhden isomman ohjelman, jonka toiminnallisuus toteutetaan pienissä paloissa. Jos et tee tehtäväsarjaa loppuun asti, voit lähettää sen tarkastettavaksi vajaatekoisenakin. Tämä onnistuu painamalla testausnapin oikealla puolella olevasta "submit"-napista eli pienestä ylöspäinosoittavasta nuolesta. Vaikka palautusautomaatti valittaakin vielä tekemättä olevien tehtävänosien testeistä, kirjautuvat jo tekemiesi osien pisteet.

Huom: muistathan, että jokaisen isomman tehtävän "alitehtävä" on saman arvoinen tehtävä kuin yksi alikohdaton tehtävä. Tämä tehtävä vastaa siis viittä normaalia tehtävää.


<h2>Lukujen lukeminen</h2>

Tee ohjelma, joka kysyy käyttäjältä lukuja (ohjelma tulostaa käyttäjälle aluksi "Syötä luvut:"), kunnes käyttäjä antaa luvun -1. Kun käyttäjä syöttää luvun -1, ohjelma tulostaa "Kiitos ja näkemiin!" ja päättyy.

<sample-output>

Syötä luvut:
**5**
**2**
**4**
**-1**
Kiitos ja näkemiin!

</sample-output>


<h2>Lukujen summa</h2>

Laajenna edellistä ohjelmaa siten, että ohjelma ilmoittaa käyttäjän syöttämien lukujen summan. (Lukua -1 ei lasketa mukaan.)

<sample-output>

Syötä luvut:
**5**
**2**
**4**
**-1**
Kiitos ja näkemiin!
Summa: 11

</sample-output>


<h2>Lukujen summa ja lukumäärä</h2>

Laajenna edellistä ohjelmaa siten, että ohjelma ilmoittaa myös käyttäjien antamien lukujen lukumäärän. (Lukua -1 ei lasketa mukaan.)

<sample-output>

Syötä luvut:
**5**
**2**
**4**
**-1**
Kiitos ja näkemiin!
Summa: 11
Lukuja: 3

</sample-output>


<h2>Lukujen keskiarvo</h2>

Muuta edellistä ohjelmaa siten, ohjelma ilmoittaa lukujen keskiarvon. (Lukua -1 ei lasketa mukaan.)

<sample-output>

Syötä luvut:
**5**
**2**
**4**
**-1**
Kiitos ja näkemiin!
Summa: 11
Lukuja: 3
Keskiarvo: 3.666666666666

</sample-output>


<h2>Parilliset ja parittomat</h2>

Laajenna edellistä ohjelmaa siten, että  ohjelma ilmoittaa parillisten ja parittomien lukujen määrän. (Lukua -1 ei lasketa mukaan.)

<sample-output>

Syötä luvut:
**5**
**2**
**4**
**-1**
Kiitos ja näkemiin!
Summa: 11
Lukuja: 3
Keskiarvo: 3.666666666666
Parillisia: 2
Parittomia: 1

</sample-output>

</programming-exercise>


Tarkastellaan seuraavaksi ohjelmaa, joka lukee käyttäjältä kokonaislukuja. Ohjelma käsittelee negatiiviset luvut epäkelpoina lukuina, positiiviset luvut hyväksyttävinä lukuina, sekä nollan lukemisen lopettamista ilmaisevana lukuna. Kun käyttäjä syöttää nollan, ohjelma tulostaa hyväksyttyjen lukujen summan, hyväksyttyjen lukujen lukumäärän sekä epäkelpojen lukujen lukumäärän.

Alla on kuvattuna eräs mahdollinen ratkaisu, joka ei kuitenkaan ole tyylin kannalta ideaali.

```java
Scanner lukija = new Scanner(System.in);

System.out.print("Anna lukuja, negatiiviset luvut eivät kelpaa: ");
int summa = 0;
int hyvaksytytLuvut = 0;
int epakelvotLuvut = 0;

while (true) {
    int luettu = Integer.valueOf(lukija.nextLine());

    if (luettu == 0) {
        System.out.println("Hyväksyttävien lukujen summa: " + summa);
        System.out.println("Hyväksyttyjä lukuja: " + hyvaksytytLuvut);
        System.out.println("Epäkelvot luvut: " + epakelvotLuvut);
        break;
    }

    if (luettu < 0) {
        epakelvotLuvut++;
        continue;
    }

    summa += luettu;
    hyvaksytytLuvut++;
}
```

Yllä kuvatussa lähestymistavassa toistolauseen päättymisen jälkeen tapahtuva laskenta on toteutettu toistolauseen sisälle. Lähestymistapa ei ole suositeltava, sillä se johtaa helposti hyvin monimutkaiseen ohjelman rakenteeseen. Jos toistolauseen lopettamisen yhteydessä pitäisi tehdä muutakin -- esimerkiksi lukea lisää syötteitä -- asetettaisiin kyseinenkin toiminnallisuus helposti ehtolauseen sisälle. Lisätoiminnallisuuden kertyessä, ohjelma muuttuisi yhä vaikeammin ja vaikeammin luettavaksi.

Pitäydytään seuraavassa toistolauseen muodossa:

```java
Scanner lukija = new Scanner(System.in);

// toistolauseessa tarvittavien muuttujien luominen

while (true) {
    // syötteen lukeminen

    // toistolauseesta poistuminen -- break

    // epäkelpojen syötteiden rajaaminen pois -- continue

    // hyväksyttävien syötteiden käsittely
}

// toistolauseesta poistumisen jälkeen suoritettava toiminnallisuus
```

Toisin sanoen, oleva ohjelma on selkeämpi jos toistolauseesta poistumisen jälkeen tehtävät asiat ovat toistolauseen ulkopuolella.

```java
Scanner lukija = new Scanner(System.in);

System.out.print("Anna lukuja, negatiiviset luvut eivät kelpaa: ");
int summa = 0;
int hyvaksytytLuvut = 0;
int epakelvotLuvut = 0;

while (true) {
    int luettu = Integer.valueOf(lukija.nextLine());

    if (luettu == 0) {
        break;
    }

    if (luettu < 0) {
        epakelvotLuvut++;
        continue;
    }

    summa += luettu;
    hyvaksytytLuvut++;
}

System.out.println("Hyväksyttävien lukujen summa: " + summa);
System.out.println("Hyväksyttyjä lukuja: " + hyvaksytytLuvut);
System.out.println("Epäkelvot luvut: " + epakelvotLuvut);
```

