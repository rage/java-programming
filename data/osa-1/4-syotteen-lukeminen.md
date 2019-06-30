---
path: '/osa-1/4-syotteen-lukeminen'
title: 'Syötteen lukeminen'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

* TODO

</text-box>

TODO: mitä syötteellä tarkoitetaan

TODO: syöte luetaan aina merkkijonona

Syötteen lukemiseen käytetään Javan valmista `Scanner`-apuvälinettä. Apuväline tuodaan käyttöön lisäämällä komento `import java.util.Scanner;` ennen pääohjelmarungon aloitusta (`public class` ...), ja se luodaan komennolla `Scanner lukija = new Scanner(System.in);`. Tarkemmin ottaen tässä luodaan _lukija_-niminen muuttuja, jota voidaan jatkossa käyttää käyttäjän kirjoittaman tekstin lukemiseen.

```java
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        // ohjelmakoodi
    }
}
```

Älä hätäile vaikka pääohjelmarunko saattaa näyttää vaikeaselkoiselta! Jatkamme yhä ohjelmointia kommentilla _ohjelmakoodi_ merkittyyn kohtaan.

Merkkijonon lukeminen käyttäjältä onnistuu `lukija`-muuttujaan liittyvällä komennolla `nextLine()`. Mikäli käyttäjän syöttämä teksti halutaan tallentaa, tulee sitä varten esitellä merkkijonomuuttuja. Alla on esitelty ohjelma, joka kysyy käyttäjältä syötettä, lukee käyttäjän syöttämän merkkijonon, ja lopulta tulostaa käyttäjän syöttämän merkkijonon.

```java
// Tuodaan lukemiseen käytettävä Scanner-apuväline käyttöön
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        // Luodaan lukemiseen käytettävä apuväline, jonka nimeksi tulee lukija
        Scanner lukija = new Scanner(System.in);

        // Tulostetaan käyttäjälle viesti "Syötä viesti: "
        System.out.println("Syötä viesti: ");

        // Luetaan käyttäjän syöttämä merkkijono ja asetetaan se muuttujan viesti arvoksi
        String viesti = lukija.nextLine();

        // Tulostetaan muuttujan viesti sisältö
        System.out.println(viesti);
    }
}
```

Jatkossa tulostusesimerkkeihin merkitään käyttäjän syöttämä syöte punaisella värillä. Mikäli käyttäjä syöttäisi ohjelmaan tekstin "Hei maailma", olisi ohjelman suoritus seuraavanlainen.

<sample-output>

Syötä viesti:
**Hei maailma**
Hei maailma

</sample-output>

Alla sama esimerkki, mutta siten, että käyttäjän syöttämä merkkijono tulostetaan tekstin "Viestisi oli " jälkeen.

```java
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        System.out.println("Syötä viesti: ");

        String viesti = lukija.nextLine();

        System.out.println("Viestisi oli " + viesti);
    }
}
```

<sample-output>

Syötä viesti:
**selkeä**
Viestisi oli selkeä

</sample-output>

<youtube id='7lswbb_R7uM'></youtube>

Huom! Katso yllä oleva video ennen seuraavan tehtävän tekemistä. Kiinnitä erityisesti huomiota siihen, miten syöte annetaan ohjelman käynnissä ollessa TMC:n alalaidassa olevaan Output-ikkunaan.

<programming-exercise name='Viesti' tmcname='osa01-Osa01_07.Viesti'>

Kirjoita ohjelma, joka pyytää käyttäjää kirjoittamaan merkkijonon. Kun käyttäjä on syöttänyt merkkijonon (eli kirjoittanut tekstin sekä painanut enter-näppäintä), ohjelman tulee tulostaa käyttäjän syöttämä merkkijono.

Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.

```java
import java.util.Scanner;

public class Viesti {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        System.out.println("Kirjoita merkkijono!");
        // toteuta ohjelma tänne
    }
}
```

Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Heippa".

<sample-output>

Kirjoita merkkijono!
**Heippa**
Heippa

</sample-output>

Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Olipa kerran...".

<sample-output>

Kirjoita merkkijono!
**Olipa kerran...**
Olipa kerran...

</sample-output>

</programming-exercise>

<programming-exercise name='Viesti kolmesti' tmcname='osa01-Osa01_08.ViestiKolmesti'>

Kirjoita ohjelma, joka pyytää käyttäjää kirjoittamaan merkkijonon. Kun käyttäjä on syöttänyt merkkijonon (eli kirjoittanut tekstin sekä painanut enter-näppäintä), ohjelman tulee tulostaa käyttäjän syöttämä merkkijono kolme kertaa (voit käyttää System.out.println-komentoa useampaan kertaan).

Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.

```java
import java.util.Scanner;

public class ViestiKolmesti {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        System.out.println("Kirjoita merkkijono!");
        // toteuta ohjelma tänne
    }
}
```

Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Heippa".

<sample-output>

Kirjoita merkkijono!
**Heippa**
Heippa
Heippa
Heippa

</sample-output>

Tulostusesimerkki kun käyttäjä syöttää merkkijonon "Olipa kerran...".

<sample-output>

Kirjoita merkkijono!
**Olipa kerran...**
Olipa kerran...
Olipa kerran...
Olipa kerran...

</sample-output>

</programming-exercise>

<programming-exercise name='Nimi' tmcname='osa01-Osa01_09.Nimi'>

Kirjoita ohjelma, joka kysyy käyttäjältä nimeä käyttäen tekstiä "Mikä on nimesi?". Kun käyttäjä syöttää nimen, ohjelman tulee tulostaa käyttäjälle merkkijonon "Hei ", jota seuraa käyttäjän nimi.

Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.

```java
import java.util.Scanner;

public class Nimi {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        // toteuta ohjelma tänne
    }
}
```

Tulostusesimerkki kun käyttäjä syöttää nimeksi Ada.

<sample-output>

Mikä on nimesi?
**Ada**
Hei Ada

</sample-output>

Tulostusesimerkki kun käyttäjä syöttää nimeksi Lilja.

<sample-output>

Mikä on nimesi?
**Lilja**
Hei Lilja

</sample-output>

TODO: annetaanko tässä esimerkki `+`-operaation käytöstä?

</programming-exercise>


Ohjelma voi kysyä käyttäjältä myös montaa merkkijonoa. Tämä toimii kysymällä jokaista haluttua merkkijonoa erikseen `nextLine()`-komennolla.

```java
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        System.out.println("Syötä kolme riviä, tulostan ne sen jälkeen: ");

        String eka = lukija.nextLine();
        String toka = lukija.nextLine();
        String kolmas = lukija.nextLine();

        System.out.println(eka);
        System.out.println(toka);
        System.out.println(kolmas);
    }
}
```

Yllä olevan ohjelman toimintaa kuvaava esimerkki:

<sample-output>

Syötä kolme riviä, tulostan ne sen jälkeen:
**yksi**
**kaksi**
**kolme**
yksi
kaksi
kolme

</sample-output>

Muuttujat voisi halutessaan tulostaa myös käänteisessä järjestyksessä tai vaikkapa yhteen pötköön.

```java
import java.util.Scanner;

public class Ohjelma {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        System.out.println("Syötä kolme riviä, tulostan ne käänteisessä järjestyksessä: ");

        String eka = lukija.nextLine();
        String toka = lukija.nextLine();
        String kolmas = lukija.nextLine();

        System.out.println(kolmas);
        System.out.println(toka);
        System.out.println(eka);

        System.out.println(eka + toka + kolmas);
    }
}
```

<sample-output>

Syötä kolme riviä, tulostan ne sen jälkeen:
**yksi**
**kaksi**
**kolme**
kolme
kaksi
yksi
yksikaksikolme

</sample-output>

<programming-exercise name='Keskustelu' tmcname='osa01-Osa01_10.Keskustelu'>

Kirjoita ohjelma, joka toimii seuraavalla tavalla.

<sample-output>

Hyvää päivää! Mitä kuuluu?
**Kiitos hyvää!**
No mutta sepäs kiinnostavaa, kerro lisää!
**Noh, eipä tässä muuta.**
Kiitos kertomastasi!

</sample-output>

<sample-output>

Hyvää päivää! Mitä kuuluu?
**Mitäs tässä, ritari ässä!**
No mutta sepäs kiinnostavaa, kerro lisää!
**tulin juuri kaupasta.**
Kiitos kertomastasi!

</sample-output>

Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.

```java
import java.util.Scanner;

public class Keskustelu {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        // toteuta ohjelma tänne
    }
}
```

</programming-exercise>

<programming-exercise name='Tarina' tmcname='osa01-Osa01_11.Tarina'>

Kirjoita ohjelma, joka toimii seuraavalla tavalla.

<sample-output>

Kerron kohta tarinan, mutta tarvitsen siihen hieman tietoja.
Minkä niminen tarinassa esiintyvä hahmo on?
**Nauriskala**
Mikä hahmon ammatti on?
**kalastaja**
Tässä tarina:
Olipa kerran Nauriskala, joka oli ammatiltaan kalastaja.
Matkatessaan töihin, Nauriskala mietti arkeaan. Kun työnä
on kalastaja, tekemistä riittää välillä hyvin paljon ja
välillä ei lainkaan. Ehkäpä Nauriskala ei olekaan koko
elämäänsä kalastaja.

</sample-output>

Tehtäväpohjan mukana tulee runko, joka sisältää Scanner-apuvälineen luomisen.

```java
import java.util.Scanner;

public class Tarina {

    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        // toteuta ohjelma tänne
    }
}
```

Alla vielä toinen esimerkki.

<sample-output>

Kerron kohta tarinan, mutta tarvitsen siihen hieman tietoja.
Minkä niminen tarinassa esiintyvä hahmo on?
**Ada**
Mikä hahmon ammatti on?
**datatieteilijä**
Tässä tarina:
Olipa kerran Ada, joka oli ammatiltaan datatieteilijä.
Matkatessaan töihin, Ada mietti arkeaan. Kun työnä
on datatieteilijä, tekemistä riittää välillä hyvin paljon ja
välillä ei lainkaan. Ehkäpä Ada ei olekaan koko
elämäänsä datatieteilijä.

</sample-output>

</programming-exercise>

