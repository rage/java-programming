---
path: '/part-6/3-introduction-to-testing'
title: 'Introduction to testing'
hidden: true
---

<!-- <text-box variant='learningObjectives' name='Oppimistavoitteet'> -->
<text-box variant='learningObjectives' name='Learning Objectives'>

<!-- - Osaat kertoa joitakin ohjelmistovirheistä johtuvia ongelmia.
- Tiedät mikä on stack trace, tunnet askeleet virheiden selvittämiseen ja osaat antaa tekstimuotoista testisyötettä Scannerille.
- Tiedät mistä yksikkötestauksessa on kyse ja osaat kirjoittaa yksikkötestejä.
- Tiedät testivetoisen ohjelmistokehitysmenetelmän. -->

- Can tell about some issues caused by software bugs.
- You know what a stack trace is, the steps taken in troubleshooting, and can give textual test inputs to a Scanner.
- You know what unit testing is all about and you can write unit tests.
- You know about test-driven software development.

</text-box>

<!-- Otetaan seuraavaksi ensiaskeleet ohjelmien testaamiseen. -->

Let's take our first steps in the world of program testing.

<!-- ## Virhetilanteet ja ongelman ratkaiseminen askel kerrallaan -->

## Error Situations and Step-By-Step Problem Resolving

<!-- Ohjelmia luodessa niihin päätyy virheitä. Joskus virheet eivät ole niin vakavia, ja aiheuttavat päänvaivaa lähinnä ohjelman käyttäjälle. Joskus toisaalta virheet voivat johtaa hyvinkin vakaviin seurauksiin. Varmaa on joka tapauksessa se, että ohjelmoimaan opetteleva ihminen tekee paljon virheitä.

Virheitä ei kannata missään nimessä pelätä tai välttää, sillä virheitä tekemällä oppii parhaiten. Pyri siis myös välillä rikkomaan työstämääsi ohjelmaa, jolloin pääset tutkimaan virheilmoitusta ja tarkastelemaan kertooko virheilmoitus jotain tekemästäsi virheestä. -->

Errors end up in the programs that we write. Sometimes the errors are not serious and cause headache mostly to users of the program. Occasionally, however, mistakes can lead to very serious consequences. In any case, it's certain that a person learning to program makes many mistakes.

You should never be afraid of or avoid making mistakes since that is the best way to learn. For this reason, try to break the program that you're working on from time to time to investigate error messages, and to see if those messages tell you something about the error(s) you've made.

<!-- <text-box variant='hint' name='Ohjelmistovirhe'> -->
<text-box variant='hint' name='Software Error'>

<!-- Osoitteessa <a href="http://sunnyday.mit.edu/accidents/MCO_report.pdf" target="_blank">http://sunnyday.mit.edu/accidents/MCO_report.pdf</a> oleva raportti kuvaa erään hieman vakavamman ohjelmistovirheestä johtuneen tapaturman sekä ohjelmistovirheen. -->

The report in the address <a href="http://sunnyday.mit.edu/accidents/MCO_report.pdf" target="_blank">http://sunnyday.mit.edu/accidents/MCO_report.pdf</a > describes an incident resulting from a more serious software error and also the error itself.

<br/>

<!-- Ohjelmistovirhe liittyi siihen, että käytetty ohjelma odotti, että ohjelmoija käyttäisi <a href="https://fi.wikipedia.org/wiki/Kansainv%C3%A4linen_yksikk%C3%B6j%C3%A4rjestelm%C3%A4" target="_blank">kansainvälistä yksikköjärjestelmää</a> laskuissa (metrit, kilogrammat, ...). Ohjelmoija oli kuitenkin käyttänyt <a href="https://en.wikipedia.org/wiki/English_Engineering_units" target="_blank">amerikkalaista mittajärjestelmää</a> erään järjestelmän osan laskuissa, jolloin satelliitin navigointiin liittynyt automaattinen korjausjärjestelmä ei toiminut oikein. -->

The bug in the software was caused by the fact that the program in question expected the programmer to use the <a href = "https://en.wikipedia.org/wiki/International%C3%A4line_unit%C3%B6j%C3%A4systems%C3%A4" target = " _blank "> International System of Units </a> (meters, kilograms, ...) in the calculations. However, the programmer had used the <a href="https://en.wikipedia.org/wiki/English_Engineering_units" target="_blank"> American Measurement System </a> for some of the system's calculations, which prevented the satellite navigation auto-correction system from working as inteded.

<br/>

<!-- Satelliitti tuhoutui. -->

The satellite was destroyed.

</text-box>

<!-- Ohjelmien muuttuessa monimutkaisemmiksi, tulee virheiden löytämisestäkin haastavampaa. NetBeansiin integroitu debuggeri voi olla avuksi virheiden löytämisessä. Debuggerin käyttöä on esitelty kurssimateriaaliin upotetuilla videoilla; niiden kertaamisesta ei ole koskaan haittaa. -->

As programs grow in their complexity, finding errors becomes even more challenging. The debugger integrated into NetBeans can help you find errors. The use of the debugger is introduced with videos embedded in the course material; going over them is always an option.

## Stack Trace

<!-- Kun ohjelmassa tapahtuu virhe, ohjelma tyypillisesti tulostaa ns. stack tracen, eli niiden metodikutsujen listan, joiden seurauksena virhetilanne syntyi. Stack trace voi näyttää esimerkiksi seuraavalta: -->

When an error occurs in a program, the program typically prints something called a stack trace, i.e., the list of method calls that resulted in the error. For example, a stack trace might look like this:

<!-- <sample-output>
  Exception in thread "main" ...
      at Ohjelma.main(Ohjelma.java:15)
</sample-output> -->
<sample-output>
  Exception in thread "main" ...
      at Program.main(Program.java:15)
</sample-output>

<!-- Listan alussa kerrotaan minkälainen virhe tapahtui (tässä ...), ja seuraavalla rivillä kerrotaan missä virhe tapahtui. Rivi "at Ohjelma.main(Ohjelma.java:15)" sanoo, että virhe tapahtui Ohjelma.java-tiedoston rivillä 15. -->

The type of error is stated at the beginning of the list, and the following line tells us where the error occurred. The line "at Program.main(Program.java:15)" says that the error occurred at line number 15 in the Program.java file.

<!-- <sample-output>
  at Ohjelma.main(Ohjelma.java:15)
</sample-output> -->
<sample-output>
  at Program.main(Program.java:15)
</sample-output>

<!-- ## Muistilista virheenselvitykseen -->

<!-- ## Muistilista virheenselvitykseen -->

## Checklist for Troubleshooting

<!-- Jos koodisi ei toimi etkä tiedä missä on virhe, näillä askeleilla pääset alkuun.

1. Sisennä koodisi oikein ja selvitä, puuttuuko sulkuja.
2. Tarkista ovatko käytetyt muuttujat oikean nimisiä.
3. Testaa ohjelman kulkua erilaisilla syötteillä, ja selvitä minkälaisella syötteellä ohjelma ei toimi halutusti. Jos sait virheen testeistä, testit saattavat myös kertoa käytetyn syötteen.
4. Lisää ohjelmaan tulostuskomentoja, joissa tulostat käytettävien muuttujien arvoja ohjelman suorituksen eri vaiheissa.
5. Tarkista, että kaikki käyttämäsi muuttujat on alustettu. Jos tätä ei ole tehty, seuraa virhe NullPointerException.
6. Jos ohjelmasi aiheuttaa poikkeuksen, kannattaa ehdottomasti kiinnittää huomiota poikkeuksen yhteydessä olevaan <em>stack traceen</em>, eli niiden metodikutsujen listaan, minkä seurauksena poikkeuksen aiheuttanut tilanne syntyi.
7. Opettele käyttämään debuggeria, aiemmin nähdyllä videolla pääsee alkuun. -->

If your code doesn't work and you don't know where the error is, these steps will help you get started.

1. Indent your code properly and find out if there are any missing parentheses.
2. Verify that the variables used are correctly named.
3. Test the program flow with different inputs and find out the sort of input that causes the program to not work as desired. If you received an error in the tests, the tests may also indicate the input used.
4. Add print commands to the program in which you print out the values of the variables used at various stages of the program's execution.
5. Verify that all variables you are using are initialized. If they aren't, a NullPointerException error will occur.
6. If your program causes an exception, you should definitely pay attention to the <em>stack trace</em> associated with the exception, which is the list of method calls that resulted in the situation that caused the exception.
7. Learn how to use the debugger. The earlier video will get you started.

<!-- ## Testisyötteen antaminen Scannerille -->

## Passing Test Input to Scanner

<!-- Ohjelman testaaminen käsin on usein työlästä. Syötteen antaminen on mahdollista automatisoida esimerkiksi syöttämällä Scanner-oliolle luettava merkkijono. Alla on annettu esimerkki siitä, miten ohjelmaa voi testata automaattisesti. Ohjelmassa syötetään ensin viisi merkkijonoa, jonka jälkeen syötetään aiemmin nähty merkkijono. Tämän jälkeen yritetään syöttää vielä uusi merkkijono. Merkkijonoa "kuusi" ei pitäisi esiintyä sanajoukossa.

Testisyötteen voi antaa merkkijonona Scanner-oliolle konstruktorissa. Jokainen testisyötteessä annettava rivinvaihto merkitään merkkijonoon kenoviivan ja n-merkin yhdistelmänä "\n". -->

Manually testing the program is often laborious. It's possible to automate the passing of input by, for example, passing the string to be read into a Scanner object. You'll find an example below of how to test a program automatically. The program first enters five strings, followed by the previously seen string. After that, we try to enter a new string. The string "six" should not appear in the word set.

The test input can be given as a string to the Scanner object in the constructor. Each line break in the test feed is marked on the string with a combination of a backslash and an n character "\n".

<!-- ```java
String syote = "yksi\n" + "kaksi\n"  +
                "kolme\n" + "nelja\n" +
                "viisi\n" + "yksi\n"  +
                "kuusi\n";

Scanner lukija = new Scanner(syote);

ArrayList<String> luetut = new ArrayList<>();

while (true) {
    System.out.println("Anna syote: ");
    String rivi = lukija.nextLine();
    if (luetut.contains(rivi)) {
        break;
    }

    luetut.add(rivi);
}

System.out.println("Kiitos!");

if (luetut.contains("kuusi")) {
    System.out.println("Joukkoon lisättiin arvo, jota sinne ei olisi pitänyt lisätä.");
} -->

```java
String input = "one\n" + "two\n"  +
                "three\n" + "four\n" +
                "five\n" + "one\n"  +
                "six\n";

Scanner reader = new Scanner(input);

ArrayList<String> read = new ArrayList<>();

while (true) {
    System.out.println("Enter an input: ");
    String line = scanner.nextLine();
    if (read.contains(line)) {
        break;
    }

    read.add(line);
}

System.out.println("Thank you!");

if (read.contains("six")) {
    System.out.println("A value that should not have been added to the group was added to it.");
}
```

<!-- Ohjelma tulostus näyttää vain ohjelman antaman tulostuksen, ei käyttäjän tekemiä komentoja. -->

The program's output only shows the one provided by the program, and no user commands.

<!-- <sample-output>

Anna syote:
Anna syote:
Anna syote:
Anna syote:
Anna syote:
Anna syote:
Kiitos!

</sample-output> -->
<sample-output>

Enter an input:
Enter an input:
Enter an input:
Enter an input:
Enter an input:
Enter an input:
Thank you!

</sample-output>

<!-- Merkkijonon antaminen Scanner-luokan konstruktorille korvaa näppäimistöltä luettavan syötteen. Merkkijonomuuttujan `syote` sisältö siis "simuloi" käyttäjän antamaa syötettä. Rivinvaihto syötteeseen merkitään `\n`:llä. Jokainen yksittäinen rivinvaihtomerkkiin loppuva osa syote-merkkijonossa siis vastaa yhtä `nextLine()`-komentoon annettua syötettä.

Kun haluat testata ohjelmasi toimintaa jälleen käsin, vaihda Scanner-olion konstruktorin parametriksi `System.in`, eli järjestelmän syötevirta. Voit toisaalta halutessasi myös vaihtaa testisyötettä, sillä kyse on merkkijonosta.

Ohjelman toiminnan oikeellisuus tulee edelleen tarkastaa ruudulta. Tulostus voi olla aluksi hieman hämmentävää, sillä automatisoitu syöte ei näy ruudulla ollenkaan. Lopullinen tavoite on automatisoida myös ohjelman tulostuksen oikeellisuden tarkastaminen niin hyvin, että ohjelman testaus ja testituloksen analysointi onnistuu "nappia painamalla". Palaamme aiheeseen myöhemmissä osissa. -->

Passing a string to the constructor of the Scanner class replaces input read from the keyboard. As such, the content of the string variable `input` 'simulates' user input. A line break in the input is marked with `\n`. Therefore, each part ending in an newline character in a given string input corresponds to one input given to the `nextLine()` command.

When testing your program again manually, change the parameter Scanner object constructor to `System.in`, i.e., to the system's input stream. Alternatively, you can also change the test input, since we're dealing with a string.

The working of the program should continue to be checked on-screen. The print output can be a little confusing at first, as the automated input is not visible on the screen at all. The ultimate aim is to also automate the checking of the correctness of the output so that the program can be tested and the test result analyzed with the "push of a button". We shall return to this in later sections.

<!-- ## Yksikkötestaus -->

## Unit Testing

<!-- Edellä esitetty menetelmä automaattiseen testaamiseen missä ohjelmalle syötetyt syötteet muutetaan on varsin kätevä, mutta kuitenkin melko rajoittunut. Isompien ohjelmien testaaminen edellä kuvatulla tavalla on haastavaa. Eräs ratkaisu tähän on yksikkötestaus, missä ohjelman pieniä osia testataan erikseen.

Yksikkötestauksella tarkoitetaan lähdekoodiin kuuluvien yksittäisten osien kuten luokkien ja niiden tarjoamien metodien testaamista. Luokkien ja metodien rakenteen suunnittelussa käytettävän ohjesäännön -- jokaisella metodilla ja luokalla tulee olla yksi selkeä vastuu -- noudattamisen tai siitä poikkeamisen huomaa testejä kirjoittaessa. Mitä useampi vastuu metodilla on, sitä monimutkaisempi testi on. Jos laaja sovellus on kirjoitettu yksittäiseen metodiin, on testien kirjoittaminen sitä varten erittäin haastavaa ellei jopa mahdotonta. Vastaavasti, jos sovellus on pilkottu selkeisiin luokkiin ja metodeihin, on testienkin kirjoittaminen suoraviivaista.

Testien kirjoittamisessa hyödynnetään tyypillisesti valmiita yksikkötestauskirjastoja, jotka tarjoavat metodeja ja apuluokkia testien kirjoittamiseen. Javassa käytetyin yksikkötestauskirjasto on <a href="http://junit.org/" target="_blank" rel="noopener">JUnit</a>, johon löytyy myös tuki lähes kaikista ohjelmointiympäristöistä. Esimerkiksi NetBeans osaa automaattisesti etsiä JUnit-testejä projektista -- jos testejä löytyy, ne näytetään projektin alla Test Packages -kansiossa. -->

The automated testing mehtod laid out above where the input to a program is modified is quite convenient, but limited nonetheless. Testing larger programs in this way is challenging. One solution to this is unit testing, where small parts of the program are tested in isolation.

Unit testing refers to the testing of individual components in the source code, such as classes and their provided methods. The writing of tests revelas whether each class and method observs or deviates from the guideline of each method and class having a single, clear responsibility. The more responsibility the method has, the more complex the test. If a large application is written in a single method, writing tests for it becomes very challenging, if not impossible. Similarly, if the application is broken into clear classes and methods, then writing tests is straightforward.

Ready-made unit test libraries are commonly used in writing tests, which provide methods and help classes for writing tests. The most common unit testing library in Java is <a href="http://junit.org/" target="_blank" rel="noopener"> JUnit </a>, which is also supported by almost all programming environments. For example, NetBeans can automatically search for JUnit tests in a project -- if any are found, they will be displayed under the project in the Test Packages folder.

<br/>

<!-- Tarkastellaan yksikkötestien kirjoittamista esimerkin kautta. Oletetaan, että käytössämme on seuraava luokka Laskin, ja haluamme kirjoittaa sitä varten automaattisia testejä. -->

Let's take a look at writing unit tests with the help of an example. Let's assume that we have the following Calculator class at our use, and want to write automated tests for it.

<!-- ```java
public class Laskin {

    private int arvo;

    public Laskin() {
        this.arvo = 0;
    }

    public void summa(int luku) {
        this.arvo = this.arvo + luku;
    }

    public void erotus(int luku) {
        this.arvo = this.arvo + luku;
    }

    public int getArvo() {
        return this.arvo;
    }
}
``` -->

```java
public class Calculator {

    private int value;

    public Calculator() {
        this.value = 0;
    }

    public void sum(int number) {
        this.value = this.value + number;
    }

    public void substract(int number) {
        this.value = this.value + number;
    }

    public int getValue() {
        return this.value;
    }
}
```

<!-- Laskimen toiminta perustuu siihen, että se muistaa aina edellisen laskuoperaation tuottaman tuloksen. Seuraavat laskuoperaatiot lisätään aina edelliseen lopputulokseen. Yllä olevaan laskimeen on jäänyt myös pieni copy-paste -ohjelmoinnista johtuva virhe. Metodin erotus pitäisi vähentää arvosta, mutta nyt se lisää arvoon.

Yksikkötestien kirjoittaminen aloitetaan testiluokan luomisella. Testiluokka luodaan Test Packages -kansion alle. Kun testaamme luokkaa `Laskin`, testiluokan nimeksi tulee `LaskinTest`. Nimen lopussa oleva merkkijono `Test` kertoo ohjelmointiympäristölle, että kyseessä on testiluokka. Ilman merkkijonoa Test luokassa olevia testejä ei suoriteta. (Huom! Testit luodaan NetBeansissa Test Packages -kansion alle.)

Testiluokka `LaskinTest` on aluksi tyhjä. -->

The calculator works by always remembering the result produced by the preceding calculation. All subsequent calculations are always added to the previous result. A minor error resulting from copying and pasting has been left in the calculator above. The method substract should deduct from the value, but it currently adds to it.

Unit test writing begins by creating a test class, which is created under the Test-Packages folder. When testing the `Calculator` class, the test class is to be called `CalculatorTest`. The string `Test` at the end of the name tells the programming environment that this is a test class. Without the string Test, tests in the class would not be executed. (Note: Tests are created in NetBeans under the Test Packages folder.)

The test class `CalculatorTest` is initially empty.

<!-- ```java
public class LaskinTest {

}
``` -->

```java
public class CalculatorTest {

}
```

<!-- Testit ovat testiluokassa olevia metodeja ja jokainen testi testaa yksittäistä asiaa. Aloitetaan luokan Laskin testaaminen -- luodaan ensin testimetodi, jossa varmistetaan, että juuri luodun laskimen sisältämä arvo on 0. -->

Tests are methods of the test class where each test tests an individual unit. Let's begin testing the class -- we start off by creating a test method that confirms that the newly created calculator's value is intially 0.

<!-- ```java
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class LaskinTest {

    @Test
    public void laskimenArvoAlussaNolla() {
        Laskin laskin = new Laskin();
        assertEquals(0, laskin.getArvo());
    }
}
``` -->

```java
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {

    @Test
    public void calculatorInitialValueZero() {
        Calculator caclulator = new Calculator();
        assertEquals(0, caclulator.getValue());
    }
}
```

<!-- Yllä olevassa metodissa laskimenArvoAlussaNolla luodaan ensin laskinolio. Tämän jälkeen käytetään JUnit-testikehyksen tarjoamaa assertEquals-metodia arvon tarkistamiseen. Metodi tuodaan luokasta Assert komennolla import static, ja sille annetaan parametrina odotettu arvo -- tässä 0 -- sekä laskimen palauttama arvo. Jos metodin assertEquals arvot poikkeavat toisistaan, testin suoritus ei pääty hyväksytysti. Jokaisella testimetodilla tulee olla "annotaatio" `@Test`. Tämä kertoo JUnit-testikehykselle, että kyseessä on suoritettava testimetodi.

Testien suorittaminen onnistuu valitsemalla projekti oikealla hiirennapilla ja klikkaamalla vaihtoehtoa Test.

Testien suorittaminen luo output-välilehdelle (tyypillisesti NetBeansin alalaidassa) tulosteen, jossa on testiluokkakohtaiset tilastot. Alla olevassa esimerkissä on suoritettu pakkauksessa laskin olevan testiluokan LaskinTest testit. Testejä suoritettiin 1, joista yksikään ei epäonnistunut -- epäonnistuminen tarkoittaa tässä sitä, että testin testaama toiminnallisuus ei toiminut oletetusti. -->

In the calculatorInitialValueZero method a calculator object is first created. The assertEquals method provided by the JUnit test framework is then used to check the value. The method is imported from the Assert class with the import Static command, and it's given the expected value as a parameter - 0 in this instance - and the value returned by the calculator. If the values of the assertEquals method values ​​differ, the test will not pass. Each test method should have an "annotation" `@ Test`. This tells the JUnit test framework that this is an executable test method.

To run the tests, select the project with the right-mouse button and click Test.

Running the tests prints to the output tab (typically at the bottom of NetBeans) that contains some information specific to each test class. In the example below, tests of the CalculatorTest class from the package are executed. The number of tests executed were 1, none of which failed -- failure in this context means that the functionality tested by the test did not work as expected. ->

<!-- <sample-output>

Testsuite: LaskinTest
Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.054 sec

test-report:
test:
BUILD SUCCESSFUL (total time: 0 seconds)

</sample-output> -->
<sample-output>

Testsuite: CalculatorTest
Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.054 sec

test-report:
test:
BUILD SUCCESSFUL (total time: 0 seconds)

</sample-output>

<!-- Lisätään testiluokkaan summaa ja erotusta lisäävää toiminnallisuutta. -->

Let's add functionality for summing and substacting to the test class.

<!--
```java
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class LaskinTest {

    @Test
    public void laskimenArvoAlussaNolla() {
        Laskin laskin = new Laskin();
        assertEquals(0, laskin.getArvo());
    }

    @Test
    public void arvoViisiKunSummataanViisi() {
        Laskin laskin = new Laskin();
        laskin.summa(5);
        assertEquals(5, laskin.getArvo());
    }

    @Test
    public void arvoMiinusKaksiKunErotetaanKaksi() {
        Laskin laskin = new Laskin();
        laskin.erotus(2);
        assertEquals(-2, laskin.getArvo());
    }
}
``` -->

```java
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {

    @Test
    public void calculatorInitialValueZero() {
        Calculator calculator = new Calculator();
        assertEquals(0, calculator.getValue());
    }

    @Test
    public void valueFiveWhenFiveAdded() {
        Calculator calculator = new Calculator();
        calculator.sum(5);
        assertEquals(5, calculator.getValue());
    }

    @Test
    public void valueMinusTwoWhenTwoSubstracted() {
        Calculator calculator = new Calculator();
        calculator.substract(2);
        assertEquals(-2, calculator.getValue());
    }
}
```

<!-- Testien suorittaminen antaa seuraavanlaisen tulostuksen. -->

Executing the tests produces the following output.

<!-- <sample-output>

Testsuite: LaskinTest
Tests run: 3, Failures: 1, Errors: 0, Skipped: 0, Time elapsed: 0.059 sec

Testcase: arvoMiinusKaksiKunErotetaanKaksi(LaskinTest): FAILED
expected:<-2> but was:<2>
junit.framework.AssertionFailedError: expected:<-2> but was:<2>
at LaskinTest.arvoMiinusKaksiKunErotetaanKaksi(LaskinTest.java:25)

Test LaskinTest FAILED
test-report:
test:
BUILD SUCCESSFUL (total time: 0 seconds)

</sample-output> -->
<sample-output>

Testsuite: CalculatorTest
Tests run: 3, Failures: 1, Errors: 0, Skipped: 0, Time elapsed: 0.059 sec

Testcase: valueMinusTwoWhenTwoSubstracted(CalculatorTest): FAILED
expected:<-2> but was:<2>
junit.framework.AssertionFailedError: expected:<-2> but was:<2>
at CalculatorTest.valueMinusTwoWhenTwoSubstracted(CalculatorTest.java:25)

Test CalculatorTest FAILED
test-report:
test:
BUILD SUCCESSFUL (total time: 0 seconds)

</sample-output>

<!-- Tulostus kertoo, että kolme testiä suoritettiin. Yksi niistä päätyi virheeseen. Testitulostuksessa on tieto myös testin rivistä, jossa virhe tapahtui (25) sekä tieto odotetusta (-2) ja saadusta arvosta (2). Kun testien suoritus päättyy virheeseen, NetBeans näyttää testien suoritukseen liitttyvän virhetilanteen myös visuaalisena.

Edellisillä testeillä kaksi testeistä menee läpi, mutta yhdessä on tapahtunut virhe. Korjataan luokkaan Laskin jäänyt virhe. -->

The output tells us that three tests were executed. One of them failed. The test output also informs us of the line in which the error occured (25), and of the expected (-2) and actual (2) values. Whenever the execution of tests ends in an error, NetBeans also displays the error state visually.

With the previous tests two passed, but one of them resulted in an error. Let's fix the mistake left in the Calculator class.

<!-- ```java
// ...
public void erotus(int luku) {
    this.arvo -= luku;
}
// ...
``` -->

```java
// ...
public void substract(int number) {
    this.value -= number;
}
// ...
```

<!-- Kun testit suoritetaan uudestaan, testit menevät läpi. -->

When the test are run again, they pass.

<!-- <sample-output>

Testsuite: LaskinTest
Tests run: 3, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.056 sec

test-report:
test:
BUILD SUCCESSFUL (total time: 0 seconds)

</sample-output> -->
<sample-output>

Testsuite: CalculatorTest
Tests run: 3, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.056 sec

test-report:
test:
BUILD SUCCESSFUL (total time: 0 seconds)

</sample-output>

<!-- <text-box variant='hint' name='Yksikkötestaus ja sovelluksen osat'>

Yksikkötestaaminen on hyvin monimutkaista mikäli sovellus on kirjoitettu "mainiin". Jotta testaaminen olisi helpompaa, tulee sovellus pilkkoa pieniin osiin, joista kullakin on selkeä vastuu. Harjoittelimme edellisessä osassa juuri tätä käyttöliittymää ja sovelluslogiikkaa eriyttäessämme. Testien kirjoittaminen sovelluksen osille, kuten vaikkapa edellisessä osassa toteutetulle luokalle `Vitsipankki`, on merkittävästi helpompaa kuin "mainiin" kirjoitetulle ohjelmalle.

</text-box> -->
<text-box variant='hint' name='Unit Testing and the Parts of an Application'>

Unit testing tends to be extremely complicated if the whole application has been written in "Main". To make testing easier, the app should split into small parts, each having a clear responsibility. In the previous section, we practiced this when we seperated the user interface from the application logic. Writing tests for parts of an application, such as the 'JokeManager' class from the previous section is significantly easier than writing them for program contained in "Main" in its entirety.

</text-box>

<!-- ## Testivetoinen ohjelmistokehitys -->

## Test-Driven Development

<!-- Testivetoinen ohjelmistokehitys (<a href="https://en.wikipedia.org/wiki/Test-driven_development" target="_blank" rel="noopener">Test-driven development</a>) on ohjelmistokehitysprosessi, joka perustuu ohjelman rakentamiseen pienissä osissa. Testivetoisessa ohjelmistokehityksessä ohjelmoija kirjoittaa aina ensin automaattisesti suoritettavan yksittäistä tietokoneohjelman osaa tarkastelevan testin.

Testi ei mene läpi, sillä testin täyttävä toiminnallisuus eli tarkasteltava tietokoneohjelman osa puuttuu. Kun testi on kirjoitettu, ohjelmaan lisätään toiminnallisuus, joka täyttää testin vaatimukset. Testit suoritetaan uudestaan, jonka jälkeen -- jos kaikki testit menevät läpi -- lisätään uusi testi tai vaihtoehtoisesti -- jos testit eivät mene läpi -- korjataan aiemmin kirjoitettua ohjelmaa. Ohjelman sisäistä rakennetta korjataan eli refaktoroidaan tarvittaessa siten, että ohjelman toiminnallisuus pysyy samana mutta rakenne selkiytyy.

Testivetoinen ohjelmistokehitys koostuu viidestä askeleesta, joita toistetaan kunnes ohjelman toiminnallisuus on valmis.

1. Kirjoita testi. Ohjelmoija päättää, mitä ohjelman toiminnallisuutta testataan, ja kirjoittaa toiminnallisuutta varten testin.

2. Suorita testit ja tarkista menevätkö testit läpi. Kun uusi testi on kirjoitettu, testit suoritetaan. Jos testin suoritus päättyy hyväksyttyyn tilaan, testissä on todennäköisesti virhe ja se tulee korjata -- testin pitäisi testata vain toiminnallisuutta, jota ei ole vielä toteutettu.

3. Kirjoita toiminnallisuus, joka täyttää testin vaatimukset. Ohjelmoija toteuttaa toiminnallisuuden, joka täyttää vain testin vaatimukset. Huomaa, että tässä ei toteuteta asioita, joita testi ei vaadi -- toiminnallisuutta lisätään vain vähän kerrallaan.

4. Suorita testit. Jos testit eivät pääty hyväksyttyyn tilaan, kirjoitetussa toiminnallisuudessa on todennäköisesti virhe. Korjaa toiminnallisuus -- tai, jos toiminnallisuudessa ei ole virhettä -- korjaa viimeksi toteutettu testi.

5. Korjaa ohjelman sisäistä rakennetta. Kun ohjelman koko kasvaa, sen sisäistä rakennetta korjataan tarvittaessa. Liian pitkät metodit pilkotaan useampaan osaan ja ohjelmasta eriytetään käsitteisiin liittyviä luokkia. Testejä ei muuteta, vaan niitä hyödynnetään ohjelman sisäiseen rakenteeseen tehtyjen muutosten oikeellisuuden varmistamisessa -- jos ohjelman rakenteeseen tehty muutos muuttaa ohjelman toiminnallisuutta, testit varoittavat siitä, ja ohjelmoija voi korjata tilanteen. -->

<a href="https://en.wikipedia.org/wiki/Test-driven_development" target="_blank" rel="noopener"> Test-driven development </a> is a software development process that's based on constructing a piece of software in small iterations. In test-driven software development, the first thing a programmer always does is write an automatically-executable test, which tests a single piece of the computer program.

The test will not pass because the functionality that satisfies the test, i.e., the part of the computer program to be examined, is missing. Once the test has been written, functionality that meets the test requirements is added to the program. The tests are run again. If all tests pass, a new test is added, or alternatively, if the tests fail, the already-written program is corrected. If necessary, the internal structure of the program will be corrected or refactored, so that the functionality of the program remains the same, but the structure becomes clearer.

Test-driven software development consists of five steps that are repeated until the functionality of the program is complete.

1. Write a test. The programmer decides which program functionality to test and writes a test for it.

2. Run the tests and check if the tests pass. When a new test is written, the tests are run. If the test passes, the test is most likely erroneous and should be corrected - the test should only test functionality that hasn't yet been implemented.

3. Write the functionality that meets the test's requirements. The programmer implements functionality that only meets the test requirements. Note: this doesn't do things that the test does not require - functionality is only added in small increments.

4. Perform the tests. If the tests fail, there is likely to be an error in the functionality written. Correct the functionality - or, if there is no error in the functionality, fix the latest test that was performed.

5. Repair the internal structure of the program. As the size of the program increases, its internal structure is adjusted as needed. Methods that are too long are broken down into multiple parts and classes representing concepts are isolated. The tests are not modified, but are instead used to verify the correctness of the changes made to the program's internal structure - if a change in the program structure changes the functionality of the program, the tests will produce a warning and the programmer can remedy the situation.

<pdf-slideshow>

[a](../slideshows/test-driven-development.pdf)

</pdf-slideshow>

<br/>

<!-- <programming-exercise name='Tehtavat (2 osaa)' tmcname='osa06-Osa06_13.Tehtavat'> -->
<programming-exercise name='Tehtavat (2 osaa)' tmcname='osa06-Osa06_13.Tehtavat'>
<programming-exercise name='Exercises (2 parts)' tmcname='part06-Part06_13.Exercises'>

<!-- Tehtäväpohjassa tulee edellisen esimerkin alkutilanne -- tehtäväpohjaan on jo lisätty yksikkötestaukseen tarvittava JUnit-kirjasto. Seuraa esimerkkiä ja luo Tehtavienhallinnalta haluttu toiminnallisuus testivetoista ohjelmistokehitystä noudattaen. Kun olet saanut edellisen esimerkin loppuun asti, lisää sovellukseen vielä testit tehtävien poistamiseen sekä testien vaatima toiminnallisuus. -->

The exercise base contains the initial state of the previous example -- it already includes the JUnit unit testing library. Follow the steps of the example, and use the principles of test-driven software development to give the wanted functionality for the exercise management program.

<!-- Tehtävä on jaettu kahteen osaan. Osat ovat seuraavat: -->

The exercise is in two parts:

<!-- 1. Noudata esimerkkiä kunnes esimerkissä refaktoroidaan ohjelma ja luodaan luokka Tehtava. Luo luokat `TehtavienhallintaTest` ja `Tehtavienhallinta` sekä niihin esimerkissä lisätty toiminnallisuus. -->

1. Follow the steps of the example up until it's time to refactor the program and to create the class 'Exercise'. Create the classes `ExerciseManagementTest` and `ExerciseManagement`, and complete them with what the example instructs.

<!-- 2. Noudata esimerkkiä loppuun asti, eli tee myös esimerkissä kuvattu refaktorointi. -->

2. Follow the example all the way to the end. In other words, refactor the program as instructed.

<!-- Päivitä luokan Ohjelma luokkametodia `osiaToteutettu` palauttamaan valmiiksi saamasi osan numero. Voit palauttaa tehtävän vaikket tekisikään kumpaakin osaa, jolloin saat pisteitä tehtävän niistä osista, jotka olet tehnyt. -->

Update the `partsCompleted` class method of the MainProgram to return the highest part that you have completed. You can return the exercise even if you don't complete the second part, in which case you will receive the point for the first one. Returning 2 means you have completed both.

<!-- Esimerkiksi, kun olet saanut ensimmäisen osan tehtyä eli noudattanut esimerkkiä refaktorointiin asti, olet vaiheessa 1, jolloin metodin `osiaToteutettu` tulisi palautta arvo `1`. -->

If you crave to develop the program further (not awarded with points), you can try using test-driven development to first write a test (or a few) for removing exercises, and then implement that feature in your program. This is purely for your own amusement and is not reflected in the points in any manner!

</programming-exercise>

<!-- <text-box variant='hint' name='Lisää ohjelmistojen testaamisesta'>

Yksikkötestaus on vain osa ohjelmiston testaamista. Yksikkötestaamisen lisäksi ohjelmiston toteuttaja toteuttaa myös integraatiotestejä, joissa tarkastellaan komponenttien kuten luokkien yhteistoiminnallisuutta, sekä käyttöliittymätestejä, joissa testataan sovelluksen käyttöliittymää käyttöliittymän tarjoamien elementtien kuten nappien kautta.

Näitä testaamiseen liittyviä menetelmiä tarkastellaan tarkemmin muunmuassa kursseilla ohjelmistotekniikka sekä ohjelmistotuotanto.

</text-box> -->
<text-box variant='hint' name='Lisää ohjelmistojen testaamisesta'>

Unit testing is only a part of software testing. On top of unit testing, a developer also performs integration tests that examine the interoperability of components, such as classes, and interface tests that test the application's interface through elements provided by the interface, such as buttons.

These testing methods are covered in more detail in the more advanced courses.

</text-box>
