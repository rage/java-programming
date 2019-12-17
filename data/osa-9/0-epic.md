---
path: '/osa-9/0-epic'
title: 'Epic'
hidden: true
---


# Kokoelmien käsittely arvojen virtana

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

# Valmis rajapinta Comparable

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet Javan valmiin rajapinnan Comparable ja osaat toteuttaa sen omissa luokissasi.
- Osaat hyödyntää Javan valmiita välineitä sekä listojen järjestämiseen että virran alkioiden järjestämiseen.
- Osaat järjestää listan alkioita useampaa kriteeriä käyttäen (esim. osaat järjestää henkilöt nimen ja iän perusteella).

</text-box>


Edellisessä osassa tarkastelimme rajapintoja yleisemmin -- tutustutaan nyt yhteen Javan valmiista rajapinnoista. <a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Comparable.html">Comparable</a>-rajapinta määrittelee metodin `compareTo`, jota käytetään olioiden vertailuun. Mikäli luokka toteuttaa rajapinnan Comparable, voidaan luokasta tehdyt oliot järjestää Javan valmiita järjestysalgoritmeja käyttäen.

Comparable-rajapinnan vaatima compareTo-metodi saa parametrinaan olion, johon "this"-oliota verrataan. Mikäli olio on vertailujärjestyksessä ennen parametrina saatavaa olioa, tulee metodin palauttaa negatiivinen luku. Mikäli taas olio on järjestyksessä parametrina saatavan olion jälkeen, tulee metodin palauttaa positiivinen luku. Muulloin palautetaan luku 0. Tätä `compareTo`-metodin avulla johdettua järjestystä kutsutaan *luonnolliseksi järjestykseksi* (natural ordering).

Tarkastellaan tätä kerhossa käyvää lasta tai nuorta kuvaavan luokan Kerholainen avulla. Jokaisella kerholaisella on nimi ja pituus. Kerholaisten tulee mennä syömään pituusjärjestyksessä, joten toteutetaan kerholaisille rajapinta `Comparable`. Comparable-rajapinta ottaa tyyppiparametrinaan luokan, johon vertaus tehdään. Käytetään tyyppiparametrina samaa luokkaa `Kerholainen`.


```java
public class Kerholainen implements Comparable<Kerholainen> {
    private String nimi;
    private int pituus;

    public Kerholainen(String nimi, int pituus) {
        this.nimi = nimi;
        this.pituus = pituus;
    }

    public String getNimi() {
        return this.nimi;
    }

    public int getPituus() {
        return this.pituus;
    }

    @Override
    public String toString() {
        return this.getNimi() + " (" + this.getPituus() + ")";
    }

    @Override
    public int compareTo(Kerholainen kerholainen) {
        if (this.pituus == kerholainen.getPituus()) {
            return 0;
        } else if (this.pituus > kerholainen.getPituus()) {
            return 1;
        } else {
            return -1;
        }
    }
}
```

Rajapinnan vaatima metodi `compareTo` palauttaa kokonaisluvun, joka kertoo vertausjärjestyksestä.


Koska `compareTo()`-metodista riittää palauttaa negatiivinen luku, jos `this`-olio on pienempi kuin parametrina annettu olio ja nolla, kun pituudet ovat samat, voidaan edellä esitelty metodi `compareTo` toteuttaa myös seuraavasti.


```java
@Override
public int compareTo(Kerholainen kerholainen) {
    return this.pituus - kerholainen.getPituus();
}
```

Koska Kerholainen toteuttaa rajapinnan Comparable, voi listan kerholaisia järjestää virran `sorted`-metodilla. Oikeastaan minkä tahansa `Comparable`-rajapinnan toteuttavan luokan oliot voi järjestää virran sorted-metodilla. Huomaa kuitenkin, että virta ei järjestä alkuperäistä listaa, vaan *vain virrassa olevat alkiot ovat järjestyksessä*.

Mikäli ohjelmoija haluaa järjestää alkuperäisen listan, tähän kannattaa käyttää `Collections`-luokan metodia `sort` -- luonnollisesti olettaen, että listalla olevat oliot toteuttavat rajapinnan `Comparable`.

Kerholaisten järjestäminen on nyt suoraviivaista.


```java
List<Kerholainen> kerholaiset = new ArrayList<>();
kerholaiset.add(new Kerholainen("mikael", 182));
kerholaiset.add(new Kerholainen("matti", 187));
kerholaiset.add(new Kerholainen("ada", 184));

kerholaiset.stream().forEach(k -> System.out.println(k);
System.out.println();
// tulostettavan virran järjestäminen virran sorted-metodilla
kerholaiset.stream().sorted().forEach(k -> System.out.println(k);
kerholaiset.stream().forEach(k -> System.out.println(k);

// listan järjestäminen Collections-luokan tarjoamalla sort-metodilla
Collections.sort(kerholaiset);
kerholaiset.stream().forEach(k -> System.out.println(k);
```

<sample-output>

mikael (182)
matti (187)
ada (184)

mikael (182)
ada (184)
matti (187)

mikael (182)
matti (187)
ada (184)

mikael (182)
ada (184)
matti (187)

</sample-output>


<quiz id='740810d6-0158-5f8a-9119-9afb80d52dc6'></quiz>


<programming-exercise name='Palkkajärjestys' tmcname='osa09-Osa09_11.Palkkajarjestys'>

Saat valmiin luokan Ihminen. Ihmisellä on nimi- ja palkkatiedot. Toteuta Ihminen-luokassa `Comparable`-rajapinta siten, että `compareTo`-metodi lajittelee ihmiset palkan mukaan järjestykseen isoimmasta palkasta pienimpään.

</programming-exercise>


<programming-exercise name='Opiskelijat nimijärjestykseen' tmcname='osa09-Osa09_12.OpiskelijatNimijarjestykseen'>

Saat valmiin luokan Opiskelija. Opiskelijalla on nimi. Toteuta Opiskelija-luokassa `Comparable`-rajapinta siten, että `compareTo`-metodi lajittelee opiskelijat nimen mukaan aakkosjärjestykseen.

**Vinkki:** Opiskelijan nimi on String, ja String-luokka on itsessään `Comparable`. Voit hyödyntää String-luokan `compareTo`-metodia Opiskelija-luokan metodia toteuttaessasi. `String.compareTo` kohtelee kirjaimia eriarvoisesti kirjainkoon mukaan, ja tätä varten String-luokalla on myös metodi `compareToIgnoreCase` joka nimensä mukaisesti jättää kirjainkoon huomioimatta. Voit käyttää opiskelijoiden järjestämiseen kumpaa näistä haluat.

</programming-exercise>


<text-box variant='hint' name='Useamman rajapinnan toteuttaminen'>

Luokka voi toteuttaa useamman rajapinnan. Useamman rajapinnan toteuttaminen tapahtuu erottamalla toteutettavat rajapinnat toisistaan pilkuilla (`public class ... implements *RajapintaEka*, *RajapintaToka* ...`). Toteuttaessamme useampaa rajapintaa, tulee meidän toteuttaa kaikki rajapintojen vaatimat metodit.

Oletetaan, että käytössämme on seuraava rajapinta `Tunnistettava`.


```java
public interface Tunnistettava {
    String getTunnus();
}
```

Haluamme luoda Henkilön, joka on sekä tunnustettava että järjestettävä. Tämä onnistuu toteuttamalla molemmat rajapinnat. Alla esimerkki.


```java
public class Henkilo implements Tunnistettava, Comparable<Henkilo> {
    private String nimi;
    private String henkilotunnus;

    public Henkilo(String nimi, String henkilotunnus) {
        this.nimi = nimi;
        this.henkilotunnus = henkilotunnus;
    }

    public String getNimi() {
        return this.nimi;
    }

    public String getHenkilotunnus() {
        return this.henkilotunnus;
    }

    @Override
    public String getTunnus() {
        return getHenkilotunnus();
    }

    @Override
    public int compareTo(Henkilo toinen) {
        return this.getTunnus().compareTo(toinen.getTunnus());
    }
}
```

</text-box>


## Järjestämismetodi lambda-lausekkeena

Oletetaan, että käytössämme on seuraava luokka Henkilo.



```java
public class Henkilo {

    private int syntymavuosi;
    private String nimi;

    public Henkilo(int syntymavuosi, String nimi) {
        this.syntymavuosi = syntymavuosi;
        this.nimi = nimi;
    }

    public String getNimi() {
        return nimi;
    }

    public int getSyntymavuosi() {
        return syntymavuosi;
    }
}
```


Sekä henkilöolioita listalla.


```java
ArrayList<Henkilo> henkilot = new ArrayList<>();
henkilot.add(new Henkilo("Ada Lovelace", 1815));
henkilot.add(new Henkilo("Irma Wyman", 1928));
henkilot.add(new Henkilo("Grace Hopper", 1906));
henkilot.add(new Henkilo("Mary Coombs", 1929));
```

Haluamme järjestää listan ilman, että henkilo-olion tulee toteuttaa rajapinta `Comparable`.

Sekä luokan `Collections` metodille `sort` että virran metodille `sorted` voidaan antaa parametrina lambda-lauseke, joka määrittelee järjestämistoiminnallisuuden. Tarkemmin ottaen kummallekin metodille voidaan antaa <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html" target="_blank">Comparator</a>-rajapinnan toteuttama olio, joka määrittelee halutun järjestyksen -- lambda-lausekkeen avulla luodaan tämä olio.


```java
ArrayList<Henkilo> henkilot = new ArrayList<>();
henkilot.add(new Henkilo("Ada Lovelace", 1815));
henkilot.add(new Henkilo("Irma Wyman", 1928));
henkilot.add(new Henkilo("Grace Hopper", 1906));
henkilot.add(new Henkilo("Mary Coombs", 1929));

henkilot.stream().sorted((h1, h2) -> {
    return h1.getSyntymavuosi() - h2.getSyntymavuosi();
}).forEach(h -> System.out.println(h.getNimi()));

System.out.println();

henkilot.stream().forEach(h -> System.out.println(h.getNimi()));

System.out.println();

Collections.sort(henkilot, (h1, h2) -> h1.getSyntymavuosi() - h2.getSyntymavuosi());

henkilot.stream().forEach(h -> System.out.println(h.getNimi()));
```

<sample-output>

Ada Lovelace
Grace Hopper
Irma Wyman
Mary Coombs

Ada Lovelace
Irma Wyman
Grace Hopper
Mary Coombs

Ada Lovelace
Grace Hopper
Irma Wyman
Mary Coombs

</sample-output>

Merkkijonoja vertailtaessa voimme käyttää String-luokan valmista `compareTo`-metodia. Metodi palauttaa sille annetun parametrina annetun merkkijonon sekä metodia kutsuvan merkkijonon järjestykstä kuvaavan kokonaisluvun.


```java

ArrayList<Henkilo> henkilot = new ArrayList<>();
henkilot.add(new Henkilo("Ada Lovelace", 1815));
henkilot.add(new Henkilo("Irma Wyman", 1928));
henkilot.add(new Henkilo("Grace Hopper", 1906));
henkilot.add(new Henkilo("Mary Coombs", 1929));

henkilot.stream().sorted((h1, h2) -> {
    return h1.getNimi().compareTo(h2.getNimi());
}).forEach(h -> System.out.println(h.getNimi()));
```

<sample-output>

Ada Lovelace
Grace Hopper
Irma Wyman
Mary Coombs

</sample-output>


<programming-exercise name='Lukutaitovertailu (2 osaa)' tmcname='osa09-Osa09_13.Lukutaitovertailu'>

Käytetään tässä tehtävässä UNESCOn avointa dataa lukutaidosta. Data sisältää tilastot eri maiden arvioiduista tai raportoiduista lukutaidoista viimeisen kahden vuoden ajalta. Tehtäväpohjassa mukana oleva tiedosto `lukutaito.csv` sisältää arviot sekä yli 15-vuotiaiden naisten että yli 15-vuotiaiden miesten lukutaidosta. Tiedoston lukutaito.csv yksittäisen rivin muoto on seuraava: teema, ikäryhmä, sukupuoli, maa, vuosi, lukutaitoprosentti. Alla on esimerkkinä tiedoston viisi ensimmäistä riviä.


<pre>
Adult literacy rate, population 15+ years, female (%),United Republic of Tanzania,2015,76.08978
Adult literacy rate, population 15+ years, female (%),Zimbabwe,2015,85.28513
Adult literacy rate, population 15+ years, male (%),Honduras,2014,87.39595
Adult literacy rate, population 15+ years, male (%),Honduras,2015,88.32135
Adult literacy rate, population 15+ years, male (%),Angola,2014,82.15105
</pre>


Kirjoita ohjelma, joka lukee tiedoston `lukutaito.csv` ja tulostaa tiedoston sisällön pienimmästä lukutaidosta suurimpaan. Tulostus tulee muotoilla seuraavan esimerkin näyttämään muotoon. Esimerkki näyttää tulostuksen ensimmäiset 5 odotettua riviä.


<sample-output>

Niger (2015), female, 11.01572
Mali (2015), female, 22.19578
Guinea (2015), female, 22.87104
Afghanistan (2015), female, 23.87385
Central African Republic (2015), female, 24.35549

</sample-output>

Tehtävä on kahden pisteen arvoinen.

Vinkki! Merkkijonon saa pilkottua taulukoksi pilkun kohdalta seuraavalla tavalla.


```java
String mjono = "Adult literacy rate, population 15+ years, female (%),Zimbabwe,2015,85.28513";
String[] palat = mjono.split(",");
// nyt palat[0] sisältää "Adult literacy rate"
// palat[1] sisältää " population 15+ years"
// jne.

// saat välilyönnit pois alusta ja lopusta trim-metodilla:
palat[1] = palat[1].trim();
```

</programming-exercise>


## Järjestäminen useamman asian perusteella

Joskus haluamme järjestää esineitä useamman asian perusteella. Tarkastellaan seuraavaksi esimerkkiä, missä elokuvat listataan nimen ja julkaisuvuoden perusteella järjestettynä. Tässä käytämme Javan valmista <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html" target="_blank" norel>Comparator</a>-luokkaa, joka tarjoaa menetelmiä järjestämiseen. Oletetaan, että käytössämme on seuraava luokka `Elokuva`


```java
public class Elokuva {
    private String nimi;
    private int julkaisuvuosi;

    public Elokuva(String nimi, int julkaisuvuosi) {
        this.nimi = nimi;
        this.julkaisuvuosi = julkaisuvuosi;
    }

    public String getNimi() {
        return this.nimi;
    }

    public int getJulkaisuvuosi() {
        return this.julkaisuvuosi;
    }

    public String toString() {
        return this.nimi + " (" + this.julkaisuvuosi + ")";
    }
}
```

Luokka `Comparator` tarjoaa järjestämistä varten kaksi oleellista metodia: `comparing` ja `thenComparing`. Metodille `comparing` kerrotaan ensiksi verrattava arvo, ja metodille `thenComparing` seuraavaksi verrattava arvo. Metodia `thenComparing` voi käyttää monesti metodeja ketjuttaen, mikä mahdollistaa käytännössä rajattoman määrän vertailussa käytettäviä arvoja.

Kun järjestämme olioita, metodeille `comparing` ja `thenComparing` annetaan parametrina olion tyyppiin liittyvä metodiviite -- järjestyksessä kutsutaan metodia ja vertaillaan metodin palauttamia arvoja. Metodiviite annetaan muodossa `Luokka::metodi`. Alla olevassa esimerkissä tulostetaan elokuvat vuoden ja nimen perusteella järjestyksessä.

```java
List<Elokuva> elokuvat = new ArrayList<>();
elokuvat.add(new Elokuva("A", 2000));
elokuvat.add(new Elokuva("B", 1999));
elokuvat.add(new Elokuva("C", 2001));
elokuvat.add(new Elokuva("D", 2000));

for (Elokuva e: elokuvat) {
    System.out.println(e);
}

Comparator<Elokuva> vertailija = Comparator
              .comparing(Elokuva::getJulkaisuvuosi)
              .thenComparing(Elokuva::getNimi);

Collections.sort(elokuvat, vertailija);

for (Elokuva e: elokuvat) {
    System.out.println(e);
}
```

<sample-output>

A (2000)
B (1999)
C (2001)
D (2000)

B (1999)
A (2000)
D (2000)
C (2001)

</sample-output>


<programming-exercise name='Kirjallisuutta (3 osaa)' tmcname='osa09-Osa09_14.Kirjallisuutta'>

Tee ohjelma, joka lukee käyttäjältä kirjoja ja niiden minimikohdeikiä. Minimikohdeiällä tarkoitetaan pienintä ikää vuosina, jolle kyseistä kirjaa suositellaan.

Ohjelma kysyy uusia kirjoja kunnes käyttäjä syöttää tyhjän merkkijonon kirjan nimen kohdalla (eli painaa rivinvaihtoa). Tämän jälkeen ohjelma tulostaa syötettyjen kirjojen lukumäärän sekä kirjat.


<h2>Kirjojen lukeminen ja tulostaminen</h2>

Toteuta ensin kirjojen lukeminen ja niiden listaaminen. Tässä vaiheessa kirjojen järjestyksellä ei ole vielä väliä.


<sample-output>

Syötä kirjan nimi, tyhjä lopettaa: **Soiva tuutulaulukirja**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Kurkkaa kulkuneuvot**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Lunta tupaan**
Syötä kirjan pienin kohdeikä: **12**

Syötä kirjan nimi, tyhjä lopettaa: **Litmanen 10**
Syötä kirjan pienin kohdeikä: **10**

Syötä kirjan nimi, tyhjä lopettaa:

Yhteensä 4 kirjaa.

Kirjat:
Soiva tuutulaulukirja (0 vuotiaille ja vanhemmille)
Kurkkaa kulkuneuvot (0 vuotiaille ja vanhemmille)
Lunta tupaan (12 vuotiaille ja vanhemmille)
Litmanen 10 (10 vuotiaille ja vanhemmille)

</sample-output>


<h2>Kirjojen järjestäminen kohdeiän perusteella</h2>


Täydennä toteuttamaasi ohjelmaa siten, että kirjat järjestetään tulostuksen yhteydessä kohdeiän perusteella. Jos kahdella kirjalla on sama kohdeikä, näiden kahden kirjan keskinäinen järjestys saa olla mielivaltainen.


<sample-output>

Syötä kirjan nimi, tyhjä lopettaa: **Soiva tuutulaulukirja**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Kurkkaa kulkuneuvot**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Lunta tupaan**
Syötä kirjan pienin kohdeikä: **12**

Syötä kirjan nimi, tyhjä lopettaa: **Litmanen 10**
Syötä kirjan pienin kohdeikä: **10**

Syötä kirjan nimi, tyhjä lopettaa:

Yhteensä 4 kirjaa.

Kirjat:
Soiva tuutulaulukirja (0 vuotiaille ja vanhemmille)
Kurkkaa kulkuneuvot (0 vuotiaille ja vanhemmille)
Litmanen 10 (10 vuotiaille ja vanhemmille)
Lunta tupaan (12 vuotiaille ja vanhemmille)

</sample-output>


<h2>Kirjojen järjestäminen kohdeiän ja nimen perusteella</h2>


Täydennä edellistä ohjelmaasi siten, että saman kohdeiän kirjat tulostetaan aakkosjärjestyksessä.

<sample-output>

Syötä kirjan nimi, tyhjä lopettaa: **Soiva tuutulaulukirja**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Kurkkaa kulkuneuvot**
Syötä kirjan pienin kohdeikä: **0**

Syötä kirjan nimi, tyhjä lopettaa: **Lunta tupaan**
Syötä kirjan pienin kohdeikä: **12**

Syötä kirjan nimi, tyhjä lopettaa: **Litmanen 10**
Syötä kirjan pienin kohdeikä: **10**

Syötä kirjan nimi, tyhjä lopettaa:

Yhteensä 4 kirjaa.

Kirjat:
Kurkkaa kulkuneuvot (0 vuotiaille ja vanhemmille)
Soiva tuutulaulukirja (0 vuotiaille ja vanhemmille)
Litmanen 10 (10 vuotiaille ja vanhemmille)
Lunta tupaan (12 vuotiaille ja vanhemmille)

</sample-output>

</programming-exercise>


# Muutamia yleishyödyllisiä tekniikoita


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet perinteisen for-toistolauseen.
- Tiedät merkkijonojen liittämiseen liittyviä ongelmia ja osaat välttää ne StringBuilder-luokan avulla.
- Tunnet säännölliset lausekkeet ja osaat kirjoittaa omia säännöllisiä lausekkeita.
- Tunnet luetellut tyypit (enum) ja tiedät milloin niitä kannattaa käyttää.
- Osaat käyttää iteraattoria tietokokoelmien läpikäyntiin.

</text-box>

Tutustutaan seuraavaksi muutamaan ohjelmoinnissa varsin näppärään tekniikaan sekä luokkaan.


## For-toistolause

TODO: tämä nyt kakkososassa

Olemme käyttäneet tähän mennessä ohjelmissamme while-toistolausetta, foreach-toistolausetta sekä virtoja. Tutustutaan nyt vielä yhteen toistolauseeseen eli perinteiseen for-toistolauseeseen.

Olemme käyttäneet indeksistä kirjaa pitävänä toistolauseena toistaiseksi while-toistolausetta. Sen toiminta on seuraavanlainen.

```java
int i = 0;
while (i < 10) {
    System.out.println(i);
    i++;
}
```

Ylläolevan toistolauseen voi pilkkoa kolmeen osaan. Ensin esittelemme toistolauseessa toistokertojen laskemiseen käytettävän muuttujan `i` ja asetamme sen arvon nollaksi: `int i = 0;`. Tätä seuraa toistolauseen määrittely -- toistolauseen ehto on `i < 10` eli toistolausetta suoritetaan niin pitkään kuin muuttujan `i` arvo on pienempi kuin 10. Toistolauseessa on toistettava toiminnallisuus `System.out.println(i);`, jota seuraa toistolauseessa käytettävän muuttujan kasvatus `i++`.

Saman toteuttaminen tapahtuu indeksistä kirjaa pitävällä for-toistolauseella seuraavasti.

```java
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}
```

Toistolause for koostuu neljästä osasta: (1) toistokertojen laskemiseen käytettävän muuttujan esittelystä; (2) toistolauseen ehdosta; (3) laskemiseen käytetyn muuttujan kasvattamisesta (tai pienentämisestä tai muuttamisesta); ja (4) toistettavasta toiminnallisuudesta.


```java
for (*muuttujan esittely*; *ehto*; *kasvatus*) {
    // toistettava asia
}
```


## StringBuilder


Tarkastellaan seuraavaa ohjelmaa.

```java
String luvut = "";
for (int i = 1; i < 5; i++) {
    luvut = luvut + i;
}
System.out.println(luvut);
```

<sample-output>

1234

</sample-output>

Ohjelma on rakenteeltaan suoraviivainen. Ohjelmassa luodaan merkkijono, joka sisältää luvun 1234. Lopulta merkkijono tulostetaan.

Ohjelma toimii, mutta sen toiminnallisuudessa on pieni käyttäjälle näkymätön ongelma. Kutsu `luvut + i` luo *uuden* merkkijonon. Tarkastellaan ohjelmaa riveittän siten, että toistolause on purettu auki.


```java
String luvut = ""; // luodaan uusi merkkijono: ""
int i = 1;
luvut = luvut + i; // luodaan uusi merkkijono: "1"
i++;
luvut = luvut + i; // luodaan uusi merkkijono: "12"
i++;
luvut = luvut + i; // luodaan uusi merkkijono: "123"
i++;
luvut = luvut + i; // luodaan uusi merkkijono: "1234"
i++;

System.out.println(luvut); // tulostetaan merkkijono
```

Edellisessä esimerkissä luodaan yhteensä viisi merkkijonoa.

Tarkastellaan samaa ohjelmaa siten, että jokaisen luvun jälkeen lisätään rivinvaihto.


```java
String luvut = "";
for (int i = 1; i < 5; i++) {
    luvut = luvut + i + "\n";
}
System.out.println(luvut);
```

<sample-output>

1
2
3
4

</sample-output>

Kukin `+`-operaatio luo uuden merkkijonon. Yllä rivillä `luvut + i + "\n";` luodaan ensin merkkijono `luvut + i`, jonka jälkeen luodaan toinen merkkijono, joka yhdistää edellä luotuun merkkijonoon rivinvaihdon. Kirjoitetaan tämäkin auki.

```java
String luvut = ""; // luodaan uusi merkkijono: ""
int i = 1;
// luodaan ensin merkkijono "1" ja sitten merkkijono "1\n"
luvut = luvut + i + "\n";
i++;
// luodaan ensin merkkijono "1\n2" ja sitten merkkijono "1\n2\n"
luvut = luvut + i + "\n"
i++;
// luodaan ensin merkkijono "1\n2\n3" ja sitten merkkijono "1\n2\n3\n"
luvut = luvut + i + "\n"
i++;
// jne
luvut = luvut + i + "\n"
i++;

System.out.println(luvut); // tulostetaan merkkijono
```

Edellisessä esimerkissä luodaan yhteensä yhdeksän merkkijonoa.

Merkkijonojen luonti -- vaikka pienessä mittakaavassa se ei näy -- ei ole nopea operaatio. Jokaista merkkijonoa varten varataan muistista tilaa, mihin merkkijono asetetaan. Mikäli merkkijonoa tarvitaan vain osana laajemman merkkijonon rakentamista, toimintaa kannattaa tehostaa.

Javan valmis luokka StringBuilder tarjoaa tavan merkkijonojen yhdistämiseen ilman turhaa merkkijonojen luomista. Uusi StringBuilder-olio luodaan `new StringBuilder()` -kutsulla, ja olioon lisätään sisältöä `append`-metodilla, joka on kuormitettu, eli siitä on monta versiota eri tyyppisille muuttujille. Lopulta StringBuilder-oliolta saa merkkijonon metodilla `toString`.

Alla olevassa esimerkissä luodaan vain yksi merkkijono.

```java
StringBuilder luvut = new StringBuilder();
for (int i = 1; i < 5; i++) {
    luvut.append(i);
}
System.out.println(luvut.toString());
```

StringBuilderin käyttö on suurien merkkijonojen luomisessa tehokkaampaa kuin merkkijonojen luominen `+`-operaatiolla.

<quiz id='67155c46-c03e-55f9-85ea-c19a85bade1e'></quiz>

<quiz id='a3a98299-45b3-5824-af6d-d468165a73d3'></quiz>


## Säännölliset lausekkeet

Säännöllinen lauseke määrittelee joukon merkkijonoja tiiviissä muodossa. Säännöllisiä lausekkeita käytetään muun muassa merkkijonojen oikeellisuuden tarkistamiseen. Merkkijonojen oikeellisuuden tarkastaminen tapahtuu luomalla säännöllinen lauseke, joka määrittelee merkkijonot, jotka ovat oikein.

Tarkastellaan ongelmaa, jossa täytyy tarkistaa, onko käyttäjän antama opiskelijanumero oikeanmuotoinen. Opiskelijanumero alkaa merkkijonolla "01", jota seuraa 7 numeroa väliltä 0&ndash;9.

Opiskelijanumeron oikeellisuuden voisi tarkistaa esimerkiksi käymällä opiskelijanumeroa esittävän merkkijonon läpi merkki merkiltä `charAt`-metodin avulla. Toinen tapa olisi tarkistaa että ensimmäinen merkki on "0", ja käyttää `Integer.valueOf` metodikutsua merkkijonon muuntamiseen numeroksi. Tämän jälkeen voisi tarkistaa että `Integer.valueOf`-metodin palauttama luku on pienempi kuin 20000000.

Oikeellisuuden tarkistus säännöllisten lausekkeiden avulla tapahtuu ensin sopivan säännöllisen lausekkeen määrittelyn. Tämän jälkeen käytetään `String`-luokan metodia `matches`, joka tarkistaa vastaako merkkijono parametrina annettua säännöllistä lauseketta. Opiskelijanumeron tapauksessa sopiva säännöllinen lauseke on `"01[0-9]{7}"`, ja käyttäjän syöttämän opiskelijanumeron tarkistaminen käy seuraavasti:


```java
System.out.print("Anna opiskelijanumero: ");
String numero = lukija.nextLine();

if (numero.matches("01[0-9]{7}")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
```

Käydään seuraavaksi läpi eniten käytettyjä säännöllisten lausekkeiden merkintöjä.


### Vaihtoehtoisuus (pystyviiva)

Pystyviiva tarkoittaa, että säännöllisen lausekkeen osat ovat vaihtoehtoisia. Esimerkiksi lauseke `00|111|0000` määrittelee merkkijonot `00`, `111` ja `0000`. Metodi `matches` palauttaa arvon `true` jos merkkijono vastaa jotain määritellyistä vaihtoehdoista.


```java
String merkkijono = "00";

if (merkkijono.matches("00|111|0000")) {
    System.out.println("Merkkijonosta löytyi joku kolmesta vaihtoehdosta");
} else {
    System.out.println("Merkkijonosta ei löytynyt yhtäkään vaihtoehdoista");
}
```

<sample-output>

Merkkijonosta löytyi joku kolmesta vaihtoehdosta

</sample-output>

Säännöllinen lauseke `00|111|0000` vaatii että merkkijono on täsmälleen määritellyn muotoinen: se ei määrittele *"contains"*-toiminnallisuutta.


```java
String merkkijono = "1111";

if (merkkijono.matches("00|111|0000")) {
    System.out.println("Merkkijonosta löytyi joku kolmesta vaihtoehdosta");
} else {
    System.out.println("Merkkijonosta ei löytynyt yhtäkään vaihtoehdoista");
}
```

<sample-output>

Merkkijonosta ei löytynyt yhtäkään vaihtoehdoista

</sample-output>


### Merkkijonon osaan rajattu vaikutus (sulut)

Sulkujen avulla voi määrittää, mihin säännöllisen lausekkeen osaan sulkujen sisällä olevat merkinnät vaikuttavat. Jos haluamme sallia merkkijonot `00000` ja `00001`, voimme määritellä ne pystyviivan avulla muodossa `00000|00001`. Sulkujen avulla voimme rajoittaa vaihtoehtoisuuden vain osaan merkkijonoa. Lauseke `0000(0|1)` määrittelee merkkijonot `00000` ja `00001`.


Vastaavasti säännöllinen lauseke `auto(|n|a)` määrittelee sanan auto yksikön nominatiivin (auto), genetiivin (auton), partitiivin (autoa) ja akkusatiivin (auto tai auton).


```java
System.out.print("Kirjoita joku sanan auto yksikön taivutusmuoto: ");
String sana = lukija.nextLine();

if (sana.matches("auto(|n|a|ssa|sta|on|lla|lta|lle|na|ksi|tta)")) {
    System.out.println("Oikein meni! RRrakastan tätä kieltä!");
} else {
    System.out.println("Taivutusmuoto ei ole oikea.");
}
```

### Toistomerkinnät

Usein halutaan, että merkkijonossa toistuu jokin tietty alimerkkijono. Säännöllisissä lausekkeissa on käytössä seuraavat toistomerkinnät:

- Merkintä <strong>`*`</strong> toisto 0... kertaa, esim:

```java
String merkkijono = "trolololololo";

if (merkkijono.matches("trolo(lo)*")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
```

<sample-output>

Muoto on oikea.

</sample-output>

- Merkintä <strong>`+`</strong> toisto 1... kertaa, esim:

```java
String merkkijono = "trolololololo";

if (merkkijono.matches("tro(lo)+")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
```

<sample-output>

Muoto on oikea.

</sample-output>

```java
String merkkijono = "nänänänänänänänä Bätmään!";

if (merkkijono.matches("(nä)+ Bätmään!")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
```

<sample-output>

Muoto on oikea.

</sample-output>


- Merkintä <strong>`?`</strong> toisto 0 tai 1 kertaa, esim:

```java
String merkkijono = "You have to accidentally the whole meme";

if (merkkijono.matches("You have to accidentally (delete )?the whole meme")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
```

<sample-output>

Muoto on oikea.

</sample-output>


- Merkintä <strong>`{a}`</strong> toisto `a` kertaa, esim:

```java
String merkkijono = "1010";

if (merkkijono.matches("(10){2}")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
```

<sample-output>

Muoto on oikea.

</sample-output>


- Merkintä <strong>`{a,b}`</strong> toisto `a` ... `b` kertaa, esim:

```java
String merkkijono = "1";

if (merkkijono.matches("1{2,4}")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
```

<sample-output>

Muoto ei ole oikea.

</sample-output>


- Merkintä <strong>`{a,}`</strong> toisto `a` ... kertaa, esim:

```java
String merkkijono = "11111";

if (merkkijono.matches("1{2,}")) {
    System.out.println("Muoto on oikea.");
} else {
    System.out.println("Muoto ei ole oikea.");
}
```

<sample-output>

Muoto on oikea.

</sample-output>

Samassa säännöllisessä lausekkeessa voi käyttää myös useampia toistomerkintöjä. Esimerkiksi säännöllinen lauseke `5{3}(1|0)*5{3}` määrittelee merkkijonot, jotka alkavat ja loppuvat kolmella vitosella. Välissä saa tulla rajaton määrä ykkösiä ja nollia.



### Merkkiryhmät (hakasulut)

Merkkiryhmän avulla voi määritellä lyhyesti joukon merkkejä. Merkit kirjoitetaan hakasulkujen sisään, ja merkkivälin voi määrittää viivan avulla. Esimerkiksi merkintä `[145]` tarkoittaa samaa kuin `(1|4|5)` ja merkintä `[2-36-9]` tarkoittaa samaa kuin `(2|3|6|7|8|9)`. Vastaavasti merkintä `[a-c]*` määrittelee säännöllisen lausekkeen, joka vaatii että merkkijono sisältää vain merkkejä `a`, `b` ja `c`.


<quiz id='7cb98d11-5b78-5cda-8b45-c84abd747a9d'></quiz>


<programming-exercise name='Säännölliset lausekkeet (3 osaa)' tmcname='osa09-Osa09_15.SaannollisetLausekkeet'>

Harjoitellaan hieman säännöllisten lausekkeiden käyttöä. Tehtävissä haetut metodit tehdään luokkaan `Tarkistin`.


<h2>Viikonpäivä</h2>

Tee säännöllisen lausekkeen avulla metodi `public boolean onViikonpaiva(String merkkijono)`, joka palauttaa `true` jos sen parametrina saama merkkijono on viikonpäivän lyhenne (ma, ti, ke, to, pe, la tai su).

Esimerkkitulostuksia metodia käyttävästä ohjelmasta:

<sample-output>

Anna merkkijono: **ti**
Muoto on oikea.

</sample-output>

<sample-output>

Anna merkkijono: **abc**
Muoto ei ole oikea.

</sample-output>


<h2>Vokaalitarkistus</h2>

Tee metodi `public boolean kaikkiVokaaleja(String merkkijono)` joka tarkistaa säännöllisen lausekkeen avulla ovatko parametrina olevan merkkijonon kaikki merkit vokaaleja.

Esimerkkitulostuksia metodia käyttävästä ohjelmasta:

<sample-output>

Anna merkkijono: **aie**
Muoto on oikea.

</sample-output>

<sample-output>

Anna merkkijono: **ane**
Muoto ei ole oikea.

</sample-output>


<h2>Kellonaika</h2>


Säännölliset lausekkeet sopivat tietynlaisiin tilanteisiin. Joissain tapaukseesa lausekkeista tulee liian monimutkaisia, ja merkkijonon "sopivuus" kannattaa tarkastaa muulla tyylillä tai voi olla tarkoituksenmukaista käyttää säännöllisiä lausekkeita vain osaan tarkastuksesta.

Tee  metodi `public boolean kellonaika(String merkkijono)`  ohjelma, joka tarkistaa säännöllisen lausekkeen avulla onko parametrina oleva merkkijono muotoa `tt:mm:ss` oleva kellonaika (tunnit, minuutit ja sekunnit kaksinumeroisina).

Esimerkkitulostuksia metodia käyttävästä ohjelmasta:

<sample-output>

Anna merkkijono: **17:23:05**
Muoto on oikea.

</sample-output>

<sample-output>

Anna merkkijono: **abc**
Muoto ei ole oikea.

</sample-output>

<sample-output>

Anna merkkijono: **33:33:33**
Muoto ei ole oikea.

</sample-output>

</programming-exercise>


Nykyään lähes kaikista ohjelmointikielistä löytyy tuki säännöllisille lausekkeille. Säännöllisten lausekkeiden teoriaa tarkastellaan muunmuassa kurssilla Laskennan mallit (TKT-20005). Lisää säännöllisistä lausekkeista löydät esim. googlaamalla hakusanalla *regular expressions java*.


## Lueteltu tyyppi eli Enum

Jos tiedämme muuttujien mahdolliset arvot ennalta, voimme käyttää niiden esittämiseen `enum`-tyyppistä luokkaa eli *lueteltua tyyppiä*. Luetellut tyypit ovat oma luokkatyyppinsä rajapinnan ja normaalin luokan lisäksi. Lueteltu tyyppi määritellään avainsanalla `enum`. Esimerkiksi seuraava `Maa`-enumluokka määrittelee neljä vakioarvoa: `RUUTU`, `PATA`, `RISTI` ja `HERTTA`.


```java
public enum Maa {
    RUUTU, PATA, RISTI, HERTTA
}
```

Yksinkertaisimmassa muodossaan `enum` luettelee pilkulla erotettuina määrittelemänsä vakioarvot. Lueteltujen tyyppien arvot eli vakiot on yleensä tapana kirjoittaa kokonaan isoin kirjaimin.

Enum luodaan (yleensä) omaan tiedostoon, samaan tapaan kuin luokka tai rajapinta. NetBeansissa Enumin saa luotua valitsemalla projektin kohdalla *new/other/java/java enum*.

Seuraavassa luokka `Kortti` jossa maa esitetään enumin avulla:

```java
public class Kortti {

    private int arvo;
    private Maa maa;

    public Kortti(int arvo, Maa maa) {
        this.arvo = arvo;
        this.maa = maa;
    }

    @Override
    public String toString() {
        return maa + " " + arvo;
    }

    public Maa getMaa() {
        return maa;
    }

    public int getArvo() {
        return arvo;
    }
}
```

Korttia käytetään seuraavasti:

```java
Kortti eka = new Kortti(10, Maa.HERTTA);

System.out.println(eka);

if (eka.getMaa() == Maa.PATA) {
    System.out.println("on pata");
} else {
    System.out.println("ei ole pata");
}
```

Tulostuu:

<sample-output>

HERTTA 10
ei ole pata

</sample-output>

Huomaamme, että enumin tunnukset tulostuvat mukavasti! Oraclella on `enum`-tyyppiin liittyvä sivusto osoitteessa <a href="http://docs.oracle.com/javase/tutorial/java/javaOO/enum.html" target="_blank" rel="noopener">http://docs.oracle.com/javase/tutorial/java/javaOO/enum.html</a>.




<text-box variant='hint' name='Enumien vertailu'>

Ylläolevassa esimerkissä kahta enumia verrattiin yhtäsuuruusmerkkien avulla. Miksi tämä on ok?

Jokainen lueteltu arvo saa oman uniikin numerotunnuksen, ja niiden vertailu keskenään yhtäsuuruusmerkillä on ok. Kuten muutkin Javan luokat, myös luetellut arvot perivät Object-luokan ja sen equals-metodin. Luetelluilla luokilla myös equals-metodi vertailee tätä numerotunnusta.

Luetellun arvon numeraalisen tunnuksen saa selville metodille `ordinal()`. Metodi palauttaa käytännössä järjestysnumeron -- jos lueteltu arvo on esitelty ensimmäisenä, on sen järjestysnumero 0. Jos toisena, järjestysnumero on 1, jne.


```java
public enum Maa {
    RUUTU, PATA, RISTI, HERTTA
}
```

```java
System.out.println(Maa.RUUTU.ordinal());
System.out.println(Maa.HERTTA.ordinal());
```

<sample-output>

0
3

</sample-output>

</text-box>


### Lueteltujen tyyppien oliomuuttujat

Luetellut tyypit voivat sisältää oliomuuttujia. Oliomuuttujien arvot tulee asettaa luetellun tyypin määrittelevän luokan sisäisessä eli näkyvyysmääreen `private` omaavassa konstruktorissa. Enum-tyyppisillä luokilla ei saa olla `public`-konstruktoria.

Seuraavassa lueteltu tyyppi `Vari`, joka sisältää vakioarvot PUNAINEN, VIHREA ja SININEN. Vakioille on määritelty <a href="https://www.w3schools.com/colors/colors_picker.asp" target="_blank" rel="noopener">värikoodin</a> kertova oliomuuttuja:


```java
public enum Vari {
    // konstruktorin parametrit määritellään vakioarvoja lueteltaessa
    PUNAINEN("#FF0000"),
    VIHREA("#00FF00"),
    SININEN("#0000FF");

    private String koodi;        // oliomuuttuja

    private Vari(String koodi) { // konstruktori
        this.koodi = koodi;
    }

    public String getKoodi() {
        return this.koodi;
    }
}
```

Lueteltua tyyppiä `Vari` voidaan käyttää esimerkiksi seuraavasti:

```java
System.out.println(Vari.VIHREA.getKoodi());
```

<sample-output>
#00FF00
</sample-output>


## Iteraattori

Tarkastellaan seuraavaa luokkaa `Kasi`, joka mallintaa tietyssä korttipelissä pelaajan kädessä olevien korttien joukkoa:

```java
public class Kasi {
    private List<Kortti> kortit;

    public Kasi() {
        this.kortit = new ArrayList<>();
    }

    public void lisaa(Kortti kortti) {
        this.kortit.add(kortti);
    }

    public void tulosta() {
        this.kortit.stream().forEach(kortti -> {
            System.out.println(kortti);
        });
    }
}
```

Luokan metodi `tulosta` tulostaa jokaisen kädessä olevan kortin.

ArrayList ja muut *Collection*-rajapinnan toteuttavat "oliosäiliöt" toteuttavat rajapinnan *Iterable*, ja ne voidaan käydä läpi myös käyttäen *iteraattoria*, eli olioa, joka on varta vasten tarkoitettu tietyn oliokokoelman läpikäyntiin. Seuraavassa on iteraattoria käyttävä versio korttien tulostamisesta:

```java
public void tulosta() {
    Iterator<Kortti> iteraattori = kortit.iterator();

    while (iteraattori.hasNext()) {
        System.out.println(iteraattori.next());
    }
}
```


Iteraattori pyydetään kortteja sisältävältä listalta `kortit`. Iteraattori on ikäänkuin "sormi", joka osoittaa aina tiettyä listan sisällä olevaa olioa, ensin ensimmäistä ja sitten seuraavaa jne... kunnes "sormen" avulla on käyty jokainen olio läpi.

Iteraattori tarjoaa muutaman metodin. Metodilla `hasNext()` kysytään onko läpikäytäviä olioita vielä jäljellä. Jos on, voidaan iteraattorilta pyytää seuraavana vuorossa oleva olio metodilla `next()`. Metodi siis palauttaa seuraavana läpikäyntivuorossa olevan olion ja laittaa iteraattorin eli "sormen" osoittamaan seuraavana vuorossa olevaa läpikäytävää olioa.

Iteraattorin next-metodin palauttama olioviite voidaan ottaa toki talteen myös muuttujaan, eli metodi `tulosta` voitaisiin muotoilla myös seuraavasti.

```java
public void tulosta(){
    Iterator<Kortti> iteraattori = kortit.iterator();

    while (iteraattori.hasNext()) {
        Kortti seuraavanaVuorossa = iteraattori.next();
        System.out.println(seuraavanaVuorossa);
    }
}
```

Tarkastellaan seuraavaksi yhtä iteraattorin käyttökohdetta. Motivoidaan käyttökohde ensin ongelmallisella lähestymistavalla. Yritämme tehdä virran avulla metodia, joka poistaa käsiteltävästä virrasta ne kortit, joiden arvo on annettua arvoa pienempi.

```java
public class Kasi {
    // ...

    public void poistaHuonommat(int arvo) {
        this.kortit.stream().forEach(kortti -> {
            if (kortti.getArvo() < arvo) {
                kortit.remove(kortti);
            }
        });
    }
}
```

Metodin suoritus aiheuttaa ongelman.

<sample-output>

Exception in thread "main" java.util.ConcurrentModificationException
at ...
Java Result: 1

</sample-output>

Virheen syynä on se, että listan läpikäynti forEach-metodilla olettaa, ettei listaa muokata läpikäynnin yhteydessä. Listan muokkaaminen (eli tässä tapauksessa alkion poistaminen) aiheuttaa virheen -- voimme ajatella, että komento forEach menee tästä "sekaisin".

Jos listalta halutaan poistaa osa olioista läpikäynnin aikana osa, voi tämän tehdä iteraattoria käyttäen. Iteraattori-olion metodia `remove` kutsuttaessa listalta poistetaan siististi se alkio jonka iteraattori palautti edellisellä metodin `next` kutsulla. Toimiva versio metodista seuraavassa:


```java
public class Kasi {
    // ...

    public void poistaHuonommat(int arvo) {
        Iterator<Kortti> iteraattori = kortit.iterator();

        while (iteraattori.hasNext()) {
            if (iteraattori.next().getArvo() < arvo) {
                // poistetaan listalta olio jonka edellinen next-metodin kutsu palautti
                iteraattori.remove();
            }
        }
    }
}
```


<programming-exercise name='Enum ja Iteraattori (4 osaa)' tmcname='osa09-Osa09_16.EnumJaIteraattori' nocoins='true'>

Tehdään ohjelma pienen yrityksen henkilöstön hallintaan.


<h2>Koulutus</h2>

Tee lueteltu tyyppi eli enum `Koulutus` jolla on tunnukset `FT` (tohtori), `FM` (maisteri), `LuK` (kandidaatti), `FilYO` (ylioppilas).


<h2>Henkilo</h2>

Tee luokka `Henkilo`. Henkilölle annetaan konstruktorin parametrina annettava nimi ja koulutus. Henkilöllä on myös koulutuksen kertova metodi `public Koulutus getKoulutus()` sekä alla olevan esimerkin mukaista jälkeä tekevä `toString`-metodi.

```java
Henkilo vilma = new Henkilo("Vilma", Koulutus.FT);
System.out.println(vilma);
```

<sample-output>

Vilma, FT

</sample-output>


<h2>Tyontekijat</h2>

Luo luokka `Tyontekijat`. Työntekijät-olio sisältää listan Henkilo-olioita. Luokalla on parametriton konstruktori ja seuraavat metodit:

- `public void lisaa(Henkilo lisattava)` lisää parametrina olevan henkilön työntekijäksi
- `public void lisaa(List<Henkilo> lisattavat)` lisää parametrina olevan listan henkilöitä työntekijöiksi
- `public void tulosta()` tulostaa kaikki työntekijät
- `public void tulosta(Koulutus koulutus)` tulostaa työntekijät joiden koulutus on sama kuin parametrissa määritelty koulutus

**HUOM:** Luokan `Tyontekijat` `tulosta`-metodit on toteutettava iteraattoria käyttäen!


<h2>Irtisanominen</h2>

Tee luokalle  `Tyontekijat` metodi `public void irtisano(Koulutus koulutus)` joka poistaa Työntekijöiden joukosta kaikki henkilöt joiden koulutus on sama kuin metodin parametrina annettu.

**HUOM:** toteuta metodi iteraattoria käyttäen!

Seuraavassa esimerkki luokan käytöstä:

```java
Tyontekijat yliopisto = new Tyontekijat();
yliopisto.lisaa(new Henkilo("Petrus", Koulutus.FT));
yliopisto.lisaa(new Henkilo("Arto", Koulutus.FilYO));
yliopisto.lisaa(new Henkilo("Elina", Koulutus.FT));

yliopisto.tulosta();

yliopisto.irtisano(Koulutus.FilYO);

System.out.println("==");

yliopisto.tulosta();
```

Tulostuu:

<sample-output>

Petrus, FT
Arto, FilYO
Elina, FT
==
Petrus, FT
Elina, FT

</sample-output>

</programming-exercise>


<programming-exercise name='Kortit ojennukseen (6 osaa)' tmcname='osa09-Osa09_17.KortitOjennukseen'>

Tehtäväpohjan mukana on luokka, jonka oliot kuvaavat pelikortteja. Kortilla on arvo ja maa. Kortin arvo on esitetään numerona *2, 3, ..., 14* ja maa *Risti, Ruutu, Hertta* tai *Pata*. Ässä on siis arvo 14. Arvo esitetään kokonaislukuna ja maa enum-tyyppisenä oliona. Kortilla on myös metodi toString, jota käyttäen kortin arvo ja maa tulostuvat "ihmisystävällisesti".

Korttien luominen tapahtuu seuraavasti.


```java
Kortti eka = new Kortti(2, Maa.RUUTU);
Kortti toka = new Kortti(14, Maa.PATA);
Kortti kolmas = new Kortti(12, Maa.HERTTA);

System.out.println(eka);
System.out.println(toka);
System.out.println(kolmas);
```

Tulostuu:

<sample-output>

RUUTU 2
PATA A
HERTTA Q

</sample-output>


<h2>Kortti-luokasta Comparable</h2>

Tee Kortti-luokasta `Comparable`. Toteuta `compareTo`-metodi niin, että korttien järjestys on arvon mukaan nouseva. Jos verrattavien Korttien arvot ovat samat, verrataan niitä maan perusteella nousevassa järjestyksessä: *risti ensin, ruutu toiseksi, hertta kolmanneksi, pata viimeiseksi.*

Maiden järjestämisessä apua löytynee <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#ordinal--"  target="_blank" norel>Enum-luokan ordinal-metodista</a>.

Järjestyksessä pienin kortti siis olisi ristikakkonen ja suurin pataässä.


<h2>Käsi</h2>

Tee seuraavaksi luokka `Kasi` joka edustaa pelaajan kädessään pitämää korttien joukkoa. Tee kädelle seuraavat metodit:

- `public void lisaa(Kortti kortti)` lisää käteen kortin
- `public void tulosta()` tulostaa kädessä olevat kortit alla olevan esimerkin tyylillä


```java
Kasi kasi = new Kasi();

kasi.lisaa(new Kortti(2, Maa.RUUTU));
kasi.lisaa(new Kortti(14, Maa.PATA));
kasi.lisaa(new Kortti(12, Maa.HERTTA));
kasi.lisaa(new Kortti(2, Maa.PATA));

kasi.tulosta();
```

Tulostuu:

<sample-output>

RUUTU 2
PATA A
HERTTA Q
PATA 2

</sample-output>

Käytä ArrayListiä korttien tallentamiseen.


<h2>Käden järjestäminen</h2>

Tee kädelle metodi `public void jarjesta()` jota kutsumalla käden sisällä olevat kortit menevät suuruusjärjestykseen. Järjestämisen jälkeen kortit tulostuvat järjestyksessä:

```java
Kasi kasi = new Kasi();

kasi.lisaa(new Kortti(2, Maa.RUUTU));
kasi.lisaa(new Kortti(14, Maa.PATA));
kasi.lisaa(new Kortti(12, Maa.HERTTA));
kasi.lisaa(new Kortti(2, Maa.PATA));

kasi.jarjesta();

kasi.tulosta();
```

Tulostuu:

<sample-output>

RUUTU 2
PATA 2
HERTTA Q
PATA A

</sample-output>


<h2>Käsien vertailu</h2>


Eräässä korttipelissä kahdesta korttikädestä arvokkaampi on se, jonka sisältämien korttien arvon summa on suurempi. Tee luokasta `Kasi` vertailtava tämän kriteerin mukaan, eli laita luokka toteuttamaan rajapinta `Comparable<Kasi>`.

Esimerkkiohjelma, jossa vertaillaan käsiä:


```java
Kasi kasi1 = new Kasi();

kasi1.lisaa(new Kortti(2, Maa.RUUTU));
kasi1.lisaa(new Kortti(14, Maa.PATA));
kasi1.lisaa(new Kortti(12, Maa.HERTTA));
kasi1.lisaa(new Kortti(2, Maa.PATA));

Kasi kasi2 = new Kasi();

kasi2.lisaa(new Kortti(11, Maa.RUUTU));
kasi2.lisaa(new Kortti(11, Maa.PATA));
kasi2.lisaa(new Kortti(11, Maa.HERTTA));

int vertailu = kasi1.compareTo(kasi2);

if (vertailu < 0) {
    System.out.println("arvokkaampi käsi sisältää kortit");
    kasi2.tulosta();
} else if (vertailu > 0){
    System.out.println("arvokkaampi käsi sisältää kortit");
    kasi1.tulosta();
} else {
    System.out.println("kädet yhtä arvokkaat");
}
```

Tulostuu

<sample-output>

arvokkaampi käsi sisältää kortit
RUUTU J
PATA J
HERTTA J

</sample-output>


<h2>Korttien järjestäminen eri kriteerein</h2>

Entä jos haluaisimme välillä järjestää kortit hieman eri tavalla, esim. kaikki saman maan kortit peräkkäin? Luokalla voi olla vain yksi `compareTo`-metodi, joten joudumme muunlaisia järjestyksiä saadaksemme turvautumaan muihin keinoihin.


Vaihtoehtoiset järjestämistavat toteutetaan erillisten vertailun suorittavien luokkien avulla. Korttien vaihtoehtoisten järjestyksen määräävän luokkien tulee toteuttaa `Comparator<Kortti>`-rajapinta. Järjestyksen määräävän luokan olio vertailee kahta parametrina saamaansa korttia. Metodeja on ainoastaan yksi compare(Kortti k1, Kortti k2), jonka tulee palauttaa negatiivinen arvo, jos kortti k1 on järjestyksessä ennen korttia k2, positiivinen arvo jos k2 on järjestyksessä ennen k1:stä ja 0 muuten.


Periaatteena on luoda jokaista järjestämistapaa varten oma vertailuluokka, esim. saman maan kortit vierekkäin vievän järjestyksen määrittelevä luokka:


```java
import java.util.Comparator;

public class SamatMaatVierekkain implements Comparator<Kortti> {
    public int compare(Kortti k1, Kortti k2) {
        return k1.getMaa().ordinal() - k2.getMaa().ordinal();
    }
}
```

Maittainen järjestys on sama kuin kortin metodin `compareTo` maille määrittelemä järjestys eli *ristit ensin, ruudut toiseksi, hertat kolmanneksi, padat viimeiseksi.*


Järjestäminen tapahtuu edelleen luokan Collections metodin sort avulla. Metodi saa nyt toiseksi parametrikseen järjestyksen määräävän luokan olion:

```java
ArrayList<Kortti> kortit = new ArrayList<>();

kortit.add(new Kortti(3, Maa.PATA));
kortit.add(new Kortti(2, Maa.RUUTU));
kortit.add(new Kortti(14, Maa.PATA));
kortit.add(new Kortti(12, Maa.HERTTA));
kortit.add(new Kortti(2, Maa.PATA));

SamatMaatVierekkain samatMaatVierekkainJarjestaja = new SamatMaatVierekkain();
Collections.sort(kortit, samatMaatVierekkainJarjestaja);

kortit.stream().forEach(k -> System.out.println(k));
```

Tulostuu:

<sample-output>

RUUTU 2
HERTTA Q
PATA 3
PATA A
PATA 2

</sample-output>


Järjestyksen määrittelevä olio voidaan myös luoda suoraan sort-kutsun yhteydessä:


```java
Collections.sort(kortit, new SamatMaatVierekkain());
```

Mikäli luokkaa ei halua toteuttaa, järjestyksen voi antaa `Collections`-luokan `sort`-metodille myös lambda-lausekkeena.


```java
Collections.sort(kortit, (k1, k2) -> k1.getMaa().ordinal() - k2.getMaa().ordinal());
  ```


Tarkempia ohjeita vertailuluokkien tekemiseen <a href="http://leepoint.net/data/collections/comparators.html">täällä</a>


Tee nyt luokka Comparator-rajapinnan toteuttava luokka `SamatMaatVierekkainArvojarjestykseen` jonka avulla saat kortit muuten samanlaiseen järjestykseen kuin edellisessä esimerkissä paitsi, että saman maan kortit järjestyvät arvon mukaisesti.


<h2>Käden järjestäminen maittain</h2>


Lisää luokalle `Kasi` metodi `public void jarjestaMaittain()` jota kutsumalla käden sisällä olevat kortit menevät edellisen tehtävän vertailijan määrittelemään järjestykseen. Järjestämisen jälkeen kortit tulostuvat järjestyksessä:


```java
Kasi kasi = new Kasi();

kasi.lisaa(new Kortti(12, Maa.HERTTA));
kasi.lisaa(new Kortti(4, Maa.PATA));
kasi.lisaa(new Kortti(2, Maa.RUUTU));
kasi.lisaa(new Kortti(14, Maa.PATA));
kasi.lisaa(new Kortti(7, Maa.HERTTA));
kasi.lisaa(new Kortti(2, Maa.PATA));

kasi.jarjestaMaittain();

kasi.tulosta();
```

Tulostuu:

<sample-output>

RUUTU 2
HERTTA 7
HERTTA Q
PATA 2
PATA 4
PATA A

</sample-output>

</programming-exercise>


# Yhteenveto

Yhdeksännessä osassa eli Ohjelmoinnin jatkokurssin toisessa osassa tutustuimme tietokokoelmien läpikäyntiin virran avulla ja olioiden järjestämiseen Javan valmista Comparable-rajapintaa hyödyntäen. Tämän lisäksi tutustuimme muutamaan yleishyödylliseen tekniikkaan kuten perinteiseen for-toistolauseeseen, säännölliseen lausekkeeseen, lueteltuun tyyppiin sekä iteraattoriin.


Vastaa vielä alla olevaan kyselyyn.


<quiz id='0073d0ed-e43e-5ca0-9253-c7e3e69569c4'></quiz>
