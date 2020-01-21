---
path: '/part-2/2-repeating'
title: 'Repeating functionality'
hidden: true
---


<text-box variant='learningObjectives' name='Learning Objectives'>

<!-- - Tunnet käsitteen toistolause ja osaat luoda ohjelman, joka sisältää toistolauseen. -->
- You are familiar with loops and know how to create a program that contains one.

<!-- - Osaat käyttää `break`-komentoa toistolauseen suorituksen lopettamiseen ja toistolausetta seuraavaan käskyyn siirtymiseen. -->
- You know how to use the `break` command to end a loop's execution and move onto its next statement.

<!-- - Osaat käyttää `continue`-komentoa toistolauseen alkuun palaamiseen. -->
- You know how to use `continue` command to return to the beginning of a loop.

<!-- - Osaat luoda ohjelman, joka lukee käyttäjältä syötettä kunnes käyttäjä syöttää tietynlaisen syötteen -- esim luku 0 tai merkkijono "loppu", jonka jälkeen ohjelma kertoo ennen lopettamista syötetyistä syötteistä (esim. syötteiden lukumäärä, lukujen tapauksessa summa ja keskiarvo). -->
- You are able to create a program that reads inputs from a user until a specific input is given. For example, the number 0 or the string "end", after which the program prints something about the provided inputs (e.g., the input count, and in the case of numbers their sum and average).

</text-box>

<!-- Tietokoneen sisältämä käskyjen suorittamiseen erikoistunut prosessori pystyy -- moderneissa tietokoneissa -- suorittamaan yli miljardi (konekielistä) käskyä sekunnissa. Tässä osassa tutustumme toistettavan ohjelmakoodin määrittelyyn toistolauseiden avulla. -->

A computer's processor, which specializes in executing commands, is capable of executing -- in a modern computer -- over a billion (machine code) commands in a second.

 In this section, we'll get used to writing often-repeated program code with the help of loops.

<!-- Motivoidaan toistolauseiden käyttöä hieman. Alla on esimerkki ohjelmasta, missä kysytään käyttäjältä viisi lukua ja lasketaan niiden summa. -->
Let's motivate ourselves to use loops. Below you'll find an example of a program that asks the user for five numbers and calculates their sum.

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
It does the job, but not elegantly. What if the program had to read a hundred, or perhaps a thousand, numbers and print their sum? What if the program had to read three numbers only?

<!-- Tämän ongelman voi ratkaista toistolauseella, joka pitää kirjaa sekä summasta että lukemiskerroista. Viiden luvun summan tulostava toistolauseella toteutettava ohjelma näyttää seuraavalta. -->
The problem can be solved with a loop, which keeps track of both the sum and the number of times input has been read. The program that prints the sum of five numbers now looks as follows

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
Next off we will get familiar with loops.

<!-- ## Toistolause ja ikuinen toisto -->
## Loops and Infinite Loops
<!-- Toistolause sisältää lausekkeen, jonka perusteella päätellään jatketaanko toistoa, sekä lohkon, joka sisältää toistettavan lähdekoodin. Toistolauseen muoto on seuraava. -->
A loop consists of a statement that determines whether or not the code within the loop should be repeated, along with a block containing the source code to be repeated. A loop takes the following form.

```java
while (_statement_) {
    // The content of the block wrapped in curly brackets
    // The block can practically have an endless amount of content
}
```

<!-- Käytämme toistaiseksi lausekkeena `true`-arvoa, eli boolean-tyyppista arvoa "totta". Tämä tarkoittaa sitä, että toistolauseen toistamista jatketaan aina kun ohjelma on tilantessa, missä selvitetään tuleeko toistolauseen suoritusta jatkaa. Tämä tapahtuu sekä silloin kun ohjelman suoritus päätyy toistolauseeseen ensimmäistä kertaa että silloin kun ohjelman suoritus päätyy toistolauseen lohkon loppuun. -->
<!-- TODO Muokkaa "execution of the program first ..." parempaan muotoon -->
We'll use the value `true` as the loop's statement for now. This way, the loop's execution is always continued when the program arrives at the point that decides whether it should be repeated or not. This happens when the execution of the program first arrives at the loop statement for the first time, and also when it reaches the end of the loop's block.

<!-- Toistolauseen suoritus etenee askeleittain lause kerrallaan. Seuraava ohjelma tulostaa merkkijonoa _osaan ohjelmoida!_ ikuisesti eli "äärettömän monta kertaa": -->
The loop execution proceeds line-by-line. The following program outputs _I can program_ indefintely, i.e., an infinite number of times.

```java
while (true) {
    System.out.println("I can program!");
}
```

<!-- Ikuisen toiston sisältävä ohjelma ei sammu itsestään. Ohjelman sammutus tapahtuu NetBeansissa tulostusikkunan vasemmalla puolella olevaa punaista nappia painamalla. -->
The program that runs infinitely does not end on its own. In NetBeans, it can be shut down by clicking the red button located on the left side of the output window.


<!-- ## Toistolauseen päättäminen -->
# Ending a Loop

<!-- Toistolauseen saa päätettyä komennolla `break`. Kun tietokone suorittaa komennon `break`, siirtyy ohjelman suoritus toistolauseen lohkoa seuraavaan komentoon. -->
The loop statement can be broken out of with command 'break'. When a computer executes the command 'break', the program execution moves onto the next command following the loop block.

<!-- Alla olevassa esimerkissä on ohjelma, joka tulostaa luvut yhdestä viiteen. Ohjelmassa määritellään toistolauseen sisällä käsiteltävä luku ennen toistolauseen lohkoa. Tällöin muuttujan kasvatus onnistuu. -->
The example below is a program that prints numbers from one to five. In it, a variable that's used within the loop is defined before the loop. This way the variable can be incremented.

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
Breaking out of the loop occurs when a user enters a specified input or whenever a calculation performed in the loop ends in the desired result. These kinds of programs contain both a loop used to define a section to be repeated and also a conditional statement used to check whether or not the condition to exit the loop has been fulfilled.

<!-- Toistolauseessa voidaan myös kysyä käyttäjältä syötettä. Toistolauseessa useasti käytettävät muuttujat (kuten Scanner-lukija) määritellään ennen toistolausetta, toistokohtaiset muuttujat (kuten luettu arvo) määritellään toistolauseessa. -->
Users can also be asked for input within a loop. The variables that are commonly used in loops (such as Scanner readers) are defined before the loop, whereas variables (such as the value read from the user) that are specific to the loop are defined within it.

<!-- Alla olevassa esimerkissä ohjelma kysyy käyttäjältä pitäisikö toistolauseesta poistua. Mikäli käyttäjä syöttää merkkijonon "k", ohjelman suoritus siirtyy toistolausetta seuraavaan komentoon, jonka suorittamisen jälkeen ohjelman suoritus päättyy. -->
In the example below, the program asks the user whether to exit the loop or not. If the user inputs the string "k", the execution of the program moves to the command following the loop block, after which the execution of the program ends.

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
The program in the example works as follows. The user's inputs are marked in red.

<sample-output>

Exit? (y exits)
**no**
Ok! Let's carry on!
Exit? (y exits)
**non**
Ok! Let's carry on!
Exit? (y exits)
**y**
Ready!

</sample-output>

<!-- <programming-exercise name="Jatketaanko" tmcname='osa02-Osa02_05.Jatketaanko'> -->
<programming-exercise name="Carry on?" tmcname='part02-Part02_05.CarryOn'>

<!-- Kirjoita edellä olevaa toistolause-esimerkkiä mukaillen ohjelma, joka kysyy käyttäjältä "Jatketaanko?" kunnes käyttäjä syöttää merkkijonon "ei". -->
Write a program by using the loop-example that asks "Carry on?" until the user inputs a string "no".

<sample-output>

Carry on?
**yes**
Carry on?
**ye**
Carry on?
**y**
Carry on?
**no**

</sample-output>

</programming-exercise>


<!-- Edellisessä esimerkissä ohjelma lukee käyttäjältä merkkijonomuotoisia syötteitä. Vastaavanlaisen ohjelman toteutus onnistuu myös muilla muuttujatyypeillä. Alla olevassa esimerkissä käyttäjältä pyydetään lukuja kunnes käyttäjä syöttää luvun nolla. -->
In the previous example, the program read inputs of type string from the user. The program can be implemented with other types of variables similarly. The program below asks numbers from the user until the user inputs a zero.

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
The output of the program can be as follows:

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

<!-- <programming-exercise name="Uudestaan" tmcname='osa02-Osa02_06.Uudestaan'> -->
<programming-exercise name="Are we there yet?" tmcname='part02-Part02_06.AreWeThereYet'>

<!-- Kirjoita edellä olevaa esimerkkiä mukaillen ohjelma, joka kysyy käyttäjältä lukuja kunnes käyttäjä syöttää luvun 4. -->
Write a program according to the preceding example that asks a user to input values until they input the value 4.

<sample-output>

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
## Returning to the Start of the Loop

<!-- Toistolauseen alkuun palataan silloin kun suoritus päätyy toistolauseen lohkon loppuun eli kaikki toistolauseen lohkossa olevat komennot on suoritettu. Toistolauseen alkuun voi palata myös muualta kuin toistolauseen lopusta erillisellä `continue`-komennolla. Kun tietokone suorittaa komennon `continue`, siirtyy ohjelman suoritus toistolauseen alkuun. -->
The beginning of the loop is returned to when the execution reaches the end of the loop. This means that all the commands in the loop have been executed. You can also return to the beginning from other places besides the end with the command `continue`. When the computer executes the command `continue`, the execution of the program moves to the beginning of the loop.

<!-- Alla olevassa esimerkissä esitellään `continue`-komennon käyttöä. Ohjelma pyytää käyttäjää syöttämään positiivisia lukuja. Mikäli käyttäjä syöttää negativiisen luvun tai nollan, ohjelma tulostaa viestin "Epäkelpo luku! Yritä uudelleen.", jonka jälkeen suoritus palaa toistolauseen alkuun. Edellisessä esimerkissä ohjelma lukee käyttäjältä merkkijonomuotoisia syötteitä. Vastaavanlaisen ohjelman toteutus onnistuu myös muilla muuttujatyypeillä. Alla olevassa esimerkissä käyttäjältä pyydetään lukuja kunnes käyttäjä syöttää luvun nolla. -->
<!-- TODO epäkelpo = unfit? -->
The example below demonstrates the use of the `continue` command. The program asks the user to input positive numbers. If the user inputs a negative number or a zero, the program prints the message "Unfit number, try again", after which the execution returns to the beginning of the loop. In the previous example, the program read inputs of type string from the user. Similar programs with different input types are also possible. In the example below, the user is asked for numbers until they input a zero.

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
The program in the example above is repeated infinitely since the `break` command used for exiting the loop is not used. To exit the loop, the `break` command must be added to it.

<!-- Alla olevassa esimerkissä ohjelmaa on muokattu siten, että käyttäjältä pyydetään positiivisia lukuja. Mikäli käyttäjä syöttää negatiivisen luvun, kerrotaan että luku oli epäkelpo ja palataan toistolauseen alkuun. Mikäli käyttäjä syöttää nollan, toistolauseesta poistutaan. -->
In the example below, the program is modified in such a way that the user is asked to input positive numbers. If the user inputs a negative number, the program informs them that the number was unfit and returns to the beginning of the loop. If the number was a zero, the program exits the loop.

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

<!-- TODO: tänne tarttee visualisoinnin -->
<!-- TODO: this requires a visualization -->

<quiz id="36891f81-9e52-5546-97c3-4c2f0f180135"></quiz>

<!-- <programming-exercise name="Syötteiden rajaus" tmcname='osa02-Osa02_07.SyotteidenRajaus'> -->
<programming-exercise name="Only positives" tmcname='part02-Part02_07.OnlyPositives'>

<!-- Kirjoita ohjelma, joka kysyy käyttäjältä lukuja. Mikäli luku on negatiivinen (eli pienempi kuin nolla), käyttäjälle tulostetaan viesti "Epäkelpo luku" ja käyttäjältä kysytään uutta lukua. Jos taas luku on nolla, lukujen lukeminen lopetetaan ja ohjelma poistuu toistolauseesta. Mikäli luku on positiivinen, ohjelma tulostaa luvun toisen potenssin. -->
Write a program that asks a user for numbers. If the number is negative (smaller than zero), the program prints for user "unfit number" and asks the user for a new number. If the number is zero, the program exits the loop. If the number is positive, the program prints the number power of two.

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
In the previous exercise, a program was made that asks the user for numbers. If the user entered a negative number, the program would inform them that the number was unfit, and if the user entered a zero, the program would exit. A possible solution to the exercise is the following.

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
The program could be made by modifying the if-statement to another form. In the example below, the conditionals have been combined to replace separate if-statements.

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
Let's examine the clarity of the previous programs through an example. Below, the program asks the user for a number. If the number is negative, the user is informed that the number is unfit and the execution of the program goes to the beginning of the loop. If the number is zero, the program exits the loop. In other cases the program prints the square of the number, i.e., the number times itself.

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
This program can also be done by combining the if-statements. In that case, the implementations would be the following.

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
Let's examine the previous programs with comments. Before each command, there's a comment that aims to explain what's happening in the program. Below is a program that's written with separate if-statements.

```java
// The task is to read an input from the user
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
Note that every if-statement has a single, clear task.

<!-- Kun kommentoimme ohjelman, joka sisältää ehtolauseet yhdistettynä, kommentit ovat seuraavat. -->
When we comment on a program containing combined if-statements, the comments take the following form.

```java
// The task is to read an input from the user
Scanner scanner = new Scanner(System.in);

// The task is to repeat the block until the block is exited
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
We notice that it's difficult to define a single, clear task for `if-else if-else`-block. During the design and implementation of a program, it's desirable to to aim for a situation in which every part of the program has a a single, clear task. This theme repeats throughout the course.
<!-- TODO: quiz -->


<!-- ## Laskentaa toistolauseiden avulla -->
## Calculation with Loops

<!-- Toistolauseita hyödynnetään usein asioiden laskemisessa. Esimerkiksi ohjelmat, joissa käsitellään määrittelemätöntä määrää käyttäjän syöttämiä lukuja perustuvat toistolauseseen. Tällaisissa ohjelmissa tulostetaan tyypillisesti jonkinlaisia tilastoja luetuista luvuista tai muista syötteistä toistolauseen jälkeen. -->
Loops are used in computing many different things. For example, programs that process indefinite numbers of user-inputted values make use of loops. These kinds of programs typically print out some sort of statistics the numbers that were read or other inputs that follow the loop.

<!-- Jotta ohjelma voi tulostaa toistolauseen jälkeen tietoja toistolauseen suorituksesta, tulee tietoa säilöä ja muokata toistolauseen aikana. -->
For the program to print out information from the loop execution after the loop, the information must be saved and modified during the loop.


<!-- Mikäli tiedon tallentamiseen käytettävä muuttuja esitellään toistolauseen lohkon sisällä, on muuttuja käytössä vain toistolauseen lohkon sisällä sekä sen alla määritellyissä lohkoissa, mutta ei toistolauseen lohkon ulkopuolella. -->
If the variable used to store the data is introduced within the loop, the variable is only available within that loop and nowhere else.

<!-- Luodaan ohjelma, jonka tarkoituksena on laskea ja tulostaa käyttäjän syöttämien ykkösten lukumäärä. Tehdään ensin toimimaton versio ja tarkastellaan lohkojen toimintaa. -->
Let's create a program to count and print out the number of ones entered by the user. Let's first create a non-working version and examine the action of the blocks.

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
The previous program does not work because the variable `ones` is introduced within the loop, and an attempt is made to use it after the loop at the end of the program. The variable only exists inside the loop. If the print statement `System.out.println("The total of ones: " + ones);` was inside the loop, the program would work, but not in the desired way. Let's examine this next.


```java
Scanner scanner = new Scanner(System.in);

// The task is to read an input from the user
while (true) {

    // The task is to keep count of number ones
    int ones = 0;

    System.out.println("Insert a number (0 exits): ");
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
If you wish to use a variable after a loop, it needs to be introduced before the loop.

<!-- Alla olevassa esimerkissä ohjelma laskee syötettyjen ykkösten lukumäärän. Syötteitä luetaan kunnes käyttäjä syöttää luvun 0, jonka jälkeen tulostetaan luettujen ykkösten lukumäärä. Ohjelmassa käytetään muuttujaa `ykkosia` ykkösten lukumäärän ylläpitoon. -->
In the example below, the program computes the total of number ones inputted. The inputs are read until the user inputs a zero after which the program prints the total count of number ones entered. The program uses variable `ones` to keep track of the number ones.

```java
Scanner scanner = new Scanner(System.in);

// The task is to keep track of number ones
int ones = 0;

// The task is to read an input from the user
while (true) {
    System.out.println("Give a number (end with 0): ");
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
Below is an example output of the program.

<sample-output>

Give a number (end with 0):
**1**
Give a number (end with 0):
**2**
Give a number (end with 0):
**1**
Give a number (end with 0):
**-1**
Give a number (end with 0):
**0**
Total of ones: 2

</sample-output>


<!-- <programming-exercise name="Lukujen lukumäärä" tmcname='osa02-Osa02_08.LukujenLukumaara'> -->
<programming-exercise name="Number of Numbers" tmcname='part02-Part02_08.NumberOfNumbers'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötettyjen lukujen lukumäärän. Syötteen loppumisesta kertovaa nollaa ei tule laskea osaksi lukujen lukumäärää. -->
Write a program that reads values from the user until they input a 0. After this, the program prints the total number of inputted values. The zero that's used to exit the loop should is not to be included in the total number count.

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


<!-- <programming-exercise name="Negatiivisten lukujen lukumäärä" tmcname='osa02-Osa02_09.NegatiivistenLukujenMaara'> -->
<programming-exercise name="Number of negative numbers" tmcname='part02-Part02_09.NumberOfNegativeNumbers'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä lukuja kunnes käyttäjä syöttää luvun 0. Tämän jälkeen ohjelman tulee tulostaa syötteessä olleiden negatiivisten lukujen lukumäärän. Syötteen loppumisesta kertovaa nollaa ei tule laskea osaksi lukujen lukumäärää. -->
Write a program that reads values from the user until they input a 0. After this, the program prints the total number of inputted values that are negative. The zero that's used to exit the loop should is not to be included in the total number count.

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
The programs written in the previous exercises have read input from the user and kept track of the count of certain types of numbers. In the next exercise, the requested sum of numbers is not much different --- this time, rather than keeping track of the number of values entered, you add the number entered by the user to the sum.
<!-- <programming-exercise name="Lukujen summa" tmcname='osa02-Osa02_10.LukujenSumma'> -->
<programming-exercise name="Sum of Numbers" tmcname='part02-Part02_10.SumOfNumbers'>

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
The sum of the numbers is 34

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
