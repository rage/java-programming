---
path: '/osa-11/2-arraylist-ja-hajautustaulu'
title: 'ArrayList ja Hajautustaulu'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät miten miten muuttuvankokoinen geneerinen lista toteutetaan.
- Tunnet erään mahdollisen tavan Javan ArrayListin kaltaisen luokan toteutukselle.
- Tiedät miten miten hajautustaulu toteutetaan.
- Tunnet erään mahdollisen tavan Javan HashMapin kaltaisen luokan toteutukselle.

</text-box>

ArrayList ja Hajautustaulu ovat ohjemoinnissa hyvin yleisesti käytettyjä tietorakenteita. Tarkastellaan tässä niiden todellista toteutusta. Kerrataan ensin lyhyesti taulukon käyttöä, jonka jälkeen rakennetaan esimerkinomaisesti ensin ArrayListiä imitoiva tietorakenne `Lista`, jota hyödynnetään sitten tietorakenteen `Hajautustaulu` tekemisessä.


## Lyhyt kertaus taulukoista

Taulukko on olio, joka sisältää rajatun määrän numeroituja paikkoja arvoille. Taulukon pituus (tai koko) on siinä olevien paikkojen lukumäärä, eli kuinka monta arvoa taulukkoon voi laittaa. Taulukon koko on aina ennalta määrätty: koko määrätään taulukon luomisen yhteydessä eikä sitä voi muuttaa.

Taulukkotyyppi määritellään hakasuluilla, jota edeltää taulukossa olevien alkioiden tyyppi (alkioidentyyppi[]). Taulukko luodaan `new`-kutsulla, jota seuraa taulukon alkioiden tyyppi, hakasulut, sekä hakasulkujen sisään asetettava luotavan taulukon alkioiden lukumäärä.

```java
int[] luvut = new int[3];
String[] merkkijonot = new String[5];
```

Taulukon alkioihin viitataan taulukon indeksien perusteella. Alla olevassa esimerkissä luodaan kolmepaikkainen kokonaislukutaulukko, jonka jälkeen taulukon indekseihin 0 ja 2 asetetaan arvot. Tämän jälkeen arvot tulostetaan.

```java
int[] luvut = new int[3];
luvut[0] = 2;
luvut[2] = 5;

System.out.println(luvut[0]);
System.out.println(luvut[2]);
```

<sample-output>

2
5

</sample-output>


Yksittäisen arvon asettaminen taulukon tiettyyn paikkaan tapahtuu kuten arvon asetus tavalliseen muuttujaan, mutta taulukkoon asetettaessa kerrotaan paikkaa kuvaava indeksi.

Taulukko-olion koon saa selville taulukko-olioon liittyvän julkisen oliomuuttujan `length` avulla, ja taulukon alkioiden läpikäynti voidaan toteuttaa esimerkiksi for-toistolauseen avulla.


```java
int[] luvut = new int[4];
luvut[0] = 42;
luvut[1] = 13;
luvut[2] = 12;
luvut[3] = 7;

System.out.println("Taulukossa on " + luvut.length + " alkiota.");

for (int i = 0; i < luvut.length; i++) {
    System.out.println(luvut[i]);
}
```


<sample-output>

Taulukossa on 4 alkiota.
42
13
12
7

</sample-output>


<quiznator id='5c94ab76fd9fd71425c6b085'></quiznator>


<programming-exercise name='Rajatut taulukossa' tmcname='osa11-Osa11_03.RajatutTaulukossa'>

Luo luokkaan `Ohjelma` luokkametodi `public static int summa(int[] taulukko, int mista, int mihin, int pienin, int suurin)`. Metodin tulee laskea sille parametrina annetusta taulukosta indeksien mista ja mihin välillä olevien arvojen summa. Summaan otetaan mukaan vain ne arvot, jotka ovat suurempia tai yhtäsuuria kuin pienin ja pienempiä kuin suurin.

Metodin tulee lisäksi varmistaa, että käsiteltävät indeksit ovat valideja. Mikäli parametri `mista` on pienempi kuin 0, tulee taulukon indeksien läpikäynti alkaa parametrin mista arvon sijaan nollasta. Vastaavasti, mikäli parametri `mihin` on suurempi kuin käsiteltävä taulukko, tulee taulukon indeksien läpikäynti lopettaa  parametrin mihin arvon sijaan taulukon kokoon.

```java
int[] luvut = {3, -1, 8, 4};

System.out.println(summa(luvut, 0, 0, 0, 0));
System.out.println(summa(luvut, 0, 0, 0, 10));
System.out.println(summa(luvut, 0, 1, 0, 10));
System.out.println(summa(luvut, 0, 1, -10, 10));
System.out.println(summa(luvut, -1, 999, -10, 10));
```

<sample-output>

0
0
3
3
14

</sample-output>

</programming-exercise>


Taulukoita voi käyttää täysin samalla tavalla kuin muitakin muuttujia, eli niitä voi käyttää esimerkiksi oliomuuttujina, metodin parametreina, metodin paluuarvona ym.

Merkittävä osa yleisesti käytetyistä tietorakenteista käyttää taulukoita niiden sisäisessä toteutuksessa.


## Listarakenne


Tarkastellaan erästä tapaa Javan tarjoaman ArrayList-tietorakenteen toteuttamiseen. Javan ArrayList hyödyntää sisäisesti taulukkoa, jonka alkioiden tyyppi on määritelty luokalle ArrayList annettavan tyyppiparametrin avulla. Tämän takia listalle saa lisätä käytännössä minkä tyyppisiä arvoja tahansa. Lista tarjoaa useita metodeja, joista tämän esimerkin kannalta oleellisia ovat `add` eli lisääminen, `contains` eli olemassaolon tarkastaminen, `remove` eli poistaminen sekä `get`, eli tietystä indeksistä hakeminen.


```java
ArrayList<String> merkkijonot = new ArrayList<>();
System.out.println(merkkijonot.contains("Hei!"));
merkkijonot.add("Hei!");
System.out.println(merkkijonot.contains("Hei!"));
merkkijonot.remove("Hei!");
System.out.println(merkkijonot.contains("Hei!"));
```

<sample-output>

false
true
false

</sample-output>


### Listan luominen

Luodaan luokka `Lista`. Listarakenne sisältää geneerisen taulukon -- eli taulukon, jonka alkioiden tyyppi määräytyy ajonaikaisesti tyyppiparametreista. Asetetaan taulukon alkukooksi `10`. Taulukko luodaan object-tyyppisenä ja muunnetaan geneerisen tyyppiseksi `(T[]) new Object[10];` -- tämä tehdään, sillä kutsu `new T[10];` ei ainakaan toistaiseksi toimi Javassa.


```java
public class Lista<T> {
    private T[] arvot;

    public Lista() {
        this.arvot = (T[]) new Object[10];
    }
}
```

Lista kapseloi taulukon. Alkutilanteessa jokainen taulukon indeksi sisältää `null`-viitteen.


### Arvojen lisääminen listalle

Lisätään luokalle metodi `public void lisaa(T arvo)`, mikä mahdollistaa arvojen lisäämisen listalle. Luodaan luokalle tätä varten erillinen kokonaislukumuuttuja, joka pitää kirjaa taulukon ensimmäisestä tyhjästä paikasta.


```java
public class Lista<T> {

    private T[] arvot;
    private int arvoja;

    public Lista() {
        this.arvot = (T[]) new Object[10];
        this.arvoja = 0;
    }

    public void lisaa(T arvo) {
        this.arvot[this.arvoja] = arvo;
        this.arvoja++; // sama kuin this.arvoja = this.arvoja + 1;
    }
}
```

Nyt arvojen lisääminen listalle onnistuu -- tai, ainakin listan luominen ja metodin kutsuminen onnistuu -- emme vielä voi testata ovatko arvot todellisuudessa listalla.

```java
Lista<String> lista = new Lista<>();
lista.lisaa("hei");
lista.lisaa("maailma");
```

### Arvojen lisääminen listalle, osa 2

Edellä kuvatussa `lisaa`-metodissa on pieni ongelma. Ongelma ilmenee kun seuraava ohjelmakoodi suoritetaan.


```java
Lista<String> lista = new Lista<>();
for (int i = 0; i < 11; i++) {
    lista.lisaa("hei");
}
```

<sample-output>
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 10
    at tietorakenteita.Lista.lisaa(Lista.java:14)
    at tietorakenteita.Ohjelma.main(Ohjelma.java:8)
</sample-output>

Listan koko ei kasva. Eräs `ArrayList`-luokan oleellisimmista toiminnallisuuksista on se, että sen koko kasvaa aina tarvittaessa -- ohjelmoijan ei siis tarvitse varoa listan täyttymistä.

Lisätään ohjelmaan listan koon kasvattamiseen liittyvä toiminnallisuus. Listan kokoa kasvatetaan aina jos täyteen listaan (eli listan sisällä olevaan täyteen taulukkoon) yritetään lisätä arvo. Kasvattaminen toteutetaan luomalla uusi taulukko, johon vanhan taulukon arvot kopioidaan. Tämän jälkeen vanha taulukko jätetään heitteille, ja uudesta taulukosta tulee olion käyttämä taulukko.

Uuden taulukon koko määräytyy Javassa kaavalla `vanhaKoko + vanhaKoko / 2`. Hyödynnetään samaa kaavaa omassa toteutuksessamme. Luodaan kasvattamista varten erillinen metodi `kasvata`, joka on vain luokan omien metodien käytössä (eli sillä on `private`-näkyvyys).

```java
private void kasvata() {
    int uusiKoko = this.arvot.length + this.arvot.length / 2;
    T[] uusi = (T[]) new Object[uusiKoko];
    for (int i = 0; i < this.arvot.length; i++) {
        uusi[i] = this.arvot[i];
    }

    this.arvot = uusi;
}
```

Toteutus luo uuden taulukon, jonka koko on 1.5-kertainen vanhaan taulukkoon verrattuna. Tämän jälkeen kaikki vanhan taulukon alkiot kopioidaan uuteen taulukkoon ja lopulta olion `arvot`-muuttujan -- eli taulukon -- arvoksi asetetaan uusi taulukko. Javan automaattinen roskienkerääjä poistaa vanhan taulukon kun siihen ei enää viitata.

Muokataan vielä metodia `lisaa` siten, että taulukon kokoa kasvatetaan tarvittaessa.

```java
public void lisaa(T arvo) {
    if(this.arvoja == this.arvot.length) {
        kasvata();
    }

    this.arvot[this.arvoja] = arvo;
    this.arvoja++;
}
```

Nyt arvoja voi lisätä listalle lähes rajattomasti.

<text-box variant='hint' name='Edellä kuvatun kasvatusmenetelmän tehokkuudesta'>

Edellä kuvattu menetelmä kopioi kasvatuksen yhteydessä jokaisen vanhan taulukon arvon uuteen taulukkoon. Mikäli taulukossa on esimerkiksi kaksi miljoonaa alkiota, kopiointi käy kaksi miljoonaa alkiota läpi.

Menetelmän tehokkuuteen -- ja parannusehdotuksiin -- paneudutaan muunmuassa kursseilla Tietorakenteet ja algoritmit sekä Algoritmien suunnittelu ja analyysi.

</text-box>


### Arvon olemassaolon tarkastaminen

Luodaan listalle seuraavaksi metodi `public boolean sisaltaa(T arvo)`, minkä avulla voidaan tarkistaa onko alkio listalla. Hyödynnetään tässä tietoa siitä, että jokainen Javan olio -- riippumatta sen tyypistä -- perii Object-luokan (tai on Object-tyyppinen). Tämän takia jokaisella oliolla on metodi `public boolean equals(Object object)`, jota voidaan käyttää yhtäsuuruuden tarkasteluun.

Luokan `Lista` muuttuja `arvoja` sisältää tiedon arvojen tämän hetkisestä lukumäärästä. Voimme siis toteuttaa `sisaltaa`-metodin siten, että tarkastelemme vain ne listan indeksit, joissa on arvoja.

```java
public boolean sisaltaa(T arvo) {
    for (int i = 0; i < this.arvoja; i++) {
        if (this.arvot[i].equals(arvo)) {
            return true;
        }
    }

    return false;
}
```

Ohjelmassa on nyt mahdollisuus listalla olevien alkioiden olemassaolon tarkasteluun.

```java
Lista<String> lista = new Lista<>();
System.out.println(lista.sisaltaa("hei"));
lista.lisaa("hei");
System.out.println(lista.sisaltaa("hei"));
```

<sample-output>

false
true

</sample-output>

Edellä esitetty menetelmä olettaa, että käyttäjä ei lisää listalle `null`-viitettä ja että equals-metodi tarkastaa ettei parametrina saatu arvo ole null.


### Arvon poistaminen

Toteuttamallemme listalle voi nyt lisätä arvoja, jonka lisäksi arvon olemassaolon voi tarkastaa. Toteutetaan vielä arvon poistaminen. Toteutetaan metodi `public void poista(T arvo)`, joka poistaa listalta *yhden* `arvo`-arvoisen alkion.

Yksinkertainen toteutus olisi seuraava.

```java
public void poista(T arvo) {
    for (int i = 0; i < this.arvoja; i++) {
        if (arvo == this.arvot[i] || this.arvot[i].equals(arvo)) {
            this.arvot[i] = null;
            this.arvoja--;
            return true;
        }
    }

    return false;
}
```

Yllä oleva lähestymistapa on kuitenkin ongelmallinen, sillä se jättää listalle "tyhjiä" kohtia, jonka lisäksi esimerkiksi edellä esitetty etsiminen ei enää toimi.

Ongelman voi ratkaista useammalla tavalla, joista yksi on siirtää jokaista poistettua arvoa seuraavaa arvoa vasemmalle. Lisätään tämä toiminnallisuus ohjelmaan.

```java
public void poista(T arvo) {
    boolean loytyi = false;
    for (int i = 0; i < this.arvoja; i++) {
        if (loytyi) {
            this.arvot[i - 1] = this.arvot[i];
        } else if (arvo == this.arvot[i] || this.arvot[i].equals(arvo)) {
            this.arvoja--;
            loytyi = true;
        }
    }
}
```

Emme ole kovin tyytyväisiä edelliseen ratkaisuun, sillä siinä tehdään monta asiaa samaan aikaan. Metodissa sekä etsitään alkiota että siirretään alkioita. Pilkotaan toiminnallisuus kahteen erilliseen metodiin: `private int arvonIndeksi(T arvo)`, joka etsii parametrina annetun arvon indeksin, sekä `private void siirraVasemmalle(int indeksista)`, joka siirtää annetusta indeksistä lähtien alkioita yhden vasemmalle.

Toteutetaan ensin metodi `private int arvonIndeksi(T arvo)`, joka etsii annetun arvon indeksin. Metodi palauttaa negatiivisen luvun mikäli arvoa ei löydy.

```java
private int arvonIndeksi(T arvo) {
    for (int i = 0; i < this.arvoja; i++) {
        if (this.arvot[i].equals(arvo)) {
            return i;
        }
    }

    return -1;
}
```

Toteutetaan tämän jälkeen metodi `private void siirraVasemmalle(int indeksistaLahtien)`, joka siirtää arvoja annetusta indeksistä lähtien vasemmalle.

```java
private void siirraVasemmalle(int indeksistaLahtien) {
    for (int i = indeksistaLahtien; i < this.arvoja - 1; i++) {
        this.arvot[i] = this.arvot[i + 1];
    }
}
```

Nyt metodi `poista` voidaan toteuttaa edellisten avulla hieman selkokielisemmäksi.

```java
public void poista(T arvo) {
    int arvonIndeksi = arvonIndeksi(arvo);
    if (arvonIndeksi < 0) {
        return; // ei löydy
    }

    siirraVasemmalle(arvonIndeksi);
    this.arvoja--;
}
```


<text-box variant='hint' name='Edellä kuvatun poistomenetelmän tehokkuudesta'>

Edellä kuvattu menetelmä kopioi poiston yhteydessä jokaisen poistettua alkiota seuraavan alkion vasemmalle. Pohdi toteutuksen tehokkuutta tilanteessa, missä listaa käytetään jonona.

Tämänkin menetelmän tehokkuuteen -- ja parannusehdotuksiin -- paneudutaan muunmuassa kursseilla Tietorakenteet ja algoritmit sekä Algoritmien suunnittelu ja analyysi.

</text-box>


Luokassa lista on nyt hieman toistuvaa koodia. Metodi `sisaltaa` on hyvin samankaltainen metodin `arvonIndeksi` kanssa. Muokataan vielä metodia `sisaltaa` siten, että se toteutetaan metodin `arvonIndeksi` avulla.


```java
public boolean sisaltaa(T arvo) {
    return arvonIndeksi(arvo) >= 0;
}
```

Nyt käytössämme on lista, joka tarjoaa metodit `lisaa`, `sisaltaa`, ja `poista`. Lista myös kasvaa tarvittaessa. Listan toteutusta voisi toki vielä kehittää esimerkiksi lisäämällä toiminnallisuuden, mikä pienentää listan kokoa jos arvojen määrä pienenee hyvin pieneksi.

```java
Lista<String> lista = new Lista<>();
System.out.println(lista.sisaltaa("hei"));
lista.lisaa("hei");
System.out.println(lista.sisaltaa("hei"));
lista.poista("hei");
System.out.println(lista.sisaltaa("hei"));
```

<sample-output>

false
true
false

</sample-output>


### Kohdasta hakeminen

Lisätään listalle vielä metodi `public T arvo(int indeksi)`, joka palauttaa listan tietyssä indeksissä sijaitsevan arvon. Mikäli ohjelmoija hakee arvoa listan ulkopuolelta, heitetään virhe `IndexOutOfBoundsException`.

```java
public T arvo(int indeksi) {
    if (indeksi < 0 || indeksi >= this.arvoja) {
        throw new ArrayIndexOutOfBoundsException("Indeksi " + indeksi + " alueen [0, " + this.arvoja + "[ ulkopuolella.");
    }

    return this.arvot[indeksi];
}
```

Metodin käyttöä edesauttaisi, mikäli luokan käyttäjällä olisi tieto haettavien arvojen indekseistä. Muutetaan vielä metodi `arvonIndeksi(T arvo)` kaikkien käytettäväksi, eli vaihdetaan sen näkyvyysmääre `private` muotoon `public`.

```java
public int arvonIndeksi(T arvo) {
    for (int i = 0; i < this.arvoja; i++) {
        if (this.arvot[i].equals(arvo)) {
            return i;
        }
    }

    return -1;
}
```

```java
Lista<String> lista = new Lista<>();
System.out.println(lista.sisaltaa("hei"));
lista.lisaa("hei");
System.out.println(lista.sisaltaa("hei"));
int indeksi = lista.arvonIndeksi("hei");
System.out.println(indeksi);
System.out.println(lista.arvo(indeksi));
lista.poista("hei");
System.out.println(lista.sisaltaa("hei"));
```

<sample-output>

false
true
0
hei
false

</sample-output>


### Listan koko

Lisätään listalle vielä metodi listan koon tarkastamiseen. Listan koon saa selville muuttujasta `arvoja`.


```java
public int koko() {
    return this.arvoja;
}
```

Nyt listan alkioiden läpikäynti onnistuu mm. for-lauseella.


```java
Lista<String> lista = new Lista<>();
lista.lisaa("hei");
lista.lisaa("maailma");

for(int i = 0; i < lista.koko(); i++) {
    System.out.println(lista.arvo(i));
}
```

<sample-output>

hei
maailma

</sample-output>


<programming-exercise name='Lista (2 osaa)' tmcname='osa11-Osa11_04.Lista' nocoins='1'>

Toteuta tehtäväpohjaan edellistä esimerkkiä noudattaen luokka `Lista`. Tehtäväpohjassa ei ole testejä -- kokeile listaa materiaalin esimerkkien ja omien kokeilujen avulla. Tehtävä on kahden pisteen arvoinen.

</programming-exercise>


## Hajautustaulu

Hajautustaulu on toteutettu taulukkona, missä jokainen alkio sisältää listan. Listalle tallennetaan (avain,arvo)-pareja. Käyttäjä voi hakea hajautustaulusta arvoja avaimen perusteella, ja toisaalta käyttäjä voi lisätä hajautustauluun avain-arvo -pareja. Kukin avain voi esiintyä hajautustaulussa korkeintaan kerran.

Hajautustaulun toiminta perustuu avaimen hajautusarvoon. Kun hajautustauluun lisätään (avain,arvo)-pari, lasketaan avaimeen liittyvä hajautusarvo. Hajautusarvo määrää hajautustaulun sisäisen taulukon indeksin, missä olevaan listaan (avain,arvo)-pari lisätään.

Hahmotellaan hajautustaulun toimintaa.


### Avain-arvo -pari

Luodaan ensin avain-arvo -paria kuvaava luokka `Pari`. Haluamme tehdä hajautustaulusta mahdollisimman yleiskäyttöisen, joten avaimen ja arvon tyyppi määrätään ajonaikaisesti. Pari sisältää avaimen ja arvon sekä niihin liittyvät get-metodit. Geneeriset tyypit K ja V ovat nimetty sanojen key ja value perusteella.


```java
public class Pari<K, V> {

    private K avain;
    private V arvo;

    public Pari(K avain, V arvo) {
        this.avain = avain;
        this.arvo = arvo;
    }

    public K getAvain() {
        return avain;
    }

    public V getArvo() {
        return arvo;
    }

    public void setArvo(V arvo) {
        this.arvo = arvo;
    }
}
```

Avain-arvo -parien luominen on suoraviivaista.

```java
Pari<String, Integer> pari = new Pari<>("yksi", 1);
System.out.println(pari.getAvain() + " -> " + pari.getArvo());
```

<sample-output>

yksi -> 1

</sample-output>


### Hajautustaulun luominen

Hajautustaulu sisältää taulukon listoja. Jokainen listan arvo on edellä kuvattu pari, joka sisältää avain-arvo -parin. Hajautustaululla on lisäksi tieto arvojen lukumäärästä. Tässä käytössämme on edellä luotu luokka `Lista`.


```java
public class Hajautustaulu<K, V> {

    private Lista<Pari<K, V>>[] arvot;
    private int arvoja;

    public Hajautustaulu() {
        this.arvot = new Lista[32];
        this.arvoja = 0;
    }
}
```


### Arvon hakeminen

Toteutetaan ensin metodi `public V hae(K avain)`, jota käytetään arvon hakemiseen avaimen perusteella.

Metodissa lasketaan ensin avaimen hajautusarvo ja päätellään sen perusteella hajautustaulun sisäisen taulukon indeksi, mistä arvoja haetaan. Avaimen hajautusarvon laskemiseen käytetään jokaisella oliolla olevaa `hashCode`-metodia. Jakojäännöstä käytetään hajautusarvon hajautustaulun koon sisällä pysymiseen.

Mikäli hajautusarvon ja jakojäänneksen avulla lasketussa indeksissä ei ole listaa, ei indeksiin ole lisätty vielä yhtäkään avain-arvo -paria, eikä avaimelle ole tallennettu arvoa. Tällöin palautetaan `null`-viite. Muussa tapauksessa taulukon indeksissä oleva lista käydään läpi, ja avaimen yhtäsuuruutta vertaillaan jokaiseen listan avain-arvo -parin avaimeen. Mikäli joku listalla olevista avaimista vastaa avainta, jonka perusteella arvoa haetaan, palautetaan kyseinen arvo. Muulloin avainta (ja siihen liittyvää arvoa) ei löydy, ja palautetaan arvo null.


```java
public V hae(K avain) {
    int hajautusArvo = Math.abs(avain.hashCode() % this.arvot.length);
    if (this.arvot[hajautusArvo] == null) {
        return null;
    }

    Lista<Pari<K, V>> arvotIndeksissa = this.arvot[hajautusArvo];

    for (int i = 0; i < arvotIndeksissa.koko(); i++) {
        if (arvotIndeksissa.arvo(i).getAvain().equals(avain)) {
            return arvotIndeksissa.arvo(i).getArvo();
        }
    }

    return null;
}
```


<text-box variant='hint' name='Miksei hajautustaulua toteuteta listana?'>

Hajautustaulun toimintaperiaate perustuu siihen, että avain-arvo -parit jaetaan hajautusarvon perusteella pieniin joukkoihin. Tällöin avaimen perusteella haettaessa käydään läpi vain hyvin pieni joukko avain-arvo -pareja -- olettaen toki, että hajautusarvo on järkevä.

Jos hajautusarvo on aina sama -- esimerkiksi 1 -- vastaa hajautustaulun sisäinen toteutus listaa -- kaikki arvot ovat samalla listalla. Jos taas hajautusarvo on hyvin satunnainen, arvot hajautetaan mahdollisimman tasaisesti taulukon eri listoille.

Hajautustaulu toimii lisäksi siten, että hajautustaulun käyttämää taulukkoa kasvatetaan mikäli arvojen määrä on tarpeeksi iso (tyypillisesti noin 75% taulukon koosta). Tyypillisesti miljoonia avain-arvo -pareja sisältävän hajautustaulun taulukon yhdessä indeksissä on vain muutama avain-arvo -pari. Tämä tarkoittaa käytännössä sitä, että avain-arvo -parin olemassaolon selvittämiseen tarvitaan vain hajautusarvon laskeminen sekä muutaman olion tarkastelu -- tämä on paljon nopeampaa kuin listan läpikäynti.

</text-box>


### Hajautustauluun lisääminen, osa 1

Toteutetaan hajautustauluun lisäämisen käytettävän metodin `public void lisaa(K avain, V arvo)` ensimmäinen versio. Ensimmäisessä versiossa hajautustaulun sisältämän taulukon kokoa ei kasvateta lisäyksen yhteydessä.

Metodi laskee ensin avaimelle hajautusarvon ja päättelee hajautusarvon perusteella hajautustaulun sisäisen taulukon indeksin. Jos taulukon kyseisessä indeksissä ei ole arvoa, taulukon indeksiin lisätään lista. Tämän jälkeen taulukon indeksissä oleva lista käydään läpi ja sieltä etsitään avain-arvo -paria, jonka avain vastaa lisättävän avain-arvo -parin avainta. Mikäli vastaava avain löytyy, päivitetään olemassaolevan avain-arvo -parin arvo vastaamaan uutta avainta. Muulloin listaan lisätään uusi avain-arvo -pari -- tällöin myös hajautustaulussa olevien arvojen lukumäärää kasvatetaan yhdellä.


```java
public void lisaa(K avain, V arvo) {
    int hajautusArvo = Math.abs(avain.hashCode() % arvot.length);
    if (arvot[hajautusArvo] == null) {
        arvot[hajautusArvo] = new Lista<>();
    }

    Lista<Pari<K, V>> arvotIndeksissa = arvot[hajautusArvo];

    int indeksi = -1;
    for (int i = 0; i < arvotIndeksissa.koko(); i++) {
        if (arvotIndeksissa.arvo(i).getAvain().equals(avain)) {
            indeksi = i;
            break;
        }
    }

    if (indeksi < 0) {
        arvotIndeksissa.lisaa(new Pari<>(avain, arvo));
        this.arvoja++;
    } else {
        arvotIndeksissa.arvo(indeksi).setArvo(arvo);
    }
}
```

Metodi on melko monimutkainen. Pilkotaan se pienempiin osiin -- ensimmäisen osan vastuulla on avaimeen liittyvän listan hakeminen ja toisen osan vastuulla on avaimen indeksin etsiminen listalta.


```java
private Lista<Pari<K, V>> haeAvaimeenLittyvaLista(K avain) {
    int hajautusArvo = Math.abs(avain.hashCode() % arvot.length);
    if (arvot[hajautusArvo] == null) {
        arvot[hajautusArvo] = new Lista<>();
    }

    return arvot[hajautusArvo];
}

private int haeAvaimenIndeksi(Lista<Pari<K, V>> lista, K avain) {
    for (int i = 0; i < lista.koko(); i++) {
        if (lista.arvo(i).getAvain().equals(avain)) {
            return i;
        }
    }

    return -1;
}
```

Nyt metodi `public void lisaa(K avain, V arvo)` voidaan toteuttaa hieman selkeämmin.


```java
public void lisaa(K avain, V arvo) {
    Lista<Pari<K, V>> arvotIndeksissa = haeAvaimeenLittyvaLista(avain);
    int indeksi = haeAvaimenIndeksi(arvotIndeksissa, avain);

    if (indeksi < 0) {
        arvotIndeksissa.lisaa(new Pari<>(avain, arvo));
        this.arvoja++;
    } else {
        arvotIndeksissa.arvo(indeksi).setArvo(arvo);
    }
}
```


### Hajautustauluun lisääminen, osa 2

Edellä kuvattu hajautustauluun lisääminen toimii osittain. Toiminnallisuuden suurin puute on se, että taulukon kokoa ei kasvateta kun arvojen määrä kasvaa liian suureksi. Lisätään ohjelmaan kasvatustoiminnallisuus, mikä tuplaa hajautustaulun sisäisen taulukon koon. Kasvatustoiminnallisuuden tulee myös sijoittaa jokainen hajautustaulussa olevan taulukon arvo uuteen taulukkoon.

Hahmotellaan kasvatustoiminnallisuuden alku. Kasvatustoiminnallisuudessa luodaan uusi taulukko, jonka koko on edelliseen verrattuna kaksinkertainen. Tämän jälkeen alkuperäinen taulukko käydään indeksi indeksiltä läpi ja olemassaolevat avain-arvo -parit kopioidaan uuteen taulukkoon. Lopulta alkuperäinen taulukko korvataan uudella taulukolla.

Alla on hahmoteltu metodin toimintaa. Kopiointia ei ole vielä toteutettu.


```java
private void kasvata() {
    // luodaan uusi taulukko
    Lista<Pari<K, V>>[] uusi = new Lista[this.arvot.length * 2];

    for (int i = 0; i < this.arvot.length; i++) {
        // kopioidaan vanhan taulukon arvot uuteen

    }

    // korvataan vanha taulukko uudella
    this.arvot = uusi;
}
```

Hahmotellaan seuraavaksi metodia, joka kopioi alkuperäisen taulukon yhden indeksin sisältämän listan arvot uuteen taulukkoon. Kopioinnin yhteydessä jokaisen kopioitavan avain-arvo -parin sijainti taulukossa lasketaan uudelleen -- tämä tehdään, sillä taustalla olevan taulukon koko kasvaa ja avain-arvot -parit halutaan sijoittaa taulukkoon mahdollisimman tasaisesti.


```java
private void kopioi(Lista<Pari<K, V>>[] uusi, int indeksista) {
    for (int i = 0; i < this.arvot[indeksista].koko(); i++) {
        Pari<K, V> arvo = this.arvot[indeksista].arvo(i);

        int hajautusarvo = Math.abs(arvo.getAvain().hashCode() % uusi.length);
        if(uusi[hajautusarvo] == null) {
            uusi[hajautusarvo] = new Lista<>();
        }

        uusi[hajautusarvo].lisaa(arvo);
    }
}
```

<quiznator id='5c94ad8bddb6b814af32a379'></quiznator>

Nyt kopioi-metodia voidaan kutsua kasvata-metodista.


```java
private void kasvata() {
    // luodaan uusi taulukko
    Lista<Pari<K, V>>[] uusi = new Lista[this.arvot.length * 2];

    for (int i = 0; i < this.arvot.length; i++) {
        // kopioidaan vanhan taulukon arvot uuteen
        kopioi(uusi, i);
    }

    // korvataan vanha taulukko uudella
    this.arvot = uusi;
}
```

Lisätään lopuksi kasvatustoiminnallisuus osaksi lisäystoiminnallisuutta. Hajautustaulun kokoa kasvatetaan aina jos hajautustaulussa olevien avain-arvo -parien määrä on yli 75% taulukon koosta.


```java
public void lisaa(K avain, V arvo) {
    Lista<Pari<K, V>> arvotIndeksissa = haeAvaimeenLittyvaLista(avain);
    int indeksi = haeAvaimenIndeksi(arvotIndeksissa, avain);

    if (indeksi < 0) {
        arvotIndeksissa.lisaa(new Pari<>(avain, arvo));
        this.arvoja++;
    } else {
        arvotIndeksissa.arvo(indeksi).setArvo(arvo);
    }

    if (1.0 * this.arvoja / this.arvot.length > 0.75) {
        kasvata();
    }
}
```


### Poistaminen


Lisätään hajautustauluun vielä toiminnallisuus avain-arvo -parin poistamiseen avaimen perusteella. Poistotoiminnallisuus palauttaa null-arvon mikäli arvoa ei löydy, muuten metodi palauttaa poistettavaan avaimeen liittyvän arvon.

Voimme hyödyntää valmiiksi toteuttamiamme metodeja poistotoiminnallisuudessa. Selitä itsellesi (ääneen) alla olevan metodin konkreettinen toiminta.

```java
public V poista(K avain) {
    Lista<Pari<K, V>> arvotIndeksissa = haeAvaimeenLittyvaLista(avain);
    if (arvotIndeksissa.koko() == 0) {
        return null;
    }

    int indeksi = haeAvaimenIndeksi(arvotIndeksissa, avain);
    if (indeksi < 0) {
        return null;
    }

    Pari<K, V> pari = arvotIndeksissa.arvo(indeksi);
    arvotIndeksissa.poista(pari);
    return pari.getArvo();
}
```

<programming-exercise name='Hajautustaulu (3 osaa)' tmcname='osa11-Osa11_05.Hajautustaulu' nocoins='1'>

Toteuta tehtäväpohjaan edellistä esimerkkiä noudattaen luokka Hajautustaulu. Toisin kuin esimerkissä, toteuta luokka siten, että se hyödyntää sisäisessä toteutuksessa Listan sijaan Javan valmista luokkaa ArrayList. Tehtäväpohjassa ei ole testejä -- kokeile listaa materiaalin esimerkkien ja omien kokeilujen avulla. Tehtävä on kolmen pisteen arvoinen.

</programming-exercise>


## Hakemisen tehokkuudesta

Tarkastellaan vielä hakemisen tehokkuutta listasta ja hajautustaulusta. Tehokkuusmittauksia voi tehdä metodin `System.nanotime()` palauttaman nanosekunteja kuvaavan arvon avulla. Ohjelma luo ensin miljoona alkiota hajautustauluun ja listaan, jonka jälkeen hajautustaulusta ja listasta etsitään tuhatta satunnaista arvoa. Noin 50% arvoista löytyy listalta ja hajautustaulusta.

```java
Lista<String> lista = new Lista<>();
Hajautustaulu<String, String> taulu = new Hajautustaulu<>();

for (int i = 0; i < 1000000; i++) {
    lista.lisaa("" + i);
    taulu.lisaa("" + i, "" + i);
}

Lista<String> haettavat = new Lista<>();
Random arpoja = new Random();
for (int i = 0; i < 1000; i++) {
    haettavat.lisaa("" + arpoja.nextInt(2000000));
}

long listanHakuAloitus = System.nanoTime();
for (int i = 0; i < haettavat.koko(); i++) {
    lista.sisaltaa(haettavat.arvo(i));
}
long listanHakuLopetus = System.nanoTime();

long hajautustaulunHakuAloitus = System.nanoTime();
for (int i = 0; i < haettavat.koko(); i++) {
    taulu.hae(haettavat.arvo(i));
}
long hajautustaulunHakuLopetus = System.nanoTime();


long listanHaku = listanHakuLopetus - listanHakuAloitus;
System.out.println("Lista: haku kesti noin " + listanHaku / 1000000 + " millisekuntia (" +
    listanHaku + " nanosekuntia.)");

long hajautustaulunHaku = hajautustaulunHakuLopetus - hajautustaulunHakuAloitus;
System.out.println("Hajautustaulu: haku kesti noin " + hajautustaulunHaku / 1000000 +
    " millisekuntia (" + hajautustaulunHaku + " nanosekuntia.)");
```

```java
Lista: haku kesti noin 6284 millisekuntia (6284420580 nanosekuntia.)
Hajautustaulu: haku kesti noin 0 millisekuntia (805106 nanosekuntia.)
```


*Edellä kuvatut ja kursseilla käyttämämme listat ja hajautustaulut poikkeavat toki sisäiseltä toteutukselta hieman toisistaan. Ohjelmointikielten tarjoamissa tietorakenteissa on hieman enemmän erilaisia optimointeja -- näihinkin palataan myöhemmillä kursseilla. Tämän kurssin puitteissa riittää em. tietorakenteiden käyttöosaaminen sekä jonkintasoinen ymmärrys niiden tehokkuuseroista sekä käyttötapauksista.*

