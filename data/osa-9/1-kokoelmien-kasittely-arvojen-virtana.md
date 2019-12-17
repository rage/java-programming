---
path: '/osa-9/1-kokoelmien-kasittely-virtana'
title: 'Kokoelmien käsittely arvojen virtana'
hidden: true
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat käsitellä tietokokoelmia virran avulla.
- Tiedät mitä lambda-lauseke tarkoittaa.
- Tunnet yleisimmät virran metodit ja osaat jaotella ne välioperaatioihin ja pääteoperaatioihin.

</text-box>

<quiz id="0d314996-d23a-5fea-a150-f82ad637a3d7"></quiz>


Tutustutaan kokoelmien kuten listojen läpikäyntiin arvojen virtana (stream). Virta on menetelmä tietoa sisältävän kokoelman läpikäyntiin siten, että ohjelmoija määrittelee kullekin arvolle suoritettavan toiminnallisuuden. Indeksistä tai kullakin hetkellä käsiteltävästä muuttujasta ei pidetä kirjaa.

Virran avulla ohjelmoija määrittelee käytännössä tapahtumaketjun, joka suoritetaan jokaiselle tietokokoelman arvolle. Tapahtumaketju voi sisältää joidenkin arvojen pois pudottamisen, arvojen muuntamisen muodosta toiseen, ja vaikkapa arvojen laskemisen. Virta ei muuta alkuperäisen tietokokoelman arvoja, vaan se vain käsittelee niitä -- mikäli muunnokset halutaan talteen, tulee ne koota toiseen tietokokoelmaan.

Tutustutaan virran käyttöön konkreettisen esimerkin kautta. Tarkastellaan seuraavaa ongelmaa:

*Kirjoita ohjelma, joka lukee käyttäjältä syötteitä ja tulostaa niihin liittyen tilastoja. Kun käyttäjä syöttää merkkijonon "loppu", lukeminen lopetetaan. Muut syötteet ovat lukuja merkkijonomuodossa. Kun syötteiden lukeminen lopetetaan, ohjelma tulostaa kolmella jaollisten positiivisten lukujen lukumäärän sekä kaikkien lukujen keskiarvon.*


```java
// alustetaan lukija ja lista, johon syotteet luetaan
Scanner lukija = new Scanner(System.in);
List<String> syotteet = new ArrayList<>();

// luetaan syotteet
while (true) {
    String rivi = lukija.nextLine();
    if (rivi.equals("loppu")) {
        break;
    }

    syotteet.add(rivi);
}

// selvitetään kolmella jaollisten lukumaara
long kolmellaJaollistenLukumaara = syotteet.stream()
    .mapToInt(s -> Integer.valueOf(s))
    .filter(luku -> luku % 3 == 0)
    .count();

// selvitetään keskiarvo
double keskiarvo = syotteet.stream()
    .mapToInt(s -> Integer.valueOf(s))
    .average()
    .getAsDouble();

// tulostetaan tilastot
System.out.println("Kolmella jaollisia: " + kolmellaJaollistenLukumaara);
System.out.println("Lukujen keskiarvo: " + keskiarvo);
```


Tarkastellaan tarkemmin yllä kuvatun ohjelman osaa, missä luettuja syötteitä käsitellään virtana.


```java
// selvitetään kolmella jaollisten lukumaara
long kolmellaJaollistenLukumaara = syotteet.stream()
    .mapToInt(s -> Integer.valueOf(s))
    .filter(luku -> luku % 3 == 0)
    .count();
```


Virta luodaan mistä tahansa <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html" target="_blank" norel>Collection</a>-rajapinnan toteuttavasta oliosta (esim. ArrayList, HashSet, HashMap, ...) metodilla `stream()`. Tämän jälkeen merkkijonomuotoiset arvot muunnetaan ("map") kokonaislukumuotoon virran metodilla `mapToInt(arvo -> muunnos)` -- muunto toteutetaan `Integer`-luokan tarjoamalla `valueOf`-metodilla, jota olemme käyttäneet aiemminkin. Seuraavaksi rajaamme metodilla `filter(arvo -> rajausehto)` käsiteltäväksi vain ne luvut, jotka ovat kolmella jaollisia. Lopulta kutsumme virran metodia `count()`, joka laskee virran alkioiden lukumäärän ja palauttaa sen `long`-tyyppisenä muuttujana.


Tarkastellaan tämän jälkeen listan alkioiden keskiarvon laskemiseen tarkoitettua ohjelmaa.


```java
// selvitetään keskiarvo
double keskiarvo = syotteet.stream()
    .mapToInt(s -> Integer.valueOf(s))
    .average()
    .getAsDouble();
```

Keskiarvon laskeminen onnistuu virrasta, jolle on kutsuttu `mapToInt`-metodia. Kokonaislukuja sisältävällä virralla on metodi `average()`, joka palauttaa <a href="https://docs.oracle.com/javase/8/docs/api/java/util/OptionalDouble.html" target="_blank" norel>OptionalDouble</a>-tyyppisen olion. Oliolla on metodi `getAsDouble()`, joka palauttaa listan arvojen keskiarvon `double`-tyyppisenä muuttujana.

Lyhyt yhteenveto tähän mennessä tutuiksi tulleista virtaan liittyvistä metodeista.


<table class="table">
  <tr>
    <th>
      Tarkoitus ja metodi
    </th>
    <th>
      Oletukset
    </th>
  </tr>

  <tr>
    <td>
      Virran luominen: `stream()`
    </td>
    <td>
      Metodia kutsutaan Collection-rajapinnan toteuttavalle kokoelmalle kuten ArrayList-oliolle. Luotavalle virralle tehdään jotain.
    </td>
  </tr>

  <tr>
    <td>
      Virran muuntaminen kokonaislukuvirraksi: `mapToInt(arvo -> toinen)`
    </td>
    <td>
      Virta muuntuu kokonaislukuja sisältäväksi virraksi. Merkkijonoja sisältävä muunnos voidaan tehdä esimerkiksi Integer-luokan valueOf-metodin avulla. Kokonaislukuja sisältävälle virralle tehdään jotain.
    </td>
  </tr>

  <tr>
    <td>
      Arvojen rajaaminen: `filter(arvo -> hyvaksymisehto)`
    </td>
    <td>
      Virrasta rajataan pois ne arvot, jotka eivät täytä hyväksymisehtoa. "Nuolen" oikealla puolella on lauseke, joka palauttaa totuusarvon. Jos totuusarvo on `true`, arvo hyväksytään virtaan. Jos totuusarvo on `false`, arvoa ei hyväksytä virtaan. Rajatuille arvoille tehdään jotain.
    </td>
  </tr>

  <tr>
    <td>
      Keskiarvon laskeminen: `average()`
    </td>
    <td>
      Palauttaa OptionalDouble-tyyppisen olion, jolla on `double` tyyppisen arvon palauttava metodi `getAsDouble()`. Metodin `average()` kutsuminen onnistuu kokonaislukuja sisältävälle virralle (luominen onnistuu `mapToInt`-metodilla.
    </td>
  </tr>

  <tr>
    <td>
      Virrassa olevien alkioiden lukumaara: `count()`
    </td>
    <td>
      Palauttaa virrassa olevien alkioiden lukumäärän `long`-tyyppisenä arvona.
    </td>
  </tr>

</table>


<programming-exercise name='Lukujen keskiarvo' tmcname='osa09-Osa09_01.LukujenKeskiarvo'>

Toteuta ohjelma, joka lukee käyttäjältä syötteitä. Jos käyttäjä syöttää merkkijonon "loppu", lukeminen lopetetaan. Muut syötteet ovat lukuja. Kun käyttäjä syöttää merkkijonon "loppu", ohjelman tulee tulostaa syötettyjen lukujen keskiarvo.

Toteuta keskiarvon laskeminen virran avulla!


<sample-output>

Kirjoita syötteitä, "loppu" lopettaa.
**2**
**4**
**6**
**loppu**
Lukujen keskiarvo: 4.0

</sample-output>


<sample-output>

Kirjoita syötteitä, "loppu" lopettaa.
**-1**
**1**
**2**
**loppu**
Lukujen keskiarvo: 0.6666666666666666

</sample-output>

</programming-exercise>


<programming-exercise name='Tiettyjen lukujen keskiarvo' tmcname='osa09-Osa09_02.TiettyjenLukujenKeskiarvo'>

Toteuta ohjelma, joka lukee käyttäjältä syötteitä. Jos käyttäjä syöttää merkkijonon "loppu", lukeminen lopetetaan. Muut syötteet ovat lukuja. Kun käyttäjä syöttää merkkijonon "loppu", syötteiden lukeminen lopetetaan.

Tämän jälkeen käyttäjältä kysytään tulostetaanko negatiivisten vai positiivisten lukujen keskiarvo (n vai p). Jos käyttäjä syöttää merkkijonon "n", tulostetaan negatiivisten lukujen keskiarvo, muulloin tulostetaan positiivisten lukujen keskiarvo.

Toteuta keskiarvon laskeminen sekä rajaus virran avulla!


<sample-output>

Kirjoita syötteitä, "loppu" lopettaa.
**-1**
**1**
**2**
**loppu**

Tulostetaanko negatiivisten vai positiivisten lukujen keskiarvo? (n/p)
**n**
Negatiivisten lukujen keskiarvo: -1.0

</sample-output>

<sample-output>

Kirjoita syötteitä, "loppu" lopettaa.
**-1**
**1**
**2**
**loppu**

Tulostetaanko negatiivisten vai positiivisten lukujen keskiarvo? (n/p)
**p**
Positiivisten lukujen keskiarvo: 1.5

</sample-output>

</programming-exercise>


## Lambda-lauseke

Virran arvoja käsitellään virtaan liittyvillä metodeilla. Arvoja käsittelevät metodit saavat parametrinaan funktion, joka kertoo mitä kullekin arvolle tulee tehdä. Funktion toiminnallisuus on metodikohtaista: rajaamiseen käytetylle metodille `filter` annetaan funktio, joka palauttaa totuusarvoisen muuttujan arvon `true` tai `false`, riippuen halutaanko arvo säilyttää virrassa; muuntamiseen käytetylle metodille `mapToInt` annetaan funktio, joka muuntaa arvon kokonaisluvuksi, jne.

Miksi funktiot kirjoitetaan muodossa `luku -> luku > 5`?

Kyseinen kirjoitusmuoto, *lambda-lauseke*, on Javan tarjoama lyhenne ns. anonyymeille metodeille, joilla ei ole "omistajaa" eli ne eivät ole osa luokkaa tai rajapintaa. Funktio sisältää sekä parametrien määrittelyn että funktion rungon. Saman funktion voi kirjoittaa useammalla eri tavalla, kts. alla.


```java
// alkuperäinen
*virta*.filter(luku -> luku > 5).*jatkokäsittely*

// on sama kuin
*virta*.filter((Integer luku) -> {
    if (luku > 5) {
        return true;
    }

    return false;
}).*jatkokäsittely*
```


Saman voi kirjoittaa myös eksplisiittisesti niin, että ohjelmaan määrittelee staattisen metodin, jota hyödynnetään virralle parametrina annetussa funktiossa.


```java
public class Rajaajat {
    public static boolean vitostaSuurempi(int luku) {
        return luku > 5;
    }
}
```

```java
// alkuperäinen
*virta*.filter(luku -> luku > 5).*jatkokäsittely*

// on sama kuin
*virta*.filter(luku -> Rajaajat.vitostaSuurempi(luku)).*jatkokäsittely*
```

Funktion voi antaa myös suoraan parametrina. Alla oleva syntaksi `Rajaajat::vitostaSuurempi` tarkoittaa "hyödynnä tässä `Rajaajat`-luokassa olevaa staattista metodia `vitostaSuurempi`".


```java
// on sama kuin
*virta*.filter(Rajaajat::vitostaSuurempi).*jatkokäsittely*
```

Virran arvoja käsittelevät funktiot eivät voi muuttaa funktion ulkopuolisten muuttujien arvoja. Kyse on käytännössä staattisten metodien käyttäytymisestä -- metodia kutsuttaessa metodin ulkopuolisiin muuttujiin ei pääse käsiksi. Funktioiden tilanteessa funktion ulkopuolisten muuttujien arvoja voi lukea olettaen, että luettavien muuttujien arvot eivät muutu lainkaan ohjelmassa.

Alla oleva ohjelma demonstroi tilannetta, missä funktiossa yritetään hyödyntää funktion ulkopuolista muuttujaa. Tämä ei toimi.


```java
// alustetaan lukija ja lista, johon syotteet luetaan
Scanner lukija = new Scanner(System.in);
List<String> syotteet = new ArrayList<>()

// luetaan syotteet
while (true) {
    String rivi = lukija.nextLine();
    if (rivi.equals("loppu")) {
        break;
    }

    syotteet.add(rivi);
}

int muunnettujaYhteensa = 0;

// selvitetään kolmella jaollisten lukumaara
long kolmellaJaollistenLukumaara = syotteet.stream()
    .mapToInt(s -> {
        // anonyymissä funktiossa ei voi käsitellä (tai tarkemmin muuttaa) funktion
        // ulkopuolella määriteltyä muuttujaa, joten tämä ei toimi
        muunnettujaYhteensa++;
        return Integer.valueOf(s);
    }).filter(luku -> luku % 3 == 0)
    .count();
```


## Virran metodit

Virran metodit voi jakaa karkeasti kahteen eri ryhmään: virran (1) arvojen käsittelyyn tarkoitettuihin välioperaatioihin sekä (2) käsittelyn lopettaviin pääteoperaatiohin. Edellisessä esimerkissä nähdyt metodit `filter` ja `mapToInt` ovat välioperaatioita. Välioperaatiot palauttavat arvonaan virran, jonka käsittelyä voi jatkaa -- käytännössä välioperaatioita voi olla käytännössä ääretön määrä ketjutettuna peräkkäin (pisteellä eroteltuna). Toisaalta edellisessä esimerkissä nähty metodi `average` on pääteoperaatio. Pääteoperaatio palauttaa käsiteltävän arvon, joka luodaan esimerkiksi virran arvoista.

Alla olevassa kuvassa on kuvattu virran toimintaa. Lähtötilanteena (1) on lista, jossa on arvoja. Kun listalle kutsutaan `stream()`-metodia, (2) luodaan virta listan arvoista. Arvoja käsitellään tämän jälkeen yksitellen. Virran arvoja voidaan (3) rajata metodilla `filter`. Tämä poistaa virrasta ne arvot, jotka ovat rajauksen ulkopuolella. Virran metodilla `map` voidaan (4) muuntaa virrassa olevia arvoja muodosta toiseen. Metodi `collect` (5) kerää virrassa olevat arvot arvot sille annettuun kokoelmaan, esim. listalle.


<img src="../img/drawings/stream.png" alt="Yllä tekstuaalisesti kuvattu virran toiminta kuvana." />

&nbsp;

Alla vielä yllä olevan kuvan kuvaama esimerkki ohjelmakoodina. Esimerkissä virrasta luodaan uusi ArrayList-lista, johon arvot lisätään. Tämä tapahtuu viimeisellä rivillä `.collect(Collectors.toCollection(ArrayList::new));`.


```java
List<Integer> lista = new ArrayList<>();
lista.add(3);
lista.add(7);
lista.add(4);
lista.add(2);
lista.add(6);

ArrayList<Integer> luvut = lista.stream()
    .filter(luku -> luku > 5)
    .map(luku -> luku * 2)
    .collect(Collectors.toCollection(ArrayList::new));
```


<programming-exercise name='Positiiviset luvut' tmcname='osa09-Osa09_03.PositiivisetLuvut'>

Toteuta tehtäväpohjaan luokkametodi `public static List<Integer> positiiviset(List<Integer> luvut)`, joka saa parametrinaan lukulistan ja jonka tulee palauttaa uusi lukulista, joka sisältää parametrina saadun listan sisältämät positiiviset luvut.

Toteuta metodi virtaa hyödyntäen! Kokeile lukujen keräämisen `Collectors.toCollection(ArrayList::new)` lisäksi komentoa `Collectors.toList()`.

</programming-exercise>


### Pääteoperaatiot

Tarkastellaan tässä neljää pääteoperaatiota: listan arvojen lukumäärän selvittämistä `count`-metodin avulla, listan arvojen läpikäyntiä `forEach`-metodin avulla sekä listan arvojen keräämistä tietorakenteeseen `collect`-metodin avulla, sekä listan alkioiden yhdistämistä `reduce`-metodin avulla.

Metodi `count` kertoo virran alkioiden lukumäärän `long`-tyyppisenä muuttujana.


```java
List<Integer> luvut = new ArrayList<>();
luvut.add(3);
luvut.add(2);
luvut.add(17);
luvut.add(6);
luvut.add(8);

System.out.println("Lukuja: " + luvut.stream().count());
```

<sample-output>

Lukuja: 5

</sample-output>

Metodi `forEach` kertoo mitä kullekin listan arvolle tulee tehdä ja samalla päättää virran käsittelyn. Alla olevassa esimerkissä luodaan ensin numeroita sisältävä lista, jonka jälkeen tulostetaan vain kahdella jaolliset luvut.


```java
List<Integer> luvut = new ArrayList<>();
luvut.add(3);
luvut.add(2);
luvut.add(17);
luvut.add(6);
luvut.add(8);

luvut.stream()
    .filter(luku -> luku % 2 == 0)
    .forEach(luku -> System.out.println(luku));
```

<sample-output>

2
6
8

</sample-output>


Virran arvojen kerääminen toiseen kokoelmaan onnistuu metodin `collect` avulla. Alla olevassa esimerkissä luodaan uusi lista annetun positiivisista arvoista. Metodille `collect` annetaan parametrina <a href="https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collectors.html" target="_blank" norel>Collectors</a>-luokan avulla luotu olio, johon virran arvot kerätään -- esimerkiksi kutsu `Collectors.toCollection(ArrayList::new)` luo uuden ArrayList-olion, johon arvot kerätään.


```java
List<Integer> luvut = new ArrayList<>();
luvut.add(3);
luvut.add(2);
luvut.add(-17);
luvut.add(-6);
luvut.add(8);

ArrayList<Integer> positiiviset = luvut.stream()
    .filter(luku -> luku > 0)
    .collect(Collectors.toCollection(ArrayList::new));

positiiviset.stream()
    .forEach(luku -> System.out.println(luku));
```

<sample-output>

3
2
8

</sample-output>


<quiz id='8e1fb8c3-cfcd-5d29-9b69-95f44985c425'></quiz>


<programming-exercise name='Jaolliset' tmcname='osa09-Osa09_04.Jaolliset'>

Tehtäväpohjassa on annettuna metodirunko `public static ArrayList<Integer> jaolliset(ArrayList<Integer> luvut)`. Toteuta metodirunkoon toiminnallisuus, joka kerää parametrina saadulta listalta kahdella, kolmella tai viidellä jaolliset luvut, ja palauttaa ne uudessa listassa. Metodille parametrina annetun listan ei tule muuttua.

```java
ArrayList<Integer> luvut = new ArrayList<>();
luvut.add(3);
luvut.add(2);
luvut.add(-17);
luvut.add(-5);
luvut.add(7);

ArrayList<Integer> jaolliset = jaolliset(luvut);

jaolliset.stream()
    .forEach(luku -> System.out.println(luku));
```

<sample-output>

3
2
-5

</sample-output>

</programming-exercise>


Metodi `reduce` on hyödyllinen kun virrassa olevat alkiot halutaan yhdistää jonkinlaiseen toiseen muotoon. Metodin saamat parametrit ovat seuraavaa muotoa: `reduce(*alkutila*, (*edellinen*, *olio*) -> *mitä oliolla tehdään*)`.

Esimerkiksi kokonaislukuja sisältävän listan summan saa laskettua reduce-metodin avulla seuraavasti.


```java
ArrayList<Integer> luvut = new ArrayList<>();
luvut.add(7);
luvut.add(3);
luvut.add(2);
luvut.add(1);

int summa = luvut.stream()
    .reduce(0, (edellinenSumma, luku) -> edellinenSumma + luku);
System.out.println(summa);
```

<sample-output>

13

</sample-output>

Vastaavasti merkkijonoista koostuvasta listasta saa luotua rivitetyn merkkijonon seuraavasti.

```java
ArrayList<String> sanat = new ArrayList<>();
sanat.add("Eka");
sanat.add("Toka");
sanat.add("Kolmas");
sanat.add("Neljäs");

String yhdistetty = sanat.stream()
    .reduce("", (edellinenMjono, sana) -> edellinenMjono + sana + "\n");
System.out.println(yhdistetty);
```

<sample-output>

Eka
Toka
Kolmas
Neljäs

</sample-output>


### Välioperaatiot

Virran välioperaatiot ovat metodeja, jotka palauttavat arvonaan virran. Koska palautettava arvo on virta, voidaan välioperaatioita kutsua peräkkäin. Tyypillisiä välioperaatioita ovat arvon muuntaminen muodosta toiseen `map` sekä sen erityistapaus `mapToInt` eli virran muuntaminen kokonaislukuvirraksi, arvojen rajaaminen `filter`, uniikkien arvojen tunnistaminen `distinct` sekä arvojen järjestäminen `sorted` (mikäli mahdollista).

Tarkastellaan näitä metodeja muutaman ongelman avulla. Oletetaan, että käytössämme on seuraava luokka Henkilo.

```java
public class Henkilo {
    private String etunimi;
    private String sukunimi;
    private int syntymavuosi;

    public Henkilo(String etunimi, String sukunimi, int syntymavuosi) {
        this.etunimi = etunimi;
        this.sukunimi = sukunimi;
        this.syntymavuosi = syntymavuosi;
    }

    public String getEtunimi() {
        return this.etunimi;
    }

    public String getSukunimi() {
        return this.sukunimi;
    }

    public int getSyntymavuosi() {
        return this.syntymavuosi;
    }
}
```

*Ongelma 1: Saat käyttöösi listan henkilöitä. Tulosta ennen vuotta 1970 syntyneiden henkilöiden lukumäärä.*


Käytetään `filter`-metodia henkilöiden rajaamiseen niihin, jotka ovat syntyneet ennen vuotta 1970. Lasketaan tämän jälkeen henkilöiden lukumäärä metodilla `count`.


```java
// oletetaan, että käytössämme on lista henkiloita
// ArrayList<Henkilo> henkilot = new ArrayList<>();

long lkm = henkilot.stream()
    .filter(henkilo -> henkilo.getSyntymavuosi() < 1970)
    .count();
System.out.println("Lukumäärä: " + lkm);
```

*Ongelma 2: Saat käyttöösi listan henkilöitä. Kuinka monen henkilön etunimi alkaa kirjaimella "A"?*

Käytetään `filter`-metodia henkilöiden rajaamiseen niihin, joiden etunimi alkaa kirjaimella "A". Lasketaan tämän jälkeen henkilöiden lukumäärä metodilla `count`.


```java
// oletetaan, että käytössämme on lista henkiloita
// ArrayList<Henkilo> henkilot = new ArrayList<>();

long lkm = henkilot.stream()
    .filter(henkilo -> henkilo.getEtunimi().startsWith("A"))
    .count();
System.out.println("Lukumäärä: " + lkm);
```

*Ongelma 3: Saat käyttöösi listan henkilöitä. Tulosta henkilöiden uniikit etunimet aakkosjärjestyksessä.*

Käytetään ensin `map`-metodia, jonka avulla henkilö-olioita sisältävä virta muunnetaan etunimiä sisältäväksi virraksi. Tämän jälkeen kutsutaan metodia `distinct`, joka palauttaa virran, jossa on uniikit arvot. Seuraavaksi kutsutaan metodia `sorted`, joka järjestää merkkijonot. Lopulta kutsutaan metodia `forEach`, jonka avulla tulostetaan merkkijonot.


```java
// oletetaan, että käytössämme on lista henkiloita
// ArrayList<Henkilo> henkilot = new ArrayList<>();

henkilot.stream()
    .map(henkilo -> henkilo.getEtunimi())
    .distinct()
    .sorted()
    .forEach(nimi -> System.out.println(nimi));
```

Yllä kuvattu `distinct`-metodi hyödyntää olioiden `equals`-metodia yhtäsuuruuden tarkasteluun. Metodi `sorted` taas osaa järjestää olioita, joilla on tieto siitä, miten olio tulee järjestää -- näitä ovat esimerkiksi luvut ja merkkijonot.


<programming-exercise name='Luettujen arvojen tulostaminen' tmcname='osa09-Osa09_05.LuettujenArvojenTulostaminen'>

Kirjoita ohjelma, joka lukee käyttäjältä merkkijonoja. Lukeminen tulee lopettaa kun käyttäjä syöttää tyhjän merkkijonon. Tulosta tämän jälkeen käyttäjän syöttämät merkkijonot.

<sample-output>

**eka**
**toka**
**kolmas**

eka
toka
kolmas

</sample-output>

</programming-exercise>


<programming-exercise name='Rajatut luvut' tmcname='osa09-Osa09_06.RajatutLuvut'>

Kirjoita ohjelma, joka lukee käyttäjältä lukuja. Kun käyttäjä syöttää negatiivisen luvun, lukeminen lopetetaan. Tulosta tämän jälkeen ne luvut, jotka ovat välillä 1-5.

<sample-output>

**7**
**14**
**4**
**5**
**4**
**-1**
4
5
4

</sample-output>

</programming-exercise>


<programming-exercise name='Uniikit sukunimet' tmcname='osa09-Osa09_07.UniikitSukunimet'>

Tehtäväpohjaan on hahmoteltu ohjelmaa, joka lukee käyttäjältä syötteenä henkilötietoja. Täydennä ohjelmaa siten, että tietojen lukemisen jälkeen ohjelma tulostaa henkilöiden uniikit sukunimet aakkosjärjestyksessä.


<sample-output>

Syötetäänkö henkilöiden tietoja, "loppu" lopettaa:
Syötä etunimi: **Ada**
Syötä sukunimi: **Lovelace**
Syötä syntymävuosi: **1815**

Syötetäänkö henkilöiden tietoja, "loppu" lopettaa:
Syötä etunimi: **Grace**
Syötä sukunimi: **Hopper**
Syötä syntymävuosi: **1906**

Syötetäänkö henkilöiden tietoja, "loppu" lopettaa:
Syötä etunimi: **Alan**
Syötä sukunimi: **Turing**
Syötä syntymävuosi: **1912**

Syötetäänkö henkilöiden tietoja, "loppu" lopettaa: loppu

Uniikit sukunimet aakkosjärjestyksessä:
Hopper
Lovelace
Turing

</sample-output>

</programming-exercise>


## Oliot ja virta

Olioiden käsittely virran metodien avulla on luontevaa. Kukin virran metodi, missä käsitellään virran arvoja, mahdollistaa myös arvoihin liittyvän metodin kutsumisen. Tarkastellaan esimerkkiä, missä käytössämme on Kirjoja, joilla on kirjailijoita. Luokat `Henkilo` ja `Kirja` on annettu alla.

```java
public class Henkilo {
    private String nimi;
    private int syntymavuosi;

    public Henkilo(String nimi, int syntymavuosi) {
        this.nimi = nimi;
        this.syntymavuosi = syntymavuosi;
    }

    public String getNimi() {
        return this.nimi;
    }

    public int getSyntymavuosi() {
        return this.syntymavuosi;
    }

    public String toString() {
        return this.nimi + " (" + this.syntymavuosi + ")";
    }
}
```

```java
public class Kirja {
    private Henkilo kirjailija;
    private String nimi;
    private int sivujenLukumaara;

    public Kirja(Henkilo kirjailija, String nimi, int sivuja) {
        this.kirjailija = kirjailija;
        this.nimi = nimi;
        this.sivujenLukumaara = sivuja;
    }

    public Henkilo getKirjailija() {
        return this.kirjailija;
    }

    public String getNimi() {
        return this.nimi;
    }

    public int getSivujenLukumaara() {
        return this.sivujenLukumaara;
    }
}
```

Oletetaan, että käytössämme on lista kirjoja. Virran metodien avulla esimerkiksi kirjailijoiden syntymävuosien keskiarvon selvittäminen onnistuu luontevasti. Ensin muunnamme kirjoja sisältävän virran henkilöitä sisältäväksi virraksi ja tämän jälkeen muunnamme henkilöitä sisältävän virran syntymävuosia sisältäväksi virraksi. Lopulta pyydämme (kokonaislukuja sisältävältä) virralta keskiarvoa.


```java
// oletetaan, että käytössämme on lista kirjoja
// List<Kirja> kirjat = new ArrayList<>();

double keskiarvo = kirjat.stream()
    .map(kirja -> kirja.getKirjailija())
    .mapToInt(kirjailija -> kirjailija.getSyntymavuosi())
    .average()
    .getAsDouble();

System.out.println("Kirjailijoiden syntymävuosien keskiarvo: " + keskiarvo);

// muunnoksen kirjasta kirjailijan syntymävuoteen pystyisi tekemään myös yhdellä map-kutsulla
// double keskiarvo = kirjat.stream()
//     .mapToInt(kirja -> kirja.getKirjailija().getSyntymavuosi())
//     ...
```

Vastaavasti kirjojen, joiden nimessä esiintyy sana "Potter", kirjailijoiden nimet saa selville seuraavasti.


```java
// oletetaan, että käytössämme on lista kirjoja
// List<Kirja> kirjat = new ArrayList<>();

kirjat.stream()
    .filter(kirja -> kirja.getNimi().contains("Potter"))
    .map(kirja -> kirja.getKirjailija())
    .forEach(kirjailija -> System.out.println(kirjailija));
```

Myös monimutkaisempien merkkijonoesitysten rakentaminen on virran avulla mahdollista. Alla olevassa esimerkissä tulostamme "Kirjailijan nimi: Kirja" -parit aakkosjärjestyksessä.


```java
// oletetaan, että käytössämme on lista kirjoja
// ArrayList<Kirja> kirjat = new ArrayList<>();

kirjat.stream()
    .map(kirja -> kirja.getKirjailija().getNimi() + ": " + kirja.getNimi())
    .sorted()
    .forEach(nimi -> System.out.println(nimi));
```


<programming-exercise name='Painon laskemista (2 osaa)' tmcname='osa09-Osa09_08.PainonLaskemista'>

Tehtäväpohjassa on tutuhko tehtävä "Tavara, Matkalaukku ja Lastiruuma". Tässä tehtävässä tarkoituksenasi on muuttaa toistolausetta käyttävät metodit virtaa käyttäviksi metodeiksi. Lopputuloksessa ei tule esiintyä `while (...)` tai `for (...)`-toistolauseita.

</programming-exercise>


## Tiedostot ja virta

Virta on myös erittäin näppärä tiedostojen käsittelyssä. Tiedoston lukeminen virtamuotoisena tapahtuu Javan valmiin <a href="https://docs.oracle.com/javase/8/docs/api/java/nio/file/Files.html" target="_blank" rel="noopener">Files</a>-luokan avulla. Files-luokan metodin `lines` avulla tiedostosta voidaan luoda syötevirta, jonka avulla tiedoston rivit voidaan käsitellä yksi kerrallaan. Metodi `lines` saa patametrikseen polun, joka luodaan luokan <a href="https://docs.oracle.com/javase/8/docs/api/java/nio/file/Paths.html" target="_blank" rel="noopener">Paths</a> tarjoamalla metodilla `get`, jolle annetaan parametrina tiedostopolkua kuvaava merkkijono.

Alla olevassa esimerkissä luetaan tiedoston "tiedosto.txt" kaikki rivit ja lisätään ne listaan.

```java
List<String> rivit = new ArrayList<>();

try {
    Files.lines(Paths.get("tiedosto.txt")).forEach(rivi -> rivit.add(rivi));
} catch (Exception e) {
    System.out.println("Virhe: " + e.getMessage());
}

// tee jotain luetuilla riveillä
```

Jos tiedosto löytyy ja sen lukeminen onnistuu, tulee ohjelman suorituksen lopussa tiedoston "tiedosto.txt" rivit olemaan listamuuttujassa `rivit`. Jos taas tiedostoa ei löydy, tai sen lukeminen epäonnistuu, ilmoitetaan tästä virheviestillä. Alla eräs mahdollisuus:

<sample-output>

Virhe: tiedosto.txt (No such file or directory)

</sample-output>

<programming-exercise name='Tiedoston rivit' tmcname='osa09-Osa09_09.TiedostonRivit'>

Toteuta tehtäväpohjaan staattinen metodi `public static List<String> lue(String tiedosto)`, joka lukee parametrina annetun merkkijonon nimisestä tiedostosta rivit ja palauttaa ne merkkijonolistana.

</programming-exercise>


Virran metodit tekevät määritellyn muotoisten tiedostojen lukemisesta melko suoraviivaista. Tarkastellaan tilannetta, missä tiedosto sisältää henkilöiden tietoja. Kukin henkilö on omalla rivillään, ensin tulee henkilön nimi, sitten puolipiste, sitten henkilön syntymävuosi. Tiedoston muoto on seuraava.


<sample-output>

Kaarlo Juho Ståhlberg; 1865
Lauri Kristian Relander; 1883
Pehr Evind Svinhufvud; 1861
Kyösti Kallio; 1873
Risto Heikki Ryti; 1889
Carl Gustaf Emil Mannerheim; 1867
Juho Kusti Paasikivi; 1870
Urho Kaleva Kekkonen; 1900
Mauno Henrik Koivisto; 1923
Martti Oiva Kalevi Ahtisaari; 1937
Tarja Kaarina Halonen; 1943
Sauli Väinämö Niinistö; 1948

</sample-output>

Oletetaan, että tiedoston nimi on `presidentit.txt`. Henkilöiden lukeminen onnistuu seuraavasti.

```java
List<Henkilo> presidentit = new ArrayList<>();
try {
    // luetaan tiedosto "presidentit.txt" riveittäin
    Files.lines(Paths.get("presidentit.txt"))
        // pilkotaan rivi osiin ";"-merkin kohdalta
        .map(rivi -> rivi.split(";"))
        // poistetaan ne pilkotut rivit, joissa alle 2 osaa
        // (haluamme että rivillä on aina nimi ja syntymävuosi)
        .filter(palat -> palat.length >= 2)
        // luodaan palojen perusteella henkilöitä
        .map(palat -> new Henkilo(palat[0], Integer.valueOf(palat[1])))
        // ja lisätään henkilöt lopulta listalle
        .forEach(henkilo -> presidentit.add(henkilo));
} catch (Exception e) {
    System.out.println("Virhe: " + e.getMessage());
}

// nyt presidentit ovat listalla henkilöolioina
```

<programming-exercise name='Kirjat tiedostosta' tmcname='osa09-Osa09_10.KirjatTiedostosta' nocoins='true'>

Toteuta tehtäväpohjaan luokkametodi `public static List<Kirja> lueKirjat(String tiedosto)`, joka lukee parametrina annetun tiedoston ja muodostaa tiedoston riveistä kirjoja.

Tehtäväpohjassa on valmiina luokka `Kirja`, jota käytetään kirjan kuvaamiseen. Oleta, että kirjoja sisältävä tiedosto on seuraavaa muotoa.

<pre>
nimi,julkaisuvuosi,sivujen lukumäärä,kirjoittaja
</pre>

Kirjan nimi ja kirjoittaja käsitellään merkkijonona, julkaisuvuosi ja sivujen lukumäärä kokonaislukuna. Alla vielä esimerkki tiedoston mahdollisesta sisällöstä. Esim.

<pre>
Do Androids Dream of Electric Sheep?,1968,210,Philip K. Dick
Love in the Time of Cholera,1985,348,Gabriel Garcia Marquez
</pre>

</programming-exercise>
