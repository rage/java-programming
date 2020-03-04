---
path: '/part-7/3-larger-exercises'
title: 'Larger programming exercises'
hidden: false
---


<!-- Seitsemännen osan lopuksi teet muutamia laajempia tehtäviä. Tehtävissä ei ole ennalta määriteltyä rakennetta -- mieti tehtävää tehdessäsi minkälaiset luokat ja oliot auttavat tehtävien ratkaisemisessa. -->
To conclude the seventh part, you'll do a few more extensive exercises. There is no predefined structure for these tasks -- think about the classes and objects that will help you complete the task while you're completing it.

<!-- <programming-exercise name='Arvosanatilastot (4 osaa)' tmcname='osa07-Osa07_06.Arvosanatilastot'> -->
<programming-exercise name='Grade statistics (4 parts)' tmcname='part07-Part07_06.GradeStatistics'>

<!-- Tässä tehtävässä toteutetaan ohjelma kurssipistetilastojen tulostamiseen. Ohjelmalle syötetään pisteitä (kokonaislukuja nollasta sataan), ja ohjelma tulostaa niiden perusteella arvosanoihin liittyviä tilastoja. Syötteiden lukeminen lopetetaan kun käyttäjä syöttää luvun -1. Lukuja, jotka eivät ole välillä [0-100] ei tule ottaa huomioon tilastojen laskemisessa. -->

In this exercise we create a program for printing statistics for points in course. The program receives points (integers from zero to one hundred) as input, based on which it prints statistics about grades. Reading of input stops when the user enters the number -1. Numbers that are not within the interval [0-100] should not be taken into account when calculating the statistics.

<!-- Muistathan, että käyttäjältä luetun merkkijonon saa muunnettua kokonaisluvuksi `Integer`-luokan metodilla `valueOf`. Tämä toimii seuraavasti: -->

A string read from the user can be converted to an integer using the `Integer` class' method `valueOf`. It works as follows:

```java
String numberAsString = "3";
int number = Integer.valueOf(numberAsString);

System.out.println(numberAsString + 7);
System.out.println(number + 7);
```

<sample-output>

37
10

</sample-output>


<!-- <h2>Pisteiden keskiarvot</h2> -->
<h2>Point averages</h2>


<!-- Kirjoita ohjelma, joka lukee käyttäjältä kurssin yhteispisteitä kuvaavia kokonaislukuja. Luvut väliltä [0-100] ovat hyväksyttäviä ja luku -1 lopettaa syötteen. Muut luvut ovat virhesyötteitä, jotka tulee jättää huomiotta. Kun käyttäjä syöttää luvun -1, tulostetaan syötettyjen yhteispisteiden keskiarvo. -->

Write a program that reads integers representing course point totals from the user. Numbers between [0-100] are acceptable and the number -1 ends the reading of input. Other numbers are erroneous input, which should be ignored. When the user enters the number -1, the program should print the average of the point totals that were input.

<!-- <sample-output>

Syötä yhteispisteet, -1 lopettaa:
**-42**
**24**
**42**
**72**
**80**
**52**
**-1**
Pisteiden keskiarvo (kaikki): 54.0

</sample-output> -->

<sample-output>

Enter point totals, -1 stops:
**-42**
**24**
**42**
**72**
**80**
**52**
**-1**
Point average (all): 54.0

</sample-output>

<!-- <sample-output>

Syötä yhteispisteet, -1 lopettaa:
**50**
**51**
**52**
**-1**
Pisteiden keskiarvo (kaikki): 51.0

</sample-output> -->

<sample-output>

Enter point totals, -1 stops:
**50**
**51**
**52**
**-1**
Point average (all): 51.0

</sample-output>


<!-- <h2>Hyväksyttyyn arvosanaan liittyvien pisteiden keskiarvot</h2> -->
<h2>Point average for points giving a passing grade</h2>

<!-- Täydennä ohjelmaa siten, että se laskee kaikkien pisteiden keskiarvon lisäksi myös hyväksyttyyn arvosanaan liittyvien pisteiden keskiarvot. -->

Extend the program, such that it in addition to giving the point average of all totals also provides the point average for points giving a passing grade.

<!-- Hyväksytyn arvosanan saa vähintään 50 kurssipisteellä. Voit olettaa, että käyttäjä kirjoittaa aina vähintään yhden välillä [0-100] olevan kokonaisluvun. Jos hyväksyttyyn arvosanaan osuvia lukuja ei ole lainkaan, tulostetaan viiva hyväksyttyjen keskiarvon kohdalle "-". -->

A passing grade is achieved by getting a minimum of 50 course points. You may assume that the user always provides at least one integer between [0-100]. If there are no numbers giving a passing grade, the program should print a line "-" where the average would be.

<!-- <sample-output>

Syötä yhteispisteet, -1 lopettaa:
**-42**
**24**
**42**
**72**
**80**
**52**
**-1**
Pisteiden keskiarvo (kaikki): 54.0
Pisteiden keskiarvo (hyväksytyt): 68.0

</sample-output> -->

<sample-output>

Enter point totals, -1 stops:
**-42**
**24**
**42**
**72**
**80**
**52**
**-1**
Point average (all): 54.0
Point average (passing): 68.0

</sample-output>

<!-- <sample-output>

Syötä yhteispisteet, -1 lopettaa:
**49**
**48**
**47**
**-1**
Pisteiden keskiarvo (kaikki): 48.0
Pisteiden keskiarvo (hyväksytyt): -

</sample-output> -->

<sample-output>

Enter point totals, -1 stops:
**49**
**48**
**47**
**-1**
Point average (all): 48.0
Point average (passing): -

</sample-output>


<!-- <h2>Hyväksyttyjen prosenttiosuus</h2> -->
<h2>Pass percentage</h2>

<!-- Täydennä edellisessä osassa toteuttamaasi ohjelmaa siten, että ohjelma tulostaa myös hyväksymisprosentin. Hyväksymisprosentti lasketaan kaavalla <em>100 * hyväksytyt / osallistujat</em>. -->

<p>Extend the program from the previous part, such that it also print the pass percentage. The pass percentage is calculated using the formula <em>100 * passing / participants</em>.</p>

<!-- <sample-output>

Syötä yhteispisteet, -1 lopettaa:
**49**
**48**
**47**
**-1**
Pisteiden keskiarvo (kaikki): 48.0
Pisteiden keskiarvo (hyväksytyt): -
Hyväksymisprosentti: 0.0

</sample-output> -->

<sample-output>

Enter point totals, -1 stops:
**49**
**48**
**47**
**-1**
Point average (all): 48.0
Point average (passing): -
Pass percentage: 0.0

</sample-output>

<!-- <sample-output>

Syötä yhteispisteet, -1 lopettaa:
**102**
**-4**
**33**
**77**
**99**
**1**
**-1**
Pisteiden keskiarvo (kaikki): 52.5
Pisteiden keskiarvo (hyväksytyt): 88.0
Hyväksymisprosentti: 50.0

</sample-output> -->

<sample-output>

Enter point totals, -1 stops:
**102**
**-4**
**33**
**77**
**99**
**1**
**-1**
Point average (all): 52.5
Point average (passing): 88.0
Pass percentage: 50.0

</sample-output>


<!-- <h2>Arvosanajakauma</h2> -->
<h2>Grade distribution</h2>

<!-- Täydennä ohjelmaa siten, että ohjelma tulostaa myös arvosanajakauman. Arvosananajakauma muodostetaan seuraavasti. -->

Extend the program, such that it also prints the grade distribution. The grade distribution is as follows:

<!-- <table class="table">
  <tr>
    <th>pistemäärä</th>
    <th>arvosana</th>
  </tr>
  <tr>
    <td>< 50</td>
    <td>hylätty eli 0</td>
  </tr>
  <tr>
    <td>< 60</td>
    <td>1</td>
  </tr>
  <tr>
    <td>< 70</td>
    <td>2</td>
  </tr>
  <tr>
    <td>< 80</td>
    <td>3</td>
  </tr>
  <tr>
    <td>< 90</td>
    <td>4</td>
  </tr>
  <tr>
    <td>>= 90</td>
    <td>5</td>
  </tr>
</table> -->

<table class="table">
  <tr>
    <th>points</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>< 50</td>
    <td>failed, i.e. 0</td>
  </tr>
  <tr>
    <td>< 60</td>
    <td>1</td>
  </tr>
  <tr>
    <td>< 70</td>
    <td>2</td>
  </tr>
  <tr>
    <td>< 80</td>
    <td>3</td>
  </tr>
  <tr>
    <td>< 90</td>
    <td>4</td>
  </tr>
  <tr>
    <td>>= 90</td>
    <td>5</td>
  </tr>
</table>


<!-- Jokainen koepistemäärä muutetaan arvosanaksi yllä olevan taulukon perusteella. Jos syötetty pistemäärä ei ole välillä [0-100], jätetään se huomiotta. -->

Each point total is converted to a grade based on the above table. If a point total isn't within [0-100], it should be ignored.

<!-- Arvosanajakauma tulostetaan tähtinä. Esim jos arvosanaan 5 oikeuttavia koepistemääriä on 1 kappale, tulostuu rivi <em>5: *</em>. Jos johonkin arvosanaan oikeuttavia pistemääriä ei ole, ei yhtään tähteä tulostu, alla olevassa esimerkissä näin on mm. nelosten kohdalla.</em> -->

<p>The grade distribution is printed out as stars. E.g. if there is one point total giving the grade 5, then it should print the row <em>5: *</em>. If there are no point totals giving a particular grade, then no stars should be printed for it. In the sample below this is true for e.g. the grade 4.</p>

<br/>

<sample-output>

Enter point totals, -1 stops:
**102**
**-2**
**1**
**33**
**77**
**99**
**-1**
Point average (all): 52.5
Point average (passing): 88.0
Pass percentage: 50.0
Grade distribution:
5: *
4:
3: *
2:
1:
0: **

</sample-output>

</programming-exercise>


<programming-exercise name='Recipe search (4 parts)' tmcname='part07-Part07_07.RecipeSearch'>

<!-- Tässä tehtävässä tehdään ohjelma, joka tarjoaa käyttäjälle mahdollisuuden reseptien hakuun reseptin nimen, keittoajan tai raaka-aineen nimen perusteella. Ohjelman tulee lukea reseptit käyttäjän antamasta tiedostosta. *Kannattaa kerrata tiedoston lukeminen materiaalin osasta 4 ennen tehtävän aloitusta.* -->

In this exercise we are going to create a program that allows for searching for recipes based on their name, cooking time, or the name of an ingredient. The program should read the recipes from a file that the user provides. *It might be a good idea to brush up on reading information from files (part 4) before beginning*

<!-- Jokainen resepti koostuu kolmesta tai useammasta rivistä reseptitiedostossa. Ensimmäisellä rivillä on reseptin nimi, toisella rivillä reseptin keittoaika (kokonaisluku), ja kolmas ja sitä seuraavat rivit kertovat reseptin raaka-aineet. Reseptin raaka-aineiden kuvaus päättyy tyhjään riviin. Tiedostossa voi olla useampia reseptejä. Alla kuvattuna esimerkkitiedosto. -->

Each recipe consists of three or more rows in a recipe file. The first row is for the name of the recipe, the second the cooking time (an integer), and the third and possibly following rows list the ingredients used in the recipe. An empty row follows the last ingredient row. There can be many recipes in a single file. Below, an example file containing recipes is described.

<!-- <sample-output>

Lettutaikina
60
maito
muna
jauho
sokeri
suola
voi

Lihapullat
20
jauheliha
muna
korppujauho

Tofurullat
30
tofu
riisi
vesi
porkkana
kurkku
avokado
wasabi

</sample-output> -->

<sample-output>

Pancake dough
60
milk
egg
flour
salt
butter

Meatballs
20
ground meat
egg
breadcrumbs

Tofu rolls
30
tofu
rice
water
carrot
cucumber
avocado
wasabi

</sample-output>

<!-- Ohjelma toteutetaan osissa. Ensin ohjelmaan luodaan mahdollisuus reseptien lukemiseen sekä listaamiseen. Tämän jälkeen ohjelmaan lisätään mahdollisuus reseptien hakemiseen nimen perusteella, keittoajan perusteella ja lopulta raaka-aineen perusteella. -->

The program will be implemented in parts. First we'll create the possibility to read and list recipes. After that we'll add the functionality to search for recipes based on their name, cooking time, or the name of an ingredient.

<!-- Tehtäväpohjassa on mukana tiedosto `reseptit.txt`, jota voi käyttää sovelluksen testaamiseen. <em>Huomaa, että ohjelman ei tule listata reseptien raaka-aineita, mutta niitä käytetään hakutoiminnallisuudessa.</em> Tiedoston `reseptit.txt` voi myös ladata [tämän linkin takaa](/data/reseptit.txt). -->

There is a file called `recipes.txt` supplied with the exercise base. You can use it for testing purposes. <em>Notice that the program should not list the ingredients of the recipes, but they will be used in the search functionality.</em>

 <!-- You can also download the file `recipes.txt` by clicking [here](/data/recipes.txt). -->

<br/>


<!-- <h2>Reseptien lukeminen ja listaaminen</h2> -->

<h2>Reading and listing recipes</h2>

<!-- Luo ohjelmaan ensin mahdollisuus reseptien lukemiseen sekä listaamiseen. Ohjelman käyttöliittymän tulee olla seuraavanlainen. Voit olettaa, että käyttäjä syöttää aina tiedoston, joka on olemassa. Alla oletetaan, että tehtävänannossa annetut esimerkkireseptit ovat tiedostossa `reseptit.txt`. -->

First create the functionality to read and list recipes. The user interface of the program is described below. You may assume that the user only enters files that exist. Below we assume that the example recipes given earlier in the exercise description are stored in the file `recipes.txt`.

<!-- <sample-output>

Mistä luetaan? **reseptit.txt**

Komennot:
listaa - listaa reseptit
lopeta - lopettaa ohjelman

Syötä komento: **listaa**

Reseptit:
Lettutaikina, keittoaika: 60
Lihapullat, keittoaika: 20
Tofurullat, keittoaika: 30

Syötä komento:  **lopeta**

</sample-output> -->

<sample-output>

File to read: **recipes.txt**

Commands:
list - lists the recipes
stop - stops the program

Enter command: **list**

Recipes:
Pancake dough, cooking time: 60
Meatballs, cooking time: 20
Tofu rolls, cooking time: 30

Enter command:  **stop**

</sample-output>


<!-- <h2>Reseptien hakeminen nimen perusteella</h2> -->

<h2>Finding recipes by name</h2>

<!-- Lisää ohjelmaan mahdollisuus reseptien hakemiseen nimen perusteella. Nimen perusteella hakeminen tapahtuu komennolla `hae nimi`, jonka jälkeen käyttäjältä kysytään merkkijonoa, jota etsitään reseptin nimistä. Hakutoiminnallisuuden tulee toimia siten, että se tulostaa kaikki ne reseptit, joiden nimessä esiintyy käyttäjän kirjoittama merkkijono. -->

Make it possible to find recipes by their names. Finding by name is done with the command `find name`, after which the user is asked for the name that is used to search. The search should print all the recipes whose names contain the string given by the user.

<!-- <sample-output>

Mistä luetaan? **reseptit.txt**

Komennot:
listaa - listaa reseptit
lopeta - lopettaa ohjelman
hae nimi - hakee reseptiä nimen perusteella

Syötä komento: **listaa**

Reseptit:
Lettutaikina, keittoaika: 60
Lihapullat, keittoaika: 20
Tofurullat, keittoaika: 30

Syötä komento: **hae nimi**
Mitä haetaan: **rulla**

Reseptit:
Tofurullat, keittoaika: 30

Syötä komento:  **lopeta**

</sample-output> -->

<sample-output>

File to read: **recipes.txt**

Commands:
list - lists the recipes
stop - stops the program
find name - searches recipes by name

Enter command: **list**

Recipes:
Pancake dough, cooking time: 60
Meatballs, cooking time: 20
Tofu rolls, cooking time: 30

Enter command: **find name**
Searched word: **roll**

Recipes:
Tofu rolls, cooking time: 30

Enter command:  **stop**

</sample-output>

<!-- <h2>Reseptien hakeminen keittoajan perusteella</h2> -->

<h2>Searching for recipes by cooking time</h2>

<!-- Lisää seuraavaksi ohjelmaan mahdollisuus reseptien hakemiseen keittoajan perusteella. Keittoajan perusteella hakeminen tapahtuu komennolla `hae keittoaika`, jonka jälkeen käyttäjältä kysytään suurinta hyväksyttävää keittoaikaa. Hakutoiminnallisuuden tulee toimia siten, että se tulostaa kaikki ne reseptit, joiden keittoaika on pienempi tai yhtä suuri kuin käyttäjän syöttämä keittoaika. -->

Next, implement the possibility to find recipes based on their cooking time. This is done with the command `find cooking time`, after which the user is asked for the longest acceptable cooking time. The program should react by printing all the recipes whose cooking times don't exceed the cooking time given by the user (so equal or less time).

<!-- <sample-output>

Mistä luetaan? **reseptit.txt**

Komennot:
listaa - listaa reseptit
lopeta - lopettaa ohjelman
hae nimi - hakee reseptiä nimen perusteella
hae keittoaika - hakee reseptiä keittoajan perusteella

Syötä komento: **hae keittoaika**
Keittoaika korkeintaan: **30**

Reseptit:
Lihapullat, keittoaika: 20
Tofurullat, keittoaika: 30

Syötä komento: **hae keittoaika**
Keittoaika korkeintaan: **15**

Reseptit:

Syötä komento: **hae nimi**
Mitä haetaan: **rulla**

Reseptit:
Tofurullat, keittoaika: 30

Syötä komento:  **lopeta**

</sample-output> -->

<sample-output>

File to read: **recipes.txt**

Commands:
list - lists the recipes
stop - stops the program
find name - searches recipes by name
find cooking time - searches recipes by cooking time

Enter command: **find cooking time**
Max cooking time: **30**

Recipes:
Meatballs, cooking time: 20
Tofu rolls, cooking time: 30

Enter command: **find cooking time**
Max cooking time: **15**

Recipes:

Enter command: **find name**
Searched word: **roll**

Recipes:
Tofu rolls, cooking time: 30

Enter command:  **stop**

</sample-output>


<!-- <h2>Reseptien hakeminen raaka-aineen perusteella</h2> -->

<h2>Finding recipes based on their ingredients</h2>


<!-- Lisää lopulta ohjelmaan mahdollisuus reseptien hakemiseen raaka-aineen perusteella. Raaka-aineen perusteella hakeminen tapahtuu komennolla `hae aine`, jonka jälkeen käyttäjältä kysytään merkkijonoa. Hakutoiminnallisuuden tulee toimia siten, että se tulostaa kaikki ne reseptit, joiden raaka-aineissa esiintyy käyttäjän antama merkkijono. Huomaa, että tässä annetun merkkijonon täytyy vastata täysin haettua raaka-ainetta (esim. "okeri" ei käy ole sama kuin "sokeri"). -->

Finally, add the functionality to search for recipes based on their ingredients. This is done by choosing the command `find ingredient`, after which the user is asked for a string. The program should then print all the recipes that contain the specified string. Notice that with this option the given string must match exactly the ingredient that is searched for (e.g. "ugar" will return different results than "sugar").


<!-- <sample-output>

Mistä luetaan? **reseptit.txt**

Komennot:
listaa - listaa reseptit
lopeta - lopettaa ohjelman
hae nimi - hakee reseptiä nimen perusteella
hae keittoaika - hakee reseptiä keittoajan perusteella
hae aine - hakee reseptiä raaka-aineen perusteella

Syötä komento: **hae keittoaika**
Keittoaika korkeintaan: **30**

Reseptit:
Lihapullat, keittoaika: 20
Tofurullat, keittoaika: 30

Syötä komento: **hae aine**
Mitä raaka-ainetta haetaan: **sokeri**

Reseptit:
Lettutaikina, keittoaika: 60

Syötä komento: **hae aine**
Mitä raaka-ainetta haetaan: **muna**

Reseptit:
Lettutaikina, keittoaika: 60
Lihapullat, keittoaika: 20

Syötä komento: **hae aine**
Mitä raaka-ainetta haetaan: **una**

Reseptit:

Syötä komento:  **lopeta**

</sample-output>

</programming-exercise> -->

<sample-output>

File to read: **recipes.txt**

Commands:
list - lists the recipes
stop - stops the program
find name - searches recipes by name
find cooking time - searches recipes by cooking time
find ingredient - searches recipes by ingredient

Enter command: **find cooking time**
Max cooking time: **30**

Recipes:
Meatballs, cooking time: 20
Tofu rolls, cooking time: 30

Enter command: **find ingredient**
Ingredient: **sugar**

Recipes:
Pancake dough, cooking time: 60

Enter command: **find ingredient**
Ingredient: **egg**

Recipes:
Pancake dough, cooking time: 60
Meatballs, cooking time: 20

Enter command: **find ingredient**
Ingredient: **gg**

Recipes:

Enter command:  **stop**

</sample-output>

</programming-exercise>


<programming-exercise name='Big year (3 parts)' tmcname='part07-Part07_08.BigYear'>

**This exercise is worth three one-part exercises**

<!-- Tässä tehtävässä suunnittelet ja toteutat tietokannan lintubongareille. Tietokanta sisältää lintuja, joista jokaisella on nimi (merkkijono) ja latinankielinen nimi (merkkijono). Tämän lisäksi tietokanta laskee kunkin linnun havaintokertoja. -->
In this exercise you will design and implement a database for bird-watchers. The database contains birds, each of which has a name (string) and a name in Latin (string). The database also counts the observations of each bird.

<!-- Ohjelmasi täytyy toteuttaa seuraavat komennot: -->
The program must implement the following commands:

<!-- - `Add` - lisää linnun  -->
 -  `Add` - adds a bird

<!-- - `Observation` - lisää havainnon -->
 -  `Observation` - adds an observation

<!-- - `Tilasto` - tulostaa kaikki linnut -->
 -  `All` - prints all birds

<!-- - `Nayta` - tulostaa yhden linnun (**huom:** komennon nimessä ei ä-kirjainta!) -->
 -  `One` - prints one bird

<!-- - `Lopeta` - lopettaa ohjelman -->
 - `Quit` - ends the program

<!-- Lisäksi virheelliset syötteet pitää käsitellä. (Ks. `Simo` alla). Tässä vielä esimerkki ohjelman toiminnasta: -->
Incorrect input must also be handled.
The following is an example of the program functionality:

<sample-output>

? **Add**
Name: **Crow**
Name in Latin: **Corvus Corvus**
? **Add**
Name: **Hawk**
Name in Latin: **Dorkus Dorkus**
? **Observation**
Bird? **Hawk**
? **Observation**
Bird? **Lion**
Not a bird!
? **Observation**
Bird? **Hawk**
? **All**
Hawk (Dorkus Dorkus): 2 observations
Crow (Corvus Corvus): 0 observations
? **One**
Bird? **Hawk**
Hawk (Dorkus Dorkus): 2 observations
? **Lopeta**

</sample-output>

<!-- **Huom!** Ohjelmasi rakenne on täysin vapaa. Testaamme vain että `Paaohjelma` luokan `main`-metodi toimii kuten tässä on kuvailtu. Hyödyt tehtävässä todennäköisesti ongelma-aluetta sopivasti kuvaavista luokista. -->
**NB** You're free to structure your program the way you want. We only test that the `main` method of the `mainProgram` class works as shown above. You will most likely find it useful to use classes that are descriptive of the problem domain.

</programming-exercise>

