---
path: '/osa-13/4-kaynnistysparametreja-sovellukselle'
title: 'Käynnistysparametreja sovellukselle'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat antaa parametreja graafiselle käyttöliittymälle.

</text-box>


Esimerkkien JavaFx-sovellukset on tähän mennessä käynnistetty `Application`-luokan perivän luokan sisällä olevasta pääohjelmametodista. Tarkastellaan tässä lyhyesti sovellusten käynnistämistä `Application`-luokan ulkopuolelta. Oletetaan, että käytössämme on seuraava yksinkertainen JavaFx-sovellus.


```java
package sovellus;

import javafx.application.Application;
import javafx.stage.Stage;

public class JavaFxSovellus extends Application {

    @Override
    public void start(Stage ikkuna) {
        ikkuna.setTitle("Hei Maailma!");
        ikkuna.show();
    }
}
```

Sovelluksen voi käynnistää luokan ulkopuolelta toisesta luokasta `Application`-luokan tarjoaman `launch`-metodin avulla. Alla olevassa esimerkissä erillinen luokka `Main` käynnistää sovelluksen.


```java
package sovellus;

import javafx.application.Application;

public class Main {

  public static void main(String[] args) {
      Application.launch(JavaFxSovellus.class);
  }
}
```

Kun yllä olevan luokan `main`-metodi suoritetaan, käynnistyy `JavaFxSovellus`-luokan määrittelemä käyttöliittymä.

Sovellukselle voi antaa myös käynnistyksenaikaisia parametreja osana `launch`-metodia. Metodi `launch` saa käynnistettävän luokan lisäksi rajattoman määrän merkkijonoja, joita voi käyttää osana käynnistystä. Nämä merkkijonot on saatavilla sovelluksen käynnistyksen yhteydessä `getParameters`-metodikutsulla.

Metodi `getParameters()` palauttaa [Parameters](https://docs.oracle.com/javase/8/javafx/api/javafx/application/Application.Parameters.html)-tyyppisen olion, jonka metodilla `getNamed` saa käyttöönsä avain-arvo -pareja sisältävän hajautustaulun. Avain-arvo -parit annetaan launch-metodille muodossa `--avain=arvo`. Alla olevassa esimerkissä otsikko muodostetaan kahdesta parametrista: `organisaatio` ja `kurssi`.


```java
package sovellus;

import javafx.application.Application;
import javafx.application.Application.Parameters;
import javafx.stage.Stage;

public class JavaFxSovellus extends Application {

    @Override
    public void start(Stage ikkuna) {
        Parameters params = getParameters();
        String organisaatio = params.getNamed().get("organisaatio");
        String kurssi = params.getNamed().get("kurssi");

        ikkuna.setTitle(organisaatio + ": " + kurssi);
        ikkuna.show();
    }
}
```


Nyt sovelluksen käynnistäminen seuraavalla luokalla asettaa sovelluksen otsikoksi "Olipa kerran: Otsikko".


```java
package sovellus;

import javafx.application.Application;

public class Main {

    public static void main(String[] args) {
        Application.launch(JavaFxSovellus.class,
            "--organisaatio=Olipa kerran",
            "--kurssi=Otsikko");
    }
}
```

Parametreja käyttämällä ohjelmalle voisi kertoa esimerkiksi henkilöiden tallentamiseen ja lataamiseen käytetyn tiedoston nimen tai vaikkapa verkko-osoitteen.

<programming-exercise name='Käyttäjän otsikko' tmcname='osa13-Osa13_08.KayttajanOtsikko'>

Kirjoita ohjelma, joka kysyy tekstikäyttöliittymässä käyttäjältä sovelluksen otsikkoa. Kun käyttäjä syöttää otsikon tekstikäyttöliittymään ja painaa enter, käyttäjälle näytetään graafinen käyttöliittymä, jonka otsikkona on käyttäjän syöttämä otsikko.

Huomaa, että tässä tehtävässä ei ole automaattisia testejä. Palauta sovellus kun se toimii tehtävänannossa kuvatulla tavalla.

</programming-exercise>
