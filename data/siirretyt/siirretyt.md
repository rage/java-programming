---
path: '/siirretty/siirretty'
title: 'Siirretyt tehtävät'
hidden: true
---


Farm Simulator


<programming-exercise name='Farm simulator (5 parts)' tmcname='part10-Part10_14.FarmSimulator'>

<!-- Maatiloilla on lypsäviä eläimiä, jotka tuottavat maitoa.  Maatilat eivät itse käsittele maitoa, vaan se kuljetetaan Maitoautoilla meijereille.  Meijerit ovat yleisiä maitotuotteita tuottavia rakennuksia.  Jokainen meijeri erikoistuu yhteen tuotetyyppiin, esimerkiksi Juustomeijeri tuottaa Juustoa, Voimeijeri tuottaa voita ja Maitomeijeri tuottaa maitoa. -->

Farms have dairy cows, which produce milk. The farms don't process the milk themselves, but transfer it to dairies by dairy trucks. Dairies are buildings producing common milk products from the farms' milk. They have usually specialized on making one type of milk products; cheese dairy makes cheese products, milk dairy makes the milk you (may) drink every day.

<!-- Rakennetaan maidon elämää kuvaava simulaattori, joskin meijerit jäävät toteutuksestamme toistaiseksi pois. -->

Let's build a simulator on milk's life. For simplicity, we will not include the dairies for now.

<!-- Simulaattorin lopullinen rakenne kutakuinkin noudattaa seuraavaa luokkakaaviota. -->

The final form of the simulator should resemble the class diagram below.


<!-- <img src="../img/diagrams/luokkakaavio-maatilasimulaattori.png" alt="[Maitosailio|-tilavuus:double;-saldo:double][Lehma][&lt;&lt;interface&gt;&gt; Eleleva][&lt;&lt;interface&gt;&gt; Lypsava][Lypsyrobotti][Maatila|-omistaja:String][Navetta][Navetta]-&gt;[Maitosailio][Navetta]-&gt;[Lypsyrobotti][Maatila]-&gt;[Navetta][Maatila]-&gt;*[Lehma][Maatila]-.-^[&lt;&lt;interface&gt;&gt; Eleleva][Lehma]-.-^[&lt;&lt;interface&gt;&gt; Eleleva][Lehma]-.-^[&lt;&lt;interface&gt;&gt; Lypsava]"> -->

<img src="../img/diagrams/luokkakaavio-maatilasimulaattori.png" alt="[MilkContainer|-capacity:double;-saldo:double][Cow][&lt;&lt;interface&gt;&gt; Living][&lt;&lt;interface&gt;&gt; Milkable][MilkingRobot][Farm|-owner:String][Barn][Barn]-&gt;[MilkContainer][Barn]-&gt;[MilkingRobot][Barn]-&gt;[Barn][Farm]-&gt;*[Cow][Farm]-.-^[&lt;&lt;interface&gt;&gt; Living][Cow]-.-^[&lt;&lt;interface&gt;&gt; Living][Cow]-.-^[&lt;&lt;interface&gt;&gt; Milkable]">


<!-- <h2>Maitosäiliö</h2> -->

<h2>MilkContainer</h2>


<!-- Jotta maito pysyisi tuoreena, täytyy se säilöä sille tarkoitettuun säiliöön. Säiliöitä valmistetaan sekä oletustilavuudella 2000 litraa, että asiakkaalle räätälöidyllä tilavuudella.  Toteuta luokka Maitosailio jolla on seuraavat konstruktorit ja metodit. -->

In order for the milk to stay fresh, it must be in a container defined for it. The containers are made in the standard capacity of 2000 liters, and sizes tailored for the customer. Implement the class MilkContainer with the following constructors and methods.

<!-- - `public Maitosailio()`
- `public Maitosailio(double tilavuus)`
- `public double getTilavuus()`
- `public double getSaldo()`
- `public double paljonkoTilaaJaljella()`
- `public void lisaaSailioon(double maara)`
    lisää säiliöön vain niin paljon maitoa kuin sinne mahtuu,
    ylimääräiset jäävät lisäämättä, maitosäiliön ei siis tarvitse huolehtia tilanteesta jossa maitoa valuu yli
- `public double otaSailiosta(double maara)`
    ottaa säiliöstä pyydetyn määrän, tai niin paljon kuin siellä on jäljellä -->

- `public MilkContainer()`
- `public MilkContainer(double capacity)`
- `public double getCapacity()`
- `public double getAmount()`
- `public double getCapacityLeft()`
- `public void addMilk(double amount)`
    adds milk to the container, if the amount is bigger than how much the container has capacity left, ignore the overflow. The milk container shouldn't care if the milk is going to waste.
- `public double takeMilk(double amount)`
    takes the requested amount (or all that's left) of milk from the container.

<!-- Huomaa, että teet *kaksi konstruktoria*. Kutsuttava konstruktori määräytyy sille annettujen parametrien perusteella. Jos kutsut `new Maitosailio()`, suoritetaan ensimmäisen konstruktorin lähdekoodi. Toista konstruktoria taas kutsutaan antamalla konstruktorille parametrina tilavuus, esim. `new Maitosailio(300.0)`. -->

Note, that you're creating *two constructors*. The constructor to be called is determined by the parameters you give. If you call `new MilkContainer`, the first constructor above is run. Similarly the second constructor above is run, if you give a capacity as a parameter, for example `new MilkContainer(300.0)`.

<!-- Toteuta `Maitosailio`-luokalle myös `toString()`-metodi, jolla kuvaat sen tilaa. Ilmaistessasi säiliön tilaa `toString()`-metodissa, pyöristä litramäärät ylöspäin käyttäen `Math`-luokan tarjoamaa `ceil()`-metodia. -->

You should also implement the method `toString()` for the MilkContainer-class, that describes the object's current state. When describing the state of the object, round the numbers "upwards" using the `ceil()`-method of the `Math`-class.

<!-- Testaa maitosailiötä seuraavalla ohjelmapätkällä: -->

Test your MilkContainer class with the following code:


<!-- ```java
Maitosailio sailio = new Maitosailio();
sailio.otaSailiosta(100);
sailio.lisaaSailioon(25);
sailio.otaSailiosta(5);
System.out.println(sailio);

sailio = new Maitosailio(50);
sailio.lisaaSailioon(100);
System.out.println(sailio);
``` -->

```java
MilkContainer container = new MilkContainer();
container.takeMilk(100);
container.addMilk(25);
container.takeMilk(5);
System.out.println(container);

container = new MilkContainer(50);
container.addMilk(100);
System.out.println(container);
```

<sample-output>
20.0/2000.0
50.0/50.0
</sample-output>


<!-- <h2>Lehmä</h2> -->

<h2>Cow</h2>

<!-- Saadaksemme maitoa tarvitsemme myös lehmiä. Lehmällä on nimi ja utareet. Utareiden tilavuus on satunnainen luku väliltä 15 ja 40, luokkaa `Random` voi käyttäää satunnaislukujen arpomiseen, esimerkiksi  `int luku = 15 + new Random().nextInt(26);`. Luokalla `Lehma` on seuraavat toiminnot: -->

To get milk, we need cows. A cow has a name and udders, the capacity of the udders is a random number between 15 and 40. Getting the random number is easy by using the class `Random`: `int num = 15 + new Random().nextInt(26);`. The class Cow should have the following methods and constructors:

<!-- - `public Lehma()` luo uuden lehmän satunnaisesti valitulla nimellä
- `public Lehma(String nimi)` luo uuden lehmän annetulla nimellä
- `public String getNimi()` palauttaa lehmän nimen
- `public double getTilavuus()` palauttaa utareiden tilavuuden
- `public double getMaara()` palauttaa utareissa olevan maidon määrän
- `public String toString()` palauttaa lehmää kuvaavan merkkijonon (ks. esimerkki alla) -->

- `public Cow()` Creates a new cow with a random name
- `public Cow(String name)` Creates a new cow with a given name
- `public String getName()` return the cow's name
- `public double getCapacity()` returns the capacity of the cow's udders
- `public double getMilkAmount()` returns the amount of milk in the cow's udders
- `public String toString()` returns a String representing the cow's current state (see the example below)


<!-- `Lehma` toteuttaa myös rajapinnat: `Lypsava`, joka kuvaa lypsämiskäyttäytymistä, ja `Eleleva`, joka kuvaa elelemiskäyttäytymistä. -->

`Cow` should also implement the interfaces: `Milkable`, which depicts the milking behavior of the object, and `Living`, which depicts the living behavior of the object.


<!-- ```java
public interface Lypsava {
    public double lypsa();
}

public interface Eleleva {
    public void eleleTunti();
}
``` -->

```java
public interface Milkable {
    public double milk();
}

public interface Living {
    public void liveAnHour();
}
```

<!-- Lehmää lypsettäessä sen koko maitovarasto tyhjennetään jatkokäsittelyä varten. Lehmän elellessä sen maitovarasto täyttyy hiljalleen. Suomessa maidontuotannossa käytetyt lehmät tuottavat keskimäärin noin 25-30 litraa maitoa päivässä. Simuloidaan tätä tuotantoa tuottamalla noin 0.7 - 2 litraa tunnissa. -->

When a cow is milked, it's entire milk reserve is emptied for *** . The cow's milk reserve (udders) refills slowly while it lives. Finnish cows produce an average of 25-30 liters a day. We'll simulate this by making our cows produce 0.7 - 2 liters of milk in an hour (per cow).

<!-- Simuloi tuotantoa tuottamalla noin 0.7 - 2 litraa tunnissa. Random-luokan metodista `nextDouble`, joka palauttaa satunnaisluvun 0 ja 1 välillä lienee tässä hyötyä. -->

Simulate the production of 0.7 - 2 liters of milk using the Random-class. It's method `nextDouble` gives an random number between 0 and 1, which should help.

<!-- Lisäksi, jos lehmälle ei anneta nimeä, valitse sille nimi satunnaisesti seuraavasta taulukosta. Tässä on hyötyä Random-luokan metodista `nextInt`, jolle annetaan parametrina yläraja. Kannattaa tutustua Random-luokan toimintaan erikseen ennen kuin lisää sen osaksi tätä ohjelmaa. -->

Additionally, if the cow is not given a name, the name will be assigned randomly from a table of names. A useful method of the Random-class would in this case be `nextInt`, which is given an upper limit as a parameter. It is highly suggested to test the functioning of the Random-class separately before including it in to this exercise.


<!-- ```java
private static final String[] NIMIA = new String[]{
    "Anu", "Arpa", "Essi", "Heluna", "Hely",
    "Hento", "Hilke", "Hilsu", "Hymy", "Matti", "Ilme", "Ilo",
    "Jaana", "Jami", "Jatta", "Laku", "Liekki",
    "Mainikki", "Mella", "Mimmi", "Naatti",
    "Nina", "Nyytti", "Papu", "Pullukka", "Pulu",
    "Rima", "Soma", "Sylkki", "Valpu", "Virpi"};
``` -->

```java
private static final String[] NIMIA = new String[]{
    "Anu", "Arpa", "Essi", "Heluna", "Hely",
    "Hento", "Hilke", "Hilsu", "Hymy", "Matti", "Ilme", "Ilo",
    "Jaana", "Jami", "Jatta", "Laku", "Liekki",
    "Mainikki", "Mella", "Mimmi", "Naatti",
    "Nina", "Nyytti", "Papu", "Pullukka", "Pulu",
    "Rima", "Soma", "Sylkki", "Valpu", "Virpi"};
```

<!-- Toteuta luokka Lehma ja testaa sen toimintaa seuraavan ohjelmapätkän avulla. -->

Implement the class Cow and test it with the following snippet of code.

<!-- ```java
Lehma lehma = new Lehma();
System.out.println(lehma);

Eleleva elelevaLehma = lehma;
elelevaLehma.eleleTunti();
elelevaLehma.eleleTunti();
elelevaLehma.eleleTunti();
elelevaLehma.eleleTunti();

System.out.println(lehma);

Lypsava lypsavaLehma = lehma;
lypsavaLehma.lypsa();

System.out.println(lehma);
System.out.println("");

lehma = new Lehma("Ammu");
System.out.println(lehma);
lehma.eleleTunti();
lehma.eleleTunti();
System.out.println(lehma);
lehma.lypsa();
System.out.println(lehma);
``` -->

```java
Cow cow = new Cow();
System.out.println(cow);

Living livingCow = cow;
livingCow.liveAnHour();
livingCow.liveAnHour();
livingCow.liveAnHour();
livingCow.liveAnHour();

System.out.println(cow);

Milkable milkableCow = cow;
milkableCow.milk();

System.out.println(cow);
System.out.println("");

cow = new Cow("coco");
System.out.println(cow);
cow.liveAnHour();
cow.liveAnHour();
System.out.println(cow);
lehma.milk();
System.out.println(cow);
```

<!-- Ohjelman tulostus on erimerkiksi seuraavanlainen. -->

The program output should resemble (some of the amounts and some names are random):

<!-- <sample-output>
Liekki 0.0/23.0
Liekki 7.0/23.0
Liekki 0.0/23.0
Ammu 0.0/35.0
Ammu 9.0/35.0
Ammu 0.0/35.0
</sample-output> -->

<sample-output>
Liekki 0.0/23.0
Liekki 7.0/23.0
Liekki 0.0/23.0
coco 0.0/35.0
coco 9.0/35.0
coco 0.0/35.0
</sample-output>


<!-- <h2>Lypsyrobotti</h2> -->

<h2>Milking Robot</h2>


<!-- Nykyaikaisilla maatiloilla lypsyrobotit hoitavat lypsämisen. Jotta lypsyrobotti voi lypsää lypsävää otusta, tulee lypsyrobotin olla kiinnitetty maitosäiliöön: -->

In modern farms, milking robots do all the milking. In order for the robot to milk a milkable object, it should be connected to a milk container.


<!-- - `public Lypsyrobotti()` luo uuden lypsyrobotin
- `public Maitosailio getMaitosailio()` palauttaa kiinnitetyn maitosäiliö tai `null`-viitteen, jos säiliötä ei ole vielä kiinnitetty
- `public void setMaitosailio(Maitosailio maitosailio)` kiinnittää annetun säiliön lypsyrobottiin
- `public void lypsa(Lypsava lypsava)` lypsää lehmän robottiin kiinnitettyyn maitosäiliöön. Jos robottiin ei ole kiinnitetty maitosäiliötä, ohjelma ilmoittaa että maito menee hukkaan. -->

- `public MilkingRobot()` Creates a new MilkingRobot
- `public MilkContainer getMilkContainer()` returns the attached MilkContainer or the `null`-reference if no MilkContainer has been yet attached.
- `public void setMilkContainer(MilkContainer milkcontainer)` attaches the given MilkContainer to the milking robot.
- `public void milk(Milkable milkable)` Milks to the attached MilkContainer. If no MilkContainer is attached, the program warns about how the milk goes to waste.


<!-- Toteuta luokka Lypsyrobotti ja testaa sitä seuraavien ohjelmanpätkien avulla. Varmista että lypsyrobotti voi lypsää kaikkia Lypsava-rajapinnan toteuttavia olioita! -->

Implement the MilkingRobot and test it with the following snippets of code. Ensure that the milking robot can milk any object implementing the interface `Milkable`.

<!-- ```java
Lypsyrobotti lypsyrobotti = new Lypsyrobotti();
Lehma lehma = new Lehma();
lypsyrobotti.lypsa(lehma);
``` -->

```java
MilkingRobot milkingrobot = new MilkingRobot();
Cow cow = new Cow();
milkingrobot.milk(cow);
```


<!-- <sample-output>

Maidot menevät hukkaan!

</sample-output> -->

<sample-output>

The milk is going to waste!

</sample-output>

<!-- ```java
Lypsyrobotti lypsyrobotti = new Lypsyrobotti();
Lehma lehma = new Lehma();
System.out.println("");

Maitosailio sailio = new Maitosailio();
lypsyrobotti.setMaitosailio(sailio);
System.out.println("Säiliö: " + sailio);

for (int i = 0; i < 2; i++) {
    System.out.println(lehma);
    System.out.println("Elellään..");
    for (int j = 0; j < 5; j++) {
        lehma.eleleTunti();
    }
    System.out.println(lehma);

    System.out.println("Lypsetään...");
    lypsyrobotti.lypsa(lehma);
    System.out.println("Säiliö: " + sailio);
    System.out.println("");
}
``` -->

```java
MilkingRobot milkingrobo = new MilkingRobot();
Cow cow = new Cow();
System.out.println("");

MilkContainer container = new MilkContainer();
milkingrobo.setMilkContainer(container);
System.out.println("Container: " + container);

for (int i = 0; i < 2; i++) {
    System.out.println(cow);
    System.out.println("Living..");
    for (int j = 0; j < 5; j++) {
        cow.liveAnHour();
    }
    System.out.println(cow);

    System.out.println("Milking...");
    lypsyrobotti.lypsa(cow);
    System.out.println("Container: " + container);
    System.out.println("");
}
```

<!-- Ohjelman tulostus on esimerkiksi seuraavanlainen. -->

The program output should resemble the following (random is involved):

<!-- <sample-output>

Säiliö: 0.0/2000.0
Mella 0.0/23.0
Elellään..
Mella 6.2/23.0
Lypsetään...
Säiliö: 6.2/2000.0

Mella 0.0/23.0
Elellään..
Mella 7.8/23.0
Lypsetään...
Säiliö: 14.0/2000.0

</sample-output> -->

<sample-output>

Container: 0.0/2000.0
Mella 0.0/23.0
Living..
Mella 6.2/23.0
Milking...
Container: 6.2/2000.0

Mella 0.0/23.0
Living..
Mella 7.8/23.0
Milking...
Container: 14.0/2000.0

</sample-output>


<!-- <h2>Navetta</h2> -->

<h2>The Barn</h2>


<!-- Lehmät hoidetaan (eli tässä tapauksessa lypsetään) navetassa. Alkukantaisissa navetoissa on maitosäiliö ja tilaa yhdelle lypsyrobotille. Huomaa että lypsyrobottia asennettaessa se kytketään juuri kyseisen navetan maitosäiliöön.  Jos navetassa ei ole lypsyrobottia, ei siellä voida myöskään hoitaa lehmiä. Toteuta luokka `Navetta` jolla on seuraavat konstruktorit ja metodit: -->

The cows are taken care of (Milked, in this case) in the barn. Older barns had a milk container and space for one milking robot. Note that when installing, you want to connect the milking robot to the barn's milk container. If a barn has no milking robot, no cows can be milked there. Implement the class `Barn` with the following constructors and methods


<!-- - `public Navetta(Maitosailio maitosailio)`
- `public Maitosailio getMaitosailio()` palauttaa navetan maitosailion
- `public void asennaLypsyrobotti(Lypsyrobotti lypsyrobotti)` asentaa lypsyrobotin ja kiinnittää sen navetan maitosäiliöön
- `public void hoida(Lehma lehma)` lypsää parametrina annetun lehmän lypsyrobotin avulla, metodi heittää poikkeuksen `IllegalStateException`, jos lypsyrobottia ei ole asennettu
- `public void hoida(List<Lehma> lehmat)` lypsää parametrina annetut lehmät lypsyrobotin avulla, metodi heittää poikkeuksen `IllegalStateException`, jos lypsyrobottia ei ole asennettu
- `public String toString()` palauttaa navetan sisältämän maitosäiliön tilan -->

- `public Barn(Maitosailio maitosailio)`
- `public MilkContainer getMilkContainer()` returns the barn's MilkContainer
- `public void installMilkingRobot(MilkingRobot milkingrobot)` installs the MilkingRobot and attaches it to the barn's MilkContainer.
- `public void care(Lehma lehma)` milks the cow given as a parameter, throws `IllegalStateException` if no MilkingRobot has been installed
- `public void care(List<Lehma> lehmat)` milks the cows given as a parameter, throws the `IllegalStateException` if no MilkingRobot has been installed.
- `public String toString()` returns the current state of the Barn's MilkContainer.

<!-- Testaa luokkaa `Navetta` seuraavan ohjelmapätkän avulla. -->

Test the class `Barn` using the following code snippet.


<!-- ```java
Navetta navetta = new Navetta(new Maitosailio());
System.out.println("Navetta: " + navetta);

Lypsyrobotti robo = new Lypsyrobotti();
navetta.asennaLypsyrobotti(robo);

Lehma ammu = new Lehma();
ammu.eleleTunti();
ammu.eleleTunti();

navetta.hoida(ammu);
System.out.println("Navetta: " + navetta);

List<Lehma> lehmaLista = new ArrayList<>();
lehmaLista.add(ammu);
lehmaLista.add(new Lehma());

for (Lehma lehma: lehmaLista) {
    lehma.eleleTunti();
    lehma.eleleTunti();
};

navetta.hoida(lehmaLista);
System.out.println("Navetta: " + navetta);
``` -->

```java
Barn barn = new Barn(new MilkContainer());
System.out.println("Barn: " + barn);

MilkingRobot robo = new MilkingRobot();
barn.installMilkingRobot(robo);

Cow cow = new Cow();
cow.liveAnHour();
cow.liveAnHour();

barn.care(cows);
System.out.println("Barn: " + barn);

List<Cow> cows = new ArrayList<>();
cows.add(cow);
cows.add(new Cow());

for (Cow moo: cows) {
    moo.liveAnHour());
    moo.liveAnHour();
};

barn.care(cows);
System.out.println("Barn: " + barn);
```

<!-- Tulostuksen tulee olla esimerkiksi seuraavanlainen: -->

The output should resemble the following (random is involved):

<!-- <sample-output>
Navetta: 0.0/2000.0
Navetta: 2.8/2000.0
Navetta: 9.6/2000.0
</sample-output> -->

<sample-output>
Barn: 0.0/2000.0
Barn: 2.8/2000.0
Barn: 9.6/2000.0
</sample-output>


<!-- <h2>Maatila</h2> -->

<h2>The Farm</h2>

<!-- Maatilalla on omistaja ja siihen kuuluu navetta sekä joukko lehmiä. Maatila toteuttaa myös aiemmin nähdyn rajapinnan `Eleleva`, jonka metodia `eleleTunti()`-kutsumalla kaikki maatilaan liittyvät lehmät elelevät tunnin.  Toteuta luokka maatila siten, että se toimii seuraavien esimerkkiohjelmien mukaisesti. -->

The Farm has an owner and a group of cows. The Farm also implements the now familiar interface `living`, and it's method `liveAnHour()` that should make all the Farm's cows live an hour when called.  Implement the class so that it behaves accordingly too the example programs:

<!-- ```java
Maitosailio sailio = new Maitosailio();
Navetta navetta = new Navetta(sailio);

Maatila maatila = new Maatila("Esko", navetta);
System.out.println(maatila);

System.out.println(maatila.getOmistaja() + " on ahkera mies!");
``` -->

```java
MilkContainer container = new MilkContainer();
Barn barn = new Barn(container);

Farm farm = new Farm("Esko", barn);
System.out.println(farm);

System.out.println(farm.getOwner() + " is a hard working fellow!");
```

<!-- Odotettu tulostus: -->

Expected output:

<!-- <sample-output>
Maatilan omistaja: Esko
Navetan maitosäiliö: 0.0/2000.0
Ei lehmiä.
Esko on ahkera mies!
</sample-output> -->

<sample-output>
Farm's owner: Esko
Barn's Milk Container: 0.0/2000.0
No cows.
Esko is a hard working fellow!
</sample-output>

<!-- ```java
Maatila maatila = new Maatila("Esko", new Navetta(new Maitosailio()));
maatila.lisaaLehma(new Lehma());
maatila.lisaaLehma(new Lehma());
maatila.lisaaLehma(new Lehma());
System.out.println(maatila);
``` -->

```java
Farm farm = new Farm("Esko", new Barn(new MilkContainer()));
farm.addCow(new Cow());
farm.addCow(new Cow());
farm.addCow(new Cow());
System.out.println(farm);
```

<!-- Odotettu tulostus: -->

Expected output:

<!-- <sample-output>
Maatilan omistaja: Esko
Navetan maitosäiliö: 0.0/2000.0
Lehmät:
    Naatti 0.0/19.0
    Hilke 0.0/30.0
    Sylkki 0.0/29.0
</sample-output> -->

<sample-output>
Farm's owner: Esko
Barn's Milk Container: 0.0/2000.0
Cows:
    Naatti 0.0/19.0
    Hilke 0.0/30.0
    Sylkki 0.0/29.0
</sample-output>

<!-- ```java
Maatila maatila = new Maatila("Esko", new Navetta(new Maitosailio()));

maatila.lisaaLehma(new Lehma());
maatila.lisaaLehma(new Lehma());
maatila.lisaaLehma(new Lehma());

maatila.eleleTunti();
maatila.eleleTunti();

System.out.println(maatila);
``` -->

```java
Farm farm = new Farm("Esko", new Barn(new MilkContainer()));

farm.addCow(new Cow());
farm.addCow(new Cow());
farm.addCow(new Cow());

farm.liveAnHour();
farm.liveAnHour();

System.out.println(farm);
```


<!-- Odotettu tulostus: -->

Expected output:


<!-- <sample-output>
Maatilan omistaja: Esko
Navetan maitosäiliö: 0.0/2000.0
Lehmät:
    Heluna 2.0/17.0
    Rima 3.0/32.0
    Ilo 3.0/25.0
</sample-output> -->

<sample-output>
Farm's owner: Esko
Barn's Milk Container: 0.0/2000.0
Cows:
    Heluna 2.0/17.0
    Rima 3.0/32.0
    Ilo 3.0/25.0
</sample-output>

<!-- ```java
Maatila maatila = new Maatila("Esko", new Navetta(new Maitosailio()));
Lypsyrobotti robo = new Lypsyrobotti();
maatila.asennaNavettaanLypsyrobotti(robo);

maatila.lisaaLehma(new Lehma());
maatila.lisaaLehma(new Lehma());
maatila.lisaaLehma(new Lehma());

maatila.eleleTunti();
maatila.eleleTunti();

maatila.hoidaLehmat();

System.out.println(maatila);
``` -->

```java
Farm farm = new Farm("Esko", new Barn(new MilkContainer()));
MilkingRobot robo = new MilkingRobot();
farm.installBarnMilkingRobot(robo);

farm.addCow(new Cow());
farm.addCow(new Cow());
farm.addCow(new Cow());

farm.liveAnHour();
farm.liveAnHour();

farm.care();

System.out.println(farm);
```

<!-- Odotettu tulostus: -->

Expected output:

<!-- <sample-output>
Maatilan omistaja: Esko
Navetan maitosäiliö: 18.0/2000.0
Lehmät:
    Hilke 0.0/30.0
    Sylkki 0.0/35.0
    Hento 0.0/34.0
</sample-output> -->

<sample-output>
Farm's owner: Esko
Barn's Milk Container: 18.0/2000.0
Cows:
    Hilke 0.0/30.0
    Sylkki 0.0/35.0
    Hento 0.0/34.0
</sample-output>


<!-- Edellä otettiin ensiaskeleet simulaattorin tekemiseen. Ohjelmaa voisi jatkaa vaikkapa lisäämällä maitoauton sekä luomalla useampia navettoja. Maitoautot voisivat kulkea tehtaalle, jossa tehtäisiin juustoa, jnejne.. -->

In this exercise we have taken the first steps on creating a simulator. It could be expanded upon by for example adding a Dairy truck and multiple Barns. The dairy trucks could go to dairies, which would create products of them and so on, and so on...

</programming-exercise>


Saveable Dictionary


<programming-exercise name='Saveable dictionary (4 parts)' nocoins='true' tmcname='part10-Part10_13.SaveableDictionary'>

<!-- Tässä tehtävässä laajennetaan sanakirjaa siten, että sanat voidaan lukea tiedostosta ja kirjoittaa tiedostoon. Sanakirjan tulee myös osata kääntää molempiin suuntiin, suomesta vieraaseen kieleen sekä toiseen suuntaan (tehtävässä oletetaan hieman epärealistisesti, että suomen kielessä ja vieraassa kielessä ei ole yhtään samalla tavalla kirjoitettavaa sanaa). Tehtävänäsi on luoda sanakirja luokkaan `MuistavaSanakirja`. Toteuta luokka pakkaukseen `sanakirja`. -->

In this exercise you will be expanding the dictionary, so that the words can be read from and written to a file. The dictionary should also be able to translate both ways; from English to Finnish and the other way around (unrealistically assuming that neither of the languages have words spelled the same way). Implement this in to the class `SaveableDictionary` in the package `dictionary`.


<!-- <h2>Muistiton perustoiminnallisuus</h2> -->

<h2>Basic functionality</h2>

<!-- Tee sanakirjalle parametriton konstruktori sekä metodit:

- `public void lisaa(String sana, String kaannos)` lisää sanan sanakirjaan. Jokaisella sanalla on vain yksi käännös ja jos sama sana lisätään uudelleen, ei tapahdu mitään.
- `public String kaanna(String sana)` palauttaa käännöksen annetulle sanalle. Jos sanaa ei tunneta, palautetaan null. -->

Create a constructor (without parameters) and the following methods for the dictionary:

- `public void add(String word, String translation)` adds a word pair to the dictionary. Each word has only one translation and attempts to add more will be ignored.
- `public String translate(String word)` returns the translation. If the word is not in the dictionary, return null.


Example of the functioning of the dictionary:


<!-- ```java
MuistavaSanakirja sanakirja = new MuistavaSanakirja();
sanakirja.lisaa("apina", "monkey");
sanakirja.lisaa("banaani", "banana");
sanakirja.lisaa("apina", "apfe");

System.out.println(sanakirja.kaanna("apina"));
System.out.println(sanakirja.kaanna("monkey"));
System.out.println(sanakirja.kaanna("ohjelmointi"));
System.out.println(sanakirja.kaanna("banana"));
``` -->

```java
SaveableDictionary dictionary = new SaveableDictionary();
dictionary.add("apina", "monkey");
dictionary.add("banaani", "banana");
dictionary.add("apina", "apfe");

System.out.println(dictionary.translate("apina"));
System.out.println(dictionary.translate("monkey"));
System.out.println(dictionary.translate("ohjelmointi"));
System.out.println(dictionary.translate("banana"));
```

Output:

<sample-output>

monkey
apina
null
banaani

</sample-output>

<!-- Kuten tulostuksesta ilmenee, käännöksen lisäämisen jälkeen sanakirja osaa tehdä käännöksen molempiin suuntiin. -->

As it can be seen from the output, the dictionary can work in both ways after the addition of the translation.


<!-- <b>Huom:</b> metodit `lisaa` ja `kaanna` eivät lue tiedostoa tai kirjoita tiedostoon! Myöskään konstruktori ei koske tiedostoon. -->


<b>Please note:</b> The methods `add` and `translate` do not read or write from/to any file! The constructors should not touch any file either.


<!-- <h2>Sanojen poistaminen</h2> -->

<h2>Deleting words</h2>


<!-- Lisää sanakirjalle metodi `public void poista(String sana)` joka poistaa annetun sanan ja sen käännöksen sanakirjasta.

Kannattanee kerrata aiemmilta viikoilta materiaalia, mikä liittyy olioiden poistamiseen ArrayListista.

<b>HUOM2:</b> metodi `poista` ei kirjoita tiedostoon.

Sanakirjan tulee tässä vaiheessa toimia seuraavasti: -->

Add the method `public void delete(String word)` for the dictionary, which deletes the word and it's translation from the dictionary.

It would probably be advised to first do a quick recap of the material relating to deleting Objects from an ArrayList.

<b>NOTE2:</b> The method `delete` should not write anything in any file.

The dictionary should now function like this:


<!-- ```java
MuistavaSanakirja sanakirja = new MuistavaSanakirja();
sanakirja.lisaa("apina", "monkey");
sanakirja.lisaa("banaani", "banana");
sanakirja.lisaa("ohjelmointi", "programming");
sanakirja.poista("apina");
sanakirja.poista("banana");

System.out.println(sanakirja.kaanna("apina"));
System.out.println(sanakirja.kaanna("monkey"));
System.out.println(sanakirja.kaanna("banana"));
System.out.println(sanakirja.kaanna("banaani"));
System.out.println(sanakirja.kaanna("ohjelmointi"));
``` -->

```java
SaveableDictionary dictionary = new SaveableDictionary();
dictionary.add("apina", "monkey");
dictionary.add("banaani", "banana");
dictionary.add("ohjelmointi", "programming");
dictionary.delete("apina");
dictionary.delete("banana");

System.out.println(dictionary.translate("apina"));
System.out.println(dictionary.translate("monkey"));
System.out.println(dictionary.translate("banana"));
System.out.println(dictionary.translate("banaani"));
System.out.println(dictionary.translate("ohjelmointi"));
```

<!-- Tulostuu -->

Should print:

<sample-output>

null
null
null
null
programming

</sample-output>


<!-- Poisto siis toimii myös molemmin puolin, alkuperäisen sanan tai sen käännöksen poistamalla, poistuu sanakirjasta tieto molempien suuntien käännöksestä -->

So deletion should work in both ways too, by deleting the word or the translation will delete the whole wordpair.


<!-- <h2>Lataaminen tiedostosta</h2> -->

<h2>Loading the words from a file</h2>


<!-- Tee sanakirjalle konstruktori `public MuistavaSanakirja(String tiedosto)`  ja metodi `public boolean lataa()`, joka lataa sanakirjan konstruktorin parametrina annetun nimisestä tiedostosta. Jos tiedoston avaaminen tai lukeminen ei onnistu, palauttaa metodi false ja muuten true.

<b>Huom: </b> parameterillinen konstruktori ainoastaan kertoo sanakirjalle käytetävän tiedoston nimen. Konstruktori ei lue tiedostoa, tiedoston lukeminen tapahtuu *ainoastaan* metodissa `lataa`.

Sanakirjatiedostossa yksi rivi sisältää sanan ja sen käännöksen merkillä ":" erotettuna. Tehtäväpohjan mukana tuleva testaamiseen tarkoitettu sanakirjatiedosto `sanat.txt` on sisällöltään seuraava: -->

Create a new constructor `public SaveableDictionary(String file)` and a new method `public boolean load()`, which loads the words from the file with the filename given in the constructor. If the opening or reading of the file doesn't succeed, the method should return false (otherwise true).

<b>Please Note: </b> The constructor only gets the name of the file, It should not read it. The reading of the file happens *only* in the `load`-method.

One row in the dictionary file corresponds to one word and it's translation; splitted with the character ":". The dictionary file `words.txt` included in the exercise template for testing should look like this:

<sample-output>

apina:monkey
alla oleva:below
olut:beer

</sample-output>

<!-- Lue sanakirjatiedosto rivi riviltä lukijan metodilla `nextLine`. Voit pilkkoa rivin String metodilla `split` seuraavasti: -->

Read the dictionary file using the `nextLine`-method of the scanner. You can use the `split`-method of String to split the line:


<!-- ```java
Scanner tiedostonLukija = new ...
while (tiedostonLukija.hasNextLine()) {
    String rivi = tiedostonLukija.nextLine();
    String[] osat = rivi.split(":");   // pilkotaan rivi :-merkkien kohdalta

    System.out.println(osat[0]);     // ennen :-merkkiä ollut osa rivistä
    System.out.println(osat[1]);     // :-merkin jälkeen ollut osa rivistä
}
``` -->

```java
Scanner fileReader = new ...
while (fileReader.hasNextLine()) {
    String line = fileReader.nextLine();
    String[] parts = line.split(":");   // split the line on :-characters

    System.out.println(parts[0]);     // part of the line before the :-character
    System.out.println(parts[1]);     // part of the line after the :-character
}
```

<!-- Sanakirjaa käytetään seuraavasti: -->

The dictionary could now be used like this:


```java
SaveableDictionary dictionary = new SaveableDictionary("words.txt");
boolean loaded = dictionary.load();

if (loaded) {
    System.out.println("Loading the dictionary file succesful.");
}

System.out.println(dictionary.translate("apina"));
System.out.println(dictionary.translate("ohjelmointi"));
System.out.println(dictionary.translate("alla oleva"));
```

Should output:

<!-- <sample-output>

sanakirjan lataaminen onnistui
monkey
null
below

</sample-output> -->

<sample-output>

Loading the dictionary file succesful.
monkey
null
below

</sample-output>


<h2>Writing the words to a file</h2>


<!-- Tee sanakirjalle metodi `public boolean tallenna()`, jota kutsuttaessa sanakirjan sisältö kirjoitetaan konstruktorin parametrina annetun nimiseen tiedostoon. Jos tallennus ei onnistu, palauttaa metodi false ja muuten true. Sanakirjatiedostot tulee tallentaa ylläesitellyssä muodossa, eli ohjelman on osattava lukea itse kirjoittamiaan tiedostoja. -->

Create the method `public boolean save()`. It should write the contents of the dictionary to the file given as a parameter in the constructor. If the writing does not succeed, the method should return false (otherwise true), the dictionary file should be saved as described before. The code should be able to read the files it has written.

<!-- <b>Huom1:</b> mikään muu metodi kuin `tallenna` ei kirjoita tiedostoon. Jos teit edelliset kohdat oikein, sinun ei tulisi tarvita muuttaa mitään olemassaolevaa koodia. -->

<b>Note1:</b> Any method other than `save` should not write to any file. If you have implemented the save-method as described above you shouldn't need to change any code.

<!-- **Huom2:** vaikka sanakirja osaa käännökset molempiin suuntiin, ei sanakirjatiedostoon tule kirjoittaa kuin toinen suunta. Eli jos sanakirja tietää esim. käännöksen *tietokone = computer*, tulee tallennuksessa olla rivi: -->

**Note2:** While the dictionary knows how to translate both ways, the dictionary file doesn't need to include more than one way. Ie. if the dictionary knows the translation *tietokone = computer*, it should write the line:


<sample-output>

tietokone:computer

</sample-output>

<!-- tai rivi -->

or the line:

<sample-output>

computer:tietokone

</sample-output>

<!-- mutta ei molempia! -->

But not both!

<!-- Talletus kannattanee hoitaa siten, että koko käännöslista kirjoitetaan uudelleen vanhan tiedoston päälle, eli materiaalissa esiteltyä `append`-metodia ei kannata käyttää. -->

It is recommended to write the whole dictionary file over the old version, not using the `append`-method.

<!-- Sanakirjan lopullista versiota on tarkoitus käyttää  seuraavasti: -->

The final version of the dictionary should function like this:

<!-- ```java
MuistavaSanakirja sanakirja = new MuistavaSanakirja("sanat.txt");
sanakirja.lataa();

// käytä sanakirjaa

sanakirja.tallenna();
``` -->

```java
SaveableDictionary dictionary = new SaveableDictionary("words.txt");
dictionary.load();

// use the dictionary

dictionary.save();
```

<!-- Eli käytön aluksi ladataan sanakirja tiedostosta ja lopussa tallennetaan se takaisin tiedostoon jotta sanakirjaan tehdyt muutokset pysyvät voimassa seuraavallekin käynnistyskerralle. -->

The dictionary is first loaded from a file and at the end written to it, so that the changes carry over to the next time of use.

</programming-exercise>