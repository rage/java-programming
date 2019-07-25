---
path: '/osa-4/2-oliot-listalla'
# title: 'Oliot listalla'
title: 'Objects in a list'
hidden: false
---


<!-- <text-box variant='learningObjectives' name='Oppimistavoitteet'> -->

<text-box variant='learningObjectives' name='Learning objectives'>


<!-- - Osaat lisätä olioita listalle. -->
- You can add objects to a list
<!-- - Osaat käydä listalla olevia olioita läpi. -->
- You can go through object in a list
</text-box>


<!-- Listalle lisättävien muuttujien tyyppi määrätään listan luomisen yhteydessä annettavan tyyppiparametrin avulla. Esimerkiksi `ArrayList<String>` sisältää merkkijonoja, `ArrayList<Integer>` sisältää kokonaislukuja, ja `ArrayList<Double>` sisältää liukulukuja. -->

The type parameter used in creating a list defines the type of the variables that are added to the list. For instance, `ArrayList<String>` includes strings, `ArrayList<Integer>` integers, and `ArrayList<Double>` floating point numbers

<!-- Alla olevassa esimerkissä lisätään ensin merkkijonoja listalle, jonka jälkeen listalla olevat merkkijonot tulostetaan yksitellen. -->

In the example below we first add strings to a list, after which the strings in the list are printed one by one.


<!-- ```java
ArrayList<String> nimet = new ArrayList<>();

// merkkijono voidaan lisätä ensin muuttujaan
String nimi = "Betty Jennings";
// ja sitten lisätä se listalle
nimet.add(nimi);

// merkkijono voidaan myös lisätä suoraan listalle:
nimet.add("Betty Snyder");
nimet.add("Frances Spence");
nimet.add("Kay McNulty");
nimet.add("Marlyn Wescoff");
nimet.add("Ruth Lichterman");

// listan alkioiden läpikäynti onnistuu useamman erilaisen
// toistolauseen avulla

// 1. while-toistolause
int indeksi = 0;
while (indeksi < nimet.size()) {
    System.out.println(nimet.get(indeksi));
    indeksi = indeksi + 1;
}

// 2. for-toistolause indeksillä
for (int i = 0; i < nimet.size(); i++) {
    System.out.println(nimet.get(i));
}

System.out.println();
// 3. for-each toistolause (ei indeksiä)
for (String nimi: nimet) {
    System.out.println(nimi);
}
``` -->

```java
ArrayList<String> names = new ArrayList<>();

// string can first be stored in a variable
String nimi = "Betty Jennings";
// then add it to the list
names.add(nimi);

// strings can also be directly added to the list:
names.add("Betty Snyder");
names.add("Frances Spence");
names.add("Kay McNulty");
names.add("Marlyn Wescoff");
names.add("Ruth Lichterman");

// several different repeat statements can be
// used to go through the list elements

// 1. while loop
int index = 0;
while (index < names.size()) {
    System.out.println(names.get(index));
    index = index + 1;
}

// 2. for loop with index
for (int i = 0; i < names.size(); i++) {
    System.out.println(names.get(i));
}

System.out.println();
// 3. for each loop (no index)
for (String name: names) {
    System.out.println(name);
}
```

<sample-output>

Betty Jennings
Betty Snyder
Frances Spence
Kay McNulty
Marlyn Wescoff
Ruth Lichterman

Betty Jennings
Betty Snyder
Frances Spence
Kay McNulty
Marlyn Wescoff
Ruth Lichterman

Betty Jennings
Betty Snyder
Frances Spence
Kay McNulty
Marlyn Wescoff
Ruth Lichterman

</sample-output>


<!-- ## Olioiden lisääminen listalle -->

## Adding object to a list

<!-- Merkkijonot ovat olioita, joten ei liene yllätys että listalla voi olla muunkinlaisia olioita. Tarkastellaan seuraavaksi listan ja olioiden yhteistoimintaa tarkemmin. -->

Strings are objects, so it should come as no surprise that other kinds of objects can also be found in lists. Next, let's examine the cooperation of lists and objects in more detail.

<!-- Oletetaan, että käytössämme on alla oleva henkilöä kuvaava luokka. -->

Let's assume we have access to the class defined below, describing a person.

<!-- ```java
public class Henkilo {

    private String nimi;
    private int ika;
    private int paino;
    private int pituus;

    public Henkilo(String nimi) {
        this.nimi = nimi;
        this.ika = 0;
        this.paino = 0;
        this.pituus = 0;
    }

    public String getNimi() {
        return this.nimi;
    }

    public int getIka() {
        return this.ika;
    }

    public void vanhene() {
        this.ika = this.ika + 1;
    }

    public void setPituus(int uusiPituus) {
        this.pituus = uusiPituus;
    }

    public void setPaino(int uusiPaino) {
        this.paino = uusiPaino;
    }

    public double painoindeksi() {
        double pituusPerSata = this.pituus / 100.0;
        return this.paino / (pituusPerSata * pituusPerSata);
    }

    @Override
    public String toString() {
        return this.nimi + ", ikä " + this.ika + " vuotta";
    }
}
``` -->
```java
public class Person {

    private String name;
    private int age;
    private int weight;
    private int height;

    public Person(String name) {
        this.name = name;
        this.age = 0;
        this.weight = 0;
        this.height = 0;
    }

    public String getName() {
        return this.name;
    }

    public int getAge() {
        return this.age;
    }

    public void growOlder() {
        this.age = this.age + 1;
    }

    public void setHeight(int newHeight) {
        this.height = newHeight;
    }

    public void setWeight(int newWeight) {
        this.weight = newWeight;
    }

    public double bodyMassIndex() {
        double heightDivByHundred = this.height / 100.0;
        return this.weight / (heightDivByHundred * heightDivByHundred);
    }

    @Override
    public String toString() {
        return this.name + ", age " + this.age + " years";
    }
}
```

<!-- Olioiden käsittely listalla ei oikeastaan poikkea aiemmin näkemästämme listan käytöstä millään tavalla. Oleellista on vain listalle lisättävien olioiden tyypin määrittely listan luomisen yhteydessä. -->

Handling objects in a list is not really different in any way from the previous experience we have with lists. The essential difference is only to define the type for the stored elements when you create the list.

<!-- Alla olevassa esimerkissä luodaan ensin Henkilo-tyyppisille olioille tarkoitettu lista, jonka jälkeen listalle lisätään henkilöolioita. Lopulta henkilöoliot tulostetaan yksitellen. -->

In the example below we first create a list meant for storing Person type object, after which we add persons to it. Finally the person objects are printed one by one.

<!-- ```java
ArrayList<Henkilo> henkilot = new ArrayList<>();

// henkilöolio voidaan ensin luoda
Henkilo juhana = new Henkilo("Juhana");
// ja sitten lisätä se listalle
henkilot.add(juhana);

// henkilöolio voidaan myös lisätä listalle "samassa lauseessa"
henkilot.add(new Henkilo("Matti"));
henkilot.add(new Henkilo("Martin"));

for (Henkilo henkilo: henkilot) {
    System.out.println(henkilo);
}
``` -->
```java
ArrayList<Person> persons = new ArrayList<>();

// a person object can be created first
Person john = new Henkilo("John");
// and then added to the list
persons.add(john);

// person objects can also be created "in the same sentence" that they are added to the list
persons.add(new Person("Matthew"));
persons.add(new Person("Martin"));

for (Person person: persons) {
    System.out.println(person);
}
```

<sample-output>

Juhana, ikä 0 vuotta
Matti, ikä 0 vuotta
Martin, ikä 0 vuotta

</sample-output>


<sample-output>

John, age 0 years
Matthew, age 0 years
Martin, age 0 years

</sample-output>



<!-- ## Käyttäjän syöttämät oliot listalle -->

## Adding user-inputted objects to a list

<!-- Aiemmin käyttämämme rakenne syötteiden lukemiseen on yhä varsin käytännöllinen. -->

The structure we used earlier for reading inputs is still very useful.

<!-- ```java
Scanner lukija = new Scanner(System.in);
ArrayList<Henkilo> henkilot = new ArrayList<>();

// Luetaan henkilöiden nimet käyttäjältä
while (true) {
    System.out.print("Kirjoita nimi, tyhjä lopettaa: ");
    String nimi = lukija.nextLine();
    if (nimi.isEmpty()) {
        break;
    }

    // Lisätään listalle uusi henkilo-olio, jonka
    // nimi on käyttäjän syöttämä
    henkilot.add(new Henkilo(nimi));
}

// Tulostetaan syötettyjen henkilöiden määrä sekä henkilöt
System.out.println();
System.out.println("Henkilöitä yhteensä: " + henkilot.size());
System.out.println("Henkilöt: ");

for (Henkilo henkilo: henkilot) {
    System.out.println(henkilo);
}
``` -->

```java
Scanner scanner = new Scanner(System.in);
ArrayList<Person> persons = new ArrayList<>();

// Read the names of persons from the user
while (true) {
    System.out.print("Enter a name, empty will stop: ");
    String name = scanner.nextLine();
    if (name.isEmpty()) {
        break;
    }


    // Add to the list a new person
    // whose name is the previous user input
    persons.add(new Person(name));
}

// Print the number of the entered persons, and their individual information
System.out.println();
System.out.println("Persons in total: " + persons.size());
System.out.println("Persons: ");

for (Person person: persons) {
    System.out.println(person);
}
```

<!-- <sample-output>

Kirjoita nimi, tyhjä lopettaa: **Alan Kay**
Kirjoita nimi, tyhjä lopettaa: **Ivan Sutherland**
Kirjoita nimi, tyhjä lopettaa: **Kristen Nygaard**

Henkilöitä yhteensä: 3
Henkilöt:
Alan Kay, ikä 0 vuotta
Ivan Sutherland, ikä 0 vuotta
Kristen Nygaard, ikä 0 vuotta

</sample-output> -->

<sample-output>

Enter a name, empty will stop: **Alan Kay**
Enter a name, empty will stop: **Ivan Sutherland**
Enter a name, empty will stop: **Kristen Nygaard**

Persons in total: 3
Perons:
Alan Kay, age 0 years
Ivan Sutherland, age 0 years
Kristen Nygaard, age 0 years

</sample-output>

<programming-exercise name='Esineet' tmcname='osa04-Osa04_17.Esineet'>


Toteuta tässä kuvattu ohjelma luokkaan `Esineet`. **Huom!** Älä muuta luokkaa `Esine`.

Kirjoita ohjelma, joka lukee käyttäjältä esineiden nimiä. Mikäli nimi on tyhjä, lopeta lukeminen. Mikäli nimi ei ole tyhjä, lue nimen perusteella uusi esine, jonka lisäät `esineet`-listalle.

Tulosta tämän jälkeen esineet `Esine`-luokan `toString`-metodia hyödyntäen. Luokan `Esine` toteutus pitää syöttämäsi nimen lisäksi kirjaa esineen luomishetkestä.

Ohjelman esimerkkitulostus:

<sample-output>

Nimi: **Suo**
Nimi: **Kuokka**
Nimi:

Suo (luotu: 06.07.2018 12:34:56)
Kuokka (luotu: 06.07.2018 12:34:57)

</sample-output

</programming-exercise>

## Monta konstruktorin parametria

Mikäli konstruktori vaatii useampia parametreja, voi käyttäjältä kysyä enemmän tietoa. Oletetaan, että luokan `Henkilo` konstruktori on seuraavanlainen.

```java
public class Henkilo {

    private String nimi;
    private int ika;
    private int paino;
    private int pituus;

    public Henkilo(String nimi, int ika) {
        this.nimi = nimi;
        this.ika = ika;
        this.paino = 0;
        this.pituus = 0;
    }

    // metodit
}
```

Olion luominen vaatii siis kaksiparametrisen konstruktorin kutsumista.

Mikäli haluamme lukea tällaisia olioita käyttäjältä, tulee lukemisessa kysyä jokainen parametri erikseen. Alla olevassa esimerkissä käyttäjältä luetaan erikseen nimi ja ikä. Mikäli nimi on tyhjä, lukeminen lopetetaan.

Henkilöt tulostetaan lukemisen jälkeen.


```java
Scanner lukija = new Scanner(System.in);
ArrayList<Henkilo> henkilot = new ArrayList<>();

// Luetaan henkilöiden tiedot käyttäjältä
while (true) {
    System.out.print("Kirjoita nimi, tyhjä lopettaa: ");
    String nimi = lukija.nextLine();
    if (nimi.isEmpty()) {
        break;
    }

    System.out.print("Kirjoita henkilön " + nimi + " ikä: ");

    int ika = Integer.valueOf(lukija.nextLine());

    // Lisätään listalle uusi henkilo-olio, jonka
    // nimen ja iän käyttäjä syötti
    henkilot.add(new Henkilo(nimi, ika));
}

// Tulostetaan syötettyjen henkilöiden määrä sekä henkilöt
System.out.println();
System.out.println("Henkilöitä yhteensä: " + henkilot.size());
System.out.println("Henkilöt: ");

for (Henkilo henkilo: henkilot) {
    System.out.println(henkilo);
}
```

<sample-output>

Kirjoita nimi, tyhjä lopettaa: **Grace Hopper**
Kirjoita henkilön Grace Hopper ikä: **85**
Kirjoita nimi, tyhjä lopettaa:

Henkilöitä yhteensä: 1
Henkilöt:
Grace Hopper, ikä 85 vuotta

</sample-output>

<programming-exercise name='Henkilotiedot' tmcname='osa04-Osa04_18.Henkilotiedot'>

Toteuta tässä kuvattu ohjelma luokkaan `Henkilotiedot`. **Huom!** Älä muuta luokkaa `Henkilotieto`.

Kirjoita ohjelma, joka lukee käyttäjältä henkilötietoja. Käyttäjä syöttää etunimen, sukunimen, ja henkilötunnuksen. Mikäli etunimi on tyhjä, lopeta lukeminen. Mikäli etunimi ei ole tyhjä, lue loput tiedot ja luo käyttäjän syöttämistä tiedoista olio, jonka lisäät `henkilotiedot`-listalle.

Kun käyttäjä on lopettanut tietojen syöttämisen (käyttäjä syöttää tyhjän etunimen), poistu toistolauseesta.

Tulosta tämän jälkeen henkilötiedot siten, että jokaisesta syötetystä oliosta tulostetaan etunimi ja sukunimi välilyönnillä erotettuna (henkilötunnusta ei tulosteta!). Alla esimerkki ohjelman suorituksesta.

<sample-output>

Etunimi: **Jean**
Sukunimi: **Bartik**
Henkilötunnus: **271224**
Etunimi: **Betty**
Sukunimi: **Holberton**
Henkilötunnus: **070317**
Etunimi:

Jean Bartik
Betty Holberton

</sample-output>

</programming-exercise>

<text-box type="info" name="Määrämuotoisen tiedon lukeminen">

Yllä olevassa esimerkissä ja tehtävässä tiedot syötettiin rivi riviltä. Ohjelmassa voisi toki pyytää tietoja määrämuotoisessa muodossa, esimerkiksi pilkulla eroteltuna.

Ohjelma, jossa nimi ja ikä tulisi syöttää pilkulla eroteltuna voisi toimia seuraavalla tavalla.

```java
Scanner lukija = new Scanner(System.in);
ArrayList<Henkilo> henkilot = new ArrayList<>();

// Luetaan henkilöiden tiedot käyttäjältä
System.out.println("Kirjoita tiedot pilkulla eroteltuna, esim: Leevi,2")
while (true) {
    System.out.print("Kirjoita tiedot, tyhjä lopettaa: ");
    String tiedot = lukija.nextLine();
    if (tiedot.isEmpty()) {
        break;
    }

    String[] palat = tiedot.split(",");
    String nimi = palat[0];
    int ika = Integer.valueOf(palat[1]);
    henkilot.add(new Henkilo(nimi, ika));
}

// Tulostetaan syötettyjen henkilöiden määrä sekä henkilöt
System.out.println();
System.out.println("Henkilöitä yhteensä: " + henkilot.size());
System.out.println("Henkilöt: ");

for (Henkilo henkilo: henkilot) {
    System.out.println(henkilo);
}
```

<sample-output>

Kirjoita tiedot pilkulla eroteltuna, esim: Leevi,2

Kirjoita tiedot, tyhjä lopettaa: **Leevi,2**
Kirjoita tiedot, tyhjä lopettaa: **Anton,2**
Kirjoita tiedot, tyhjä lopettaa: **Sylvi,0**
Kirjoita tiedot, tyhjä lopettaa:

Henkilöitä yhteensä: 3
Henkilöt:
Leevi, ikä 2 vuotta
Anton, ikä 2 vuotta
Sylvi, ikä 0 vuotta

</sample-output>

</text-box>


## Rajattu tulostus listalta

Listalla olevia olioita voidaan myös tarkastella listan läpikäynnin yhteydessä. Alla olevassa esimerkissä käyttäjältä kysytään ensin ikäraja, jonka jälkeen tulostetaan ne oliot, joiden ikä on vähintään käyttäjän syöttämä ikäraja.

```java
// Oletetaan, että käytössämme on henkilot-lista,
// joka sisältää henkilöolioita

System.out.print("Mikä ikäraja? ");
int ikaraja = Integer.valueOf(lukija.nextLine());

for (Henkilo henkilo: henkilot) {
    if (henkilo.getIka() >= ikaraja) {
        System.out.println(henkilo);
    }
}
```


<programming-exercise name='Televisio-ohjelmat' tmcname='osa04-Osa04_19.TelevisioOhjelmat'>

Tehtäväpohjassa on valmiina televisio-ohjelmaa kuvaava luokka TelevisioOhjelma. Luokalla on oliomuuttujat nimi ja pituus, konstruktori, ja muutamia metodeja.

Toteuta ohjelma, joka ensin lukee käyttäjältä televisio-ohjelmia. Kun käyttäjä syöttää tyhjän ohjelman nimen, televisio-ohjelmien lukeminen lopetetaan.

Tämän jälkeen käyttäjältä kysytään ohjelman maksimipituutta. Kun käyttäjä on syöttänyt ohjelman maksimipituuden, tulostetaan kaikki ne ohjelmat, joiden pituus on pienempi tai yhtäsuuri kuin haluttu maksimipituus.

<sample-output>

Nimi: **Salatut elämät**
Pituus: **30**
Nimi: **Miehen puolikkaat**
Pituus: **30**
Nimi: **Remppa vai muutto**
Pituus: **60**
Nimi: **House**
Pituus: **60**

Ohjelman maksimipituus? **30**
Salatut elämät, 30 minuuttia
Miehen puolikkaat, 30 minuuttia

</sample-output>

</programming-exercise>


<programming-exercise name='Kirjat (2 osaa)' tmcname='osa04-Osa04_20.Kirjat'>

Toteuta ohjelma, joka ensin lukee kirjojen tietoja käyttäjältä. Jokaisesta kirjasta tulee lukea kirjan nimi, sivujen lukumäärä sekä kirjoitusvuosi. Kirjojen lukeminen lopetetaan kun käyttäjä syöttää tyhjän kirjan nimen.

Tämän jälkeen käyttäjältä kysytään mitä tulostetaan. Jos käyttäjä syöttää merkkijonon "kaikki", tulostetaan kirjojen nimet, sivujen lukumäärät sekä kirjoitusvuodet. Jos taas käyttäjä syöttää merkkijonon "nimi", tulostetaan vain kirjojen nimet.

Ohjelmaa varten kannattanee toteuttaa Kirjaa kuvaava luokka. Tehtävä on kokonaisuudessaan kahden tehtäväpisteen arvoinen.

<sample-output>

Nimi: **Minä en sitten muutu**
Sivuja: **201**
Kirjoitusvuosi: **2010**
Nimi: **Nalle Puh ja elämisen taito**
Sivuja: **100**
Kirjoitusvuosi: **2005**
Nimi: **Beautiful Code**
Sivuja: **593**
Kirjoitusvuosi: **2007**
Nimi: **KonMari**
Sivuja: **222**
Kirjoitusvuosi: **2011**

Mitä tulostetaan? **kaikki**
Minä en sitten muutu, 201 sivua, 2010
Nalle Puh ja elämisen taito, 100 sivua, 2005
Beautiful Code, 593 sivua, 2007
KonMari, 222 sivua, 2011

</sample-output>


<sample-output>

Nimi: **Minä en sitten muutu**
Sivuja: **201**
Kirjoitusvuosi: **2010**
Nimi: **Nalle Puh ja elämisen taito**
Sivuja: **100**
Kirjoitusvuosi: **2005**
Nimi: **Beautiful Code**
Sivuja: **593**
Kirjoitusvuosi: **2007**
Nimi: **KonMari**
Sivuja: **222**
Kirjoitusvuosi: **2011**

Mitä tulostetaan? **nimi**
Minä en sitten muutu
Nalle Puh ja elämisen taito
Beautiful Code
KonMari

</sample-output>

</programming-exercise>
