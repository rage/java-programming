---
path: '/osa-6/3-johdatus-ohjelmien-testaamiseen'
title: 'Johdatus ohjelmien testaamiseen'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat kertoa joitakin ohjelmistovirheistä johtuvia ongelmia.
- Tiedät mikä on stack trace, tunnet askeleet virheiden selvittämiseen ja osaat antaa tekstimuotoista testisyötettä Scannerille.
- Tiedät mistä yksikkötestauksessa on kyse ja osaat kirjoittaa yksikkötestejä.
- Tiedät testivetoisen ohjelmistokehitysmenetelmän.

</text-box>


Otetaan seuraavaksi ensiaskeleet ohjelmien testaamiseen.


## Virhetilanteet ja ongelman ratkaiseminen askel kerrallaan

Ohjelmia luodessa niihin päätyy virheitä. Joskus virheet eivät ole niin vakavia, ja aiheuttavat päänvaivaa lähinnä ohjelman käyttäjälle. Joskus toisaalta virheet voivat johtaa hyvinkin vakaviin seurauksiin. Varmaa on joka tapauksessa se, että ohjelmoimaan opetteleva ihminen tekee paljon virheitä.

Virheitä ei kannata missään nimessä pelätä tai välttää, sillä virheitä tekemällä oppii parhaiten. Pyri siis myös välillä rikkomaan työstämääsi ohjelmaa, jolloin pääset tutkimaan virheilmoitusta ja tarkastelemaan kertooko virheilmoitus jotain tekemästäsi virheestä.

<text-box variant='hint' name='Ohjelmistovirhe'>


Osoitteessa <a href="http://sunnyday.mit.edu/accidents/MCO_report.pdf" target="_blank">http://sunnyday.mit.edu/accidents/MCO_report.pdf</a> oleva raportti kuvaa erään hieman vakavamman ohjelmistovirheestä johtuneen tapaturman sekä ohjelmistovirheen.

<br/>

Ohjelmistovirhe liittyi siihen, että käytetty ohjelma odotti, että ohjelmoija käyttäisi <a href="https://fi.wikipedia.org/wiki/Kansainv%C3%A4linen_yksikk%C3%B6j%C3%A4rjestelm%C3%A4" target="_blank">kansainvälistä yksikköjärjestelmää</a> laskuissa (metrit, kilogrammat, ...). Ohjelmoija oli kuitenkin käyttänyt <a href="https://en.wikipedia.org/wiki/English_Engineering_units" target="_blank">amerikkalaista mittajärjestelmää</a> erään järjestelmän osan laskuissa, jolloin satelliitin navigointiin liittynyt automaattinen korjausjärjestelmä ei toiminut oikein.

<br/>

Satelliitti tuhoutui.

</text-box>

Ohjelmien muuttuessa monimutkaisemmiksi, tulee virheiden löytämisestäkin haastavampaa. NetBeansiin integroitu debuggeri voi olla avuksi virheiden löytämisessä. Debuggerin käyttöä on esitelty kurssimateriaaliin upotetuilla videoilla; niiden kertaamisesta ei ole koskaan haittaa.


## Stack trace

Kun ohjelmassa tapahtuu virhe, ohjelma tyypillisesti tulostaa ns. stack tracen, eli niiden metodikutsujen listan, joiden seurauksena virhetilanne syntyi. Stack trace voi näyttää esimerkiksi seuraavalta:

<sample-output>
  Exception in thread "main" ...
      at Ohjelma.main(Ohjelma.java:15)
</sample-output>

Listan alussa kerrotaan minkälainen virhe tapahtui (tässä ...), ja seuraavalla rivillä kerrotaan missä virhe tapahtui. Rivi "at Ohjelma.main(Ohjelma.java:15)" sanoo, että virhe tapahtui Ohjelma.java-tiedoston rivillä 15.

<sample-output>
  at Ohjelma.main(Ohjelma.java:15)
</sample-output>


## Muistilista virheenselvitykseen

Jos koodisi ei toimi etkä tiedä missä on virhe, näillä askeleilla pääset alkuun.

1. Sisennä koodisi oikein ja selvitä, puuttuuko sulkuja.
2. Tarkista ovatko käytetyt muuttujat oikean nimisiä.
3. Testaa ohjelman kulkua erilaisilla syötteillä, ja selvitä minkälaisella syötteellä ohjelma ei toimi halutusti. Jos sait virheen testeistä, testit saattavat myös kertoa käytetyn syötteen.
4. Lisää ohjelmaan tulostuskomentoja, joissa tulostat käytettävien muuttujien arvoja ohjelman suorituksen eri vaiheissa.
5. Tarkista, että kaikki käyttämäsi muuttujat on alustettu. Jos tätä ei ole tehty, seuraa virhe NullPointerException.
6. Jos ohjelmasi aiheuttaa poikkeuksen, kannattaa ehdottomasti kiinnittää huomiota poikkeuksen yhteydessä olevaan <em>stack traceen</em>, eli niiden metodikutsujen listaan, minkä seurauksena poikkeuksen aiheuttanut tilanne syntyi.
7. Opettele käyttämään debuggeria, aiemmin nähdyllä videolla pääsee alkuun.


## Testisyötteen antaminen Scannerille


Ohjelman testaaminen käsin on usein työlästä. Syötteen antaminen on mahdollista automatisoida esimerkiksi syöttämällä Scanner-oliolle luettava merkkijono. Alla on annettu esimerkki siitä, miten ohjelmaa voi testata automaattisesti. Ohjelmassa syötetään ensin viisi merkkijonoa, jonka jälkeen syötetään aiemmin nähty merkkijono. Tämän jälkeen yritetään syöttää vielä uusi merkkijono. Merkkijonoa "kuusi" ei pitäisi esiintyä sanajoukossa.

Testisyötteen voi antaa merkkijonona Scanner-oliolle konstruktorissa. Jokainen testisyötteessä annettava rivinvaihto merkitään merkkijonoon kenoviivan ja n-merkin yhdistelmänä "\n".


```java
String syote = "yksi\n" + "kaksi\n"  +
                "kolme\n" + "nelja\n" +
                "viisi\n" + "yksi\n"  +
                "kuusi\n";

Scanner lukija = new Scanner(syote);

ArrayList<String> luetut = new ArrayList<>();

while (true) {
    System.out.println("Anna syote: ");
    String rivi = lukija.nextLine();
    if (luetut.contains(rivi)) {
        break;
    }

    luetut.add(rivi);
}

System.out.println("Kiitos!");

if (luetut.contains("kuusi")) {
    System.out.println("Joukkoon lisättiin arvo, jota sinne ei olisi pitänyt lisätä.");
}
```

Ohjelma tulostus näyttää vain ohjelman antaman tulostuksen, ei käyttäjän tekemiä komentoja.

<sample-output>

Anna syote:
Anna syote:
Anna syote:
Anna syote:
Anna syote:
Anna syote:
Kiitos!

</sample-output>


Merkkijonon antaminen Scanner-luokan konstruktorille korvaa näppäimistöltä luettavan syötteen. Merkkijonomuuttujan `syote` sisältö siis "simuloi" käyttäjän antamaa syötettä. Rivinvaihto syötteeseen merkitään `\n`:llä. Jokainen yksittäinen rivinvaihtomerkkiin loppuva osa syote-merkkijonossa siis vastaa yhtä `nextLine()`-komentoon annettua syötettä.

Kun haluat testata ohjelmasi toimintaa jälleen käsin, vaihda Scanner-olion konstruktorin parametriksi `System.in`, eli järjestelmän syötevirta. Voit toisaalta halutessasi myös vaihtaa testisyötettä, sillä kyse on merkkijonosta.

Ohjelman toiminnan oikeellisuus tulee edelleen tarkastaa ruudulta. Tulostus voi olla aluksi hieman hämmentävää, sillä automatisoitu syöte ei näy ruudulla ollenkaan. Lopullinen tavoite on automatisoida myös ohjelman tulostuksen oikeellisuden tarkastaminen niin hyvin, että ohjelman testaus ja testituloksen analysointi onnistuu "nappia painamalla". Palaamme aiheeseen myöhemmissä osissa.


## Yksikkötestaus

Edellä esitetty menetelmä automaattiseen testaamiseen missä ohjelmalle syötetyt syötteet muutetaan on varsin kätevä, mutta kuitenkin melko rajoittunut. Isompien ohjelmien testaaminen edellä kuvatulla tavalla on haastavaa. Eräs ratkaisu tähän on yksikkötestaus, missä ohjelman pieniä osia testataan erikseen.

Yksikkötestauksella tarkoitetaan lähdekoodiin kuuluvien yksittäisten osien kuten luokkien ja niiden tarjoamien metodien testaamista.  Luokkien ja metodien rakenteen suunnittelussa käytettävän ohjesäännön -- jokaisella metodilla ja luokalla tulee olla yksi selkeä vastuu -- noudattamisen tai siitä poikkeamisen huomaa testejä kirjoittaessa. Mitä useampi vastuu metodilla on, sitä monimutkaisempi testi on. Jos laaja sovellus on kirjoitettu yksittäiseen metodiin, on testien kirjoittaminen sitä varten erittäin haastavaa ellei jopa mahdotonta. Vastaavasti, jos sovellus on pilkottu selkeisiin luokkiin ja metodeihin, on testienkin kirjoittaminen suoraviivaista.

Testien kirjoittamisessa hyödynnetään tyypillisesti valmiita yksikkötestauskirjastoja, jotka tarjoavat metodeja ja apuluokkia testien kirjoittamiseen. Javassa käytetyin yksikkötestauskirjasto on <a href="http://junit.org/" target="_blank" rel="noopener">JUnit</a>, johon löytyy myös tuki lähes kaikista ohjelmointiympäristöistä. Esimerkiksi NetBeans osaa automaattisesti etsiä JUnit-testejä projektista -- jos testejä löytyy, ne näytetään projektin alla Test Packages -kansiossa.

<br/>

Tarkastellaan yksikkötestien kirjoittamista esimerkin kautta. Oletetaan, että käytössämme on seuraava luokka Laskin, ja haluamme kirjoittaa sitä varten automaattisia testejä.

```java
public class Laskin {

    private int arvo;

    public Laskin() {
        this.arvo = 0;
    }

    public void summa(int luku) {
        this.arvo = this.arvo + luku;
    }

    public void erotus(int luku) {
        this.arvo = this.arvo + luku;
    }

    public int getArvo() {
        return this.arvo;
    }
}
```

Laskimen toiminta perustuu siihen, että se muistaa aina edellisen laskuoperaation tuottaman tuloksen. Seuraavat laskuoperaatiot lisätään aina edelliseen lopputulokseen. Yllä olevaan laskimeen on jäänyt myös pieni copy-paste -ohjelmoinnista johtuva virhe. Metodin erotus pitäisi vähentää arvosta, mutta nyt se lisää arvoon.

Yksikkötestien kirjoittaminen aloitetaan testiluokan luomisella. Testiluokka luodaan Test Packages -kansion alle. Kun testaamme luokkaa `Laskin`, testiluokan nimeksi tulee `LaskinTest`. Nimen lopussa oleva merkkijono `Test` kertoo ohjelmointiympäristölle, että kyseessä on testiluokka. Ilman merkkijonoa Test luokassa olevia testejä ei suoriteta. (Huom! Testit luodaan NetBeansissa Test Packages -kansion alle.)

Testiluokka `LaskinTest` on aluksi tyhjä.

```java
public class LaskinTest {

}
```

Testit ovat testiluokassa olevia metodeja ja jokainen testi testaa yksittäistä asiaa. Aloitetaan luokan Laskin testaaminen -- luodaan ensin testimetodi, jossa varmistetaan, että juuri luodun laskimen sisältämä arvo on 0.

```java
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class LaskinTest {

    @Test
    public void laskimenArvoAlussaNolla() {
        Laskin laskin = new Laskin();
        assertEquals(0, laskin.getArvo());
    }
}
```


Yllä olevassa metodissa laskimenArvoAlussaNolla luodaan ensin laskinolio. Tämän jälkeen käytetään JUnit-testikehyksen tarjoamaa assertEquals-metodia arvon tarkistamiseen. Metodi tuodaan luokasta Assert komennolla import static, ja sille annetaan parametrina odotettu arvo -- tässä 0 -- sekä laskimen palauttama arvo. Jos metodin assertEquals arvot poikkeavat toisistaan, testin suoritus ei pääty hyväksytysti. Jokaisella testimetodilla tulee olla "annotaatio" `@Test`. Tämä kertoo JUnit-testikehykselle, että kyseessä on suoritettava testimetodi.

Testien suorittaminen onnistuu valitsemalla projekti oikealla hiirennapilla ja klikkaamalla vaihtoehtoa Test.

Testien suorittaminen luo output-välilehdelle (tyypillisesti NetBeansin alalaidassa) tulosteen, jossa on testiluokkakohtaiset tilastot. Alla olevassa esimerkissä on suoritettu pakkauksessa laskin olevan testiluokan LaskinTest testit. Testejä suoritettiin 1, joista yksikään ei epäonnistunut -- epäonnistuminen tarkoittaa tässä sitä, että testin testaama toiminnallisuus ei toiminut oletetusti.

<sample-output>

Testsuite: LaskinTest
Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.054 sec

test-report:
test:
BUILD SUCCESSFUL (total time: 0 seconds)

</sample-output>


Lisätään testiluokkaan summaa ja erotusta lisäävää toiminnallisuutta.


```java
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class LaskinTest {

    @Test
    public void laskimenArvoAlussaNolla() {
        Laskin laskin = new Laskin();
        assertEquals(0, laskin.getArvo());
    }

    @Test
    public void arvoViisiKunSummataanViisi() {
        Laskin laskin = new Laskin();
        laskin.summa(5);
        assertEquals(5, laskin.getArvo());
    }

    @Test
    public void arvoMiinusKaksiKunErotetaanKaksi() {
        Laskin laskin = new Laskin();
        laskin.erotus(2);
        assertEquals(-2, laskin.getArvo());
    }
}
```

Testien suorittaminen antaa seuraavanlaisen tulostuksen.

<sample-output>

Testsuite: LaskinTest
Tests run: 3, Failures: 1, Errors: 0, Skipped: 0, Time elapsed: 0.059 sec

Testcase: arvoMiinusKaksiKunErotetaanKaksi(LaskinTest):	FAILED
expected:<-2> but was:<2>
junit.framework.AssertionFailedError: expected:<-2> but was:<2>
    at LaskinTest.arvoMiinusKaksiKunErotetaanKaksi(LaskinTest.java:25)


Test LaskinTest FAILED
test-report:
test:
BUILD SUCCESSFUL (total time: 0 seconds)

</sample-output>


Tulostus kertoo, että kolme testiä suoritettiin. Yksi niistä päätyi virheeseen. Testitulostuksessa on tieto myös testin rivistä, jossa virhe tapahtui (25) sekä tieto odotetusta (-2) ja saadusta arvosta (2). Kun testien suoritus päättyy virheeseen, NetBeans näyttää testien suoritukseen liitttyvän virhetilanteen myös visuaalisena.

Edellisillä testeillä kaksi testeistä menee läpi, mutta yhdessä on tapahtunut virhe. Korjataan luokkaan Laskin jäänyt virhe.

```java
// ...
public void erotus(int luku) {
    this.arvo -= luku;
}
// ...
```

Kun testit suoritetaan uudestaan, testit menevät läpi.

<sample-output>

Testsuite: LaskinTest
Tests run: 3, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.056 sec

test-report:
test:
BUILD SUCCESSFUL (total time: 0 seconds)

</sample-output>

<text-box variant='hint' name='Yksikkötestaus ja sovelluksen osat'>

Yksikkötestaaminen on hyvin monimutkaista mikäli sovellus on kirjoitettu "mainiin". Jotta testaaminen olisi helpompaa, tulee sovellus pilkkoa pieniin osiin, joista kullakin on selkeä vastuu. Harjoittelimme edellisessä osassa juuri tätä käyttöliittymää ja sovelluslogiikkaa eriyttäessämme. Testien kirjoittaminen sovelluksen osille, kuten vaikkapa edellisessä osassa toteutetulle luokalle `Vitsipankki`, on merkittävästi helpompaa kuin "mainiin" kirjoitetulle ohjelmalle.

</text-box>


## Testivetoinen ohjelmistokehitys

Testivetoinen ohjelmistokehitys (<a href="https://en.wikipedia.org/wiki/Test-driven_development" target="_blank" rel="noopener">Test-driven development</a>) on ohjelmistokehitysprosessi, joka perustuu ohjelman rakentamiseen pienissä osissa. Testivetoisessa ohjelmistokehityksessä ohjelmoija kirjoittaa aina ensin automaattisesti suoritettavan yksittäistä tietokoneohjelman osaa tarkastelevan testin.

Testi ei mene läpi, sillä testin täyttävä toiminnallisuus eli tarkasteltava tietokoneohjelman osa puuttuu. Kun testi on kirjoitettu, ohjelmaan lisätään toiminnallisuus, joka täyttää testin vaatimukset. Testit suoritetaan uudestaan, jonka jälkeen -- jos kaikki testit menevät läpi -- lisätään uusi testi tai vaihtoehtoisesti -- jos testit eivät mene läpi -- korjataan aiemmin kirjoitettua ohjelmaa. Ohjelman sisäistä rakennetta korjataan eli refaktoroidaan tarvittaessa siten, että ohjelman toiminnallisuus pysyy samana mutta rakenne selkiytyy.

Testivetoinen ohjelmistokehitys koostuu viidestä askeleesta, joita toistetaan kunnes ohjelman toiminnallisuus on valmis.

1. Kirjoita testi. Ohjelmoija päättää, mitä ohjelman toiminnallisuutta testataan, ja kirjoittaa toiminnallisuutta varten testin.

2. Suorita testit ja tarkista menevätkö testit läpi. Kun uusi testi on kirjoitettu, testit suoritetaan. Jos testin suoritus päättyy hyväksyttyyn tilaan, testissä on todennäköisesti virhe ja se tulee korjata -- testin pitäisi testata vain toiminnallisuutta, jota ei ole vielä toteutettu.

3. Kirjoita toiminnallisuus, joka täyttää testin vaatimukset. Ohjelmoija toteuttaa toiminnallisuuden, joka täyttää vain testin vaatimukset. Huomaa, että tässä ei toteuteta asioita, joita testi ei vaadi -- toiminnallisuutta lisätään vain vähän kerrallaan.

4. Suorita testit. Jos testit eivät pääty hyväksyttyyn tilaan, kirjoitetussa toiminnallisuudessa on todennäköisesti virhe. Korjaa toiminnallisuus -- tai, jos toiminnallisuudessa ei ole virhettä -- korjaa viimeksi toteutettu testi.

5. Korjaa ohjelman sisäistä rakennetta. Kun ohjelman koko kasvaa, sen sisäistä rakennetta korjataan tarvittaessa. Liian pitkät metodit pilkotaan useampaan osaan ja ohjelmasta eriytetään käsitteisiin liittyviä luokkia. Testejä ei muuteta, vaan niitä hyödynnetään ohjelman sisäiseen rakenteeseen tehtyjen muutosten oikeellisuuden varmistamisessa -- jos ohjelman rakenteeseen tehty muutos muuttaa ohjelman toiminnallisuutta, testit varoittavat siitä, ja ohjelmoija voi korjata tilanteen.


<pdf-slideshow>

[a](../slideshows/testivetoinen-ohjelmistokehitys.pdf)

</pdf-slideshow>

<br/>

<programming-exercise name='Tehtavat (2 osaa)' tmcname='osa06-Osa06_13.Tehtavat'>

Tehtäväpohjassa tulee edellisen esimerkin alkutilanne -- tehtäväpohjaan on jo lisätty yksikkötestaukseen tarvittava JUnit-kirjasto. Seuraa esimerkkiä ja luo Tehtavienhallinnalta haluttu toiminnallisuus testivetoista ohjelmistokehitystä noudattaen. Kun olet saanut edellisen esimerkin loppuun asti, lisää sovellukseen vielä testit tehtävien poistamiseen sekä testien vaatima toiminnallisuus.

Tehtävä on jaettu kahteen osaan. Osat ovat seuraavat:

1. Noudata esimerkkiä kunnes esimerkissä refaktoroidaan ohjelma ja luodaan luokka Tehtava. Luo luokat `TehtavienhallintaTest` ja `Tehtavienhallinta` sekä niihin esimerkissä lisätty toiminnallisuus.

2. Noudata esimerkkiä loppuun asti, eli tee myös esimerkissä kuvattu refaktorointi.

Päivitä luokan Ohjelma luokkametodia `osiaToteutettu` palauttamaan valmiiksi saamasi osan numero. Voit palauttaa tehtävän vaikket tekisikään kumpaakin osaa, jolloin saat pisteitä tehtävän niistä osista, jotka olet tehnyt.

Esimerkiksi, kun olet saanut ensimmäisen osan tehtyä eli noudattanut esimerkkiä refaktorointiin asti, olet vaiheessa 1, jolloin metodin `osiaToteutettu` tulisi palautta arvo `1`.

</programming-exercise>


<text-box variant='hint' name='Lisää ohjelmistojen testaamisesta'>

Yksikkötestaus on vain osa ohjelmiston testaamista. Yksikkötestaamisen lisäksi ohjelmiston toteuttaja toteuttaa myös integraatiotestejä, joissa tarkastellaan komponenttien kuten luokkien yhteistoiminnallisuutta, sekä käyttöliittymätestejä, joissa testataan sovelluksen käyttöliittymää käyttöliittymän tarjoamien elementtien kuten nappien kautta.

Näitä testaamiseen liittyviä menetelmiä tarkastellaan tarkemmin muunmuassa kursseilla ohjelmistotekniikka sekä ohjelmistotuotanto.

</text-box>
