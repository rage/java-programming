---
path: '/osa-3/1-virheiden-etsimisesta'
title: 'Virheiden etsimisestä'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- TODO

</text-box>


Olemme tähän mennessä harjoitelleet ohjelmointikielen perusrakenteiden kuten muuttujien, ehtolauseiden, toistolauseiden ja metodien käyttöä. Tutustutaan seuraavaksi lyhyesti ohjelmien ymmärrettävyyteen vaikuttaviin tekijöihin sekä virheiden etsimiseen.

## Ohjelmoija sokeutuu koodilleen

Ohjelmoija sokeutuu omalle koodilleen. Tutustutaan tähän efektiin alla olevan lyhyen videon avulla. Laske alla olevalta videolta kuinka monta kertaa valkopaitaiset pelaajat syöttävät palloa toisilleen. Videossa on mukana englanninkieliset ohjeistukset.

<youtube id="Ahg6qcgoay4"></youtube>

Videossa tapahtuu jotain muutakin, mutta tämä saattaa jäädä aluksi huomaamatta. Tätä efektiä kutsutaan tahattomaksi sokeudeksi (inattentional blindness). Tahaton sokeus selittyy sillä, että keskittyessämme tiettyyn tehtävään, aivomme pyrkivät suodattamaan tehtävän kannalta epäoleellista tietoa. Emme kuitenkaan aina tiedä -- esimerkiksi opiskellessamme -- mikä osa tiedosta on oleellista ja mikä osa epäoleellista, mutta keskittyminen tiettyyn osaan opiskelutehtävää voi silti johtaa tilanteeseen, missä osa relevantista osasta suodattuu pois.

Onneksi kuitenkin tehtävään harjaantuminen vähentää tahattoman sokeuden ilmentymistä -- toisin sanoen, harjoittelu kehittää oleellisten ja epäoleellisten asioiden erottelukykyä.

Ohjelmoinnin harjoittelun kannalta tahaton sokeus näkyy muunmuassa siinä, että tiettyyn ohjelman osaan keskittyminen vie huomiota muista osista, jotka saattavat mielessä tällöin näyttää oikeellisilta vaikka niissä olisi virhe. Esimerkiksi ohjelman tulostuksen oikeellisuutta tarkasteltaessa ohjelmoija saattaa keskittyä tulostuslauseisiin ja vahingossa jättää osan logiikasta huomioimatta.

Vastaavasti toistolauseen sisältävässä ohjelmassa olevaa virhettä etsiessä ohjelmoija saattaa keskittyä monimutkaisimpaan asiaan ensin, vaikka virhe on täysin muualla. Esimerkkinä alla oleva käyttäjän syötteiden keskiarvon laskemiseen tarkoitettu ohjelma, jossa on virhe -- virheen etsinnässä tyypillisesti keskitytään ensin toistolauseeseen.

```java
Scanner lukija = new Scanner(System.in);
int lukuja = 0;
int summa = 0;

while (true) {
    System.out.println("Syötä luku, negatiivinen luku lopettaa");
    int luku = Integer.valueOf(lukija.nextLine());
    if (luku < 0) {
        break;
    }

    lukuja = lukuja + 1;
    summa = summa + luku;
}

if (summa == 0) {
    System.out.println("Lukujen keskiarvoa ei voitu laskea.");
} else {
    System.out.println("Lukujen keskiarvo: " + (1.0 * summa / lukuja));
}
```

<quiznator id="5c3740e43972a914740fe479"></quiznator>

Tahaton sokeus on asia, jota ei voi varsinaisesti kytkeä pois päältä. Ohjelmoija voi kuitenkin muutamien kikkojen avulla vähentää sen esiintymistä -- näistä ensimmäinen on taukojen pitäminen, joka luonnollisesti vaatii työn ajoissa aloittamisen. Lisäksi esimerkiksi koodin kommentointi, nimentä ja "debug"-tulosteet auttavat myös.


## Lähdekoodin kommentointi

Kommenteilla on useita käyttötarkoituksia, joista yksi on ohjelman toiminnallisuuden itselleen selittämiseen esimerkiksi virhettä etsittäessä. Alla melko yksinkertaisen ohjelman suoritus on kuvattu auki kommentein.

```java
/*
Tulostaa luvut kymmenestä yhteen. Jokainen
luku tulostetaan omalle rivilleen.
*/

// Luodaan kokonaislukutyyppinen muuttuja nimeltä
// luku, johon asetetaan arvo 10.
int luku = 10;

// Toistolauseen lohkon suoritusta jatketaan kunnes
// muuttujan luku arvo on nolla tai pienempi kuin nolla.
// Suoritus ei lopu _heti_ kun muuttujaan luku asetetaan
// arvo nolla, vaan vasta kun toistolauseen ehtolauseke
// evaluoidaan seuraavan kerran. Tämä tapahtuu aina lohkon
// suorituksen jälkeen.
while (luku > 0) {
    // tulostetaan muuttujassa luku oleva arvo sekä rivinvaihto
    System.out.println(luku);
    // vähennetään yksi luku-muuttujan arvosta
    luku = luku - 1;
}
```

Kommentit eivät vaikuta ohjelman suoritukseen, eli ohjelma toimii kommenttien kanssa täysin samalla tavalla kuin ilman kommentteja.

Edellä käytetty ohjelmoinnin opetteluun tarkoitettu kommentointityyli on toistaalta ohjelmistokehityksene kelpaamaton hyvin raskas. Ohjelmistoja rakennettaessa pyritään siihen, että **lähdekoodi kommentoi itse itsensä**. Tämä tarkoittaa sitä, että ohjelman toiminnallisuus tulee ilmi luokkien, metodien ja muuttujien nimistä.

Esimerkki voidaan "kommentoida" kapseloimalla ohjelmakoodi sopivasti nimettyn metodin sisään. Alla on kaksi esimerkkiä yllä olevan koodin kapseloivista metodeista -- toinen metodeista on hieman yleiskäyttöisempi kuin toinen. Toisaalta, jälkimmäisessä metodissa oletetaan, että käyttäjä tietää kumpaan parametreista asetetaan isompi ja kumpaan pienempi luku.


```java
public static void tulostaLuvutKymmenestaYhteen() {
    int luku = 10;
    while (luku > 0) {
        System.out.println(luku);
        luku = luku - 1;
    }
}
```

```java
public static void tulostaLuvutIsoimmastaPienimpaan(int mista, int mihin) {
    while (mista >= mihin) {
        System.out.println(mista);
        mista = mista - 1;
    }
}
```

## Virheiden etsintä print-debuggauksella

Eräs ohjelmoinnissa tarvittava taito on testaus- ja debuggaustaito, jota käytetään virheiden etsimisessä. Yksinkertaisin tapa ohjelmissa olevien virheiden etsimiseen on ns. print-debuggaus, joka käytännössä tarkoittaa rivikohtaista viestien lisäämistä. Viestejä käytetään ohjelman suorituksen seuraamiseen, ja viestit voivat sisältää myös ohjelmassa olevien muuttujien arvot.

Tarkastellaan alla olevaa edellisestä kyselystäkin tuttua ohjelmaa, jota käytetään ei-negatiivisten lukujen keskiarvon laskemiseen.

```java
Scanner lukija = new Scanner(System.in);
int lukuja = 0;
int summa = 0;

while (true) {
    System.out.println("Syötä luku, negatiivinen luku lopettaa");
    int luku = Integer.valueOf(lukija.nextLine());
    if (luku < 0) {
        break;
    }

    lukuja = lukuja + 1;
    summa = summa + luku;
}

if (summa == 0) {
    System.out.println("Lukujen keskiarvoa ei voitu laskea.");
} else {
    System.out.println("Lukujen keskiarvo: " + (1.0 * summa / lukuja));
}
```

Mikäli ohjelmassa olisi virhe, print-debuggauksella ohjelman toimintaa voisi purkaa lisäämällä print-komentoja sopiviin kohtiin. Alla olevassa esimerkissä on eräs mahdollinen esimerkki print-debuggauskomentoja sisältävästä ohjelmasta.


```java
Scanner lukija = new Scanner(System.in);
int lukuja = 0;
int summa = 0;

while (true) {
    System.out.println("-- lukuja: " + lukuja + ", summa: " + summa);

    System.out.println("Syötä luku, negatiivinen luku lopettaa");
    int luku = Integer.valueOf(lukija.nextLine());
    System.out.println("-- syötetty luku: " + luku);
    if (luku < 0) {
        System.out.println("-- luku negatiivinen, poistutaan toistolauseesta");
        break;
    }

    lukuja = lukuja + 1;
    summa = summa + luku;
}

System.out.println("-- toistolauseesta poistuttu");
System.out.println("-- lukuja: " + lukuja + ", summa: " + summa);

if (summa == 0) {
    System.out.println("Lukujen keskiarvoa ei voitu laskea.");
} else {
    System.out.println("Lukujen keskiarvo: " + (1.0 * summa / lukuja));
}
```

Kun ohjelman suorittaa useampaan otteeseen sopivilla syötteillä, ohjelmasta löytynee siinä piilevä virhe. Sopivien syötteiden keksiminen on myös oma taitonsa -- tärkeää on pyrkiä tarkastelemaan ns. corner caseja, eli tilanteita, joissa ohjelman suoritus voisi olla poikkeava. Tällaisia tilanteita ovat esimerkiksi tilanne, missä käyttäjä ei syötä yhtään hyväksyttävää lukua, käyttäjä syöttää pelkkiä nollia, tai käyttäjä syöttää hyvin isoja lukuja.


<quiznator id="5c385de6ddb6b814af31d7d0"></quiznator>
