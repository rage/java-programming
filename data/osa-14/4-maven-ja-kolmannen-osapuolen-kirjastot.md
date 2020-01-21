---
path: '/osa-14/4-maven-ja-kolmannen-osapuolen-kirjastot'
title: 'Maven ja kolmannen osapuolen kirjastot'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteen kirjasto ja tiedät muutamia kolmannen osapuolen kirjastoja.
- Tiedät mistä kirjastoja voi etsiä.
- Toteutat sovelluksen, joka hyödyntää kolmannen osapuolen kirjastoa.
- Tiedät että sovelluksia voi paketoida ja jakaa muille, ja että jaetut sovellukset eivät vaadi ohjelmointiympäristöä toimiakseen.

</text-box>


Kurssin ohjelmointitehtävät on tehty NetBeans-nimisessä ohjelmointiympäristössä, johon on lisätty tehtävien lataamiseen ja palauttamiseen tarkoitettu Test My Code -liitännäinen. Kurssilla käytetyt tehtäväpohjat eivät kuitenkaan ole millään tavalla NetBeans tai Test My Code -riippuvaisia, vaan niitä voi käyttää muissakin ohjelmointiympäristöissä.

Tehtäväpohjissa käytetään [Maven](https://maven.apache.org/)-nimistä työvälinettä, joka tarjoaa apuvälineitä ohjelmien suorittamiseen ja hallintaan. Maven määrää projektiemme rakenteen -- tämän takia jokaisen projektin juuressa on `pom.xml`-niminen tiedosto ja lähdekoodimme sijaitsevat `src`-nimisen kansion alla. Kansiossa `src` on tyypillisesti kaksi kansiota, toinen on `main`, joka sisältää projektin lähdekoodit ym, ja toinen `test`, joka sisältää ohjelman testaamiseen käytettävät lähdekoodit kuten yksikkötestit.

Mavenin etu on se, että se auttaa apukirjastojen lataamisessa. Apukirjastot ovat muiden kirjoittamaa lähdekoodia, joka on paketoitu kaikkien käytettäväksi. Esimerkiksi yksikkötestaukseen on käytetty JUnit-nimistä kirjastoa. Valmiita kirjastoja on hyvin moneen lähtöön. Esimerkiksi osoitteessa [https://mvnrepository.com/](https://mvnrepository.com/) olevan hakukoneen kautta voi löytää yli 10 miljoonaa kirjastoa -- moni näistä on tosin saman kirjaston eri versioita.

Hakukoneesta löytyy esimerkiksi tietokantojen käyttöön sekä vaikkapa telegram-bottien kirjoittamiseen tarkoitettuja kirjastoja. Tutustutaan näihin seuraavaksi lyhyesti.


## Tietokannan käyttö

Tietokannat, tai oikeastaan tietokannanhallintajärjestelmät, ovat välineitä tiedon hallintaan. Tutustumme näihin tarkemmin kurssilla Tietokantojen perusteet (TKT10004). Tarkastellaan lyhyesti tietokantaa käyttävän sovelluksen rakentamista.


Osoitteesta [https://mvnrepository.com/](https://mvnrepository.com/) löytyy useita kirjastoja tietokantojen käyttöön. Otamme esimerkinomaisesti käyttöömme [H2](http://www.h2database.com/html/main.html)-nimisen tietokannanhallintajärjestelmän. Tämä onnistuu lisäämällä tiedoston `pom.xml` sisällä olevalle `<dependencies>`- ja `</dependencies>` -elementtien rajaamalle kirjastoriippuvuuksia sisältävälle alueelle H2-tietokannanhallintajärjestelmän kuvaavan kirjaston, kuten alla.


```xml
<!-- muuta sisältöä -->

<dependencies>
<!-- muita kirjastoja -->

    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <version>1.4.197</version>
    </dependency>

<!-- muita kirjastoja -->
</dependencies>

<!-- muuta sisältöä -->
```

Tehtäväpohjassa tämä on tehty valmiiksi. Kun kirjastoriippuvuus on lisätty osaksi projektia, ovat sen tarjoamat luokat projektissa käytettävissä. Seuraavassa tehtävässä hyödynnät valmiiksi edellä kuvattua riippuvuutta ja toteutat tietokantaa käyttävän sovelluksen.


<programming-exercise name='Tietokanta' tmcname='osa14-Osa14_10.Tietokanta'>

Tehtäväpohjassa tulee sovellus, johon on lisätty riippuvuus H2-nimiseen tietokantaan. Sovelluksessa on seuraavat neljä luokkaa:

- `Todo`: tehtävää tehtävää kuvaava luokka. Jokaisella tehtävällä on numeerinen tunnus (id), nimi, kuvaus sekä tieto siitä onko tehtävä tehty.

- `TodoDao`: tehtävien tietokantaan tallentamiseen käytettävä luokka, sana "dao" on lyhenne sanasta "data access object". Luokka tarjoaa metodit tehtävien listaamiseen, lisäämiseen, tehdyksi asettamiseen sekä poistamiseen. Tehdyksi asettaminen ja poistaminen tapahtuu numeerisen tunnuksen perusteella. Luokan konstruktori saa parametrinaan käytettävän tietokannan osoitteen.

- `Kayttoliittyma`: tehtävien tietokantaan tallentamiseen käytettävä luokka. Luokka tarjoaa metodit tehtävien listaamiseen, lisäämiseen, tehdyksi asettamiseen sekä poistamiseen. Tehdyksi asettaminen ja poistaminen tapahtuu numeerisen tunnuksen perusteella. Luokan konstruktori saa parametrina käytettävän tietokannan osoitteen.

- `Ohjelma`: sovelluksen käynnistämiseen tarkoitettu luokka.


Tässä tehtävässä tarkoituksenasi on muokata käyttöliittymää siten, että sovelluksen käyttäjällä on mahdollisuus tehtävien lisäämiseen, listaamiseen, tehdyksi asettamiseen sekä poistamiseen. Älä muokkaa luokkia `Todo`, `TodoDao` tai `Ohjelma`.

Odotettu sovelluksen toiminta on seuraava:


```

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

```

Tehtävässä toteuttamasi tekstikäyttöliittymä ei oikeastaan poikkea millään tavalla aiemmin toteuttamistamme tekstikäyttöliittymistä. Toisin kuin ennen, nyt tieto vain tallennetaan tietokantaan: *tallennetut tiedot ovat sovelluksen käytössä myös seuraavan käynnistyksen yhteydessä.*

</programming-exercise>


## Telegrambotti

Kuten todettu, Mavenin avulla löytyy merkittävä määrä kirjastoja, joita voi käyttää osana omia sovelluksia. Hakemalla osoitteesta [https://mvnrepository.com/](https://mvnrepository.com/) sanaa telegram, löytää mm. [TelegramBots](https://github.com/rubenlagus/TelegramBots)-kirjaston Telegram-bottien tekemiseen.


Telegrambotit ovat ohjelmia, jotka reagoivat telegramissa lähetettyihin viesteihin ja esimerkiksi kertovat vitsejä. Bottien tekeminen on kuitenkin tämän kurssin osaamistavoitteiden ulkopuolella. Samalla, kurssin aikana opitut taidot auttavat olemassaolevien oppaiden lukemisessa ja opiskelussa. Mikäli haluat oppia tekemään Telegrambotin, lue osoitteessa [https://github.com/rubenlagus/TelegramBots/wiki/Getting-Started](https://github.com/rubenlagus/TelegramBots/wiki/Getting-Started) oleva opas. Muista aloittaa botin rakennus pienistä osista -- kokeile luoda ensin esimerkiksi botti, joka liittyy kanavalle.


## Sovellusten paketointi

Sovelluksemme ovat tähän mennessä toimineet vain ohjelmointiympäristössä. Tämä ei kuitenkaan ole käytännössä totta, sillä ohjelman käynnistäminen ohjelmointiympäristössä vastaa melko vahvasti sen käynnistämistä ohjelmointiympäristön ulkopuolella. Voimme määritellä luokan, jossa olevaa metodia `public static void main` käytetään ohjelman käynnistämiseen.

Oracle tarjoaa [javapackager](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/javapackager.html)-työvälineen sovellusten paketointia varten. Osoitteessa [https://docs.oracle.com/javase/8/docs/technotes/guides/deploy/packager.html](https://docs.oracle.com/javase/8/docs/technotes/guides/deploy/packager.html) on ohjeita välineen käyttöön.

Edellä mainittuja ohjeita seuraamalla voit tehdä luomistasi ohjelmista versiot, joita voit jakaa myös muille. Ohjeiden käyttämä kirjasto on paketoitu myös Mavenin käyttöön ns. liitännäiseksi, kts. [https://github.com/javafx-maven-plugin/javafx-maven-plugin](https://github.com/javafx-maven-plugin/javafx-maven-plugin).

Muitakin vaihtoehtoja paketointiin on, kuten vaikkapa [JavaPackager](https://github.com/fvarrui/JavaPackager)-maven liitännäinen.


## Muut ympäristöt

Java on yksi maailman eniten käytetyistä ohjelmointikielistä ja sitä käytetään myös mm. Android-kännyköissä. Kurssin aikana harjoittelemamme käyttöliittymien luomistekniikka ei ole rajoitettu vain työpöytäsovelluksiin, vaikka JavaFX onkin niihin ensisijaisesti suunnattu. Mikäli haluat siirtää JavaFX-sovelluksia kännykkään, on sitä varten luotu [JavaFXPorts](https://gluonhq.com/products/mobile/javafxports/)-projekti. JavaFXPorts-projektin avulla voit tehdä mobiilisovelluksia JavaFX-kirjastoa käyttäen. Osoitteessa [https://docs.gluonhq.com/javafxports/](https://docs.gluonhq.com/javafxports/) on tähän lisää ohjeistusta.


Mobiilisovellusten kehittämisestä enemmän kiinnostuneiden kannattaa tutustua Androidin sovelluskehittäjille luomaan sivustoon, joka löytyy osoitteessa [https://developer.android.com/guide/](https://developer.android.com/guide/). Käymäsi ohjelmoinnin perusteet ja ohjelmoinnin jatkokurssi antaa näihin hyvän lähtökohdan. Vastaavasti, mikäli yksinkertaisten (mobiili)pelien kehittäminen kiinnostaa, tutustu esimerkiksi [FXGL](https://github.com/AlmasB/FXGL/wiki)-kirjastoon.
