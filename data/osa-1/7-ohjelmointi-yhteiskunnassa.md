---
path: '/osa-1/7-ohjelmointi-yhteiskunnassa'
title: 'Ohjelmointi yhteiskunnassa'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät muutamia esimerkkejä siitä, miten ohjelmistot vaikuttavat yhteiskuntamme toimintaan.

</text-box>


TODO: kevennä?

TODO: siirrä aloituskysely johdantoon


<quiznator id="5c12b7f263de8e5db0cf8b8e"></quiznator>

Ohjelmoinnin opiskelua aloitteleva tietää harvoin kuinka riippuvainen yhteiskuntamme on ohjelmoijien tuottamista ohjelmistoista. Ilman ohjelmistoja yhteydenpito, kaupankäynti, matkustaminen ja niin edelleen olisi monimutkaisempaa. Puhelimet eivät toimisi tai niitä olisi vain muutamia, verkkopankkeja saatikka pankki- tai luottokortteja ei olisi, matkojen varaaminen ja henkilöasiakirjojen käyttäminen ei onnistuisi verkon yli, ja terveydenhuoltopalveluissa sähköisistä palveluista kuten e-reseptistä tai potilastietojen nopeasta siirtämisestä osastojen ja sairaaloiden välillä voisi vain unelmoida. Wikipediaa tai hakukoneita ei myöskään olisi ja tiedon hakeminen tapahtuisi sana- ja tietokirjoista.

Digitalisaatio -- eli digitaalisen tietotekniikan yleistyminen arkielämässä -- muuttaa ihmisten arkea. Fyysiset tuotteet muuttuvat sähköisiksi, jolloin esimerkiksi uutisten jakaminen on nopeampaa ja edullisempaa. Digitaaliset palvelut eivät ole paikkasidonnaisia, jolloin niitä voidaan viedä kansainvälisille markkinoille ja toisaalta digitaalista työtä tekevien työntekijöiden ei tarvitse aina olla fyysisesti samassa paikassa. Perinteistä tuotantoa voidaan myös tehostaa, sillä erilaiset digitaaliset seurantamekanismit kuten varastonhallinta ja niistä kertyvän tiedon analyysi mahdollistavat tuotannon kohdentamisen tarveperustaisesti.

Tämä on johtanut tilanteeseen, missä työnkuvia katoaa ja työnkuvia syntyy. Samalla tieto siitä, mitä digitalisoituvien tehtävien suorittaminen vaatii katoaa järjestelmien syövereihin. Joitakin vuosikymmeniä sitten puhelujen yhdistämiseen tarvittiin ihmistä, kun nykyään puhelujen yhdistämisen hoitavat ohjelmistot. Joitakin vuosikymmeniä sitten toisaalta mobiilisovellusten kehittäjiä, data-analyytikkoja tai vaikkapa bloggaajia ei ollut lainkaan. Palveluiden muuttuminen sähköiseksi myös piilottaa niihin liittyvää monimutkaisuutta. Kun olet esimerkiksi lähdössä lentomatkalle ja teet lähtöselvitystä verkossa olevalla lomakkeella, lomakkeen lähettäminen aiheuttaa kymmenten järjestelmien välisen vuoropuhelun. Nimeesi ja henkilötietoihisi liittyvät merkinnät käydään läpi, passisi tilanne ja mahdollisten viisumien voimassaolo tarkistetaan, lentosi tilanne tarkastetaan, aiemmat lentosi käydään läpi, paikkavarauksesi menee paikkavarauksia hallinnoivaan järjestelmään, lentoyhtiöihin liittyvät kanta-asiakkuutesi käydään läpi, lentokoneeseen tankattavan polttoaineen määrää päivitetään ja niin edelleen.

Vaikka digitalisaatio voi tehostaa toimintaa muunmuassa vapauttamalla työntekijän helposti automatisoitavista tehtävistä, on digitalisaatiossa myös haasteita. Sähköisten järjestelmien käytön oppiminen ei ole aina helppoa ja työnkuvien muutoksen vaatima jatkuva uudelleenkouluttautuminen on uudenlainen koulutukseen liittyvä haaste. Innokkuus sähköisten palveluiden käyttöönotossa vähentää myös perinteisiä palveluita -- kukapa ei esimerkiksi olisi kuullut pankkipalveluiden digitalisoitumisen ja kassapalveluiden vähentymisen sivuvaikutuksena tuomista pitkistä pankkijonoista. Sähköiset palvelut ovat ihmisten tekemiä ja harvoin virheettömiä. Harva ei ole kuullut huonosti toimivista ohjelmistoista.

<quiznator id="5c1368623cc3ec11bcd773fa"></quiznator>

Tietojenkäsittelytieteilijät ja laajemmin ohjelmistotekniikan ammattilaiset ovat digitaalisten palveluiden arkkitehtejä. Vastuullamme on näiden järjestelmien toteutus siten, että ne toimivat mahdollisimman hyvin järjestelmien kohdeyleisölle -- myös niille, jotka eivät ole tottuneet käyttämään vastaavia järjestelmiä. Järjestelmien loppukäyttäjät harvoin tietävät kuka tai ketkä ovat toteuttaneet kyseiset järjestelmät -- harva on kuullut esimerkiksi [Margaret Hamilton](<https://en.wikipedia.org/wiki/Margaret_Hamilton_(scientist)>)ista, joka yhdessä ryhmänsä kanssa kirjoitti ihmisiä kuuhun vieneen ohjelman.

![Margaret Hamilton työn parissa](./margeret-action.jpg)

Ohjelmointia voidaan ajatella nykyajan käsityöläistaitona, ja ohjelmistoalan työläisiä on maailmassa kymmeniä miljoonia. Tälle modernille käsityöläistaidolle on myös kysyntää -- esimerkiksi Tivi uutisoi vuonna 2016 aiheesta otsikolla "[It-osaaja pääsee töihin vaikka heti](http://www.tivi.fi/Kaikki_uutiset/it-osaaja-paasee-toihin-vaikka-heti-6555159)". Ohjelmistojen ja digitaalisten järjestelmien ymmärryksen tarve näkyy myös nykyään kaikkialla -- ohjelmoinnin alkeita opetetaan jo peruskoulussa, ja samalla esimerkiksi moderni tiede hyödyntää enemmän ja enemmän tiedon analysoinnissa käytettäviä ohjelmistoja sekä ohjelmistoalan innovaatioita. Esimerkiksi meteorologit, fyysikot ja kemistit käyttävät ohjelmistoja ja ohjelmoivat työssään. Myös kasvatustiede ja opetusala hyödyntää digitalisaation tuomia mahdollisuuksia yhä enemmän. Nykyään on oikeastaan vaikeampaa keksiä ammatteja, joihin ohjelmistot ja digitalisaatio ei vaikuta, kuin ammatteja, joihin ohjelmistot ja digitalisaatio vaikuttaa.

Tällä kurssilla otat ensiaskeleet ohjelmointiin. Opit kirjoittamaan ohjelmia ja ymmärtämään niiden toimintaa. Tulet jäsentämään ohjelmissa olevia osakokonaisuuksia pieniksi paloiksi ja esittämään ohjelmissa esiintyviä käsitteitä yhteistoiminnassa toimivina palasina. Käsitteet kuten _muuttuja_, _ehtolause_, _toistolause_, _luokka_ ja _olio_ ovat kurssin lopuksi hyvin tuttuja, ja tiedät myös hieman algoritmiikasta sekä ohjelmistojen testaamisesta. Kurssin jälkeen saatat myös ajatella yhteiskunnan palveluita ohjelmoijan näkökulmasta ja pohdit niiden toimintaa (tai toimimattomuutta) ohjelmistojen tarjoamien mahdollisuuksien ja rajoitteiden näkökulmasta.

Kurssin jälkeen yksinkertainenkin ohjeistus kuten  "_Osta kaksi maitoa. Mikäli kaupassa on appelsiineja, osta neljä._" saa uusia sävyjä. Vaikka ihmiselle viesti on selvä, tietokone saattaisi päätyä ostamaan neljä maitoa.

Kurssi on tarkoitettu ohjelmoinnin alkeiskurssiksi kohdeyleisöä sen laajemmin rajoittamatta. Kurssi on samalla yksi ensiaskelista tietojenkäsittelytieteen opintoihin. Kurssin jälkeen ja kurssin aikaan kannattaa harkita muunmuassa kursseja Tietokantojen perusteet, Ohjelmistotekniikan menetelmät, Tietorakenteet ja algoritmit, sekä Johdatus yliopistomatematiikkaan.


## Yhteenveto

TODO: kirjoita uudestaan

TODO: uusi kysely -- Vastaa alla olevaan kyselyyn kun olet valmis ensimmäisen osan tehtävien kanssa.


<quiznator id="5c12b7f263de8e5db0cf8b93"></quiznator>
