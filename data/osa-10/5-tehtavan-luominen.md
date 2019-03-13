---
path: '/osa-10/5-tehtavan-luominen'
title: 'Tehtävän luominen'
hidden: true
---


TODO: tänne listatehtävä / crowdsorcerer

<text-box variant='learningObjectives' name='Oppimistavoitteet'>


    -
      TODO



</text-box>


Tässä osassa pääset suunnittelemaan CrowdSorcerer-työkalua käyttämällä oman ohjelmointitehtävän, jota käytetään myöhemmillä kursseilla.
Käy aluksi kertaamassa CrowdSorcererin käyttöä kurssin <a href="https://ohjelmointi-19.mooc.fi/osa-7/4-ohjelmointitehtavien-luominen">seitsemännestä osasta</a> ja lue sitten alla oleva ohjeistus tehtävän suunnittelua varten.


## Suunnittele oma tehtävä: Listat

Suunnittele tehtävä, joka harjoituttaa listojen käsittelyä ja tietojen hakemista niistä. Tehtävän tekijän on tarkoitus tehtävässä luoda haluamallasi tavalla nimetty metodi Lähdekoodi-kentän Submission-luokkaan. Ohjeista tehtävänannossa tehtävän tekijää tekemään tehtävässä metodi, joka
1. palauttaa haluamasi tyyppisen muuttujan, esimerkiksi merkkijonon (HUOM! Älä tässä tehtävässä käytä void-tyyppisiä metodeja),
2. on haluamasi niminen ja
3. jolla on haluamasi tyyppiset parametrit.

Esimerkiksi, jos tehtävässäsi on tarkoitus tehdä seuraavanlainen metodi:

```java
public String listanPisin(ArrayList<String> lista) {
    // koodia
}
```

niin metodin on tarkoitus palauttaa merkkijono, sen nimen tulee olla 'listanPisin' ja parametriksi tulee antaa ArrayList&lt;String&gt;-tyyppinen muuttuja.


Tehtävässä voidaan vaikkapa ensin main()-metodissa kysyä käyttäjältä arvoja, jotka tallennetaan listaan, ja sitten noita arvoja käsitellään jollain tavalla metodissa.

Kirjoita tehtävän tekijälle selkeä tehtävänanto ja tee tehtävälle malliratkaisu (muista erotella malliratkaisurivit tehtävän tekijää auttavasta tehtäväpohjasta!) sekä testikoodiin vähintään kolme testiä. Testeissä on tarkoitus testata luomaasi metodia; main()-metodia ei tällä kertaa tarvitse testata.

Tehtävien luomistehtävät vastaavat kurssin pisteytyksessä ohjelmointitehtävää.

<crowdsorcerer id='28'></crowdsorcerer>

