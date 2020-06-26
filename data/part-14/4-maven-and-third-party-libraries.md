---
path: '/part-14/4-maven-and-third-party-libraries'
title: 'Maven and third-party libraries'
hidden: false
---

<text-box variant='learningObjectives' name='Learning objectives'>

<!-- - Tunnet käsitteen kirjasto ja tiedät muutamia kolmannen osapuolen kirjastoja. -->
<!-- - Tiedät mistä kirjastoja voi etsiä. -->
<!-- - Toteutat sovelluksen, joka hyödyntää kolmannen osapuolen kirjastoa. -->
<!-- - Tiedät että sovelluksia voi paketoida ja jakaa muille, ja että jaetut sovellukset eivät vaadi ohjelmointiympäristöä toimiakseen. -->
 - Know the term library and know some third party libraries
 - Know where to search for libraries
 - Can implement an application which uses a third party library
 - Know that an application can be packaged and shared with others, and that applications shared this way do not require a development environment to work.

</text-box>


<!-- Kurssin ohjelmointitehtävät on tehty NetBeans-nimisessä ohjelmointiympäristössä, johon on lisätty tehtävien lataamiseen ja palauttamiseen tarkoitettu Test My Code -liitännäinen. Kurssilla käytetyt tehtäväpohjat eivät kuitenkaan ole millään tavalla NetBeans tai Test My Code -riippuvaisia, vaan niitä voi käyttää muissakin ohjelmointiympäristöissä. -->
The programming exercises of this course have been done in the NetBeans development environment with a Test My Code plugin for downloading and submitting exercises.
However the exercise templates we have used are not dependent on NetBeans or Test My Code in any way,  and you can use them in other development environments as well.


<!-- Tehtäväpohjissa käytetään [Maven](https://maven.apache.org/)-nimistä työvälinettä, joka tarjoaa apuvälineitä ohjelmien suorittamiseen ja hallintaan. Maven määrää projektiemme rakenteen -- tämän takia jokaisen projektin juuressa on `pom.xml`-niminen tiedosto ja lähdekoodimme sijaitsevat `src`-nimisen kansion alla. Kansiossa `src` on tyypillisesti kaksi kansiota, toinen on `main`, joka sisältää projektin lähdekoodit ym, ja toinen `test`, joka sisältää ohjelman testaamiseen käytettävät lähdekoodit kuten yksikkötestit. -->
The exercise templates use a tool called [Maven](https://maven.apache.org/), which is used for executing and managing programs.
Maven dictates the structure of our projects -- every project has a file called `pom.xml` located at its root, and their source code is located in a directory called `src`.

The `src` directory typically has two sub-directories: `main` containing the project source code and `test` containing the source code of the tests for the project.

<!-- Mavenin etu on se, että se auttaa apukirjastojen lataamisessa. Apukirjastot ovat muiden kirjoittamaa lähdekoodia, joka on paketoitu kaikkien käytettäväksi. Esimerkiksi yksikkötestaukseen on käytetty JUnit-nimistä kirjastoa. Valmiita kirjastoja on hyvin moneen lähtöön. Esimerkiksi osoitteessa [https://mvnrepository.com/](https://mvnrepository.com/) olevan hakukoneen kautta voi löytää yli 10 miljoonaa kirjastoa -- moni näistä on tosin saman kirjaston eri versioita. -->
One advantage of using Maven is, that it is useful for downloading libraries.
Libraries are source code  which has been packaged to be used by anyone.
For example we have used the JUnit library for unit tests.
There is a library for almost anything. The search engine at [https://mvnrepository.com/](https://mvnrepository.com/) finds over 10 million libraries, although many of them are different versions of the same library.

<!-- Hakukoneesta löytyy esimerkiksi tietokantojen käyttöön sekä vaikkapa telegram-bottien kirjoittamiseen tarkoitettuja kirjastoja. Tutustutaan näihin seuraavaksi lyhyesti. -->
You can find for example libraries for using databases or creating telegram bots.
Next you will get to know some of those libraries a bit better.


<!-- ## Tietokannan käyttö -->

## Using a database

<!-- Tietokannat, tai oikeastaan tietokannanhallintajärjestelmät, ovat välineitä tiedon hallintaan. Tutustumme näihin tarkemmin kurssilla Tietokantojen perusteet (TKT10004). Tarkastellaan lyhyesti tietokantaa käyttävän sovelluksen rakentamista. -->

Databases, or rather database management systems, are tools for managing data. You have a chance to familiarize yourself better with them on the course Introduction to Databases (TKT10004). Let's have a brief look at an application that uses a database.

<!-- Osoitteesta [https://mvnrepository.com/](https://mvnrepository.com/) löytyy useita kirjastoja tietokantojen käyttöön. Otamme esimerkinomaisesti käyttöömme [H2](http://www.h2database.com/html/main.html)-nimisen tietokannanhallintajärjestelmän. Tämä onnistuu lisäämällä tiedoston `pom.xml` sisällä olevalle `<dependencies>`- ja `</dependencies>` -elementtien rajaamalle kirjastoriippuvuuksia sisältävälle alueelle H2-tietokannanhallintajärjestelmän kuvaavan kirjaston, kuten alla. -->

There are several libraries for using databases at the address [https://mvnrepository.com/](https://mvnrepository.com/). We will show an example of how to begin using the database management system called [H2](http://www.h2database.com/html/main.html). This can be done by adding the H2 library to the file `pom.xml`, between the tags `<dependencies>` and `</dependencies>`, which is the area for the library dependencies. You can take a look at the example below.


```xml
<!-- other content -->

<dependencies>
<!-- other libraries -->

    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <version>1.4.197</version>
    </dependency>

<!-- other libraries -->
</dependencies>

<!-- other content -->
```

<!-- Tehtäväpohjassa tämä on tehty valmiiksi. Kun kirjastoriippuvuus on lisätty osaksi projektia, ovat sen tarjoamat luokat projektissa käytettävissä. Seuraavassa tehtävässä hyödynnät valmiiksi edellä kuvattua riippuvuutta ja toteutat tietokantaa käyttävän sovelluksen. -->

This has already been done in the exercise base. When the library dependency has been configured as part of the project, the classes included in that library are usable in the project. In the following exercise you are going to use the previously described dependency, and implement a program that uses a database to manage data.

<!-- <programming-exercise name='Tietokanta' tmcname='osa14-Osa14_10.Tietokanta'> -->

<programming-exercise name='Database' tmcname='part14-Part14_10.Database'>


<!-- Tehtäväpohjassa tulee sovellus, johon on lisätty riippuvuus H2-nimiseen tietokantaan. Sovelluksessa on seuraavat neljä luokkaa: -->

The exercise base contains an application that has the H2 database configured as a dependency. It also includes the following four classes:

<!-- - `Todo`: tehtävää tehtävää kuvaava luokka. Jokaisella tehtävällä on numeerinen tunnus (id), nimi, kuvaus sekä tieto siitä onko tehtävä tehty. -->

- `Todo`: a class that represents a task that is to be done. Each todo has a numerical identifier (id), a name, a description, and the information abot whether it has been done.

<!-- - `TodoDao`: tehtävien tietokantaan tallentamiseen käytettävä luokka, sana "dao" on lyhenne sanasta "data access object". Luokka tarjoaa metodit tehtävien listaamiseen, lisäämiseen, tehdyksi asettamiseen sekä poistamiseen. Tehdyksi asettaminen ja poistaminen tapahtuu numeerisen tunnuksen perusteella. Luokan konstruktori saa parametrinaan käytettävän tietokannan osoitteen. -->

- `TodoDao`: a class that is used to store todos to the database. The word "dao" comes from the phrase "data access object". The class offers methods for listing, adding, setting as completed, and removing todos. Removing or setting as done is done on the basis of the id. The class constructor receives the location of the database.

<!-- - `Kayttoliittyma`: tehtävien tietokantaan tallentamiseen käytettävä luokka. Luokka tarjoaa metodit tehtävien listaamiseen, lisäämiseen, tehdyksi asettamiseen sekä poistamiseen. Tehdyksi asettaminen ja poistaminen tapahtuu numeerisen tunnuksen perusteella. Luokan konstruktori saa parametrina käytettävän tietokannan osoitteen. -->

- `UserInterface`: a class that is used to ask the user for instructions for what to do. The constructor receives a Scanner object and a TodoDao object as its parameters. Calling the `start` method starts the user interface, after which the user controls the program with their keyboard input.

<!-- - `Ohjelma`: sovelluksen käynnistämiseen tarkoitettu luokka. -->

- `Program`: a class that serves as a starting point for the program.


<!-- Tässä tehtävässä tarkoituksenasi on muokata käyttöliittymää siten, että sovelluksen käyttäjällä on mahdollisuus tehtävien lisäämiseen, listaamiseen, tehdyksi asettamiseen sekä poistamiseen. Älä muokkaa luokkia `Todo`, `TodoDao` tai `Ohjelma`. -->

In this exercise it is your task to modify the user interface so that the user of the program can add new todos, or list, mark as done, or remove existing ones. Don't do changes in the classes `Todo`, `TodoDao`, or `Program`.

<!-- Odotettu sovelluksen toiminta on seuraava: -->

The finished program is expected to behave in the following manner:

<!-- ```

Syötä komento:
1) listaa
2) lisää
3) aseta tehdyksi
4) poista
x) lopeta
> 1
Listataan tietokannan tiedot

Syötä komento:
1) listaa
2) lisää
3) aseta tehdyksi
4) poista
x) lopeta
> 2
Lisätään tehtävää
Syötä nimi
koodaa
Syötä kuvaus
koodaa paljon

Syötä komento:
1) listaa
2) lisää
3) aseta tehdyksi
4) poista
x) lopeta
> 2
Lisätään tehtävää
Syötä nimi
tee ruokaa
Syötä kuvaus
riisipuuroa

Syötä komento:
1) listaa
2) lisää
3) aseta tehdyksi
4) poista
x) lopeta
> 1
Listataan tietokannan tiedot
Todo{id=1, nimi=koodaa, kuvaus=koodaa paljon, valmis=false}
Todo{id=2, nimi=tee ruokaa, kuvaus=riisipuuroa, valmis=false}

Syötä komento:
1) listaa
2) lisää
3) aseta tehdyksi
4) poista
x) lopeta
> 3

Mikä asetetaan tehdyksi (syötä id)?
2

Syötä komento:
1) listaa
2) lisää
3) aseta tehdyksi
4) poista
x) lopeta
> 1
Listataan tietokannan tiedot
Todo{id=1, nimi=koodaa, kuvaus=koodaa paljon, valmis=false}
Todo{id=2, nimi=tee ruokaa, kuvaus=riisipuuroa, valmis=true}

Syötä komento:
1) listaa
2) lisää
3) aseta tehdyksi
4) poista
x) lopeta
> 4

Mikä poistetaan (syötä id)?
2

Syötä komento:
1) listaa
2) lisää
3) aseta tehdyksi
4) poista
x) lopeta
> 1
Listataan tietokannan tiedot
Todo{id=1, nimi=koodaa, kuvaus=koodaa paljon, valmis=false}

Syötä komento:
1) listaa
2) lisää
3) aseta tehdyksi
4) poista
x) lopeta
> 3

Mikä asetetaan tehdyksi (syötä id)?
1

Syötä komento:
1) listaa
2) lisää
3) aseta tehdyksi
4) poista
x) lopeta
> 1
Listataan tietokannan tiedot
Todo{id=1, nimi=koodaa, kuvaus=koodaa paljon, valmis=true}

Syötä komento:
1) listaa
2) lisää
3) aseta tehdyksi
4) poista
x) lopeta
> x
Kiitos!

``` -->

```

Enter command:
1) list
2) add
3) mark as done
4) remove
x) quit
> 1
Listing the database contents

Enter command:
1) list
2) add
3) mark as done
4) remove
x) quit
> 2
Adding a new todo
Enter name
code
Enter description
code a whole lot

Enter command:
1) list
2) add
3) mark as done
4) remove
x) quit
> 2
Adding a new todo
Enter name
prepare food
Enter description
rice porridge

Enter command:
1) list
2) add
3) mark as done
4) remove
x) quit
> 1
Listing the database contents
Todo{id=1, name=code, description=code a whole lot, done=false}
Todo{id=2, name=prepare food, description=rice porridge, done=false}

Enter command:
1) list
2) add
3) mark as done
4) remove
x) quit
> 3

Which todo should be marked as done (give the id)?
2

Enter command:
1) list
2) add
3) mark as done
4) remove
x) quit
> 1
Listing the database contents
Todo{id=1, name=code, description=code a whole lot, done=false}
Todo{id=2, name=prepare food, description=rice porridge, done=true}

Enter command:
1) list
2) add
3) mark as done
4) remove
x) quit
> 4

Which todo should be removed (give the id)?
2

Enter command:
1) list
2) add
3) mark as done
4) remove
x) quit
> 1
Listing the database contents
Todo{id=1, name=code, description=code a whole lot, done=false}

Enter command:
1) list
2) add
3) mark as done
4) remove
x) quit
> 3

Which todo should be marked as done (give the id)?
1

Enter command:
1) list
2) add
3) mark as done
4) remove
x) quit
> 1
Listing the database contents
Todo{id=1, name=code, description=code a whole lot, done=true}

Enter command:
1) list
2) add
3) mark as done
4) remove
x) quit
> x
Thank you!

```

<!-- Tehtävässä toteuttamasi tekstikäyttöliittymä ei oikeastaan poikkea millään tavalla aiemmin toteuttamistamme tekstikäyttöliittymistä. Toisin kuin ennen, nyt tieto vain tallennetaan tietokantaan: *tallennetut tiedot ovat sovelluksen käytössä myös seuraavan käynnistyksen yhteydessä.* -->

The text user interface in this exercise does not differ in any essential way from the earlier text UIs we have created. The difference is that the data is being stored in a database: *the stored data will be available for the program when it is started the next time.*

</programming-exercise>


## Telegram bot

<!-- Kuten todettu, Mavenin avulla löytyy merkittävä määrä kirjastoja, joita voi käyttää osana omia sovelluksia. Hakemalla osoitteesta [https://mvnrepository.com/](https://mvnrepository.com/) sanaa telegram, löytää mm. [TelegramBots](https://github.com/rubenlagus/TelegramBots)-kirjaston Telegram-bottien tekemiseen. -->
As we mentioned above, you can use Maven to find a great number of libraries you can use as a part of your own applications.
By searching telegram from [https://mvnrepository.com/](https://mvnrepository.com/) you find e.g the [TelegramBots](https://github.com/rubenlagus/TelegramBots) library for making Telegram bots.

<!-- Telegrambotit ovat ohjelmia, jotka reagoivat telegramissa lähetettyihin viesteihin ja esimerkiksi kertovat vitsejä. Bottien tekeminen on kuitenkin tämän kurssin osaamistavoitteiden ulkopuolella. Samalla, kurssin aikana opitut taidot auttavat olemassaolevien oppaiden lukemisessa ja opiskelussa. Mikäli haluat oppia tekemään Telegrambotin, lue osoitteessa [https://github.com/rubenlagus/TelegramBots/wiki/Getting-Started](https://github.com/rubenlagus/TelegramBots/wiki/Getting-Started) oleva opas. Muista aloittaa botin rakennus pienistä osista -- kokeile luoda ensin esimerkiksi botti, joka liittyy kanavalle. -->
Telegram bots are programs which react to messages sent on Telegram, and for example tell jokes.
Creating these bots is out of the scope of this course, but the skills you have learned will help you to study different tutorials. .
If you want to learn to make a Telegram bot, read the guide at [https://github.com/rubenlagus/TelegramBots/wiki/Getting-Started](https://github.com/rubenlagus/TelegramBots/wiki/Getting-Started).
Remember to start implementing your bot bit by bit -- start by for example making a bit which joins a channel.



## Packaging applications

<!-- Sovelluksemme ovat tähän mennessä toimineet vain ohjelmointiympäristössä. Tämä ei kuitenkaan ole käytännössä totta, sillä ohjelman käynnistäminen ohjelmointiympäristössä vastaa melko vahvasti sen käynnistämistä ohjelmointiympäristön ulkopuolella. Voimme määritellä luokan, jossa olevaa metodia `public static void main` käytetään ohjelman käynnistämiseen. -->
So far it has seemed like our applications have required a development environment to work. This is not strictly true however, because executing a program on a development environment is quite the same as executing a program outside of it.
We can define a class which contains the `public static void main` method for starting the program.


<!-- Oracle tarjoaa [javapackager](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/javapackager.html)-työvälineen sovellusten paketointia varten. Osoitteessa [https://docs.oracle.com/javase/8/docs/technotes/guides/deploy/packager.html](https://docs.oracle.com/javase/8/docs/technotes/guides/deploy/packager.html) on ohjeita välineen käyttöön. -->
Oracle has a [javapackager](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/javapackager.html) tool for packaging an application.
You can find information about using it from [https://docs.oracle.com/javase/8/docs/technotes/guides/deploy/packager.html](https://docs.oracle.com/javase/8/docs/technotes/guides/deploy/packager.html).

<!-- Edellä mainittuja ohjeita seuraamalla voit tehdä luomistasi ohjelmista versiot, joita voit jakaa myös muille. Ohjeiden käyttämä kirjasto on paketoitu myös Mavenin käyttöön ns. liitännäiseksi, kts. [https://github.com/javafx-maven-plugin/javafx-maven-plugin](https://github.com/javafx-maven-plugin/javafx-maven-plugin). -->
Using the instructions on the website linked above you can create packaged versions of your applications you can share with others.
The library used in the instructions can be found packaged as a Maven plugin from [https://github.com/javafx-maven-plugin/javafx-maven-plugin](https://github.com/javafx-maven-plugin/javafx-maven-plugin).

<!-- Muitakin vaihtoehtoja paketointiin on, kuten vaikkapa [JavaPackager](https://github.com/fvarrui/JavaPackager)-maven liitännäinen. -->
There are other tools for packaging, for example the [JavaPackager](https://github.com/fvarrui/JavaPackager) Maven plugin.

## Other development environment

<!-- Java on yksi maailman eniten käytetyistä ohjelmointikielistä ja sitä käytetään myös mm. Android-kännyköissä. Kurssin aikana harjoittelemamme käyttöliittymien luomistekniikka ei ole rajoitettu vain työpöytäsovelluksiin, vaikka JavaFX onkin niihin ensisijaisesti suunnattu. Mikäli haluat siirtää JavaFX-sovelluksia kännykkään, on sitä varten luotu [JavaFXPorts](https://gluonhq.com/products/mobile/javafxports/)-projekti. JavaFXPorts-projektin avulla voit tehdä mobiilisovelluksia JavaFX-kirjastoa käyttäen. Osoitteessa [https://docs.gluonhq.com/javafxports/](https://docs.gluonhq.com/javafxports/) on tähän lisää ohjeistusta. -->
Java is one of the most used programming languages in the world, and it is used i.e in Android phones.
The techniques for creating graphical user interfaces practiced in this course can be used for mobile applications as well, altough JavaFX is primarily targeted for desktop applications.
If you want to use JavaFX for a mobile application, [JavaFXPorts](https://gluonhq.com/products/mobile/javafxports/) project is created for that.
The JavaFXPorts project can be used to create mobile applications using the JavaFX library.
You can find more information about it from [https://docs.gluonhq.com/javafxports/](https://docs.gluonhq.com/javafxports/).


<!-- Mobiilisovellusten kehittämisestä enemmän kiinnostuneiden kannattaa tutustua Androidin sovelluskehittäjille luomaan sivustoon, joka löytyy osoitteessa [https://developer.android.com/guide/](https://developer.android.com/guide/). Käymäsi ohjelmoinnin perusteet ja ohjelmoinnin jatkokurssi antaa näihin hyvän lähtökohdan. Vastaavasti, mikäli yksinkertaisten (mobiili)pelien kehittäminen kiinnostaa, tutustu esimerkiksi [FXGL](https://github.com/AlmasB/FXGL/wiki)-kirjastoon. -->
If you are interested in developing mobile applications, it is worth it to study the Android's developer guide for app developers which can be found from [https://developer.android.com/guide/](https://developer.android.com/guide/).
This programming course has given you excellent basis for learning app development.
Correspondingly if you are interested in developing simple (mobile) games, we recommend learning to use the [FXGL](https://github.com/AlmasB/FXGL/wiki) library.
