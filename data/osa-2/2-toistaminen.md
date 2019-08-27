---
path: '/osa-2/2-toistaminen'
title: 'Toiminnallisuuden toistaminen'
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

<!-- - Tunnet käsitteen toistolause ja osaat luoda ohjelman, joka sisältää toistolauseen. -->
- You are familiar with loops and know how to utilize them in your program.

<!-- - Osaat käyttää `break`-komentoa toistolauseen suorituksen lopettamiseen ja toistolausetta seuraavaan käskyyn siirtymiseen. -->
- You know how to use the `break`-command in order to break out of the loop and onto the next statement.

<!-- - Osaat käyttää `continue`-komentoa toistolauseen alkuun palaamiseen. -->
- You know how to use `continue`-command to go to the beginning of the loop.

<!-- - Osaat luoda ohjelman, joka lukee käyttäjältä syötettä kunnes käyttäjä syöttää tietynlaisen syötteen -- esim luku 0 tai merkkijono "loppu", jonka jälkeen ohjelma kertoo ennen lopettamista syötetyistä syötteistä (esim. syötteiden lukumäärä, lukujen tapauksessa summa ja keskiarvo). -->
- You are able to create a program that reads user inputs until a specific input is given, for example number 0 or a string "end", after which the program prints something about the given inputs (if the inputs were numbers, then the sum and the average of the numbers)

</text-box>

<!-- Tietokoneen sisältämä käskyjen suorittamiseen erikoistunut prosessori pystyy -- moderneissa tietokoneissa -- suorittamaan yli miljardi (konekielistä) käskyä sekunnissa. Tässä osassa tutustumme toistettavan ohjelmakoodin määrittelyyn toistolauseiden avulla. -->
<!-- TODO Missä muodossa tulisi ilmaista? -->
Computer contains a processor that can, in modern computers, process over billions of (machinecode) commands per second. In this section we will get familiar with writing program code that's going to be repeated with loops.

<!-- Motivoidaan toistolauseiden käyttöä hieman. Alla on esimerkki ohjelmasta, missä kysytään käyttäjältä viisi lukua ja lasketaan niiden summa. -->
As a motivation to using loops, there's an example code bellow which asks five numbers from the user and calculates their sum.

```java
Scanner scanner = new Scanner(System.in);
int sum = 0;

System.out.println("Input a number: ");
sum = sum + Integer.valueOf(scanner.nextLine());

System.out.println("Input a number: ");
sum = sum + Integer.valueOf(scanner.nextLine());

System.out.println("Input a number: ");
sum = sum + Integer.valueOf(scanner.nextLine());

System.out.println("Input a number: ");
sum = sum + Integer.valueOf(scanner.nextLine());

System.out.println("Input a number: ");
sum = sum + Integer.valueOf(scanner.nextLine());

System.out.println("The sum of the numbers is " + sum);
```

<!-- Hoitaa asian, mutta ei kovin tyylikkäästi. Entä jos ohjelman pitäisi lukea sata tai vaikkapa tuhat lukua ja tulostaa niiden summa? Entä jos ohjelman pitäisi lukea kolme lukua? -->
It does the trick, but not quite elegantly. What if the program had to read one hundred or perhaphs one thousand numbers and print their sum? What if the program had to read only three numbers?

<!-- Tämän ongelman voi ratkaista toistolauseella, joka pitää kirjaa sekä summasta että lukemiskerroista. Viiden luvun summan tulostava toistolauseella toteutettava ohjelma näyttää seuraavalta. -->
This problem can be solved with a loop, which keeps track of both the sum and the amount of read numbers. The program that prints the sum of five numbers looks now as follows

```java
Scanner scanner = new Scanner(System.in);

int numbersRead = 0;
int sum = 0;

while (true) {
    if (numbersRead == 5) {
        break;
    }

    System.out.println("Input number");
    sum = sum + Integer.valueOf(scanner.nextLine());
    numbersRead = numbersRead + 1;
}

System.out.println("The sum of the numbers is " + sum);
```

<!-- Tutustutaan seuraavaksi toistolauseisiin. -->
Next, we will get familiar with loops.

<!-- ## Toistolause ja ikuinen toisto -->
## loop and infinite loop
<!-- Toistolause sisältää lausekkeen, jonka perusteella päätellään jatketaanko toistoa, sekä lohkon, joka sisältää toistettavan lähdekoodin. Toistolauseen muoto on seuraava. -->
The loop contains a statement which determines if the code within the loop should be repeated. The form of a loop is as follows

```java
while (_statement_) {
    // TODO häh?
    //* aaltosuluilla rajatun lohkon sisältö
    //* lohkossa voi olla käytännössä
    //* rajaton määrä sisältöä

    // The content of the block surrounded by curly brackets
    // the block can have practically endless amount of content
}
```

<!-- Käytämme toistaiseksi lausekkeena `true`-arvoa, eli boolean-tyyppista arvoa "totta". Tämä tarkoittaa sitä, että toistolauseen toistamista jatketaan aina kun ohjelma on tilantessa, missä selvitetään tuleeko toistolauseen suoritusta jatkaa. Tämä tapahtuu sekä silloin kun ohjelman suoritus päätyy toistolauseeseen ensimmäistä kertaa että silloin kun ohjelman suoritus päätyy toistolauseen lohkon loppuun. -->
<!-- TODO Muokkaa "execution of the program first ..." parempaan muotoon -->
We will use the value `true` as the loop's statement. This means that the loop always decides to repeat when it enters the statement. This happens when the execution of the program first arrives to the loop statement and also when it's at the end of the loop block.

<!-- Toistolauseen suoritus etenee askeleittain lause kerrallaan. Seuraava ohjelma tulostaa merkkijonoa _osaan ohjelmoida!_ ikuisesti eli "äärettömän monta kertaa": -->
The execution of loop proceeds line by line. The following program outputs _I can program_ infite amount of time.
```java
while (true) {
    System.out.println("I can program!");
}
```

<!-- Ikuisen toiston sisältävä ohjelma ei sammu itsestään. Ohjelman sammutus tapahtuu NetBeansissa tulostusikkunan vasemmalla puolella olevaa punaista nappia painamalla. -->
The program that runs infinitely does not close on its own. The program can be closed from the red square button located in the Netbean's output window.


<!-- ## Toistolauseen päättäminen -->
# Ending a loop

<!-- Toistolauseen saa päätettyä komennolla `break`. Kun tietokone suorittaa komennon `break`, siirtyy ohjelman suoritus toistolauseen lohkoa seuraavaan komentoon. -->
The loop statement can be broken out of with command 'break'. When a computer executes command 'break', the program moves from the loop section onto the next command.

<!-- Alla olevassa esimerkissä on ohjelma, joka tulostaa luvut yhdestä viiteen. Ohjelmassa määritellään toistolauseen sisällä käsiteltävä luku ennen toistolauseen lohkoa. Tällöin muuttujan kasvatus onnistuu. -->
In the example below is a program that prints numbers from one to five. In the program, a variable used within the loop is defined before the loop. This allows incrementation of the variable.

```java
int number = 1;

while (true) {
    System.out.println(number);
    if (number >= 5) {
        break;
    }

    number = number + 1;
}

System.out.println("Ready!");
```

<sample-output>

1
2
3
4
5
Ready!

</sample-output>

<!-- Toistolauseesta poistutaan esimerkiksi kun käyttäjä syöttää tietynlaisen syötteen tai mikäli toistolauseessa tehtävä laskenta päätyy haluttuun lopputulokseen. Tällaiset ohjelmat sisältävät sekä toistolauseen, jota käytetään toistettavan ohjelman määrittelyyn, että toistolauseen sisällä olevan ehtolauseen, jota käytetään toistolauseesta poistumiseen käytettävän ehdon täyttymisen tarkasteluun. -->
Breaking out of the loop occurs when a user enters a specific input or whether the loop's calculations ends in wanted result. These kinds of programs contains a loop, which is used in
defining a code which is going to be repeated, and the condition for the loop that is used to check whether or not to exit the loop.

<!-- Toistolauseessa voidaan myös kysyä käyttäjältä syötettä. Toistolauseessa useasti käytettävät muuttujat (kuten Scanner-lukija) määritellään ennen toistolausetta, toistokohtaiset muuttujat (kuten luettu arvo) määritellään toistolauseessa. -->
In the loop, user can be asked for an input. The variables that are used many times (such as Scanner) are defined before the loop, and the loop specific variables (such as read value) is defined in the loop.

<!-- Alla olevassa esimerkissä ohjelma kysyy käyttäjältä pitäisikö toistolauseesta poistua. Mikäli käyttäjä syöttää merkkijonon "k", ohjelman suoritus siirtyy toistolausetta seuraavaan komentoon, jonka suorittamisen jälkeen ohjelman suoritus päättyy. -->
In the example below, program asks the user whether or not to exit from the loop. If the user inputs a string "k", the executuion of program moves to command after the loop, after which the execution of the program ceases.

```java
Scanner scanner = new Scanner(System.in);

while (true) {
    System.out.println("Exit? (y exits)");
    String input = scanner.nextLine();
    if (input.equals("y")) {
        break;
    }

    System.out.println("Ok! Let's carry on!");
}

System.out.println("Ready!");
```

<!-- Ohjelma toimii esimerkiksi seuraavasti. Alla käyttäjän syötteet ovat merkitty punaisella. -->
The program in the example works as follows. The users inputs are in red color.
<sample-output>

Shall we carry on? (y exits)
**no**
Ok! Let's carry on!
Shall we carry on? (y exits)
**non**
Ok! Let's carry on!
Shall we carry on? (y exits)
**y**
Ready!

</sample-output>

<programming-exercise name="Carry on?" tmcname='part02-Part02_05.CarryOn'>

<!-- Kirjoita edellä olevaa toistolause-esimerkkiä mukaillen ohjelma, joka kysyy käyttäjältä "Jatketaanko?" kunnes käyttäjä syöttää merkkijonon "ei". -->
Write a program by using the loop-example that asks "Shall we carry on?" until the user inputs a string "no".

<sample-output>

Shall we carry on?
**yes**
Shall we carry on?
**ye**
Shall we carry on?
**y**
Shall we carry on?
**no**

</sample-output>

</programming-exercise>


<!-- Edellisessä esimerkissä ohjelma lukee käyttäjältä merkkijonomuotoisia syötteitä. Vastaavanlaisen ohjelman toteutus onnistuu myös muilla muuttujatyypeillä. Alla olevassa esimerkissä käyttäjältä pyydetään lukuja kunnes käyttäjä syöttää luvun nolla. -->
In the previous example, the program reads string type inputs. Similarly, the program can be done with other types of variables. The program below asks numbers from the user until the user inputs a zero.

```java
Scanner scanner = new Scanner(System.in);

while (true) {
    System.out.println("Input a number, 0 to quit");
    int command = Integer.valueOf(scanner.nextLine());
    if (command == 0) {
        break;
    }

    System.out.println("You input " + command);
}

System.out.println("Done, thank you!");
```

<!-- Ohjelman suoritus on esimerkiksi seuraavanlainen. -->
The output of the program is for example:

<sample-output>

Input a number, 0 to quit
**5**
You input 5
Input a number, 0 to quit
**-2**
You input -2
Input a number, 0 to quit
**0**
Done, thank you!

</sample-output>

<programming-exercise name="Are we there yet" tmcname='part02-Part02_06.AreWeThereYet'>

<!-- Kirjoita edellä olevaa esimerkkiä mukaillen ohjelma, joka kysyy käyttäjältä lukuja kunnes käyttäjä syöttää luvun 4. -->
Follow the example above and write a program that asks the user to give numbers until the user gives number 4.

<sample-output>

Give a number:
**5**
Give a number:
**744**
Give a number:
**22**
Give a number:
**-1**
Give a number:
**4**

</sample-output>

</programming-exercise>


<!-- ## Toistolauseen alkuun palaaminen -->
## Returning to the start of the loop

<!-- Toistolauseen alkuun palataan silloin kun suoritus päätyy toistolauseen lohkon loppuun eli kaikki toistolauseen lohkossa olevat komennot on suoritettu. Toistolauseen alkuun voi palata myös muualta kuin toistolauseen lopusta erillisellä `continue`-komennolla. Kun tietokone suorittaa komennon `continue`, siirtyy ohjelman suoritus toistolauseen alkuun. -->
The beginning of the loop is returned to when the execution ends up in the end of the loop. This means that all the commands in the loop has been executed. You can also return to the beginning of the loop from other locations besides the end of the loop with command `continue`. When the computer executes command `continue`, the execution of the program moves to the beginning of the loop.

<!-- Alla olevassa esimerkissä esitellään `continue`-komennon käyttöä. Ohjelma pyytää käyttäjää syöttämään positiivisia lukuja. Mikäli käyttäjä syöttää negativiisen luvun tai nollan, ohjelma tulostaa viestin "Epäkelpo luku! Yritä uudelleen.", jonka jälkeen suoritus palaa toistolauseen alkuun. Edellisessä esimerkissä ohjelma lukee käyttäjältä merkkijonomuotoisia syötteitä. Vastaavanlaisen ohjelman toteutus onnistuu myös muilla muuttujatyypeillä. Alla olevassa esimerkissä käyttäjältä pyydetään lukuja kunnes käyttäjä syöttää luvun nolla. -->
<!-- TODO epäkelpo = unfit? -->
The example below showcases the usage of the command `continue`. The program asks a user to input a positive numbers. If the user inputs a negative number or a zero, the program prints a message "Unfit number, try again", after which the execution returns to the beginning of the loop. In the previous example, the program reads a string inputs from a user. Similar program with different input types is possible. In the example below the user is asked for numbers until the user inputs a zero.

```java
Scanner scanner = new Scanner(System.in);

while (true) {
    System.out.println("Insert positive integers");
    int number = Integer.valueOf(scanner.nextLine());

    if (number <= 0) {
        System.out.println("Unfit number! Try again.");
        continue;
    }

    System.out.println("Your input was " + number);
}
```

<!-- Ohjelman suoritus toistuu yllä olevassa esimerkissä ikuisesti, sillä toistolauseesta poistumiseen käytettävää `break`-komentoa ei ohjelmassa ole. Mikäli haluamme, että toistolauseesta voi poistua, tulee ohjelmaan lisätä `break`-komento. -->
The execution of the program is repeated for ever in the example above because the `break` command,
which exits the loop, is not used within the loop. In order to exit the loop, the `break` command must be added to the program.

<!-- Alla olevassa esimerkissä ohjelmaa on muokattu siten, että käyttäjältä pyydetään positiivisia lukuja. Mikäli käyttäjä syöttää negatiivisen luvun, kerrotaan että luku oli epäkelpo ja palataan toistolauseen alkuun. Mikäli käyttäjä syöttää nollan, toistolauseesta poistutaan. -->
In the example below, the program is modified in such a way that the user is asked to input positive numbers. If the user inputs a negative number, the program tells that the number was unfit and return to the beginning of the loop. If the number was a zero, the program exits the loop.

```java
Scanner scanner = new Scanner(System.in);

while (true) {
    System.out.println("Input positive numbers.");
    int number = Integer.valueOf(scanner.nextLine());

    if (number == 0) {
        break;
    }

    if (number < 0) {
        System.out.println("Unfit number! Try again.");
        continue;
    }

    System.out.println("Your input was " + number);
}
```

TODO: tänne tarttee visualisoinnin
<!-- TODO: this requires a visualization -->

<quiznator id="5c1f6c8b64cf001162cb9790"></quiznator>

<programming-exercise name="Only positives" tmcname='part02-Osa02_07.OnlyPositives'>

<!-- Kirjoita ohjelma, joka kysyy käyttäjältä lukuja. Mikäli luku on negatiivinen (eli pienempi kuin nolla), käyttäjälle tulostetaan viesti "Epäkelpo luku" ja käyttäjältä kysytään uutta lukua. Jos taas luku on nolla, lukujen lukeminen lopetetaan ja ohjelma poistuu toistolauseesta. Mikäli luku on positiivinen, ohjelma tulostaa luvun toisen potenssin. -->
Write a program that asks a user for numbers. If the number is negative (less than zero) the program prints for user "Unsuitable number" and asks user for a new number. If the number is zero, the program exits the loop. If the number is positive, the program prints the number power of two.
<sample-output>

Give a number:
**5**
25
Give a number:
**4**
16
Give a number:
**-3**
Unsuitable number
Give a number:
**1**
1
Give a number:
**0**

</sample-output>

</programming-exercise>

<!-- Edellisessä tehtävässä toteutettiin ohjelma, joka lukee käyttäjältä lukuja. Mikäli käyttäjä syöttää negatiivisen luvun, ohjelma ilmoittaa että luku oli epäkelpo, ja mikäli käyttäjä syöttää nollan, ohjelmasta poistutaan. Eräs ratkaisu tehtävään on seuraavanlainen. -->
In the previous exercise a program was made that asks user for numbers. If the user did input a negative number, the program would infor that the number was unfit and if the user did input a zero, the program would have exited. A possible solution of the exercise is as follows

```java
Scanner scanner = new Scanner(System.in);

while (true) {
    System.out.println("Input a number");
    int number = Integer.valueOf(scanner.nextLine());

    if (number == 0) {
        break;
    }

    if (number < 0) {
        System.out.println("Unfit number");
        continue;
    }

    System.out.println(number * number);
}
```

<!-- Ohjelman voisi toteuttaa myös muotoilemalla ehtolauseet toisella tavalla. Alla olevassa esimerkissä erillisten ehtolauseiden sijaan ehtolauseet on yhdistetty. -->
Program could be made by modifying the if-statement to another form. In the example below; instead of the seperate if-statements, there's one if-statement.
```java
Scanner scanner = new Scanner(System.in);

while (true) {
    System.out.println("Input a number");
    int number = Integer.valueOf(scanner.nextLine());

    if (number == 0) {
        break;
    } else if (number < 0) {
        System.out.println("Unfit number");
        continue;
    }

    System.out.println(number * number);
}
```

<!-- Kumpi edellä olevista vaihtoehdoista on selkeämpi? -->
Which of the previous examples was more clear?

<!-- Tarkastellaan edellisten ohjelmien selkeyttä toisen esimerkin kautta. Alla oleva ohjelma kysyy käyttäjältä lukua. Mikäli luku on negatiivinen, käyttäjälle kerrotaan että luku on epäkelpo ja siirrytään toistolauseen alkuun. Mikäli luku on nolla, toistolauseesta poistutaan. Muissa tilanteissa käyttäjälle tulostetaan syötetyn luvun neliö, eli syötetty luku kerrottuna itsellään. -->
Let's examine the clarity of the previous programs through an example. Below, the program asks user for a number. If the number is negative, the user is informed that the number is unfit and the execution of the program goes to the beginning of the loop. If the number is zero, the program exits the loop. In other cases the program prints the square of the number, that is the number times itself.

```java
Scanner scanner = new Scanner(System.in);

while (true) {
    System.out.println("Input a number ");
    int number = Integer.valueOf(scanner.nextLine());

    if (number < 0) {
        System.out.println("Unfit number");
        continue;
    }

    if (number == 0) {
        break;
    }

    System.out.println(number * number);
}
```

<!-- Myös tämän ohjelman voi toteuttaa yhdistämällä ehtolauseet. Tällöin toteutus olisi seuraavanlainen. -->
This program can also be done by combining the if-statements. Here the implementations woud be the following.

```java
Scanner scanner = new Scanner(System.in);

while (true) {
    System.out.println("Input a number ");
    int number = Integer.valueOf(scanner.nextLine());

    if (number < 0) {
        System.out.println("Unfit number");
    } else if (number == 0) {
        break;
    } else {
        System.out.println(number * number);
    }
}
```

<!-- Tarkastellaan edellisiä ohjelmia kommentoituna. Jokaista palaa edeltää kommentit, jotka pyrkivät selittämään mitä ohjelmassa tapahtuu. Alla erillisillä ehtolauseilla toteutettu ohjelma. -->
Let's examine the previous programs with comments. Before every command there's a comment that aims to explain what's happening in hte program. Below, a program done with seperate if-statements.

```java
// The task is to read an input from the user //Tehtävänä syötteen lukeminen käyttäjältä
Scanner scanner = new Scanner(System.in);

// The task is to repeat the block until the block is exited
while (true) {
    // The task is to ask user for an input
    System.out.println("Input a number ");
    // The task is to read a number from the user
    int number = Integer.valueOf(scanner.nextLine());

    // The task is to guard and prevent unfit numbers
    // for further processing
    if (number < 0) {
        System.out.println("Unfit number");
        continue;
    }

    // The task is to check if the loop should be exited
    if (number == 0) {
        break;
    }

    // The task is to print the square of the number
    System.out.println(number * number);
}
```

<!-- Huomaat, että yllä jokaisella ehtolauseella on ohjelmassa yksi selkeä tehtävä. -->
Note that every if-statement has a one clear task.

<!-- Kun kommentoimme ohjelman, joka sisältää ehtolauseet yhdistettynä, kommentit ovat seuraavat. -->
When we comment the program that contains a combined if-statment, the comments are the following.

```java
// The task is to read an input from the user // Tehtävänä syötteen lukeminen käyttäjältä
Scanner scanner = new Scanner(System.in);

// The task is to repeat the block until the block is exited// Tehtävänä lohkon toistaminen kunnes lohkosta poistutaan
while (true) {
    // The task is to ask user for an input
    System.out.println("Input a number ");
    // The task is to read a number from the user
    int number = Integer.valueOf(scanner.nextLine());

    // The purpose of the if-else if-else block?
    // The task is the processing of the number?
    if (number < 0) {
        System.out.println("Unfit number");
    } else if (number == 0) {
        break;
    } else {
        System.out.println(number * number);
    }
}
```

<!-- Huomaamme, että `if-else if-else`-rakenteelle on vaikea määritellä yksi selkeä tehtävä. Ohjelmia suunniteltaessa ja toteuttaessa kannattaakin pyrkiä tilanteeseen, missä jokaisella ohjelman osalla on yksi selkeä tehtävä. Tämä teema tulee toistumaan kurssilla. -->
We realise, that for the `if-else if-else`-block it's hard to give on clear task. While designing a program, it is convenient to aim for a situation in which every part of the program has a clear task. This theme will be repeated throughout the course.
TODO: quiz


<!-- ## Laskentaa toistolauseiden avulla -->
## Calculation with loops

<!-- Toistolauseita hyödynnetään usein asioiden laskemisessa. Esimerkiksi ohjelmat, joissa käsitellään määrittelemätöntä määrää käyttäjän syöttämiä lukuja perustuvat toistolauseseen. Tällaisissa ohjelmissa tulostetaan tyypillisesti jonkinlaisia tilastoja luetuista luvuista tai muista syötteistä toistolauseen jälkeen. -->
Loops are used in computing several things. For example, programs that process unknown amount of users inputted numbers use loops. These kinds of programs typically print out some sort of a statistics of read numbers or other inputs after the loop.

<!-- Jotta ohjelma voi tulostaa toistolauseen jälkeen tietoja toistolauseen suorituksesta, tulee tietoa säilöä ja muokata toistolauseen aikana. -->
In order for program to print out information after the loop, the information has to be saved and modified during the loop.


<!-- Mikäli tiedon tallentamiseen käytettävä muuttuja esitellään toistolauseen lohkon sisällä, on muuttuja käytössä vain toistolauseen lohkon sisällä sekä sen alla määritellyissä lohkoissa, mutta ei toistolauseen lohkon ulkopuolella. -->
Whether the variable used to store the data is introduced within the loop, the variable is then only available within the lop and nowhere else.

<!-- Luodaan ohjelma, jonka tarkoituksena on laskea ja tulostaa käyttäjän syöttämien ykkösten lukumäärä. Tehdään ensin toimimaton versio ja tarkastellaan lohkojen toimintaa. -->
Let's create a program with a purpose of computing and printing out the amount of user inputted number ones. Let's first create a inoperative version and examine the action of the blocks.

```java
Scanner scanner = new Scanner(System.in);

// The task is to read an input from the user
while (true) {

    // The task is to keep count of number ones
    int ones = 0;

    System.out.println("Input a number (0 exits): ");
    // The task is to read a user inputted number
    int number = Integer.valueOf(scanner.nextLine());

    // The task is to exit the loop if the user
    // has inputted zero
    if (number == 0) {
        break;
    }

    // The task is to increase the amount of ones
    // if the user inputs a number one
    if (number == 1) {
        ones = ones + 1;
    }
}

// The task is to print out the total of ones
// This doesn't work because the variable ones has been
// introduced within the loop
System.out.println("The total of ones: " + ones);
```

<!-- Edellinen ohjelma ei toimi, sillä muuttuja `ykkosia` esitellään toistolauseen lohkon sisällä ja sitä yritetään käyttää ohjelman lopussa toistolauseen lohkon ulkopuolelta. Muuttuja on olemassa vain sen lohkon sisällä missä se on määritelty. Mikäli tulostus `System.out.println("Ykkösiä yhteensä: " + ykkosia);` olisi toistolauseen sisällä, ohjelma toimisi mutta ei toivotusti. Tarkastellaan tätä vielä seuraavaksi. -->
The previous program does not work, because the variable `ones` has been introduced within the loop and tried to access it after the loop in the end of the program. The variable only exists in the loop. If the printing `System.out.println("The total of ones: " + ones);` would be inside the loop the program would work, but not in the way it was supposed to. Let's examine this once more.


```java
Scanner scanner = new Scanner(System.in);

// The task is to read an input from the user
while (true) {

    // The task is to keep count of number ones
    int ones = 0;

    System.out.println("Insert a number (0 lopettaa): ");
    // The task is to read a user inputted number
    int number = Integer.valueOf(scanner.nextLine());

    // The task is to exit the loop if the user
    // has inputted zero
    if (number == 0) {
        break;
    }

    // The task is to increase the amount of ones
    // if the user inputs a number one
    if (number == 1) {
        ones = ones + 1;
    }

    // The task is to print out the total of ones
    System.out.println("The total of ones: " + ones);
}
```

<!-- Yllä oleva esimerkki toimii, mutta ei kuten toivomme. Alla ohjelman toimintaesimerkki. -->
The example above works, but not in a way we hoped it would. Below the example output of the program

<sample-output>

Insert a number (0 exits)
**5**
The total of ones: 0
Insert a number (0 exits)
**1**
The total of ones: 1
Insert a number (0 exits)
**1**
The total of ones: 1
Insert a number (0 exits)
**2**
The total of ones: 0
Insert a number (0 exits)
**0**

</sample-output>

<!-- Mikäli haluat käyttää muuttujaa toistolauseen jälkeen (ja halutessasi toistolauseessa), tulee muuttuja esitellä ennen toistolausetta. -->
If you wish to use the variable after a loop, you have to introduced it before the loop.

<!-- Alla olevassa esimerkissä ohjelma laskee syötettyjen ykkösten lukumäärän. Syötteitä luetaan kunnes käyttäjä syöttää luvun 0, jonka jälkeen tulostetaan luettujen ykkösten lukumäärä. Ohjelmassa käytetään muuttujaa `ykkosia` ykkösten lukumäärän ylläpitoon. -->
The example bellow the program computes the total of number ones inputted. The inputs are read until the user inputs a number zero after which the program prints the total of inputted number ones. The program uses variable `ones` to keep track of the number ones.
```java
Scanner scanner = new Scanner(System.in);

// The task is to keep track of number ones
int ones = 0;

// The task is to read an input from the user
while (true) {
    System.out.println("Syötä luku (0 lopettaa): ");
    // The task is to read a user inputted number
    int number = Integer.valueOf(scanner.nextLine());

    // The task is to exit the loop if the user
    // has inputted zero
    if (number == 0) {
        break;
    }

    // The task is to increase the amount of ones
    // if the user inputs a number one
    if (number == 1) {
        ones = ones + 1;
    }
}

// The task is to print out the total of ones
System.out.println("The total of ones: " + ones);
```

<!-- Alla on esimerkki ohjelman toiminnasta. -->
Bellow is the example output of the program.

<sample-output>

Input a number
**1**
Input a number
**2**
Input a number
**1**
Input a number
**-1**
Input a number
**0**
Total of ones: 2

</sample-output>


<programming-exercise name="Number of numbers" tmcname="Part02-Part02_08.NumberOfNumbers">

<!-- Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen lukumäärän. Syötteen loppumisesta kertovaa nollaa ei tule laskea osaksi lukujen lukumäärää. -->
Write a program that reads user inputs until user inputs a number 0. After this the program prints the amount of inputted numbers. The inputted zero, which is used to exit the loop, does not count as an inputted number.

<!-- Ohjelman tulostusesimerkki: -->
Example output of the program:

<sample-output>

Give a number:
**5**
Give a number:
**22**
Give a number:
**9**
Give a number:
**-2**
Give a number:
**0**
Number of numbers: 4

</sample-output>

</programming-exercise>


<programming-exercise name="Number of negative numbers" tmcname='Part02-Part02_09.NumberOfNegativeNumbers'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötteessä olleiden negatiivisten lukujen lukumäärän. Syötteen loppumisesta kertovaa nollaa ei tule laskea osaksi lukujen lukumäärää. -->
Write a program that reads numbers until the user inputs a number 0. After this the program prints the amount of negative numbers inputted.  The inputted zero, which is used to exit the loop, does not count as an inputted number.

<!-- Ohjelman tulostusesimerkki: -->
Example output of the program:

<sample-output>

Give a number:
**5**
Give a number:
**22**
Give a number:
**9**
Give a number:
**-2**
Give a number:
**0**
Number of negative numbers: 1

</sample-output>

</programming-exercise>

<!-- Edellä olevissa tehtävissä tehdyt ohjelmat ovat lukeneet käyttäjältä syötettä ja pitäneet kirjaa tietynlaisten lukujen lukumäärästä. Seuraavassa tehtävässä kaivattu lukujen summa ei oikeastaan juurikaan poikkea edellisistä tehtävistä -- nyt sen sijaan, että pidät kirjaa lukujen lukumäärästä eli lisäät lukumäärään luvun aina 1, lisäätkin "lukumäärään" eli summaan käyttäjän syöttämän luvun. -->
The previously programs done in previous exercises have read user inputs and kept track about certain types of numbers. In the next exercise the sum of numbers is no different --- this time you will keep track of numbers, which means that instead of adding one the amount of numbers, you add the number to the sum.

<programming-exercise name="Sum of numbers" tmcname='part02-Part02_10.SumOfNumbers'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen summan. Syötteen loppumisesta kertovaa nollaa ei tarvitse osaksi lukujen summaa, vaikkei siitä tässä tapauksessa oikeastaan haittaakaan ole. -->
Write a program that reads numbers from the user until the user inputs a number 0. After this the program outputs the sum of the numbers. The number zero does not need to be added to the sum albeit it does not change the results.

<!-- Ohjelman tulostusesimerkki: -->
Example output of the program:

<sample-output>

Give a number:
**5**
Give a number:
**22**
Give a number:
**9**
Give a number:
**-2**
Give a number:
**0**
Sum of the numbers: 34

</sample-output>

</programming-exercise>


TODO: lead in, avaa...
TODO: esimerkki toistolauseesta, missä kaksi muuttujaa



<programming-exercise name="Number and sum of numbers" tmcname='part02-Part02_11.NumberAndSumOfNumbers'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen lukumäärä ja summan. Syötteen loppumisesta kertovaa nollaa ei tule ottaa huomioon lukumäärässä tai summassa. -->
Write a program that asks user for input until the user inputs 0. After this the program prints the amount of numbers inputted and the sum of the numbers. The number zero does not need to be added to the sum albeit it does not change the results.

<!-- _Tarvitset tässä kaksi muuttujaa tiedon säilömiseen. Käytä toista muuttujaa lukujen lukumäärän säilömiseen ja toista muuttujaa lukujen summan laskemiseen._ -->
_You need two variables to keep track of the information. Use one for keeping track of the numbers inputted and other for keeping track of the sum_

<!-- Ohjelman tulostusesimerkki: -->
Example output of the program:

<sample-output>

Give a number:
**5**
Give a number:
**22**
Give a number:
**9**
Give a number:
**-2**
Give a number:
**0**
Number of numbers: 4
Sum of the numbers: 34

</sample-output>

</programming-exercise>


<programming-exercise name="Average of numbers" tmcname='part02-Part02_12.AverageOfNumbers'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen keskiarvo. Syötteen loppumisesta kertovaa nollaa ei tule ottaa huomioon keskiarvon laskemisessa. Voit olettaa, että käyttäjä syöttää aina vähintään yhden luvun. -->
Write a program that asks user for input until the user inputs 0. After this, the program prints the average of the numbers. The number zero does not need to be counted to the average. You may assume that the user inputs atleast one number.

<!-- _Lukujen keskiarvo saadaan jakamalla lukujen summa lukujen lukumäärällä_. -->
_The average of the numbrs can be computer by dividing the sum of numbers with the amount of the numbers_

<!-- Ohjelman tulostusesimerkki: -->
Example output of the program:

<sample-output>

Give a number:
**5**
Give a number:
**22**
Give a number:
**9**
Give a number:
**-2**
Give a number:
**0**
Average of the numbers: 8.5

</sample-output>

</programming-exercise>


<programming-exercise name='Average of positive numbers' tmcname='part02-Part02_13.AverageOfPositiveNumbers'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä kokonaislukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelma tulostaa syötteessä esiintyneiden positiivisten (eli nollaa suurempien lukujen) keskiarvon. -->
Write a number that asks user for input until the user inputs 0.
After this, the program prints the average of the positive numbers (numbers that are greater than zero).

<!-- Mikäli ohjelmassa ei syötetä yhtäkään positiivista lukua, ohjelman tulee tulostaa "keskiarvon laskeminen ei ole mahdollista". -->
If no positive number is inputted, the program prints "Cannot calculate the average"

<!-- Alla on muutamia esimerkkejä ohjelman toiminnasta. -->
Below a few examples of the programs output

<sample-output>

**3**
**5**
**1**
**-3**
**0**
3.0

</sample-output>

<sample-output>

**0**
Cannot calculate the average

</sample-output>

<sample-output>

**-3**
**1**
**0**
1.0

</sample-output>

<sample-output>

**1**
**1**
**0**
1.0

</sample-output>

</programming-exercise>

