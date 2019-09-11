---
path: '/part-2/4-methods'
# title: 'Metodit ja ohjelman jakaminen pienempiin osiin'
title: 'Methods and dividing the program into smaller parts'
hidden: true
---

<!-- <text-box variant='learningObjectives' name='Oppimistavoitteet'> -->
<text-box variant='learningObjectives' name='Learning objectives'>

<!-- - Tunnet käsitteet metodi, metodin parametri, metodin palautusarvo ja ohjelman kutsupino. -->
- You are familiar with the following concepts: method, method parameter, method's return value, and a program's call stack
<!-- - Osaat luoda metodeja ja osaat kutsua metodeja sekä pääohjelmasta (`main`-metodi) että muiden metodien sisältä. -->
- You can create methods and know how to call methods both from the main program (the `main` method) and from inside other methods
<!-- - Osaat luoda parametrillisia ja parametrittomia metodeja, ja osaat luoda metodeja, jotka palauttavat arvon. -->
- You can create parameterized and non-parameterized methods, and you can create methods that return a value

</text-box>

<!-- Olemme käyttäneet useita erilaisia komentoja: arvon asettamista, laskutoimituksia, ehtolauseita, ja toistolauseita. -->

We have used several different commands: assigning values, calculations, conditional statements, and repeat statements.

<!-- Ruudulle tulostaminen on tehty `System.out.println()`-lauseella ja lukeminen `Integer.valueOf(lukija.nextLine())` lauseella. Ehtolauseessa on käytetty `if`:iä, toistolauseessa `while`:ä ja `for`:ia. Huomaamme, että tulostaminen ja lukeminen poikkeaa `if`:istä, `while`:stä, `for`:ista siinä, että tulostus- ja lukemiskomennon perässä on sulut ja joskus sulkujen sisällä komennolle annettava parametrit. Nämä "sulkuihin päättyvät" eivät oikeastaan olekaan komentoja vaan metodeja. -->

Printing to the screen has been done with the statement `System.out.println()`, and reading numbers with the statement `Integer.valueOf(scanner.nextLine())`. Conditional statements have used `if`, repeat statements `while` and `for`. We notice that printing and reading somewhat differ from `if`, `while`, and `and`; the printing and reading commands are followed by parentheses, and sometimes there also are parameters given to the command between the parentheses. These statements "ending with parentheses" are strictly speaking not commands, but rather methods.

<!-- Teknisesti ottaen **metodi** tarkoittaa nimettyä lauseista koostuvaa joukkoa, eli ohjelman palaa, jota voi kutsua muualta ohjelmakoodista metodille annetun nimen perusteella. Esimerkiksi koodirivillä `System.out.println("olen metodille annettava parametri!")` kutsutaan metodia, joka suorittaa ruudulle tulostamisen. Metodin sisäinen toteutus -- eli joukko suoritettavia lauseita -- on piilossa, eikä ohjelmoijan tarvitse välittää siitä metodia käytettäessä. -->

Technically speaking, **a method** is a named set of statements - a part of the program that can be called from elsewhere in the program code by using the method's name. For instance the line of code `System.out.println("I am a parameter given to a method!")` calls a methods that handles printing to the screen. The internal implementation of the method -- i.e. the set of statements to be executed -- is hidden, and the programmer need not concern themselves with it when using the method.

<!-- Tähän mennessä käyttämämme metodit ovat kaikki olleet Javan valmiita metodeita. Opetellaan seuraavaksi tekemään omia metodeita. -->

Thus far all the methods we have used have been pre-made Java methods. Next we will learn to create our own methods.


<!-- ##  Omat metodit -->

## Own methods

<!-- **Metodi** tarkoittaa nimettyä lauseista koostuvaa joukkoa, jota voi kutsua muualta ohjelmakoodista nimen perusteella. Ohjelmointikielet tarjoavat valmiita metodeja, mutta ohjelmoija voi myös kirjoittaa omia metodeja. On oikeastaan on melko poikkeuksellista mikäli ohjelmassa ei ole yhtään itse kirjoitettua metodia, sillä metodit auttavat ohjelman jäsentämisessä. Tästä lähtien lähes jokainen kurssilla tehty ohjelma sisältääkin itsekirjoitettuja metodeja. -->

**A method** means a named set consisting of statements that can be called from elsewhere in the program code by its name. Programming languages offer pre-made methods, but programmers can also write their own ones. It would in fact be quite exceptional if a program used no methods written by the programmer, because methods help in structuring the program. From this point onward nearly every program on the course will therefore contain custom-created methods.

<!-- Metodit kirjoitetaan ohjelmarunkoon `main`:in aaltosulkeiden ulkopuolelle mutta kuitenkin "uloimmaisten" aaltosulkeiden sisäpuolelle, joko mainin ylä- tai alapuolelle. -->

In the code boilerplate, methods are written outside of the curly braces of the `main`, yet inside out the `outermost` curly braces. They can be located above or below the main.

<!-- ```java
import java.util.Scanner;

public class Esimerkki {
    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);
        // ohjelmakoodi
    }

    // omia metodeja tänne
}
``` -->

```java
import java.util.Scanner;

public class Example {
    public static void main(String[] args) {
        Scanner scanned = new Scanner(System.in);
        // program code
    }

    // your own methods here
}
```

<!-- Tarkastellaan uuden metodin luomista. Luodaan metodi `tervehdi`. -->

Let's observe how to create a new method. We'll create the method `greet`.

<!-- ```java
public static void tervehdi() {
    System.out.println("Terveiset metodimaailmasta!");
}
``` -->

```java
public static void greet() {
    System.out.println("Greetings from the method world!");
}
```

<!-- Ja asetetaan se metodeille kuuluvalle paikalle. -->

And then we'll insert it into a suitable place for a method.

<!-- ```java
import java.util.Scanner;

public class Esimerkki {
    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);
        // ohjelmakoodi
    }

    // omia metodeja tänne
    public static void tervehdi() {
        System.out.println("Terveiset metodimaailmasta!");
    }
}
``` -->

```java
import java.util.Scanner;

public class Example {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // program code
    }

    // your own methods here
    public static void greet() {
        System.out.println("Greetings from the method world!");
    }
}
```

<!-- Metodin määrittely sisältää kaksi osaa. Metodimäärittelyn ensimmäisellä rivillä on metodin nimi eli `tervehdi`. Nimen vasemmalla puolella tässä vaiheessa määreet `public static void`. Metodin nimen sisältävän rivin alla on aaltosulkeilla erotettu koodilohko, jonka sisälle kirjoitetaan metodin koodi, eli ne komennot jotka metodia kutsuttaessa suoritetaan. Metodimme `tervehdi` ei tee muuta kuin kirjoittaa rivillisen tekstiä ruudulle. -->

The definition of the method consists of two parts. The first line of the definition includes the name of the method, i.e. `greet`. On the left side of the name are the keywords `public static void`. Beneath the row containing the name of the method is a code block surrounded by curly brackets, inside of which is the code of the method - the commands that are executed when it is called. The only thing our method `greet` does is write a line of text on the screen.

<!-- Itsekirjoitetun metodin kutsu on helppoa, kirjoitetaan metodin nimi ja perään sulut ja puolipiste. Seuraavassa main eli pääohjelma kutsuu tervehdi-metodia yhteensä neljä kertaa. -->

Calling a custom method is simple: write the name of the methods followed by a set of parentheses and the semicolon. In the following snippet the main program (main) calls the greet method four times in total.

<!-- ```java
import java.util.Scanner;

public class OhjelmaRunko {
    public static void main(String[] args) {
        Scanner lukija = new Scanner(System.in);

        // ohjelmakoodi
        System.out.println("Kokeillaan pääsemmekö metodimaailmaan:");
        tervehdi();

        System.out.println("Näyttää siltä, kokeillaan vielä:");
        tervehdi();
        tervehdi();
        tervehdi();
    }

    // omat metodit
    public static void tervehdi() {
        System.out.println("Terveiset metodimaailmasta!");
    }
}
``` -->

```java
import java.util.Scanner;

public class ProgramStructure {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // program code
        System.out.println("Let's try if we can travel to the method world:");
        greet();

        System.out.println("Looks like we can, let's try again:");
        greet();
        greet();
        greet();
    }

    // own methods
    public static void greet() {
        System.out.println("Greetings from the method world!");
    }
}
```

<!-- Ohjelman suoritus saa aikaan seuraavan tulosteen: -->

The execution of the program produces the following output:

<!-- <sample-output>

Kokeillaan pääsemmekö metodimaailmaan:
Terveiset metodimaailmasta!
Näyttää siltä, kokeillaan vielä:
Terveiset metodimaailmasta!
Terveiset metodimaailmasta!
Terveiset metodimaailmasta!

</sample-output> -->

<sample-output>

Let's try if we can travel to the method world:
Greetings from the method world!
Looks like we can, let's try again:
Greetings from the method world!
Greetings from the method world!
Greetings from the method world!

</sample-output>

<!-- Huomionarvoista tässä on ohjelman suoritusjärjestys. Ohjelman suoritus etenee siten, että pääohjelman --  eli main:in -- rivit suoritetaan ylhäältä alas yksi kerrallaan. Kun lause on metodikutsu, ohjelman suoritus siirtyy metodiin. Metodin lauseet suoritetaan yksi kerrallaan ylhäältä alas. Tämän jälkeen palataan kohtaan, josta metodin kutsu tapahtui ja jatketaan ohjelman suoritusta seuraavasta lauseesta. -->

The order of execution is worth noticing. The execution of the program happens by executing the lines of the main method (`main`) in order from top to bottom, one at a time. When the encountered statement is a method call, the execution of the program moves inside the method in question. The statements of the method are executed one at a time from top to bottom. After this the execution returns to the place where the method call occured, and then proceeds to the next statement in the program.

<!-- <code-states-visualizer input='{"code":"import java.util.Scanner;\n\npublic class OhjelmaRunko {\n    public static void main(String[] args) {\n        Scanner lukija = new Scanner(System.in);\n\n        // ohjelmakoodi\n        System.out.println(\"Kokeillaan pääsemmekö metodimaailmaan:\");\n        tervehdi();\n\n        System.out.println(\"Näyttää siltä, kokeillaan vielä:\");\n        tervehdi();\n        tervehdi();\n        tervehdi();\n    }\n\n    // omat metodit\n    public static void tervehdi() {\n        System.out.println(\"Terveiset metodimaailmasta!\");\n    }\n}\n","stdin":"","trace":[{"stdout":"","event":"call","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"3","frame_id":3}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\n","event":"call","line":19,"stack_to_render":[{"func_name":"tervehdi:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7},{"func_name":"main:9","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"tervehdi:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9},{"func_name":"main:9","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"10","frame_id":10}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\n","event":"step_line","line":20,"stack_to_render":[{"func_name":"tervehdi:20","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17},{"func_name":"main:9","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\n","event":"return","line":20,"stack_to_render":[{"func_name":"tervehdi:20","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"19","frame_id":19},{"func_name":"main:9","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\n","event":"call","line":19,"stack_to_render":[{"func_name":"tervehdi:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26},{"func_name":"main:12","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"tervehdi:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28},{"func_name":"main:12","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\n","event":"step_line","line":20,"stack_to_render":[{"func_name":"tervehdi:20","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"36","frame_id":36},{"func_name":"main:12","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"37","frame_id":37}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\n","event":"return","line":20,"stack_to_render":[{"func_name":"tervehdi:20","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38},{"func_name":"main:12","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\n","event":"call","line":19,"stack_to_render":[{"func_name":"tervehdi:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42},{"func_name":"main:13","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"tervehdi:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44},{"func_name":"main:13","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"45","frame_id":45}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"step_line","line":20,"stack_to_render":[{"func_name":"tervehdi:20","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52},{"func_name":"main:13","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"return","line":20,"stack_to_render":[{"func_name":"tervehdi:20","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54},{"func_name":"main:13","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"56","frame_id":56}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"call","line":19,"stack_to_render":[{"func_name":"tervehdi:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58},{"func_name":"main:14","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"59","frame_id":59}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"tervehdi:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60},{"func_name":"main:14","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"61","frame_id":61}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"step_line","line":20,"stack_to_render":[{"func_name":"tervehdi:20","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"68","frame_id":68},{"func_name":"main:14","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"return","line":20,"stack_to_render":[{"func_name":"tervehdi:20","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"70","frame_id":70},{"func_name":"main:14","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"72","frame_id":72}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"return","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"lukija":["REF",601],"__return__":["VOID"]},"ordered_varnames":["lukija","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"74","frame_id":74}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer> -->



<code-states-visualizer input='{"code":"import java.util.Scanner;\n\npublic class OhjelmaRunko {\n    public static void main(String[] args) {\n        Scanner lukija = new Scanner(System.in);\n\n        // ohjelmakoodi\n        System.out.println(\"Let`s try if we can travel to the method world:\");\n        tervehdi();\n\n        System.out.println(\"Looks like we can, let`s try again::\");\n        tervehdi();\n        tervehdi();\n        tervehdi();\n    }\n\n    // omat metodit\n    public static void tervehdi() {\n        System.out.println(\"Greetings from the method world!\");\n    }\n}\n","stdin":"","trace":[{"stdout":"","event":"call","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"3","frame_id":3}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\n","event":"call","line":19,"stack_to_render":[{"func_name":"tervehdi:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7},{"func_name":"main:9","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"tervehdi:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9},{"func_name":"main:9","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"10","frame_id":10}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\n","event":"step_line","line":20,"stack_to_render":[{"func_name":"tervehdi:20","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17},{"func_name":"main:9","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\n","event":"return","line":20,"stack_to_render":[{"func_name":"tervehdi:20","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"19","frame_id":19},{"func_name":"main:9","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\n","event":"call","line":19,"stack_to_render":[{"func_name":"tervehdi:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26},{"func_name":"main:12","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"tervehdi:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28},{"func_name":"main:12","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\n","event":"step_line","line":20,"stack_to_render":[{"func_name":"tervehdi:20","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"36","frame_id":36},{"func_name":"main:12","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"37","frame_id":37}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\n","event":"return","line":20,"stack_to_render":[{"func_name":"tervehdi:20","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38},{"func_name":"main:12","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"main:13","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\n","event":"call","line":19,"stack_to_render":[{"func_name":"tervehdi:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42},{"func_name":"main:13","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"tervehdi:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44},{"func_name":"main:13","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"45","frame_id":45}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":20,"stack_to_render":[{"func_name":"tervehdi:20","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52},{"func_name":"main:13","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\n","event":"return","line":20,"stack_to_render":[{"func_name":"tervehdi:20","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54},{"func_name":"main:13","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"main:14","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"56","frame_id":56}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\n","event":"call","line":19,"stack_to_render":[{"func_name":"tervehdi:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58},{"func_name":"main:14","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"59","frame_id":59}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"tervehdi:19","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60},{"func_name":"main:14","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"61","frame_id":61}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":20,"stack_to_render":[{"func_name":"tervehdi:20","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"68","frame_id":68},{"func_name":"main:14","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\nGreetings from the method world!\n","event":"return","line":20,"stack_to_render":[{"func_name":"tervehdi:20","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"70","frame_id":70},{"func_name":"main:14","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"lukija":["REF",601]},"ordered_varnames":["lukija"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"72","frame_id":72}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again::\nGreetings from the method world!\nGreetings from the method world!\nGreetings from the method world!\n","event":"return","line":15,"stack_to_render":[{"func_name":"main:15","encoded_locals":{"lukija":["REF",601],"__return__":["VOID"]},"ordered_varnames":["lukija","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"74","frame_id":74}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{"601":["INSTANCE","java.util.Scanner"]}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

<!-- Jos ollaan tarkkoja niin pääohjelma eli main on itsekin metodi. Kun ohjelma käynnistyy, kutsuu käyttöjärjestelmä main:ia. Metodi main on siis ohjelman käynnistyspiste, jonka ylimmältä riviltä ohjelman suoritus lähtee liikkeelle. Ohjelman suoritus loppuu kun päädytään mainin loppuun. -->

Strictly speaking the main program (`main`) itself is a method. When the program starts, the operating system calls `main`. The main method is the starting point for the program, since the execution begins from its first row. The execution of a program ends at the end of the main method.

<!-- <programming-exercise name='Tekstin tulostus' tmcname='osa02-Osa02_21.TekstinTulostus'> -->

<programming-exercise name='In a hole in the ground' tmcname='part02-Part02_21.InAHoleInTheGround'>



<!-- Tee metodi `tulostaTeksti`, joka tulostaa tekstin "Alussa olivat suo, kuokka ja Java." sekä rivinvaihdon. -->

Create a method called `printPhrase` which prints the phrase "In a hole in the ground there lived a method" and a newline.

<!-- ```java
public static void main(String[] args) {
    tulostaTeksti();
}

public static void tulostaTeksti() {
    // kirjoita koodia tähän
}
``` -->

```java
public static void main(String[] args) {
    printPhrase();
}

public static void printPhrase() {
    // Write some code in here
}
```

<!-- Ohjelman tulostus: -->

The output of the program:

<!-- <sample-output>

Alussa olivat suo, kuokka ja Java.

</sample-output> -->

<sample-output>

In a hole in the ground there lived a method

</sample-output>

</programming-exercise>


<!-- <programming-exercise name='Monta tulostusta' tmcname='osa02-Osa02_22.MontaTulostusta'> -->

<programming-exercise name='Reprint' tmcname='print02-Part02_22.Reprint'>


<!-- Laajenna edellistä ohjelmaa siten, että pääohjelma kysyy käyttäjältä, montako kertaa teksti tulostetaan eli montako kertaa metodia kutsutaan. -->

Expand the previous program so that the main program asks the user for the number of times the phrase will be printed (i.e. how many times the method will be called).

<!-- ```java
public static void main(String[] args) {
    // kysy käyttäjältä, montako kertaa teksti tulostetaan
    // kutsu metodia tulostaTeksti while-komennon avulla useita kertoja
}

public static void tulostaTeksti() {
    // kirjoita koodia tähän
}
``` -->

```java
public static void main(String[] args) {
    // ask the user for the number of times that the phrase will be printed
    // use the while command to call the method a suitable number of times
}

public static void printPhrase() {
    // write some code in here
}
```

<!-- Ohjelman tulostus: -->
Sample output:

<!-- <sample-output>

Kuinka monta?
**7**
Alussa olivat suo, kuokka ja Java.
Alussa olivat suo, kuokka ja Java.
Alussa olivat suo, kuokka ja Java.
Alussa olivat suo, kuokka ja Java.
Alussa olivat suo, kuokka ja Java.
Alussa olivat suo, kuokka ja Java.
Alussa olivat suo, kuokka ja Java.

</sample-output> -->

<sample-output>

How many times?
**7**
In a hole in the ground there lived a method
In a hole in the ground there lived a method
In a hole in the ground there lived a method
In a hole in the ground there lived a method
In a hole in the ground there lived a method
In a hole in the ground there lived a method
In a hole in the ground there lived a method

</sample-output>

<!-- **Huom:** tulosta kehote `Kuinka monta?` omalle rivilleen! -->

**N.B.:** print the prompt `How many times?` on its own separate line!


</programming-exercise>


<!-- Jatkossa kun esittelemme metodeja, emme erikseen mainitse että niiden täytyy sijaita omalla paikallaan. Metodia ei esimerkiksi voi määritellä toisen metodin sisällä. -->

From here on out, when introducing methods, we will not explicitly mention they must be located in the correct place. Methods cannot be defined e.g. inside other methods.


<!-- ## Metodien nimennästä -->

## On the naming of methods

<!-- Metodit nimetään siten, että ensimmäinen sana kirjoitetaan pienellä ja loput alkavat isolla alkukirjaimella, tälläisestä kirjoitustavasta käytetään nimitystä camelCase. Tämän lisäksi, metodin sisällä koodi on sisennetty taas neljä merkkiä. -->

The names of methods begin with a word written entirely with lower-case letters, and the rest of the words begin with an upper-case letter - this style of writing is known as camelCase. Additionally, the code inside methods is indented by four characters.

<!-- Alla olevassa esimerkissä metodi on nimetty väärin. Nimi alkaa isolla alkukirjaimella ja metodin nimen osat on eroteltu toisistaan merkillä \_. Metodin sulut ovat myös erillään toisistaan ja sisennys on väärin. -->

In the code example below the method is poorly named. It begins with an upper-case letter and the words are separated by \_ charactes. The parentheses after the method name have a space between and indentation in the code block is incorrect.

<!-- ```java
public static void Tama_metodi_sanoo_mur ( ) {
System.out.println("mur");
}
``` -->

```java
public static void This_method_says_woof ( ) {
System.out.println("woof");
}
```

<!-- Alla taas metodi on nimetty oikein. Nimi alkaa pienellä alkukirjaimella ja nimen osat on yhdistetty toisiinsa camelCase-tyylillä, missä jokainen uusi sana alkaa isolla kirjaimella. Sulut ovat kiinni metodissa ja toisissaan, jonka lisäksi metodin sisältö on sisennetty oikein (metodilla on oma lohko, joten metodin koodin sisennys on neljä välilyöntiä). -->

In contrast the method below is correctly named: The name begins with a lower-case letter and the words are joined together with the camelCase style, meaning that each word after the first begins with an upper-case letter. The parentheses sit next to one another and the contents are correctly indented (the method has its own code block, so the indentation of the code is four characters).

<!-- ```java
public static void tamaMetodiSanooMur() {
    System.out.println("mur");
}
``` -->

```java
public static void thisMethodSaysWoof() {
    System.out.println("woof");
}
```


<!-- ##  Metodin parametrit -->

## Method parameters

<!-- **Parametrit** ovat metodille annettavia arvoja, joita käytetään metodin suorituksessa. Metodin parametrit määritellään metodin ylimmällä rivillä metodin nimen jälkeen olevien sulkujen sisällä. Metodissa käytettävät parametrien arvot kopioituvat metodikutsun yhteydessä metodille annettavista parametreista. -->

**Parameters** are values given to a method that can be used in its execution. The parameters of a method are defined on the uppermost row of the method within the parentheses following its name. The values of the parameters that the method can use are copied from the values given to the method when it is executed.

<!-- Seuraavassa esimerkissä määritellään parametrillinen metodi `tervehdi`, jolla on int-tyyppinen parametri `montakoKertaa`. -->

In the following example a parameterized method `greet` is defined. It has an int type parameter called `numOfTimes`.

```java
public static void greet(int numOfTimes) {
    int i = 0;
    while (i < numOfTimes) {
        System.out.println("Greetings!");
        i++;
    }
}
```

<!-- Kutsutaan metodia `tervehdi` siten, että parametrin `montakoKertaa` arvoksi asetetaan ensimmäisellä kutsulla `1` ja toisella kutsulla `3`. -->

We will call the method `greet` with different values. The parameter `numOfTimes` is assigned the value `1`on the first call, and `3`on the second.

<!-- ```java
public static void main(String[] args) {
    tervehdi(1);
    System.out.println("");
    tervehdi(3);
}
``` -->

```java
public static void main(String[] args) {
    greet(1);
    System.out.println("");
    greet(3);
}
```

<!-- <sample-output>

Tervehdys!

Tervehdys!
Tervehdys!
Tervehdys!

</sample-output> -->

<sample-output>

Greetings!

Greetings!
Greetings!
Greetings!

</sample-output>


<!-- Aivan kuten Javan valmista `System.out.println()`-metodia kutsuttaessa, voi oman metodin kutsussa parametrina antaa lausekkeen. -->

Just like when calling the predefined method `Systme.out.println`, you can pass an expression as a paratmeter.

<!-- ```java
public static void main(String[] args) {
    tervehdi(1 + 2);
}
``` -->

```java
public static void main(String[] args) {
    greet(1 + 2);
}
```


<!-- <sample-output>

Tervehdys!
Tervehdys!
Tervehdys!

</sample-output> -->

<sample-output>

Greetings!
Greetings!
Greetings!

</sample-output>

<!-- Jos metodia kutsuttaessa parametriksi määritellään lauseke, evaluoidaan lauseke ennen metodikutsua. Yllä lauseke evaluoituu arvoksi `3` ja lopullinen metodikutsu on muotoa `tervehdi(3);`. -->

If an expression is used as a parameter for a method, that expression is evaluated prior to the method call. Above, the expression evaluates to `3` and the final method call is of the form `greet(3);`.


<!-- <programming-exercise name='Yhdestä parametriin' tmcname='osa02-Osa02_23.YhdestaParametriin'> -->

<programming-exercise name='From one to parameter' tmcname='part02-Part02_23.FromOneToParameter'>


<!-- Luo tehtäväpohjaan metodi `public static void tulostaLukuunAsti(int luku)`, joka tulostaa luvut yhdestä parametrina annettuun lukuun asti. Alla on kaksi esimerkkiä metodin käytöstä. -->

Create the following method in the exercise template: `public static void printUntilNumber(int number)`. It should print the numbers from one to the number passed as a parameter. Two examples of the method's usage are given below.

<!-- ```java
public static void main(String[] args) {
    tulostaLukuunAsti(5);
}
``` -->

```java
public static void main(String[] args) {
    printUntilNumber(5);
}
```

<sample-output>

1
2
3
4
5

</sample-output>

<!-- ```java
public static void main(String[] args) {
    tulostaLukuunAsti(2);
}
``` -->

```java
public static void main(String[] args) {
    printUntilNumber(2);
}
```

<sample-output>

1
2

</sample-output>

</programming-exercise>


<!-- <programming-exercise name='Parametrista yhteen' tmcname='osa02-Osa02_24.ParametristaYhteen'> -->


<programming-exercise name='From parameter to one' tmcname='part02-Part02_24.FromParameterToOne'>


<!-- Luo tehtäväpohjaan metodi `public static void tulostaLuvustaYhteen(int luku)`, joka tulostaa luvut parametrina annetusta luvusta yhteen asti. Alla on kaksi esimerkkiä metodin käytöstä. -->

Create the following method in the exercise template: `public static void printFromNumberToOne(int number)`. It should print the numbers from the number passed as a parameter down to one. Two examples of the method's usage are given below.


```java
public static void main(String[] args) {
    printFromNumberToOne(5);
}
```

<sample-output>

5
4
3
2
1

</sample-output>

<!-- ```java

public static void main(String[] args) {
    tulostaLuvustaYhteen(2);
}

``` -->

```java

public static void main(String[] args) {
    printFromNumberToOne(2);
}

```

<sample-output>

2
1

</sample-output>

</programming-exercise>

<!-- ### Useampi parametri -->

### Multiple parameters

<!-- Metodille voidaan määritellä useita parametreja. Tällöin metodin kutsussa parametrit annetaan samassa järjestyksessä. -->

A method can be defined with multiple parameters. When calling such a method, the parameters are passed in the same order.

<!-- ```java
public static void summa(int eka, int toka) {
    System.out.println("Lukujen " + eka + " ja " + toka + " summa on " + (eka + toka));
}
``` -->

```java
public static void sum(int first, int second) {
    System.out.println("The sum of numbers " + first + " and " + second + " is " + (first + second));
}
```

<!-- ```java
summa(3, 5);

int luku1 = 2;
int luku2 = 4;

summa(luku1, luku2);
``` -->

```java
sum(3, 5);

int number1 = 2;
int number2 = 4;

summa(number1, number2);
```

<!-- <sample-output>

Lukujen 3 ja 5 summa on 8
Lukujen 2 ja 4 summa on 6

</sample-output> -->

<sample-output>

The sum of numbers 3 and 5 is 8
The sum of numbers 2 and 4 is 6

</sample-output>


<code-states-visualizer input='{"code":"public class Example {\n    public static void main(String[] args) {\n        sum(3, 5);\n       \n        int number1 = 2;\n        int number2 = 4;\n       \n        sum(number1, number2);       \n    }\n   \n    public static void sum(int first, int second) {\n        System.out.println(\"\" + first + \" + \" + second + \" = \" + (first+ second));\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":12,"stack_to_render":[{"func_name":"sum:12","encoded_locals":{"first":3,"second":5},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"sum:12","encoded_locals":{"first":3,"second":5},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"3 + 5 = 8\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"sum:13","encoded_locals":{"first":3,"second":5},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"14","frame_id":14}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"3 + 5 = 8\n","event":"return","line":13,"stack_to_render":[{"func_name":"sum:13","encoded_locals":{"first":3,"second":5,"__return__":["VOID"]},"ordered_varnames":["first","second","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"3 + 5 = 8\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3 + 5 = 8\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"number1":2},"ordered_varnames":["number1"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3 + 5 = 8\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"number1":2,"number2":4},"ordered_varnames":["number1","number2"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"23","frame_id":23}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3 + 5 = 8\n","event":"call","line":12,"stack_to_render":[{"func_name":"sum:12","encoded_locals":{"first":2,"second":4},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27},{"func_name":"main:8","encoded_locals":{"number1":2,"number2":4},"ordered_varnames":["number1","number2"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"3 + 5 = 8\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"sum:12","encoded_locals":{"first":2,"second":4},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:8","encoded_locals":{"number1":2,"number2":4},"ordered_varnames":["number1","number2"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"3 + 5 = 8\n2 + 4 = 6\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"sum:13","encoded_locals":{"first":2,"second":4},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39},{"func_name":"main:8","encoded_locals":{"number1":2,"number2":4},"ordered_varnames":["number1","number2"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"3 + 5 = 8\n2 + 4 = 6\n","event":"return","line":13,"stack_to_render":[{"func_name":"sum:13","encoded_locals":{"first":2,"second":4,"__return__":["VOID"]},"ordered_varnames":["first","second","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:8","encoded_locals":{"number1":2,"number2":4},"ordered_varnames":["number1","number2"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"3 + 5 = 8\n2 + 4 = 6\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"number1":2,"number2":4},"ordered_varnames":["number1","number2"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3 + 5 = 8\n2 + 4 = 6\n","event":"return","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"number1":2,"number2":4,"__return__":["VOID"]},"ordered_varnames":["number1","number2","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"45","frame_id":45}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<!-- <programming-exercise name='Jakolasku' tmcname='osa02-Osa02_25.Jakolasku'> -->

<programming-exercise name='Division' tmcname='part02-Part02_25.Division'>


<!-- Kirjoita metodi `public static void jakolasku(int osoittaja, int nimittaja)`, joka tulostaa osoittajan ja nimittäjän jakolaskun tuloksen. Muistathan, että kahden kokonaisluvun jakolaskun tulos on kokonaisluku -- tässä halutaan tuloksena liukuluku. -->

Write a method `public static void division(int numerator, int denominator)` that prints the result of the division of the numerator by the denominator. Keep in mind that the result of the division of the integers is an integer -- in this case we want the result to be a floating point number.

</programming-exercise>


<!-- <programming-exercise name='Kolmella jaolliset' tmcname='osa02-Osa02_26.KolmellaJaolliset'> -->

<programming-exercise name='Divisible by three' tmcname='part02-Part02_26.DivisibleByThree'>


<!-- Kirjoita metodi `public static void kolmellaJaollisetValilta(int alku, int loppu)`, joka tulostaa kaikki kolmella jaolliset luvut annetulta väliltä. Luvut tulee tulostaa järjestyksessä pienimmästä suurimpaan. -->

Write a method `public static void divisibleByThreeInRange(int beginning, int end)` that prints all the numbers divisible by three in the given range. The numbers are to be printed in order from the smallest to the greatest.

<!-- ```java
public static void main(String[] args) {
    kolmellaJaollisetValilta(3, 6);
}
``` -->

```java
public static void main(String[] args) {
    divisibleByThreeInRange(3, 6);
}
```

<sample-output>

3
6

</sample-output>


<!-- ```java

public static void main(String[] args) {
    kolmellaJaollisetValilta(2, 10);
}

``` -->

```java

public static void main(String[] args) {
    divisibleByThreeInRange(2, 10);
}

```

<sample-output>

3
6
9

</sample-output>

</programming-exercise>


<!-- ### Parametrien arvot kopioituvat metodikutsussa -->

### The values of the parameters are copied in the method call

<!-- Metodikutsun yhteydessä **parametrien arvot kopioituvat**. Tämä tarkoittaa käytännössä sitä, että sekä main-metodissa että kutsuttavassa metodissa voi olla saman nimiset muuttujat, mutta muuttujien arvon muuttaminen kutsuttavan metodin sisällä ei muuta main-metodissa olevan muuttujan arvoa. Tarkastellaan tätä seuraavan ohjelman avulla. -->

When calling a method **the values of the parameters are copied**. In practice this means that both the main method and the method to be called can use similarly named variables, but changing the value of the parameter inside the method does not affect the value of the variable with the same name in the main method. Let's examine this behavior with the following program.

<!-- ```java
public class Esimerkki {
    public static void main(String[] args) {
        int mista = 5;
        int mihin = 10;

        tulostaLuvut(mista, mihin);
        System.out.println();

        mista = 8;

        tulostaLuvut(mista, mihin);
    }

    public static void tulostaLuvut(int mista, int mihin) {
        while (mista < mihin) {
            System.out.println(mista);
            mista++;
        }
    }
}
``` -->

```java
public class Example {
    public static void main(String[] args) {
        int min = 5;
        int max = 10;

        printNumbers(min, max);
        System.out.println();

        min = 8;

        printNumbers(min, max);
    }

    public static void printNumbers(int min, int max) {
        while (min < max) {
            System.out.println(min);
            min++;
        }
    }
}
```

<!-- Ohjelman tulostus on seuraava: -->

The output of the program is:

<sample-output>

5
6
7
8
9

8
9

</sample-output>

<!-- Alla sama askeleittaisena visualisaationa. Metodissa tulostaLuvut olevien muuttujien arvojen muuttaminen ei muuta metodin main muuttujien arvoja, vaikka ne ovatkin saman nimisiä. -->

Below follows the same program as a stepwise visualization. Changing the values of the variables in the method printNumbers does not affect the values in the main method, even though they have the same exact names.


<code-states-visualizer input='{"code":"public class Example {\n    public static void main(String[] args) {\n        int min = 5;\n        int max = 10;\n\n        printNumbers(min, max);\n \n        min = 8;\n\n        printNumbers(min, max);\n    }\n\n    public static void printNumbers(int min, int max) {\n        while (min < max) {\n            System.out.println(min);\n            min++;\n        }\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"min":5},"ordered_varnames":["min"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"14","frame_id":14}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"","event":"step_line","line":15,"stack_to_render":[{"func_name":"printNumbers:15","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":6,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":6,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"printNumbers:15","encoded_locals":{"min":6,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":6,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"50","frame_id":50}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":7,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":7,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"printNumbers:15","encoded_locals":{"min":7,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"61","frame_id":61},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"62","frame_id":62}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":7,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"70","frame_id":70}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"72","frame_id":72}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"73","frame_id":73},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"74","frame_id":74}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"printNumbers:15","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"81","frame_id":81},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"82","frame_id":82}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"89","frame_id":89},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"90","frame_id":90}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":9,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"91","frame_id":91},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"92","frame_id":92}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":9,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"93","frame_id":93},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"94","frame_id":94}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"printNumbers:15","encoded_locals":{"min":9,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"101","frame_id":101},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"102","frame_id":102}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":9,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"109","frame_id":109},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"110","frame_id":110}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":10,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"111","frame_id":111},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"112","frame_id":112}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":10,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"113","frame_id":113},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"114","frame_id":114}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"printNumbers:18","encoded_locals":{"min":10,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"121","frame_id":121},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"122","frame_id":122}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"return","line":18,"stack_to_render":[{"func_name":"printNumbers:18","encoded_locals":{"min":10,"max":10,"__return__":["VOID"]},"ordered_varnames":["min","max","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"125","frame_id":125},{"func_name":"main:6","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"126","frame_id":126}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"min":5,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"127","frame_id":127}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"130","frame_id":130}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"call","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"134","frame_id":134},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"135","frame_id":135}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"136","frame_id":136},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"137","frame_id":137}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"printNumbers:15","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"144","frame_id":144},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"145","frame_id":145}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"152","frame_id":152},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"153","frame_id":153}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":9,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"154","frame_id":154},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"155","frame_id":155}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":9,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"156","frame_id":156},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"157","frame_id":157}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"printNumbers:15","encoded_locals":{"min":9,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"164","frame_id":164},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"165","frame_id":165}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":9,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"172","frame_id":172},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"173","frame_id":173}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"printNumbers:16","encoded_locals":{"min":10,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"174","frame_id":174},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"175","frame_id":175}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"printNumbers:14","encoded_locals":{"min":10,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"176","frame_id":176},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"177","frame_id":177}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"printNumbers:18","encoded_locals":{"min":10,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"184","frame_id":184},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"185","frame_id":185}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"return","line":18,"stack_to_render":[{"func_name":"printNumbers:18","encoded_locals":{"min":10,"max":10,"__return__":["VOID"]},"ordered_varnames":["min","max","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"188","frame_id":188},{"func_name":"main:10","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"189","frame_id":189}],"globals":{},"ordered_globals":[],"func_name":"printNumbers","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"min":8,"max":10},"ordered_varnames":["min","max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"190","frame_id":190}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"5\n6\n7\n8\n9\n8\n9\n","event":"return","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"min":8,"max":10,"__return__":["VOID"]},"ordered_varnames":["min","max","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"192","frame_id":192}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<!-- Metodien parametrit ovat siis erillisiä muiden metodien muuttujista (tai parametreista), vaikka niillä olisikin sama nimi. Kun metodikutsun yhteydessä metodille annetaan muuttuja, muuttujan arvo kopioituu kutsuttavan metodin metodimäärittelyssä olevan parametrimuuttujan arvoksi. Kahdessa eri metodissa olevat muuttujat ovat erillisiä toisistaan. -->

So even if they had the same exact name, method parameters are distinct from the variables (or parameters) of different methods. When during a method call a variable is passed to a method, the value of that variable is copied to be used as the value of the parameter variable that is declared in the method definition. These two variables in different methods are different from each other.

<!-- Tarkastellaan vielä seuraavaa esimerkkiä, missä pääohjelmassa määritellään muuttuja `luku`. Muuttuja luku annetaan parametrina metodille `kasvataKolmella`. -->

As a further demonstration, let's consider the following example. We define a variable called `number` in the main method. That variable is passed as a parameter to the method `incrementByThree`.

<!-- ```java
// pääohjelma
public static void main(String[] args) {
    int luku = 1;
    System.out.println("Pääohjelman muuttujan luku arvo: " + luku);
    kasvataKolmella(luku);
    System.out.println("Pääohjelman muuttujan luku arvo: " + luku);
}

// metodi
public static void kasvataKolmella(int luku) {
    System.out.println("Metodin parametrin luku arvo: " + luku);
    luku = luku + 3;
    System.out.println("Metodin parametrin luku arvo: " + luku);
}
``` -->

```java
// main program
public static void main(String[] args) {
    int number = 1;
    System.out.println("The value of the variable 'number' in the main program: " + number);
    incrementByThree(number);
    System.out.println("The value of the variable 'number' in the main program: " + number);
}

// method
public static void incrementByThree(int number) {
    System.out.println("The value of the method parameter 'number': " + number);
    number = number + 3;
    System.out.println("The value of the method parameter 'number': " + number);
}
```

<!-- Ohjelman suoritus aiheuttaa seuraavanlaisen tulostuksen. -->

The execution of the program produces the following output.

<!-- <sample-output>

Pääohjelman muuttujan luku arvo: 1
Metodin parametrin luku arvo: 1
Metodin parametrin luku arvo: 4
Pääohjelman muuttujan luku arvo: 1

</sample-output> -->

<sample-output>

The value of the variable 'number' in the main program: 1
The value of the method parameter 'number': 1
The value of the method parameter 'number': 4
The value of the variable 'number' in the main program: 1

</sample-output>

<!-- Kun metodin sisällä kasvatetaan muuttujan `luku` arvoa kolmella, se onnistuu. Tämä ei kuitenkaan näy pääohjelmassa olevassa muuttujassa `luku`. Pääohjelmassa oleva muuttuja `luku` on eri kuin metodissa oleva muuttuja `luku`. -->

Incrementing the variable `number` inside the method poses no problem. This does not cause changes in the variable `number` inside the main program. This latter `number` residing in the main is different from the one in the method.

<!--
<code-states-visualizer input='{"code":"public class Esimerkki {\n\n   public static void main(String[] args) {\n      int luku = 1;\n      System.out.println(\"Pääohjelman luvun arvo: \" + luku);\n      kasvataKolmella(luku);\n      System.out.println(\"Pääohjelman luvun arvo: \" + luku);\n   }\n\n   public static void kasvataKolmella(int luku) {\n      System.out.println(\"Metodin luvun arvo: \" + luku);\n      luku = luku + 3;\n      System.out.println(\"Metodin luvun arvo: \" + luku);\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\n","event":"call","line":11,"stack_to_render":[{"func_name":"kasvataKolmella:11","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9},{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"10","frame_id":10}],"globals":{},"ordered_globals":[],"func_name":"kasvataKolmella","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"kasvataKolmella:11","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11},{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"kasvataKolmella","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\nMetodin luvun arvo: 1\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"kasvataKolmella:12","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21},{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"kasvataKolmella","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\nMetodin luvun arvo: 1\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"kasvataKolmella:13","encoded_locals":{"luku":4},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"kasvataKolmella","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\nMetodin luvun arvo: 1\nMetodin luvun arvo: 4\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"kasvataKolmella:14","encoded_locals":{"luku":4},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39},{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"kasvataKolmella","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\nMetodin luvun arvo: 1\nMetodin luvun arvo: 4\n","event":"return","line":14,"stack_to_render":[{"func_name":"kasvataKolmella:14","encoded_locals":{"luku":4,"__return__":["VOID"]},"ordered_varnames":["luku","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"kasvataKolmella","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\nMetodin luvun arvo: 1\nMetodin luvun arvo: 4\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\nMetodin luvun arvo: 1\nMetodin luvun arvo: 4\nPääohjelman luvun arvo: 1\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Pääohjelman luvun arvo: 1\nMetodin luvun arvo: 1\nMetodin luvun arvo: 4\nPääohjelman luvun arvo: 1\n","event":"return","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"luku":1,"__return__":["VOID"]},"ordered_varnames":["luku","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer> -->


<code-states-visualizer input='{"code":"public class Example {\n\n   public static void main(String[] args) {\n      int number = 1;\n      System.out.println(\"The value of the number in the main program: \" + number);\n      incrementByThree(number);\n      System.out.println(\"The value of the number in the main program: \" + number);\n   }\n\n   public static void incrementByThree(int number) {\n      System.out.println(\"The value of the number in the  method: \" + number);\n      number = number + 3;\n      System.out.println(\"The value of the number in the  method: \" + number);\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"The value of the number in the main program: 1\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"The value of the number in the main program: 1\n","event":"call","line":11,"stack_to_render":[{"func_name":"incrementByThree:11","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9},{"func_name":"main:6","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"10","frame_id":10}],"globals":{},"ordered_globals":[],"func_name":"incrementByThree","heap":{}},{"stdout":"The value of the number in the main program: 1\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"incrementByThree:11","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11},{"func_name":"main:6","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"incrementByThree","heap":{}},{"stdout":"The value of the number in the main program: 1\nThe value of the number in the  method: 1\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"incrementByThree:12","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21},{"func_name":"main:6","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"incrementByThree","heap":{}},{"stdout":"The value of the number in the main program: 1\nThe value of the number in the  method: 1\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"incrementByThree:13","encoded_locals":{"number":4},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:6","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"incrementByThree","heap":{}},{"stdout":"The value of the number in the main program: 1\nThe value of the number in the  method: 1\nThe value of the number in the  method: 4\n","event":"step_line","line":14,"stack_to_render":[{"func_name":"incrementByThree:14","encoded_locals":{"number":4},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39},{"func_name":"main:6","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"incrementByThree","heap":{}},{"stdout":"The value of the number in the main program: 1\nThe value of the number in the  method: 1\nThe value of the number in the  method: 4\n","event":"return","line":14,"stack_to_render":[{"func_name":"incrementByThree:14","encoded_locals":{"number":4,"__return__":["VOID"]},"ordered_varnames":["number","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:6","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"incrementByThree","heap":{}},{"stdout":"The value of the number in the main program: 1\nThe value of the number in the  method: 1\nThe value of the number in the  method: 4\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"The value of the number in the main program: 1\nThe value of the number in the  method: 1\nThe value of the number in the  method: 4\nThe value of the number in the main program: 1\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"The value of the number in the main program: 1\nThe value of the number in the  method: 1\nThe value of the number in the  method: 4\nThe value of the number in the main program: 1\n","event":"return","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"number":1,"__return__":["VOID"]},"ordered_varnames":["number","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>



<!-- Parametri `luku` kopioidaan metodin käyttöön, eli metodia `kasvataKolmella` varten luodaan oma muuttuja nimeltä `luku`, johon pääohjelmassa olevan muuttujan `luku` arvo kopioidaan metodikutsun yhteydessä. Metodissa `kasvataKolmella` oleva muuttuja `luku` on olemassa vain metodin suorituksen ajan, eikä sillä ole yhteyttä pääohjelman samannimiseen muuttujaan. -->

The parameter `number`is copied for the method to use -- in other words, a new variable called `number` is created for the `incrementByThree` method, and the value of the variable `number` in the main program is copied as its value when the method is called. The variable `number` inside the method `incrementByThree` exists only for the duration of the method execution, and it has no relation to the similarly named variable in the main program.


<quiz id="2169d451-4364-5aa3-ba85-9dedd6e8abfc"></quiz>


<!-- ## Metodi voi palauttaa arvon -->

## Methods can return values

<!-- Metodin määrittelyssä kerrotaan palauttaako metodi arvon. Jos metodi palauttaa arvon, tulee metodimäärittelyn yhteydessä kertoa palautettavan arvon tyyppi. Muulloin määrittelyssä käytetään avainsanaa `void`. Tähän mennessä tekemämme metodit ovat määritelty avainsanaa `void` käyttäen eli eivät ole palauttaneet arvoa. -->

The definition of a method indicates whether that method returns a value. If it does, the method definition is to express to type of the return value. Otherwise the keyword `void` is used in the definition. The methods we've created thus far have been defined with the keyword `void` so they have returned no values.

<!-- ```java
public static **void** kasvataKolmella() {
    ...
}
``` -->

```java
public static **void** incrementByThree() {
    ...
}
```

<!-- Avainsana `void` tarkoittaa että metodi ei palauta mitään. Jos haluamme, että metodi palauttaa arvon, tulee avainsanan `void` paikalle asettaa palautettavan muuttujan tyyppi. Seuraavassa esimerkissä on määritelty metodi `palautetaanAinaKymppi`, joka palauttaa kokonaislukutyyppisen (`int`) muuttujan (tässä arvon 10). -->

The keyword `void` indicates that the method returns nothing. If we want the method to return a value, the keyword must be replaced with the type of the return variable. In the following example there is a method called `alwaysReturnsTen` which returns an integer-type (`int`) variable (in this case the value 10).

<!-- Konkreettinen arvon palautus tapahtuu komennolla `return`, jota seuraa palautettava arvo (tai muuttujan nimi, jonka arvo palautetaan). -->

In concrete terms, returning the value happens with the command `return` followed by the value to be returned (or the name of the variable whose value is to be returned).

<!-- ```java
public static int palautetaanAinaKymppi() {
    return 10;
}
``` -->

```java
public static int alwaysReturnsTen() {
    return 10;
}
```

<!-- Yllä määritelty metodi palauttaa sitä kutsuttaessa `int`-tyyppisen arvon `10`. Jotta metodin palauttamaa arvoa voisi käyttää, tulee se ottaa talteen muuttujaan. Tämä tapahtuu samalla tavalla kuin normaali muuttujan arvon asetus, eli yhtäsuuruusmerkillä. -->

The method defined above returns an `int` type value `10` when it is called. The return value must be stored if it is to be used. This is done the same way as normal assignment of a variable value -- with the equality sign.

<!-- ```java
public static void main(String[] args) {
    int luku = palautetaanAinaKymppi();

    System.out.println("metodi palautti luvun " + luku);
}
``` -->

```java
public static void main(String[] args) {
    int number = alwaysReturnsTen();

    System.out.println("the method returned the number " + number);
}
```

<!-- Metodin paluuarvo sijoitetaan `int`-tyyppiseen muuttujaan aivan kuin mikä tahansa muukin int-arvo. Paluuarvo voi toimia myös osana mitä tahansa lauseketta. -->

The return value of the method is placed in an `int` type variable as any other int value. The return value can also used as a part of any expression.


<!-- ```java
double luku = 4 * palautetaanAinaKymppi() + (palautetaanAinaKymppi() / 2) - 8;

System.out.println("laskutoimituksen tulos " + luku);
``` -->

```java
double number = 4 * alwaysReturnsTen() + (alwaysReturnsTen() / 2) - 8;

System.out.println("the result of the calculation " + luku);
```

<!-- Kaikki tähän mennessä näkemämme muuttujatyypit voidaan palauttaa metodista. -->

All the variable types seen so far can be returned from a method.

TODO: miksi esimerkkikoodit eivät toimi?

<table class="table">
  <tr>
    <!-- <th>Palautettavan arvon tyyppi</th> -->
    <th>Type of return value</th>
    <!-- <th>Esimerkki</th> -->
    <th>Example</th>
  </tr>
  <tr>
    <!-- <td>Metodi ei palauta arvoa</td> -->
    <td>Method returns no value</td>
    <td>
<!-- ```java
public static void metodiJokaEiPalautaMitaan() {
    // metodin runko
}
``` -->
```java
public static void methodThatReturnsNothing() {
    // method body
}
```
    </td>
  </tr>
  <tr>
    <!-- <td>Metodi palauttaa `int`-tyyppisen muuttujan</td> -->
    <td>Method returns `int` type variable</td>
    <td>
<!-- ```java
public static int metodiJokaPalauttaaKokonaisLuvun() {
    // metodin runko, tarvitsee return-komennon
}
``` -->
```java
public static int methodThatReturnsInteger() {
    //method body, return statement must be included
}
```
    </td>
  </tr>
  <tr>
    <!-- <td>Metodi palauttaa `double`-tyyppisen muuttujan</td> -->
    <td>Method returns `double` type variable</td>
    <td>
<!-- ```java
public static double metodiJokaPalauttaaLiukuluvun() {
    // metodin runko, tarvitsee return-komennon
}
``` -->
```java
public static double methodThatReturnsFloatingPointNumber() {
    // method body, return statement must be included
}
```
    </td>
  </tr>
</table>


<programming-exercise name='Number uno' tmcname='part02-Part02_27.NumberUno'>

<!-- Kirjoita metodi `public static int numeroUno()`, joka palauttaa arvon 1. -->

Write a method `public static int numberUno()` that returns the value 1.

</programming-exercise>


<!-- <programming-exercise name='Merkkijono' tmcname='osa02-Osa02_28.Merkkijono'> -->
<programming-exercise name='Word' tmcname='part02-Part02_28.Word'>


<!-- Kirjoita metodi `public static String merkkijono()`. Metodin tulee palauttaa itse päättämäsi merkkijono. -->

Write a method `public static String word()`. The method must return a string of your choice.

</programming-exercise>

<!-- Kun metodin suorituksessa päädytään komentoon `return`, metodin suoritus päättyy ja metodista palautetaan arvo sitä kutsuneelle metodille. -->

When the execution inside a method reaches the command `return`, the execution of that method ends and the value is returned to the method that called this method.

<!-- Komentoa `return` seuraavia lähdekoodirivejä ei koskaan suoriteta. Jos ohjelmoija lisää lähdekoodia return-komennon jälkeen paikkaan, jota ei metodin suorituksessa voida koskaan saavuttaa, ohjelmointiympäristö antaa virheviestin. -->

The lines of source code following the command `return` are never executed. Should the programmer add source code in a place after the return command, always unreachable in the execution of the method, the IDE will produce an error message.

<!-- Seuraavanlainen metodi on virheellinen ohjelmointiympäristön näkökulmasta. -->

From the point of view of an IDE the a method like the following is faulty.

<!-- ```java
public static int virheellinenMetodi() {
    return 10;
    System.out.println("Väitän palauttavani kokonaisluvun, mutten palauta sitä.");
}
``` -->

```java
public static int faultyMethod() {
    return 10;
    System.out.println("I claim to return an integer, but I won't.");
}
```

<!-- Seuraava metodi taas toimii, sillä -- vaikka return-komennon alla on lähdekoodia -- jokainen metodin lause on mahdollista saavuttaa. -->

The next method works since it is possible to reach every statement in it -- even though there is source code below the return command.

<!-- ```java
public static int toimivaMetodi(int parametri) {
    if (parametri > 10) {
        return 10;
    }

    System.out.println("Parametrina saatu luku on kymmenen tai pienempi.");

    return parametri;
}
``` -->

```java
public static int functioningMethod(int parameter) {
    if (parameter > 10) {
        return 10;
    }

    System.out.println("The number received as parameter is ten or lesser.");

    return parametri;
}
```

<!-- Mikäli metodi on muotoa `public static void metodinNimi()`, voi metodista palata -- tai toisin sanoen metodin suorituksen voi lopettaa kesken -- komennolla `return`, jota ei seuraa arvo. Esimerkiksi: -->

If the method is of the form `public static void nameOfMethod()` it is possible to return from it -- in other words to stop its execution in that place -- by using the command `return` without following it by any value. For instance:


<!-- ```java
public static void jakolasku(int osoittaja, int nimittaja) {
    if (nimittaja == 0) {
        System.out.println("Nollalla ei saa jakaa!");
        return;
    }

    System.out.println("" + osoittaja + " / " + nimittaja + " = " + (1.0 * osoittaja / nimittaja));
}
``` -->


<!-- ## Muuttujien määrittely metodien sisällä -->

## Defining variables inside methods

<!-- Muuttujien määrittely tapahtuu metodeissa samalla tavalla kuin "pääohjelmassa". Seuraava metodi laskee parametrina saamiensa lukujen keskiarvon. Keskiarvon laskemisessa käytetään apumuuttujia `summa` ja `ka`. -->

Defining variables inside methods is done in the same manner as in the "main program". The method that follows calculates the average of the numbers it receives as parameters. Variables `sum` and `avg` are used to help in the calculation.

<!-- ```java
public static double keskiarvo(int luku1, int luku2, int luku3) {
    int summa = luku1 + luku2 + luku3;
    double ka = summa / 3.0;

    return ka;
}
``` -->

```java
public static double average(int number1, int number2, int number3) {
    int sum = number1 + number2 + number3;
    double avg = sum / 3.0;

    return avg;
}
```

<!-- Metodin kutsu voi tapahtua esim seuraavasti -->

One way to call the method is the following.

<!-- ```java
public static void main(String[] args) {
    Scanner lukija = new Scanner(System.in);

    System.out.print("Anna ensimmäinen luku: ");
    int eka = Integer.valueOf(lukija.nextLine());

    System.out.print("Anna toinen luku: ");
    int toka = Integer.valueOf(lukija.nextLine());

    System.out.print("Anna kolmas luku: ");
    int kolmas = Integer.valueOf(lukija.nextLine());

    double keskiarvonTulos = keskiarvo(eka, toka, kolmas);

    System.out.print("Lukujen keskiarvo: " + keskiarvonTulos);
}
``` -->

```java
public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Enter the first number: ");
    int first = Integer.valueOf(scanner.nextLine());

    System.out.print("Enter the second number: ");
    int second = Integer.valueOf(scanner.nextLine());

    System.out.print("Enter the third number: ");
    int third = Integer.valueOf(scanner.nextLine());

    double averageResult = average(first, second, third);

    System.out.print("The average of the numbers: " + averageResult);
}
```

<!-- Metodissa määritellyt muuttujat näkyvät vain metodissa. Tämä tarkoittaa sitä, että yllä metodin `keskiarvo` sisäiset muuttujat `summa` ja `ka` eivät näy pääohjelmaan. Tyypillinen ohjelmoinnin harjoittelussa eteen tuleva virhe on yrittää käyttää metodia seuraavasti. -->

Variables defined in a method are only visible inside that method. In the example above, this means that the variables `sum` and `avg` defined inside the method `average` are not visible in the main program. A typical mistake for a learning programmer is to try and use a method in the following way.


<!-- ```java
public static void main(String[] args) {
    int eka = 3;
    int toka = 8;
    int kolmas = 4;

    keskiarvo(eka, toka, kolmas);

    // yritetään käyttää metodin sisäistä muuttujaa, EI TOIMI!
    System.out.print("Lukujen keskiarvo: " + ka);
}
``` -->

```java
public static void main(String[] args) {
    int first = 3;
    int second = 8;
    int third = 4;

    average(first, second, third);

    // trying to use a method's internal variable, DOES NOT WORK!
    System.out.print("The average of the numbers: " + avg);
}
```

<!-- Yllä yritetään käyttää metodin `keskiarvo` sisällä määriteltyä muuttujaa `ka` ja tulostaa sen arvo. Muuttuja `ka` on kuitenkin olemassa vain metodin `keskiarvo` sisällä, eikä siihen pääse käsiksi ulkopuolelta. -->

Above the programmer tries to use the variable `avg` that is defined inside the method `average`, and then print its value. However, the variable `avg` only exists inside the method `average`, and it cannot be accessed from outside it.

<!-- Myös seuraavanlaista virhettä näkee usein. -->

The following mistakes are also commonplace.

<!-- ```java
public static void main(String[] args) {
    int eka = 3;
    int toka = 8;
    int kolmas = 4;

    // yritetään käyttää pelkkää metodin nimeä, EI TOIMI!
    System.out.print("Lukujen keskiarvo: " + keskiarvo);
}
``` -->

```java
public static void main(String[] args) {
    int first = 3;
    int second = 8;
    int third = 4;

    // trying to use the method name only, DOES NOT WORK!
    System.out.print("The average of the numbers: " + average);
}
```

<!-- Yllä yritetään käyttää metodin `keskiarvo` nimeä muuttujamaisesti. Metodia tulee kuitenkin kutsua. -->

In the example above there is an attempt to use the name of the method `average` as if it were a variable. A method has to be called, however.

<!-- Toimiva tapa metodin tuloksen sijoittamisen apumuuttujaan lisäksi on suorittaa metodikutsu suoraan tulostuslauseen sisällä: -->

In addition to placing the result of the method into a help variable, another working solution is to execute the method call directly inside the print statement:

<!-- ```java
public static void main(String[] args) {
    int eka = 3;
    int toka = 8;
    int kolmas = 4;

    // kutsutaan metodia tulostuslauseessa, TOIMII!
    System.out.print("Lukujen keskiarvo: " + keskiarvo(eka, toka, kolmas));
}
``` -->

```java
public static void main(String[] args) {
    int first = 3;
    int second = 8;
    int third = 4;

    // calling the method inside the print statement, DOES WORK!
    System.out.print("The average of the numbers: " + average(first, second, third));
}
```

<!-- Tässä siis ensin tapahtuu metodikutsu joka palauttaa arvon 5.0 joka sitten tulostetaan tulostuskomennon avulla. -->

Here the method call occurs first and it returns the value 5.0. After this that value is printed with the help of the print statement.

<quiz id="270d9aea-6ee9-568d-8775-7dfdea451f90"></quiz>



<!-- ## Palautettavan arvon laskeminen metodissa -->

## Calculating the return value inside a method

<!-- Palautettavan arvon ei tarvitse olla täysin ennalta määritelty, vaan se voidaan laskea. Metodista arvon palauttavalle return-komennolle voidaan antaa myös lauseke, joka evaluoituu ennen kuin arvo palautetaan. -->

The value to be returned need not be fully pre-defined - it can also be calculated. The return command that returns a value from the method can also be given an expression that is evaluated before the returning.

<!-- Seuraavassa esimerkissä määritellään metodi summa, joka laskee kahden muuttujan arvon yhteen ja palauttaa summan. Yhteen laskettavien muuttujien `eka` ja `toka` arvot saadaan metodin parametrina. -->

In the following example we'll define the method sum that adds together the values of two variables and returns the sum. The values of the variables that are summed are received as method parameters.

<!-- ```java
public static int summa(int eka, int toka) {
    return eka + toka;
}
``` -->

```java
public static int sum(int first, int second) {
    return first + second;
}
```

<!-- Kun metodin suorituksessa päädytään lauseeseen `return eka + toka;`, evaluoidaan lauseke `eka + toka`, jonka arvo lopulta palautetaan. -->

When the execution of the method reaches the statement `return first + second;`, the expression `first + second` is evaluated, and later its value will be returned.

<!-- Metodin kutsutaan seuraavasti. Alla metodia käytetään laskemaan luvut 2 ja 7 yhteen. Metodikutsusta saatava paluuarvo asetetaan muuttujaan `lukujenSumma`: -->

The method is called in the following manner. Below the numbers 2 and 7 are added together with the method `sum`. The return value produces by the method call is placed into the variable `sumOfNumbers`.

<!-- ```java
int lukujenSumma = summa(2, 7);
// lukujenSumma on nyt 9
``` -->

```java
int sumOfNumbers = sum(2, 7);
// sumOfNumbers is now 9
```

<!-- Laajennetaan edellistä esimerkkiä siten, että käyttäjä syöttää luvut. -->

Let's expand the previous examply so that the numbers are entered by the

<!-- ```java
public static void main(String[] args) {
    Scanner lukija = new Scanner(System.in);

    System.out.print("Anna ensimmäinen luku: ");
    int eka = Integer.valueOf(lukija.nextLine());

    System.out.print("Anna toinen luku: ");
    int toka = Integer.valueOf(lukija.nextLine());

    System.out.print("Luvut ovat yhteensä: " + summa(eka, toka));
}

public static int summa(int eka, int toka) {
    return eka + toka;
}
``` -->

```java
public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Enter the first number: ");
    int first = Integer.valueOf(scanner.nextLine());

    System.out.print("Enter the second number: ");
    int second = Integer.valueOf(scanner.nextLine());

    System.out.print("The combined sum of the numbers is: " + sum(first, second));
}

public static int sum(int first, int second) {
    return first + second;
}
```

<!-- Yllä olevassa esimerkissä metodin paluuarvoa ei aseteta muuttujaan, vaan sitä käytetään suoraan osana tulostusta. Tällöin tulostuskomennon suoritus tapahtuu siten, että tietokone selvittää ensin tulostettavan merkkijonon `"Luvut ovat yhteensä: " + summa(eka, toka)`. Ensin tietokone etsii muuttujat `eka` ja `toka`, ja kopioi niiden arvot metodin `summa` parametrien arvoiksi. Tämän jälkeen metodissa lasketaan parametrien arvot yhteen, jonka jälkeen summa palauttaa arvon. Tämä arvo asetetaan metodikutsun `summa` paikalle, jonka jälkeen summa liitetään merkkijonon `"Luvut ovat yhteensä: "` jatkeeksi. -->

In the example above the return value of the method is not stored in a variable, but rather is directly used as part of the print.

<!-- Koska metodille annettavat arvot kopioidaan metodin parametreihin, metodin parametrien nimillä ja metodin kutsujan puolella määritellyillä muuttujien nimillä ei ole oikeastaan mitään tekemistä keskenään. Edellisessä esimerkissä sekä pääohjelman muuttujat että metodin parametrit olivat "sattumalta" nimetty samoin (eli `eka` ja `toka`). Seuraava toimii täysin samalla tavalla vaikka muuttujat ovatkin eri nimisiä: -->

The values passed to a method are copied to its paremeters. Due to this the names of the parameters and the names of the variables defined on the side of the caller really have nothing to do with each other. In the previous example both the variables of the main program and the method parameters were named similarly (`first` and `second`) "by accident". The code below will function in exactly the same manner even though the variables are named differently:

<!-- ```java
public static void main(String[] args) {
    Scanner lukija = new Scanner(System.in);

    System.out.print("Anna ensimmäinen luku: ");
    int luku1 = Integer.valueOf(lukija.nextLine());

    System.out.print("Anna toinen luku: ");
    int luku2 = Integer.valueOf(lukija.nextLine());

    System.out.print("Luvut ovat yhteensä: " + summa(luku1, luku2));
}

public static int summa(int eka, int toka) {
    return eka + toka;
}
``` -->

```java
public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Enter the first number: ");
    int number1 = Integer.valueOf(scanner.nextLine());

    System.out.print("Enter the second number: ");
    int number2 = Integer.valueOf(scanner.nextLine());

    System.out.print("The total sum of the numbers is: " + sum(number1, number2));
}

public static int sum(int first, int second) {
    return first + second;
}
```

<!-- Nyt pääohjelman muuttujan `luku1` arvo kopioituu metodin parametrin `eka` arvoksi ja pääohjelman muuttujan `luku2` arvo kopioituu metodin parametrin `toka` arvoksi. -->

Now the value of the variable `number1` is copied as the value of the method parameter `first`, and the value of the variable `number1` copied as the value of the parameter `second`.


<quiz id="664a4f19-6fbc-5a76-83cd-aabd32a94809"></quiz>


<youtube id='zEHvycTo81c'></youtube>


<!-- <programming-exercise name='Lukujen summa' tmcname='osa02-Osa02_29.LukujenSumma'> -->

<programming-exercise name='Summation' tmcname='part02-Part02_29.Summation'>


<!-- Täydennä tehtäväpohjassa olevaa metodia `summa` siten, että se laskee ja palauttaa parametrina olevien lukujen summan. -->

Expand the method `sum` in the exercise template so that it calculates and returns the sum of the numbers that are given as the parameters.

<!-- Tee metodi seuraavaan runkoon: -->

Create the method using the following structure:

<!-- ```java
public static int summa(int luku1, int luku2, int luku3, int luku4) {
    // kirjoita koodia tähän
    // muista että metodissa on oltava (lopussa) return!
}

public static void main(String[] args) {
    int vastaus = summa(4, 3, 6, 1);
    System.out.println("Summa: " + vastaus);
}
``` -->

```java
public static int sum(int number1, int number2, int number3, int number4) {
    // write your code here
    // remember to include return (at the end)!
}

public static void main(String[] args) {
    int answer = sum(4, 3, 6, 1);
    System.out.println("Sum: " + answer);
}
```

<!-- Ohjelman tulostus: -->

The output of the program:

<!-- <sample-output>

Summa: 14

</sample-output> -->

<sample-output>

Sum: 14

</sample-output>

<!-- **Huom:** kun tehtävässä sanotaan että metodin pitää _palauttaa_ jotain, tarkoittaa tämä sitä että metodissa tulee olla määritelty paluutyyppi ja `return`-komento jolla haluttu asia palautetaan. Metodi ei itse tulosta (eli käytä komentoa `System.out.println(..)`), tulostuksen hoitaa metodin kutsuja, eli tässä tapauksessa pääohjelma. -->

**N.B.:** when an exercise describes a method that should _return_ something, this means that the type of the return value must be declared in the method definition, and that the method contains a `return` command that returns the wanted data. The method itself will print nothing (i.e. will not use the command `System.out.println`) - that task is left to the method caller, which in this case is the main program.

</programming-exercise>


<!-- <programming-exercise name='Pienin' tmcname='osa02-Osa02_30.Pienin'> -->

<programming-exercise name='Smallest' tmcname='part02-Part02_30.Smallest'>


<!-- Tee kaksiparametrinen metodi `pienin`, joka palauttaa parametrina saamistaan luvuista pienemmän arvon. Jos lukujen arvo on sama, voidaan palauttaa kumpi tahansa luvuista. -->

Define a two-parameter method `smallest` that returns the smaller of the two numbers it is passed as parameters.

<!-- ```java
public static int pienin(int luku1, int luku2) {
    // kirjoita koodia tähän
    // älä tulosta metodin sisällä mitään

    // lopussa oltava komento return
}

public static void main(String[] args) {
    int vastaus =  pienin(2, 7);
    System.out.println("Pienin: " + vastaus);
}
``` -->

```java
public static int smallest(int number1, int number2) {
    // write your code here
    // do not print anything inside the method

    // there must be a return command at the end
}

public static void main(String[] args) {
    int answer =  smallest(2, 7);
    System.out.println("Smallest: " + answer);
}
```


<!-- Ohjelman tulostus: -->

The output of the program:

<!-- <sample-output>

Pienin: 2

</sample-output> -->

<sample-output>

Smallest: 2

</sample-output>

</programming-exercise>


<!-- <programming-exercise name='Suurin' tmcname='osa02-Osa02_31.Suurin'> -->

<programming-exercise name='Greatest' tmcname='part02-Part02_31.Greatest'>


<!-- Tee metodi `suurin`, joka saa kolme lukua ja palauttaa niistä suurimman. Jos suurimpia arvoja on useita, riittää niistä jonkun palauttaminen. Tulostus tapahtuu pääohjelmassa. -->

Define a method called `greatest` that is given three numbers and will return the greatest of them. If there are multiple greatest values, returning one of them will suffice. Printing will take place in the main program.

<!-- ```java
public static int suurin(int luku1, int luku2, int luku3) {
  // kirjoita koodia tähän
}

public static void main(String[] args) {
  int vastaus =  suurin(2, 7, 3);
  System.out.println("Suurin: " + vastaus);
}
``` -->

```java
public static int greatest(int number1, int number2, int number3) {
  // write some code here
}

public static void main(String[] args) {
  int answer =  greatest(2, 7, 3);
  System.out.println("Greatest: " + answer);
}
```

<!-- Ohjelman tulostus: -->

The output of the program:

<!-- <sample-output>

Suurin: 7

</sample-output> -->

<sample-output>

Greatest: 7

</sample-output>

</programming-exercise>


<!-- <programming-exercise name='Lukujen keskiarvo' tmcname='osa02-Osa02_32.LukujenKeskiarvo'> -->

<programming-exercise name='Averaging' tmcname='part02-Part02_32.Averaging'>


<!-- Tee metodi `keskiarvo`, joka laskee parametrina olevien lukujen keskiarvon. Metodin sisällä tulee käyttää apuna edellä tehtyä metodia `summa`! -->

Create a method called `average` that calculates the average of the numbers passed as parameters. The previously created method `sum` must be used inside this method!

<!-- Tee metodi seuraavaan runkoon: -->

Define the method in the following template:

<!-- ```java
public static int summa(int luku1, int luku2, int luku3, int luku4) {
    // voit kopioida metodin summa toteutuksen tänne
}

public static double keskiarvo(int luku1, int luku2, int luku3, int luku4) {
    // kirjoita koodia tähän
    // laske alkioiden summa kutsumalla metodia summa
}

public static void main(String[] args) {
    double vastaus = keskiarvo(4, 3, 6, 1);
    System.out.println("Keskiarvo: " + vastaus);
}
``` -->

```java
public static int sum(int number1, int number2, int number3, int number4) {
    // you can copy your implementation of the method sum here
}

public static double average(int number1, int number2, int number3, int number4) {
    // write your code here
    // calculate the sum of the elements by calling the method sum
}

public static void main(String[] args) {
    double result = average(4, 3, 6, 1);
    System.out.println("Average: " + result);
}
```

<!-- Ohjelman tulostus: -->

The output of the program:

<!-- <sample-output>

Keskiarvo: 3.5

</sample-output> -->

<sample-output>

Average: 3.5

</sample-output>

<!-- Muistathan miten kokonaisluku (`int`) muutetaan desimaaliluvuksi (`double`)! -->

You do remember how to convert an integer (`int`) into a decimal number (`double`), don't you?

</programming-exercise>


<!-- ## Metodikutsujen suoritus ja kutsupino -->

## Execution of method calls and the call stack

<!-- Mistä tietokone tietää minne metodin suorituksen jälkeen tulee palata? -->

How does the computer remember where to return after the execution of a method?

<!-- Java-lähdekoodin suoritusympäristö pitää kirjaa suoritettavasta metodista kutsupinossa. **Kutsupino** sisältää kehyksiä, joista jokainen sisältää tiedon kyseisen metodin sisäisistä muuttujista sekä niiden arvoista. Kun metodia kutsutaan, kutsupinoon luodaan uusi kehys, joka sisältää metodin sisältämät muuttujat. Kun metodin suoritus loppuu, metodiin liittyvä kehys poistetaan kutsupinosta, jolloin suoritusta jatketaan kutsupinon edeltävästä metodista. -->

The execution environment of Java source code keeps track of the method being executed in the call stack. **The call stack** contains frames, each of which includes information about a specific method: its internal variables and their values. When a method is called, a new frame containing its variables is created in the call stack. When the execution of a method ends, the frame relating to that method is removed from the call stack, which leads to execution resuming at the previous method of the stack.

<!-- Alla olevan visualisaation oikealla laidalla näytetään kutsupinon toimintaa. Metodikutsun yhteydessä kutsupinoon luodaan uusi kehys, joka poistetaan metodikutsusta poistuttaessa. -->

On the right edge of the visualization below the functioning of the call stack is displayed. At the moment of a method call a new frame is created in the stack, and on exiting the method call that frame is removed.


<!-- <code-states-visualizer input='{"code":"public class Esimerkki {\n   public static void main(String[] args) {\n      // ohjelmakoodi\n      System.out.println(\"Kokeillaan pääsemmekö metodimaailmaan:\");\n      tervehdi();\n\n      System.out.println(\"Näyttää siltä, kokeillaan vielä:\");\n      tervehdi();\n      tervehdi();\n      tervehdi();\n   }\n\n   // omat metodit\n   public static void tervehdi() {\n      System.out.println(\"Terveiset metodimaailmasta!\");\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\n","event":"call","line":15,"stack_to_render":[{"func_name":"tervehdi:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6},{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"tervehdi:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8},{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tervehdi:16","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16},{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\n","event":"return","line":16,"stack_to_render":[{"func_name":"tervehdi:16","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18},{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"19","frame_id":19}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"24","frame_id":24}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\n","event":"call","line":15,"stack_to_render":[{"func_name":"tervehdi:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25},{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"tervehdi:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27},{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tervehdi:16","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"35","frame_id":35},{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"36","frame_id":36}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\n","event":"return","line":16,"stack_to_render":[{"func_name":"tervehdi:16","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"37","frame_id":37},{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\n","event":"call","line":15,"stack_to_render":[{"func_name":"tervehdi:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"tervehdi:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43},{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tervehdi:16","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51},{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"return","line":16,"stack_to_render":[{"func_name":"tervehdi:16","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53},{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"call","line":15,"stack_to_render":[{"func_name":"tervehdi:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"57","frame_id":57},{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"tervehdi:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"59","frame_id":59},{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"tervehdi:16","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"67","frame_id":67},{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"68","frame_id":68}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"return","line":16,"stack_to_render":[{"func_name":"tervehdi:16","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69},{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"70","frame_id":70}],"globals":{},"ordered_globals":[],"func_name":"tervehdi","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Kokeillaan pääsemmekö metodimaailmaan:\nTerveiset metodimaailmasta!\nNäyttää siltä, kokeillaan vielä:\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\nTerveiset metodimaailmasta!\n","event":"return","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"73","frame_id":73}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer> -->


<code-states-visualizer input='{"code":"public class Example {\n   public static void main(String[] args) {\n      // program code\n      System.out.println(\"Let`s try if we can travel to the method world:\");\n      greet();\n\n      System.out.println(\"Looks like we can, let`s try again:\");\n      greet();\n      greet();\n      greet();\n   }\n\n   // omat metodit\n   public static void greet() {\n      System.out.println(\"Greetings from the method world!\");\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\n","event":"call","line":15,"stack_to_render":[{"func_name":"greet:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6},{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"greet:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8},{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"9","frame_id":9}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"greet:16","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16},{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\n","event":"return","line":16,"stack_to_render":[{"func_name":"greet:16","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18},{"func_name":"main:5","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"19","frame_id":19}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"24","frame_id":24}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\n","event":"call","line":15,"stack_to_render":[{"func_name":"greet:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25},{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"greet:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27},{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"greet:16","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"35","frame_id":35},{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"36","frame_id":36}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\n","event":"return","line":16,"stack_to_render":[{"func_name":"greet:16","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"37","frame_id":37},{"func_name":"main:8","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\n","event":"call","line":15,"stack_to_render":[{"func_name":"greet:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"greet:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43},{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"greet:16","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51},{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\n","event":"return","line":16,"stack_to_render":[{"func_name":"greet:16","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53},{"func_name":"main:9","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\n","event":"call","line":15,"stack_to_render":[{"func_name":"greet:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"57","frame_id":57},{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":15,"stack_to_render":[{"func_name":"greet:15","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"59","frame_id":59},{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":16,"stack_to_render":[{"func_name":"greet:16","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"67","frame_id":67},{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"68","frame_id":68}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\nGreetings from the method world!\n","event":"return","line":16,"stack_to_render":[{"func_name":"greet:16","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69},{"func_name":"main:10","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"70","frame_id":70}],"globals":{},"ordered_globals":[],"func_name":"greet","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\nGreetings from the method world!\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Let`s try if we can travel to the method world:\nGreetings from the method world!\nLooks like we can, let`s try again:\nGreetings from the method world!\nGreetings from the method world!\nGreetings from the method world!\n","event":"return","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"73","frame_id":73}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

<!-- Kun metodia kutsutaan, kutsuvan metodin suoritus jää odottamaan kutsutun metodin suorittamista. Tätä voidaan visualisoida kutsupinon avulla. Kutsupino tarkoittaa metodien kutsumisen muodostamaa pinoa -- juuri suoritettevana oleva metodi on aina pinon päällimmäisenä, ja metodin suorituksen päättyessä palataan pinossa seuraavana olevaan metodiin. Tarkastellaan seuraavaa ohjelmaa: -->

When a method is called, the execution of the calling method await the execution of the called method. This can be visualized with the call stack. The call stack refers to the stack formed by the method calls -- the method that is currently being executed is always on the top of the stack, and on ending the execution of a method execution is resumed in the method that is next on the stack. Let's examine the following program:

<!-- ```java
public static void main(String[] args) {
    System.out.println("Hei maailma!");
    tulostaLuku();
    System.out.println("Hei hei maailma!");
}

public static void tulostaLuku() {
    System.out.println("Luku");
}
``` -->

```java
public static void main(String[] args) {
    System.out.println("Hello world!");
    printNumber();
    System.out.println("Bye bye world!");
}

public static void printNumber() {
    System.out.println("Number");
}
```

<!-- Kun ohjelma käynnistetään, suoritus alkaa `main`-metodin ensimmäiseltä riviltä. Tällä rivillä olevalla komennolla tulostetaan teksti `"Heippa maailma!"`. Ohjelman kutsupino näyttää seuraavalta: -->

The execution begins from the first line of the method `main` when the program is started. The text `"Hello world!"` is printed with the command on this line. The call stack of the program looks like this:

<sample-output>

main

</sample-output>

<!-- Kun tulostuskomento on suoritettu, siirrytään seuraavaan komentoon, missä kutsutaan metodia`tulostaLuku`. Metodin `tulostaLuku` kutsuminen siirtää ohjelman suorituksen metodin `tulostaLuku` alkuun, jolloin `main`-metodi jää odottamaan metodin `tulostaLuku` suorituksen loppumista. Metodin `tulostaLuku` sisällä ollessa kutsupino näyttää seuraavalta. -->

Once the print command has been executed, the next line that calls the method `printNumber` is in turn. Calling that method moves the execution of the program to the beginning of the method `printNumber`. Meanwhile the `main` method will wait until the execution of the method`printNumber` ends. While inside the method `printNumber` the call stack looks like this:

<!-- <sample-output>

tulostaLuku
main

</sample-output> -->

<sample-output>

printNumber
main

</sample-output>

<!-- Kun metodi `tulostaLuku` on suoritettu, palataan kutsupinossa metodia `tulostaLuku` yhtä alempana olevaan metodiin, eli metodiin `main`. Kutsupinosta poistetaan `tulostaLuku`, ja jatketaan `main`-metodin suoritusta `tulostaLuku`-metodikutsun jälkeiseltä riviltä. Kutsupino on nyt seuraavanlainen: -->

Once the method `printNumber` completes, we return to the method that is immediately below the method `printNumber` in the call stack -- in this case the method `main`. `printNumber` is removed from the call stack, and the execution continues on the line after the `printNumber` method call in the `main` method. The state of the call stack is now the following:

<sample-output>

main

</sample-output>


<!-- ## Kutsupino ja metodin parametrit -->
## Call stack and method parameters

<!-- Tarkastellaan kutsupinoa tilanteessa, missä metodille on määritelty parametreja. -->

Let's examine the call stack in a situation where there are parameters defined for the method.

<!-- ```java
public static void main(String[] args) {
    int alku = 1;
    int loppu = 5;

    tulostaTahtia(alku, loppu);
}

public static void tulostaTahtia(int alku, int loppu) {
    while (alku < loppu) {
        System.out.print("*");
        alku++; // sama kuin alku = alku + 1
    }
}
``` -->

```java
public static void main(String[] args) {
    int beginning = 1;
    int end = 5;

    printStarts(beginning, end);
}

public static void printStars(int beginning, int end) {
    while (beginning < end) {
        System.out.print("*");
        beginning++; // equal to beginning = beginning + 1
    }
}
```

<!-- Ohjelman suoritus alkaa `main`-metodin ensimmäiseltä riviltä, jota seuraavilla riveillä luodaan muuttujat `alku` ja `loppu`, sekä asetetaan niihin arvot. Ohjelman tilanne ennen metodin `tulostaTahtia`-kutsumista: -->

The execution of the program begins on the first line of the `main` method. The next two lines create the variables `beginning` and `end` and place values to them. The state of the program prior to calling the method `printStarts`:

<sample-output>
main
  beginning = 1
  end = 5
</sample-output>

<!-- Kun metodia `tulostaTahtia` kutsutaan, `main`-metodi jää odottamaan. Metodikutsun yhteydessä metodille `tulostaTahtia` luodaan uudet muuttujat `alku` ja `loppu`, joihin asetetaan parametreina annetut arvot. Nämä kopioidaan `main`-metodin muuttujista `alku` ja `loppu`. Metodin `tulostaTahtia` suorituksen ensimmäisellä rivillä ohjelman tilanne on seuraavanlainen. -->

When `printStars` is called, the `main` method enters waiting state. The method call causes new variables `beginning` and `end` to be created for the method `printStars`; the values passed as parameters are assigned to them. These values are copied from the variables `beginning` and `end` of the `main` method. The state of the program on the first line of the execution of the method `printStars` is illustrated below.

<!-- <sample-output>
tulostaTahtia
  alku = 1
  loppu = 5
main
  alku = 1
  loppu = 5
</sample-output> -->

<sample-output>
printStars
  beginning = 1
  end = 5
main
  beginning = 1
  end = 5
</sample-output>

<!-- Kun toistolauseessa suoritetaan komento `alku++`, muuttuu tällä hetkellä suoritettavaan metodiin liittyvän `alku`-muuttujan arvo. -->

When the command `beginning++` is executed within the repeat statement, the value of the variable `beginning` that belongs to the method currently being executed is altered.

<!-- <sample-output>
tulostaTahtia
  alku = 2
  loppu = 5
main
  alku = 1
  loppu = 5
</sample-output> -->

<sample-output>
printStars
  beginning = 2
  end = 5
main
  beginning = 1
  end = 5
</sample-output>

<!-- Metodin `main` muuttujien arvot eivät siis muutu. Metodin `tulostaTahtia` suoritus jatkuisi tämän jälkeen jokusen hetken. Kun metodin `tulostaTahtia` suoritus loppuu, palataan takaisin `main`-metodin suoritukseen. -->

So the values of the variables in the method `main` remain unchanged. The execution of the method `printStart` would continue for some time after this. When the execution of that method ends, the execution resumes inside the `main` method.

<sample-output>
main
  beginning = 1
  end = 5
</sample-output>


<!-- Tarkastellaan samaa ohjelman suorituksen askeleittaisella visualisoinnilla. Visualisointiin käyttämämme sovellus kasvattaa kutsupinoa alaspäin -- oikealla laidalla ylin on aina main-metodi, jonka alle tulee kutsuttavat metodit. -->

Let's observe the same by visualizing the execution of the program with steps. The application we use for visualization grows the call stack downwards -- on the right side, the method on the top is always `main`, under which are placed the methods that are called.

<!-- <code-states-visualizer input='{"code":"public class Esimerkki {\n   \n   public static void main(String[] args) {\n      int alku = 1;\n      int loppu = 5;\n\n      tulostaTahtia(alku, loppu);\n   }\n\n   public static void tulostaTahtia(int alku, int loppu) {\n      while (alku < loppu) {\n         System.out.print(\"*\");\n         alku++;\n      }\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"alku":1},"ordered_varnames":["alku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":11,"stack_to_render":[{"func_name":"tulostaTahtia:11","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"","event":"step_line","line":11,"stack_to_render":[{"func_name":"tulostaTahtia:11","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"14","frame_id":14}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"tulostaTahtia:12","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"*","event":"step_line","line":13,"stack_to_render":[{"func_name":"tulostaTahtia:13","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"*","event":"step_line","line":13,"stack_to_render":[{"func_name":"tulostaTahtia:13","encoded_locals":{"alku":2,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"*","event":"step_line","line":11,"stack_to_render":[{"func_name":"tulostaTahtia:11","encoded_locals":{"alku":2,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"*","event":"step_line","line":12,"stack_to_render":[{"func_name":"tulostaTahtia:12","encoded_locals":{"alku":2,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"**","event":"step_line","line":13,"stack_to_render":[{"func_name":"tulostaTahtia:13","encoded_locals":{"alku":2,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"50","frame_id":50}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"**","event":"step_line","line":13,"stack_to_render":[{"func_name":"tulostaTahtia:13","encoded_locals":{"alku":3,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"**","event":"step_line","line":11,"stack_to_render":[{"func_name":"tulostaTahtia:11","encoded_locals":{"alku":3,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"**","event":"step_line","line":12,"stack_to_render":[{"func_name":"tulostaTahtia:12","encoded_locals":{"alku":3,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"61","frame_id":61},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"62","frame_id":62}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"***","event":"step_line","line":13,"stack_to_render":[{"func_name":"tulostaTahtia:13","encoded_locals":{"alku":3,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"70","frame_id":70}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"***","event":"step_line","line":13,"stack_to_render":[{"func_name":"tulostaTahtia:13","encoded_locals":{"alku":4,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"72","frame_id":72}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"***","event":"step_line","line":11,"stack_to_render":[{"func_name":"tulostaTahtia:11","encoded_locals":{"alku":4,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"73","frame_id":73},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"74","frame_id":74}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"***","event":"step_line","line":12,"stack_to_render":[{"func_name":"tulostaTahtia:12","encoded_locals":{"alku":4,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"81","frame_id":81},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"82","frame_id":82}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"****","event":"step_line","line":13,"stack_to_render":[{"func_name":"tulostaTahtia:13","encoded_locals":{"alku":4,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"89","frame_id":89},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"90","frame_id":90}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"****","event":"step_line","line":13,"stack_to_render":[{"func_name":"tulostaTahtia:13","encoded_locals":{"alku":5,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"91","frame_id":91},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"92","frame_id":92}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"****","event":"step_line","line":11,"stack_to_render":[{"func_name":"tulostaTahtia:11","encoded_locals":{"alku":5,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"93","frame_id":93},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"94","frame_id":94}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"****","event":"step_line","line":15,"stack_to_render":[{"func_name":"tulostaTahtia:15","encoded_locals":{"alku":5,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"101","frame_id":101},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"102","frame_id":102}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"****","event":"return","line":15,"stack_to_render":[{"func_name":"tulostaTahtia:15","encoded_locals":{"alku":5,"loppu":5,"__return__":["VOID"]},"ordered_varnames":["alku","loppu","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"105","frame_id":105},{"func_name":"main:7","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"106","frame_id":106}],"globals":{},"ordered_globals":[],"func_name":"tulostaTahtia","heap":{}},{"stdout":"****","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"alku":1,"loppu":5},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"107","frame_id":107}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"****","event":"return","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"alku":1,"loppu":5,"__return__":["VOID"]},"ordered_varnames":["alku","loppu","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"109","frame_id":109}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer> -->

<code-states-visualizer input='{"code":"public class Example {\n   \n   public static void main(String[] args) {\n      int beginning = 1;\n      int end = 5;\n\n      printStars(beginning, end);\n   }\n\n   public static void printStars(int beginning, int end) {\n      while (beginning < end) {\n         System.out.print(\"*\");\n         beginning++;\n      }\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"beginning":1},"ordered_varnames":["beginning"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":11,"stack_to_render":[{"func_name":"printStars:11","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"","event":"step_line","line":11,"stack_to_render":[{"func_name":"printStars:11","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"14","frame_id":14}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"printStars:12","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"*","event":"step_line","line":13,"stack_to_render":[{"func_name":"printStars:13","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"*","event":"step_line","line":13,"stack_to_render":[{"func_name":"printStars:13","encoded_locals":{"beginning":2,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"*","event":"step_line","line":11,"stack_to_render":[{"func_name":"printStars:11","encoded_locals":{"beginning":2,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"*","event":"step_line","line":12,"stack_to_render":[{"func_name":"printStars:12","encoded_locals":{"beginning":2,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"**","event":"step_line","line":13,"stack_to_render":[{"func_name":"printStars:13","encoded_locals":{"beginning":2,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"50","frame_id":50}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"**","event":"step_line","line":13,"stack_to_render":[{"func_name":"printStars:13","encoded_locals":{"beginning":3,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"**","event":"step_line","line":11,"stack_to_render":[{"func_name":"printStars:11","encoded_locals":{"beginning":3,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"**","event":"step_line","line":12,"stack_to_render":[{"func_name":"printStars:12","encoded_locals":{"beginning":3,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"61","frame_id":61},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"62","frame_id":62}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"***","event":"step_line","line":13,"stack_to_render":[{"func_name":"printStars:13","encoded_locals":{"beginning":3,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"70","frame_id":70}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"***","event":"step_line","line":13,"stack_to_render":[{"func_name":"printStars:13","encoded_locals":{"beginning":4,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"71","frame_id":71},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"72","frame_id":72}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"***","event":"step_line","line":11,"stack_to_render":[{"func_name":"printStars:11","encoded_locals":{"beginning":4,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"73","frame_id":73},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"74","frame_id":74}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"***","event":"step_line","line":12,"stack_to_render":[{"func_name":"printStars:12","encoded_locals":{"beginning":4,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"81","frame_id":81},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"82","frame_id":82}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"****","event":"step_line","line":13,"stack_to_render":[{"func_name":"printStars:13","encoded_locals":{"beginning":4,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"89","frame_id":89},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"90","frame_id":90}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"****","event":"step_line","line":13,"stack_to_render":[{"func_name":"printStars:13","encoded_locals":{"beginning":5,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"91","frame_id":91},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"92","frame_id":92}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"****","event":"step_line","line":11,"stack_to_render":[{"func_name":"printStars:11","encoded_locals":{"beginning":5,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"93","frame_id":93},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"94","frame_id":94}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"****","event":"step_line","line":15,"stack_to_render":[{"func_name":"printStars:15","encoded_locals":{"beginning":5,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"101","frame_id":101},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"102","frame_id":102}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"****","event":"return","line":15,"stack_to_render":[{"func_name":"printStars:15","encoded_locals":{"beginning":5,"end":5,"__return__":["VOID"]},"ordered_varnames":["beginning","end","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"105","frame_id":105},{"func_name":"main:7","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"106","frame_id":106}],"globals":{},"ordered_globals":[],"func_name":"printStars","heap":{}},{"stdout":"****","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"beginning":1,"end":5},"ordered_varnames":["beginning","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"107","frame_id":107}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"****","event":"return","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"beginning":1,"end":5,"__return__":["VOID"]},"ordered_varnames":["beginning","end","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"109","frame_id":109}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<!-- ## Kutsupino ja arvon palauttaminen metodista -->

## Call stack and returning a value from a method

<!-- Tarkastellaan seuraavaksi esimerkkiä, missä metodi palauttaa arvon. Ohjelman `main`-metodi kutsuu erillistä `kaynnista`-metodia, jossa luodaan kaksi muuttujaa, kutsutaan `summa`-metodia, ja tulostetaan `summa`-metodin palauttama arvo. -->

Let's next study an example where the method returns a value. The `main` method of the program calls a separate `start` method, inside of which two variables are created, the `sum` method is called, the the value returned by the `sum` method is printed.

<!-- ```java
public static void main(String[] args) {
    kaynnista();
}

public static void kaynnista() {
    int eka = 5;
    int toka = 6;

    int summa = summa(eka, toka);

    System.out.println("Summa: " + summa);
}

public static int summa(int luku1, int luku2) {
    return luku1 + luku2;
}
``` -->

```java
public static void main(String[] args) {
    start();
}

public static void start() {
    int first = 5;
    int second = 6;

    int sum = sum(first, second);

    System.out.println("Sum: " + sum);
}

public static int sum(int number1, int number2) {
    return number1 + number2;
}
```

<!-- Metodin `kaynnista` suorituksen alussa kutsupino näyttää seuraavalta, sillä siihen päädyttiin `main`-metodista. Metodilla `main` ei tässä esimerkissä ole omia muuttujia: -->

At the beginning of executing the method `start` the call stack looks like the following illustration, since it was called from the `main` method. The method `main` has no variables of its own in this example:

<!-- <sample-output>
kaynnista
main
</sample-output> -->

<sample-output>
start
main
</sample-output>

<!-- Kun `kaynnista`-metodissa on luotu muuttujat `eka` ja `toka`, eli sen ensimmäiset kaksi riviä on suoritettu, on tilanne seuraava: -->

When variables `first` and `second` have been created in the `start` method (the first two rows of that method have been executed, in other words), the situation resembles the following:

<!-- <sample-output>
kaynnista
  eka = 5
  toka = 6
main
</sample-output> -->

<sample-output>
start
  first = 5
  second = 6
main
</sample-output>

<!-- Komento `int summa = summa(eka, toka);` luo metodiin `kaynnista` muuttujan `summa`, ja kutsuu metodia `summa`. Metodi `kaynnista` jää odottamaan. Koska metodissa `summa` on määritelty parametrit `luku1` ja `luku2`, luodaan ne heti metodin suorituksen alussa, ja niihin kopioidaan parametrina annettujen muuttujien arvot. -->

The command `int sum = sum(first, second);` creates the variable `sum` in the method `start`, and calls the method `sum`. The method `start` enters a waiting state. Since the parameters `number1` and `number2` are defined in the method `sum`, they are created right at the beginning of the method's execution, and then the values of the variables given as parametes are copied into them.

<!-- <sample-output>
summa
  luku1 = 5
  luku2 = 6
kaynnista
  eka = 5
  toka = 6
  summa // ei arvoa
main
</sample-output> -->

<sample-output>
sum
  number1 = 5
  number2 = 6
start
  first = 5
  second = 6
  sum // no value
main
</sample-output>

<!-- Metodin `summa` suoritus laskee muuttujien `luku1` ja `luku2` arvot yhteen. Komento `return` palauttaa lukujen summan kutsupinossa yhtä alemmalle metodille, eli metodille `kaynnista`. Palautettu arvo asetetaan muuttujan `summa` arvoksi. -->

The execution of the method `sum` adds together the values of the variables `number1` and `number2`. The command `return` returns the sum of the numbers to the method that is one lower in the call stack, so the method `start` in this case. The returned value is set as the value of the variable `sum`.

<!-- <sample-output>
kaynnista
  eka = 5
  toka = 6
  summa = 11
main
</sample-output> -->

<sample-output>
start
  first = 5
  second = 6
  sum = 11
main
</sample-output>

<!-- Tämän jälkeen suoritetaan tulostuskomento, jonka jälkeen palataan `main`-metodiin. Kun suoritus on `main`-metodin lopussa, ohjelman suoritus loppuu. -->

After that the print command is executed, and then we return to the `main` method. Once the execution reaches the end of the `main` method, the execution of the program ends.


<!-- <code-states-visualizer input='{"code":"public class Esimerkki {\n   public static void main(String[] args) {\n      kaynnista();\n   }\n\n   public static void kaynnista() {\n      int eka = 5;\n      int toka = 6;\n\n      int summa = summa(eka, toka);\n\n      System.out.println(\"Summa: \" + summa);\n   }\n\n   public static int summa(int luku1, int luku2) {\n      return luku1 + luku2;\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":7,"stack_to_render":[{"func_name":"kaynnista:7","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"3","frame_id":3},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"kaynnista","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"kaynnista:7","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6}],"globals":{},"ordered_globals":[],"func_name":"kaynnista","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"kaynnista:8","encoded_locals":{"eka":5},"ordered_varnames":["eka"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"kaynnista","heap":{}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"kaynnista:10","encoded_locals":{"eka":5,"toka":6},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18}],"globals":{},"ordered_globals":[],"func_name":"kaynnista","heap":{}},{"stdout":"","event":"call","line":16,"stack_to_render":[{"func_name":"summa:16","encoded_locals":{"luku1":5,"luku2":6},"ordered_varnames":["luku1","luku2"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25},{"func_name":"kaynnista:10","encoded_locals":{"eka":5,"toka":6},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"summa","heap":{}},{"stdout":"","event":"step_line","line":16,"stack_to_render":[{"func_name":"summa:16","encoded_locals":{"luku1":5,"luku2":6},"ordered_varnames":["luku1","luku2"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28},{"func_name":"kaynnista:10","encoded_locals":{"eka":5,"toka":6},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"summa","heap":{}},{"stdout":"","event":"return","line":16,"stack_to_render":[{"func_name":"summa:16","encoded_locals":{"luku1":5,"luku2":6,"__return__":11},"ordered_varnames":["luku1","luku2","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43},{"func_name":"kaynnista:10","encoded_locals":{"eka":5,"toka":6},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"45","frame_id":45}],"globals":{},"ordered_globals":[],"func_name":"summa","heap":{}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"kaynnista:10","encoded_locals":{"eka":5,"toka":6},"ordered_varnames":["eka","toka"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"46","frame_id":46},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"47","frame_id":47}],"globals":{},"ordered_globals":[],"func_name":"kaynnista","heap":{}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"kaynnista:12","encoded_locals":{"eka":5,"toka":6,"summa":11},"ordered_varnames":["eka","toka","summa"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49}],"globals":{},"ordered_globals":[],"func_name":"kaynnista","heap":{}},{"stdout":"Summa: 11\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"kaynnista:13","encoded_locals":{"eka":5,"toka":6,"summa":11},"ordered_varnames":["eka","toka","summa"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"kaynnista","heap":{}},{"stdout":"Summa: 11\n","event":"return","line":13,"stack_to_render":[{"func_name":"kaynnista:13","encoded_locals":{"eka":5,"toka":6,"summa":11,"__return__":["VOID"]},"ordered_varnames":["eka","toka","summa","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"56","frame_id":56},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"57","frame_id":57}],"globals":{},"ordered_globals":[],"func_name":"kaynnista","heap":{}},{"stdout":"Summa: 11\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Summa: 11\n","event":"return","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer> -->



<code-states-visualizer input='{"code":"public class Example {\n   public static void main(String[] args) {\n      start();\n   }\n\n   public static void start() {\n      int first = 5;\n      int second = 6;\n\n      int sum = sum(first, second);\n\n      System.out.println(\"Sum: \" + sum);\n   }\n\n   public static int sum(int number1, int number2) {\n      return number1 + number2;\n   }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":7,"stack_to_render":[{"func_name":"start:7","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"3","frame_id":3},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"start","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"start:7","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6}],"globals":{},"ordered_globals":[],"func_name":"start","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"start:8","encoded_locals":{"first":5},"ordered_varnames":["first"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"start","heap":{}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"start:10","encoded_locals":{"first":5,"second":6},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18}],"globals":{},"ordered_globals":[],"func_name":"start","heap":{}},{"stdout":"","event":"call","line":16,"stack_to_render":[{"func_name":"sum:16","encoded_locals":{"number1":5,"number2":6},"ordered_varnames":["number1","number2"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25},{"func_name":"start:10","encoded_locals":{"first":5,"second":6},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"","event":"step_line","line":16,"stack_to_render":[{"func_name":"sum:16","encoded_locals":{"number1":5,"number2":6},"ordered_varnames":["number1","number2"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28},{"func_name":"start:10","encoded_locals":{"first":5,"second":6},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"","event":"return","line":16,"stack_to_render":[{"func_name":"sum:16","encoded_locals":{"number1":5,"number2":6,"__return__":11},"ordered_varnames":["number1","number2","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43},{"func_name":"start:10","encoded_locals":{"first":5,"second":6},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"45","frame_id":45}],"globals":{},"ordered_globals":[],"func_name":"sum","heap":{}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"start:10","encoded_locals":{"first":5,"second":6},"ordered_varnames":["first","second"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"46","frame_id":46},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"47","frame_id":47}],"globals":{},"ordered_globals":[],"func_name":"start","heap":{}},{"stdout":"","event":"step_line","line":12,"stack_to_render":[{"func_name":"start:12","encoded_locals":{"first":5,"second":6,"sum":11},"ordered_varnames":["first","second","sum"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49}],"globals":{},"ordered_globals":[],"func_name":"start","heap":{}},{"stdout":"Sum: 11\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"start:13","encoded_locals":{"first":5,"second":6,"sum":11},"ordered_varnames":["first","second","sum"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"55","frame_id":55}],"globals":{},"ordered_globals":[],"func_name":"start","heap":{}},{"stdout":"Sum: 11\n","event":"return","line":13,"stack_to_render":[{"func_name":"start:13","encoded_locals":{"first":5,"second":6,"sum":11,"__return__":["VOID"]},"ordered_varnames":["first","second","sum","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"56","frame_id":56},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"57","frame_id":57}],"globals":{},"ordered_globals":[],"func_name":"start","heap":{}},{"stdout":"Sum: 11\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"Sum: 11\n","event":"return","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<!-- ## Metodi kutsuu toista metodia -->

## Method calling another method

<!-- Kuten edellä huomattiin, metodin sisältä voi kutsua myös muita metodeja. Alla vielä esimerkki tähän liittyen. Tehdään metodi `kertotaulu`, joka tulostaa annetun luvun kertotaulun. Kertotaulu tulostaa rivit metodin `tulostaKertotaulunRivi` avulla. -->

As we noticed before, you can call other methods from inside methods. An additional example of this technique is given below. We'll create the method `multiplicationTable` that prints the multiplication table of the given number. The multiplication table prints the rows with the help of the method `printMultiplicationTableRow`.

<!-- ```java
public static void kertotaulu(int ylaraja) {
    int luku = 1;

    while (luku <= ylaraja) {
        tulostaKertotaulunRivi(luku, ylaraja);
        luku++;
    }
}

public static void tulostaKertotaulunRivi(int luku, int kerroin) {

    int tulostettava = luku;
    while (tulostettava <= luku * kerroin) {
        System.out.print("  " + tulostettava);
        tulostettava += luku;
    }

    System.out.println("");
}
``` -->

```java
public static void multiplicationTable(int max) {
    int number = 1;

    while (number <= max) {
        printMultiplicationTableRow(number, max);
        number++;
    }
}

public static void printMultiplicationTableRow(int number, int coefficient) {

    int printable = number;
    while (printable <= number * coefficitenct) {
        System.out.print("  " + printable);
        printable += number;
    }

    System.out.println("");
}
```

<!-- Esimerkiksi metodikutsun `kertotaulu(3)` tulostus on seuraava. -->

The output of the method call `multiplicationTable(3)`, for instance, looks like this.

<sample-output>
  1  2  3
  2  4  6
  3  6  9
</sample-output>

<!-- Alla metodikutsu `kertotaulu(3)` visualisoituna. Huomaa, miten kutsupinossa on tieto kutsuvan metodin sisäisestä tilasta. -->

Below is a visualization of the method call `multiplicationTable(3)`. Notice how the information about the internal state of the calling method is stored in the call stack.


<!-- <code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        kertotaulu(3);\n    }\n   \n    public static void kertotaulu(int ylaraja) {\n        int luku = 1;\n    \n        while (luku <= ylaraja) {\n            tulostaKertotaulunRivi(luku, ylaraja);\n            luku++;\n        }\n    }\n\n    public static void tulostaKertotaulunRivi(int luku, int kerroin) {\n    \n        int tulostettava = luku;\n        while (tulostettava <= luku * kerroin) {\n            System.out.print(\"  \" + tulostettava);\n            tulostettava += luku;\n        }\n\n        System.out.println(\"\");\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":7,"stack_to_render":[{"func_name":"kertotaulu:7","encoded_locals":{"ylaraja":3},"ordered_varnames":["ylaraja"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"kertotaulu:7","encoded_locals":{"ylaraja":3},"ordered_varnames":["ylaraja"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"kertotaulu:9","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"","event":"call","line":17,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:17","encoded_locals":{"luku":1,"kerroin":3},"ordered_varnames":["luku","kerroin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"","event":"step_line","line":17,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:17","encoded_locals":{"luku":1,"kerroin":3},"ordered_varnames":["luku","kerroin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":1},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":1},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"59","frame_id":59},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":1},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"67","frame_id":67},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"68","frame_id":68},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":2},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"79","frame_id":79},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"80","frame_id":80},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"81","frame_id":81}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":2},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"82","frame_id":82},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"83","frame_id":83},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"84","frame_id":84}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":2},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"100","frame_id":100},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"101","frame_id":101},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"102","frame_id":102}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":2},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"115","frame_id":115},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"116","frame_id":116},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"117","frame_id":117}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":3},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"127","frame_id":127},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"128","frame_id":128},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"129","frame_id":129}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":3},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"130","frame_id":130},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"131","frame_id":131},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"132","frame_id":132}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":3},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"148","frame_id":148},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"149","frame_id":149},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"150","frame_id":150}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":3},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"163","frame_id":163},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"164","frame_id":164},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"165","frame_id":165}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":4},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"175","frame_id":175},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"176","frame_id":176},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"177","frame_id":177}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":4},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"178","frame_id":178},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"179","frame_id":179},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"180","frame_id":180}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3","event":"step_line","line":23,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:23","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":4},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"196","frame_id":196},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"197","frame_id":197},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"198","frame_id":198}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":24,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:24","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":4},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"208","frame_id":208},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"209","frame_id":209},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"210","frame_id":210}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n","event":"return","line":24,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:24","encoded_locals":{"luku":1,"kerroin":3,"tulostettava":4,"__return__":["VOID"]},"ordered_varnames":["luku","kerroin","tulostettava","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"211","frame_id":211},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"212","frame_id":212},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"213","frame_id":213}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"kertotaulu:11","encoded_locals":{"ylaraja":3,"luku":1},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"214","frame_id":214},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"215","frame_id":215}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"kertotaulu:11","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"218","frame_id":218},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"219","frame_id":219}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"kertotaulu:9","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"220","frame_id":220},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"221","frame_id":221}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"228","frame_id":228},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"229","frame_id":229}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n","event":"call","line":17,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:17","encoded_locals":{"luku":2,"kerroin":3},"ordered_varnames":["luku","kerroin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"236","frame_id":236},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"237","frame_id":237},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"238","frame_id":238}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:17","encoded_locals":{"luku":2,"kerroin":3},"ordered_varnames":["luku","kerroin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"239","frame_id":239},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"240","frame_id":240},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"241","frame_id":241}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":2},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"248","frame_id":248},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"249","frame_id":249},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"250","frame_id":250}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":2},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"266","frame_id":266},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"267","frame_id":267},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"268","frame_id":268}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":2},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"281","frame_id":281},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"282","frame_id":282},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"283","frame_id":283}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":4},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"293","frame_id":293},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"294","frame_id":294},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"295","frame_id":295}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":4},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"296","frame_id":296},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"297","frame_id":297},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"298","frame_id":298}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":4},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"314","frame_id":314},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"315","frame_id":315},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"316","frame_id":316}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":4},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"329","frame_id":329},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"330","frame_id":330},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"331","frame_id":331}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":6},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"341","frame_id":341},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"342","frame_id":342},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"343","frame_id":343}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":6},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"344","frame_id":344},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"345","frame_id":345},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"346","frame_id":346}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":6},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"362","frame_id":362},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"363","frame_id":363},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"364","frame_id":364}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":6},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"377","frame_id":377},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"378","frame_id":378},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"379","frame_id":379}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":8},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"389","frame_id":389},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"390","frame_id":390},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"391","frame_id":391}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":8},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"392","frame_id":392},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"393","frame_id":393},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"394","frame_id":394}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6","event":"step_line","line":23,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:23","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":8},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"410","frame_id":410},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"411","frame_id":411},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"412","frame_id":412}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":24,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:24","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":8},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"422","frame_id":422},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"423","frame_id":423},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"424","frame_id":424}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"return","line":24,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:24","encoded_locals":{"luku":2,"kerroin":3,"tulostettava":8,"__return__":["VOID"]},"ordered_varnames":["luku","kerroin","tulostettava","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"425","frame_id":425},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"426","frame_id":426},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"427","frame_id":427}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"kertotaulu:11","encoded_locals":{"ylaraja":3,"luku":2},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"428","frame_id":428},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"429","frame_id":429}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"kertotaulu:11","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"432","frame_id":432},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"433","frame_id":433}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"kertotaulu:9","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"434","frame_id":434},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"435","frame_id":435}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"442","frame_id":442},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"443","frame_id":443}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"call","line":17,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:17","encoded_locals":{"luku":3,"kerroin":3},"ordered_varnames":["luku","kerroin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"450","frame_id":450},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"451","frame_id":451},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"452","frame_id":452}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:17","encoded_locals":{"luku":3,"kerroin":3},"ordered_varnames":["luku","kerroin"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"453","frame_id":453},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"454","frame_id":454},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"455","frame_id":455}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":3},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"462","frame_id":462},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"463","frame_id":463},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"464","frame_id":464}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":3},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"480","frame_id":480},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"481","frame_id":481},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"482","frame_id":482}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":3},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"495","frame_id":495},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"496","frame_id":496},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"497","frame_id":497}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":6},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"507","frame_id":507},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"508","frame_id":508},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"509","frame_id":509}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":6},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"510","frame_id":510},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"511","frame_id":511},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"512","frame_id":512}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":6},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"528","frame_id":528},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"529","frame_id":529},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"530","frame_id":530}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":6},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"543","frame_id":543},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"544","frame_id":544},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"545","frame_id":545}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":9},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"555","frame_id":555},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"556","frame_id":556},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"557","frame_id":557}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":9},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"558","frame_id":558},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"559","frame_id":559},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"560","frame_id":560}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6","event":"step_line","line":19,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:19","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":9},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"576","frame_id":576},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"577","frame_id":577},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"578","frame_id":578}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":9},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"591","frame_id":591},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"592","frame_id":592},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"593","frame_id":593}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9","event":"step_line","line":20,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:20","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":12},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"603","frame_id":603},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"604","frame_id":604},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"605","frame_id":605}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9","event":"step_line","line":18,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:18","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":12},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"606","frame_id":606},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"607","frame_id":607},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"608","frame_id":608}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9","event":"step_line","line":23,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:23","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":12},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"624","frame_id":624},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"625","frame_id":625},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"626","frame_id":626}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":24,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:24","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":12},"ordered_varnames":["luku","kerroin","tulostettava"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"636","frame_id":636},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"637","frame_id":637},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"638","frame_id":638}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"return","line":24,"stack_to_render":[{"func_name":"tulostaKertotaulunRivi:24","encoded_locals":{"luku":3,"kerroin":3,"tulostettava":12,"__return__":["VOID"]},"ordered_varnames":["luku","kerroin","tulostettava","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"639","frame_id":639},{"func_name":"kertotaulu:10","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"640","frame_id":640},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"641","frame_id":641}],"globals":{},"ordered_globals":[],"func_name":"tulostaKertotaulunRivi","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"kertotaulu:11","encoded_locals":{"ylaraja":3,"luku":3},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"642","frame_id":642},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"643","frame_id":643}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"kertotaulu:11","encoded_locals":{"ylaraja":3,"luku":4},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"646","frame_id":646},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"647","frame_id":647}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"kertotaulu:9","encoded_locals":{"ylaraja":3,"luku":4},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"648","frame_id":648},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"649","frame_id":649}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"kertotaulu:13","encoded_locals":{"ylaraja":3,"luku":4},"ordered_varnames":["ylaraja","luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"656","frame_id":656},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"657","frame_id":657}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"return","line":13,"stack_to_render":[{"func_name":"kertotaulu:13","encoded_locals":{"ylaraja":3,"luku":4,"__return__":["VOID"]},"ordered_varnames":["ylaraja","luku","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"660","frame_id":660},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"661","frame_id":661}],"globals":{},"ordered_globals":[],"func_name":"kertotaulu","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"662","frame_id":662}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"return","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"664","frame_id":664}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer> -->



<code-states-visualizer input='{"code":"public class Example {\n    public static void main(String[] args) {\n        multiplicationTable(3);\n    }\n   \n    public static void multiplicationTable(int max) {\n        int number = 1;\n    \n        while (number <= max) {\n            printMultiplicationTableRow(number, max);\n            number++;\n        }\n    }\n\n    public static void printMultiplicationTableRow(int number, int coefficient) {\n    \n        int printable = number;\n        while (printable <= number * coefficient) {\n            System.out.print(\"  \" + printable);\n            printable += number;\n        }\n\n        System.out.println(\"\");\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"call","line":7,"stack_to_render":[{"func_name":"multiplicationTable:7","encoded_locals":{"max":3},"ordered_varnames":["max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"5","frame_id":5}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"multiplicationTable:7","encoded_locals":{"max":3},"ordered_varnames":["max"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"6","frame_id":6},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"","event":"step_line","line":9,"stack_to_render":[{"func_name":"multiplicationTable:9","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"","event":"step_line","line":10,"stack_to_render":[{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"","event":"call","line":17,"stack_to_render":[{"func_name":"printMultiplicationTableRow:17","encoded_locals":{"number":1,"coefficient":3},"ordered_varnames":["number","coefficient"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"","event":"step_line","line":17,"stack_to_render":[{"func_name":"printMultiplicationTableRow:17","encoded_locals":{"number":1,"coefficient":3},"ordered_varnames":["number","coefficient"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":1,"coefficient":3,"printable":1},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"41","frame_id":41},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":1,"coefficient":3,"printable":1},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"59","frame_id":59},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":1,"coefficient":3,"printable":1},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"67","frame_id":67},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"68","frame_id":68},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"69","frame_id":69}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":1,"coefficient":3,"printable":2},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"79","frame_id":79},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"80","frame_id":80},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"81","frame_id":81}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":1,"coefficient":3,"printable":2},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"82","frame_id":82},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"83","frame_id":83},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"84","frame_id":84}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":1,"coefficient":3,"printable":2},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"100","frame_id":100},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"101","frame_id":101},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"102","frame_id":102}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":1,"coefficient":3,"printable":2},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"115","frame_id":115},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"116","frame_id":116},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"117","frame_id":117}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":1,"coefficient":3,"printable":3},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"127","frame_id":127},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"128","frame_id":128},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"129","frame_id":129}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":1,"coefficient":3,"printable":3},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"130","frame_id":130},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"131","frame_id":131},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"132","frame_id":132}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":1,"coefficient":3,"printable":3},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"148","frame_id":148},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"149","frame_id":149},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"150","frame_id":150}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":1,"coefficient":3,"printable":3},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"163","frame_id":163},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"164","frame_id":164},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"165","frame_id":165}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":1,"coefficient":3,"printable":4},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"175","frame_id":175},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"176","frame_id":176},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"177","frame_id":177}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":1,"coefficient":3,"printable":4},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"178","frame_id":178},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"179","frame_id":179},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"180","frame_id":180}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3","event":"step_line","line":23,"stack_to_render":[{"func_name":"printMultiplicationTableRow:23","encoded_locals":{"number":1,"coefficient":3,"printable":4},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"196","frame_id":196},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"197","frame_id":197},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"198","frame_id":198}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":24,"stack_to_render":[{"func_name":"printMultiplicationTableRow:24","encoded_locals":{"number":1,"coefficient":3,"printable":4},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"208","frame_id":208},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"209","frame_id":209},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"210","frame_id":210}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n","event":"return","line":24,"stack_to_render":[{"func_name":"printMultiplicationTableRow:24","encoded_locals":{"number":1,"coefficient":3,"printable":4,"__return__":["VOID"]},"ordered_varnames":["number","coefficient","printable","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"211","frame_id":211},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"212","frame_id":212},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"213","frame_id":213}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"multiplicationTable:11","encoded_locals":{"max":3,"number":1},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"214","frame_id":214},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"215","frame_id":215}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"multiplicationTable:11","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"218","frame_id":218},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"219","frame_id":219}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"multiplicationTable:9","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"220","frame_id":220},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"221","frame_id":221}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"228","frame_id":228},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"229","frame_id":229}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n","event":"call","line":17,"stack_to_render":[{"func_name":"printMultiplicationTableRow:17","encoded_locals":{"number":2,"coefficient":3},"ordered_varnames":["number","coefficient"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"236","frame_id":236},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"237","frame_id":237},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"238","frame_id":238}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"printMultiplicationTableRow:17","encoded_locals":{"number":2,"coefficient":3},"ordered_varnames":["number","coefficient"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"239","frame_id":239},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"240","frame_id":240},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"241","frame_id":241}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":2,"coefficient":3,"printable":2},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"248","frame_id":248},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"249","frame_id":249},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"250","frame_id":250}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":2,"coefficient":3,"printable":2},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"266","frame_id":266},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"267","frame_id":267},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"268","frame_id":268}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":2,"coefficient":3,"printable":2},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"281","frame_id":281},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"282","frame_id":282},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"283","frame_id":283}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":2,"coefficient":3,"printable":4},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"293","frame_id":293},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"294","frame_id":294},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"295","frame_id":295}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":2,"coefficient":3,"printable":4},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"296","frame_id":296},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"297","frame_id":297},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"298","frame_id":298}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":2,"coefficient":3,"printable":4},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"314","frame_id":314},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"315","frame_id":315},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"316","frame_id":316}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":2,"coefficient":3,"printable":4},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"329","frame_id":329},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"330","frame_id":330},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"331","frame_id":331}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":2,"coefficient":3,"printable":6},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"341","frame_id":341},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"342","frame_id":342},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"343","frame_id":343}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":2,"coefficient":3,"printable":6},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"344","frame_id":344},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"345","frame_id":345},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"346","frame_id":346}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":2,"coefficient":3,"printable":6},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"362","frame_id":362},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"363","frame_id":363},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"364","frame_id":364}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":2,"coefficient":3,"printable":6},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"377","frame_id":377},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"378","frame_id":378},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"379","frame_id":379}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":2,"coefficient":3,"printable":8},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"389","frame_id":389},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"390","frame_id":390},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"391","frame_id":391}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":2,"coefficient":3,"printable":8},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"392","frame_id":392},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"393","frame_id":393},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"394","frame_id":394}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6","event":"step_line","line":23,"stack_to_render":[{"func_name":"printMultiplicationTableRow:23","encoded_locals":{"number":2,"coefficient":3,"printable":8},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"410","frame_id":410},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"411","frame_id":411},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"412","frame_id":412}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":24,"stack_to_render":[{"func_name":"printMultiplicationTableRow:24","encoded_locals":{"number":2,"coefficient":3,"printable":8},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"422","frame_id":422},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"423","frame_id":423},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"424","frame_id":424}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"return","line":24,"stack_to_render":[{"func_name":"printMultiplicationTableRow:24","encoded_locals":{"number":2,"coefficient":3,"printable":8,"__return__":["VOID"]},"ordered_varnames":["number","coefficient","printable","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"425","frame_id":425},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"426","frame_id":426},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"427","frame_id":427}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"multiplicationTable:11","encoded_locals":{"max":3,"number":2},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"428","frame_id":428},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"429","frame_id":429}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"multiplicationTable:11","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"432","frame_id":432},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"433","frame_id":433}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"multiplicationTable:9","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"434","frame_id":434},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"435","frame_id":435}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":10,"stack_to_render":[{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"442","frame_id":442},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"443","frame_id":443}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"call","line":17,"stack_to_render":[{"func_name":"printMultiplicationTableRow:17","encoded_locals":{"number":3,"coefficient":3},"ordered_varnames":["number","coefficient"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"450","frame_id":450},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"451","frame_id":451},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"452","frame_id":452}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":17,"stack_to_render":[{"func_name":"printMultiplicationTableRow:17","encoded_locals":{"number":3,"coefficient":3},"ordered_varnames":["number","coefficient"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"453","frame_id":453},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"454","frame_id":454},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"455","frame_id":455}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":3,"coefficient":3,"printable":3},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"462","frame_id":462},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"463","frame_id":463},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"464","frame_id":464}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":3,"coefficient":3,"printable":3},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"480","frame_id":480},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"481","frame_id":481},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"482","frame_id":482}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":3,"coefficient":3,"printable":3},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"495","frame_id":495},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"496","frame_id":496},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"497","frame_id":497}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":3,"coefficient":3,"printable":6},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"507","frame_id":507},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"508","frame_id":508},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"509","frame_id":509}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":3,"coefficient":3,"printable":6},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"510","frame_id":510},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"511","frame_id":511},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"512","frame_id":512}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":3,"coefficient":3,"printable":6},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"528","frame_id":528},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"529","frame_id":529},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"530","frame_id":530}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":3,"coefficient":3,"printable":6},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"543","frame_id":543},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"544","frame_id":544},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"545","frame_id":545}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":3,"coefficient":3,"printable":9},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"555","frame_id":555},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"556","frame_id":556},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"557","frame_id":557}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":3,"coefficient":3,"printable":9},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"558","frame_id":558},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"559","frame_id":559},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"560","frame_id":560}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6","event":"step_line","line":19,"stack_to_render":[{"func_name":"printMultiplicationTableRow:19","encoded_locals":{"number":3,"coefficient":3,"printable":9},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"576","frame_id":576},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"577","frame_id":577},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"578","frame_id":578}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":3,"coefficient":3,"printable":9},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"591","frame_id":591},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"592","frame_id":592},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"593","frame_id":593}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9","event":"step_line","line":20,"stack_to_render":[{"func_name":"printMultiplicationTableRow:20","encoded_locals":{"number":3,"coefficient":3,"printable":12},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"603","frame_id":603},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"604","frame_id":604},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"605","frame_id":605}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9","event":"step_line","line":18,"stack_to_render":[{"func_name":"printMultiplicationTableRow:18","encoded_locals":{"number":3,"coefficient":3,"printable":12},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"606","frame_id":606},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"607","frame_id":607},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"608","frame_id":608}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9","event":"step_line","line":23,"stack_to_render":[{"func_name":"printMultiplicationTableRow:23","encoded_locals":{"number":3,"coefficient":3,"printable":12},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"624","frame_id":624},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"625","frame_id":625},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"626","frame_id":626}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":24,"stack_to_render":[{"func_name":"printMultiplicationTableRow:24","encoded_locals":{"number":3,"coefficient":3,"printable":12},"ordered_varnames":["number","coefficient","printable"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"636","frame_id":636},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"637","frame_id":637},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"638","frame_id":638}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"return","line":24,"stack_to_render":[{"func_name":"printMultiplicationTableRow:24","encoded_locals":{"number":3,"coefficient":3,"printable":12,"__return__":["VOID"]},"ordered_varnames":["number","coefficient","printable","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"639","frame_id":639},{"func_name":"multiplicationTable:10","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"640","frame_id":640},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"641","frame_id":641}],"globals":{},"ordered_globals":[],"func_name":"printMultiplicationTableRow","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"multiplicationTable:11","encoded_locals":{"max":3,"number":3},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"642","frame_id":642},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"643","frame_id":643}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":11,"stack_to_render":[{"func_name":"multiplicationTable:11","encoded_locals":{"max":3,"number":4},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"646","frame_id":646},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"647","frame_id":647}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"multiplicationTable:9","encoded_locals":{"max":3,"number":4},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"648","frame_id":648},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"649","frame_id":649}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":13,"stack_to_render":[{"func_name":"multiplicationTable:13","encoded_locals":{"max":3,"number":4},"ordered_varnames":["max","number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"656","frame_id":656},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"657","frame_id":657}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"return","line":13,"stack_to_render":[{"func_name":"multiplicationTable:13","encoded_locals":{"max":3,"number":4,"__return__":["VOID"]},"ordered_varnames":["max","number","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"660","frame_id":660},{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":false,"is_zombie":false,"is_parent":false,"unique_hash":"661","frame_id":661}],"globals":{},"ordered_globals":[],"func_name":"multiplicationTable","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"662","frame_id":662}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"  1  2  3\n  2  4  6\n  3  6  9\n","event":"return","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"664","frame_id":664}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<!-- <programming-exercise name='Tulostelua (4 osaa)' tmcname='osa02-Osa02_33.Tulostelua'> -->

<programming-exercise name='Star sign (4 parts)' tmcname='part02-Part02_33.StarSign'>



<!-- <h2>Tähtien tulostus</h2> -->

<h2>Printing stars</h2>

<!-- Tee metodi `tulostaTahtia`, joka tulostaa annetun määrän tähtiä ja rivinvaihdon. -->

Define a method called `printStars` that prints the given number of stars and a line break.

<!-- Tee metodi seuraavaan runkoon: -->
Write the method in the following template:

<!-- ```java
public static void tulostaTahtia(int maara) {
    // yhden tähden saat tulostettua komennolla
    // System.out.print("*");
    // kutsu tulostuskomentoa n kertaa
    // tulosta lopuksi rivinvaihto komennolla
    // System.out.println("");
}

public static void main(String[] args) {
    tulostaTahtia(5);
    tulostaTahtia(3);
    tulostaTahtia(9);
}
``` -->

```java
public static void printStars(int number) {
    // you can print one star with the command
    // System.out.print("*");
    // call the print command n times
    // in the end print a line break with the comand
    // System.out.println("");
}

public static void main(String[] args) {
    printStars(5);
    printStars(3);
    printStars(9);
}
```

<!-- Ohjelman tulostus: -->

The output of the program:

<sample-output>
*****
***
*********
</sample-output>

<!-- **Huom:** moniosaisen tehtävät voi palauttaa palvelimelle (painamalla testausnapin oikealla puolella olevaa nappia) vaikka kaikki osat eivät olisikaan tehty. Palvelin valittelee tällöin tekemättömien osien testeistä, tehdyt osat palvelin kirjaa. -->

**N.B** multiple-part exercises can be uploaded to the server (click the button to the right of the testing button) even if some parts are unfinished. In this case the server will complain about the tests for the parts that haven't been completed, but it will mark down the finished parts.

<!-- <h2>Neliön tulostus</h2> -->

<h2>Printing a square</h2>

<!-- Tee metodi `tulostaNelio(int sivunpituus)` joka tulostaa neliön käyttäen `tulostaTahtia`-metodia. Siis esimerkiksi kutsu `tulostaNelio(4)` tulostaa seuraavaa: -->

Define a method called `printSquare(int size)` that prints a suitable square with the help of the `printStars` method. So the method call `printSquare(4)` results in the following output:

<sample-output>
****
****
****
****
</sample-output>

<!-- **Huom:** tehtävässä ei riitä että tulostus näyttää oikealta, tulostaNelio-metodin sisällä neliön "rivien" tulostus tulee tehdä tulostaTahtia-metodia käyttäen. -->

**N.B.:** producing the correct output is not enough; the rows of the square must be produced by calling the `printStars` method inside the `printSquare`method.

<!-- Ohjelmaa tehdessäsi kannattaa varmistaa main:iin kirjoitetun testikoodin avulla että metodit toimivat vaaditulla tavalla. -->

When creating the program, you might benefit from the test code in the main to ensure that the methods behave as required.


<!-- <h2>Suorakulmion tulostus</h2> -->

<h2>Printing a rectangle</h2>

<!-- Tee metodi `tulostaSuorakulmio(int leveys, int korkeus)` joka tulostaa suorakulmion käyttäen `tulostaTahtia`-metodia. Siis esimerkiksi kutsu `tulostaSuorakulmio(17,3)` tulostaa seuraavaa: -->

Write a method called `printRectangle(int width, int height)` that prints the correct rectangle by using the `printStars` method. So the method call `printRectangle(17, 3)` should produce the following output:

<sample-output>
*****************
*****************
*****************
</sample-output>


<!-- <h2>Vasemmalle nojaavan kolmion tulostus</h2> -->

<h2>Printing a triangle</h2>

<!-- Tee metodi `tulostaKolmio(int koko)` joka tulostaa kolmion käyttäen `tulostaTahtia`-metodia. Siis esimerkiksi kutsu `tulostaKolmio(4)` tulostaa seuraavaa: -->

Create a method called `printTriangle(int size)` that prints a triangle by using the `printStars` method. So the call `printTriangle(4)` should print the following:

<sample-output>
*
**
***
****
</sample-output>

</programming-exercise>


<!-- <programming-exercise name='Tulostelua Like A Boss (3 osaa)' tmcname='osa02-Osa02_34.TulosteluaLikeABoss'> -->


<programming-exercise name='Advanced astrology (3 parts)' tmcname='part02-Part02_34.Advanced astrology'>


<!-- <h2>Tähtirivin ja tyhjien tulostus</h2> -->

<h2>Printing stars and spaces</h2>

<!-- Tee metodi `tulostaTyhjaa(int maara)` joka tulostaa `maara` kappaletta välilyöntejä. Metodi ei tulosta rivinvaihtoa. -->

Define a method called `printSpaces(int number)` that produces the number of spaces specified by `number`. The method does not print the line break.

<!-- Joudut myös joko kopioimaan edellisen tehtävän vastauksestasi metodin `tulostaTahtia` tai toteuttamaan sen uudelleen tämän tehtävän tehtäväpohjaan. -->

You will also have to either copy the `printStars` method your previous answer or reimplement it in this exercise template.

<!-- <h2>Oikealle nojaavan kolmion tulostus</h2> -->

<h2>Printing a right-leaning triangle</h2>

<!-- Tee metodi `tulostaKolmio(int koko)` joka tulostaa kolmion käyttäen `tulostaTyhjaa`- ja `tulostaTahtia`-metodeja. Siis esimerkiksi kutsu `tulostaKolmio(4)` tulostaa seuraavaa: -->

Create a method called `printTriangle(int size)` that uses `printSpaces` and `printStars` to print the correct triangle. So the method call `printTriangle(4)` should print the following:

<sample-output>
   *
  **
 ***
****
</sample-output>


<!-- <h2>Joulukuusen tulostus</h2> -->

<h2>Printing a Christmas tree</h2>

<!-- Tee metodi `jouluKuusi(int korkeus)` joka tulostaa joulukuusen. Joulukuusi koostuu annetun korkuisesta kolmiosta ja jalasta. Jalka on kaksi tähteä korkea ja kolme tähteä leveä ja se on keskellä kolmion pohjaa. Kuusi tulee rakentaa käyttämällä tulostukseen metodeja `tulostaTyhjaa` ja `tulostaTahtia` -->

Define a method called `christmasTree(int height)` that prints the correct Christmas tree. The Christmas tree consists of a triangle with the specified height and the base. The base is two stars high and three stars wide, and is placed at the center of the triangle's bottom. The tree is to be constructed by using the methods `printSpaces` and `printStars`.

<!-- Esimerkiksi kutsu `jouluKuusi(4)` tulostaa seuraavaa: -->

For example, the call `christmasTree(4)` should print the following:

<sample-output>
   *
  ***
 *****
*******
  ***
  ***
</sample-output>


<!-- Kutsu `jouluKuusi(10)` tulostaa: -->

The call `christmasTree(10)` should print:

<sample-output>
         *
        ***
       *****
      *******
     *********
    ***********
   *************
  ***************
 *****************
*******************
        ***
        ***
</sample-output>


<!-- **Huom:** korkeuksien jotka ovat alle 3 ei tarvitse toimia! -->

**N.B.:** heights shorter that 3 don't have work correctly!


</programming-exercise>
