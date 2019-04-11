---
path: '/osa-13/3-laajempi-sovellus-asteroids'
title: 'Laajempi sovellus: Asteroids'
hidden: true
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät tavan interaktiivisen pelin toteuttamiseen.
- Näet miten laajempi sovellus rakentuu askel askeleelta.
- Harjoittelet askeleittaisten ohjeiden seuraamista laajemman sovelluksen rakentamiseksi.

</text-box>

[Asteroids](https://en.wikipedia.org/wiki/Asteroids_(video_game)) on [Atari](https://en.wikipedia.org/wiki/Atari,_Inc.)n kehittämä ja vuonna 1979 julkaisema tietokonepeliklassikko. Pelissä pelaaja ohjaa kolmionmuotoista avaruusalusta, ja pelin tavoitteena on tuhota asteroideja niitä ampuen.

Seuraavaksi tehdään laajempi esimerkki, missä toteutetaan osa Asteroids-pelistä. Peli on myös kurssin tehtävänä -- tee peli esimerkkiä seuraten annettuun tehtäväpohjaan (esimerkin lopussa).

Peli koostetaan useammassa osassa, jotka ovat seuraavat:

- Peliruudun luominen

- Aluksen luominen

- Aluksen kääntäminen

- Aluksen liikuttaminen

- Asteroidin luominen

- Aluksen ja asteroidin törmääminen

- Useampi asteroidi

- Ruudussa pysyminen

- Ammukset

- Pisteiden lisääminen

- Asteroidien jatkuva lisääminen

Aloitetaan ohjelman luominen peliruudun luomisesta.

## Peliruudun luominen

Rakennetaan ohjelma niin, että ohjelman ruutu voi sisältää vapaavalintaisen määrän elementtejä, joiden sijaintiin käytettävä asettelu ei ota kantaa. Tähän sopii hyvin luokka [Pane](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/layout/Pane.html). Luokka Pane sisältää edellisestä [ObservableList](https://docs.oracle.com/javase/8/javafx/api/javafx/collections/ObservableList.html)-tyyppisen listan lapsielementtejä. Listaan pääsee käsiksi Pane-luokan metodin `getChildren`-kautta.

Alla olevassa esimerkissä on ohjelma, joka luo 300 pikseliä leveän ja 200 pikseliä korkean ruudun. Ruudussa on kohdassa 30, 50 ympyrä, jonka säde on 10 pikseliä. Tietokoneohjelmissa koordinaatiston origo on tyypillisesti ikkunan vasemmassa yläkulmassa. Lisäksi y-koordinaatin arvo kasvaa alaspäin mennessä.


```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.Pane;
import javafx.scene.shape.Circle;
import javafx.stage.Stage;

public class PaneEsimerkki extends Application {

    @Override
    public void start(Stage stage) throws Exception {
        Pane ruutu = new Pane();
        ruutu.setPrefSize(300, 200);
        ruutu.getChildren().add(new Circle(30, 50, 10));

        Scene scene = new Scene(ruutu);
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```

<img src="../img/material/pane-circle.png" alt="Ympyrä ikkunassa."/>


Kutsutaan ohjelmaamme AsteroidsSovellukseksi. AsteroidsSovellus mukailee yllä olevaa esimerkkiä. Sovelluksessa ei aseteta ruutuun ympyrää, mutta sovellukselle on asetettu otsikko. Ikkunan leveys on 600 pikseliä ja korkeus 400 pikseliä.


```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.Pane;
import javafx.stage.Stage;

public class AsteroidsSovellus extends Application {

    @Override
    public void start(Stage stage) throws Exception {
        Pane ruutu = new Pane();
        ruutu.setPrefSize(600, 400);

        Scene scene = new Scene(ruutu);
        stage.setTitle("Asteroids!");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```

## Aluksen luominen


Luodaan ohjelmaan seuraavaksi alus. Asteroidsissa alus on kolmio. Kolmion esittäminen onnistuu monikulmiota kuvaavan [Polygon](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/shape/Polygon.html)-luokan avulla. Monikulmion kulmat asetetaan Polygon-oliolle joko konstruktorin parametrina tai Polygon-luokan sisältämään listaan. Listaan pääsee käsiksi metodilla `getPoints`.

Alla olevassa esimerkissä ruutuun on lisätty 100 pikseliä leveä ja 50 pikseliä korkea suunnikas, joka on luotu Polygon-luokan avulla.


```java
@Override
public void start(Stage stage) throws Exception {
    Pane ruutu = new Pane();
    ruutu.setPrefSize(300, 200);

    Polygon suunnikas = new Polygon(0, 0, 100, 0, 100, 50, 0, 50);
    ruutu.getChildren().add(suunnikas);

    Scene scene = new Scene(ruutu);
    stage.setScene(scene);
    stage.show();
}
```

<img src="../img/material/pane-suunnikas.png" alt="Suunnikas ikkunassa."/>


Polygon-olion siirtäminen sopivampaan paikkaan onnistuu sen tarjoamien `setTranslateX` ja `setTranslateY`-metodien avulla. Alla olevassa esimerkissä luodaan edellistä esimerkkiä vastaava suunnikas, mutta nyt suunnikasta on siirretty 100 pikseliä oikealle ja 20 pikseliä alas.


```java
@Override
public void start(Stage stage) throws Exception {
    Pane ruutu = new Pane();
    ruutu.setPrefSize(300, 200);

    Polygon suunnikas = new Polygon(0, 0, 100, 0, 100, 50, 0, 50);
    suunnikas.setTranslateX(100);
    suunnikas.setTranslateY(20);

    ruutu.getChildren().add(suunnikas);

    Scene scene = new Scene(ruutu);
    stage.setScene(scene);
    stage.show();
}
```

<img src="../img/material/pane-suunnikas-siirretty.png" alt="Suunnikas ikkunassa. Suunnikasta on siirretty 100 pikseliä oikealle ja 20 pikseliä alas."/>


Luodaan alusta kuvaava kolmio ja lisätään se aiempaan AsteroidsSovellukseemme. Siirretään hahmo ruudun keskelle -- koska ruudun leveys on 600 pikseliä ja ruudun korkeus on 400 pikseliä, hahmoa siirretään 300 pikseliä oikealla ja 200 pikseliä alas.


```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.Pane;
import javafx.scene.shape.Polygon;
import javafx.stage.Stage;

public class AsteroidsSovellus extends Application {

    @Override
    public void start(Stage stage) throws Exception {
        Pane ruutu = new Pane();
        ruutu.setPrefSize(600, 400);

        Polygon alus = new Polygon(-5, -5, 10, 0, -5, 5);
        alus.setTranslateX(300);
        alus.setTranslateY(200);

        ruutu.getChildren().add(alus);

        Scene scene = new Scene(ruutu);
        stage.setTitle("Asteroids!");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```

## Aluksen kääntäminen: Näppäimistön kuuntelija, osa 1

Luokat kuten Polygon ja Circle perivät JavaFx:n [Node](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/Node.html)-luokan. Node-luokalla on valmiina muuttuja `rotate`, joka kuvaa esineen käännöstä asteina. Minkä tahansa Node-luokan perivän olion kääntäminen on siis melko suoraviivaista -- tarvitsee vain käyttää valmista metodia `setRotate`. Metodille annetaan parametrina käännöksen asteluku.

<br/>

Alla olevassa esimerkissä edellä nähtyä esimerkkiä on muunnettu siten, että alusta on käännetty 30 astetta.


```java
@Override
public void start(Stage stage) throws Exception {
    Pane ruutu = new Pane();
    ruutu.setPrefSize(600, 400);

    Polygon alus = new Polygon(-5, -5, 10, 0, -5, 5);
    alus.setTranslateX(300);
    alus.setTranslateY(200);
    alus.setRotate(30);

    ruutu.getChildren().add(alus);

    Scene scene = new Scene(ruutu);
    stage.setScene(scene);
    stage.show();
}
```

Todellisuudessa emme kuitenkaan halua tilannetta, missä alus kääntyy vain kerran, vaan tilanteen, missä alusta voi ohjata pelin käynnissäollessa. Tarvitsemme siis tapahtumankuuntelijan, joka kuuntelee näppäimistöä ja kääntää alusta näppäimistön painalluksen yhteydessä.

Ikkunan sisältöä kuvaava `Scene`-olio tarjoaa metodin `setOnKeyPressed`, jolle voidaan antaa parametrina tapahtumia käsittelevä olio. Luodaan tapahtumankäsittelijä, joka reagoi näppäimistöön. Näppäimistötapahtumiin liittyy enumeroitu muuttuja `KeyCode`, joka kertoo painetun napin. Olemme kiinnostuneita napeista vasen (LEFT) ja oikea (RIGHT).

Tehdään ensin testiversio, missä aluksen käännös on yksinkertainen. Jos käyttäjä painaa nuolta vasemmalle, asteeksi asetetaan -30. Jos taas käyttäjä painaa nuolta oikealle, asteeksi asetetaan 30.

```java
scene.setOnKeyPressed(event -> {
    if (event.getCode() == KeyCode.LEFT) {
        alus.setRotate(-30);
    }

    if (event.getCode() == KeyCode.RIGHT) {
        alus.setRotate(30);
    }
});
```

Jos aluksen sijaan käytössä olisi suunnikas, ohjelman toiminta näyttäisi seuraavanlaiselta.

<img src="../img/material/pane-polygon-move.gif" alt="Suunnikasta voi kääntää vasemmalle tai oikealle."/>


Käännöksen saa tasaiseksi hyödyntämällä tietoa olemassaolevasta käännöksestä. Alla olevassa esimerkissä alus kääntyy viisi astetta kerrallaan.

```java
scene.setOnKeyPressed(event -> {
    if (event.getCode() == KeyCode.LEFT) {
        alus.setRotate(alus.getRotate() - 5);
    }

    if (event.getCode() == KeyCode.RIGHT) {
        alus.setRotate(alus.getRotate() + 5);
    }
});
```

Alla kuvattuna vastaava esimerkki, missä aluksen sijaan käännetään suunnikasta.

<img src="../img/material/pane-polygon-move-rotate.gif" alt="Suunnikasta voi kääntää vasemmalle tai oikealle."/>


## Aluksen kääntäminen: Näppäimistön kuuntelija, osa 2

Edellä kuvattu lähestymistapa mahdollistaa "ihan ok"-tyyppisen kääntämisen. Lähestymistavassa on samalla ongelma -- liike ei ole sulavaa. Kun nappia painaa, alus kääntyy, pitää pienen tauon, ja jatkaa vasta tämän jälkeen kääntymistä.

Tämä liittyy siihen, miten ohjelmat oletuksena käsittelevät näppäinten painalluksen. Jos ohjelma käsittelisi näppäimen painalluksen useana tapahtumana heti kun näppäintä painetaan, muuttuisi esimerkiksi tekstin kirjoittaminen paljon hankalammaksi, sillä hieman pidemmät painallukset tuottaisivat heti useampia merkkejä.

Muutetaan näppäinten käsittelyä siten, että pidämme kirjaa pohjassa olevista napeista. Tämä onnistuu (esimerkiksi) hajautustaulun avulla. Hajautustaulu sisältää avaimena KeyCode-olion, eli nappia kuvaavan olion, ja arvona Boolean-tyyppisen muuttujan. Jos tiettyyn nappiin liittyvän boolean-muuttujan arvo on `true`, nappi on pohjassa, muulloin nappi ei ole pohjassa.

Nyt huomioidaan myös napin nostaminen, eli `onKeyReleased`-tapahtuma.


```java
Map<KeyCode, Boolean> painetutNapit = new HashMap<>();

scene.setOnKeyPressed(event -> {
    painetutNapit.put(event.getCode(), Boolean.TRUE);
});

scene.setOnKeyReleased(event -> {
    painetutNapit.put(event.getCode(), Boolean.FALSE);
});
```

Mutta! Eihän tuolla mikään nyt käännä alusta.

Ei niin. Tarvitsemme vielä kääntämistoiminnallisuuden. Otetaan käyttöön animaatioiden luomiseen tarkoitettu AnimationTimer-luokka, ja annetaan sen vastuulle aluksen kääntäminen mikäli vasen tai oikea nappi on pohjassa.


```java
Map<KeyCode, Boolean> painetutNapit = new HashMap<>();

scene.setOnKeyPressed(event -> {
    painetutNapit.put(event.getCode(), Boolean.TRUE);
});

scene.setOnKeyReleased(event -> {
    painetutNapit.put(event.getCode(), Boolean.FALSE);
});

new AnimationTimer() {

    @Override
    public void handle(long nykyhetki) {
        if(painetutNapit.getOrDefault(KeyCode.LEFT, false)) {
            alus.setRotate(alus.getRotate() - 5);
        }

        if(painetutNapit.getOrDefault(KeyCode.RIGHT, false)) {
            alus.setRotate(alus.getRotate() + 5);
        }
    }
}.start();
```

AnimationTimer-luokan maetodia `handle` kutsutaan noin 60 kertaa sekunnissa. Nyt kääntyminen on paljon sulavampaa (tosin, sitä ei alla olevasta gif-kuvasta taida huomata...).

<img src="../img/material/pane-polygon-move-rotate-better.gif" alt="Suunnikasta voi kääntää vasemmalle tai oikealle."/>


## Aluksen liikuttaminen: Ensimmäinen yritys

Alustamme pystyy nyt kääntämään. Lisätään seuraavaksi mahdollisuus liikkumiseen. Alus voi liikkua mihin tahansa ilmansuuntaan, eli liikkeen kuvaamiseen tarvitaan sekä x- että y-koordinaatin arvo. Konkreettinen liikkuminen tapahtuu muuntamalla alusta kuvaavan polygonin sijaintia ohjelman edetessä.

Hyödynnetään Javan valmista [Point2D](https://docs.oracle.com/javase/8/javafx/api/javafx/geometry/Point2D.html)-luokkaa liikkeen kuvaamiseen -- luokalla on sekä x- että y-koordinaatti.

Ensimmäinen testiversio on liike-muuttujan luominen sekä sen lisääminen AnimationTimer-luokan handle-metodiin.


```java
Point2D liike = new Point2D(1, 0);
```

```java
new AnimationTimer() {

    @Override
    public void handle(long nykyhetki) {
        if(painetutNapit.getOrDefault(KeyCode.LEFT, false)) {
            alus.setRotate(alus.getRotate() - 5);
        }

        if(painetutNapit.getOrDefault(KeyCode.RIGHT, false)) {
            alus.setRotate(alus.getRotate() + 5);
        }

        alus.setTranslateX(alus.getTranslateX() + liike.getX());
    }
}.start();
```

Huraa! Alus liikkuu (ja sitä voi kääntää). Se tosin katoaa aika nopeasti..

<img src="../img/material/pane-alus-liikkuu.gif" alt="Suunnikasta voi kääntää vasemmalle tai oikealle."/>


Valitsemamme Point2D luokka muistuttaa hieman String-luokkaa siinä, että se on *immutaabeli* eli muuttumaton. Emme voi muuttaa olemassaolevan pisteen arvoja, vaan pisteen metodien kutsuminen palauttaa aina uuden arvon. Tämä on hieman ongelmallista, sillä olioiden arvoja ei saa asettaa uudestaan metodien sisällä -- emme siis voi tehdä esimerkiksi seuraavasti.


```java
new AnimationTimer() {

    @Override
    public void handle(long nykyhetki) {
        // .. ei toimi ..
        if(painetutNapit.getOrDefault(KeyCode.UP, false)) {
            liike = liike.add(new Point2D(1, 1));
        }
        // ..
    }
}.start();
```

Metodikutsut ovat kuitenkin sallittuja. Taitaa olla aika refaktoroinnille, eli ohjelman rakenteen selkeyttämiselle..


## Aluksen liikuttaminen: Ohjelman refaktorointi

Luodaan luokka Alus, joka sisältää Polygon-olion sekä Point2D-olion. Polygon-olio kuvaa alusta, ja Point2D-olio aluksen liikettä. Alus saa konstruktorin parametrina aluksen x- ja y-koordinaatit, jonka lisäksi alusta voi kääntää vasemmalle ja oikealle.


```java
import javafx.geometry.Point2D;
import javafx.scene.shape.Polygon;

public class Alus {

    private Polygon hahmo;
    private Point2D liike;

    public Alus(int x, int y) {
        this.hahmo = new Polygon(-5, -5, 10, 0, -5, 5);
        this.hahmo.setTranslateX(x);
        this.hahmo.setTranslateY(y);

        this.liike = new Point2D(0, 0);
    }

    public Polygon getHahmo() {
        return hahmo;
    }

    public void kaannaVasemmalle() {
        this.hahmo.setRotate(this.hahmo.getRotate() - 5);
    }

    public void kaannaOikealle() {
        this.hahmo.setRotate(this.hahmo.getRotate() + 5);
    }

    public void liiku() {
        this.hahmo.setTranslateX(this.hahmo.getTranslateX() + this.liike.getX());
        this.hahmo.setTranslateY(this.hahmo.getTranslateY() + this.liike.getY());
    }
}
```


Refaktoroinnin johdosta sovellusta tulee muuttaa muutamasta kohtaa. Liikettä kuvaavan pisteen sijaan ja alusta kuvaavan monikulmion sijaan luodaan Alus. Tämän lisäksi Pane-oliolle annetaan alukseen liittyvä Polygon-olio, mutta ei itse alus-oliota.


```java
Alus alus = new Alus(150, 100);

ruutu.getChildren().add(alus.getHahmo());
```

Myös AnimationTimer-olion metodia tulee päivittää siten, että metodissa hyödynnetään aluksen metodeja.

```java
new AnimationTimer() {

    @Override
    public void handle(long nykyhetki) {
        if(painetutNapit.getOrDefault(KeyCode.LEFT, false)) {
            alus.kaannaVasemmalle();
        }

        if(painetutNapit.getOrDefault(KeyCode.RIGHT, false)) {
            alus.kaannaOikealle();
        }

        alus.liiku();
    }

}.start();
```

## Aluksen liikuttaminen: Toinen yritys

Alus liikkuu, mutta aluksen liikettä ei voi vielä muuttaa. Lisätään alukselle kiihdytystoiminnallisuus. Kiihdytyksen tulee toimia niin, että aluksen nopeus kiihtyy aluksen osoittamaan suuntaan. Saamme kiihdytyksen monikulmion asteesta, jonka saa selville metodilla `getRotate()`. Olemme käyttäneet tätä jo paljon alusta kääntäessä.

Kiihdytyksen suunta saadaan selville sini- ja kosinifunktion avulla. Nämä löytyvät Javan valmiista [Math](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html)-luokasta. Metodit saavat parametrina asteen radiaaneina, joten joudumme hyödyntämään myös Math-luokan asteiden radiaaneiksi muuttavaa metodia.


```java
double muutosX = Math.cos(Math.toRadians(*kulmaAsteina*));
double muutosY = Math.sin(Math.toRadians(*kulmaAsteina*));
```

Luokan Alus kiihdyta-metodin ensimmäinen versio on seuraavanlainen.


```java
public void kiihdyta() {
    double muutosX = Math.cos(Math.toRadians(this.hahmo.getRotate()));
    double muutosY = Math.sin(Math.toRadians(this.hahmo.getRotate()));

    this.liike = this.liike.add(muutosX, muutosY);
}
```

Lisätään sovellukseen vielä kiihdytystoiminnallisuus. Kiihdytysmetodia kutsutaan kun käyttäjä painaa ylös-nappia.


```java
new AnimationTimer() {

    @Override
    public void handle(long nykyhetki) {
        if(painetutNapit.getOrDefault(KeyCode.LEFT, false)) {
            alus.kaannaVasemmalle();
        }

        if(painetutNapit.getOrDefault(KeyCode.RIGHT, false)) {
            alus.kaannaOikealle();
        }

        if(painetutNapit.getOrDefault(KeyCode.UP, false)) {
            alus.kiihdyta();
        }

        alus.liiku();
    }
}.start();
```

<img src="../img/material/pane-alus-kiihtyy.gif" alt="Alus kiihtyy."/>


Kuten huomaamme, alus kiihtyy. Kiihtyvyys on tosin aika kova, joten sitä on hyvä korjata hieman. Muokataan aluksen kiihdyta-metodia siten, että muutos on vain 5% edellisestä.


```java
public void kiihdyta() {
    double muutosX = Math.cos(Math.toRadians(this.hahmo.getRotate()));
    double muutosY = Math.sin(Math.toRadians(this.hahmo.getRotate()));

    muutosX *= 0.05;
    muutosY *= 0.05;

    this.liike = this.liike.add(muutosX, muutosY);
}
```

Nyt aluksen ohjaus on jotenkuten mahdollista.

<img src="../img/material/alus-kiihtyy-fiksummin.gif" alt="Alus kiihtyy siten, että sitä pystyy kontrolloimaan."/>


## Asteroidin luominen

Luodaan seuraavaksi asteroidi. Asteroidilla on muoto, sijainti ja liike.

Hmm..

Oikeastaan lähes täysin samat asiat kuin mitä aluksella on -- vain muoto on erilainen. Tässä kohtaa on hyvä hetki *yleistämiselle*. Luodaan *abstrakti luokka* Hahmo, joka saa parametrina muodon ja sijainnin. Huomaat, että toiminnallisuus on lähes täysin kopioitu luokasta `Alus`.

```java
import javafx.geometry.Point2D;
import javafx.scene.shape.Polygon;

public abstract class Hahmo {

    private Polygon hahmo;
    private Point2D liike;

    public Hahmo(Polygon monikulmio, int x, int y) {
        this.hahmo = monikulmio;
        this.hahmo.setTranslateX(x);
        this.hahmo.setTranslateY(y);

        this.liike = new Point2D(0, 0);
    }

    public Polygon getHahmo() {
        return hahmo;
    }

    public void kaannaVasemmalle() {
        this.hahmo.setRotate(this.hahmo.getRotate() - 5);
    }

    public void kaannaOikealle() {
        this.hahmo.setRotate(this.hahmo.getRotate() + 5);
    }

    public void liiku() {
        this.hahmo.setTranslateX(this.hahmo.getTranslateX() + this.liike.getX());
        this.hahmo.setTranslateY(this.hahmo.getTranslateY() + this.liike.getY());
    }

    public void kiihdyta() {
        double muutosX = Math.cos(Math.toRadians(this.hahmo.getRotate()));
        double muutosY = Math.sin(Math.toRadians(this.hahmo.getRotate()));

        muutosX *= 0.05;
        muutosY *= 0.05;

        this.liike = this.liike.add(muutosX, muutosY);
    }
}
```

Muokataan luokkaa Alus siten, että se perii luokan Hahmo.


```java
import javafx.scene.shape.Polygon;

public class Alus extends Hahmo {

    public Alus(int x, int y) {
        super(new Polygon(-5, -5, 10, 0, -5, 5), x, y);
    }
}
```

Aika suoraviivaista.

Lisätään seuraavaksi luokka Asteroidi. Tehdään ensimmäisestä toteutuksesta suorakulmio ja palataan asteroidin muotoon myöhemmin.

```java
import javafx.scene.shape.Polygon;

public class Asteroidi extends Hahmo {

    public Asteroidi(int x, int y) {
        super(new Polygon(20, -20, 20, 20, -20, 20, -20, -20), x, y);
    }
}
```

<quiznator id="5caf841414524713f95abe6a"></quiznator>

Testataan vielä, että asteroidin voi lisätä sovellukseen.

```java
Pane ruutu = new Pane();
// koon asetus ..

Alus alus = new Alus(150, 100);
Asteroidi asteroidi = new Asteroidi(50, 50);

ruutu.getChildren().add(alus.getHahmo());
ruutu.getChildren().add(asteroidi.getHahmo());

asteroidi.kaannaOikealle();
asteroidi.kaannaOikealle();
asteroidi.kiihdyta();
asteroidi.kiihdyta();
```

Jotta asteroidi liikkuisi, tulee siihen liittyvää liiku-metodia kutsua animaatiossa.


```java
new AnimationTimer() {

    @Override
    public void handle(long nykyhetki) {
        if (painetutNapit.getOrDefault(KeyCode.LEFT, false)) {
            alus.kaannaVasemmalle();
        }

        if (painetutNapit.getOrDefault(KeyCode.RIGHT, false)) {
            alus.kaannaOikealle();
        }

        if (painetutNapit.getOrDefault(KeyCode.UP, false)) {
            alus.kiihdyta();
        }

        alus.liiku();
        asteroidi.liiku();
    }
}.start();
```

Sovelluksessamme on nyt sekä alus että asteroidi.

<img src="../img/material/asteroidi-huti.gif" alt="Sovelluksessa sekä alus että yksi asteroidi."/>


## Aluksen ja asteroidin törmääminen

Toteutetaan seuraavaksi aluksen ja asteroidin törmäämisen tarkistaminen. Jos alus törmää asterodiin, kutsutaan AnimationTimer-olion metodia `stop`, joka lopettaa animaation.

Sekä alus että asteroidi ovat hahmoja. Lisätään luokalle `Hahmo` metodi, jota käytetään törmäyksen tarkastamiseen. Metodin ensimmäinen versio on sellainen, että hahmo ei koskaan törmää toiseen hahmoon.


```java
public boolean tormaa(Hahmo toinen) {
    return false;
}
```

Luokalla [Shape](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/shape/Shape.html), jonka Polygon *myös* perii, on törmäyksen tarkastamista varten varsin näppärä metodi. Metodi [public static Shape intersect(Shape shape1, Shape shape2)](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/shape/Shape.html#intersect-javafx.scene.shape.Shape-javafx.scene.shape.Shape-) palauttaa kahden Shape-tyyppisen olion leikkausalueen.

Jos alue on tyhjä, törmäystä ei ole tapahtunut. Muokataan törmäysten tarkistamista siten, että se hyödyntää edellä mainittua metodia.


```java
public boolean tormaa(Hahmo toinen) {
    Shape tormaysalue = Shape.intersect(this.hahmo, toinen.getHahmo());
    return tormaysalue.getBoundsInLocal().getWidth() != -1;
}
```

Lisätään ohjelmaan vielä toiminnallisuus, joka lopettaa sovelluksen törmäyksen yhteydessä.


```java
new AnimationTimer() {

    @Override
    public void handle(long nykyhetki) {
        if (painetutNapit.getOrDefault(KeyCode.LEFT, false)) {
            alus.kaannaVasemmalle();
        }

        if (painetutNapit.getOrDefault(KeyCode.RIGHT, false)) {
            alus.kaannaOikealle();
        }

        if (painetutNapit.getOrDefault(KeyCode.UP, false)) {
            alus.kiihdyta();
        }

        alus.liiku();
        asteroidi.liiku();

        if (alus.tormaa(asteroidi)) {
            stop();
        }
    }
}.start();
```

Nyt sovellus pysähtyy aluksen ja asteroidin törmätessä.

<img src="../img/material/asteroids-tormays.gif" alt="Sovellus pysähtyy mikäli alus ja asteroidi törmäävät."/>


## Useampi asteroidi

Muokataan sovellusta seuraavaksi siten, että sovelluksessa on useampia asteroideja. Asteroidit on hyvä esittää listana. Alla olevassa esimerkissä luodaan ensin alus, jonka jälkeen sovellukseen lisätään viisi asteroidia.


```java
Alus alus = new Alus(150, 100);
List<Asteroidi> asteroidit = new ArrayList<>();
for (int i = 0; i < 5; i++) {
    Random rnd = new Random();
    Asteroidi asteroidi = new Asteroidi(rnd.nextInt(100), rnd.nextInt(100));
    asteroidit.add(asteroidi);
}

ruutu.getChildren().add(alus.getHahmo());
asteroidit.forEach(asteroidi -> ruutu.getChildren().add(asteroidi.getHahmo()));
```

Muokataan vielä asteroidien piirtämistä ja törmäystoiminnallisuutta siten, että yksittäisen asteroidin sijaan käydään lista läpi.


```java
new AnimationTimer() {

    @Override
    public void handle(long nykyhetki) {
        if (painetutNapit.getOrDefault(KeyCode.LEFT, false)) {
            alus.kaannaVasemmalle();
        }

        if (painetutNapit.getOrDefault(KeyCode.RIGHT, false)) {
            alus.kaannaOikealle();
        }

        if (painetutNapit.getOrDefault(KeyCode.UP, false)) {
            alus.kiihdyta();
        }

        alus.liiku();
        asteroidit.forEach(asteroidi -> asteroidi.liiku());

        asteroidit.forEach(asteroidi -> {
            if (alus.tormaa(asteroidi)) {
                stop();
            }
        });

    }
}.start();
```

Ohjelman käynnistyessä siinä on nyt useampia asteroideja.

<img src="../img/material/asteroids-monta-asteroidia.png" alt="Monta asteroidia."/>


Tällä hetkellä jokainen asteroidi näyttää samalta ja liikkuu samalla tavalla. Olisi hienoa, jos asteroideissa olisi vähän vaihtelua. Muokataan Asteroidi-luokkaa siten, että luokalla on erillinen metodi asteroidin rakenteen arpomiseen. Sovitaan, että asteroidit ovat aina viisikulmaisia, ja että niiden perusmuoto on viisikulmio. Luodaan vaihtelua asteroideihin muokkaamalla niiden kulmien sijainteja hieman.

Viisikulmion kulmien laskemiseen saa apua osoitteesta [http://mathworld.wolfram.com/Pentagon.html](http://mathworld.wolfram.com/Pentagon.html). Alla on sovellettu linkin takana olevaa kaavaa, jonka lisäksi monikulmion koko on vaihteleva sekä monikulmion kulmien sijainnit voivat vaihdella hieman.

```java
import java.util.Random;
import javafx.scene.shape.Polygon;

public class MonikulmioTehdas {

    public Polygon luoMonikulmio() {
        Random rnd = new Random();

        double koko = 10 + rnd.nextInt(10);

        Polygon monikulmio = new Polygon();
        double c1 = Math.cos(Math.PI * 2 / 5);
        double c2 = Math.cos(Math.PI / 5);
        double s1 = Math.sin(Math.PI * 2 / 5);
        double s2 = Math.sin(Math.PI * 4 / 5);

        monikulmio.getPoints().addAll(
            koko, 0.0,
            koko * c1, -1 * koko * s1,
            -1 * koko * c2, -1 * koko * s2,
            -1 * koko * c2, koko * s2,
            koko * c1, koko * s1);

        for (int i = 0; i < monikulmio.getPoints().size(); i++) {
            int muutos = rnd.nextInt(5) - 2;
            monikulmio.getPoints().set(i, monikulmio.getPoints().get(i) + muutos);
        }

        return monikulmio;
    }
}
```

Muokataan luokkaa Asteroidi siten, että se hyödyntää yllä kuvattua monikulmioiden luomiseen tarkoitettua luokkaa.

```java
public class Asteroidi extends Hahmo {

    public Asteroidi(int x, int y) {
        super(new MonikulmioTehdas().luoMonikulmio(), x, y);
    }

}
```

Nyt asteroidit ovat monipuolisempia.

<img src="../img/material/asteroids-satunnaiset-monikulmiot.png" alt="Asteroideissa on vaihtelua."/>


Lisätään asteroideille vielä liike ja suunta. Liike ja suunta on osittain määriteltynä luokassa Hahmo, mutta haluamme toimintaan hieman satunnaisuutta. Kun asteroidi luodaan, sen suunnan tulee olla satunnainen luku välillä [0, 360[. Tämän lisäksi asteroidi liikkuu hieman -- liike määritetään satunnaisena määränä kiihdytyskutsuja hahmon luonnin yhteydessä. Lopuksi asteroidilla on myös pieni pyörimisliike. Aina kun asteroidi liikkuu, se myös pyörii hieman.


```java
import java.util.Random;

public class Asteroidi extends Hahmo {

    private double pyorimisliike;

    public Asteroidi(int x, int y) {
        super(new MonikulmioTehdas().luoMonikulmio(), x, y);

        Random rnd = new Random();

        super.getHahmo().setRotate(rnd.nextInt(360));

        int kiihdytystenMaara = 1 + rnd.nextInt(10);
        for (int i = 0; i < kiihdytystenMaara; i++) {
            kiihdyta();
        }

        this.pyorimisliike = 0.5 - rnd.nextDouble();
    }

    @Override
    public void liiku() {
        super.liiku();
        super.getHahmo().setRotate(super.getHahmo().getRotate() + pyorimisliike);
    }
}
```

Yllä olevassa esimerkissä hyödynnetään perintää myös metodissa `liiku`. Kun Asteroidin liiku-metodia kutsutaan, metodi kutsuu ensin yläluokassa Hahmo määriteltyä metodia liiku. Tämän jälkeen hahmoa käännetään pyörimisliikkeen verran. Lopputuloksena asteroidilla on pieni pyörimisliike.


<img src="../img/material/asteroidit-liikkuu.gif" />


## Ruudussa pysyminen

Sovellus on hieman tylsä, sillä asteroidit ja alus voivat siirtyä pois ruudusta. Muokataan sovellusta siten, että asteroidit ja alus pysyvät jatkuvasti ruudussa. Tämä onnistuu muokkaamalla niiden liikkumista siten, että oikealta laidalta poistuttaessa hahmo tulee takaisin vasemmalta laidalta ja toisinpäin. Vastaava toiminnallisuus tarvitaan myös yläkautta ja alakautta poistumiselle.

Määritellään AsteroidsSovellukselle vakioarvoiset muuttujat leveys ja korkeus. Luokille voidaan määritellä luokkakohtaisia arvoja avainsanan `static` avulla. Alla määritellään muuttujat `LEVEYS` ja `KORKEUS`, joihin voidaan viitata muualta ohjelmasta.


```java
public class AsteroidsSovellus extends Application {

    public static int LEVEYS = 300;
    public static int KORKEUS = 200;

    @Override
    public void start(Stage stage) throws Exception {
        Pane ruutu = new Pane();
        ruutu.setPrefSize(LEVEYS, KORKEUS);

        Alus alus = new Alus(LEVEYS / 2, KORKEUS / 2);
        List<Asteroidi> asteroidit = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            Random rnd = new Random();
            Asteroidi asteroidi = new Asteroidi(rnd.nextInt(LEVEYS / 3), rnd.nextInt(KORKEUS));
            asteroidit.add(asteroidi);
        }

        ruutu.getChildren().add(alus.getHahmo());
        asteroidit.forEach(asteroidi -> ruutu.getChildren().add(asteroidi.getHahmo()));

    // ...
```


Muuttujat, jotka on määritelty avainsanalla `static`, eivät liity luokasta tehtäviin olioihin. Jos `static`-muuttujalla on määre `public` -- kuten yllä -- voi muuttujaan viitata myös muista luokista. Muokataan luokan Hahmo liiku-metodia siten, että se hyödyntää AsteroidsSovelluksen *staattisia muuttujia* eli luokkamuuttujia LEVEYS ja KORKEUS. Alla oleva liiku-metodi tarkastaa, että hahmo on jatkuvasti näkyvillä.

```java
public void liiku() {
    this.hahmo.setTranslateX(this.hahmo.getTranslateX() + this.liike.getX());
    this.hahmo.setTranslateY(this.hahmo.getTranslateY() + this.liike.getY());

    if (this.hahmo.getTranslateX() < 0) {
        this.hahmo.setTranslateX(this.hahmo.getTranslateX() + AsteroidsSovellus.LEVEYS);
    }

    if (this.hahmo.getTranslateX() > AsteroidsSovellus.LEVEYS) {
        this.hahmo.setTranslateX(this.hahmo.getTranslateX() % AsteroidsSovellus.LEVEYS);
    }

    if (this.hahmo.getTranslateY() < 0) {
        this.hahmo.setTranslateY(this.hahmo.getTranslateY() + AsteroidsSovellus.KORKEUS);
    }

    if (this.hahmo.getTranslateY() > AsteroidsSovellus.KORKEUS) {
        this.hahmo.setTranslateY(this.hahmo.getTranslateY() % AsteroidsSovellus.KORKEUS);
    }
}
```

Nyt hahmot pysyvät ruudussa.

<img src="../img/material/asteroids-pysyy-ruudussa.gif" />

Emme ole yllä kuvattuun versioon täysin tyytyväisiä, sillä hahmot saattavat "hypätä" ruudun laidalta toiselle. Hahmon kokoa ei huomioida yllä kuvatussa liikkumistoiminnossa, jolloin hahmon x- tai y-koordinaatti voi olla ulkona ruudusta, vaikka osa hahmosta olisi vielä näkyvissä. Tähän löytyy -- mahdollisesti -- ratkaisu Node-luokalta löytyvästä getBoundsInParent-metodista. Emme tarkastele tätä kuitenkaan sen enempää.


## Ammukset

Asteroids ilman ammuksia olisi pelkkää väistelyä. Lisätään asteroidsiin seuraavaksi ammukset. Ammuksilla on muoto, suunta ja liike. Voimme käyttää Hahmoa myös Ammusten luomiseen. Luodaan Ammus-luokan ensimmäinen versio, missä ammusta kuvataan neliön avulla.


```java
import javafx.scene.shape.Polygon;

public class Ammus extends Hahmo {

    public Ammus(int x, int y) {
        super(new Polygon(2, -2, 2, 2, -2, 2, -2, -2), x, y);
    }

}
```


Toisin kuin hahmojen ja asteroidien tapauksessa, emme halua että pelin alkutilassa on ammuksia. Määritellään ammuksia varten lista, mutta jätetään se aluksi tyhjäksi.


```java
List<Ammus> ammukset = new ArrayList<>();
```

Ammus luodaan kun käyttäjä painaa välilyöntiä. Ammuksen luomisen yhteydessä sen suunnaksi asetetaan aluksen suunta. Luodaan ampumisesta ensimmäinen versio.


```java
if (painetutNapit.getOrDefault(KeyCode.SPACE, false)) {
    // ammutaan
    Ammus ammus = new Ammus((int) alus.getHahmo().getTranslateX(), (int) alus.getHahmo().getTranslateY());
    ammus.getHahmo().setRotate(alus.getHahmo().getRotate());
    ammukset.add(ammus);

    ruutu.getChildren().add(ammus.getHahmo());
}
```

Ensimmäisessä versiossa alus ampuu kun käyttäjä painaa välilyöntiä, mutta ammukset eivät liiku. Ammukset eivät myöskään törmää muihin hahmoihin.

<img src="../img/material/alus-ampuu.gif" />

Haluamme, että ammuksen liikettä voidaan muokata. Tällä hetkellä Hahmon muuttuja `liike` on kuitenkin määritelty private-tyyppiseksi, eikä siihen ole pääsyä minkään metodin kautta. Lisätään luokalle `Hahmo` metodit `getLiike` ja `setLiike`.

Tämän jälkeen ammuksen nopeuden asettaminen on suoraviivaista. Kiihdytetään ammuksen nopeutta hieman (jottei ammus jää koskaan paikalleen), normalisoidaan nopeus (käytännössä nopeutta käsitellään vektorina, jonka pituudeksi asetetaan 1), jonka jälkeen nopeutta kasvatetaan hieman. Tässä nopeus kerrotaan kolmella.


```java
if (painetutNapit.getOrDefault(KeyCode.SPACE, false)) {
    // ammutaan
    Ammus ammus = new Ammus((int) alus.getHahmo().getTranslateX(), (int) alus.getHahmo().getTranslateY());
    ammus.getHahmo().setRotate(alus.getHahmo().getRotate());
    ammukset.add(ammus);

    ammus.kiihdyta();
    ammus.setLiike(ammus.getLiike().normalize().multiply(3));

    ruutu.getChildren().add(ammus.getHahmo());
}
```

Lisätään vielä ammusten liikkuminen muiden hahmojen liikkumisen yhteyteen.

```java
alus.liiku();
asteroidit.forEach(asteroidi -> asteroidi.liiku());
ammukset.forEach(ammus -> ammus.liiku());
```

Nyt ammukset liikkuvat. Ne eivät kuitenkaan vielä törmää mihinkään, ja niitä on aika.. paljon. Rajataan ammusten määrää ensin hieman -- sovitaan, että ammuksia saa olla kerrallaan korkeintaan 3.

```java
if (painetutNapit.getOrDefault(KeyCode.SPACE, false) && ammukset.size() < 3) {
    // ammutaan
    Ammus ammus = new Ammus((int) alus.getHahmo().getTranslateX(), (int) alus.getHahmo().getTranslateY());
    ammus.getHahmo().setRotate(alus.getHahmo().getRotate());
    ammukset.add(ammus);

    ammus.kiihdyta();
    ammus.setLiike(ammus.getLiike().normalize().multiply(3));

    ruutu.getChildren().add(ammus.getHahmo());
}
```

Lisätään tämän jälkeen ammuksille törmäystoiminnallisuus. Ammukset voivat törmätä asteroideihin. Jos ammus törmää asteroidiin, asteroidi poistetaan sekä piirrettävistä asteroideista että asteroidilistasta.

```java
ammukset.forEach(ammus -> {
    List<Asteroidi> tormatyt = asteroidit.stream()
                                                .filter(asteroidi -> asteroidi.tormaa(ammus))
                                                .collect(Collectors.toList());

    tormatyt.stream().forEach(tormatty -> {
        asteroidit.remove(tormatty);
        ruutu.getChildren().remove(tormatty.getHahmo());
    });
});
```

<img src="../img/material/ammus-poistaa-asteroidin.gif" />

Ammukset eivät kuitenkaan poistu törmäyksen yhteydessä. Eräs tapa poistaa myös ammukset on esitelty seuraavassa esimerkissä.


```java
List<Ammus> poistettavatAmmukset = ammukset.stream().filter(ammus -> {
    List<Asteroidi> tormatyt = asteroidit.stream()
                                                .filter(asteroidi -> asteroidi.tormaa(ammus))
                                                .collect(Collectors.toList());

    if(tormatyt.isEmpty()) {
        return false;
    }

    tormatyt.stream().forEach(tormatty -> {
        asteroidit.remove(tormatty);
        ruutu.getChildren().remove(tormatty.getHahmo());
    });

    return true;
}).collect(Collectors.toList());

poistettavatAmmukset.forEach(ammus -> {
    ruutu.getChildren().remove(ammus.getHahmo());
    ammukset.remove(ammus);
});
```

Vaikka lähestymistapa toimii, voisi sitä ehkäpä parantaa hieman. Kyseessä on käytännössä hahmon "pelissä olemisen" määrittely. Hahmolle voisi esimerkiksi määritellä ominaisuuden "elossa", jota voisi hyödyntää edellä olevan selkeyttämiseen. Kyseisen muuttujan avulla ohjelma selkiytyy hieman.

```java
ammukset.forEach(ammus -> {
    asteroidit.forEach(asteroidi -> {
        if(ammus.tormaa(asteroidi)) {
            ammus.setElossa(false);
            asteroidi.setElossa(false);
        }
    });
});

ammukset.stream()
    .filter(ammus -> !ammus.isElossa())
    .forEach(ammus -> ruutu.getChildren().remove(ammus.getHahmo()));
ammukset.removeAll(ammukset.stream()
                        .filter(ammus -> !ammus.isElossa())
                        .collect(Collectors.toList()));

asteroidit.stream()
        .filter(asteroidi -> !asteroidi.isElossa())
        .forEach(asteroidi -> ruutu.getChildren().remove(asteroidi.getHahmo()));
asteroidit.removeAll(asteroidit.stream()
                            .filter(asteroidi -> !asteroidi.isElossa())
                            .collect(Collectors.toList()));
```

Lopun riviparit ovat myös käytännössä identtiset -- kummatkin käsittelevät hahmoja. Ehkäpä tässä olisi lisäkohta refaktoroinnille.

<img src="../img/material/ammus-poistuu.gif" />


## Pisteiden lisääminen

Lähes jokaiseen Asteroids-peliin kuuluu pisteiden seuraaminen. Pisteet kirjoitetaan ohjelmaan teksti-oliona, jonka arvoa muutetaan aina pisteiden muuttuessa. Sovitaan, että käyttäjä saa aina 1000 pistettä kun hän saa tuhottua asteroidin.

Javan tarjoama <a href="https://docs.oracle.com/javase/8/javafx/api/javafx/scene/text/Text.html" target="_blank">Text</a>-luokka on tähän tarkoitukseen mainio. Tekstioliolle määritellään koordinaatti sekä sisältö. Alla olevassa esimerkissä pisteet ovat aina 0.

<br/>

```java
@Override
public void start(Stage stage) throws Exception {
    Pane ruutu = new Pane();
    Text text = new Text(10, 20, "Points: 0");
    ruutu.getChildren().add(text);

    Scene scene = new Scene(ruutu);
    stage.setTitle("Asteroids!");
    stage.setScene(scene);
    stage.show();
}
```

<img src="../img/material/asteroids-pisteet.png" alt="Ikkuna, jossa on teksti pisteet. Pisteet on nollassa."/>

Yllä olevassa esimerkissä pisteet ovat aina 0. Haluamme kuitenkin muuttuvat pisteet. Yksi näppärä väline tähän on luokka [AtomicInteger](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/atomic/AtomicInteger.html), joka tarjoaa kokonaisluvun kapseloituna oliona. AtomicInteger mahdollistaa myös pisteiden kasvattamisen metodikutsun yhteydessä.


```java
@Override
public void start(Stage stage) throws Exception {
    Pane ruutu = new Pane();
    Text text = new Text(10, 20, "Points: 0");
    ruutu.getChildren().add(text);

    AtomicInteger pisteet = new AtomicInteger();

    Scene scene = new Scene(ruutu);
    stage.setTitle("Asteroids!");
    stage.setScene(scene);
    stage.show();


    new AnimationTimer() {

        @Override
        public void handle(long nykyhetki) {
            text.setText("Pisteet: " + pisteet.incrementAndGet());
        }
    }.start();
}
```

<img src="../img/material/pisteet-kasvavat.gif" alt="Ikkuna, jossa on teksti pisteet. Pisteet kasvavat."/>

Saamme siis pisteet näkyville ja pisteet kasvamaan. Kytketään pisteiden laskenta asteroids-peliin siten, että pisteitä tulee aina kun pelaajan ammus osuu asteroidiin.

Tämän voi toteuttaa osana ammusten ja asteroidien törmäystä.


```java
ammukset.forEach(ammus -> {
    asteroidit.forEach(asteroidi -> {
        if(ammus.tormaa(asteroidi)) {
            ammus.setElossa(false);
            asteroidi.setElossa(false);
        }
    });

    if(!ammus.isElossa()) {
        text.setText("Points: " + pisteet.addAndGet(1000));
    }
});
```

Nyt, olettaen että pisteiden kasvatus on poistettu animationtimerin alusta, pisteitä saa aina asteroidiin osuttaessa.

<img src="../img/material/asteroids-ammuskelua.gif" alt="Like a boss."/>


## Asteroidien jatkuva lisääminen

Kun osumme asteroideihin, ne katoavat ja ammuttava loppuu kesken. Tämä ei ole hyväksyttävää!

Lisätään ohjelmaan arpomistoiminnallisuus, mikä lisää asteroideja pelin edetessä. Asteroideja lisätään puolen prosentin todennäköisyydellä AnimationTimer-olion kutsujen yhteydessä. Tämän lisäksi uusi asteroidi lisätään vain mikäli se ei heti törmää alukseen.

AnimationTimer-olion metodia handle kutsutaan noin 60 kertaa sekunnissa, joten uusia asteroideja tulee kymmenessä sekunnissa muutamia. Kutsu lisätään AnimationTimer-olion handle-metodin loppuun.


```java
if(Math.random() < 0.005) {
    Asteroidi asteroidi = new Asteroidi(LEVEYS, KORKEUS);
    if(!asteroidi.tormaa(alus)) {
        asteroidit.add(asteroidi);
        ruutu.getChildren().add(asteroidi.getHahmo());
    }
}
```

<img src="../img/material/asteroids-ready.gif" alt="Like a boss."/>


<programming-exercise name='Asteroids (4 osaa)' tmcname='osa13-Osa13_09.Asteroids' nocoins='true'>

Tehtäväpohjassa on tyhjä ohjelmapohja. Toteuta tehtävään edellistä laajempaa esimerkkiä seuraten Asteroids-peli.

Sitä mukaa kun toteutat peliä tehtäväpohjaan, päivitä luokan `AsteroidsSovellus` metodia `osiaToteutettu` palauttamaan valmiiksi saamasi tehtävän osan numero. Voit palauttaa tehtävän vaikket tekisikään kaikkia osia, jolloin saat pisteitä tehtävän niistä osista, jotka olet tehnyt.

Kun saat tehtävän valmiiksi, saat toki jatkaa. Peliin voi lisätä esimerkisi ääniä ja erilaisia hahmoja -- miten esimerkiksi Ufot toimisivat pelissä? Voisivatko ne yrittää ampua hahmon alusta?

<h2>Osa 1</h2>

Toteuta Asteroids-peliä varten materiaalin alussa esitellyt askeleet (1) peliruudun luominen, (2) aluksen luominen, ja (3) aluksen kääntäminen.

Kun olet saanut nämä osat toimimaan, aseta luokan `AsteroidsSovellus` metodin `osiaToteutettu` palauttamaksi arvoksi `1`.


<h2>Osa 2</h2>

Täydennä Asteroids-peliä lisäämällä peliin materiaalissa esitellyt askeleet, jotka mahdollistavat aluksen liikuttamisen.

Kun olet saanut nämä ja edelliset osat toimimaan, aseta luokan `AsteroidsSovellus` metodin `osiaToteutettu` palauttamaksi arvoksi `2`.


<h2>Osa 3</h2>

Täydennä Asteroids-peliä lisäämällä peliin (1) asteroidin luominen, (2) aluksen ja asteroidin törmääminen, ja (3) useamman asteroidin lisääminen.

Kun olet saanut nämä ja edelliset osat toimimaan, aseta luokan `AsteroidsSovellus` metodin `osiaToteutettu` palauttamaksi arvoksi `3`.


<h2>Osa 4</h2>

Täydennä Asteroids-peliä lisäämällä peliin loput osat, eli (1) ruudussa pysyminen, (2) ammukset, (3) pisteiden lisääminen, ja (4) uusien asteroidien lisäämisen.

Kun olet saanut nämä ja edelliset osat toimimaan, aseta luokan `AsteroidsSovellus` metodin `osiaToteutettu` palauttamaksi arvoksi `4`.


*Tehtävässä ei ole esimerkkiratkaisua. Tehtävä on tarkoitettu toteutettavaksi materiaalin esimerkkiä askel askeleelta noudattaen.*

</programming-exercise>

