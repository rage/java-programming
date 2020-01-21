---
path: '/osa-12/1-geneeriset-tyyppiparametrit'
title: 'Geneeriset tyyppiparametrit'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät mitä käsitteellä geneerinen tyyppiparametri tarkoitetaan.
- Tunnet Javassa olevia geneerisiä tyyppiparametreja hyödyntäviä luokkia.
- Osaat luoda omia luokkia, joissa käytetään geneerisiä tyyppiparametreja.

</text-box>

<quiz id='9ff97c98-5a74-5b1a-aaac-0ea23abf872e'></quiz>


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

<quiz id="0ce45d4e-cfe2-5952-805b-89c1aa8fac01"></quiz>


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


<programming-exercise name='Piilo' tmcname='osa12-Osa12_01.Piilo'>


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


<programming-exercise name='Putki' tmcname='osa12-Osa12_02.Putki'>

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


<quiz id='7f5affb6-dd88-57b2-bc30-aa9a7c5d8887'></quiz>
