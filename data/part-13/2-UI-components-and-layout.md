---
path: '/part-13/2-UI-components-and-layout'
title: 'UI components and their layout'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

<!-- - Tiedät mistä käyttöliittymät koostuvat ja osaat käynnistää graafisen käyttöliittymän.
- Tunnet muutamia käyttöliittymäkomponentteja ja osaat lisätä niitä käyttöliittymään.
- Tunnet menetelmiä käyttöliittymäkomponenttien asetteluun. -->
- You are aware of some interface components and know how to add them to a user interface.
- You're familiar with methods for configuring user interface components.

</text-box>


<!-- Graafisia käyttöliittymiä luodessa ohjelmoijat tyypillisesti hyödyntävät valmiiden käyttöliittymäkirjastojen tarjoamia osia sovellusten laatimiseen. Ohjelmoijan ei esimerkiksi kannata toteuttaa käyttöliittymän nappia tyhjästä (eli luoda luokkaa, joka piirtää napin sekä mahdollistaa siihen liittyvien toiminnallisuuksien käsittelyn), sillä vastaava komponentti löytyy yleensä käyttöliittymäkirjastoista valmiina. Tutustutaan seuraavaksi muutamaan käyttöliittymäkomponenttiin. -->
Programmers typically use ready-made libraries for implementing graphical user interfaces. As an example, it would not make much sense to implement a button from scratch (which would require creating a class that draws a button and handles all of its functions) since pre-built button components can usually be found in existing libraries. Let's take a look now at some UI components.


<!-- Tekstin näyttäminen tapahtuu [Label](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/control/Label.html)-luokan avulla. Label tarjoaa käyttöliittymäkomponentin, jolle voi asettaa tekstiä ja jonka sisältämää tekstiä voi muokata metodien avulla. Näytettävä teksti asetetaan joko konstruktorissa tai erillisellä `setText`-metodilla. -->
Text can be displayed using the [Label](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/control/Label.html) class. The Label class provides a UI component for which text can be set, and offers methods for modifying the text it contains. The displayed text is either set in the constructor, or by using the `setText` method.


```java
package application;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.FlowPane;
import javafx.stage.Stage;

public class JavaFxApplication extends Application {

    @Override
    public void start(Stage window) {
        Label textComponent = new Label("Text element");

        FlowPane componentGroup = new FlowPane();
        componentGroup.getChildren().add(textComponent);

        Scene view = new Scene(componentGroup);

        window.setScene(view);
        window.show();
    }

    public static void main(String[] args) {
        launch(JavaFxApplication.class);
    }
}
```

<!-- <img src="../img/material/gui-tekstielementti.png" alt="Ikkuna, jossa on textComponent. Ikkunassa näkyy teksti 'Text element'."/> -->
<img src="../img/material/gui-tekstielementti.png" alt="Window with a textComponent. The window shows the text 'Text element'."/>


<!-- Käyttöliittymään saa painikkeita [Button](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/control/Button.html)-luokan avulla. Napin lisääminen käyttöliittymään tapahtuu aivan kuten tekstikomponentin lisääminen. -->
Buttons can be added using the [Button](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/control/Button.html) class. Buttons are added the same way as labels.


```java
package application;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.FlowPane;
import javafx.stage.Stage;

public class JavaFxApplication extends Application {

    @Override
    public void start(Stage window) {
        Button buttonComponent = new Button("This is a button");

        FlowPane componentGroup = new FlowPane();
        componentGroup.getChildren().add(buttonComponent);

        Scene view = new Scene(componentGroup);

        window.setScene(view);
        window.show();
    }

    public static void main(String[] args) {
        launch(JavaFxApplication.class);
    }
}
```

<img src="../img/material/gui-nappi.png" alt="Ikkuna, jossa on nappi. Napissa on teksti 'This is a button'."/>


<!-- Sovellukseen voi lisätä myös useampia käyttöliittymäelementtejä samaan aikaan. Alla käytössä on sekä nappi että textComponent. -->
You also have the ability to add multiple components at once. In the example below, both a button and a textComponent have been added.


```java
package application;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.FlowPane;
import javafx.stage.Stage;

public class JavaFxApplication extends Application {

    @Override
    public void start(Stage window) {
        Button buttonComponent = new Button("This is a button");
        Label textComponent = new Label("Text element");

        FlowPane componentGroup = new FlowPane();
        componentGroup.getChildren().add(buttonComponent);
        componentGroup.getChildren().add(textComponent);

        Scene view = new Scene(componentGroup);

        window.setScene(view);
        window.show();
    }

    public static void main(String[] args) {
        launch(JavaFxSovellus.class);
    }
}
```


<!-- Sovellus näyttää seuraavalta. -->
The application looks like this:


<img src="../img/material/gui-nappi-ja-teksti.png" alt="Ikkuna, jossa on nappi sekä textComponent. Napissa on teksti 'This is a button' ja textComponent sisältää tekstin 'Text element'."/>


<!-- Osoitteessa [https://docs.oracle.com/javase/8/javafx/user-interface-tutorial/](https://docs.oracle.com/javase/8/javafx/user-interface-tutorial/) on listattuna joukko valmiita käyttöliittymäkomponentteja. Sivu tarjoaa myös esimerkkejä käyttöliittymäkomponenttien käytöstä. -->
You can find a list of the available UI components on [https://docs.oracle.com/javase/8/javafx/user-interface-tutorial/](https://docs.oracle.com/javase/8/javafx/user-interface-tutorial/). The site also provides examples on how to use them.

<!-- Käyttöliittymäkomponentteja on huomattava määrä. Niiden opiskeluun kannattaa käyttää verkossa olevia valmiita oppaita kuten edellä mainittua verkkosivua. Käyttöliittymäkomponentteja kannattaa kokeilla aluksi erikseen siten, että kokeilee yhden komponentin lisäämistä ja tarkastelee sen toimintaa. -->
There is a considerable amount of different UI components. Using online materials, such as the one linked above, is a good way to learn about them. When staring out, components should be tried out in isolation by adding a single component at a time and inspecting how it works.

<quiz id='c17f53ef-9476-50c5-a046-057d9ee3f4c8'></quiz>

<!-- Kun yksittäiset komponentit tulevat tutuksi, on niiden käyttäminen suoraviivaisempaa. Lähes kaikille komponenteille yhteistä on se, miten ne lisätään sovellukseen. Kun osaat lisätä yhden komponentin käyttöliittymään, osaat lisätä käytännössä lähes kaikki komponentit käyttöliittymään. -->
As you become more familiar with the various components, using them becomes more straightforward. What's common to almost all of the components is the way that they're added to an interface - once you know how to add one, you can add almost any component to your interface.

<!-- Ainoa merkittävä ero käyttöliittymäkomponenttien lisäämisessä liittyy siihen, että mihin kohtaan käyttöliittymää komponentin haluaa lisätä. Tarkastellaan käyttöliittymäkomponenttien asettelua kohta. -->
The biggest difference in adding components is where they're placed on the interface. You'll soon learn more about the lay these components out.


<programming-exercise name='Button and label' tmcname='part13-Part13_02.ButtonAndLabel'>

<!-- Luo edellistä esimerkkiä seuraten tehtäväpohjassa olevaan luokkaan käyttöliittymä, jossa on nappi (Button) ja textComponent (Label). Napin tulee olla tekstikomponentin vasemmalla puolella tai yläpuolella. -->
Following the example above create a user interface containing a Button and a Label to the class in the exercise template.
The Label must be either on top or on the left side of the Button.

</programming-exercise>


<programming-exercise name='Button and TextField' tmcname='part13-Part13_03.ButtonAndTextField'>

<!-- Luo tehtäväpohjassa olevaan luokkaan graafinen käyttöliittymä, jossa on nappi ja tekstikenttä. Tekstikentän saa toteutettua luokalla [TextField](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/control/TextField.html). Napin tulee olla tekstikentän vasemmalla puolella tai yläpuolella. -->
Create a graphical user interface to the class in the exercise template. The interface must contain a button and a text field. The text field can be implemented using the [TextField](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/control/TextField.html) class. The Button must be on the left or on the top of the text field.
<programming-exercise name='Button and text field' tmcname='part13-Part13_03.ButtonAndTextField'>

<!-- Luo tehtäväpohjassa olevaan luokkaan graafinen käyttöliittymä, jossa on nappi ja tekstikenttä. Tekstikentän saa toteutettua luokalla [TextField](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/control/TextField.html). Napin tulee olla tekstikentän vasemmalla puolella tai yläpuolella. -->

Create a graphical user interface in the class that is supplied with the exercise base. It should contain a button and a text field. You can implement the text field with the help of the [TextField](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/control/TextField.html) class. The button should be placed above or to the left of the text field.

</programming-exercise>


<!-- ## Käyttöliittymäkomponenttien asettelu -->
## UI Component Layout


<!-- Jokaisella käyttöliittymäkomponentilla on käyttöliittymässä sijainti. Komponentin sijainnin määrää käytössä oleva käyttöliittymäkomponenttien asetteluun käytettävä luokka.

Edellisissä esimerkeissä käytimme käyttöliittymäkomponenttien asetteluun [FlowPane](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/layout/FlowPane.html)-nimistä luokkaa. FlowPanen avulla käyttöliittymään lisättävät komponentit tulevat vierekkäin. Jos windown koko pienenee siten, että kaikki komponentit eivät mahdu vierekkäin, rivitetään komponentit automaattisesti. Alla olevassa kuvassa edellisen esimerkin tuottamaa sovellusta on kavennettu, jolloin komponentit ovat rivittyneet automaattisesti. -->
Each UI component has its place on the interface. The location of a component is determined by the class used to layout the components.

In previous examples, we used a class called [FlowPane] (https://docs.oracle.com/javase/8/javafx/api/javafx/scene/layout/FlowPane.html) to set up our front-end components. With FlowPane, components that you add to the interface are placed side-by-side. If the size of Window is reduced so that the components no longer fit next to eahch other, the components will be automatically aligned. In the image below, the application resulting from the previous example has been narrowed so that the components are automatically aligned.

<!-- <img src="../img/material/gui-nappi-ja-teksti-rivitetty.png" alt="Ikkuna, jossa on nappi sekä textComponent. Napissa on teksti 'This is a button' ja textComponent sisältää tekstin 'Text element'. Ikkunan leveys on niin pieni, että komponentit ovat omilla riveillään."/> -->
<img src="../img/material/gui-nappi-ja-teksti-rivitetty.png" alt="Window that has a button and a textComponent. The button has the text 'This is a button and the textComponent contains the text 'Text element'. The window's width is so narrow that the components are placed on seperate rows."/>


### BorderPane

<!-- [BorderPane](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/layout/BorderPane.html)-luokan avulla käyttöliittymäkomponentit voidaan asetella viiteen pääkohtaan käyttöliittymässä: ylälaita, oikea laita, alalaita, vasen laita ja keskikohta. Perinteiset sovellukset, kuten käyttämäsi web-selain hyödyntävät tätä asettelua. Ylälaidassa on valikko sekä osoiterivi, ja keskellä on sivun sisältö. -->
The [BorderPane] (https://docs.oracle.com/javase/8/javafx/api/javafx/scene/layout/BorderPane.html) class lets you lay out components in five different primary positions: top, right, bottom, left and center. Traditional applications such as the web browser you are using take advantage of this layout. There's a menu and address bar at the top, and in the middle is the content of the page.


<!-- ```java
package sovellus;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.BorderPane;
import javafx.stage.Stage;

public class JavaFxSovellus extends Application {

    @Override
    public void start(Stage window) {
        BorderPane asettelu = new BorderPane();
        asettelu.setTop(new Label("ylälaita"));
        asettelu.setRight(new Label("oikea laita"));
        asettelu.setBottom(new Label("alalaita"));
        asettelu.setLeft(new Label("vasen laita"));
        asettelu.setCenter(new Label("keskikohta"));

        Scene view = new Scene(asettelu);

        window.setScene(view);
        window.show();
    }

    public static void main(String[] args) {
        launch(JavaFxSovellus.class);
    }
}
``` -->
```java
package application;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.BorderPane;
import javafx.stage.Stage;

public class JavaFxSovellus extends Application {

    @Override
    public void start(Stage window) {
        BorderPane layout = new BorderPane();
        layout.setTop(new Label("top"));
        layout.setRight(new Label("right"));
        layout.setBottom(new Label("bottom"));
        layout.setLeft(new Label("left"));
        layout.setCenter(new Label("center"));

        Scene view = new Scene(layout);

        window.setScene(view);
        window.show();
    }

    public static void main(String[] args) {
        launch(JavaFxSovellus.class);
    }
}
```

<!-- <img src="../img/material/gui-borderpane.png" alt="BorderPane-asettelua käyttävä käyttöliittymä, jossa jokaiseen pääkohtaan on asetettu textComponent."/> -->
<img src="../img/material/gui-borderpane.png" alt="A user interface using the BorderPane layout, which contains a textComponent in each primary location"/>


<!-- <programming-exercise name='BorderPane' tmcname='osa13-Osa13_04.BorderPane'> -->
<programming-exercise name='BorderPane' tmcname='part13-Part13_04.BorderPane'>

<!-- Luo tehtäväpohjassa olevaan luokkaan graafinen käyttöliittymä, joka käyttää BorderPane-luokkaa käyttöliittymäkomponenttien asetteluun. Lisää ylälaitaan textComponent, jossa on teksti "NORTH", oikeaan laitaan textComponent, jossa on teksti "EAST", ja alalaitaan textComponent, jossa on teksti "SOUTH". -->

Create a graphical user interface in the class provided in the exercise template. It should use the BorderPane class for laying out the components of the user interface. Add a textComponent at the top edge of the window containing the text "NORTH", a textComponent along the right edge containing the text "EAST", and a textComponent at the bottom edge containing the text "SOUTH".

</programming-exercise>


### HBox

<!-- [HBox](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/layout/HBox.html)-luokan avulla käyttöliittymäkomponentit asetellaan riviin. -->
[HBox](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/layout/HBox.html)-class enables UI components to be laid out in a single horizontal row.


<!-- ```java
@Override
public void start(Stage window) {
    HBox asettelu = new HBox();

    asettelu.getChildren().add(new Label("eka"));
    asettelu.getChildren().add(new Label("toka"));
    asettelu.getChildren().add(new Label("kolmas"));

    Scene view = new Scene(asettelu);

    window.setScene(view);
    window.show();
}
``` -->
```java
@Override
public void start(Stage window) {
    HBox layout = new HBox();

    layout.getChildren().add(new Label("first"));
    layout.getChildren().add(new Label("second"));
    layout.getChildren().add(new Label("third"));

    Scene view = new Scene(layout);

    window.setScene(view);
    window.show();
}
```

<!-- <img src="../img/material/gui-hbox.png" alt="Tekstikomponentit on asetettu riviin HBox-asettelun avulla. Komponentit ovat kiinni toisissaan."/> -->
<img src="../img/material/gui-hbox.png" alt="Text components have been placed in a row using the HBox layout. The components are attached to one another."/>


<!-- Kuten edellisestä esimerkistä huomaa, HBox asettaa käyttöliittymäkomponentit oletuksena täysin toisiinsa kiinni. Metodin setSpacing avulla käyttöliittymäkomponenttien väliin saa tyhjää. -->
As evident from the previous example, HBox by default completely glues the UI components to each other. We can use the setSpacing method to add space in between the components.


<!-- ```java
@Override
public void start(Stage window) {
    HBox asettelu = new HBox();
    asettelu.setSpacing(10);

    asettelu.getChildren().add(new Label("eka"));
    asettelu.getChildren().add(new Label("toka"));
    asettelu.getChildren().add(new Label("kolmas"));

    Scene view = new Scene(asettelu);

    window.setScene(view);
    window.show();
}
``` -->
```java
@Override
public void start(Stage window) {
    HBox layout = new HBox();
    layout.setSpacing(10);

    layout.getChildren().add(new Label("first"));
    layout.getChildren().add(new Label("second"));
    layout.getChildren().add(new Label("third"));

    Scene view = new Scene(layout);

    window.setScene(view);
    window.show();
}
```

<!-- <img src="../img/material/gui-hbox-spacing.png" alt="Käyttöliittymäkomponentit on asetettu riviin HBox-asettelun avulla. Komponenttien välillä on 10 pikseliä eroa."/> -->
<img src="../img/material/gui-hbox-spacing.png" alt="The components have been placed in a row using the HBox layout. There is a gap of 10 pixels between the components."/>



<!-- Luokka [VBox](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/layout/VBox.html) toimii vastaavasti, mutta asettelee käyttöliittymäkomponentit allekkain. -->
The class [VBox](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/layout/VBox.html) works in a similar way, but instead sets the components in a vertical column.


<!-- <img src="../img/material/gui-vbox-spacing.png" alt="Käyttöliittymäkomponentit on asetettu allekkain VBox-asettelun avulla. Komponenttien välillä on 10 pikseliä eroa."/> -->
<img src="../img/material/gui-vbox-spacing.png" alt="The components have been placed in a column using the VBox layout. There is a gap of 10 pixels between the components.."/>


### GridPane

<!-- [GridPane](https://docs.oracle.com/javafx/2/api/javafx/scene/layout/GridPane.html)-luokan avulla käyttöliittymäkomponentit asetellaan ruudukkoon. Alla olevassa esimerkissä luodaan 3x3-kokoinen ruudukko, jossa jokaisessa ruudussa on nappi. -->
The [GridPane](https://docs.oracle.com/javafx/2/api/javafx/scene/layout/GridPane.html) class can be used to lay the UI components in a grid. In the example below, we create a 3x3 row in which each cell contains a button.


<!-- ```java
@Override
public void start(Stage window) {
    GridPane asettelu = new GridPane();

    for (int x = 1; x <= 3; x++) {
        for (int y = 1; y <= 3; y++) {
            asettelu.add(new Button("" + x + ", " + y), x, y);
        }
    }

    Scene view = new Scene(asettelu);

    window.setScene(view);
    window.show();
}
``` -->
```java
@Override
public void start(Stage window) {
    GridPane layout = new GridPane();

    for (int x = 1; x <= 3; x++) {
        for (int y = 1; y <= 3; y++) {
            layout.add(new Button("" + x + ", " + y), x, y);
        }
    }

    Scene view = new Scene(layout);

    window.setScene(view);
    window.show();
}
```
<!--
<img src="../img/material/gui-gridpane-3x3.png" alt="3 kertaa 3 ruudukkoon asetetut 9 nappia."/> -->

<img src="../img/material/gui-gridpane-3x3.png" alt="3 times 3 grid containing 9 buttons."/>


<!-- ### Useampi asettelija samassa -->
### Multiple Layouts ons a Single Interface

<!-- Käyttöliittymäkomponenttien asettelijoita voi myös yhdistellä. Tyypillinen ratkaisu on BorderPane-asettelun käyttäminen pohjalla, jonka sisälle asetetaan muita asetteluja. Alla olevassa esimerkissä BorderPanen ylälaidassa on samalle riville asetteluun käytetty HBox ja vasemmassa laidassa allekkain asetteluun käytetty VBox. Keskelle on laitettu tekstikenttä. -->
Layout components can be combined. A typical setup involves using the BorderPane layout as the base with other layouts inside it. In the example below, the top of the BorderPane contains a HBox used for horizontal layout and a VBox used for vertical layouts. A text box has been placed placed in the center.


<!-- ```java
package sovellus;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextArea;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class JavaFxSovellus extends Application {

    @Override
    public void start(Stage window) {
        BorderPane asettelu = new BorderPane();

        HBox napit = new HBox();
        napit.setSpacing(10);
        napit.getChildren().add(new Button("Eka"));
        napit.getChildren().add(new Button("Toka"));
        napit.getChildren().add(new Button("Kolmas"));

        VBox tekstit = new VBox();
        tekstit.setSpacing(10);
        tekstit.getChildren().add(new Label("Eka"));
        tekstit.getChildren().add(new Label("Toka"));
        tekstit.getChildren().add(new Label("Kolmas"));

        asettelu.setTop(napit);
        asettelu.setLeft(tekstit);

        asettelu.setCenter(new TextArea(""));

        Scene view = new Scene(asettelu);

        window.setScene(view);
        window.show();
    }

    public static void main(String[] args) {
        launch(JavaFxSovellus.class);
    }
}
``` -->
```java
package application;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextArea;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class JavaFxSovellus extends Application {

    @Override
    public void start(Stage window) {
        BorderPane layout = new BorderPane();

        HBox buttons = new HBox();
        buttons.setSpacing(10);
        buttons.getChildren().add(new Button("First"));
        buttons.getChildren().add(new Button("Second"));
        buttons.getChildren().add(new Button("Third"));

        VBox texts = new VBox();
        texts.setSpacing(10);
        texts.getChildren().add(new Label("First"));
        texts.getChildren().add(new Label("Second"));
        texts.getChildren().add(new Label("Third"));

        layout.setTop(buttons);
        layout.setLeft(texts);

        layout.setCenter(new TextArea(""));

        Scene view = new Scene(layout);

        window.setScene(view);
        window.show();
    }

    public static void main(String[] args) {
        launch(JavaFxSovellus.class);
    }
}
```

<!-- <img src="../img/material/gui-useampi.png" alt="Samassa käyttöliittymässä käytetty useampaa asettelijaa. BorderPane luo rungon, ylälaidassa on HBox ja vasemmassa laidassa VBox. Keskellä olevaan tekstilaatikkoon on kirjoitettu tekstiä."/> -->
<img src="../img/material/gui-useampi.png" alt="Multiple layouts have been used in a single interface. A BorderPane creates the frame, a HBox is at the top and a VBox on the left side. The text area in the center has some text written in it."/>


<!-- <programming-exercise name='Tekstitilastointia' tmcname='osa13-Osa13_05.Tekstitilastointia'> -->
<programming-exercise name='Text statistics' tmcname='part13-Part13_05.TextStatistics'>

<!-- Luo tehtäväpohjassa olevaan luokkaan sovellus, joka käyttää BorderPane-luokkaa asetteluun. Keskellä tulee olla TextArea-luokasta luotu tekstikenttä, ja alalaidassa kolme textComponenta. Aseta alalaidan tekstikomponentit HBox-olion sisään. Ensimmäisessä tekstikomponentissa tulee olla teksti "Kirjaimia: 0". Toisessa tekstikomponentissa tulee olla teksti "Sanoja: 0". Kolmannessa tekstikomponentissa tulee olla teksti "Pisin sana on:". -->

Create an applicaton in the class provided in the exercise template. Use the BorderPane class for the layout. In the center there should be a text field created using the TextArea class, and along the bottom edge there should be three textComponents. Place the text components along the bottom edge into a HBox object.The first text component should have the text "Letters: 0", the second text component should have the text "Words: 0", and the third text component should have the text "The longest word is:".

</programming-exercise>
