---
path: '/osa-5/3-metodien-ja-konstruktorien-kuormittaminen'
title: 'Metodien ja konstruktorien kuormittaminen'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteen kuormittaminen.
- Osaat luoda luokalle useampia konstruktoreita.
- Osaat luoda luokkaan useampia samannimisiä metodeja.

</text-box>


Palataan jälleen henkilöitä käsittelevän luokan pariin. Luokka `Henkilo` näyttää tällä hetkellä seuraavalta:


```java
public class Henkilo {

    private String nimi;
    private int ika;
    private int pituus;
    private int paino;

    public Henkilo(String nimi) {
        this.nimi = nimi;
        this.ika = 0;
        this.paino = 0;
        this.pituus = 0;
    }

    public void tulostaHenkilo() {
        System.out.println(this.nimi + " olen " + this.ika + " vuotta vanha");
    }

    public void vanhene() {
        this.ika++;
    }

    public boolean taysiIkainen() {
        if (this.ika &lt; 18) {
            return false;
        }

        return true;
    }

    public double painoindeksi() {
        double pituusMetreina = this.pituus / 100.0;

        return this.paino / (pituusMetreina * pituusMetreina);
    }

    public String toString() {
        return this.nimi + " olen " + this.ika + " vuotta vanha, painoindeksini on " + this.painoindeksi();
    }

    public void setPituus(int pituus) {
        this.pituus = pituus;
    }

    public int getPituus() {
        return this.pituus;
    }

    public int getPaino() {
        return this.paino;
    }

    public void setPaino(int paino) {
        this.paino = paino;
    }

    public String getNimi() {
        return this.nimi;
    }
}
```


Kaikki henkilöoliot ovat luontihetkellä 0-vuotiaita, sillä konstruktori asettaa uuden henkilön `ika`-oliomuuttujan arvoksi 0:


```java
public Henkilo(String nimi) {
    this.nimi = nimi;
    this.ika = 0;
    this.paino = 0;
    this.pituus = 0;
}
```


##  Konstruktorin kuormittaminen


  Haluaisimme luoda henkilöitä myös siten, että konstruktorin parametrina annettaisiin ikä nimen lisäksi. Tämä onnistuu, sillä konstruktoreja voi olla useita. Tehdään vaihtoehtoinen konstruktori. Vanhaa konstruktoria ei tarvise poistaa.


```java
public Henkilo(String nimi) {
    this.nimi = nimi;
    this.ika = 0;
    this.paino = 0;
    this.pituus = 0;
}

public Henkilo(String nimi, int ika) {
    this.nimi = nimi;
    this.ika = ika;
    this.paino = 0;
    this.pituus = 0;
}
```


Nyt olioiden luonti onnistuu kahdella vaihtoehtoisella tavalla:


```java
public static void main(String[] args) {
    Henkilo pekka = new Henkilo("Pekka", 24);
    Henkilo ada = new Henkilo("Ada");

    System.out.println(pekka);
    System.out.println(ada);
}
```

<sample-output>

Pekka, ikä 24 vuotta
Ada, ikä 0 vuotta

</sample-output>


Tekniikkaa jossa luokalla on kaksi konstruktoria, kutsutaan *konstruktorin kuormittamiseksi*. Luokalla voi siis olla useita konstruktoreja, jotka poikkeavat toisistaanparametriensa määrältä tai tyypeiltä. Ei kuitenkaan ole mahdollista tehdä kahta erilaista konstruktoria joilla on täysin saman tyyppiset parametrit. Emme siis voi edellisten lisäksi lisätä konstruktoria `public Henkilo(String nimi, int paino)` sillä Javan on mahdoton erottaa tätä kaksiparametrisesta konstruktorissa, jossa luku tarkoittaa ikää.


## Oman konstruktorin kutsuminen


Mutta hetkinen, aiemmin todettiin että "copy-paste"-koodi ei ole hyvä idea. Kun tarkastellaan edellä tehtyjä kuormitettuja konstruktoreita, niissä on aika paljon samaa. Emme ole oikein tyytyväisiä tilanteeseen.


Konstruktoreista ylempi, eli nimen parametrinaan saava konstruktori, on oikeastaan alemman, eli nimen ja iän parametrinaan saavan konstruktorin, erikoistapaus. Entä jos ylempi konstruktori voisi "kutsua" alempaa konstruktoria?


Tämä onnistuu, sillä konstruktorin sisältä voi kutsua toista konstruktoria juuri tähän olioon liittyvän `this`-ilmauksen avulla!


Muutetaan ylempää konstruktoria siten, että se ei itse tee mitään vaan ainoastaan kutsuu alempaa konstruktoria ja pyytää sitä asettamaan iäksi 0:


```java
public Henkilo(String nimi) {
    this(nimi, 0);  // suorita tässä toisen konstruktorin koodi ja laita ika-parametrin arvoksi 0
}

public Henkilo(String nimi, int ika) {
    this.nimi = nimi;
    this.ika = ika;
    this.paino = 0;
    this.pituus = 0;
}
```

Oman konstruktorin kutsu `this(nimi, 0);` saattaa vaikuttaa erikoiselta. Asiaa voi vaikka ajatella siten, että kutsun kohdalle tulee "copy-pastena" automaattisesti alemman konstruktorin koodi, siten että ika parametrin arvoksi tulee 0. Huom! Jos konstruktorista kutsutaan toista konstruktoria, tulee konstruktorin kutsun olla ensimmäinen toiminto konstruktorin sisällä.


Olioiden luonti onnistuu aivan kuten edellisessä esimerkissä:


```java
public static void main(String[] args) {
    Henkilo pekka = new Henkilo("Pekka", 24);
    Henkilo esko = new Henkilo("Esko");

    System.out.println(pekka);
    System.out.println(esko);
}
```

<sample-output>

Pekka, ikä 24 vuotta
Esko, ikä 0 vuotta

</sample-output>

<quiznator id='5bae770fc68dfe01d43637bc'></quiznator>


## Metodin kuormittaminen


Konstruktorien tapaan myös metodeja voi kuormittaa, eli samannimisestä metodista voi olla useita versioita. Jälleen eri versioiden parametrien tyyppien on oltava erilaiset. Tehdään `vanhene`-metodista toinen versio, joka mahdollistaa henkilön vanhentamisen parametrina olevalla vuosimäärällä:


```java
public void vanhene() {
    this.ika = this.ika + 1;
}

public void vanhene(int vuodet) {
    this.ika = this.ika + vuodet;
}
```

Seuraavassa "Pekka" syntyy 24-vuotiaana, vanhenee ensin vuoden ja sitten 10 vuotta:


```java
public static void main(String[] args) {
    Henkilo pekka = new Henkilo("Pekka", 24);
    System.out.println(pekka);

    pekka.vanhene();
    System.out.println(pekka);

    pekka.vanhene(10);
    System.out.println(pekka);
}
```

Tulostuu:


<sample-output>

Pekka, ikä 24 vuotta
Pekka, ikä 25 vuotta
Pekka, ikä 35 vuotta

</sample-output>


Henkilöllä on nyt siis käytännössä kaksi kappaletta `vanhene`-nimisiä metodeja. Se kumpi metodeista valitaan suoritettavaksi, riippuu metodikutsussa käytettyjen parametrien määrästä.


Ohjelmaa voi muokata myös niin, että parametriton metodi `vanhene` toteutetaan metodin `vanhene(int vuodet)` avulla:


```java
public void vanhene() {
    this.vanhene(1);
}

public void vanhene(int vuodet) {
    this.ika = this.ika + vuodet;
}
```


<quiznator id='5bae75b000b2e30284f440cb'></quiznator>

<youtube id='b6YmqoQopvs'></youtube>



<programming-exercise name='Monta konstruktoria'>

Tehtäväpohjassa on luokka `Esine`, joka kuvaa kaupassa olevaa esinettä. Jokaisella esineellä on nimi, sijainti sekä paino.


Lisää luokkaan `Esine` seuraavat kolme konstruktoria:

- `public Esine(String nimi)` luo esineen annetulla nimellä. Esineen sijainniksi tulee "pientavarahylly" ja painoksi 1.

- `public Esine(String nimi, String sijainti)` luo esineen annetulla nimellä ja sijainnilla. Esineen painoksi tulee 1.

- `public Esine(String nimi, int paino)` luo esineen annetulla nimellä ja painolla. Esineen sijainniksi tulee "varasto".


Voit kokeilla ohjelmasi toimintaa seuraavalla koodilla:


```java
Esine mitta = new Esine("Mitta");
Esine laasti = new Esine("Laasti", "remonttitavarat");
Esine rengas = new Esine("Rengas", 5);

System.out.println(mitta);
System.out.println(laasti);
System.out.println(rengas);
```


<sample-output>

Mitta (1 kg) löytyy sijainnista pientavarahylly
Laasti (1 kg) löytyy sijainnista remonttitavarat
Rengas (5 kg) löytyy sijainnista varasto

</sample-output>

</programming-exercise>


<programming-exercise name='Kuormitettu laskuri (2 osaa)'>


<h2>Monta konstruktoria</h2>


Toteuta luokka `Laskuri`, joka sisältää luvun, jota voi vähentää ja suurentaa. Luokalla tulee olla seuraavat konstruktorit:


- `public Laskuri(int alkuarvo)` asettaa laskurin alkuarvoksi parametrin `alkuarvo` arvon.

- `public Laskuri()` laskurin alkuarvoksi tulee 0.


ja seuraavat metodit:

- `public int arvo()` palauttaa laskurin tämänhetkisen arvon

- `public void lisaa()` lisää laskurin arvoa yhdellä

- `public void vahenna()` vähentää laskurin arvoa yhdellä


<h2>Vaihtoehtoiset metodit</h2>


Tee laskurin metodeista `lisaa` ja `vahenna` myös yksiparametriset versiot:


- `public void lisaa(int lisays)` lisää laskurin arvoa parametrina annetun luvun verran. Jos parametrin arvo on negatiivinen, ei laskurin arvo muutu.

- `public void vahenna(int vahennys)` vähentää laskurin arvoa parametrina annetun luvun verran. Jos parametrin arvo on negatiivinen, ei laskurin arvo muutu.

</programming-exercise>
