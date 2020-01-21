---
path: '/osa-1/1-ohjelmoinnin-aloittaminen'
title: 'Ohjelmoinnin aloittaminen'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tutustut kurssilla käytettyyn NetBeans with TMC -ohjelmointiympäristöön.
- Opit lataamaan ja palauttamaan kurssin ohjelmointitehtäviä.

</text-box>

<quiz id="abd73a90-88d7-4832-af9e-e3282b7d22b6"></quiz>

Nykyaikainen ohjelmointi tapahtuu lähes poikkeuksetta ohjelmointiympäristössä. Ohjelmointiympäristö sisältää joukon ohjelmoijaa auttavia aputoimintoja. Se ei rakenna ohjelmaa ohjelmoijan puolesta, mutta se muunmuassa vinkkaa helpoista virheistä ohjelmakoodissa ja auttaa ohjelmoijaa hahmottamaan ohjelman rakennetta.

Käytämme tällä kurssilla [NetBeans](https://netbeans.apache.org)-nimistä ohjelmointiympäristöä sekä siihen liitettävää Test My Code -liitännäistä.

Tarvitset kurssin aloittamiseen (1) käyttäjätunnuksen kurssilla käytettyyn TMC-järjestelmään, (2) Javan (Java JDK), ja (3) NetBeans with TMC -ohjelmointiympäristön (jatkossa TMC). Näiden asentaminen onnistuu seuraavia ohjeita noudattamalla.

<only-for-course-variant variant="dl">

  Ohjeistus oleellisten työvälineiden asentamiseen sekä kurssilla tarvittavan käyttäjätunnuksen luomiseen löytyy osoitteesta [https://www.mooc.fi/fi/installation/netbeans](https://www.mooc.fi/fi/installation/netbeans). Valitse organisaatioksi "MOOC" ja kurssiksi "Ohjelmoinnin MOOC 2020, Ohjelmoinnin perusteet".

</only-for-course-variant>

<only-for-not-logged-in>

  Kirjaudu sisään nähdäksesi, mikä organisaatio ja kurssi sinun tulee valita TMC:stä

</only-for-not-logged-in>

[Ohjeisiin!](https://www.mooc.fi/fi/installation/netbeans)

Kun olet luonut käyttäjätunnuksen ja asentanut Javan ja TMC:n, katso alla oleva video. Video näyttää mitä tapahtuu kun NetBeans with TMC -ohjelmointiympäristö käynnistetään ensimmäistä kertaa. Videolla valitaan organisaatio ja kurssi, sekä tehdään ensimmäinen ohjelmointitehtävä.

_Videolla kurssiksi valitaan ohjelmoinnin MOOC 2019. Muista kuitenkin valita kurssiksi ohjelmoinnin MOOC 2020!_

<youtube id="zvE8XA8D0gE"></youtube>


Alla on kurssin ensimmäinen ohjelmointitehtävä. Tutustut tehtävässä käytettyyn ohjelmointiympäristöön.

<programming-exercise name='Hiekkalaatikko' tmcname='osa01-Osa01_01.Hiekkalaatikko'>

Tehtäväpohjassa on seuraavanlainen ohjelmarunko:

```java
public class Hiekkalaatikko {
    public static void main(String[] args) {
        // Kirjoita ohjelmasi tähän alle

    }
}
```

Rivi "// Kirjoita ohjelmasi tähän alle" on _kommenttirivi_, jota tietokone ei ota huomioon ohjelmaa suoritettaessa.

Palauta tehtäväpohja palvelimen tarkastettavaksi ensin ilman minkäänlaisia muutoksia. Tällä tavoin harjoittelet tehtävän palauttamista. Tehtävän palauttaminen onnistuu valitsemalla TMC:ssä valikon TMC sekä sieltä kohdan "Submit".

Kun olet saanut tehtävän palautettua, kokeile yllä olevaa videota noudattaen tulostuskomennon lisäämistä ohjelmaan ja ohjelman suorittamista (play-napin painaminen). Kun saat ohjelman tulostamaan tekstiä (teksti voi olla mitä tahansa), palauta tehtävä vielä kertaalleen palvelimelle.

Käytä tätä hiekkalaatikkotehtävää jatkossa erilaisten kokeilujen tekemiseen. Kun kohtaat materiaalissa uuden asian, kokeile sitä ensin hiekkalaatikossa, ja lähde sitten ratkaisemaan asiaan liittyviä tehtäviä.

</programming-exercise>


## Ohjelmoija kirjoittaa lähdekoodia

Ohjelmointi on ohjelmistojen suunnittelua ja toteutusta. Toteutettava toiminnallisuus määräytyy ohjelmiston tilaajien ja käyttäjien toiveiden ja vaatimusten perusteella. Ohjelmia toteutetaan (eli kirjoitetaan tai "koodataan") tyypillisesti ihmisten kirjoitettavaksi ja luettavaksi tarkoitetulla ohjelmointikielellä.

Ohjelmointikieliä on satoja ja tällä kurssilla keskitytään näistä kielistä yhteen. Kurssin kielenä on [Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>), joka on yksi maailman eniten käytetyistä ohjelmointikielistä. Javaa tuntevan on myös helppo oppia uusia ohjelmointikieliä.

Ohjelmointikielet kuten Java tarjoavat suuren määrän valmiita komentoja, joita ohjelmoija käyttää ohjelmistoja luodessa. Tämä helpottaa ohjelmointia, sillä aivan kaikkea ei tarvitse toteuttaa alusta lähtien. Esimerkiksi graafisia käyttöliittymiä toteutettaessa ohjelmointikielillä on tyypillisesti valmiita toiminnallisuuksia erilaisten valikoiden ja näkymien luomiseen. Iso osa ohjelmoinnista onkin ohjelmointikielen valmiiksi tarjoamien komentojen soveltamista ongelmien ratkaisuissa -- tämä toisaalta vaatii ohjelmointirutiinia, joka kehittyy vain ohjelmoimalla.

Kirjoitettua "koodia" kutsutaan **lähdekoodiksi**. Lähdekoodi koostuu lauseista (statement) ja lausekkeista (expression), joita yleensä voidaan lukea rivi riviltä ylhäältä alaspäin ja vasemmalta oikealle. Esimerkiksi tekstin "Hei maailma" tulostuksessa käytetään Java-ohjelmointikielen valmista komentoa `System.out.println()`, jolle kerrotaan sulkujen sisälle tulostettava teksti.

```java
System.out.println("Hei maailma");
```

Yllä oleva lause on Java-ohjelmointikielen valmiiksi tarjoama komento, jota käytetään merkkijonon tulostamiseen. Komento käytännössä käskee tietokonetta tulostamaan sille sulkeiden sisällä lainausmerkeissä (joita ohjelmoijat kutsuvat usein 'hipsuiksi') annetun merkkijonon. Lauseen loppuun kirjoitetaan puolipiste `;`.

Java-ohjelmat vaativat toimiakseen ohjelmarungon, joka tulee kurssin aikana tutuksi. Vaikket ohjelmarunkoa vielä tunne, voit jo yllä kuvatun tulostuslauseen perusteella arvata seuraavan ohjelman mahdollisen toiminnan.

Alla on kurssin ensimmäinen kyselytehtävä. Kyselytehtäviin vastataan suoraan kurssimateriaalissa.

<quiz id="574acb1a-471b-5b5f-9755-cbbff7aa8b87"></quiz>
