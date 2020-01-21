---
path: '/osa-8/4-tiedon-ryhmittely-hajautustaulun-avulla'
title: 'Tiedon ryhmittely hajautustaulun avulla'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat käyttää listaa hajautustaulun arvona.
- Osaat ryhmitellä tietoa hajautustaulua hyödyntäen.

</text-box>

Hajautustaulu sisältää korkeintaan yhden arvon yhtä avainta kohti. Seuraavassa esimerkissä tallennamme henkilöiden puhelinnumeroita hajautustauluun.

```java
HashMap<String, String> puhelinnumerot = new HashMap<>();
puhelinnumerot.put("Pekka", "040-12348765");

System.out.println("Pekan numero: " + puhelinnumerot.get("Pekka"));

puhelinnumerot.put("Pekka", "09-111333");

System.out.println("Pekan numero: " + puhelinnumerot.get("Pekka"));
```

<sample-output>

Pekan numero: 040-12348765
Pekan numero: 09-111333

</sample-output>

Entä jos haluaisimme liittää yhteen avaimeen useita arvoja, eli esimerkiksi useampia puhelinnumeroita yhdelle henkilölle?

Koska hajautustaulun avaimet ja arvot voivat olla mitä tahansa muuttujia, myös listojen käyttäminen hajautustaulun arvona on mahdollista. Useamman arvon lisääminen yhdelle avaimelle onnistuu liittämällä avaimeen lista. Muutetaan puhelinnumeroiden tallennustapaa seuraavasti:

```java
HashMap<String, ArrayList<String>> puhelinnumerot = new HashMap<>();
```

Nyt hajautustaulussa on jokaiseen avaimeen liitettynä lista. Vaikka new-komento luo hajautustaulun, ei hajautustaulu sisällä alussa yhtäkään listaa. Ne on luotava tarvittaessa erikseen.

```java
HashMap<String, ArrayList<String>> puhelinnumerot = new HashMap<>();

// liitetään Pekka-nimeen ensin tyhjä ArrayList
puhelinnumerot.put("Pekka", new ArrayList<>());

// ja lisätään Pekkaa vastaavalle listalle puhelinnumero
puhelinnumerot.get("Pekka").add("040-12348765");
// ja lisätään toinenkin puhelinnumero
puhelinnumerot.get("Pekka").add("09-111333");

System.out.println("Pekan numerot: " + puhelinnumerot.get("Pekka"));
```

<sample-output>

Pekan numero: [040-12348765, 09-111333]

</sample-output>

Määrittelimme muuttujan puhelinnumero tyypiksi `HashMap<String, ArrayList<String>>`. Tämä tarkoittaa hajautustaulua, joka käyttää avaimena merkkijonoa ja arvona merkkijonoja sisältävää listaa. Hajautustauluun lisättävät arvot ovat siis konkreettisia listoja.

```java
// liitetään Pekka-nimeen ensin tyhjä ArrayList
puhelinnumerot.put("Pekka", new  ArrayList<>());

// ...
```

Vastaavalla tyylillä voi toteuttaa esimerkiksi tehtävien pistekirjanpidon. Alla olevassa esimerkissä on hahmoteltu luokkaa `Tehtavakirjanpito`, mikä sisältää käyttäjäkohtaisen pistekirjanpidon. Käyttäjä esitetään merkkijonona ja pisteet kokonaislukuina.

```java
public class Tehtavakirjanpito {
    private HashMap<String, ArrayList<Integer>> tehdytTehtavat;

    public Tehtavakirjanpito() {
        this.tehdytTehtavat = new HashMap<>();
    }

    public void lisaa(String kayttaja, int tehtava) {
        // uudelle käyttäjälle on lisättävä HashMapiin tyhjä lista jos sitä
        // ei ole jo lisätty
        this.tehdytTehtavat.putIfAbsent(kayttaja, new ArrayList<>());

        // haetaan ensin käyttäjän tehtävät sisältävä lista ja tehdään siihen lisäys
        ArrayList<Integer> tehdyt = this.tehdytTehtavat.get(kayttaja);
        tehdyt.add(tehtava);

        // edellinen olisi onnitunut myös ilman apumuuttujaa seuraavasti
        // this.tehdytTehtavat.get(kayttaja).add(tehtava);
    }

    public void tulosta() {
        for (String nimi: tehdytTehtavat.keySet()) {
            System.out.println(nimi + ": " + tehdytTehtavat.get(nimi));
        }
    }
}
```

```java
Tehtavakirjanpito kirjanpito = new Tehtavakirjanpito();
kirjanpito.lisaa("Ada", 3);
kirjanpito.lisaa("Ada", 4);
kirjanpito.lisaa("Ada", 3);
kirjanpito.lisaa("Ada", 3);

kirjanpito.lisaa("Pekka", 4);
kirjanpito.lisaa("Pekka", 4);

kirjanpito.lisaa("Matti", 1);
kirjanpito.lisaa("Matti", 2);

kirjanpito.tulosta();
```

<sample-output>

Matti: [1, 2]
Pekka: [4, 4]
Ada: [3, 4, 3, 3]

</sample-output>

<programming-exercise name='Usean käännöksen sanakirja' tmcname='osa08-Osa08_14.UseanKaannoksenSanakirja'>

Tehtävänäsi on toteuttaa luokka `UseanKaannoksenSanakirja`, johon voidaan lisätä yksi tai useampi käännös jokaiselle sanalle. Luokan tulee toteuttaa seuraavat metodit:

- `public void lisaa(String sana, String kaannos)` lisää käännöksen sanalle säilyttäen vanhat käännökset

- `public ArrayList<String> kaanna(String sana)` palauttaa listan, joka sisältää sanojen käännökset. Jos sanalle ei ole yhtäkään käännöstä, metodin tulee palauttaa tyhjä lista.

- `public void poista(String sana)` poistaa sanan ja sen kaikki käännökset sanakirjasta.


Käännökset kannattanee lisätä `HashMap<String, ArrayList<String>>`-tyyppiseen oliomuuttujaan.

Esimerkki:

```java
UseanKaannoksenSanakirja sanakirja = new UseanKaannoksenSanakirja();
sanakirja.lisaa("kuusi", "six");
sanakirja.lisaa("kuusi", "spruce");

sanakirja.lisaa("pii", "silicon");
sanakirja.lisaa("pii", "pi");

System.out.println(sanakirja.kaanna("kuusi"));
sanakirja.poista("pii");
System.out.println(sanakirja.kaanna("pii"));
```

<sample-output>

[six, spruce]
[]

</sample-output>

</programming-exercise>


<programming-exercise name='Kellari (2 osaa)' tmcname='osa08-Osa08_15.Kellari'>


<h2>Lisääminen ja sisällön tarkastelu</h2>

Tehtävänäsi on toteuttaa luokka `Kellari`, jonka avulla pidetään kirjaa kellarikomeroista sekä niiden sisällöistä. Luokan tulee toteuttaa seuraavat metodit:

- `public void lisaa(String komero, String tavara)` lisää parametrina annettuun komeroon parametrina annetun tavaran.

- `public ArrayList<String> sisalto(String komero)` palauttaa listan, joka sisältää parametrina annetun komeron sisältämät tavarat. Mikäli komeroa ei ole tai komerossa ei ole yhtäkään tavaraa, metodin tulee palauttaa tyhjä lista.

Esimerkki:

```java
Kellari kellari = new Kellari();
kellari.lisaa("a14", "luistimet");
kellari.lisaa("a14", "maila");
kellari.lisaa("a14", "luistimet");

kellari.lisaa("f156", "rullaluistimet");
kellari.lisaa("f156", "rullaluistimet");

kellari.lisaa("g63", "six");
kellari.lisaa("g63", "pi");

System.out.println(kellari.sisalto("a14"));
System.out.println(kellari.sisalto("f156"));
```

<sample-output>

[luistimet, maila, luistimet]
[rullaluistimet, rullaluistimet]

</sample-output>


<h2>Komeroiden listaus ja komerosta poistaminen</h2>

Kun luokassa `Kellari` on toiminnallisuus tavaran komeroon lisäämiseen sekä komeron sisällöin listaamiseen, lisää sinne toiminnallisuus tavaran poistamiseen komerosta sekä komeroiden listaamiseen.

- `public void poista(String komero, String tavara)` poistaa parametrina annetusta komerosta parametrina annetun tavaran. Huom! Poistaa vain yhden kappaleen -- mikäli samannimisiä tavaroita on useita, loput jäävät vielä jäljelle. Mikäli komero jäisi poiston jälkeen tyhjäksi, metodi poistaa myös komeron.

- `public ArrayList<String> komerot()` palauttaa listana kellarikomeroiden nimet. Huom! Listassa vain ne komerot, joissa on tavaraa.

Esimerkki:

```java
Kellari kellari = new Kellari();
kellari.lisaa("a14", "luistimet");
kellari.lisaa("a14", "maila");
kellari.lisaa("a14", "luistimet");

kellari.lisaa("f156", "rullaluistimet");
kellari.lisaa("f156", "rullaluistimet");

kellari.lisaa("g63", "six");
kellari.lisaa("g63", "pi");

kellari.poista("f156", "rullaluistimet");

System.out.println(kellari.sisalto("f156"));

kellari.poista("f156", "rullaluistimet");

System.out.println(kellari.komerot());
```

<sample-output>

[rullaluistimet]
[a14, g63]

</sample-output>

Tulostuksessa näkyvä komeroiden järjestys voi poiketa esimerkistä.

</programming-exercise>
