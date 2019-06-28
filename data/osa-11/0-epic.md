---
path: '/osa-11/0-epic'
title: 'Epic'
hidden: false
---

# Geneeriset tyyppiparametrit

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät mitä käsitteellä geneerinen tyyppiparametri tarkoitetaan.
- Tunnet Javassa olevia geneerisiä tyyppiparametreja hyödyntäviä luokkia.
- Osaat luoda omia luokkia, joissa käytetään geneerisiä tyyppiparametreja.

</text-box>

<quiznator id='5c93ae0b3972a9147410b2fd'></quiznator>


Olemme listoihin tutustumisesta lähtien kertoneet tietorakenteille niiden sisältämän arvon tyypin. Esimerkiksi merkkijono-olioita sisältävä lista on esitelty muodossa `ArrayList<String>` ja merkkijonoja avaimina ja arvoina sisältävä hajautustaulu on esitelty muodossa `HashMap<String, String>`. Miten ihmeessä luokan voi toteuttaa niin, että luokka voi sisältää annetun tyyppisiä olioita?

Geneerisyys (*generics*) liittyy olioita säilövien luokkien tapaan säilöä vapaavalintaisen tyyppisiä olioita. Vapaavalintaisuus perustuu luokkien määrittelyssä käytettyyn geneeriseen tyyppiparametriin, jonka avulla voidaan määritellä *olion luontivaiheessa* valittavia tyyppejä. Luokan geneerisyys määritellään antamalla luokan nimen jälkeen haluttu määrä luokan tyyppiparametreja luokan nimen jälkeen tulevien pienempi kuin ja suurempi kuin -merkkien väliin `public class Luokka<Tyyppiparametri1, Tyyppiparametri2, ...>`. Tyyppiparametrit määritellään tyypillisesti yhdellä kirjaimella.

Toteutetaan oma geneerinen luokka `Lokero`, johon voi asettaa yhden minkälaisen tahansa olion.


```java
public class Lokero<T> {
    private T alkio;

    public void asetaArvo(T alkio) {
        this.alkio = alkio;
    }

    public T haeArvo() {
        return alkio;
    }
}
```


Määrittely `public class Lokero<T>` kertoo että luokalle `Lokero` tulee antaa konstruktorissa tyyppiparametri. Konstruktorikutsun jälkeen kaikki olion sisäiset muuttujat tulevat olemaan kutsun yhteydessä annettua tyyppiä. Luodaan merkkijonon tallentava lokero.


```java
Lokero<String> merkkijono = new Lokero<>();
merkkijono.asetaArvo(":)");

System.out.println(merkkijono.haeArvo());
```

<sample-output>

:)

</sample-output>


Yllä olevalla ohjelmalla merkkijono-nimisen `Lokero`-olion **ajonaikainen** toteutus on seuraavanlainen.


```java
public class Lokero<String> {
    private String alkio;

    public void asetaArvo(String alkio) {
        this.alkio = alkio;
    }

    public String haeArvo() {
        return alkio;
    }
}
```

Tyyppiparametria vaihtamalla voidaan luoda myös muuntyyppisiä olioita tallentavia `Lokero`-olioita. Esimerkiksi kokonaisluvun saa tallennettua seuraavasti.


```java
Lokero<Integer> luku = new Lokero<>();
luku.asetaArvo(5);

System.out.println(luku.haeArvo());
```

<sample-output>

5

</sample-output>


Vastaavasti esimerkiksi `Random`-olion sisältävän lokeron saa luotua seuraavalla tavalla.


```java
Lokero<Random> luku = new Lokero<>();
luku.asetaArvo(new Random());

System.out.println(luku.haeArvo().nextDouble());
```


Tyyppiparametrien määrää ei ole rajattu, vaan määrä riippuu toteutuksesta. Ohjelmoija voisi halutessaan toteuttaa esimerkiksi `Pari`-luokan, johon voi laittaa kaksi halutun tyyppistä oliota.


```java
public class Pari<T, K> {
    private T eka;
    private K toka;

    public void asetaArvot(T eka, K toka) {
        this.eka = eka;
        this.toka = toka;
    }

    public T haeEka() {
        return this.eka;
    }

    public K haeToka() {
        return this.toka;
    }
}
```

<quiznator id="5c93b1e4fd9fd71425c6af09"></quiznator>


Huomattava osa Javan tietorakenteista käyttää tyyppiparametreja ja mahdollistaa eri tyyppisten muuttujien lisäämisen niihin. Esimerkiksi ArrayList saa yhden tyyppiparametrin, HashMap kaksi.


```java
List<String> merkkijonot = new ArrayList<>();
Map<String, String> avainArvoParit = new HashMap<>();
```


Jatkossa kun näet esimerkiksi tyypin `ArrayList<String>` tiedät että sen sisäisessä rakenteessa on käytetty geneeristä tyyppiparametria. Sama periaate löytyy esimerkiksi rajapinnassa Comparable.


Geneeristen rajapintojen tekeminen onnistuu samalla tavalla kuin geneeristen luokkien tekeminen. Alla on esimerkki geneerisestä rajapinnasta `Lista`.


```java
public interface Lista<T> {
    void lisaa(T arvo);
    T hae(int indeksi);
    T poista(int indeksi);
}
```


Luokka voi toteuttaa geneerisen rajapinnan kahdella tavalla. Luokka voi määritellä rajapinnan toteutuksen yhteydessä rajapinnalle tyyppiparametrin tai luokalle voidaan myös määritellä tyyppiparametri. Alla olevassa esimerkissä on luokka `Elokuvalista`, joka määrittelee listan toteutuksen yhteydessä rajapinnalle tyyppiparametrin. Elokuvalista on vain elokuvien käsittelyyn tarkoitettu.


```java
public class Elokuvalista implements Lista<Elokuva> {
    // oliomuuttujat

    @Override
    public void lisaa(Elokuva arvo) {
        // toteutus
    }

    @Override
    public Elokuva hae(int indeksi) {
        // toteutus
    }

    @Override
    public Elokuva poista(int indeksi) {
        // toteutus
    }
}
```

Toinen vaihtoehto on määritellä rajapinnan toteuttavalle luokalle tyyppiparametri, joka ohjataan myös rajapinnalle. Tällöin myös konkreettinen toteutus on geneerinen.

```java
public class Yleislista<T> implements Lista<T> {
    // oliomuuttujat

    @Override
    public void lisaa(T arvo) {
        // toteutus
    }

    @Override
    public T hae(int indeksi) {
        // toteutus
    }

    @Override
    public T poista(int indeksi) {
        // toteutus
    }
}
```

Yleislistan voisi toteuttaa myös halutessaan esimerkiksi Javan valmiin ArrayList-luokan avulla. Tällöin toteutus olisi kutakuinkin seuraava.

```java
import java.util.ArrayList;

public class Yleislista<T> implements Lista<T> {
    ArrayList<T> arvot;

    public Yleislista() {
        this.arvot = new ArrayList<>();
    }

    @Override
    public void lisaa(T arvo) {
        this.arvot.add(arvo);
    }

    @Override
    public T hae(int indeksi) {
        retun this.arvot.get(indeksi);
    }

    @Override
    public T poista(int indeksi) {
        T arvo = this.arvot.get(indeksi);
        this.arvot.remove(indeksi);
        return arvo;
    }
}
```


<programming-exercise name='Piilo' tmcname='osa11-Osa11_01.Piilo'>


Toteuta luokka Piilo, jolla on yksi geneerinen tyyppiparametri. Luokasta tehdyssä oliossa voi olla yksi olio kerralaan piilossa. Luokan tulee tarjota parametriton konstruktori sekä seuraavat kolme metodia:


- `public void laitaPiiloon(T piilotettava)` laittaa piiloon luokan tyyppiparametrin mukaisen olion. Mikäli piilossa on jo olio, vanha olio katoaa.
- `public T otaPiilosta()` ottaa piilosta luokan tyyppiparametrin mukaisen olion. Mikäli piilossa ei ole mitään, palautetaan `null`. Metodin kutsuminen palauttaa piilossa olevan olion ja poistaa olion piilosta.
- `public boolean onkoPiilossa()` palauttaa arvon `true` mikäli piilossa on olio. Mikäli piilossa ei ole oliota, palauttaa arvon `false`.

**Luokalle ei ole tehtäväpohjassa testejä**. Palauta tehtävä kun seuraavat esimerkit toimivat toivotulla tavalla.


```java
Piilo<String> jemma = new Piilo<>();
System.out.println(jemma.onkoPiilossa());
jemma.laitaPiiloon("kukkuu");
System.out.println(jemma.onkoPiilossa());
System.out.println(jemma.otaPiilosta());
System.out.println(jemma.onkoPiilossa());
jemma.laitaPiiloon("kukkuluuruu");
jemma.laitaPiiloon("huhuu");
System.out.println(jemma.onkoPiilossa());
System.out.println(jemma.otaPiilosta());
System.out.println(jemma.onkoPiilossa());
```

<sample-output>

false
true
kukkuu
false
true
huhuu
false

</sample-output>

```java
Piilo<Integer> jemma = new Piilo<>();
System.out.println(jemma.onkoPiilossa());
jemma.laitaPiiloon(1);
System.out.println(jemma.onkoPiilossa());
System.out.println(jemma.onkoPiilossa());
System.out.println(jemma.otaPiilosta());
System.out.println(jemma.onkoPiilossa());
```

<sample-output>

false
true
true
1
false

</sample-output>

</programming-exercise>


<programming-exercise name='Putki' tmcname='osa11-Osa11_02.Putki'>

Toteuta luokka Putki, jolla on yksi geneerinen tyyppiparametri. Putki toimii siten, että sinne voi lisätä arvoja ja sieltä voi ottaa arvoja. Lisääminen tapahtuu putken toisesta päästä ja ottaminen toisesta päästä, eli toisin sanoen putkesta otetaan aina siellä pisimpään ollut arvo kun taas sinne lisätään aina uusin arvo. Luokan tulee tarjota parametriton konstruktori sekä seuraavat kolme metodia:

- `public void lisaaPutkeen(T arvo)` lisää putkeen luokan tyyppiparametrin mukaisen olion.
- `public T otaPutkesta()` ottaa putkesta siellä pisimpään olleen arvon. Mikäli putkessa ei ole mitään, palautetaan `null`. Metodin kutsuminen palauttaa putkessa pisimpään olleen olion ja poistaa sen putkesta.
- `public boolean onkoPutkessa()` palauttaa arvon `true` mikäli putkessa on arvoja. Mikäli putki on tyhjä, palauttaa arvon `false`.

Tee luokan sisäinen toteutus ArrayListin avulla.

**Luokalle ei ole tehtäväpohjassa testejä**. Palauta tehtävä kun seuraavat esimerkit toimivat toivotulla tavalla.

```java
Putki<String> putki = new Putki<>();
putki.lisaaPutkeen("dibi");
putki.lisaaPutkeen("dab");
putki.lisaaPutkeen("dab");
putki.lisaaPutkeen("daa");
while(putki.onkoPutkessa()) {
    System.out.println(putki.otaPutkesta());
}
```

<sample-output>

dibi
dab
dab
daa

</sample-output>

```java
Putki<Integer> numeroputki = new Putki<>();
numeroputki.lisaaPutkeen(1);
numeroputki.lisaaPutkeen(2);
numeroputki.lisaaPutkeen(3);

int summa = 0;
while(numeroputki.onkoPutkessa()) {
    summa = summa + numeroputki.otaPutkesta();
}
System.out.println(summa);
System.out.println(numeroputki.otaPutkesta());
```

<sample-output>

6
null

</sample-output>

</programming-exercise>


<quiznator id='5c93b56cfd9fd71425c6af16'></quiznator>


# ArrayList ja Hajautustaulu

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
            return;
        }
    }
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


# Satunnaisuus ohjelmissa

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät miten satunnaislukuja luodaan ja tiedät joitakin tilanteita missä satunnaislukuja tarvitaan.
- Osaat käyttää Javan valmista Random-luokkaa satunnaislukujen luomiseen.

</text-box>

Satunnaisuutta tarvitaan esimerkiksi salausalgoritmeissa, koneoppimisessa sekä tietokonepelien ennustettavuuden vähentämisessä. Satunnaisuutta mallinnetaan käytännössä satunnaislukujen avulla, joiden luomiseen Java tarjoaa valmiin `Random`-luokan. Random-luokasta voi tehdä olion jota voi käyttää seuraavalla tavalla.


```java
import java.util.Random;

public class Arvontaa {
    public static void main(String[] args) {
        Random arpoja = new Random(); // luodaan apuväline arpoja

        for (int i = 0; i < 10; i++) {
            // Arvotaan ja tulostetaan satunnainen luku
            int luku = arpoja.nextInt(10);
            System.out.println(luku);
        }
    }
}
```

Yllä olevassa esimerkissä luodaan ensin `Random`-luokasta olio. Random-olio tarjoaa metodin `nextInt`, jolle annetaan parametrina kokonaisluku. Metodi palauttaa satunnaisen kokonaisluvun väliltä `[0,kokonaisluku[` eli *0..(annettu kokonaisluku - 1)*.

Ohjelman tuottama tulostus ei ole aina sama. Yksi mahdollinen tulostusesimerkki on seuraava:

<sample-output>

2
2
4
3
4
5
6
0
7
8

</sample-output>


<programming-exercise name='Lukuja' tmcname='osa11-Osa11_06.Lukuja'>

Kirjoita ohjelma, joka kysyy käyttäjältä tulostettavien satunnaislukujen määrän ja tulostaa tämän jälkeen luvut. Tulostettavien lukujen tulee olla välillä `[0, 10]`. Alla muutamia esimerkkejä.

<sample-output>

Montako satunnaislukua tulostetaan?
**4**
9
1
4
3

</sample-output>


<sample-output>

Montako satunnaislukua tulostetaan?
**8**
9
6
0
9
10
7
3
3

</sample-output>

</programming-exercise>


Metodin `nextInt` avulla pystyy luomaan hyvin monipuolista satunnaisuutta. Ohjelmoija saattaisi esimerkiksi haluta, että ohjelman ilmoittama lämpötila on satunnainen ja väliltä [-30,50]. Tällöin ratkaisu on arpoa lukuja nollan ja kahdeksankymmenen väliltä ja miinustaa arvotusta luvusta 30.


```java
Random arpoja = new Random();
int lampotila = arpoja.nextInt(81) - 30;
System.out.println(lampotila);
```

<programming-exercise name='Noppa' tmcname='osa11-Osa11_07.Noppa'>

Tehtäväpohjassa on luokka `Noppa`, jonka runko on seuraava:

```java
import java.util.Random;

public class Noppa {
    private Random random;
    private int tahkojenMaara;

    public Noppa(int tahkojenMaara) {
        this.random = new Random();
        // Alusta oliomuuttuja tahkojenMaara tässä
    }

    public int heita() {
        // arvo täällä luku jonka tulee olla yhdestä tahkojen määrään
        // ja palauta se
    }
}
```

Muokkaa luokkaa siten, että sen konstruktori`Noppa(int tahkojenMaara)` luo uuden noppa-olion annetulla nopan tahkojen (eri oman numeronsa sisältämien "puolien") määrällä. Muokkaa myös metodia `heita` siten, että se antaa satunnaisen nopanheiton tuloksen, jonka arvon tulee olla väliltä `1...tahkojen määrä`.

Seuraavassa noppaa testaava pääohjelma:


```java
public class Ohjelma {
    public static void main(String[] args) {
        Noppa noppa = new Noppa(6);

        for (int i = 0; i < 10; i++) {
            System.out.println(noppa.heita());
        }
    }
}
```

Tulostus voisi olla esimerkiksi seuraava:

<sample-output>

1
6
3
5
3
3
2
2
6
1

</sample-output>

</programming-exercise>


Random-luokasta tehdyn olion kautta päästään käsiksi myös satunnaisiin liukulukuihin, joita käytetään muunmuassa todennäköisyyslaskennan yhteydessä; tietokoneilla todennäköisyyksiä simuloidaan yleensä väliltä [0..1] olevilla luvuilla.

Random-oliolta satunnaisia liukulukuja saa metodilla `nextDouble`. Tarkastellaan seuraavia säämahdollisuuksia:

- Sataa räntää todennäköisyydellä 0.1 (10%)
- Sataa lunta todennäköisyydellä 0.3 (30%)
- Aurinko paistaa todennäköisyydellä 0.6 (60%)

Luodaan edellä olevista arvioista sääennustaja.

```java
import java.util.ArrayList;
import java.util.Random;

public class SaaEnnustaja {
    private Random random;

    public SaaEnnustaja() {
        this.random = new Random();
    }

    public String ennustaSaa() {
        double todennakoisyys = this.random.nextDouble();

        if (todennakoisyys <= 0.1) {
            return "Sataa räntää";
        } else if (todennakoisyys <= 0.4) { // 0.1 + 0.3
            return "Sataa lunta";
        } else { // loput, 1.0 - 0.4 = 0.6
            return "Aurinko paistaa";
        }
    }

    public int ennustaLampotila() {
        return (int) (4 * this.random.nextGaussian() - 3);
    }
}
```

Metodi `ennustaLampotila` on monella tapaa mielenkiintoinen. Metodin sisällä tehtävä kutsu `this.random.nextGaussian()` on tavallinen metodikutsu, jonka kaltaisia olemme nähneet aikaisemminkin. Kiinnostavaa tässä `Random`-luokan ilmentymän tarjoamassa metodissa on se, että metodin palauttama luku on normaalijakautunut (normaalijakautuneilla luvuilla voi kuvata esimerkiksi ihmisten pituuksia ja painoja -- jos et koe mielenkiintoa satunnaisuuden eri lajeihin se ei haittaa!).


```java
public int ennustaLampotila() {
    return (int) (4 * this.random.nextGaussian() - 3);
}
```

Edellisessä esimerkissä käytetään eksplisiittistä tyyppimuunnosta liukulukujen muuntamiseen kokonaisluvuiksi `(int)`. Vastaavalla menetelmällä voidaan muuttaa myös kokonaislukuja liukuluvuiksi kirjoittamalla `(double) kokonaisluku`

Luodaan vielä pääohjelma josta luokkaa `SaaEnnustaja` käytetään.

```java
// importit

public class Ohjelma {

    public static void main(String[] args) {
        SaaEnnustaja ennustaja = new SaaEnnustaja();

        // tallennetaan päivät listalle
        ArrayList<String> paivat = new ArrayList<>();
        paivat.add("Ma");
        paivat.add("Ti");
        paivat.add("Ke");
        paivat.add("To");
        paivat.add("Pe");
        paivat.add("La");
        paivat.add("Su");

        System.out.println("Seuraavan viikon sääennuste:");

        for (String paiva: paivat) {
            String saaEnnuste = ennustaja.ennustaSaa();
            int lampotilaEnnuste = ennustaja.ennustaLampotila();

            System.out.println(paiva + ": " + saaEnnuste + " " + lampotilaEnnuste + " astetta.");
        }
    }
}
```

Ohjelman tulostus voisi olla esimerkiksi seuraavanlainen:

<sample-output>

Seuraavan viikon sääennuste:
Ma: Sataa lunta 1 astetta.
Ti: Sataa lunta 1 astetta.
Ke: Aurinko paistaa -2 astetta.
To: Aurinko paistaa 0 astetta.
Pe: Sataa lunta -3 astetta.
La: Sataa lunta -3 astetta.
Su: Aurinko paistaa -5 astetta

</sample-output>

<programming-exercise name='Lottoarvonta' tmcname='osa11-Osa11_08.Lottoarvonta'>

Tehtävänäsi on täydentää luokkaa `Lottorivi`, joka arpoo viikon lottonumerot. Lottonumerot ovat väliltä 1--40 ja niitä arvotaan 7. Lottorivi koostuu siis seitsemästä eri numerosta väliltä 1--40.

Luokalle toivotaan seuraava toiminnot:

- konstruktori `Lottorivi` luo uuden Lottorivi-olion joka sisältää uudet, arvotut numerot
- metodi `numerot` palauttaa tämän lottorivin lottonumerot
- metodi `sisaltaaNumeron` kertoo onko arvotuissa numeroissa annettu numero
- metodi `arvoNumerot` arpoo riville uudet numerot

Luokan runko on seuraava:

```java
import java.util.ArrayList;
import java.util.Random;

    public class LottoRivi {
    private ArrayList<Integer> numerot;

    public LottoRivi() {
        this.arvoNumerot();
    }

    public ArrayList<Integer> numerot() {
        return this.numerot;
    }

    public boolean sisaltaaNumeron(int numero) {
        // Testaa tässä onko numero jo arvottujen numeroiden joukossa
        return false;
    }

    public void arvoNumerot() {
        // alustetaan lista numeroille
        this.numerot = new ArrayList<>();
        // Kirjoita numeroiden arvonta tänne käyttämällä metodia sisaltaaNumeron()
    }

    public boolean equals(Object toinen) {
        return false;
    }
}
```

Tehtäväpohjan mukana tulee seuraava pääohjelma:


```java
import java.util.ArrayList;

public class Ohjelma {
    public static void main(String[] args) {
        Lottorivi rivi = new Lottorivi();
        ArrayList<Integer> lottonumerot = rivi.numerot();

        System.out.println("Lottonumerot:");
        for (int numero: lottonumerot) {
            System.out.print(numero + " ");
        }

        System.out.println("");
    }
}
```

Ohjelman mahdollisia tulostuksia ovat seuraavat:


<sample-output>

Lottonumerot:
3 5 10 14 15 27 37

</sample-output>

<sample-output>

Lottonumerot:
2 9 11 18 23 32 34

</sample-output>


**Huom!** Sama numero saa esiintyä lottorivissä vain kerran. Lottorivin numeroiden ei tarvitse olla järjestyksessä.

</programming-exercise>


<text-box variant='hint' name='Lukujen satunnaisuudesta'>

Tietokoneiden toiminta on ennustettavissa sillä ne suorittavat niille annettuja komentoja orjallisesti. Ovatko siis tietokoneen luomat luvut todellisuudessa satunnaisia?

Tietokoneohjelmissa käytetyt satunnaisluvut ovat tyypillisesti pseudosatunnaislukuja, eli ne vaikuttavat satunnaisluvuilta, mutta seuraavat todellisuudessa jonkinlaista algoritmisesti luotua toistuvaa lukusarjaa. Suurimmalle osalle tietokoneohjelmista pseudosatunnaisluvut ovat riittävän hyviä -- esimerkiksi youtube-videoiden satunnaisessa toistossa normaali käyttäjä tuskin huomaa eroa. Toisaalta, jos satunnaislukuja käytetään tieteelliseen laskentaan, heikosti toimivat pseudosatunnaislukuja luovat algoritmit saattavat jopa johtaa tulosten kyseenalaistamiseen. Eräs esimerkki tällaisesta on hetken 1960-luvulla käytössä ollut IBM:n <a href="https://en.wikipedia.org/wiki/RANDU" target="_blank" norel>RANDU</a>.

<br/>

Kaikki tietokoneohjelmien satunnaisuus ei kuitenkaan ole pseudosatunnaisuutta. Vahvempaan satunnaisuuteen pyrkivät ohjelmat hyödyntävät muunmuassa jonkinlaisia tosielämän satunnaiseksi ajateltuja ilmiöitä satunnaislukujen luomiseen. Tällaisia ilmiöitä ovat esimerkiksi avaruussäteily tai vaikkapa <a href="https://www.wired.com/2003/08/random/" target="_blank" norel>laavalamppujen toiminta</a>.

<br/>

Lisää aiheesta osoitteessa <a href="https://www.random.org/randomness/" target="_blank" norel>https://www.random.org/randomness/</a>.

</text-box>


# Moniulotteinen tieto

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet menetelmiä moniulotteisen tiedon esittämiseen.
- Osaat luoda ja käyttää moniulotteisia taulukoita.

</text-box>

Aiemmat esimerkkimme ovat käsitelleet yksiulotteisia taulukoita, missä indeksi kertoo sijainnin yhdessä ulottuvuudessa. Taulukon voi luoda myös useampiulotteisena, jolloin taulukossa olevaa tietoa voi tarkastella useamman indeksin avulla. Tämä on kätevää esimerkiksi silloin, jos tieto on useampiulotteista kuten esimerkiksi koordinaatistossa.

Kaksiulotteinen taulukko, jossa on kaksi riviä ja kolme saraketta, luodaan seuraavasti:


```java
int rivit = 2;
int sarakkeet = 3;
int[][] kaksiulotteinenTaulukko = new int[rivit][sarakkeet];
```

Yllä luomme taulukon, jonka jokainen rivi viittaa taulukkoon, jossa on tietty määrä sarakkeita. Kaksiulotteisen taulukon läpikäynti onnistuu kahden sisäkkäisen for-toistolauseen avulla seuraavasti:

```java
int rivit = 2;
int sarakkeet = 3;
int[][] kaksiulotteinenTaulukko = new int[rivit][sarakkeet];

System.out.println("rivi, sarake, arvo");
for (int rivi = 0; rivi < kaksiulotteinenTaulukko.length; rivi++) {
    for (int sarake = 0; sarake < kaksiulotteinenTaulukko[rivi].length; sarake++) {
        int arvo = kaksiulotteinenTaulukko[rivi][sarake];
        System.out.println("" + rivi + ", " + sarake + ", " + arvo);
    }
}
```

Ylläolevan ohjelman tulostus on seuraava.

<sample-output>

rivi, sarake, arvo
0, 0, 0
0, 1, 0
0, 2, 0
1, 0, 0
1, 1, 0
1, 2, 0

</sample-output>

Yllä huomataan että `int`-tyyppisten muuttujien oletusarvo on 0.

Voimme muuttaa taulukon arvoja kuten ennenkin. Alla asetamme kolmeen kohtaan uudet arvot.

```java
int rivit = 2;
int sarakkeet = 3;
int[][] kaksiulotteinenTaulukko = new int[rivit][sarakkeet];

kaksiulotteinenTaulukko[0][1] = 4;
kaksiulotteinenTaulukko[1][1] = 1;
kaksiulotteinenTaulukko[1][0] = 8;

System.out.println("rivi, sarake, arvo");
for (int rivi = 0; rivi < kaksiulotteinenTaulukko.length; rivi++) {
    for (int sarake = 0; sarake < kaksiulotteinenTaulukko[rivi].length; sarake++) {
        int arvo = kaksiulotteinenTaulukko[rivi][sarake];
        System.out.println("" + rivi + ", " + sarake + ", " + arvo);
    }
}
```

Nyt tulostus näyttää seuraavalta:

<sample-output>

rivi, sarake, arvo
0, 0, 0
1, 0, 4
2, 0, 0
0, 1, 8
1, 1, 1
2, 1, 0

</sample-output>


<programming-exercise name='Taulukko merkkijonona' tmcname='osa11-Osa11_09.TaulukkoMerkkijonona'>

Luo tehtäväpohjaan metodi `public static String taulukkoMerkkijonona(int[][] taulukko)`, joka muodostaa parametrina saamastaan taulukosta merkkijonomuotoisen esityksen ja palauttaa sen.

Kertaa yhdeksännestä osasta StringBuilderin käyttö ennen tehtävän tekoa. Alla muutamia esimerkkejä metodin odotetusta toiminnasta.


```java
int rivit = 2;
int sarakkeet = 3;
int[][] matriisi = new int[rivit][sarakkeet];
matriisi[0][1] = 5;
matriisi[1][0] = 3;
matriisi[1][2] = 7;
System.out.println(taulukkoMerkkijonona(matriisi));
```

<sample-output>

050
307

</sample-output>

```java
int[][] matriisi = {
    {3, 2, 7, 6},
    {2, 4, 1, 0},
    {3, 2, 1, 0}
};

System.out.println(taulukkoMerkkijonona(matriisi));
```

<sample-output>

3276
2410
3210

</sample-output>

</programming-exercise>


<programming-exercise name='Taikaneliö (4 osaa)' tmcname='osa11-Osa11_10.Taikanelio'>


<a href="https://fi.wikipedia.org/wiki/Taikaneli%C3%B6" target="_blank">Taikaneliöt</a> ovat kokonaisluvuista järjestettyjä neliöitä, joiden jokaisen rivin, sarakkeen ja lävistäjän summa on sama. Harjoitellaan taulukoiden käyttöä taikaneliöiden yhteydessä.

<br/>

Ohjelmassa on annettu osittain toteutettu luokka `Taikanelio`, jota voidaan käyttää lähtökohtana. Tehtävänäsi on ensin lisätä luokkaan toiminnallisuutta, jolla tarkistetaan onko neliö taikaneliö. Tämän jälkeen toteutat algoritmin taikaneliön luomiseen.


<h2>Rivien summat</h2>

Luokassa Taikanelio on valmiina metodi `public ArrayList<Integer> rivienSummat()`, joka palauttaa tyhjän ArrayList-olion. Muuta metodin toiminnallisuutta siten, että se palauttaa listan, jossa on jokaisen taikaneliön rivin summa.

Esimerkiksi seuraavanlaisella taikaneliöllä rivienSummat-metodin pitäisi palauttaa lista, jossa on luvut `15, 15, 15`.

```
8 1 6
3 5 7
4 9 2
```

Vaikka taikaneliö ei olisi "oikea" taikaneliö, tulee rivien summat silti palauttaa. Allaolevalla esimerkillä rivienSummat-metodin pitäisi palauttaa lista, jossa on luvut `6, 15, 24`.


```
1 2 3
4 5 6
7 8 9
```


<h2>Sarakkeiden summat</h2>

Luokassa Taikanelio on valmiina metodi `public ArrayList<Integer> sarakkeidenSummat()`, joka palauttaa tyhjän ArrayList-olion. Muuta metodin toiminnallisuutta siten, että se palauttaa listan, jossa on jokaisen taikaneliön sarakkeen summa.

Esimerkiksi seuraavanlaisella taikaneliöllä sarakkeidenSummat-metodin pitäisi palauttaa lista, jossa on luvut `15, 15, 15`.

```
8 1 6
3 5 7
4 9 2
```

Vaikka taikaneliö ei olisi "oikea" taikaneliö, tulee sarakkeiden summat silti palauttaa. Allaolevalla esimerkillä sarakkeidenSummat-metodin pitäisi palauttaa lista, jossa on luvut `12, 15, 18`.


```
1 2 3
4 5 6
7 8 9
```


<h2>Lävistäjien summat</h2>

Toteuta seuraavaksi metodi `public ArrayList<Integer> lavistajienSummat()`, joka palauttaa listan, jossa on taikaneliön lävistäjien summat.

Esimerkiksi seuraavanlaisella taikaneliöllä lavistajienSummat-metodin pitäisi palauttaa lista, jossa on luvut `15, 15` (8 + 5 + 2) ja (4 + 5 + 6).

```
8 1 6
3 5 7
4 9 2
```

Vaikka taikaneliö ei olisi "oikea" taikaneliö, tulee lävistäjien summat silti palauttaa. Allaolevalla esimerkillä lavistajienSummat-metodin pitäisi palauttaa lista, jossa on luvut `15, 15` (1 + 5 + 9) ja (7 + 5 + 3).

```
1 2 3
4 5 6
7 8 9
```


<h2>Taikaneliön luominen</h2>

Huom! Tämä tehtävä on melko visainen, kannattanee palauttaa edelliset osat ennen tämän aloitusta.

Taikaneliön pystyy myös luomaan. Tutustutaan <a href="https://en.wikipedia.org/wiki/Siamese_method" target="_blank">Siamese method</a>-menetelmään, jonka avulla voidaan luoda parittomien lukujen kokoisia taikaneliöitä.

<br/>

Siamese method -algoritmi toimii siten, että numero yksi asetetaan ylimmän rivin keskimmäiseen sarakkeeseen. Tämän jälkeen siirrytään yksi ylös ja yksi oikealle ja asetetaan luku kaksi. Tämän jälkeen taas siirrytään yksi ylös ja yksi oikealle, ja asetetaan luku kolme jne.

Lukujen lisäämiseen liittyy kaksi sääntöä:

1. Jos siirtymä tapahtuu siten, että mennään taikaneliön alueen ulkopuolelle, hypätään toiselle laidalle. Jos siis mennään "oikealta yli" mennään vasempaan laitaan ja jos mennään "ylhäältä yli" mennään alalaitaan.
2. Jos kohdassa on jo luku, ei mennäkään ylös ja oikealle, vaan astutaan yksi askel alaspäin.

Käy katsomassa yllä kuvatun algoritmin visualisaatio Wikipedian sivulta <a href="https://en.wikipedia.org/wiki/Siamese_method" target="_blank">Siamese method</a>.

<br/>

Toteuta luokkaan `Taikaneliotehdas` metodi `luoTaikanelio` joka palauttaa taikaneliön jonka sivun pituus annetaan parametrina. Metodin tarvitsee toimia vain tilanteissa, missä neliön leveys on pariton luku.

</programming-exercise>


<text-box variant='hint' name='Taulukko vs. Hajautustaulu'>

Taulukon toiminnallisuutta vastaavan toiminnallisuuden pystyy toteuttamaan hajautustaulun avulla. Eikö hajautustaulun käyttö olisi yleisesti ottaen parempi vaihtoehto, sillä sitä ei esimerkiksi tarvitse kasvattaa lainkaan?

Kun hajautustaulusta haetaan tietoa tietyllä avaimella, metodin hashCode perusteella selvitetään paikka, mistä tietoa haetaan. Samassa paikassa voi olla useampi arvo (listassa), jolloin haettavaa avainta verrataan jokaiseen listalla olevaan arvoon equals-metodia käyttäen. Kun taulukosta haetaan arvoa tietyllä avaimella -- eli indeksillä -- ei vastaavaa toiminnallisuutta tarvitse tehdä. Taulukossa joko on arvo tai arvoa ei ole. Taulukkoon liittyy pieni tehokkuushyöty ohjelman suorituskyvyn kannalta.

Tämä tehokkuushyöty kuitenkin tulee lisääntyneen virhealttiuden sekä työmäärän kustannuksella. Hajautustauluun on valmiiksi toteutettuna sisäisen taulukon kasvattaminen ja sen toiminnallisuutta on testattu hyvin laajasti. Taulukkoa käytettäessä tällaista etua ei ole -- uutta toiminnallisuutta toteuttaessa saattaa päätyä virheisiin, mikä kasvattaa työmäärää. Virheet ovat toki luonnollinen osa ohjelmistokehitystä.

Kun ajattelemme muistin käyttöä, hajautustaululla voi olla -- tapauksesta riippuen -- pieni etu. Kun taulukko luodaan, muistista varataan heti tila koko taulukolle. Mikäli taulukon jokaiseen indeksiin ei tarvitse lisätä tietoa, on osa tästä tiedosta varattuna turhaan. Hajautustaululla taas tällaista muistin varaamista ei ennakkoon tehdä -- hajautustaulun kokoa kasvatetaan tarvittaessa.

</text-box>


# Vertaisarviointi

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Harjoittelet toisten kirjoittamien testimetodien lukemista ja opit mahdollisesti lisää testaamisesta.

</text-box>


Suunnittelimme ja toteutimme kymmenennessä osassa oman listoja käsittelevän tehtävän sekä siihen liittyvät testit. Nyt on taas vertaisarvioinnin aika! Anna vertaispalautetta kahdesta jonkun toisen kurssilaisen lähettämästä tehtävästä ja arvioi lopuksi itse tekemääsi tehtävää. Itse tekemäsi tehtävä näkyy vain jos olet tehnyt sen -- jos et tehnyt tehtävää, pääset arvioimaan yhden ylimääräisen tehtävän.

Tehtävänanto tehtävälle oli seuraava:

## Suunnittele oma tehtävä: Listat

Suunnittele ohjelmointitehtävä, jonka avulla ohjelmoija voi harjoitella listojen käsittelyä (tiedon lisäämistä listalle, tiedon hakemista listalta, ...). Toteuta tehtävänanto siten, että tehtävän ratkaisijan tulee kirjoittaa yksi tai useampi luokkametodi.

Kirjoita ohjelmointitehtävälle tehtävänanto, malliratkaisu ja automaattiset testit (vähintään 3). Merkitse malliratkaisuun tulevilta ohjelmoijilta piilotettavat rivit lähdekoodinäkymän vasemmalta laidalta rukseja painamalla.

Kun kirjoitat tehtävänantoa, pyri mahdollisimman tarkkoihin ohjeisiin. Kerro ohjelmoijalle mm.
1. Minkä niminen tai minkä nimisiä metodeja tulee luoda.
2. Mitä metodin tulee palauttaa (Pyydä toteuttamaan vain metodeja, jotka palauttavat arvon)
3. Mitä parametreja metodit saavat.

Tarkastellaan seuraavaa esimerkkiä. Oletetaan, että tehtävässä tulee luoda seuraavanlainen metodi:

```java
public String listanPisin(List<String> lista) {
    if (lista.isEmpty()) {
        return null;
    }
    String pisin = lista.get(0);
    for (String merkkijono: lista) {
        if (merkkijono.length() > pisin.length()) {
            pisin = merkkijono;
        }
    }

    return pisin;
}
```

Yllä olevaa metodia odotettaessa ohjelmoijaa tulisi ohjeistaa vähintään seuraavasti: *Kirjoita metodi, jonka nimi on listanPisin. Metodi saa parametrinaan `List`-tyyppisen merkkijonoja sisältävän listan. Metodin tulee palauttaa listan pisin merkkijono. Mikäli listalla ei ole yhtäkään arvoa, tulee metodin palauttaa `null`-viite*.

Voit lisäksi antaa esimerkkikoodia tai vaikkapa esimerkkisyötteitä, joiden perusteella ohjelmaa voi testata. Tee lisäksi vähintään kolme automaattista testiä. Yllä olevaa luokkaa voisi testata esimerkiksi seuraavilla metodeilla -- alla oletetaan, että metodin sisältävästä luokasta on luotu olio, ja että olion nimi on `tehtavaOlio`:

```java
@Test
public void palauttaaNullJosTyhja() {
    List<String> lista = new ArrayList<>();
    assertTrue(tehtavaOlio.listanPisin(lista) == null);
}

@Test
public void palautusOikeinYhdenArvonSisaltavastaListasta() {
    List<String> lista = new ArrayList<>();
    lista.add("Hei maailma!");

    assertEquals("Hei maailma!", tehtavaOlio.listanPisin(lista));
}
```



<text-box variant='hint' name='Vertaisarviointi'>

Alla on kolme Crowdsorcereriin tehtyä tehtävää: kaksi jonkun kurssitoverisi lähettämää ja yksi itsearviointia varten. Niiden yhteydessä on muistin virkistykseksi ohjeistus, jonka pohjalta kyseiset tehtävänannot on tehty.

Tarkastele jokaisen tehtävän tehtävänantoa ja testejä. Arvioi niiden selkeyttä, kattavuutta ja sitä, kuinka hyvin ne vastaavat valmiina annettua lähdekoodia.

Palautteenannon avuksi on annettu väittämiä. Voit valita kuinka samaa mieltä niiden kanssa olet painamalla hymiöitä. Annathan myös sanallista palautetta sille varattuun kenttään! Lisää vielä tehtävää mielestäsi kuvaavia tageja ja paina Lähetä.

Anna arvio kummallekin vertaispalautetehtävälle ja lopuksi vielä omallesi.

Muista olla reilu ja ystävällinen. Hyvä palaute on rehellistä, mutta kannustavaa!

Voit halutessasi ladata arvioitavan tehtävän tehtäväpohjan ja malliratkaisun koneellesi, ja testata niiden käyttöä. Molemmat tulevat ZIP-paketeissa, jolloin sinun täytyy purkaa ne, ennen kuin voit avata ne NetBeansissä.

</text-box>



<crowdsorcerer id='28' peerreview='true' exercisecount='3'></crowdsorcerer>

# Yhteenveto

Yhdennessätoista osassa eli Ohjelmoinnin jatkokurssin neljännessä osassa tutustuimme geneeriseen tyyppiin sekä sen käyttöön tietorakenteissa kuten ArrayListissä ja HashMapissa, joista loimme myös omat versiot. Harjoittelimme lisäksi satunnaislukujen luomista sekä useampiulotteisten taulukoiden käyttöä. Lopuksi kertasimme lyhyesti testien kirjoittamista erityisesti muiden kirjoittamien testien lukemiseen keskittyen.

Vastaa vielä alla olevaan kyselyyn.

<quiznator id='5c93ae573972a9147410b2fe'></quiznator>
