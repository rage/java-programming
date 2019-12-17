---
path: '/osa-6/1-olioista-koostuvat-oliot'
title: 'Olioista koostuvat oliot'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat listojen käyttöä.
- Tiedät, että viittaustyyppisen muuttujan lisääminen listalle kopioi listalle muuttujan viitteen.
- Osaat käyttää listaa oliomuuttujana.

</text-box>

TODO: uusi lead in, pari perusoliotehtävää


Tarkastellaan vielä olioiden -- tai viittaustyyppisten muuttujien -- käyttöä listalla. Kun olio lisätään listalle, listalle kopioidaan viite. Kuten aiemmin, olion sisäisestä tilasta ei luoda kopiota, vaan listalle lisätään viite olemassa olevaan olioon.


Alla olevassa esimerkissä luodaan ensin olio `juhana`, joka lisätään listalle. Tämän jälkeen listalle lisätään kaksi muuta oliota. Seuraavaksi `juhana`-olion metodia `vanhene` kutsutaan. Lopulta jokaista listalla olevaa oliota vanhennetaan.


```java
ArrayList<Henkilo> henkilot = new ArrayList<>();

Henkilo juhana = new Henkilo("Juhana");
henkilot.add(juhana);

henkilot.add(new Henkilo("Matti"));
henkilot.add(new Henkilo("Martin"));

// juhana vanhenee 2 vuotta
juhana.vanhene();
juhana.vanhene();

for (Henkilo henkilo: henkilot) {
    henkilo.vanhene();
}

for (Henkilo henkilo: henkilot) {
    System.out.println(henkilo);
}
```

<sample-output>

Juhana, ikä 3 vuotta
Matti, ikä 1 vuotta
Martin, ikä 1 vuotta

</sample-output>

Listalle on kopioituna viitteet olioihin. Yllä olevassa esimerkissä muuttujan `juhana` arvona on sama viite kuin listalla, joten "Juhanan" ikä muuttuu myös jos hän vanhenee listan ulkopuolella.


<img src="../img/drawings/henkilot-ja-juhana.png"/>


## Lista oliomuuttujana


Listat ovat olioita, joten oliomuuttujaksi voi asettaa listan. Tarkastellaan tätä seuraavaksi.

Olemme aiemmin huomanneet, että listat ovat näppäriä muunmuassa silloin, kun haluamme pitää kirjaa useammasta erillisestä asiasta. Alla olevassa esimerkissä käsitteelle soittolista on luotu luokka. Soittolista sisältää kappaleita.

```java
// importit

public class Soittolista {
    private ArrayList<String> kappaleet;

    public Soittolista() {
        this.kappaleet = new ArrayList<>();
    }

    public void lisaaKappale(String kappale) {
        this.kappaleet.add(kappale);
    }

    public void poistaKappale(String kappale) {
        this.kappaleet.remove(kappale);
    }

    public void tulostaKappaleet() {
        for (String kappale: this.kappaleet) {
            System.out.println(kappale);
        }
    }
}
```


Soittolistojen luominen on edellisen luokan avulla helppoa.


```java
Soittolista lista = new Soittolista();
lista.lisaaKappale("Sorateiden kuningas");
lista.lisaaKappale("Teuvo, maanteiden kuningas");
lista.tulostaKappaleet();
```

<sample-output>

Sorateiden kuningas
Teuvo, maanteiden kuningas

</sample-output>


<programming-exercise name='Ruokalista (3 osaa)' tmcname='osa05-Osa05_16.Ruokalista'>

Kumpulan kampuksella Helsingissä toimivaan Unicafe-nimiseen gourmet-ravintolaan tarvitaan uusi ruokalista. Keittiömestari tietää ohjelmoinnista, ja haluaa listan hallinnointiin tietokonejärjestelmän. Toteutetaan tässä tehtävässä järjestelmän sydän, luokka Ruokalista.

Tehtäväpohjan mukana tulee `Main`-luokka, jossa voit testata ruokalistan toimintaa. Ruokalistan toteuttamista varten saat seuraavanlaisen tehtäväpohjan:


```java
import java.util.ArrayList;

public class Ruokalista {

    private ArrayList<String> ateriat;

    public Ruokalista() {
        this.ateriat = new ArrayList<>();
    }

    // toteuta tänne tarvittavat metodit
}
```

Ruokalistaoliolla on oliomuuttujana ArrayList, jonka on tarkoitus tallentaa ruokalistalla olevien ruokalajien nimet. Ruokalistan tulee tarjota seuraavat metodit:

- `public void lisaaAteria(String ateria)` lisää aterian ruokalistalle.

- `public void tulostaAteriat()` tulostaa ateriat.

- `public void tyhjennaRuokalista()` tyhjentää ruokalistan.


<h2>Aterian lisääminen</h2>


Toteuta metodi `public void lisaaAteria(String ateria)`, joka lisää uuden aterian listalle `ateriat`. Jos lisättävä ateria on jo listalla, sitä ei tule lisätä uudelleen. Jos et muista miten listalla olemassaoloa tarkastellaan, lue edellisestä osasta kohta "Onko listalla".


<h2>Aterioiden tulostaminen</h2>

Toteuta metodi `public void tulostaAteriat()`, joka tulostaa ateriat. Kolmen aterian lisäyksen jälkeen tulostuksen tulee olla seuraavanlainen.


<sample-output>

ensimmäisenä lisätty ateria
toisena lisätty ateria
kolmantena lisätty ateria

</sample-output>


<h2>Ruokalistan tyhjentäminen</h2>


Toteuta metodi `public void tyhjennaRuokalista()` joka tyhjentää ruokalistan. `ArrayList`-luokalla on metodi josta on tässä hyötyä. NetBeans osaa vihjata käytettävissä olevista metodeista kun kirjoitat olion nimen ja pisteen. Yritä kirjoittaa `ateriat.` metodirungon sisällä ja katso mitä käy.


</programming-exercise>


Oliomuuttujana oleva lista voi sisältää merkkijonojen lisäksi myös muunlaisia olioita. Laajennetaan edellä hahmoteltua luokkaa `PainonvartijaYhdistys` siten, että yhdistys lisää kaikki jäsenensä listalle. Laajennetussa versiossa konstruktorille annetaan alimman painoindeksin lisäksi myös luotavan yhdistyksen nimi:


```java
public class PainonvartijaYhdistys {
    private double alinPainoindeksi;
    private String nimi;
    private ArrayList<Henkilo> jasenet;

    public PainonvartijaYhdistys(String nimi, double alinPainoindeksi) {
        this.alinPainoindeksi = alinPainoindeksi;
        this.nimi = nimi;
        this.jasenet = new ArrayList<>();
    }

    //..
}
```

Tehdään metodi jolla henkilö liitetään yhdistykseen. Metodi ei liitä yhdistykseen kuin tarpeeksi suuren painoindeksin omaavat henkilöt. Tehdään myös toString jossa tulostetaan jäsenten nimet:


```java
public class PainonvartijaYhdistys {
    // ...

    public boolean hyvaksytaanJaseneksi(Henkilo henkilo) {
        if (henkilo.painoindeksi() < this.alinPainoindeksi) {
            return false;
        }

        return true;
    }

    public void lisaaJaseneksi(Henkilo henkilo) {
        // sama kuin hyvaksytaanJaseneksi(henkilo) == false
        if (!hyvaksytaanJaseneksi(henkilo)) {
            // void-tyyppisistä metodeista voi palata
            // return-kutsulla
            return;
        }

        this.jasenet.add(henkilo);
    }

    public String toString() {
        String jasenetMerkkijonona = "";

        for (Henkilo jasen: this.jasenet) {
            jasenetMerkkijonona = jasenetMerkkijonona + "  " + jasen.getNimi() + "\n";
        }

        return "Painonvartijayhdistys " + this.nimi + " jäsenet: \n" + jasenetMerkkijonona;
    }
}
```

Metodi `lisaaJaseneksi` käyttää aiemmin tehtyä metodia `hyvaksytaanJaseneksi`.

Kokeillaan laajentunutta painonvartijayhdistystä:


```java
PainonvartijaYhdistys painonVartija = new PainonvartijaYhdistys("Kumpulan paino", 25);

Henkilo matti = new Henkilo("Matti");
matti.setPaino(86);
matti.setPituus(180);
painonVartija.lisaaJaseneksi(matti);

Henkilo juhana = new Henkilo("Juhana");
juhana.setPaino(64);
juhana.setPituus(172);
painonVartija.lisaaJaseneksi(juhana);

Henkilo harri = new Henkilo("Harri");
harri.setPaino(104);
harri.setPituus(182);
painonVartija.lisaaJaseneksi(harri);

Henkilo petri = new Henkilo("Petri");
petri.setPaino(112);
petri.setPituus(173);
painonVartija.lisaaJaseneksi(petri);

System.out.println(painonVartija);
```

Tulostuksesta huomaamme, että Juhanaa ei kelpuutettu jäseneksi:


<sample-output>
Painonvartijayhdistys Kumpulan paino jäsenet:
  Matti
  Harri
  Petri
</sample-output>


<youtube id="Rut2pt5ztN0"></youtube>


Tehdään vielä lopuksi painovartijayhdistykselle metodi, jolla saadaan tietoon yhdistyksen suurimman painoindeksin omaava henkilö.


```java
public class PainonvartijaYhdistys {
    // ...

    public Henkilo suurinPainoindeksinen() {
        // jos jasenlista on tyhjä, palautetaan null-viite
        if (this.jasenet.isEmpty()) {
            return null;
        }

        Henkilo painavinTahanAsti = this.jasenet.get(0);

        int indeksi = 1;
        while (indeksi < this.jasenet.size()) {
            Henkilo henkilo = this.jasenet.get(indeksi);
            if (henkilo.painoindeksi() > painavinTahanAsti.painoindeksi()) {
                painavinTahanAsti = henkilo;
            }

            indeksi = indeksi + 1;
        }

        return painavinTahanAsti;
    }
}
```

Logiikaltaan edeltävä metodi toimii samaan tapaan kuin suurimman luvun etsiminen taulukosta. Käytössä on apumuuttuja `painavinTahanAsti` joka laitetaan aluksi viittaamaan listan ensimmäiseen henkilöön. Sen jälkeen käydään lista läpi ja katsotaan tuleeko vastaan suuremman painoindeksin omaavia henkilöitä, jos tulee, niin otetaan viite talteen muuttujaan `painavinTahanAsti`. Lopuksi palautetaan muuttujan arvo eli viite henkilöolioon.

Tehdään lisäys edelliseen pääohjelmaan. Pääohjelma ottaa vastaan metodin palauttaman viitteen muuttujaan `painavin`.


```java
PainonvartijaYhdistys painonVartija = new PainonvartijaYhdistys("Kumpulan paino", 25);

// .. lisätään listalle ..

Henkilo painavin = painonVartija.suurinPainoindeksinen();
System.out.print("suurin painoindeksi on jäsenellä " + painavin.getNimi());
```

<sample-output>

suurin painoindeksi on jäsenellä Petri

</sample-output>


<programming-exercise name='Lahjapakkaamo (2 osaa)' tmcname='osa05-Osa05_17.Lahjapakkaamo'>

Tässä tehtävässä harjoitellaan lahjojen pakkaamista. Tehdään luokat `Lahja` ja `Pakkaus`. Lahjalla on nimi ja paino, ja Pakkaus sisältää lahjoja.


<h2>Lahja-luokka</h2>

Tee luokka `Lahja`, josta muodostetut oliot kuvaavat erilaisia lahjoja. Tallennettavat tiedot ovat tavaran nimi ja paino (kg).

Lisää luokkaan seuraavat metodit:

- Konstruktori, jolle annetaan parametrina lahjan nimi ja paino

- Metodi `public String getNimi()`, joka palauttaa lahjan nimen

- Metodi `public int getPaino()`, joka palauttaa lahjan painon

- Metodi `public String toString()`, joka palauttaa merkkijonon muotoa "nimi (paino kg)"


Seuraavassa on luokan käyttöesimerkki:


```java
public class Main {
    public static void main(String[] args) {
        Lahja kirja = new Lahja("Aapiskukko", 2);

        System.out.println("Lahjan nimi: " + kirja.getNimi());
        System.out.println("Lahjan paino: " + kirja.getPaino());

        System.out.println("Lahja: " + kirja);
    }
}
```


Ohjelman tulostuksen tulisi olla seuraava:


<sample-output>

Lahjan nimi: Aapiskukko
Lahjan paino: 2
Lahja: Aapiskukko (2 kg)

</sample-output>


<h2>Pakkaus-luokka</h2>

Tee luokka `Pakkaus`, johon voi lisätä lahjoja, ja joka pitää kirjaa pakkauksessa olevien lahjojen yhteispainosta. Luokassa tulee olla:

- Parametriton konstruktori

- Metodi `public void lisaaLahja(Lahja lahja)`, joka lisää parametrina annettavan lahjan pakkaukseen. Metodi ei palauta mitään arvoa.

- Metodi `public int yhteispaino()`, joka palauttaa pakkauksessa olevien lahjojen yhteispainon.


Tavarat kannattaa tallentaa `ArrayList`-olioon:


```java
ArrayList<Lahja> lahjat = new ArrayList<>();
```

Seuraavassa on luokan käyttöesimerkki:


```java
public class Main {
    public static void main(String[] args) {
        Lahja kirja = new Lahja("Aapiskukko", 2);

        Pakkaus paketti = new Pakkaus();
        paketti.lisaaLahja(kirja);
        System.out.println(paketti.yhteispaino());
    }
}
```

Ohjelman tulostuksen tulisi olla seuraava:

<sample-output>

  2

</sample-output>

</programming-exercise>
