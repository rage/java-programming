---
#path: '/part-5/1-katsaus-olio-ohjelmointiin'
path: '/part-5/1-learning-object-oriented-programming'
#title: 'Katsaus olio-ohjelmointiin'
title: 'Learning object-oriented programming'
hidden: true
---


<!-- <text-box variant='learningObjectives' name='Oppimistavoitteet'> -->
<text-box variant='learningObjectives' name='Learning Objectives'>

<!-- - Kertaat käsitteitä luokka ja olio.
- Huomaat, että ilman olioita tehdyn ohjelman voi tehdä myös olioiden avulla.
- Huomaat, että olioden käyttö voi selkeyttää ohjelman ymmärrettävyyttä. -->
- To revise the concepts of class and object.
- To realize that a program written without objects can also be written using objects.
- To realize that using objects can make a program more understandable.

</text-box>

<!-- TODO: mainitaan että kyse sekä tiedosta että toiminnasta -->


<!-- Mistä olio-ohjelmoinnissa olikaan kyse? Tehdään pieni katsaus taaksepäin.

Tarkastellaan digitaalisen kellon toimintaa. Kellossa on kolme viisaria: tunnit, minuutit ja sekunnit. Sekuntiviisari kasvaa kerran sekunnissa. Minuuttiviisari kerran kuudessakymmenessä sekunnissa. Tuntiviisari kerran kuudessakymmenessä minuutissa. Kun sekuntiviisarin arvo on 60, sen arvoksi asetetaan nolla ja minuuttiviisarin arvoa kasvatetaan yhdellä. Kun minuuttiviisarin arvo on 60, sen arvoksi asetetaan nolla ja tuntiviisarin arvoa kasvatetaan yhdellä. Kun tuntiviisarin arvo on 24, sen arvoksi asetetaan nolla.

Ajan tulostaminen tapahtuu aina muodossa `tunnit:minuutit:sekunnit`, missä tunnit merkitään kahdella numerolla (esim. 01 tai 12), minuutit kahdella numerolla, ja sekunnit kahdella numerolla.

Alla on kuvattuna kellon toteutus kokonaislukutyyppisillä muuttujilla (tulostamisen voisi eriyttää omaan metodiin, mutta tässä sitä ei ole tehty). -->

What is object-oriented programming all about? We'll rewind a little.

Let's inspect how a clock works. The clock has three hands: hours, minutes and seconds. The second hand increments once every second, the minute hand once every sixty seconds, and the hour hand once in sixty minutes. When the value of the second hand is 60, its value is set to zero and the value of the minute hand is incremented by one. When the minute hand's value is 60, its value is set to zero and the hour hand value is incremented by one. When the hour hand value is 24, it is set to zero.

Time is always printed in the form `hours: minutes: seconds`, where the hours are represented by two digits (eg. 01 or 12), minutes by two digits, and seconds also by two digits.

Below is an implementation of the clock with integer type variables (the printing could be isolated into its own method, but that has not been done here).


<!-- ```java
int tunnit = 0;
int minuutit = 0;
int sekunnit = 0;

while (true) {
    // 1. Ajan tulostaminen
    if (tunnit < 10) {
        System.out.print("0");
    }
    System.out.print(tunnit);

    System.out.print(":");

    if (minuutit < 10) {
        System.out.print("0");
    }
    System.out.print(minuutit);

    System.out.print(":");

    if (sekunnit < 10) {
        System.out.print("0");
    }
    System.out.print(sekunnit);
    System.out.println();

    // 2. Sekuntiviisarin eteneminen
    sekunnit = sekunnit + 1;

    // 3. Muiden viisarien eteneminen mikäli tarve
    if (sekunnit > 59) {
        minuutit = minuutit + 1;
        sekunnit = 0;

        if (minuutit > 59) {
            tunnit = tunnit + 1;
            minuutit = 0;

            if (tunnit > 23) {
                tunnit = 0;
            }
        }
    }
}
``` -->
```java
int hours = 0;
int minutes = 0;
int seconds = 0;

while (true) {
    // 1. Printing the time
    if (hours < 10) {
        System.out.print("0");
    }
    System.out.print(hours);

    System.out.print(":");

    if (minutes < 10) {
        System.out.print("0");
    }
    System.out.print(minutes);

    System.out.print(":");

    if (seconds < 10) {
        System.out.print("0");
    }
    System.out.print(seconds);
    System.out.println();

    // 2. The second hand's progress
    seconds = seconds + 1;

    // 3. The other hand's progress when necessary
    if (seconds > 59) {
        minutes = minutes + 1;
        seconds = 0;

        if (minutes > 59) {
            hours = hours + 1;
            minutes = 0;

            if (hours > 23) {
                hours = 0;
            }
        }
    }
}
```


<!-- Kuten yllä olevaa esimerkkiä luettaessa huomataan, kolmesta `int`-muuttujasta koostuvan kellon toiminnallisuus ei ole lähdekoodin lukijalle kovin selkeä. Lähdekoodista on vaikea "nähdä" mistä on kysymys. Eräs <a href="https://en.wikipedia.org/wiki/Kent_Beck" target="_blank" rel="noopener">kuuluisa ohjelmoija</a> on sanonut *"Any fool can write code that a computer can understand.  Good programmers write code that humans can understand"*. -->
As demonstrated by reading the example above, the functioning of a  clock made up of three `int` variables is not very clear to someone reading through the source code. It's difficult to "see" what's going on. A famous <a href="https://en.wikipedia.org/wiki/Kent_Beck" target="_blank" rel="noopener"> programmer </a>remarked *"Any fool can write code that a computer can understand .Good Programmers write code that humans can understand"*.

<br/>

<!-- Pyritään tilanteeseen, missä ohjelma olisi ymmärrettävämpi.


Koska viisari on oma selkeä käsitteensä, kannattaa ohjelman ymmärrettävyyden parantamiseksi tehdä siitä oma luokka. Luodaan viisaria kuvaava luokka `Viisari`, joka sisältää tiedon arvosta, viisarin ylärajasta (eli kohdasta missä viisarin arvo palaa nollaan), sekä tarjoaa metodit viisarin etenemiseen, viisarin arvon tarkastelemiseen sekä viisarin tulostamiseen arvon tulostamiseen merkkijonomuodossa. -->

The aim is to make the program more comprehensible.


Since a clock hand is a clear concept in and of itself, a good idea with regard to the program's understandability would be to turn it into its own class. Let's create a `ClockHand` class describing a clock hand, which contains information about its value, upper limit (i.e. the point at which the value of the hand returns to zero), and provides methods for advancing the hand, viewing its value and printing the value in string form.


<!--
```java
public class Viisari {
    private int arvo;
    private int ylaraja;

    public Viisari(int ylaraja) {
        this.ylaraja = ylaraja;
        this.arvo = 0;
    }

    public void etene() {
        this.arvo = this.arvo + 1;

        if (this.arvo >= this.ylaraja) {
            this.arvo = 0;
        }
    }

    public int arvo() {
        return this.arvo;
    }

    public String toString() {
        if (this.arvo < 10) {
            return "0" + this.arvo;
        }

        return "" + this.arvo;
    }
}
``` -->


```java
public class ClockHand {
    private int value;
    private int limit;

    public ClockHand(int limit) {
        this.limit = limit;
        this.value = 0;
    }

    public void advance() {
        this.value = this.value + 1;

        if (this.value >= this.limit) {
            this.value = 0;
        }
    }

    public int value() {
        return this.value;
    }

    public String toString() {
        if (this.value < 10) {
            return "0" + this.value;
        }

        return "" + this.value;
    }
}
```

<!-- Kun olemme luoneet luokan Viisari, muuttuu kellomme selkeämmäksi. Nyt kellon -- eli viisarien -- tulostaminen on suoraviivaista, jonka lisäksi viisarin eteneminen on piilotettu luokkaan Viisari. Koska viisarin palaaminen alkuun tapahtuu automaattisesti Viisari-luokkaan määritellyn yläraja-muuttujan avulla, on viisarien yhteistoiminta hieman erilaista kuin kokonaisluvuilla toteutetussa ohjelmassa. Kokonaisluvuilla toteutetussa ohjelmassa tarkasteltiin ylittääkö viisaria kuvaavan kokonaisluvun arvo ylärajan, jonka jälkeen arvo asetettiin nollaksi ja seuraavaa viisaria kuvaavan kokonaisluvun arvoa kasvatettiin. Viisari-olioita käytettäessä minuuttiviisarin eteneminen tapahtuu kun sekuntiviisarin arvo on nolla, ja tuntiviisarin eteneminen tapahtuu kun minuuttiviisarin arvo on nolla. -->
Once we've created the ClockHand class, our clock becomes clearer. Now, printing the clock, i.e. the clock hand,  is straightforward, and the hand's progression is hidden away in the ClockHand class. Since the hand's return to the beginning happens automatically with the help of the upper-limit variable defined by the ClockHand class, the way the hands work together is slightly different than in the program implementation that uses integers. The program that used integers looked at whether the value of the integer that represented the clock hand exceeded the upper limit, after which its value was set to zero and the value of the integer representing the next clock hand was incremented. Using clock-hand objects, the minute hand advances when the second hand's value is zero, and the hour hand advances when the minute hand's value is zero.

<!-- ```java
Viisari tunnit = new Viisari(24);
Viisari minuutit = new Viisari(60);
Viisari sekunnit = new Viisari(60);

while (true) {
    // 1. Ajan tulostaminen
    System.out.println(tunnit + ":" + minuutit + ":" + sekunnit);

    // 2. Sekuntiviisarin eteneminen
    sekunnit.etene();

    // 3. Muiden viisarien eteneminen mikäli tarve
    if (sekunnit.arvo() == 0) {
        minuutit.etene();

        if (minuutit.arvo() == 0) {
            tunnit.etene();
        }
    }
}
``` -->
```java
ClockHand hours = new ClockHand(24);
ClockHand minutes = new ClockHand(60);
ClockHand seconds = new ClockHand(60);

while (true) {
    // 1. Printing the time
    System.out.println(hours + ":" + minutes + ":" + seconds);

    // 2. Advancing the second hand
    seconds.advance();

    // 3. Advancing the other hands when required
    if (seconds.value() == 0) {
        minutes.advance();

        if (minutes.value() == 0) {
            hours.advance();
        }
    }
}
```


<!-- **Olio-ohjelmoinnissa on kyse pitkälti käsitteiden eristämisestä omiksi kokonaisuuksikseen tai toisin ajatellen abstraktioiden muodostamisesta**. Edellisestä esimerkistä huolimatta, joku voisi ajatella, että on turhaa luoda oliota jonka sisällä on ainoastaan luku, sillä saman voisi tehdä suoraan `int`-muuttujilla. Asia ei kuitenkaan ole aina näin.


Käsitteen erottaminen omaksi luokaksi on monellakin tapaa hyvä idea. Ensinnäkin tiettyjä yksityiskohtia (esim. viisarin pyörähtäminen) saadaan piilotettua luokan sisään (eli **abstrahoitua**). Sen sijaan että kirjoitetaan if-lause ja sijoitusoperaatio, riittää, että viisarin käyttäjä kutsuu selkeästi nimettyä metodia `etene()`. Aikaansaatu viisari sopii kellon lisäksi ehkä muidenkin ohjelmien rakennuspalikaksi -- luokan nimi voisi olla `YlhaaltaRajoitettuLaskuri` --, eli selkeästä käsitteestä tehty luokka voi olla monikäyttöinen. Suuri etu saavutetaan myös sillä, että koska viisarin toteutuksen yksityiskohdat eivät näy viisarin käyttäjille, voidaan yksityiskohtia tarvittaessa muuttaa.


Totesimme että kello sisältää kolme viisaria, eli koostuu kolmesta käsitteestä. Oikeastaan kello on itsekin käsite, eli voimme luoda sillekin oman luokkansa. Tehdään seuraavaksi luokka `Kello`, joka piilottaa viisarit sisäänsä. -->


**Object-oriented programming is mainly about isolating concepts into their own entities or, in other words, creating abstractions**. Despite the previous example, one might see it pointless to create an object containing only a number, since the same could be done directly with `int` variables. However, that is not always the case.

Separating a concept into its own class is a good idea in many ways. Firstly, certain details (such as rotating the hand) can be hidden inside the class (i.e. **abstracted**). Instead of typing an if-statement and an assignment operation, it's enough for the user of the clock hand to call a clearly-named method `advance()`. The produced clock hand may be used as a building block for other programs as well - the class could be named `CounterLimitedFromTop` for instance. That is, a class created from a distinct concept can serve multiple purposes. Another massive advantage is that since the details of the implementation of the clock hand are not visible to its user, they can be changed if desired.


We realized that the clock contains three hands, i.e. it consists of three concepts. In fact, the clock is a concept in and of itself. That is, we can create a class of it as well. Next, we create a class called "Clock" that hides the hands inside of it.



<!-- ```java
public class Kello {
    private Viisari tunnit;
    private Viisari minuutit;
    private Viisari sekunnit;

    public Kello() {
        this.tunnit = new Viisari(24);
        this.minuutit = new Viisari(60);
        this.sekunnit = new Viisari(60);
    }

    public void etene() {
        this.sekunnit.etene();

        if (this.sekunnit.arvo() == 0) {
            this.minuutit.etene();

            if (this.minuutit.arvo() == 0) {
                this.tunnit.etene();
            }
        }
    }

    public String toString() {
        return tunnit + ":" + minuutit + ":" + sekunnit;
    }
}
``` -->
```java
public class Clock {
    private ClockHand hours;
    private ClockHand minutes;
    private ClockHand seconds;

    public Clock() {
        this.hours = new ClockHand(24);
        this.minutes = new ClockHand(60);
        this.seconds = new ClockHand(60);
    }

    public void advance() {
        this.seconds.advance();

        if (this.seconds.value() == 0) {
            this.minutes.advance();

            if (this.minutes.value() == 0) {
                this.hours.advance();
            }
        }
    }

    public String toString() {
        return hours + ":" + minutes + ":" + seconds;
    }
}
```


<!-- Ohjelman toiminta muuttu yhä selkeämmäksi. Kun vertaat alla olevaa ohjelmaa alkuperäiseen kokonaisluvuista koostuneeseen ohjelmaan, huomaat että ohjelman luettavuus on aivan eri luokkaa. -->

The way the program functions becomes increasingly clear. When you compare the program below to the original one composed of integers, you'll find that the program's readability is on a completely different level.


<!-- ```java
Kello kello = new Kello();

while (true) {
    System.out.println(kello);
    kello.etene();
}
``` -->
```java
Clock clock = new Clock();

while (true) {
    System.out.println(clock);
    clock.advance();
}
```


<!-- Edellä toteuttamamme kello on olio, jonka toiminta perustuu "yksinkertaisimpiin" olioihin eli viisareihin. Tämä on juuri **olio-ohjelmoinnin suuri idea: ohjelma rakennetaan pienistä selkeistä yhteistoiminnassa olevista olioista**. -->

The clock we implemented above is an object whose functionality is based on "simpler" objects, i.e., the hands. This is exactly the **great idea behind ​​object-oriented programming: a program is built from small and distinct objects that work together**


<!-- <programming-exercise name='Sekuntikello' tmcname='osa05-Osa05_01.Sekuntikello'> -->
<programming-exercise name='One minute' tmcname='part05-Part05_01.OneMinute'>


<!-- Tehtäväpohjassa tulee edellä kuvattu luokka `Viisari`. Toteuta materiaalin `Kello`-luokkaa mukaillen luokka `Sekuntikello`.


Sekuntikellossa on kaksi viisaria. Yksi sadasosasekunneille ja yksi sekunneille. Sekuntikellon edetessä sadasosasekuntien määrä kasvaa yhdellä. Kun sadasosasekunteja vastaava viisari saavuttaa arvon sata, viisarin arvo nollaantuu ja sekuntien määrä kasvaa yhdellä. Vastaavasti, kun sekunteja vastaava viisari saavuttaa arvon kuusikymmentä, viisarin arvo nollaantuu. -->

The exercise template comes with the "ClockHand" class described above. Implement a `Timer` class based on the material's `Clock` class.

The timer has two hands, one for hundredths of a second and one for seconds. As it progresses, the number of hundredths of a second grows by one. When the hand corresponding to hundredths of a second reaches a value of 100, its value is set to zero, and the number of seconds grows by one. In the same way, when the value of the hand corresponding to seconds reaches the value of sixty, its value is set to zero.


<!-- - `public Sekuntikello()` luo uuden sekuntikellon.
- `public String toString()` palauttaa sekuntikellon merkkijonoesityksen. Merkkijonoesityksen tulee olla muotoa "sekunnit:sadasosasekunnit", missä sekä sekunnit että sadasosasekunnit esitetään kahdella numerolla. Esimerkiksi merkkijono "19:83" kuvastaisi aikaa 19 sekuntia, 83 sadasosasekuntia.
- `public void etene()` siirtää kelloa yhden sadasosasekunnin eteenpäin.


Kun olet saanut tehtävän tehtyä, palauta se palvelimelle.


Voit halutessasi kokeilla kellon toimintaa pääohjelmassa. Alla olevalla esimerkkikoodilla saat aikaan ohjelman, missä kello tulostetaan ja kello etenee kerran sadasosasekunnissa. -->

- `public Timer()` creates a new timer.
- `public String toString()` returns a string representation of the timer. The string representation should be in the form "seconds: hundredths of a second", where both the seconds and the hundredths of a second are represented by two numbers. For example, "19:83" would represent the time 19 seconds, 83 hundredths of a second.
- `public void advance()` moves the timer forward by a hundredth of a second.


Once you've completed the task, return it to the server.


You can test out the timer's functionality in the main program whenever you like. The example code below provides you with a program where the timer is printed and it advances once every hundredth of a second.


<!-- ```java
Sekuntikello sekuntikello = new Sekuntikello();

while (true) {
    System.out.println(sekuntikello);
    sekuntikello.etene();

    try {
        Thread.sleep(10);
    } catch (Exception e) {

    }
}
``` -->
```java
Stopwatch timer = new Timer();

while (true) {
    System.out.println(timer);
    timer.advance();

    try {
        Thread.sleep(10);
    } catch (Exception e) {

    }
}
```

<!-- Huom! Yllä kuvatun ohjelman suoritus ei lopu itsestään ikinä. Saat sammutettua ohjelman tulostusikkunan vasemmassa laidassa olevaa punaista neliötä painamalla. -->

NB! The program above will never stop running by itself. Press the red square to the left of the program's print window to turn it off.


</programming-exercise>


<!-- Kerrataan seuraavaksi aihealueen termistöä. -->
Next, let's review terminology from the topic.


<!-- ## Olio


**Olio** on itsenäinen kokonaisuus, johon liittyy tietoa (oliomuuttujat) sekä käyttäytymistä (metodit). Oliot voivat olla hyvin erilaisia rakenteeltaan ja toiminnaltaan: jotkut voivat kuvata ongelma-alueen käsitteitä, ja jotkut voivat koordinoida olioiden välistä toimintaa. Olioiden kommunikointi tapahtuu metodikutsujen avulla -- metodikutsuilla sekä kysytään tietoa olioilta että annetaan olioille käskyjä.


Yleisesti ottaen jokaisella oliolla on selkeästi määritellyt rajat ja toiminnallisuudet, jonka lisäksi jokainen olio tietää vain niistä muista olioista, joita se tarvitsee tehtävänsä tekemiseen. Toisin sanoen, olio piilottaa oman sisäisen toimintansa ja tarjoaa pääsyn toiminnallisuuksiin selkeästi määriteltyjen metodien kautta. Tämän lisäksi olio on riippumaton niistä olioista, joita se ei tehtäväänsä tarvitse.


Edellisessä osassa käsiteltiin henkilöitä kuvaavia olioita, joiden rakenne määriteltiin luokkaan `Henkilo`. Kertauksen vuoksi on hyvä muistella luokan tehtävää: **luokka** sisältää olioiden tekemiseen tarvittavat rakennuspiirrustukset sekä määrittelee olioiden muuttujat ja metodit. Olio luodaan luokassa olevan konstruktorin perusteella.


Henkilö-olioihimme liittyi nimi, ikä, paino ja pituus sekä muutamia metodeja. Jos mietimme henkilö-oliomme rakennetta tarkemmin, keksisimme varmaankin lisää henkilöihin liittyviä muuttujia kuten henkilöturvatunnus, puhelinnumero, osoite ja silmien väri.


Todellisuudessa henkilöihin voi liittyä hyvin monia erilaisia asioita ja tietoja, mutta henkilöitä käsittelevää sovellusta rakennettaessa henkilöön liittyvät **toiminnallisuudet ja ominaisuudet kerätään sovelluksen käyttökohteen perusteella**. Esimerkiksi elämänhallintaan tarkoitettu sovellus voisi pitää kirjaa edellä mainituista iästä, painosta ja pituudesta, sekä tarjota mahdollisuuden painoindeksin ja maksimisykkeen laskemiseen. Toisaalta yhteydenpitoon keskittyvään sovellukseen tallennettaisiin henkilöiden sähköpostiosoitteet ja puhelinnumerot, mutta se ei tarvitsisi tietoa esimerkiksi painosta tai pituudesta.


**Olion tila** on sen oliomuuttujien arvo kullakin ajanhetkellä.


Java-ohjelmointikielellä Henkilö-olion, joka pitää kirjaa nimestä, iästä, painosta ja pituudesta, sekä tarjoaa mahdollisuuden painoindeksin ja maksimisykkeen laskemiseen näyttäisi esimerkiksi seuraavalta. Alla pituus ja paino ilmaistaan doubleina -- pituuden yksikkö on metri. -->

## Object

An **Object** refers to an independent entity that has data (instance variables) and behavior (methods) attached to it. Objects can differ a lot in structure and function: some may describe concepts of a problem domain, and others coordinate the interaction between various objects. Objects interact with one another through method calls - method calls are used to both request information from objects and give instructions to them.
In general, each object has clearly defined boundaries and behaviors, and each object knows only about the objects it needs to perform its task. In other words, the object hides its internal operations and provides access to behavior through clearly defined methods. Also, the object is independent of any objects that it doesn't need to accomplish its task.

In the previous section, we dealt with objects depicting people whose structure was defined in a "Person" class. For review, it's a good idea to remember the purpose of a class: a **class** contains the blueprint needed to create objects, and also defines the objects' variables and methods. An object is instantiated based on the constructor in the class.

Our person objects had a name, age, weight and height, and a few methods. If we thought about the structure of the person object more, we could probably come up with more person-related variables, such as a personal ID number, telephone number, address, and eye color.

In reality, we can relate all kinds of different information and things to a person. However, when building an application that deals with people,  the **functionality and features related to a person are gathered based on the application's use case**. For example, a life-management application could keep track of the previously-mentioned age, weight, and height, and provide the ability to calculate body mass index and maximum heart rate. On the other hand, an application focused on communication would store people's email addresses and phone numbers, but would not need information such as weight or height.


**The state of an object** is the value of its internal variables at any given point in time.

In the Java programming language, a Person object that keeps track of name, age, weight, and height, and provides the ability to calculate body mass index and maximum heart rate would look like the following. Below, the height and weight are expressed as doubles - the unit of length is one meter.

<!-- ```java
public class Henkilo {
    private String nimi;
    private int ika;
    private double paino;
    private double pituus;

    public Henkilo(String nimi, int ika, double paino, double pituus) {
        this.nimi = nimi;
        this.ika = ika;
        this.paino = paino;
        this.pituus = pituus;
    }

    public double painoindeksi() {
        return this.paino / (this.pituus * this.pituus);
    }

    public double maksimisyke() {
        return 206.3 - (0.711 * this.ika);
    }

    public String toString() {
        return this.nimi + ", BMI: " + this.painoindeksi()
            + ", maksimisyke: " + this.maksimisyke();
    }
}
``` -->
```java
public class Person {
    private String name;
    private int age;
    private double weight;
    private double height;

    public Person(String name, int age, double weight, double height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    public double bodyMassIndex() {
        return this.weight / (this.height * this.height);
    }

    public double maximumHeartRate() {
        return 206.3 - (0.711 * this.age);
    }

    public String toString() {
        return this.name + ", BMI: " + this.bodyMassIndex()
            + ", maximum heart rate: " + this.maximumHeartRate();
    }
}
```


<!-- Annetun henkilön maksimisykkeen ja painoindeksin selvittäminen on suoraviivaista edellä kuvatun Henkilo-luokan avulla. -->
Determining the maximum heart rate and body mass index of a given person is straightforward using the Person class described above.

<!-- ```java
Scanner lukija = new Scanner(System.in);
System.out.println("Mikä on nimesi?");
String nimi = lukija.nextLine();
System.out.println("Mikä on ikäsi?");
int ika = Integer.valueOf(lukija.nextLine());
System.out.println("Mikä on painosi?");
double paino = Double.valueOf(lukija.nextLine());
System.out.println("Mikä on pituutesi?");
double pituus = Double.valueOf(lukija.nextLine());

Henkilo henkilo = new Henkilo(nimi, ika, paino, pituus);
System.out.println(henkilo);
``` -->
```java
Scanner reader = new Scanner(System.in);
System.out.println("What's your name?");
String name = reader.nextLine();
System.out.println("What's your age?");
int age = Integer.valueOf(reader.nextLine());
System.out.println("What's your weight?");
double weight = Double.valueOf(reader.nextLine());
System.out.println("What's your height?");
double height = Double.valueOf(reader.nextLine());

Person person = new Person(name, age, weight, height);
System.out.println(person);
```

<sample-output>

<!-- Mikä on nimesi?
**Napoleone Buonaparte**
Mikä on ikäsi?
**51**
Mikä on painosi?
**80**
Mikä on pituutesi?
**1.70**
Napoleone Buonaparte, BMI: 27.68166089965398, maksimisyke: 170.03900000000002 -->
What's your name?
**Napoleone Buonaparte**
What's your age
**51**
What's your weight?
**80**
What's your height?
**1.70**
Napoleone Buonaparte, BMI: 27.68166089965398, maximum heart rate: 170.03900000000002

</sample-output>


<!-- ## Luokka


Luokka määrittelee minkälaisia olioita siitä voidaan luoda. Se sisältää olion tietoa kuvaavat oliomuuttujat, olion luomiseen käytettävän konstruktorin tai konstruktorit, sekä olion käyttäytymisen määrittelevät metodit. Alla on kuvattuna luokka Suorakulmio, joka määrittelee eräänlaisen suorakulmion toiminnallisuuden- -->

## Class


A class defines the types of objects that can be created from it. It contains instance variables describing the object's data, a constructor or constructors used to create it, and methods that define its behavior. A rectangle class is detailed below which defines the functionality of a rectangle-

<!--
```java
// luokka
public class Suorakulmio {

    // oliomuuttujat
    private int leveys;
    private int korkeus;

    // konstruktori
    public Suorakulmio(int leveys, int korkeus) {
        this.leveys = leveys;
        this.korkeus = korkeus;
    }

    // metodit
    public void levenna() {
        this.leveys = this.leveys + 1;
    }

    public void kavenna() {
        if (this.leveys > 0) {
            this.leveys = this.leveys - 1;
        }
    }

    public int pintaAla() {
        return this.leveys * this.korkeus;
    }

    public String toString() {
        return "(" + this.leveys + ", " + this.korkeus + ")";
    }
}
``` -->

```java
// class
public class Rectangle {

    // instance variables
    private int width;
    private int height;

    // constructor
    public Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }

    // methods
    public void widen() {
        this.width = this.width + 1;
    }

    public void narrow() {
        if (this.width > 0) {
            this.width = this.width - 1;
        }
    }

    public int surfaceArea() {
        return this.width * this.height;
    }

    public String toString() {
        return "(" + this.width + ", " + this.height + ")";
    }
}
```


<!-- Osa edellä määritellyistä metodeista ei palauta arvoa (metodit, joiden määrittelyssä käytetään avainsanaa `void`), ja osa metodeista palauttaa arvon (metodit, joiden määrittelyssä kerrotaan palautettavan muuttujan tyyppi). Yllä olevassa luokassa on määriteltynä myös metodi `toString`, joka palauttaa olion tulostamisessa käytettävän merkkijonon.


Luokasta luodaan olioita konstruktorin avulla `new`-komennolla. Alla luodaan kaksi suorakulmiota ja tulostaan niihin liittyvää tietoa. -->

Some of the methods defined above do not return a value (methods that have the keyword `void` in their definition), while others do (methods that specify the type of variable to be returned). The class above also defines the `toString` method, which returns the string used to print the object.


Objects are created from the class through constructors by using the `new` command. Below, you'll create two rectangles and print information related to them.


<!-- ```java
Suorakulmio eka = new Suorakulmio(40, 80);
Suorakulmio nelio = new Suorakulmio(10, 10);
System.out.println(eka);
System.out.println(nelio);

eka.kavenna();
System.out.println(eka);
System.out.println(eka.pintaAla());
``` -->
```java
Rectangle first = new Rectangle(40, 80);
Rectangle rectangle = new Rectangle(10, 10);
System.out.println(first);
System.out.println(rectangle);

first.narrow();
System.out.println(first);
System.out.println(first.surfaceArea());
```

<sample-output>

(40, 80)
(10, 10)
(39, 80)
3920

</sample-output>


<!-- <programming-exercise name='Kirja' tmcname='osa05-Osa05_02.Kirja'> -->
<programming-exercise name='Book' tmcname='part05-Part05_02.Book'>

<!-- Luo kirjaa esittävä luokka `Kirja`. Jokaisella kirjalla on kirjailija, nimi ja sivujen lukumäärä.

Tee luokalle:

- Konstruktori `public Kirja(String kirjailija, String nimi, int sivuja)`
- Metodi `public String getKirjailija()` joka palauttaa kirjan kirjailijan nimen.
- Metodi `public String getNimi()` joka palauttaa kirjan nimen.
- Metodi `public int getSivuja()` joka palauttaa kirjan sivujen lukumäärän.

Tee kirjalle lisäksi `public String toString()`-metodi, jota käytetään kirja-olion tulostamiseen. Metodin kutsun tulee tuottaa esimerkiksi seuraavanlainen tulostus: -->

Create a "Book" class which describes a book. Each book has an author, title, and page count.

Make the class a:

- Constructor `public Book(String author, String name, int pages)`
- Method `public String getAuthor()` which returns the book's author's name.
- Method `public String getName()` which returns the name of the book.
- Method `public int getPages()` which returns the number of pages in the book.

In addition, make a `public String toString()` method for the book which will be used to print the book object. For example, the method call should produce the following output:

<sample-output>

<!-- J. K. Rowling, Harry Potter ja viisasten kivi, 223 sivua -->
J. K. Rowling, Harry Potter and the Sorcerer's Stone, 223 sivua

</sample-output>

</programming-exercise>


<!-- <programming-exercise name='Kuutio' tmcname='osa05-Osa05_03.Kuutio'> -->
<programming-exercise name='Cube' tmcname='part05-Part05_03.Cube'>

<!-- Luo kuutiota (eli säännöllistä kuusitahokasta) esittävä luokka `Kuutio`. Luo luokalle konstruktori `public Kuutio(int sarmanPituus)`, joka saa parametrinaan kuution särmän pituuden.


Tee kuutiolle metodi `public int tilavuus()`, joka laskee ja palauttaa kuution tilavuuden. Kuution tilavuus lasketaan kaavalla `sarmanPituus * sarmanPituus * sarmanPituus`. Tee tämän jälkeen kuutiolle vielä metodi `public String toString()`, joka palauttaa kuutiota kuvaavan merkkijonoesityksen. Merkkijonoesityksen tulee olla muotoa "`Kuution särmän pituus on p, tilavuus on t`", missä `p`on pituus ja `t` on tilavuus -- sekä pituus että tilavuus tulee kuvata kokonaislukuina.


Alla esimerkkejä -->

Create a `Cube` class that represents a cube (i.e., a standard hexahedron). Create a `public Cube (int edgeLength)` constructor for the class, that takes the length of the cube's edge as its parameter.


Make a `public int volume()` method for the cube, which calculates and returns the cube's volume. The volume of the cube is calculated with the formula `edgeLength * edgeLength * edgeLength`. Moreover, make a `public String toString()` method for the cube, which returns a string representation of it. The string representation should take the form "`The length of the edge is l and the volume v`", where `l` is the length and `v` the volume - both the length and volume must be represented as integers.

Examples are provided beneath


<!-- ```java
Kuutio oSheaJackson = new Kuutio(4);
System.out.println(oSheaJackson.tilavuus());
System.out.println(oSheaJackson);

System.out.println();

Kuutio suola = new Kuutio(2);
System.out.println(suola.tilavuus());
System.out.println(suola);
``` -->
```java
Cube oSheaJackson = new Cube(4);
System.out.println(oSheaJackson.volume());
System.out.println(oSheaJackson);

System.out.println();

Cube salt = new Cube(2);
System.out.println(salt.volume());
System.out.println(salt);
```

<sample-output>

<!-- 64
Kuution särmän pituus on 4, tilavuus on 64

8
Kuution särmän pituus on 2, tilavuus on 8 -->

64
The length of the edge is 4 and the volume 64

8
The length of the edge is 2 and the volume 8

</sample-output>

</programming-exercise>


<!-- <programming-exercise name='Harjoitusapuri' tmcname='osa05-Osa05_04.Harjoitusapuri'> -->
<programming-exercise name='Fitbyte' tmcname='part05-Part05_04.FitByte'>


<!-- <a href="https://fi.wikipedia.org/wiki/Karvosen_kaava" target="_blank" norel>Karvosen kaavan</a> avulla voidaan laskea tavoitesyke fyysistä harjoittelua varten. Tavoitesykkeen laskeminen perustuu kaavaan `(maksimisyke - leposyke) * (tavoitesykeprosentti) + leposyke`, missä tavoitesyke annetaan prosenttina maksimisykkeestä. -->

<a href="https://en.wikipedia.org/wiki/Heart_rate#Karvonen_method" target="_blank" norel>The Karvonen method </a> allows you to calculate your target heart rate for physical exercise. The calculation of the target heart rate is based on the formula `(maximum heart rate - resting heart rate) * (target heart rate percentage) + resting heart rate`, where the target heart rate is given as a percentage of the maximum heart rate.

<!-- Esimerkiksi, jos henkilön maksimisyke on `200`, leposyke `50`, ja tavoitesyke `75%` maksimisykkeestä, on tavoiteltava sydämen syke noin `((200-50) * (0.75) + 50)` eli `162.5` lyöntiä minuutissa. -->
For example, if a person has a maximum heart rate of `200`, a resting heart rate of `50`, and a target heart rate of `75%` of the maximum heart rate, the target heart rate should be about `((200-50) * (0.75) + 50)`, i.e., `162.5` beats per minute.


<!-- Luo luokka `Harjoitusapuri`, jolle annetaan konstruktorin parametrina ikä ja leposyke. Harjoitusapurin tulee tarjota metodi tavoitesyke, jolle annetaan parametrina prosentuaalista maksimisykkeen osuutta kuvaava double-tyyppinen luku. Osuus annetaan lukuna nollan ja yhden välillä. Luokalla tulee olla: -->
Create a class called `Fitbyte`, whose constructor takes age and resting heart rate as its parameters. The exercise assistant should provide a method targetHeartRate, which is given a double-type number as a parameter representing a percentual portion of the maximum heart rate. The proportion is given as a number between zero and one. The class should have:
<!--
- Konstruktori `public Harjoitusapuri(int ika, int leposyke)`
- Metodi `public double tavoitesyke(double prosenttiaMaksimista)`, joka laskee ja palauttaa tavoiteltavan sykkeen.


Käytä maksimisykkeen laskemiseen kaavaa `206.3 - (0.711 * ikä)`.

Käyttöesimerkki:

-->

- A constructor `public Fitbyte(int age, int restingHeartRate)`
- A method `public double targetHeartRate(double percentageOfMaximum)` that calculates and returns the target heart rate.


Use the `206.3 - (0.711 * age)` formula to calculate the maximum heart rate.

Use case:


<!-- ```java
Harjoitusapuri apuri = new Harjoitusapuri(30, 60);

double prosenttiosuus = 0.5;

while (prosenttiosuus < 1.0) {
    double tavoite = apuri.tavoitesyke(prosenttiosuus);
    System.out.println("Tavoite " + (prosenttiosuus * 100) + "% maksimista: " + tavoite);
    prosenttiosuus = prosenttiosuus + 0.1;
}
``` -->
```java
Fitbyte assistant = new Fitbyte(30, 60);

double percentage = 0.5;

while (percentage < 1.0) {
    double target = assistant.targetHeartRate(percentage);
    System.out.println("Target " + (percentage * 100) + "% of maximum: " + target);
    percentage = percentage + 0.1;
}
```

<sample-output>
<!--
Tavoite 50.0% maksimista: 122.48500000000001
Tavoite 60.0% maksimista: 134.98200000000003
Tavoite 70.0% maksimista: 147.479
Tavoite 80.0% maksimista: 159.976
Tavoite 89.99999999999999% maksimista: 172.473
Tavoite 99.99999999999999% maksimista: 184.97000000000003 -->

Target 50.0% of maximum: 122.48500000000001
Target 60.0% of maximum: 134.98200000000003
Target 70.0% of maximum: 147.479
Target 80.0% of maximum: 159,976
Target 89.99999999999999% of maximum: 172.473
Target 99.99999999999999% of maximum: 184.97000000000003

</sample-output>

</programming-exercise>
