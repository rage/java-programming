---
path: '/osa-3/5-testauksen-alku'
title: 'Pieniä askeleita ohjelmien testaamiseen'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tutustut ohjelmien testaamiseen.
- Tutustut ohjelman toiminnan testaamiseen syötteitä ja tulosteita vertailemalla.

</text-box>

Eräs ohjelmoinnissa tarvittava taito on ohjelmien testaus- ja debuggaustaito, jota tarvitaan virheiden etsimisessä. Yksinkertaisin tapa ohjelmissa olevien virheiden etsimiseen on ns. print-debuggaus, joka tarkoittaa tuloskomennon lisäämistä jokaiselle ohjelman rivillä. Tällöin ohjelman suorittaminen tulostaa viestejä, joiden perusteella voidaan tarkastella ohjelman toimintaa.

Tarkastellaan alla olevaa ohjelmaa, jota käytetään ei-negatiivisten lukujen keskiarvon laskemiseen.

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

Mikäli ohjelmassa olisi virhe, print-debuggauksella ohjelman toimintaa voisi purkaa lisäämällä print-komentoja sopiviin kohtiin. Alla olevassa esimerkissä on eräs mahdollinen esimerkki print-debukkauskomentoja sisältävästä ohjelmasta.


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


<quiznator id="5c3740e43972a914740fe479"></quiznator>


## Alkuaskeleet ohjelmien automaattiseen testaukseen

Kurssimateriaalin seitsemännessä osassa luodaan omia automaattisia testejä, joiden avulla voi testata ohjelman toimintaa. Aloitamme nyt polun automaattisten testien kirjoittamista kohti -- harjoittelemme ensin syötteiden ja tulosteiden vertaamiseen perustuvaa testaustapaa. Tässä testaustavassa ohjelmalle annetaan syöte, jonka jälkeen tarkastetaan onko tulostus odotettu.


Pääset tutustumaan siis siihen, miten testit toimivat. Tässä osassa kirjoitat ohjelmallesi syötteen ja odotetun tuloksen, ja harjoitteluun käytetty työväline luo `testimetodin`, eli metodin, jota ohjelman testaamiseen voisi käyttää (palaamme näiden käyttöön tarkemmin materiaalin seitsemännessä osassa).


Kohta käyttämäsi työväline toimii seuraavalla tavalla:


- Kun luot testiä, keksi testille kuvaava `Nimi`. Esimerkiksi testi, joka testaa, että ohjelma tulostaa "Mau!" syötteellä "kissa", voisi olla nimeltään "tulostaMauJosSyoteOnKissa".
- Päätä tämän jälkeen testin `Tyyppi`. Tähän tarjotaan kolme vaihtoehtoa: `Contains` tarkoittaa, että ohjelman tulostuksen täytyy sisältää antamasi tulos, `Does not contain` tarkoittaa, että se ei saa sisältää antamaasi tulosta, ja `Equals` tarkoittaa sitä, että ohjelman tulostuksen täytyy olla tarkalleen sama kuin antamasi tulos, merkkejä ja rivinvaihtoja myöten.
- Kirjota tämän jälkeen syöte. Syöte kirjoitetaan merkkijonona. Rivinvaihdot syötteessä merkitään kenoviivalla ja n-kirjaimella. Esimerkiksi kolme riviä sisältävä syöte, jossa ensimmäisellä rivillä on merkkijono "hei", toisella "maailma", ja kolmannella "loppu", kirjoitetaan muodossa `hei\nmaailma\nloppu\n`.
- Kirjoita lopulta odotettu tulos. Tulos kirjoitetaan merkkijonona. Mikäli tuloksessa pitäisi olla useampia rivejä, merkitään rivien erotukset rivinvaihdoilla, eli `\n`-merkillä.


Antamistasi syötteestä, tuloksesta, nimestä ja tyypistä generoitu testi voi näyttää vaikkapa seuraavalta -- testin sisältämät "taikasanat" tulevat kurssin edetessä tutuksi:


```java
@Test
public void tulostaMauJosSyoteOnKissa() {
    Submission.suorita(new Scanner(“kissa”));
    // tässä ohjelmasi tulostus tallennetaan
    // merkkijonoon metodinTulostus
    String metodinTulostus = io.getSysOut();

    String viesti = “Kun syöte oli: ‘kissa’, tulostus oli: ‘“ + metodinTulostus + “‘, mutta se ei ollut: ‘Mau!’.”;

    // viesti näytetään tehtävän tekijälle,
    // jos ohjelma ei mene testistä läpi
    assertEquals(viesti, “Mau!”, metodinTulostus);
    // komento assertEquals testaa sitä, että
    // metodinTulostus on tarkalleen “Mau!”
}
```


## Lukujen tarkkailua

Alla olevassa testien kirjoittamisen harjoitteluun tarkoitetussa tehtävässä tarkkaillaan käyttäjän syöttämää lukua ja tulostetaan siihen liittyvä sopiva viesti.

Lähdekoodin kohdalla on valmis koodi. Keksi koodia vastaava tehtävänanto -- eli ohjeistus, joka johtaisi koodin tuottamiseen. Kirjoita tehtäväanto lomakkeen kohtaan `Tehtävänanto`. Kirjoita tämän jälkeen testejä kohtaan `Testit`. Lisää lopuksi myös tehtävälle tägejä, eli tehtävää kuvaavia avainsanoja.


Alla on annettuna kaksi testiä:

Testi 1:

- Nimi: `yksiTulostaaPositiivinen`
- Tyyppi: `Equals`
- Syöte: `1\n`
- Tulos: `positiivinen\n`

Testi 2:

- Nimi: `negatiivinenEiOlePositiivinen`
- Tyyppi: `Does not contain`
- Syöte: `-1\n`
- Tulos: `positiivinen\n`

Käytä tehtävässä edellisiä testejä ja keksi ainakin muutama testi lisää. Mieti minkälaisilla syötteillä saisit testattua ohjelmaasi mahdollisimman hyvin. Tee ainakin kaksi erillistä testiä -- useamman testin lisääminen tapahtuu napilla `Lisää kenttä`!

<crowdsorcerer id='21'></crowdsorcerer>


## Fibonacci

Alla on annettuna ohjelma, joka tulostaa Fibonaccin lukujonon käyttäjän antamaan syötteeseen asti. Lue Fibonaccin lukujonosta lisää <a href="https://fi.wikipedia.org/wiki/Fibonaccin_lukujono">Wikipediasta</a>.

Lähdekoodin kohdalla on valmis malliratkaisu. Keksi sitä vastaava tehtävänanto ja kirjoita se lomakkeeseen. Kirjoita tämän jälkeen testejä kohtaan `Testit`. Lisää lopuksi myös tehtävälle tägejä, eli tehtävää kuvaavia avainsanoja.


<crowdsorcerer id='22'></crowdsorcerer>

