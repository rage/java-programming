---
path: '/osa-2/3-lisaa-toistolauseita'
title: 'Lisää toistolauseita'
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

<!-- - Tutustut while-toistolauseen ehtoon. -->
<!-- - Opit käyttämään for-toistolausetta. -->
<!-- - Tiedät tilanteita, joihin while-toistolause sopii, ja tilanteita, joihin for-toistolause sopii. -->
 - Become familiar with the conditions of while loops.
 - Learn to use the for-loop.
 - Know when to use a while-loop and when to use a for-loop.

</text-box>


<!-- Tähän mennessä käyttämämme "while-true" -toistolause on erittäin näppärä silloin, kun ohjelmassa tulee toistaa toiminnallisuutta kunnes käyttäjä syöttää tietynlaisen syötteen. -->
The "while-true" loop we have been using is very handy when the program has to repeat a functionality until the user gives  certain input.

<!-- Tutustutaan seuraavaksi muutamaan muuhun toiston toteutustapaan. -->
Now we will get to know few other ways to do loops.


## While-loop with a condition

<!-- Olemme tähän mennessä käyttäneet toistolausetta, jonka suluissa on totuusarvo `true`, jolloin toistoa on jatkettu ikuisesti (tai kunnes toistolauseessa päädytään komentoon `break`). -->
So far we have been using a loop with the boolean 'true' in its paranthesis, so the loop continues forever (or until the loop is ended with the `break` command ).

<!-- Toistolauseen sulut sisältävät oikeastaan ehtolausekkeen, aivan samalla tavalla kuin `if`-komentoa seuraavat sulut. Arvon `true` voi korvata lausekkeella, joka evaluoidaan ohjelman suorituksen yhteydessä. Lauseke määritellään täsmälleen samalla tavalla kuin ehtolauseen lauseke. -->
Actually the paranthesis of a loop contain a conditional expression, or a condition, just like the paranthesis of an `if` statement. The `true` value can be replaced with an expression, which is evaluated as the program is executed. The expression is defined the same way as the condition of a conditional statement.

<!-- Seuraavassa esimerkissä tulostetaan luvut 1, 2, ..., 5.  Kun `luku`-muuttujan arvo on yli 5, `while`-ehto ei ole enää voimassa ja toistaminen lopetetaan. -->
The following code prints the numbers 1,2,...,5. When the value of the variable `number` is more than 5, the `while`-condition evaluates to false and the execution ends.


```java
int number = 1;

while (number < 6) {
    System.out.println(number);
    number++;
}
```

<!-- Lue ylläoleva "niin pitkään kuin muuttujan luku arvo on pienempi kuin 6, tulosta muuttujan luku arvo ja kasvata muuttujan luku arvoa yhdellä". -->
The code above can be read "As long as the value of the variable number is less than 6, print the value of the variable number and increase the value of the variable number by one".


<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        int luku = 1;\n\n        while (luku < 6) {\n            System.out.println(luku);\n            luku++;\n        }\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":2},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":2},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"14","frame_id":14}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":2},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":2},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":3},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"23","frame_id":23}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":3},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"24","frame_id":24}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":3},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":3},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":4},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":4},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":4},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":4},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":5},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":5},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":5},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":5},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":6},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":6},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"luku":6},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"return","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"luku":6,"__return__":["VOID"]},"ordered_varnames":["luku","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<!-- Yllä muuttujan `luku` arvoa kasvatetaan yhdellä aina kun toistolauseen lohko suoritetaan. -->
Above the value of the variable `number` is increased by one every time the loop body is executed.

<!-- Alla on video toistolauseen käytöstä. -->
Below is a video about using loops.

<youtube id='us9GXUZ60ws'></youtube>


## For-loop

<!-- Edellä näimme miten `while`-toistolauseen ehdon avulla voidaan käydä läpi lukuja tietystä luvusta tiettyyn lukuun. -->
Above we learned how a `while`-loop with a condition can be used to go through numbers in a certain interval.

<!-- Tällaisen toistolauseen rakenne on seuraava. -->
The structure of this kind of loop is the following.

```java
int i = 0;
while (i < 10) {
    System.out.println(i);
    i++;
}
```

<!-- Ylläolevan toistolauseen voi pilkkoa kolmeen osaan. Ensin esittelemme toistolauseessa toistokertojen laskemiseen käytettävän muuttujan `i` ja asetamme sen arvon nollaksi: `int i = 0;`. Tätä seuraa toistolauseen määrittely -- toistolauseen ehto on `i < 10` eli toistolausetta suoritetaan niin pitkään kuin muuttujan `i` arvo on pienempi kuin 10. Toistolauseessa on toistettava toiminnallisuus `System.out.println(i);`, jota seuraa toistolauseessa käytettävän muuttujan kasvatus `i++`. -->
The above loop can be split into three parts. First we introduce the variable i, used to count the number of times the loop has executed, and set its value to 0: `int i = 0;`. This is followed by the definition of the loop -- the loops condition is `i < 10` so the loop is executed as long as the value of the variable `i` is less than 10. The loop body contains the functionality to be executed `System.out.println(i);`, which is followed by increasing the value of the variable `i++`.

<!-- Saman toteuttaminen tapahtuu `for`-toistolauseella seuraavasti. -->
The same can be achieved with a `for`-loop like so.

```java
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}
```

<!-- For-toistolause koostuu neljästä osasta: (1) toistokertojen laskemiseen käytettävän muuttujan esittelystä; (2) toistolauseen ehdosta; (3) laskemiseen käytetyn muuttujan kasvattamisesta (tai pienentämisestä tai muuttamisesta); ja (4) toistettavasta toiminnallisuudesta. -->
A for-loop contains four parts: (1) introducing the variable for counting the number of executions; (2) the condition of the loop; (3) increasing (or decreasing or changing) the value of the counter variable; and (4) the functionality to be executed.


```java
for (*introducting a variable*; *condition*; *increasing the counter*) {
    // Functionality to be executed
}
```

<!-- Alla on kuvattuna toistolauseen suoritus askeleittain. -->
Loop execution is shown below step by step.

<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        for (int i = 0; i < 5; i++) {\n           System.out.println(i);\n        }   \n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":0},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":0},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":0},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":1},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":1},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":1},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":2},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":2},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":2},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":3},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":3},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":3},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":4},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":4},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n4\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":4},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"47","frame_id":47}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n4\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":5},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n4\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n4\n","event":"return","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

<!-- Yllä olevassa esimerkissä ohjelma tulostaa luvut nollasta neljään. Arvoalueen voi määrittää myös muuttujien avulla -- alla olevassa  esimerkissä määritellään muuttujat `alku` ja `loppu`, joiden avulla määritellään toistolauseen käsittelemä lukualue. -->
The example above prints the numbers from zero to four.
The interval can also be defined using variables -- the example below uses variables `start` and `end` to define the interval of numbers the loop goes through.

```java
int start = 3;
int end = 7;
for (int i = start; i < end; i++) {
    System.out.println(i);
}
```


<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        int alku = 3;\n        int loppu = 7;\n        for (int i = alku; i < loppu; i++) {\n            System.out.println(i);\n        }  \n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"alku":3},"ordered_varnames":["alku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"alku":3,"loppu":7},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":3,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"10","frame_id":10}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"i":3,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":3,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":4,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"i":4,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":4,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":5,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"i":5,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":5,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"35","frame_id":35}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":6,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"36","frame_id":36}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"i":6,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n6\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":6,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n6\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":7,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"45","frame_id":45}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n6\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"alku":3,"loppu":7},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n6\n","event":"return","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"alku":3,"loppu":7,"__return__":["VOID"]},"ordered_varnames":["alku","loppu","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

<!-- Seuraavissa tehtävissä jatketaan toistolauseiden harjoittelua. Voit käyttää tehtävissä joko ehdollista while-toistolausetta, tai for-toistolausetta. -->
We will continue practicing loops in the following exercises. You can use either a while-loop with a condition, or a for-loop.


<programming-exercise name='Nollasta lukuun' tmcname='osa02-Osa02_14.NollastaLukuun'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä kokonaisluvun. Tämän jälkeen ohjelma tulostaa luvut nollasta käyttäjän syöttämään lukuun. Voit olettaa, että käyttäjä syöttää aina positiivisen luvun. Alla on muutamia esimerkkejä ohjelman toivotusta toiminnasta. -->
Write a program, which reads an integer from the user. Then the program prints numbers from 0 to the number given by the user. You can assume that the user always gives a positive number. Below is some examples of the wanted functionality.

<sample-output>

**4**
0
1
2
3
4

</sample-output>

<sample-output>

**1**
0
1

</sample-output>

</programming-exercise>


<programming-exercise name='Luvusta sataan' tmcname='osa02-Osa02_15.LuvustaSataan'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä kokonaisluvun. Tämän jälkeen ohjelma tulostaa luvusta lähtien luvut sataan asti. Voit olettaa, että käyttäjä syöttää aina luvun, joka on pienempi kuin 100. Alla on muutamia esimerkkejä ohjelman toivotusta toiminnasta. -->
Write a program, which reads an integer from the user. Then the program prints numbers from that number to 100. You can assume that the user always gives a number less than 100. Below are some examples of the wanted functionality.


<sample-output>

**99**
99
100

</sample-output>


<sample-output>

**-4**
-4
-3
-2
-1
0
1
2
... (many numbers in between) ...
98
99
100

</sample-output>

</programming-exercise>


<text-box variant='hint' name='Moniosaisia tehtäviä'>

<!-- Huomaa, että tästä lähtien tehtävissä saattaa olla useampia osia. Jokainen osa lasketaan yksittäiseksi tehtäväksi, eli esimerkiksi seuraava tehtävä vastaa kahta yksiosaista tehtävää. Useampiosaiset tehtävät voi tyypillisesti palauttaa myös vaikka tehtävä ei olisi vielä valmis -- tällöin valmiista osista lisätään pisteet kirjanpitoon. -->
Note, that from now on exercises can have multiple parts. All of the parts are counted as separate exercises, so for example the following exercise counts as two separate exercises. Exercises with multiple parts can also typically be submitted even if all parts are not ready -- then points for the completed parts are added to your points count.

</text-box>


<programming-exercise name='Mihin ja mistä? (2 osaa)' tmcname='osa02-Osa02_16.MihinJaMista'>


<!-- Tämä tehtävä on ensimmäinen kaksiosainen tehtävä. Kun teet molemmat osat, saat tehtävästä kaksi tehtäväpistettä. Voit palauttaa tehtävän myös siten, että vain ensimmäinen osa on tehtynä. -->
This exercise is the first two part exercise. When you complete both parts, you will get two exercise points. You can also submit the exercise only after completing the first part.


<h2>Until what</h2>

<!-- Kirjoita ohjelma, joka tulostaa kokonaisluvut 1:stä käyttäjän antamaan lukuun asti. -->
Write a program, which prints integers from 1 to a number given by the user.

<sample-output>

Until what? **3**
1
2
3

</sample-output>

<sample-output>

Until what? **5**
1
2
3
4
5

</sample-output>

<!-- **Vihje:** käyttäjältä lukemasi luku toimii nyt lopetusehdon ylärajana. Muista että Javassa `a <= b` tarkoittaa _a pienempi tai yhtä suuri kuin b_. -->
**hint** the number read from the user is now the upper limit of the condition. Remember that in Java `a <= b` means _a is smaller or equal to b_.


<h2>From where?</h2>

<!-- Lisää ohjelmaan käyttäjältä kysyttävä alaraja. -->
Ask the user for the starting point as well.

<sample-output>

Until what? **8**
From where? **5**
5
6
7
8

</sample-output>

<!-- Jos tavoite on suurempi kuin lähtökohta ei tulostu mitään: -->
If the upper limit is larger than the starting point, nothing is printed:

<sample-output>

Until what? **12**
From where? **16**

</sample-output>

<!-- **Huom!** muista että ala- ja yläraja voivat olla myös negatiivisia! -->
**NB** remember that the lower- and the upper limits can be negative!

</programming-exercise>


## About stopping loop execution

<!-- Toistolauseen suoritus ei lopu heti kun toistolauseen ehtolauseke voisi evaluoitua todeksi. Toistolauseen ehtolauseke evaluoidaan aina kun saavutaan toistolauseen alkuun, eli (1) kun ohjelman seuraava suoritettava lause on toistolause, ja (2) kun toistolauseeseen liittyvän lohkon sisältämän ohjelmakoodin suoritus on saatu loppuun. -->
A loop does not stop executing immediately when its condition evaluates true. Loops condition is evaluated at the start of a loop, so (1) when the next statement to be executed is a loop, and (2) the execution of the loop body has finished.

<!-- Tarkastellaan seuraavaa toistolausetta. -->
Let's look at the following loop.

```java
int number = 1;

while (number != 2) {
    System.out.println(number);
    luku = 2;
    System.out.println(number);
    luku = 1;
}
```

<!-- Ohjelman tulostus seuraavanlainen: -->
It prints the following:

<sample-output>
1
2
1
2
1
2
...
</sample-output>

<!-- Vaikka muuttujan `luku` arvo on välillä 2, toistolauseen suoritus ei lopu koskaan. -->
Even though `number` equals 2 at one point, the loop runs for forever.


<!-- **Toistolauseen ehto tarkistetaan silloin kun toistolauseen toistaminen aloitetaan sekä silloin kun koodin suoritus on päässyt toistolauseen lopettavaan aaltosulkuun asti.** Mikäli toistolauseen ehdon lauseke on evaluoituu todeksi eli muotoon `true`, suoritus jatkuu toistolauseen alusta. Mikäli lauseke evaluoituu epätodeksi eli muotoon `false`, suoritus siirtyy toistolausetta seuraavaan lauseeseen. -->
**The condition of a loop is evaluated when execution of a loop starts and when the execution of the loop body has reached the closing curly bracket.** If the condition evaluates to `true`, execution continues from the top of the loop body. If the condition evaluates to `false`, execution continues from the first statement after the loop.


<!-- Vastaava sääntö pätee myös for-toistolauseelle. Alla olevassa esimerkissä toistolauseen suoritus -- väärin ymmärrettynä -- pitäisi lopettaa heti, kun muuttujan `i` arvo on 100. Näin ei kuitenkaan käy. -->
The same applies to for-loops. In the example below loop execution --when not understood correctly-- should end when `i` equals 100. However it does not.

```java
for (int i = 0; i != 100; i++) {
    System.out.println(i);
    i = 100;
    System.out.println(i);
    i = 0;
}
```

<!-- Yllä olevan ohjelman suoritus ei pääty koskaan. -->
The loop above never stops executing.


## Repeating functionality

<!-- Eräs yleinen ongelmatyyppi on "tee jotain tietty määrä kertoja". Näissä ohjelmissa esiintyy toisto, jonka jokaisella toistokerralla tehdään haluttu toiminnallisuus sekä muutetaan kertojen lukumäärää laskevaa laskurimuuttujaa. -->
One common program type is "do something certain amount of times".
Common for all these programs is repetition. Some functionality is done repeatedly, and a counter variable is used to keep track of the repetitions.

<!-- Seuraava ohjelma laskee tulon 4*3 hieman kömpelöllä tavalla eli summana 3 + 3 + 3 + 3: -->
The following program calculates the product 4*3 clumsily as a sum 3 + 3 + 3 + 3:

```java
int result = 0;

int i = 0;
while (true) {
    result += 3; // shorthand for result = result + 3
    i++;  // shorthand for i = i + 1

    if (i == 4) {
        break;
    }
}

System.out.println(result);
```

<!-- Saman toiminnallisuuden voi toteuttaa myös seuraavasti. -->
The same functionality can be achieved with the following code.

```java
int result = 0;

int i = 0;
while (i < 4) {
    result += 3; // shorthand for result = result + 3
    i++;  // shorthand for i = i + 1

}

System.out.println(result);
```

<!-- Tai for-lauseen avulla seuraavasti. -->
Or by using a for-loop

```java
int result = 0;

for (int i = 0; i < 4; i++) {
    result += 3;
}

System.out.println(result);
```

<!-- Alla ohjelman suoritus on kuvattuna while-toistolausetta käyttäen. -->
Below shows the execution of the program using a while-loop.


<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        int tulos = 0;\n\n        int i = 0;\n        while (i < 4) {\n            tulos += 3;\n            i++;\n        }\n\n        System.out.println(tulos);\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"tulos":0},"ordered_varnames":["tulos"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":0,"i":0},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":0,"i":0},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":3,"i":0},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":3,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":3,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":3,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":6,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":6,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"24","frame_id":24}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":6,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":6,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":9,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":9,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":9,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":9,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":12,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"47","frame_id":47}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"12\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"12\n","event":"return","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"tulos":12,"i":4,"__return__":["VOID"]},"ordered_varnames":["tulos","i","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<text-box type="hint" name="Ohjelman suorituksen simulointi">

<!-- Kun muuttujien määrä kasvaa, ohjelman ymmärtäminen muuttuu haastavammaksi. Ohjelman suorituksen ymmärtämistä edesauttaa ohjelman suorituksen simulointi. -->
When the number of variables increases, understanding a program becomes harder. Simulating program execution can help  understanding it.

<!-- Tämä toimii niin, että luot paperilapulle taulukon, joka sisältää sarakkeet kullekin ohjelman muuttujalle, ehdolle, ym, sekä erillisen kohdan ohjelman tulostuksille. Tämän jälkeen käyt ohjelmaa rivi riviltä läpi ja kirjoitat sarakkeisiin ohjelman tilan (eli muuttujien arvojen) muutokset, sekä tulostusalueelle ohjelman tuottamat tulostukset. -->
You can simulate program execution by drawing a table containing a column for each variable and condition of a program, and a separate space for program output. Then go through the source code line by line, and write down the changes to the state of the program (the values of each variable or condition), and the program output.

<!-- Alla olevaan taulukkoon on kirjoitettu auki edellisen esimerkin muuttujien `tulos` ja `i` arvot kullakin toistolauseen ehdon `i < 4` vertailuhetkellä. -->
The values of variables `result` and `i` from the previous example have been written to the table below at each point the condition `i < 4` is evaluated.

<table class="table">
  <tr>
    <th>result</th>
    <th>i</th>
    <th>i < 4</th>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>true</td>
  </tr>
  <tr>
    <td>3</td>
    <td>1</td>
    <td>true</td>
  </tr>
  <tr>
    <td>6</td>
    <td>2</td>
    <td>true</td>
  </tr>
  <tr>
    <td>9</td>
    <td>3</td>
    <td>true</td>
  </tr>
  <tr>
    <td>12</td>
    <td>4</td>
    <td>false</td>
  </tr>
</table>


</text-box>

<programming-exercise name='Lukusarjan summa' tmcname='osa02-Osa02_17.LukusarjanSumma'>

<!-- Tee ohjelma, joka laskee summan 1+2+3+...+n, missä n on käyttäjän syöttämä luku. -->
Implement a program, which calculates the sum 1+2+3+...+n where n is given as user input.

<!-- Esimerkkitulostuksia: -->
Sample output:

<sample-output>

<!-- Mihin asti? **3** -->
<!-- Summa on 6 -->
Up to? **3**
The sum is 6

</sample-output>

<!-- Edellisessä esimerkissä laskettiin 1 + 2 + 3 = 6 -->
The previous example calculated 1 + 2 + 3  = 6

<sample-output>

<!-- Mihin asti? **7** -->
<!-- Summa on 28 -->
Up to? **7**
The sum is 28

</sample-output>

<!-- Ja nyt laskettiin 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28 -->
And this one calculated 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28

</programming-exercise>


<programming-exercise name='Rajatun lukusarjan summa' tmcname='osa02-Osa02_18.RajatunLukusarjanSumma'>

<!-- Kirjoita ohjelma, joka laskee rajatun välin lukujen summan ja tulostaa sen. Oleta, että käyttäjä antaa ensin pienemmän luvun ja sitten suuremman luvun. -->
Implement a program, which calculated the sum of a closed interval, and prints it. Expect the user to write the smaller number first and then the larger number.

<!-- Voit hyödyntää edelliseen tehtävään tekemääsi vastausta tämän tehtävän vastauksen lähtökohtana -- edellisessä toteutetun toiminnallisuuden lisäksi käyttäjä määrää myös aloituskohdan. -->
You can base your solution to this exercise to the solution of last exercise --adding the functionality for user to enter the starting point as well.

<!-- Esimerkkitulostuksia: -->
Sample output:

<sample-output>

<!-- Ensimmäinen: **3** -->
<!-- Viimeinen: **5** -->
<!-- Summa on 12 -->
First: **3**
Last: **5**
The sum is: 12

</sample-output>

<!-- Edellisessä laskettiin 3 + 4 + 5 = 12 -->
calculates  3 + 4 + 5 = 12

<sample-output>

<!-- Ensimmäinen: **2** -->
<!-- Viimeinen: **8** -->
<!-- Summa on 35 -->
First: **2**
Last: **8**
The sum is: 35

</sample-output>

<!-- Ja nyt laskettiin 2 + 3 + 4 + 5 + 6 + 7 + 8 = 35 -->
calculates 2 + 3 + 4 + 5 + 6 + 7 + 8 = 35

</programming-exercise>


<programming-exercise name='Kertoma' tmcname='osa02-Osa02_19.Kertoma'>

<!-- Tee ohjelma, joka laskee käyttäjän syöttämän luvun kertoman. -->
Implement a program, which calculates the factorial of a number given by the user.

<!-- Kertoma `n!` lasketaan kaavalla 1 * 2 * 3 * ... * n. Esimerkiksi luvun 4 kertoma on 24, eli 4! = 1 * 2 * 3 * 4 = 24. Lisäksi on määritelty, että luvun 0 kertoma on 1, eli 0! = 1. -->
Factorial of n, `n!`, is calculated 1 * 2 * 3 * ... * n. For example the factorial of 4 is 24 or 4! = 1 * 2 * 3 * 4 = 24. Additionally it has been specified, that the factorial of 0 is 1, so 0! = 1.

<!-- Esimerkkitulostuksia: -->
Sample output:

<sample-output>

<!-- Anna luku: **3** -->
<!-- Kertoma on 6 -->
Write a number: **3**
Factorial is 6

</sample-output>

<!-- Nyt laskettiin 1 * 2 * 3 = 6 -->
calculated 1 * 2 * 3 = 6

<sample-output>

<!-- Anna luku: **10** -->
<!-- Kertoma on 3628800 -->
Write a number: **10**
Factorial is 3628800

</sample-output>

<!-- Ja nyt laskettiin 1 * 2 * 3 * ... * 8 * 9 * 10 = 3628800 -->
calculated 1 * 2 * 3 * ... * 8 * 9 * 10 = 3628800

<!-- _Lisätietoa_: Kertomaa käytetään erityisesti todennäköisyyslaskennassa tilanteissa, missä halutaan esimerkiksi tarkastella jonkin joukon kaikkia erilaisia järjestyksiä. Esimerkiksi viiden hengen ryhmän voi järjestää 5! erilaiseen jonoon, ja 52 kortin korttipakka voi olla 52! erilaisessa järjestyksessä. Kertomaa voi käyttää myös <a href="http://fi.wikipedia.org/wiki/Kombinaatio" target="_blank" rel="noopener">kombinaatioiden</a> laskemiseen; esimerkiksi 52 kortin korttipakasta on mahdollista jakaa 52! / (5! * (52 - 5)!) erilaisella viiden kortin kättä, ja 40 numeron joukosta voi tehdä yhteensä 40! / (7! * (40 - 7)!) erilaista 7 numeron lottoriviä. -->
_Additional info_: Factorials are used especially in propability calculus when examining different possible orders of a set. For example a group of five people can form 5! different lines, and a pack of 52 cards can be in 52! different orders. Factorial can also be used to calculate <a href="http://fi.wikipedia.org/wiki/Kombinaatio" target="_blank" rel="noopener"> combinations </a>; For example it is possible to deal 52! / (5! * (52-5)!) different hands from a 52 card pack, and you can form 40! / (7! * (40 - 7)!) different 7 number bingo lines from 40 numbers.

</programming-exercise>


## About the structure of programs using loops

<!-- Edellisissä esimerkeissä olemme keskittyneet ohjelmiin, joissa toistolauseessa olevaa koodia toistetaan tietty määrä. Tämä määrä on voinut rajoittua käyttäjän syötteen perusteella -- tällaisissa ohjelmissa for-toistolause on varsin näppärä. -->
In the previous examples we have concentrated on cases, where the loop is executed a predetermined number of times. The number of repetitions can be based on user input -- in these cases the for-loop is quite handy.

<!-- Ohjelmissa, joissa toistolauseessa olevaa koodia tulee suorittaa kunnes käyttäjä syöttää tietyn syötteen, for-toistolause ei toimi kovin hyvin. Tällöin aiemmin harjoittelemamme while-true -toistolause toimii hyvin. -->
In  programs where the loop body has to be executed until the user gives certain input the for-loop is not so great. In these cases the while-true -loop we practiced earlier works well.

<!-- Tarkastellaan lyhyesti hieman laajempaa ohjelmaa, joka lukee käyttäjältä kokonaislukuja. Ohjelma käsittelee negatiiviset luvut epäkelpoina lukuina, positiiviset luvut hyväksyttävinä lukuina, sekä nollan lukemisen lopettamista ilmaisevana lukuna. Kun käyttäjä syöttää nollan, ohjelma tulostaa hyväksyttyjen lukujen summan, hyväksyttyjen lukujen lukumäärän sekä epäkelpojen lukujen lukumäärän. -->
Let's have a look at a bit more complex program, which reads integers from the user. The program handles negative numbers as invalid, and zero stops the loop. When user writes zero, the program prints the sum of valid numbers, the number of valid numbers and the number of invalid numbers.

<!-- Alla on kuvattuna eräs mahdollinen ratkaisu, joka ei kuitenkaan ole tyylin kannalta ideaali. -->
Below is one possible solution. However the style of the example is not ideal.

```java
Scanner reader = new Scanner(System.in);

System.out.print("Write numbers, negative numbers are invalid: ");
int sum = 0;
int validNumbers = 0;
int invalidNumbers = 0;

while (true) {
    int input = Integer.valueOf(input.nextLine());

    if (input == 0) {
        System.out.println("Sum of valid numbers: " + sum);
        System.out.println("Valid numbers: " + validNumbers);
        System.out.println("Invalid numbers: " + invalidNumbers);
        break;
    }

    if (input < 0) {
        invalidNumbers++;
        continue;
    }

    sum += input;
    validNumbers++;
}
```

<!-- Yllä kuvatussa lähestymistavassa toistolauseen päättymisen jälkeen tapahtuva laskenta on toteutettu toistolauseen sisälle. Lähestymistapa ei ole suositeltava, sillä se johtaa helposti hyvin monimutkaiseen ohjelman rakenteeseen. Jos toistolauseen lopettamisen yhteydessä pitäisi tehdä muutakin -- esimerkiksi lukea lisää syötteitä -- asetettaisiin kyseinenkin toiminnallisuus helposti ehtolauseen sisälle. Lisätoiminnallisuuden kertyessä, ohjelma muuttuisi yhä vaikeammin ja vaikeammin luettavaksi. -->
In the above code, the computation which is executed after the loop ends has been implemented inside of the loop. This approach is not recommended, as it can easily lead to a very complex program structure. If some other code --e.g reading more input-- should be done when the loop ends as well, it could easily end up being placed inside of the loop too. As more and more functionality is needed, the program would become harder and harder to read.

<!-- Pitäydytään seuraavassa toistolauseen muodossa: -->
Let's stick to the following loop structure:

```java
Scanner reader = new Scanner(System.in);

// Create variables needed for the loop

while (true) {
    // read input

    // end the loop --break

    // check for invalid input -- continue

    // handle valid input
}

// functionality to execute after the loop ends
```

<!-- Toisin sanoen, oleva ohjelma on selkeämpi jos toistolauseesta poistumisen jälkeen tehtävät asiat ovat toistolauseen ulkopuolella. -->
In other words, the program structure is cleaner if the things to be done after the loop ends are placed outside of it.

```java
Scanner reader = new Scanner(System.in);

System.out.print("Write numbers, negative numbers are invalid: ");
int sum = 0;
int validNumbers = 0;
int invalidNumbers = 0;

while (true) {
    int input = Integer.valueOf(lukija.nextLine());

    if (input == 0) {
        break;
    }

    if (input < 0) {
        invalidNumbers++;
        continue;
    }

    sum += input;
    validNumbers++;
}

System.out.println("Sum of valid numbers: " + sum);
System.out.println("Valid numbers: " + validNumbers);
System.out.println("Invalid numbers: " + invalidNumbers);
```


<programming-exercise name='Silmukat, lopetus ja muistaminen (5 osaa)' tmcname='osa02-Osa02_20.SilmukatLopetusJaMuistaminen'>

<!-- Seuraavassa tehtävässä tehdään yksi ohjelma, mutta ohjelman rakentaminen tapahtuu hyvin pienissä paloissa. Tämä on ehdottoman suositeltava tapa aina kun ohjelmoit. -->
Next we will implement one larger program small piece at a time. This is a strongly recommended approach always when coding.

<!-- Tehtäväsarja muodostaa yhden isomman ohjelman, jonka toiminnallisuus toteutetaan pienissä paloissa. Jos et tee tehtäväsarjaa loppuun asti, voit lähettää sen tarkastettavaksi vajaatekoisenakin. Tämä onnistuu painamalla testausnapin oikealla puolella olevasta "submit"-napista eli pienestä ylöspäinosoittavasta nuolesta. Vaikka palautusautomaatti valittaakin vielä tekemättä olevien tehtävänosien testeistä, kirjautuvat jo tekemiesi osien pisteet. -->
In this series of exercises a program is implemented functionality by functionality. If you do not finish the whole series, you can still submit the completed parts. This can be done by clicking the "submit" button (the arrow pointing up) at the right of the "test" button. Even though the submission system complains about the tests of the unfinished parts, you get the points for the parts you have finished.

<!-- Huom: muistathan, että jokaisen isomman tehtävän "alitehtävä" on saman arvoinen tehtävä kuin yksi alikohdaton tehtävä. Tämä tehtävä vastaa siis viittä normaalia tehtävää. -->
NB: Remember, that each part of the series is worth the same as one individual exercise. This series is then worth the same as five individual exercises.

<h2>Reading input</h2>

<!-- Tee ohjelma, joka kysyy käyttäjältä lukuja (ohjelma tulostaa käyttäjälle aluksi "Syötä luvut:"), kunnes käyttäjä antaa luvun -1. Kun käyttäjä syöttää luvun -1, ohjelma tulostaa "Kiitos ja näkemiin!" ja päättyy. -->
Implement a program, which asks user for number (the program first prints "Write numbers: ") until the user gives the number -1, When the user writes -1, the program prints "Thank you! Goodbye!" and ends.

<sample-output>

Write numbers:
**5**
**2**
**4**
**-1**
Thank you! Goodbye!

</sample-output>


<h2>Sum of numbers</h2>

<!-- Laajenna edellistä ohjelmaa siten, että ohjelma ilmoittaa käyttäjän syöttämien lukujen summan. (Lukua -1 ei lasketa mukaan.) -->
Extend the program so, that it prints the sum of the numbers (not including the -1) the user has written.

<sample-output>

Write numbers:
**5**
**2**
**4**
**-1**
Thank you! Goodbye!
Sum: 11

</sample-output>


<h2>Sum and the number of numbers</h2>

<!-- Laajenna edellistä ohjelmaa siten, että ohjelma ilmoittaa myös käyttäjien antamien lukujen lukumäärän. (Lukua -1 ei lasketa mukaan.) -->
Extend the program so, that it also prints the number of numbers (not including the -1) the user has written.

<sample-output>

Write numbers:
**5**
**2**
**4**
**-1**
Thank you! Goodbye!
Sum: 11
Numbers: 3

</sample-output>


<h2>Mean of numbers</h2>

<!-- Muuta edellistä ohjelmaa siten, ohjelma ilmoittaa lukujen keskiarvon. (Lukua -1 ei lasketa mukaan.) -->
Extend the program so, that it prints the mean of the numbers (not including the -1) the user has written.

<sample-output>
Write numbers:
**5**
**2**
**4**
**-1**
Thank you! Goodbye!
Sum: 11
Numbers: 3
Mean: 3.666666666666

</sample-output>


<h2>Even and odd numbers</h2>

<!-- Laajenna edellistä ohjelmaa siten, että  ohjelma ilmoittaa parillisten ja parittomien lukujen määrän. (Lukua -1 ei lasketa mukaan.) -->
Extend the program so, that it prints the number of even and odd numbers (not including the -1).

<sample-output>

Write numbers:
**5**
**2**
**4**
**-1**
Thank you! Goodbye!
Sum: 11
Numbers: 3
Mean: 3.666666666666
Even: 2
Odd: 1

</sample-output>

</programming-exercise>


<text-box variant='hint' name='Ohjelmien tekeminen pienissä paloissa'>

<!-- Edellisessä tehtävässä harjoiteltiin tehtävän osien kautta ohjelman tekemistä pienissä paloissa. -->
In the previous exercise we used a series of exercises to practice implementing a program small piece at a time.

<!-- Kun teet ohjelmaa, oli se sitten harjoitustehtävä tai oma projektisi, mieti minkälaisia osia ohjelma tarvitsee toimiakseen, ja etene näitä pieniä osia yksitellen toteuttaen. Jokaisen osan toteuttamisen jälkeen kokeile tähänastisen ohjelmasi toimintaa. -->
When you are creating a program, being it an exercise or your own project, think what kinds of parts the program needs to work, and proceed by implementing the parts one part at a time. Test the program after each part.

<!-- Älä koskaan yritä ratkaista koko ongelmaa kerralla, sillä tällöin ohjelman suorittaminen ja testaaminen kesken ongelmanratkaisuprosessin on vaikeaa. Aloita jollain helpolla asialla jonka tiedät varmasti osaavasi. Kun yksi ohjelman osa on saatu toimimaan, voit siirtyä ratkaisemaan seuraavaa ongelmaa. -->
Never try solving the whole problem at once, because that makes running and testing the program in the middle of the problem solving process difficult. Start with something easy you know you can do. When one part works, you can move on to the next part.

<!-- Osa kurssin tehtävistä on valmiiksi osiin pilkottuja. Usein osat pitää vielä pilkkoa ohjelmoinnin kannalta vieläkin pienempiin paloihin. Kannattaa tehdä siten, että suoritat ohjelman lähes jokaisen uuden koodirivin jälkeen. Tällöin varmistat, että ratkaisu on etenemässä haluttuun suuntaan. -->
Some of the exercises are already split into parts. However, often the parts have to be split into smaller parts for programming. You should run the program after almost each new line of code. This way you ensure, that the solution is moving to the right direction.

</text-box>
