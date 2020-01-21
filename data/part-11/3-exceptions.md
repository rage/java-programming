---
path: '/part-11/3-exceptions'
title: 'Exceptions'
hidden: true
---



<text-box variant='learningObjectives' name='Oppimistavoitteet'>

<!-- - Tiedät mitä poikkeukset ovat ja osaat varautua poikkeuksiin. -->
<!-- - Osaat heittää poikkeuksia. -->
<!-- - Tiedät että osaan poikkeksista tulee varautua, ja tiedät että on olemassa poikkeuksia joihin ei tarvitse erikseen varautua. -->
 -  Know what exceptions are, and can handle exceptions
 - Can throw exceptions
 - Know that some exceptions have to be handled, and that some exceptions do not have to be handled.

</text-box>

<!-- Poikkeukset ovat tilanteita, joissa ohjelman suoritus päättyy virheeseen. Ohjelmassa on esimerkiksi kutsuttu *null*-viitteeseen liittyvää metodia, jolloin ohjelmassa tapahtuu poikkeus `NullPointerException`. Vastaavasti taulukon ulkopuolella olevan indeksin hakeminen johtaa poikkeukseen `IndexOutOfBoundsException` ym. -->
When program execution ends with an error, an exception is thrown. For example a program might have called a method with *null* reference and the `NullPointerException` gets thrown, or the program might try to refer to an element outside an array and it leads to the `IndexOutOfBoundsException` and so on.

<!-- Osa Javassa esiintyvistä poikkeuksista on sellaisia, että niihin tulee aina varautua. Näitä ovat esimerkiksi tiedoston lukemisessa tapahtuvaan virheeseen tai verkkoyhteyden katkeamiseen liittyvät poikkeukset. Osa poikkeuksista taas on ajonaikaisia poikkeuksia -- kuten vaikkapa NullPointerException --, joihin ei erikseen tarvitse varautua. Java ilmoittaa aina jos ohjelmassa on lause tai lauseke, jossa mahdollisesti tapahtuvaan poikkeukseen tulee varautua. -->
Some exceptions we have to always prepare for, such as errors when reading from a file or errors related to problems with a network connection. Runtime exceptions, such as the NullPointerException, we do not have to prepare for beforehand. Java will always let you know if your code has a  statement or an expression which can throw an error you have to prepare for.


## Handling exceptions

<!-- Poikkeukset käsitellään `try { } catch (Exception e) { }` -lohkorakenteella. Avainsanan `try` aloittaman lohkon sisällä on lähdekoodi, jonka suorituksessa tapahtuu *mahdollisesti* poikkeus. Avainsanan `catch` aloittaman lohkon sisällä taas määritellään poikkeustilanteessa tapahtuva käsittely, eli mitä tehdään kun try-lohkossa tapahtuu poikkeus. Avainsanaa catch seuraa myös käsiteltävän poikkeuksen tyyppi, esimerkiksi "kaikki poikkeukset" eli Exception (`catch (Exception e)`). -->
We use `try {} catch (Exception e) {}` block structure to handle exceptions. Keyword `try` starts a block containing the code which *might* throw an exception. What happens if an exception is thrown in the `try` block is defined in the block starting with the keyword `catch`.
The keyword `catch` is followed by the type of the exception handled by that block, for example "all exceptions" `catch (Exception e)`.


```java
try {
    // code which possibly throws an exception
} catch (Exception e) {
    // code block executed if an exception is thrown
}
```

<!-- Avainsana `catch` eli *ota kiinni* tulee siitä, että poikkeukset *heitetään* (`throw`). -->
We use the keyword `catch` because causing an exception is referred to as `throw`ing an exception.

<!-- Kuten edellä todettiin, ajonaikaisiin poikkeuksiin kuten NullPointerException ei tarvitse erikseen varautua. Tällaiset poikkeukset voidaan jättää käsittelemättä, jolloin ohjelman suoritus päättyy virheeseen poikkeustilanteen tapahtuessa. Tarkastellaan erästä poikkeustilannetta nyt jo tutun merkkijonon kokonaisluvuksi muuntamisen kautta. -->
As mentioned above, we do not have to prepare for runtime exceptions such as the NullPointerException. We do not have to handle these kinds of exceptions, so the program execution stops if an error causes the exception to be thrown.
Next we will look at one such situation, parsing strings to integers.


<!-- Olemme käyttäneet luokan `Integer` metodia <a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html#parseInt-java.lang.String-" target="_blank" rel="noopener">parseInt</a> merkkijonon kokonaisluvuksi muuntamiseen. Metodi heittää poikkeuksen `NumberFormatException`, jos sille parametrina annettu merkkijono ei ole muunnettavissa kokonaisluvuksi. -->
We have used the <a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html#parseInt-java.lang.String-" target="_blank" rel="noopener">parseInt</a> method of the `Integer` class before.
The method throws a `NumberFormatException` if the string it has been given cannot be parsed into an integer.

<br/>

```java
Scanner reader = new Scanner(System.in);
System.out.print("Give a number: ");

int readNumber = Integer.parseInt(reader.nextLine());
```

<sample-output>

Give a number: **dinosaur**

  **Exception in thread "..." java.lang.NumberFormatException: For input string: "dinosaur"**

</sample-output>


<!-- Yllä ohjelma heittää poikkeuksen, kun käyttäjä syöttää virheellisen numeron. Ohjelman suoritus päättyy tällöin virhetilanteeseen. -->
The above program throws an error if the user input is not a valid number. The exception will cause the program execution to stop.

<!-- Lisätään esimerkkiin poikkeuksen käsittely. Kutsu, joka saattaa heittää poikkeuksen asetetaan `try`-lohkon sisään, ja virhetilanteessa tapahtuva toiminta `catch`-lohkon sisään. -->
Let's handle the exception. We wrap the call which might throw an exception into a `try` block, and the code executed if the exception is thrown into a `catch` block.

```java
Scanner reader = new Scanner(System.in);

System.out.print("Give a number: ");
int readNumber = -1;

try {
    readNumber = Integer.parseInt(reader.nextLine());
} catch (Exception e) {
    System.out.println("User input was not a number.");
}
```

<sample-output>

Give a number: **5**

</sample-output>

<sample-output>

Give a number: **no!**
User input was not a number.

</sample-output>


<!-- Avainsanan `try` määrittelemän lohkon sisältä siirrytään `catch`-lohkoon heti poikkeuksen tapahtuessa. Havainnollistetaan tätä lisäämällä tulostuslause `try`-lohkossa metodia `Integer.parseInt` kutsuvan rivin jälkeen. -->
The code in the `catch` block is executed immediately if the code in the `try` block throws an exception.
We can demonstrate this by adding a print statement below the line calling the `Integer.parseInt` method in the `try` block.

```java
Scanner reader = new Scanner(System.in);

System.out.print("Give a number: ");
int readNumber = -1;

try {
    readNumber = Integer.parseInt(reader.nextLine());
    System.out.println("Good job!");
} catch (Exception e) {
    System.out.println("User input was not a numer.");
}
```

<sample-output>

Give a number: **5**
Good job!

</sample-output>

<sample-output>

Give a number: **no!**
User input was not a number.

</sample-output>


<!-- Ohjelmalle syötetty merkkijono `enpäs!` annetaan parametrina `Integer.parseInt`-metodille, joka heittää poikkeuksen, jos parametrina saadun merkkijonon muuntaminen luvuksi epäonnistuu. Huomaa, että `catch`-lohkossa oleva koodi suoritetaan *vain* poikkeustapauksissa. -->
User input, string `no!`, is given to the `Integer.parseInt` method as a parameter.
The method throws an error if the string cannot be parsed into an integer.
Note, that the code within the `catch` block is executed *only* if an exception is thrown.


<!-- Tehdään yllä olevasta luvun muuntajasta hieman hyödyllisempi. Tehdään siitä metodi, joka kysyy numeroa yhä uudestaan, kunnes käyttäjä syöttää oikean numeron. Metodin suoritus loppuu vasta silloin, kun käyttäjä syöttää kokonaisluvun. -->
Let's make our integer parser a bit more useful.
We'll turn it into a method which prompts the user for a number until they give a valid number.
The execution stops only when the user gives a valid number.

```java
public int readNumber(Scanner reader) {
    while (true) {
        System.out.print("Give a number: ");

        try {
            int readNumber = Integer.parseInt(reader.nextLine());
            return readNumber;
        } catch (Exception e) {
            System.out.println("User input was not a number.");
        }
    }
}
```

<sample-output>

Give a number: **no!**
User input was not a number.
Give a number: **Matt has moss in his head**
User input was not a number.
Give a number: **43**

</sample-output>


## Exceptions and resources

<!-- Erilaisten käyttöjärjestelmäresurssien kuten tiedostojen lukemiseen on toteutettu erillinen versio poikkeustenhallinnasta. ns. try-with-resources -tyyppisessä poikkeustenhallinnassa avattava resurssi lisätään try-osaan määriteltävään ei-pakolliseen suluilla rajattavaan osaan. -->
There is separate exception handling for reading operating system resources such as files.
With so called try-with-resources exception handling the resource to be opened is added to a non compulsory part of the try block declaration in brackets.

<!-- Alla olevassa esimerkissä luetaan tiedoston "tiedosto.txt" kaikki rivit, jotka lisätään ArrayList-listaan. Tiedostoja lukiessa voidaan kohdata virhetilanne, joten tiedoston lukeminen vaatii erillisen "yrittämisen" (try) sekä mahdollisen virheen kiinnioton (catch). -->
The code below reads all lines from "file.txt" and adds them to an ArrayList.
Reading a file might throw an exception, so it requires a try catch block.

```java
ArrayList<String> lines =  new ArrayList<>();

// create a Scanner object for reading files
try (Scanner reader = new Scanner(new File("file.txt"))) {

    // read all lines from a file
    while (reader.hasNextLine()) {
        lines.add(reader.nextLine());
    }
} catch (Exception e) {
    System.out.println("Error: " + e.getMessage());
}

// do something with the lines
```

<!-- Yllä kuvattu try-with-resources -lähestymistapa on hyödyllinen resurssien käsittelyssä, sillä tässä tapauksessa ohjelma sulkee käytetyt resurssit automaattisesti. Tällöin esimerkiksi tiedostoihin liittyvät viitteet saavat luvan "kadota", koska niille ei ole enää käyttöä. Mikäli taas resursseja ei suljeta, ovat tiedostot käyttöjärjestelmän näkökulmasta käytössä kunnes ohjelma sammutetaan. -->
The try-with-resources approach is useful for handling resources, because the program closes the used resources automatically.
Now for example references to files can "disappear", because we do not need them anymore.
If the resources are not closed, the operating system sees them as being in use until the program is closed.

## Shifting the responsibility


<!-- Metodit ja konstruktorit voivat *heittää* poikkeuksia. Heitettäviä poikkeuksia on karkeasti ottaen kahdenlaisia. On poikkeuksia jotka on pakko käsitellä, ja on poikkeuksia joita ei ole pakko käsitellä. Poikkeukset käsitellään joko `try-catch` -lohkossa, tai *heittämällä ne ulos metodista*. -->
Methods and constructors can throw exceptions. There are roughly two categories of exceptions. There are exceptions we have to handle, and exceptions we do not have to handle.
We can handle exceptions by wrapping the code into a `try-catch` block or *throwing them out of the method*.

<!-- Alla olevassa esimerkissä luetaan parametrina annetun tiedoston rivit yksitellen. Tiedoston lukeminen saattaa heittää poikkeuksen -- voi olla, ettei tiedostoa esimerkiksi löydy, tai voi olla ettei siihen ole lukuoikeuksia. Tällainen poikkeus tulee käsitellä. Poikkeuksen käsittely tapahtuu  `try-catch` -lauseella. Seuraavassa esimerkissä emme juurikaan välitä poikkeustilanteesta, mutta tulostamme kuitenkin poikkeukseen liittyvän viestin. -->
The code below reads the file given to it as a parameter line by line.
Reading a file can throw an exception -- for example the file might not exist or the program does not have read rights to the file.
This kind of exception has to be handled.
We handle the exception by wrapping the code into a `try-catch` block.
In this example we do not really care about the exception, but we do print a message to the user about it.

```java
public List<String> readLines(String fileName){
    List<String> lines =  new ArrayList<>();

    try {
        Files.lines(Paths.get("file.txt")).forEach(line -> lines.add(line));
    } catch (Exception e) {
        System.out.println("Error: " + e.getMessage());
    }

    return lines;
}
```

<!-- Ohjelmoija voi myös jättää poikkeuksen käsittelemättä ja *siirtää vastuun* poikkeuksen käsittelystä metodin kutsujalle. Vastuun siirto tapahtuu heittämällä poikkeus metodista eteenpäin lisäämällä tästä tieto metodin määrittelyyn. Tieto poikkeuksen heitosta -- `throws *PoikkeusTyyppi*`, missä poikkeustyyppi esimerkiksi Exception -- lisätään ennen metodirungon avaavaa aaltosulkua. -->
A programmer can also leave the exception unhandled and shift the responsibility for handling it to whomever calls the method.
We can shift the responsibility of handling an exception forward by throwing the exception out of a method, and adding notice of this to the declaration of the method.
Notice on throwing an exception forward `throws *ExceptionType*` is added before the opening bracket of a method.

```java
public List<String> readLines(String fileName) throws Exception {
    ArrayList<String> lines =  new ArrayList<>();
    Files.lines(Paths.get(fileName)).forEach(line -> lines.add(line));
    return lines;
}
```

<!-- Nyt metodia `lue` kutsuvan metodin tulee joko käsitellä poikkeus `try-catch` -lohkossa tai siirtää poikkeuksen käsittelyn vastuuta eteenpäin. Joskus poikkeuksen käsittelyä vältetään viimeiseen asti, ja `main`-metodikin heittää poikkeuksen käsiteltäväksi eteenpäin: -->
Now the method calling the `readLines` method has to either handle the exception in a `try-catch` block or shift the responsibility yet forwards.
Sometimes the responsibility of handling exceptions is avoided till the end, and even the `main` method throws an exception to the caller:

```java
public class MainProgram {
   public static void main(String[] args) throws Exception {
       // ...
   }
}
```

<!-- Tällöin mahdollinen poikkeus päätyy ohjelman suorittajalle eli Javan virtuaalikoneelle, joka keskeyttää ohjelman suorituksen poikkeukseen johtavan virheen tapahtuessa. -->
Now the exception is thrown to the program executor, or the Java virtual machine. It stops the program execution when an error causing an exception to be thrown occurs.

## Throwing exceptions

<!-- Voimme heittää poikkeuksen `throw`-komennolla. Esimerkiksi `NumberFormatException`-luokasta luodun poikkeuksen heittäminen tapahtuisi komennolla `throw new NumberFormatException()`. Seuraava ohjelma päätyy aina poikkeustilaan. -->
The `throw` command throws an exception.
For example a `NumberFormatException` can be done with command `throw new NumberFormatException()`.
The following code always throws an exception.

```java
public class Program {

    public static void main(String[] args) throws Exception {
        throw new NumberFormatException(); // Program throws an exception
    }
}
```

<!-- Eräs poikkeus, johon käyttäjän ei ole pakko varautua on `IllegalArgumentException`. Poikkeuksella `IllegalArgumentException` kerrotaan että metodille tai konstruktorille annettujen parametrien arvot ovat *vääränlaiset*. IllegalArgumentException-poikkeusta käytetään esimerkiksi silloin, kun halutaan varmistaa, että parametreilla on tietyt arvot. -->
One exception which the user does not have to prepare for is `IllegalArgumentException`.
The `IllegalArgumentException` tells the user that the values given to a method or a constructor as parameters are *wrong*.
It can be used when we want to ensure certain parameter values.

<!-- Luodaan luokka `Arvosana`, joka saa konstruktorin parametrina kokonaislukutyyppisen arvosanan. -->
Lets create class `Grade`. It gets a integer representing a grade as a constructor parameter.

```java
public class Grade {
    private int grade;

    public Grade(int grade) {
        this.grade = grade;
    }

    public int getGrade() {
        return this.grade;
    }
}
```

<!-- Haluamme seuraavaksi varmistaa, että Arvosana-luokan konstruktorin parametrina saatu arvo täyttää tietyt kriteerit. Arvosanan tulee olla aina välillä 0-5. Jos arvosana on jotain muuta, haluamme *heittää poikkeuksen*. Lisätään `Arvosana`-luokan konstruktoriin ehtolause, joka tarkistaa onko arvosana arvovälin 0-5 ulkopuolella. Jos on, heitetään poikkeus `IllegalArgumentException` sanomalla `throw new IllegalArgumentException("Arvosanan tulee olla välillä 0-5");`. -->
We want that the grade fills certain criteria. The grade has to be an integer between 0 and 5. If it is something else, we want to *throw an exception*.
Let's add a conditional statement to the constructor, which checks if the grade fills the criteria.
If it does not, we throw the `IllegalArgumentException` with `throw new IllegalArgumentException("Grade must be between 0 and 5.");`.

```java
public class Grade {
    private int grade;

    public Grade(int grade) {
        if (grade < 0 || grade > 5) {
            throw new IllegalArgumentException("Grade must be between 0 and 5.");
        }

        this.grade = grade;
    }

    public int getGrade() {
        return this.grade;
    }
}
```

```java
Grade grade = new Grade(3);
System.out.println(grade.getGrade());

Grade illegalGrade = new Grade(22);
// exception happens, execution will not continue from here
```

<sample-output>

3
Exception in thread "..." java.lang.IllegalArgumentException: Grade must be between 0 and 5.

</sample-output>


<!-- Jos poikkeus on esimerkiksi tyyppiä IllegalArgumentException, tai yleisemmin ajonaikainen poikkeus, ei sen heittämisestä tarvitse kirjoittaa erikseen metodin määrittelyyn. -->
If an exception is a runtime exception, for example IllegalArgumentException, we do not have to warn about throwing it on the method declaration.

<!-- <programming-exercise name='Parametrien validointi (2 osaa)' tmcname='osa11-Osa11_11.ParametrienValidointi'> -->

<programming-exercise name='Validating parameters (2 parts)' tmcname='part11-Part11_11.ValidatingParameters'>

<!-- Harjoitellaan hieman parametrien validointia `IllegalArgumentException`-poikkeuksen avulla. Tehtäväpohjassa tulee kaksi luokkaa, `Henkilo` ja `Laskin`. Muuta luokkia seuraavasti: -->

Let's practise a little parameter validation with the `IllegalArgumentException` exception. There are two classes included with the exercise base: `Person` and `Calculator`. Modify the classes in the following manner:

<!-- <h2>Henkilön validointi</h2> -->

<h2>Validating a person</h2>

<!-- Luokan `Henkilo` konstruktorin tulee varmistaa että parametrina annettu nimi ei ole null, tyhjä tai yli 40 merkkiä pitkä. Myös iän tulee olla väliltä 0-120. Jos joku edelläolevista ehdoista ei päde, tulee konstruktorin heittää `IllegalArgumentException`-poikkeus. -->

The constructor of the class `Person` should ensure that the name given as the parameter is not null, empty, or over 40 characters in length. The age should between 0 and 120. If some of these conditions are not met, the constructor should throw an `IllegalArgumentException`.


<!-- <h2>Laskimen validointi</h2> -->

<h2>Validating the calculator</h2>


<!-- Luokan `Laskin` metodeja tulee muuttaa seuraavasti: Metodin `kertoma` tulee toimia vain jos parametrina annetaan ei-negatiivinen luku (0 tai suurempi). Metodin `binomikerroin` tulee toimia vain jos parametrit ovat ei-negatiivisia ja osajoukon koko on pienempi kuin joukon koko. Jos jompikumpi metodeista saa epäkelpoja arvoja metodikutsujen yhteydessä, tulee metodien heittää poikkeus `IllegalArgumentException`. -->

The methods of the `Calculator` class should be follow in the following manner: The method `factorial` should only work if the parameter is a non-negative number (0 or greater). The method `binomialCoefficient` should only work when the parameters are non-negative and the subset size does not exceed the set size. If these methods receive invalid parameters when they are called, they should throw an `IllegalArgumentException`

</programming-exercise>


<text-box variant='hint' name='Poikkeusten tyypit'>

<!-- Edellä todettiin seuraavaa: *...poikkeuksia on karkeasti ottaen kahdenlaisia. On poikkeuksia jotka on pakko käsitellä, ja on poikkeuksia joita ei ole pakko käsitellä.*. -->
We said *...there are roughly two categories of exceptions. Exceptions which must be handled, and exceptions which do not have to be handled.*.

<!-- Poikkeukset, jotka on pakko käsitellä, ovat tarkemmin ottaen poikkeuksia, joiden mahdollinen heittäminen ja niihin varautuminen tarkastetaan käännösaikaisesti. Tämän takia joihinkin poikkeuksiin tulee joko varautua `try-catch`-lauseella tai ne tulee heittää edelleen metodiin liitettävällä `throws`-määreellä. Tällaisia poikkeuksia ovat esimerkiksi tiedostojen käsittelyyn liittyvät poikkeukset `IOException` ja `FileNotFoundException`. -->
Exceptions which must be handled are exceptions which are checked for during compilation.
Due to this, some exceptions have to be prepared for with a `try-catch` block or by throwing them out of a method with a `throws` attribute in a method declaration.
For example exceptions related to handling files, `IOException` and `FileNotFoundException`, are this kind of exceptions.

<!-- Osa poikkeuksista on taas sellaisia, että niitä ei tarkasteta käännösaikaisesti, vaan ne saattavat tapahtua ohjelman suorituksen aikana. Tällaisiin ei ole pakko varautua `try-catch`-lauseella. Tällaisia poikkeuksia ovat esimerkiksi `IllegalArgumentException` ja `NullPointerException`. -->
Some exceptions are not checked for during compilation. They can be thrown during execution.
These kinds of exceptions do not have to be handled with a `try-catch` block. For example `IllegalArgumentException` and `NullPointerException` are this kind of exceptions.

</text-box>


## Exceptions and Interfaces

<!-- Rajapintaluokissa voidaan määritellä metodeja, jotka saattavat heittää poikkeuksen. Esimerkiksi seuraavan rajapinnan `FileServer` toteuttavat luokat heittävät *mahdollisesti* poikkeuksen metodeissa `lataa` ja `tallenna`. -->
An Interface can have methods which throw an exception.
For example the classes implementing the following `FileServer` interface *might* throw an exception form methods `load` or `save`.

```java
public interface FileServer {
    String load(String fileName) throws Exception;
    void save(String fileName, String textToSave) throws Exception;
}
```

<!-- Jos rajapinta määrittelee metodeille `throws Exception`-määreet, eli että metodit heittävät mahdollisesti poikkeuksen, tulee samat määreet olla myös rajapinnan toteuttavassa luokassa. Luokan ei kuitenkaan ole pakko heittää poikkeusta kuten alla olevasta esimerkistä näkee. -->
If an interface declares `throws Exception` attribute to a method, so these methods might throw an exception, the class implementing this interface must also have these attributes.
However the class does not have to throw an error, as we can see below.

```java
public class TextServer implements FileServer {

    private Map<String, String> data;

    public TextServer() {
        this.data = new HashMap<>();
    }

    @Override
    public String load(String fileName) throws Exception {
        return this.data.get(fileName);
    }

    @Override
    public void save(String fileName, String textToSave) throws Exception {
        this.data.put(fileName, textToSave);
    }
}
```

## Details of the exception


<!-- Poikkeusten käsittelytoiminnallisuuden sisältämä `catch`-lohko määrittelee catch-osion sisällä poikkeuksen johon varaudutaan `catch (*Exception e*)`. Poikkeuksen tiedot tallennetaan `e`-muuttujaan. -->
A `catch` block defines which exception to prepare for with `catch (*Exception e*)`.
The details of the exception are saved to the `e` variable.

```java
try {
    // program code which might throw an exception
} catch (Exception e) {
    // details of the exception are stored in the variable e
}
```

<!-- Luokka `Exception` tarjoaa hyödyllisiä metodeja. Esimerkiksi metodi `printStackTrace()` tulostaa *stack tracen*, joka kertoo miten poikkeukseen päädyttiin. Tutkitaan seuraavaa metodin `printStackTrace()` tulostamaa virhettä. -->
The `Exception` class has some useful methods. For example `printStackTrace()` prints the *stack trace*, which shows how we ended up with an exception.
Below is a stack trace printed by the `printStackTrace()` method.

<sample-output>

Exception in thread "main" java.lang.NullPointerException
  at package.Class.print(Class.java:43)
  at package.Class.main(Class.java:29)

</sample-output>


<!-- Stack tracen lukeminen tapahtuu alhaalta ylöspäin. Alimpana on ensimmäinen kutsu, eli ohjelman suoritus on alkanut luokan `Luokka` metodista `main()`. Luokan `Luokka` main-metodin rivillä 29 on kutsuttu metodia `tulosta()`. Metodin `tulosta` rivillä 43 on tapahtunut poikkeus `NullPointerException`. Poikkeuksen tiedot ovatkin hyvin hyödyllisiä virhekohdan selvittämisessä. -->
We read a stack trace from the bottom up. At the bottom is the first call, so the execution of the program has begun from the `main()` method of the `Class` class.
Line 29 of the main method of the `Class` class calls the `print()` method.
Line 43 of the `print` method has thrown a `NullPointerException` exception.
The details of an exception are very useful when trying to pinpoint where an error happens.


<quiz id="c9dd9445-960a-5b60-88f6-d2de2323ea56"></quiz>


<!-- <programming-exercise name='Sensorit ja lämpötila (4 osaa)' tmcname='osa11-Osa11_12.SensoritJaLampotila'> -->

<programming-exercise name='Sensors and temperature (4 parts)' tmcname='part11-Part11_12.SensorsAndTemperature'>


<!-- Kaikki luotavat luokat tulee sijoittaa pakkaukseen `sovellus`. -->

All the classes should be placed inside the `application` package.

<!-- Käytössämme on seuraava rajapinta: -->

We have the following interface at our disposal:

<!-- ```java
public interface Sensori {
    boolean onPaalla();  // palauttaa true jos sensori on päällä
    void paalle();       // käynnistä sensorin
    void poisPaalta();   // sulkee sensorin
    int mittaa();        // palauttaa sensorin lukeman jos sensori on päällä
                         // jos sensori ei ole päällä heittää poikkeuksen
                         // IllegalStateException
}
``` -->

```java
public interface Sensor {
    boolean isOn();    // returns true if the sensor is on
    void setOn();      // sets the sensor on
    void setOff();     // sets the sensor off
    int read();        // returns the value of the sensor if it's on
                       // if the sensor is not on, throw an IllegalStateException
}
```

<!-- <h2>Vakiosensori</h2> -->

<h2>Standard sensor</h2>

<!-- Tee luokka `Vakiosensori` joka toteuttaa rajapinnan `Sensori`. -->

Create a class called `StandardSensor` that implements the interface `Sensor`.

<!-- Vakiosensori on koko ajan päällä. Metodien paalle ja poisPaalta kutsuminen ei tee mitään. Vakiosensorilla tulee olla konstruktori, jonka parametrina on kokonaisluku. Metodikutsu `mittaa` palauttaa aina konstruktorille parametrina annetun luvun. -->

A standard sensor is always on. Calling the methods setOn and setOff has no effect. The StandardSensor must have a constructor that takes one integer parameter. The method call `read` returns the number that was given to the constructor.

<!-- Esimerkki: -->

An example:

<!-- ```java
public static void main(String[] args) {
    Vakiosensori kymppi = new Vakiosensori(10);
    Vakiosensori miinusViis = new Vakiosensori(-5);

    System.out.println(kymppi.mittaa());
    System.out.println(miinusViis.mittaa());

    System.out.println(kymppi.onPaalla());
    kymppi.poisPaalta();
    System.out.println(kymppi.onPaalla());
}
``` -->

```java
public static void main(String[] args) {
    StandardSensor ten = new StandardSensor(10);
    StandardSensor minusFive = new StandardSensor(-5);

    System.out.println(ten.read());
    System.out.println(minusFive.read());

    System.out.println(ten.isOn());
    ten.setOff();
    System.out.println(ten.isOn());
}
```

<sample-output>

10
-5
true
true

</sample-output>


<!-- <h2>Lampomittari</h2> -->

<h2>TemperatureSensor</h2>

<!-- Tee luokka `Lampomittari`, joka toteuttaa rajapinnan `Sensori`. -->

Create a class `TemperatureSensor` that implements the `Sensor` interface.

<!-- Aluksi lämpömittari on poissa päältä. Kutsuttaessa metodia `mittaa` kun mittari on päällä mittari arpoo luvun väliltä -30...30 ja palauttaa sen kutsujalle. Jos mittari ei ole päällä, heitetään poikkeus `IllegalStateException`. -->

At first a temperature sensor is off. When the method `read` is called and the sensor is on, the sensor randomly chooses an integer in the range -30...30 and returns it. If the sensor is off, the method `read` throws an `IllegalStateException`.

<!-- Käytä Javan valmista luokkaa <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Random.html" target="_blank" rel="noopener">Random</a> satunnaisen luvun arpomiseen. Saat luvun väliltä 0...60 kutsulla `new Random().nextInt(61);` -- väliltä -30...30 arvotun luvun saa vähentämällä väliltä 0...60 olevasta luvusta sopiva luku. -->

Use the ready-made Java class <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Random.html" target="_blank" rel="noopener">Random</a> to choose the random number. You'll get an integer in the range 0...60 by calling `new Random().nextInt(61);` -- to get a random integer in the range -30...30 you'll have to subtract a suitable number from the random number in the range 0...60.

<br/>


<!-- <h2>Keskiarvosensori</h2> -->

<h2>Average sensor</h2>

<!-- Tee luokka `Keskiarvosensori`, joka toteuttaa rajapinnan `Sensori`. -->

Create a class called `AverageSensor` that implements the interface `Sensor`.

<!-- Keskiarvosensori sisältää useita sensoreita. Rajapinnan `Sensori` määrittelemien metodien lisäksi keskiarvosensorilla on metodi `public void lisaaSensori(Sensori lisattava)` jonka avulla keskiarvosensorin hallintaan lisätään uusi sensori. -->

An average sensor includes multiple sensors. In addition to the methods defined in the `Sensor` interface, the AverageSensor has the method `public void addSensor(Sensor toAdd)` that can be used to add a new sensor for the average sensor to control.

<!-- Keskiarvosensori on päällä silloin kuin *kaikki* sen sisältävät sensorit ovat päällä. Kun keskiarvosensori käynnistetään, täytyy kaikkien sen sisältävien sensorien käynnistyä jos ne eivät ole käynnissä. Kun keskiarvosensori suljetaan, täytyy ainakin yhden sen sisältävän sensorin mennä pois päältä. Saa myös käydä niin että kaikki sen sisältävät sensorit menevät pois päältä. -->

An AverageSensor is on when *all* its sensors are on. When `setOn` is called, all the sensors must be set on. When `setOff` is called, at least one of the sensors must be set off. It's also acceptable to set off all the sensors.

<!-- Keskiarvosensorin metodi `mittaa` palauttaa sen sisältämien sensoreiden lukemien keskiarvon (koska paluuarvo on `int`, pyöristyy lukema alaspäin kuten kokonaisluvuilla tehdyissä jakolaskuissa). Jos keskiarvosensorin metodia `mittaa` kutsutaan sensorin ollessa poissa päältä, tai jos keskiarvosensorille ei vielä ole lisätty yhtään sensoria heitetään poikkeus `IllegalStateException`. -->

The method `read` of AverageSensor returns the average of the `read` methods of its sensors (since the return value is `int`, the number is rounded down as is the case with integer division). If this method is called while the AverageSensor is off, or if no sensors have been added to it, the method should throw an `IllegalStateException`.

<!-- Seuraavassa sensoreja käyttävä esimerkkiohjelma (huomaa, että sekä Lämpömittarin että Keskiarvosensorin konstruktorit ovat parametrittomia): -->

Here follows an example program that uses the sensors (NB: the constructors of both TemperatureSensor and AverageSensor are non-parameterized):


<!-- ```java
public static void main(String[] args) {
    Sensori kumpula = new Lampomittari();
    kumpula.paalle();
    System.out.println("lämpötila Kumpulassa " + kumpula.mittaa() + " astetta");

    Sensori kaisaniemi = new Lampomittari();
    Sensori helsinkiVantaa = new Lampomittari();

    Keskiarvosensori paakaupunki = new Keskiarvosensori();
    paakaupunki.lisaaSensori(kumpula);
    paakaupunki.lisaaSensori(kaisaniemi);
    paakaupunki.lisaaSensori(helsinkiVantaa);

    paakaupunki.paalle();
    System.out.println("lämpötila Pääkaupunkiseudulla " + paakaupunki.mittaa() + " astetta");
}
``` -->

```java
public static void main(String[] args) {
    Sensor kumpula = new TemperatureSensor();
    kumpula.setOn();
    System.out.println("temperature in Kumpula " + kumpula.mittaa() + " degrees Celsius");

    Sensor kaisaniemi = new TemperatureSensor();
    Sensor helsinkiVantaaAirport = new TemperatureSensor();

    AverageSensor helsinkiRegion = new AverageSensor();
    helsinkiRegion.addSensor(kumpula);
    helsinkiRegion.addSensor(kaisaniemi);
    helsinkiRegion.addSensor(helsinkiVantaaAirport);

    helsinkiRegion.setOn();
    System.out.println("temperature in Helsinki region " + helsinkiRegion.read() + " degrees Celsius");
}
```

<!-- Alla olevan esimerkin tulostukset riippuvat arvotuista lämpötiloista: -->

The prints below depend on which temperatures are randomly returned:


<!-- <sample-output>

lämpötila Kumpulassa 11 astetta
lämpötila Pääkaupunkiseudulla 8 astetta

</sample-output> -->

<sample-output>

temperature in Kumpula 11 degrees Celsius
temperature in Helsinki region 8 degrees Celsius

</sample-output>


<!-- <h2>Kaikki mittaukset</h2> -->

<h2>All readings</h2>

<!-- Lisää luokalle Keskiarvosensori metodi `public List<Integer> mittaukset()`, joka palauttaa listana kaikkien keskiarvosensorin avulla suoritettujen mittausten tulokset. Seuraavassa esimerkki metodin toiminnasta: -->

Add to the class AverageSensor the method `public List<Integer> readings()`. The method should return the results of all the executed readings that the average sensor has done as a list. Here is an example:

<!-- ```java
public static void main(String[] args) {
    Sensori kumpula = new Lampomittari();
    Sensori kaisaniemi = new Lampomittari();
    Sensori helsinkiVantaa = new Lampomittari();

    Keskiarvosensori paakaupunki = new Keskiarvosensori();
    paakaupunki.lisaaSensori(kumpula);
    paakaupunki.lisaaSensori(kaisaniemi);
    paakaupunki.lisaaSensori(helsinkiVantaa);

    paakaupunki.paalle();
    System.out.println("lämpötila Pääkaupunkiseudulla " + paakaupunki.mittaa() + " astetta");
    System.out.println("lämpötila Pääkaupunkiseudulla " + paakaupunki.mittaa() + " astetta");
    System.out.println("lämpötila Pääkaupunkiseudulla " + paakaupunki.mittaa() + " astetta");

    System.out.println("mittaukset: " + paakaupunki.mittaukset());
}
``` -->

```java
public static void main(String[] args) {
    Sensor kumpula = new TemperatureSensor();
    Sensor kaisaniemi = new TemperatureSensor();
    Sensor helsinkiVantaaAirport = new TemperatureSensor();

    AverageSensor helsinkiRegion = new AverageSensor();
    helsinkiRegion.addSensor(kumpula);
    helsinkiRegion.addSensor(kaisaniemi);
    helsinkiRegion.addSensor(helsinkiVantaaAirport);

    helsinkiRegion.setOn();
    System.out.println("temperature in Helsinki region " + helsinkiRegion.read() + " degrees Celsius");
    System.out.println("temperature in Helsinki region " + helsinkiRegion.read() + " degrees Celsius");
    System.out.println("temperature in Helsinki region " + helsinkiRegion.read() + " degrees Celsius");

    System.out.println("readings: " + helsinkiRegion.readings());
}
```

<!-- Alla olevan esimerkin tulostukset riippuvat jälleen arvotuista lämpötiloista: -->

Again, the exact prints depend on the randomized readings:

<sample-output>

temperature in Helsinki region -10 degrees Celsius
temperature in Helsinki region -4 degrees Celsius
temperature in Helsinki region 5 degrees Celsius

readings: [-10, -4, 5]

</sample-output>

</programming-exercise>
