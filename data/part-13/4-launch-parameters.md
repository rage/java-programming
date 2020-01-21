---
path: '/part-13/4-launch-parameters'
title: "Application's launch parameters"
hidden: true
---

<!-- <text-box variant='learningObjectives' name='Oppimistavoitteet'> -->
<text-box variant='learningObjectives' name='Learning Objectives'>

<!-- - Osaat antaa parametreja graafiselle käyttöliittymälle. -->
- You know how to pass parameters to a graphical user interface.

</text-box>

<!--
Esimerkkien JavaFx-sovellukset on tähän mennessä käynnistetty `Application`-luokan perivän luokan sisällä olevasta pääohjelmametodista. Tarkastellaan tässä lyhyesti sovellusten käynnistämistä `Application`-luokan ulkopuolelta. Oletetaan, että käytössämme on seuraava yksinkertainen JavaFx-sovellus. -->

The JavaFx applications in the examples have so far been launched by the main method of the class that inherits the Application class. Let's take a brief look at launching applications from outside of the `Application` class. Let's assume that we have the following simple JavaFx for our use.


<!--
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
``` -->

```java
package application;

import javafx.application.Application;
import javafx.stage.Stage;

public class JavaFxApplication extends Application {

    @Override
    public void start(Stage window) {
        window.setTitle("Hello World!");
        window.show();
    }
}
```
<!--
Sovelluksen voi käynnistää luokan ulkopuolelta toisesta luokasta `Application`-luokan tarjoaman `launch`-metodin avulla. Alla olevassa esimerkissä erillinen luokka `Main` käynnistää sovelluksen. -->

The application can be launched from outside the class by using the `launch` method provided by the `Application` class. A separate class `Main` launches the application in the example below.


<!-- ```java
package sovellus;

import javafx.application.Application;

public class Main {

  public static void main(String[] args) {
      Application.launch(JavaFxSovellus.class);
  }
}
``` -->
```java
package application;

import javafx.application.Application;

public class Main {

  public static void main(String[] args) {
      Application.launch(JavaFxApplication.class);
  }
}
```
<!--
Kun yllä olevan luokan `main`-metodi suoritetaan, käynnistyy `JavaFxSovellus`-luokan määrittelemä käyttöliittymä.

Sovellukselle voi antaa myös käynnistyksenaikaisia parametreja osana `launch`-metodia. Metodi `launch` saa käynnistettävän luokan lisäksi rajattoman määrän merkkijonoja, joita voi käyttää osana käynnistystä. Nämä merkkijonot on saatavilla sovelluksen käynnistyksen yhteydessä `getParameters`-metodikutsulla.

Metodi `getParameters()` palauttaa [Parameters](https://docs.oracle.com/javase/8/javafx/api/javafx/application/Application.Parameters.html)-tyyppisen olion, jonka metodilla `getNamed` saa käyttöönsä avain-arvo -pareja sisältävän hajautustaulun. Avain-arvo -parit annetaan launch-metodille muodossa `--avain=arvo`. Alla olevassa esimerkissä otsikko muodostetaan kahdesta parametrista: `organisaatio` ja `kurssi`. -->

When the `main` method of the class above is executed, the user interface defined by the class `JavaFxApplication` is launched.

The application can also be provided run-time parameters as part of the `launch` method. In addition to the lauched class, the `launch` method can be provided an unlimited number of strings that can be used as part of the launch. These strings are available during the application's launch via the `getParameters` method call.

The `getParameters ()` method returns a [Parameters] (https://docs.oracle.com/javase/8/javafx/api/javafx/application/Application.Parameters.html) type object whose method `getNamed` can access a hash table containing key-value pairs. The key-value pairs are given to the launch method in the form `--key = value`. In the example below, the title is made up of two parameters: `organization` and `course`.

<!-- ```java
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
``` -->
```java
package application;

import javafx.application.Application;
import javafx.application.Application.Parameters;
import javafx.stage.Stage;

public class JavaFxApplicationextends Application {

    @Override
    public void start(Stage window) {
        Parameters params = getParameters();
        String organization = params.getNamed().get("organization");
        String course = params.getNamed().get("course");

        window.setTitle(organization + ": " + course);
        window.show();
    }
}
```

<!--
Nyt sovelluksen käynnistäminen seuraavalla luokalla asettaa sovelluksen otsikoksi "Olipa kerran: Otsikko". -->

Launching an application now with the following class sets the application's title to "Once upon a time: Title".

<!--
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
``` -->

```java
package application;

import javafx.application.Application;

public class Main {

    public static void main(String[] args) {
        Application.launch(JavaFxSovellus.class,
            "--organization=Once upon a time",
            "--course=Title");
    }
}
```
<!--
Parametreja käyttämällä ohjelmalle voisi kertoa esimerkiksi henkilöiden tallentamiseen ja lataamiseen käytetyn tiedoston nimen tai vaikkapa verkko-osoitteen. -->

 Parameters could be used to tell the program, for instance, the name of the file used to store and load persons, or even a web address.

<!-- <programming-exercise name='Käyttäjän otsikko' tmcname='osa13-Osa13_08.KayttajanOtsikko'> -->
<programming-exercise name="User's title" tmcname='part13-Part13_08.UserTitle'>

Write a program that asks for a title in a command line interface. When the user types the title and presses enter, the user is shown a graphical user interface with the given title.

Notice, this exercise does not have automatic tests. Return the program once it works as described in the exercise.

<!-- Kirjoita ohjelma, joka kysyy tekstikäyttöliittymässä käyttäjältä sovelluksen otsikkoa. Kun käyttäjä syöttää otsikon tekstikäyttöliittymään ja painaa enter, käyttäjälle näytetään graafinen käyttöliittymä, jonka otsikkona on käyttäjän syöttämä otsikko.

Huomaa, että tässä tehtävässä ei ole automaattisia testejä. Palauta sovellus kun se toimii tehtävänannossa kuvatulla tavalla. -->

</programming-exercise>
