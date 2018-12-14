---
path: '/osa-1/1-johdanto'
title: 'Johdanto'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät muutamia esimerkkejä siitä, miten ohjelmistot vaikuttavat yhteiskuntamme toimintaan.
- Tunnet käsitteet ohjelma, ohjelmointikieli ja lähdekoodi, ja tiedät, että lähdekoodi koostuu lauseista ja lausekkeista.
- Tiedät pääpiirteittäin ohjelmien suorittamiseen liittyvät askeleet.

</text-box>

<quiznator id="5c12b7f263de8e5db0cf8b8e"></quiznator>

Ohjelmoinnin opiskelua harkitseva tietää harvoin kuinka riippuvainen yhteiskuntamme on ohjelmoijien tuottamista ohjelmistoista. Ilman ohjelmistoja yhteydenpito, kaupankäynti, matkustaminen ja niin edelleen olisi monimutkaisempaa. Puhelimet eivät toimisi tai niitä olisi vain muutamia, verkkopankkeja saatikka pankki- tai luottokortteja ei olisi, matkojen varaaminen ja henkilöasiakirjojen käyttäminen ei onnistuisi verkon yli, ja terveydenhuoltopalveluissa sähköisistä palveluista kuten e-reseptistä tai potilastietojen nopeasta siirtämisestä osastojen ja sairaaloiden välillä voisi vain unelmoida. Wikipediaa tai hakukoneita ei myöskään olisi ja tiedon hakeminen tapahtuisi sana- ja tietokirjoista.

Digitalisaatio -- eli digitaalisen tietotekniikan yleistyminen arkielämässä -- muuttaa ihmisten arkea. Fyysiset tuotteet muuttuvat sähköisiksi, jolloin esimerkiksi uutisten jakaminen on nopeampaa ja edullisempaa. Digitaaliset palvelut eivät ole paikkasidonnaisia, jolloin niitä voidaan viedä kansainvälisille markkinoille ja toisaalta digitaalista työtä tekevien työntekijöiden ei tarvitse aina olla fyysisesti samassa paikassa. Perinteistä tuotantoa voidaan myös tehostaa, sillä erilaiset digitaaliset seurantamekanismit kuten varastonhallinta ja niistä kertyvän tiedon analyysi mahdollistavat tuotannon kohdentamisen tarveperustaisesti.

Tämä on johtanut tilanteeseen, missä työnkuvia katoaa ja työnkuvia syntyy. Samalla tieto siitä, mitä digitalisoituvien tehtävien suorittaminen vaatii katoaa järjestelmien syövereihin. Joitakin vuosikymmeniä sitten puhelujen yhdistämiseen tarvittiin ihmistä, kun nykyään puhelujen yhdistämisen hoitavat ohjelmistot. Joitakin vuosikymmeniä sitten toisaalta mobiilisovellusten kehittäjiä, data-analyytikkoja tai vaikkapa bloggaajia ei ollut lainkaan. Palveluiden muuttuminen sähköiseksi myös piilottaa niihin liittyvää monimutkaisuutta. Kun olet esimerkiksi lähdössä lentomatkalle ja teet lähtöselvitystä verkossa olevalla lomakkeella, lomakkeen lähettäminen aiheuttaa kymmenten järjestelmien välisen vuoropuhelun. Nimeesi ja henkilötietoihisi liittyvät merkinnät käydään läpi, passisi tilanne ja mahdollisten viisumien voimassaolo tarkistetaan, lentosi tilanne tarkastetaan, aiemmat lentosi käydään läpi, paikkavarauksesi menee paikkavarauksia hallinnoivaan järjestelmään, lentoyhtiöihin liittyvät kanta-asiakkuutesi käydään läpi, lentokoneeseen tankattavan polttoaineen määrää päivitetään ja niin edelleen.

Vaikka digitalisaatio voi tehostaa toimintaa muunmuassa vapauttamalla työntekijän helposti automatisoitavista tehtävistä, on digitalisaatiossa myös haasteita. Sähköisten järjestelmien käytön oppiminen ei ole aina helppoa ja työnkuvien muutoksen vaatima jatkuva uudelleenkouluttautuminen on uudenlainen koulutukseen liittyvä haaste. Innokkuus sähköisten palveluiden käyttöönotossa vähentää myös perinteisiä palveluita -- kukapa ei esimerkiksi olisi kuullut pankkipalveluiden digitalisoitumisen ja kassapalveluiden vähentymisen sivuvaikutuksena tuomista pitkistä pankkijonoista. Sähköiset palvelut ovat ihmisten tekemiä ja harvoin virheettömiä. Harva ei ole kuullut huonosti toimivista ohjelmistoista.

<quiznator id="5c1368623cc3ec11bcd773fa"></quiznator>


Tietojenkäsittelytieteilijät ja laajemmin ohjelmistotekniikan ammattilaiset ovat digitaalisten palveluiden arkkitehtejä. Vastuullamme on näiden järjestelmien toteutus siten, että ne toimivat mahdollisimman hyvin järjestelmien kohdeyleisölle -- myös niille, jotka eivät ole tottuneet käyttämään vastaavia järjestelmiä. Järjestelmien loppukäyttäjät harvoin tietävät kuka tai ketkä ovat toteuttaneet kyseiset järjestelmät -- harva on kuullut esimerkiksi [Margaret Hamilton](<https://en.wikipedia.org/wiki/Margaret_Hamilton_(scientist)>)ista, joka kirjoitti ihmisiä kuuhun vieneen ohjelman.

![Margaret Hamilton työn parissa](./margeret-action.jpg)

Ohjelmointia voidaan ajatella nykyajan käsityöläistaitona, ja ohjelmistoalan työläisiä on maailmassa kymmeniä miljoonia. Tälle modernille käsityöläistaidolle on myös kysyntää -- esimerkiksi Tivi uutisoi vuonna 2016 aiheesta otsikolla "[It-osaaja pääsee töihin vaikka heti](http://www.tivi.fi/Kaikki_uutiset/it-osaaja-paasee-toihin-vaikka-heti-6555159)". Ohjelmistojen ja digitaalisten järjestelmien ymmärryksen tarve näkyy myös nykyään kaikkialla -- ohjelmoinnin alkeita opetetaan jo peruskoulussa, ja samalla esimerkiksi moderni tiede hyödyntää enemmän ja enemmän tiedon analysoinnissa käytettäviä ohjelmistoja sekä ohjelmistoalan innovaatioita. Esimerkiksi meteorologit, fyysikot ja kemistit käyttävät ohjelmistoja ja ohjelmoivat työssään. Myös kasvatustiede ja opetusala hyödyntää digitalisaation tuomia mahdollisuuksia yhä enemmän. Nykyään on oikeastaan vaikeampaa keksiä ammatteja, joihin ohjelmistot ja digitalisaatio ei vaikuta, kuin ammatteja, joihin ohjelmistot ja digitalisaatio vaikuttaa.

Tällä kurssilla otat ensiaskeleet ohjelmointiin. Opit kirjoittamaan ohjelmia ja ymmärtämään niiden toimintaa. Tulet jäsentämään ohjelmissa olevia osakokonaisuuksia pieniksi paloiksi ja esittämään ohjelmissa esiintyviä käsitteitä yhteistoiminnassa toimivina palasina. Käsitteet kuten _muuttuja_, _ehtolause_, _toistolause_, _luokka_ ja _olio_ ovat kurssin lopuksi hyvin tuttuja, ja tiedät myös hieman algoritmiikasta sekä ohjelmistojen testaamisesta. Kurssin jälkeen saatat myös ajatella yhteiskunnan palveluita ohjelmoijan näkökulmasta ja pohdit niiden toimintaa (tai toimimattomuutta) ohjelmistojen tarjoamien mahdollisuuksien ja rajoitteiden näkökulmasta.

Kurssin jälkeen yksinkertainenkin ohjeistus kuten  "_Osta kaksi maitoa. Mikäli kaupassa on appelsiineja, osta neljä._" saa uusia sävyjä. Vaikka ihmiselle viesti on selvä, tietokone saattaisi päätyä ostamaan neljä maitoa.

Kurssi on tarkoitettu ohjelmoinnin alkeiskurssiksi kohdeyleisöä sen laajemmin rajoittamatta. Kurssi on samalla yksi ensiaskelista tietojenkäsittelytieteen opintoihin. Kurssin jälkeen ja kurssin aikaan kannattaa harkita muunmuassa kursseja Tietokantojen perusteet, Ohjelmistotekniikan menetelmät, Tietorakenteet ja algoritmit, sekä Johdatus yliopistomatematiikkaan.


## Ohjelmoija kirjoittaa lähdekoodia

Ohjelmointi on ohjelmistojen suunnittelua ja toteutusta. Toteutettava toiminnallisuus määräytyy ohjelmiston tilaajien ja käyttäjien toiveiden ja vaatimusten perusteella. Ohjelmia toteutetaan (eli kirjoitetaan tai "koodataan") tyypillisesti ihmisten kirjoitettavaksi ja luettavaksi tarkoitetulla ohjelmointikielellä. Ohjelmointikieliä on satoja ja tällä kurssilla keskitytään näistä kielistä yhteen. Kurssin kielenä on [Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>), joka on yksi maailman eniten käytetyistä ohjelmointikielistä. Javaa tuntevan on myös helppo oppia uusia ohjelmointikieliä.

Ohjelmointikielet kuten Java tarjoavat suuren määrän valmiita komentoja, joita ohjelmoija käyttää ohjelmistoja luodessa. Tämä helpottaa ohjelmointia, sillä aivan kaikkea ei tarvitse toteuttaa alusta lähtien. Esimerkiksi graafisia käyttöliittymiä toteutettaessa ohjelmointikielillä on tyypillisesti valmiita toiminnallisuuksia erilaisten valikoiden ja näkymien luomiseen. Iso osa ohjelmoinnista onkin ohjelmointikielen valmiiksi tarjoamien komentojen soveltamista ongelmien ratkaisuissa.

Kirjoitettua "koodia" kutsutaan **lähdekoodiksi**. Lähdekoodi koostuu lauseista (statement) ja lausekkeista (expression), joita yleensä voidaan lukea rivi riviltä ylhäältä alaspäin ja vasemmalta oikealle. Esimerkiksi tekstin "Hei maailma" tulostuksessa käytetään Java-ohjelmointikielellä valmista komentoa `System.out.println()`, jolle kerrotaan sulkujen sisälle tulostettava teksti.

```java
System.out.println("Hei maailma");
```

Lause `System.out.println` on Java-ohjelmointikielen valmiiksi tarjoama komento, jota käytetään merkkijonon tulostamiseen. Komento käytännössä käskee tietokonetta tulostamaan sille sulkeiden sisällä hipsuissa annetun merkkijonon. Komennon pääte `ln` on lyhenne sanasta _line_, eli komentoa käyttämällä merkkijonon jälkeen tulostetaan myös rivinvaihto. Lauseen loppuun kirjoitetaan puolipiste `;`.

Java-ohjelmat vaativat toimiakseen kurssin aikana tutuksi tulevan rungon. Ohjelman runko on seuraavanlainen.

```java
public class Esimerkki {
    public static void main(String[] args) {
        // Tänne kirjoitetaan ohjelman käyttämät lauseet
        System.out.println("Tulostettava teksti");
    }
}
```

Yhdenkin merkin puuttuminen voi johtaa ohjelmoidessa virhetilanteeseen. Ohjelmoija saattaa vahingossa esimerkiksi syöttää pilkun pisteen sijaan, kirjoittaa vaikkapa `printin` sanan `println` sijaan, jättää tulostettavasta merkkijonosta hipsut pois, tai unohtaa komentoa seuraavan puolipisteen. Jokainen edelläolevista esimerkeistä johtaa virhetilanteeseen, missä ohjelman suoritus ei onnistu.


<quiznator id="5c136a4ea50dbe1223d1981d"></quiznator>


## Tietokone suorittaa ohjelman

Kun ohjelmoija haluaa kokeilla toimiiko hänen kirjoittamansa lähdekoodi, hän suorittaa ohjelman. Ohjelman suorittamiseen tarvittavat askeleet riippuvat käytetystä ohjelmointikielestä, mutta pääpiirteisesti askeleita on kaksi. Ensin lähdekoodi käännetään konekieliseen muotoon, jonka jälkeen ohjelma suoritetaan.

Lähdekoodin kääntäminen konekieliseen muotoon tapahtuu ohjelmointikielikohtaisella kääntäjällä, joka on myös ohjelma. Tämän jälkeen konekielinen ohjelma käynnistetään, eli siinä olevat käskyt suoritetaan yksi kerrallaan tietokoneen sisällä olevalla konekielisten käskyjen suorittamiseen erikoistuneella yksiköllä eli prosessorilla.

Ohjelman suorittamiseen liittyvät askeleet ovat ohjelmointikielikohtaisia. Edellä kuvattu lähdekoodin kääntäminen konekieliseen muotoon tapahtuu esimerkiksi C-ohjelmointikielessä, kun taas Java-ohjelmointikielessä ohjelma käännetään Java-ohjelmointikielen tavukoodiksi, jonka Java-kielen tulkki sitten suorittaa. Jotkut ohjelmointikielet kuten PHP ja Python ovat toisaalta sellaisia, että niitä ei käännetä lainkaan, vaan vaan ohjelmointikielen tulkki suorittaa komennot yksi kerrallaan.

Nämä askeleet vaikuttavat siihen, miten ja milloin ohjelmien virheet ilmenevät. Mikäli ohjelma käännetään ennen suoritusta, kääntämiseen käytettävä ohjelma voi etsiä tyypillisiä virheitä. Mikäli ohjelma tulkataan ilman käännöstä, virheet nousevat esiin vasta suorituksen aikana tai suorituksen epäonnistuessa. Tämä vaikuttaa myös ohjelmoinnissa käytetyn ohjelmointiympäristön tarjoamiin vinkkeihin -- jotkut ohjelmointiympäristöt kääntävät kirjoitettavaa ohjelmaa jatkuvasti konekielelle, jolloin ohjelmoija saa palautetta ohjelmassa olevista virheistä heti. Toisissa ohjelmointikielissä tätä mahdollisuutta taas ei ole, jolloin ohjelmointiympäristöjen tarjoamat vinkit ovat vähäisemmät.

Mitä tahansa ohjelmia voidaan kirjoittaa tekstieditorissa, joka ei muotoile tekstiä. Tällaisia tekstieditoreita ovat esimerkiksi [Notepad](https://en.wikipedia.org/wiki/Microsoft_Notepad). Ohjelmia kirjoitetaan kuitenkin tyypillisemmin ohjelmointiympäristöissä, jotka ovat ohjelmien kirjoittamisen tukemiseen erikoistuneita ohjelmia. Nämä mahdollistavat muunmuassa käännösvirheiden automaatisen näyttämisen käyttäjälle sekä ohjelman suorittamisen ohjelmointiympäristön sisällä. Tällä kurssilla käytetään ohjelmointiympäristöä nimeltä [NetBeans](https://en.wikipedia.org/wiki/NetBeans), jota varten on kehitetty tehtävien lataamiseen, testaamiseen ja lähettämiseen käytettävä liitännäinen.

Seuraavassa osassa aloitamme ohjelmoinnin ohjelmointiympäristössä.
