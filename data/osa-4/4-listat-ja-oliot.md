---
path: '/osa-4/4-listat-ja-oliot'
title: 'Listat ja oliot'
hidden: true
---

Edellisessä osassa tutuksi tulleet listat ovat olioita, joihin pystyy lisäämään arvoja. Listalle lisättyjä arvoja voidaan tarkastella indeksin perusteella, ja listalla olevia arvoja voidaan etsiä ja poistaa. Kaikkia listan tarjoamia toimintoja käytetään listan tarjoamien metodien kautta.

Listalle lisättävien muuttujien tyyppi määrätään listan luomisen yhteydessä annettavan tyyppiparametrin avulla. Esimerkiksi `ArrayList<String>` sisältää merkkijonoja, `ArrayList<Integer>` sisältää kokonaislukuja, ja `ArrayList<Double>` sisältää liukulukuja.

Alla olevassa esimerkissä lisätään ensin merkkijonoja listalle, jonka jälkeen listalla olevat merkkijonot tulostetaan yksitellen.


```java
ArrayList<String> nimet = new ArrayList<>();

// merkkijono voidaan lisätä ensin muuttujaan
String nimi = "Betty Jennings";
// ja sitten lisätä se listalle
nimet.add(nimi);

// merkkijono voidaan myös lisätä suoraan listalle:
nimet.add("Betty Snyder");
nimet.add("Frances Spence");
nimet.add("Kay McNulty");
nimet.add("Marlyn Wescoff");
nimet.add("Ruth Lichterman");

// listan alkioiden läpikäynti onnistuu useamman erilaisen
// toistolauseen avulla

// 1. while-toistolause
int indeksi = 0;
while (indeksi < nimet.size()) {
    System.out.println(nimet.get(indeksi));
    indeksi = indeksi + 1;
}

System.out.println();
// 2. for-each toistolause (ei indeksiä)
for (String nimi: nimet) {
    System.out.println(nimi);
}
```

<sample-output>

Betty Jennings
Betty Snyder
Frances Spence
Kay McNulty
Marlyn Wescoff
Ruth Lichterman

Betty Jennings
Betty Snyder
Frances Spence
Kay McNulty
Marlyn Wescoff
Ruth Lichterman

</sample-output>

<quiznator id="5c4aaa92244fe21455cb56ac"></quiznator>


## Olioita listalla

Edellä lisäsimme listalle merkkijonoja. Merkkijonot ovat olioita, ja ei liene yllätys että listalla voi olla muunkinlaisia olioita. Tarkastellaan seuraavaksi listan ja olioiden yhteistoimintaa tarkemmin.

Oletetaan, että käytössämme on alla oleva henkilöä kuvaava luokka.

```java
public class Henkilo {

    private String nimi;
    private int ika;
    private int paino;
    private int pituus;

    public Henkilo(String nimi) {
        this.nimi = nimi;
        this.ika = 0;
        this.paino = 0;
        this.pituus = 0;
    }

    // muita konstruktoreja ja metodeja

    public String getNimi() {
        return this.nimi;
    }

    public int getIka() {
        return this.ika;
    }

    public void vanhene() {
        this.ika = this.ika + 1;
    }

    public void setPituus(int uusiPituus) {
        this.pituus = uusiPituus;
    }

    public void setPaino(int uusiPaino) {
        this.paino = uusiPaino;
    }

    public double painoindeksi() {
        double pituusPerSata = this.pituus / 100.0;
        return this.paino / (pituusPerSata * pituusPerSata);
    }

    @Override
    public String toString() {
        return this.nimi + ", ikä " + this.ika + " vuotta";
    }
}
```

Olioiden käsittely listalla ei oikeastaan poikkea aiemmin näkemästämme listan käytöstä millään tavalla. Oleellista on vain listalle lisättävien olioiden tyypin määrittely listan luomisen yhteydessä.

Alla olevassa esimerkissä luodaan ensin Henkilo-tyyppisille olioille tarkoitettu lista, jonka jälkeen listalle lisätään henkilöolioita. Lopulta henkilöoliot tulostetaan yksitellen.

```java
ArrayList<Henkilo> henkilot = new ArrayList<>();

// henkilöolio voidaan ensin luoda
Henkilo juhana = new Henkilo("Juhana");
// ja sitten lisätä se listalle
henkilot.add(juhana);

// henkilöolio voidaan myös lisätä listalle "samassa lauseessa"
henkilot.add(new Henkilo("Matti"));
henkilot.add(new Henkilo("Martin"));

for (Henkilo henkilo: henkilot) {
    System.out.println(henkilo);
}
```

<sample-output>

Juhana, ikä 0 vuotta
Matti, ikä 0 vuotta
Martin, ikä 0 vuotta

</sample-output>

Aiemmin käyttämämme rakenne syötteiden lukemiseen on yhä varsin käytännöllinen.

```java
Scanner lukija = new Scanner(System.in);
ArrayList<Henkilo> henkilot = new ArrayList<>();

while (true) {
    System.out.print("Kirjoita nimi, tyhjä lopettaa: ");
    String nimi = lukija.nextLine();
    if (nimi.isEmpty()) {
        break;
    }

    henkilot.add(new Henkilo(nimi));
}

System.out.println();
System.out.println("Henkilöitä yhteensä: " + henkilot.size());
System.out.println("Henkilöt: ");

for (Henkilo henkilo: henkilot) {
    System.out.println(henkilo);
}
```

Listalla olevia olioita voidaan myös tarkastella listan läpikäynnin yhteydessä. Alla olevassa esimerkissä tulostetaan vain täysi-ikäiset henkilöt.

```java
// ..

for (Henkilo henkilo: henkilot) {
    if (henkilo.getIka() >= 18) {
        System.out.println(henkilo);
    }
}
```

Ikärajan voi kysyä myös käyttäjältä.

```java
// ..
System.out.print("Mikä ikäraja? ");
int ikaraja = Integer.valueOf(lukija.nextLine());

for (Henkilo henkilo: henkilot) {
    if (henkilo.getIka() >= ikaraja) {
        System.out.println(henkilo);
    }
}
```

<programming-exercise name='Televisio-ohjelmat' tmcname='osa04-Osa04_27.TelevisioOhjelmat'>

Tehtäväpohjassa on valmiina televisio-ohjelmaa kuvaava luokka TelevisioOhjelma. Luokalla on oliomuuttujat nimi ja pituus, konstruktori, ja muutamia metodeja.

Toteuta ohjelma, joka ensin lukee käyttäjältä televisio-ohjelmia. Kun käyttäjä syöttää tyhjän ohjelman nimen, televisio-ohjelmien lukeminen lopetetaan.

Tämän jälkeen käyttäjältä kysytään ohjelman maksimipituutta. Kun käyttäjä on syöttänyt ohjelman maksimipituuden, tulostetaan kaikki ne ohjelmat, joiden pituus on pienempi tai yhtäsuuri kuin haluttu maksimipituus.

<sample-output>

Nimi: **Salatut elämät**
Pituus: **30**
Nimi: **Miehen puolikkaat**
Pituus: **30**
Nimi: **Remppa vai muutto**
Pituus: **60**
Nimi: **House**
Pituus: **60**

Ohjelman maksimipituus? **30**
Salatut elämät, 30 minuuttia
Miehen puolikkaat, 30 minuuttia

</sample-output>

</programming-exercise>


<programming-exercise name='Kirjat (2 osaa)' tmcname='osa04-Osa04_28.Kirjat'>

Toteuta ohjelma, joka ensin lukee kirjojen tietoja käyttäjältä. Jokaisesta kirjasta tulee lukea kirjan nimi, sivujen lukumäärä sekä kirjoitusvuosi. Kirjojen lukeminen lopetetaan kun käyttäjä syöttää tyhjän kirjan nimen.

Tämän jälkeen käyttäjältä kysytään mitä tulostetaan. Jos käyttäjä syöttää merkkijonon "kaikki", tulostetaan kirjojen nimet, sivujen lukumäärät sekä kirjoitusvuodet. Jos taas käyttäjä syöttää merkkijonon "nimi", tulostetaan vain kirjojen nimet.

Ohjelmaa varten kannattanee toteuttaa Kirjaa kuvaava luokka. Tehtävä on kokonaisuudessaan kahden tehtäväpisteen arvoinen.

<sample-output>

Nimi: **Minä en sitten muutu**
Sivuja: **201**
Kirjoitusvuosi: **2010**
Nimi: **Nalle Puh ja elämisen taito**
Sivuja: **100**
Kirjoitusvuosi: **2005**
Nimi: **Beautiful Code**
Sivuja: **593**
Kirjoitusvuosi: **2007**
Nimi: **KonMari**
Sivuja: **222**
Kirjoitusvuosi: **2011**

Mitä tulostetaan? **kaikki**
Minä en sitten muutu, 201 sivua, 2010
Nalle Puh ja elämisen taito, 100 sivua, 2005
Beautiful Code, 593 sivua, 2007
KonMari, 222 sivua, 2011

</sample-output>


<sample-output>

Nimi: **Minä en sitten muutu**
Sivuja: **201**
Kirjoitusvuosi: **2010**
Nimi: **Nalle Puh ja elämisen taito**
Sivuja: **100**
Kirjoitusvuosi: **2005**
Nimi: **Beautiful Code**
Sivuja: **593**
Kirjoitusvuosi: **2007**
Nimi: **KonMari**
Sivuja: **222**
Kirjoitusvuosi: **2011**

Mitä tulostetaan? **nimi**
Minä en sitten muutu
Nalle Puh ja elämisen taito
Beautiful Code
KonMari

</sample-output>

</programming-exercise>
