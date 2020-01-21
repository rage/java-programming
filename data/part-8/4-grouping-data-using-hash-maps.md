---
path: '/part-8/4-grouping-data-using-hash-maps'
title: 'Grouping data using hash maps'
hidden: true
---

<!-- <text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat käyttää listaa hajautustaulun arvona.
- Osaat ryhmitellä tietoa hajautustaulua hyödyntäen.

</text-box> -->
<text-box variant='learningObjectives' name='Learning Objectives'>

- You know how to use a list as a hash table's value
- You know how to categorize data using a hash table

</text-box>

<!-- Hajautustaulu sisältää korkeintaan yhden arvon yhtä avainta kohti. Seuraavassa esimerkissä tallennamme henkilöiden puhelinnumeroita hajautustauluun. -->
A hash table has at most one value per each key. In the following example, we store the phone numbers of people into the hash table.


<!-- ```java
HashMap<String, String> puhelinnumerot = new HashMap<>();
puhelinnumerot.put("Pekka", "040-12348765");

System.out.println("Pekan numero: " + puhelinnumerot.get("Pekka"));

puhelinnumerot.put("Pekka", "09-111333");

System.out.println("Pekan numero: " + puhelinnumerot.get("Pekka"));
``` -->
```java
HashMap<String, String> phoneNumbers = new HashMap<>();
phoneNumbers.put("Pekka", "040-12348765");

System.out.println("Pekka's Number " + phoneNumbers.get("Pekka"));

phoneNumbers.put("Pekka", "09-111333");

System.out.println("Pekka's Number " + phoneNumbers.get("Pekka"));
```
<!--
<sample-output>

Pekan numero: 040-12348765
Pekan numero: 09-111333

</sample-output> -->

<sample-output>

Pekka's number: 040-12348765
Pekka's number: 09-111333

</sample-output>

<!-- Entä jos haluaisimme liittää yhteen avaimeen useita arvoja, eli esimerkiksi useampia puhelinnumeroita yhdelle henkilölle?

Koska hajautustaulun avaimet ja arvot voivat olla mitä tahansa muuttujia, myös listojen käyttäminen hajautustaulun arvona on mahdollista. Useamman arvon lisääminen yhdelle avaimelle onnistuu liittämällä avaimeen lista. Muutetaan puhelinnumeroiden tallennustapaa seuraavasti: -->
What if we wanted to assign multiple values ​​to a single key, such as multiple phone numbers for a given person?

Since keys and values ​​in a hash table can be any variable, it is also possible to use lists as values in a hash table. You can add more values ​​to a single key by attaching a list to the key. Let's change the way the numbers are stored in the following way:

<!-- ```java
HashMap<String, ArrayList<String>> puhelinnumerot = new HashMap<>();
``` -->
```java
HashMap<String, ArrayList<String>> phoneNumbers = new HashMap<>();
```

<!-- Nyt hajautustaulussa on jokaiseen avaimeen liitettynä lista. Vaikka new-komento luo hajautustaulun, ei hajautustaulu sisällä alussa yhtäkään listaa. Ne on luotava tarvittaessa erikseen. -->
Each key of the hash table now has a list attached to it. Although the new command creates a hash table, the hash table initially does not contain a single list. They need to be created separately as needed.

<!-- ```java
HashMap<String, ArrayList<String>> puhelinnumerot = new HashMap<>();

// liitetään Pekka-nimeen ensin tyhjä ArrayList
puhelinnumerot.put("Pekka", new ArrayList<>());

// ja lisätään Pekkaa vastaavalle listalle puhelinnumero
puhelinnumerot.get("Pekka").add("040-12348765");
// ja lisätään toinenkin puhelinnumero
puhelinnumerot.get("Pekka").add("09-111333");

System.out.println("Pekan numerot: " + puhelinnumerot.get("Pekka"));
``` -->
```java
HashMap<String, ArrayList<String>> phoneNumbers = new HashMap<>();

// let's initially attatch an empty list to the name Pekka
phoneNumbers.put("Pekka", new ArrayList<>());

// and add a phone number to the list at Pekka
phoneNumbers.get("Pekka").add("040-12348765");
// and let's add another phone number
phoneNumbers.get("Pekka").add("09-111333");

System.out.println("Pekka's numbers: " + phoneNumbers.get("Pekka"));
```

<!-- <sample-output>

Pekan numero: [040-12348765, 09-111333]

</sample-output> -->
<sample-output>

Pekka's number: [040-12348765, 09-111333]

</sample-output>

<!-- Määrittelimme muuttujan puhelinnumero tyypiksi `HashMap<String, ArrayList<String>>`. Tämä tarkoittaa hajautustaulua, joka käyttää avaimena merkkijonoa ja arvona merkkijonoja sisältävää listaa. Hajautustauluun lisättävät arvot ovat siis konkreettisia listoja. -->
We define the type of the phone number as  `HashMap<String, ArrayList<String>>`. This refers to a hash table that uses a string as a key and a list containing strings as its value. As such, the values added to the hash table are concrete lists.

<!-- ```java
// liitetään Pekka-nimeen ensin tyhjä ArrayList
puhelinnumerot.put("Pekka", new  ArrayList<>());

// ...
``` -->
```java
// let's first add an empty ArrayList as the value of Pekka
phoneNumbers.put("Pekka", new  ArrayList<>());

// ...
```

<!-- Vastaavalla tyylillä voi toteuttaa esimerkiksi tehtävien pistekirjanpidon. Alla olevassa esimerkissä on hahmoteltu luokkaa `Tehtavakirjanpito`, mikä sisältää käyttäjäkohtaisen pistekirjanpidon. Käyttäjä esitetään merkkijonona ja pisteet kokonaislukuina. -->
We can implement, for instance, an exercise point tracking program in a similar way. The example below outlines the `TaskTracker` class, which involves user-specific tracking of points from tasks. The user is represented as a string and the points as integers.

<!-- ```java
public class Tehtavakirjanpito {
    private HashMap<String, ArrayList<Integer>> tehdytTehtavat;

    public Tehtavakirjanpito() {
        this.tehdytTehtavat = new HashMap<>();
    }

    public void lisaa(String kayttaja, int tehtava) {
        // uudelle käyttäjälle on lisättävä HashMapiin tyhjä lista jos sitä
        // ei ole jo lisätty
        this.tehdytTehtavat.putIfAbsent(kayttaja, new ArrayList<>());

        // haetaan ensin käyttäjän tehtävät sisältävä lista ja tehdään siihen lisäys
        ArrayList<Integer> tehdyt = this.tehdytTehtavat.get(kayttaja);
        tehdyt.add(tehtava);

        // edellinen olisi onnitunut myös ilman apumuuttujaa seuraavasti
        // this.tehdytTehtavat.get(kayttaja).add(tehtava);
    }

    public void tulosta() {
        for (String nimi: tehdytTehtavat.keySet()) {
            System.out.println(nimi + ": " + tehdytTehtavat.get(nimi));
        }
    }
}
``` -->
```java
public class TaskTracker {
    private HashMap<String, ArrayList<Integer>> completedExercises;

    public TaskTracker() {
        this.completedExercises = new HashMap<>();
    }

    public void lisaa(String user, int exercise) {
        // an empty list has to be added for a new user if one has not already been added
        this.completedExercises.putIfAbsent(user, new ArrayList<>());

        // let's first retrieve the list containing the exercises completed by the user and add to it
        ArrayList<Integer> completed = this.completedExercises.get(user);
        completed.add(exercise);

        // the previous would also work without the helper variable as follows
        // this.completedExercises.get(user).add(exercise);
    }

    public void print() {
        for (String name: completedExercises.keySet()) {
            System.out.println(name + ": " + completedExercises.get(name));
        }
    }
}
```
<!--
```java
Tehtavakirjanpito kirjanpito = new Tehtavakirjanpito();
kirjanpito.lisaa("Ada", 3);
kirjanpito.lisaa("Ada", 4);
kirjanpito.lisaa("Ada", 3);
kirjanpito.lisaa("Ada", 3);

kirjanpito.lisaa("Pekka", 4);
kirjanpito.lisaa("Pekka", 4);

kirjanpito.lisaa("Matti", 1);
kirjanpito.lisaa("Matti", 2);

kirjanpito.tulosta();
``` -->

```java
TaskTracker tracker = new TaskTracker();
tracker.add("Ada", 3);
tracker.add("Ada", 4);
tracker.add("Ada", 3);
tracker.add("Ada", 3);

tracker.add("Pekka", 4);
tracker.add("Pekka", 4);

tracker.add("Matti", 1);
tracker.add("Matti", 2);

tracker.print();
```

<sample-output>

Matti: [1, 2]
Pekka: [4, 4]
Ada: [3, 4, 3, 3]

</sample-output>

<programming-exercise name='Dictionary of many translations' tmcname='part08Part08_14.DictionaryOfManyTranslations'>

<!-- Tehtävänäsi on toteuttaa luokka `UseanKaannoksenSanakirja`, johon voidaan lisätä yksi tai useampi käännös jokaiselle sanalle. Luokan tulee toteuttaa seuraavat metodit: -->

Your assignment is to create the class `DictionaryOfManyTranslations". In it can be stored one or more translations for each word. The class is to implement the following methods:

<!-- - `public void lisaa(String sana, String kaannos)` lisää käännöksen sanalle säilyttäen vanhat käännökset -->

- `public void add(String word, String translation)` adds the translation for the word and preserves the old translations.

<!-- - `public ArrayList<String> kaanna(String sana)` palauttaa listan, joka sisältää sanojen käännökset. Jos sanalle ei ole yhtäkään käännöstä, metodin tulee palauttaa tyhjä lista. -->

- `public ArrayList<String> translate(String word)` returns a list of the translations added for the word. If the word has no translations, the method should return an empty list.

<!-- - `public void poista(String sana)` poistaa sanan ja sen kaikki käännökset sanakirjasta. -->

- `public void remove(String word)` removes the word and all its translations from the dictionary.

<!-- Käännökset kannattanee lisätä `HashMap<String, ArrayList<String>>`-tyyppiseen oliomuuttujaan. -->

It's probably best to add the translations to an object variable that is of the type `HashMap<String, ArrayList<String>>`

<!-- Esimerkki: -->

An example:

<!-- ```java
UseanKaannoksenSanakirja sanakirja = new UseanKaannoksenSanakirja();
sanakirja.lisaa("kuusi", "six");
sanakirja.lisaa("kuusi", "spruce");

sanakirja.lisaa("pii", "silicon");
sanakirja.lisaa("pii", "pi");

System.out.println(sanakirja.kaanna("kuusi"));
sanakirja.poista("pii");
System.out.println(sanakirja.kaanna("pii"));
``` -->

```java
DictionaryOfManyTranslations dictionary = new DictionaryOfManyTranslations();
dictionary.add("lie", "maata");
dictionary.add("lie", "valehdella");

dictionary.add("bow", "jousi");
dictionary.add("bow", "kumartaa");

System.out.println(dictionary.translate("lie"));
dictionary.remove("bow");
System.out.println(dictionary.translate("bow"));
```

<!-- <sample-output>

[six, spruce]
[]

</sample-output> -->

<sample-output>

[maata, valehdella]
[]

</sample-output>

</programming-exercise>


<programming-exercise name='Storage facility (2 parts)' tmcname='part08-Part08_15.StorageFacility'>


<!-- <h2>Lisääminen ja sisällön tarkastelu</h2> -->

<h2>Adding items and examining contents</h2>

<!-- Tehtävänäsi on toteuttaa luokka `Kellari`, jonka avulla pidetään kirjaa kellarikomeroista sekä niiden sisällöistä. Luokan tulee toteuttaa seuraavat metodit: -->

Your task is creating a class called `StorageFacility` that can be used to keep track of storage units and their contents. The class is to implement the following methods:

<!-- - `public void lisaa(String komero, String tavara)` lisää parametrina annettuun komeroon parametrina annetun tavaran. -->

- `public void add(String unit, String item)` adds the parameter item to the storage unit that is also given as a parameter.

<!-- - `public ArrayList<String> sisalto(String komero)` palauttaa listan, joka sisältää parametrina annetun komeron sisältämät tavarat. Mikäli komeroa ei ole tai komerossa ei ole yhtäkään tavaraa, metodin tulee palauttaa tyhjä lista. -->

- `public ArrayList<String> contents(String storageUnit)` returns a list that contains all the items in the storage unit indicated by the parameter. If there is no such storage unit or it contains no items, the method should return an empty list.

<!-- Esimerkki: -->

Here's an example:

<!-- ```java
Kellari kellari = new Kellari();
kellari.lisaa("a14", "luistimet");
kellari.lisaa("a14", "maila");
kellari.lisaa("a14", "luistimet");

kellari.lisaa("f156", "rullaluistimet");
kellari.lisaa("f156", "rullaluistimet");

kellari.lisaa("g63", "six");
kellari.lisaa("g63", "pi");

System.out.println(kellari.sisalto("a14"));
System.out.println(kellari.sisalto("f156"));
``` -->

```java
StorageFacility facility = new StorageFacility();
facility.add("a14", "ice skates");
facility.add("a14", "ice hockey stick");
facility.add("a14", "ice skates");

facility.add("f156", "rollerblades");
facility.add("f156", "rollerblades");

facility.add("g63", "six");
facility.add("g63", "pi");

System.out.println(facility.contents("a14"));
System.out.println(facility.contents("f156"));
```

<!-- <sample-output>

[luistimet, maila, luistimet]
[rullaluistimet, rullaluistimet]

</sample-output> -->

<sample-output>

[ice skates, ice hockey stick, ice skates]
[rollerblades, rollerblades]

</sample-output>


<!-- <h2>Komeroiden listaus ja komerosta poistaminen</h2> -->

<h2>Listing the units and removing from unit</h2>

<!-- Kun luokassa `Kellari` on toiminnallisuus tavaran komeroon lisäämiseen sekä komeron sisällöin listaamiseen, lisää sinne toiminnallisuus tavaran poistamiseen komerosta sekä komeroiden listaamiseen. -->

- Now the class `StorageFacility` contains the functionality to add an item to a storage unit and to list the contents of a unit. Next add the possibilities to remove an item from a storage unit and to list all the units.

<!-- - `public void poista(String komero, String tavara)` poistaa parametrina annetusta komerosta parametrina annetun tavaran. Huom! Poistaa vain yhden kappaleen -- mikäli samannimisiä tavaroita on useita, loput jäävät vielä jäljelle. Mikäli komero jäisi poiston jälkeen tyhjäksi, metodi poistaa myös komeron. -->

- `public void remove(String storageUnit, String item)` removes the given item from the given storage unit. NB! Only removes one item -- if there are several items with the same name, the rest still remain. If the storage unit would be empty after the removal, the method also removes the unit.

<!-- - `public ArrayList<String> komerot()` palauttaa listana kellarikomeroiden nimet. Huom! Listassa vain ne komerot, joissa on tavaraa. -->

- `public ArrayList<String> storageUnits()` returns the names of the storage units as a list. NB! Only the units that contain items are listed.

<!-- Esimerkki: -->

An example:

<!-- ```java
Kellari kellari = new Kellari();
kellari.lisaa("a14", "luistimet");
kellari.lisaa("a14", "maila");
kellari.lisaa("a14", "luistimet");

kellari.lisaa("f156", "rullaluistimet");
kellari.lisaa("f156", "rullaluistimet");

kellari.lisaa("g63", "six");
kellari.lisaa("g63", "pi");

kellari.poista("f156", "rullaluistimet");

System.out.println(kellari.sisalto("f156"));

kellari.poista("f156", "rullaluistimet");

System.out.println(kellari.komerot());
``` -->

```java
StorageFacility facility = new StorageFacility();
facility.add("a14", "ice skates");
facility.add("a14", "ice hockey stick");
facility.add("a14", "ice skates");

facility.add("f156", "rollerblades");
facility.add("f156", "rollerblades");

facility.add("g63", "six");
facility.add("g63", "pi");

facility.remove("f156", "rollerblades");

System.out.println(kellari.contents("f156"));

facility.remove("f156", "rollerblades");

System.out.println(facility.storageUnits());
```

<!-- <sample-output>

[rullaluistimet]
[a14, g63]

</sample-output> -->

<sample-output>

[rollerblades]
[a14, g63]

</sample-output>

<!-- Tulostuksessa näkyvä komeroiden järjestys voi poiketa esimerkistä. -->

The order of the storage units in the output may be different from this example.

</programming-exercise>
