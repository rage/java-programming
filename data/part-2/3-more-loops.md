---
path: '/part-2/3-more-loops'
title: 'More loops'
hidden: true
---


<text-box variant='learningObjectives' name='Learning Objectives'>

<!-- - Tutustut while-toistolauseen ehtoon. -->
<!-- - Opit käyttämään for-toistolausetta. -->
<!-- - Tiedät tilanteita, joihin while-toistolause sopii, ja tilanteita, joihin for-toistolause sopii. -->
 - You're familiar with the of while loop condition.
 - You learn to use the for-loop.
 - You recognize situations where a while-loop should be used and those where a for-loop is more appropriate.

</text-box>

<text-box variant="hint" name="Motivation and study strategy questionnaire">
Here you will answer to a questionnaire about motivation and study strategies. The questionnaire is MSLQ by Paul Pintrich and his colleaques. It contains 81 statements about motivation and study strategies. The results will be used for course development and education research.  <google-form-link href="https://docs.google.com/forms/d/e/1FAIpQLSdONWmF8GFyhMDzdpkXTeGxAi0FcRtIwPc-0e58B_7Qhl3w9g/viewform?usp=pp_url" emailfieldname="entry.575150039">Open the questionnaire by clicking this link.</google-form-link>
</text-box>

<quiz id="a8a1f3fb-8649-4819-9a83-deea85be6599"></quiz>

<!-- Tähän mennessä käyttämämme "while-true" -toistolause on erittäin näppärä silloin, kun ohjelmassa tulee toistaa toiminnallisuutta kunnes käyttäjä syöttää tietynlaisen syötteen. -->
The "while-true" loop we've been using is very handy when the program has to repeat a functionality until the user provides certain input.

<!-- Tutustutaan seuraavaksi muutamaan muuhun toiston toteutustapaan. -->
Next, we'll come to know a few other ways to implement loops.


## While-Loop with a Condition

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


<code-states-visualizer input='{"code":"public class Example {\n    public static void main(String[] args) {\n        int number = 1;\n\n        while (number < 6) {\n            System.out.println(number);\n            number++;\n        }\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":2},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"number":2},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"14","frame_id":14}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"number":2},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":2},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":3},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"23","frame_id":23}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"number":3},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"24","frame_id":24}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"number":3},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":3},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":4},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"number":4},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"number":4},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":4},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":5},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"number":5},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"number":5},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":5},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":6},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"number":6},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"number":6},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"return","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"number":6,"__return__":["VOID"]},"ordered_varnames":["number","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


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

<code-states-visualizer input='{"code":"public class Example {\n    public static void main(String[] args) {\n        for (int i = 0; i < 5; i++) {\n           System.out.println(i);\n        }   \n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":0},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":0},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":0},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":1},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":1},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":1},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":2},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":2},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":2},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":3},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":3},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":3},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":4},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":4},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n4\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":4},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"47","frame_id":47}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n4\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":5},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n4\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n4\n","event":"return","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

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


<code-states-visualizer input='{"code":"public class Example {\n    public static void main(String[] args) {\n        int start = 3;\n        int end = 7;\n        for (int i = start; i < end; i++) {\n            System.out.println(i);\n        }  \n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"start":3},"ordered_varnames":["start"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"start":3,"end":7},"ordered_varnames":["start","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":3,"start":3,"end":7},"ordered_varnames":["start","end","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"10","frame_id":10}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"i":3,"start":3,"end":7},"ordered_varnames":["start","end","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":3,"start":3,"end":7},"ordered_varnames":["start","end","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":4,"start":3,"end":7},"ordered_varnames":["start","end","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"i":4,"start":3,"end":7},"ordered_varnames":["start","end","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":4,"start":3,"end":7},"ordered_varnames":["start","end","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":5,"start":3,"end":7},"ordered_varnames":["start","end","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"i":5,"start":3,"end":7},"ordered_varnames":["start","end","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":5,"start":3,"end":7},"ordered_varnames":["start","end","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"35","frame_id":35}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":6,"start":3,"end":7},"ordered_varnames":["start","end","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"36","frame_id":36}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"i":6,"start":3,"end":7},"ordered_varnames":["start","end","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n6\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":6,"start":3,"end":7},"ordered_varnames":["start","end","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n6\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":7,"start":3,"end":7},"ordered_varnames":["start","end","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"45","frame_id":45}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n6\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"start":3,"end":7},"ordered_varnames":["start","end"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n6\n","event":"return","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"start":3,"end":7,"__return__":["VOID"]},"ordered_varnames":["start","end","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

<!-- Seuraavissa tehtävissä jatketaan toistolauseiden harjoittelua. Voit käyttää tehtävissä joko ehdollista while-toistolausetta, tai for-toistolausetta. -->
We will continue practicing loops in the following exercises. You can use either a while-loop with a condition, or a for-loop.


<programming-exercise name='Counting' tmcname='part02-Part02_14.Counting'>

<!-- Kirjoita ohjelma, joka lukee käyttäjältä kokonaisluvun. Tämän jälkeen ohjelma tulostaa luvut nollasta käyttäjän syöttämään lukuun. Voit olettaa, että käyttäjä syöttää aina positiivisen luvun. Alla on muutamia esimerkkejä ohjelman toivotusta toiminnasta. -->
Write a program that reads an integer from the user. Then the program prints numbers from 0 to the number given by the user. You can assume that the user always gives a positive number. Below is some examples of the wanted functionality.

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


<programming-exercise name='Counting to hundred' tmcname='part02-Part02_15.CountingToHundred'>

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


<text-box variant='hint' name='Exercises with multiple parts'>

<!-- Huomaa, että tästä lähtien tehtävissä saattaa olla useampia osia. Jokainen osa lasketaan yksittäiseksi tehtäväksi, eli esimerkiksi seuraava tehtävä vastaa kahta yksiosaista tehtävää. Useampiosaiset tehtävät voi tyypillisesti palauttaa myös vaikka tehtävä ei olisi vielä valmis -- tällöin valmiista osista lisätään pisteet kirjanpitoon. -->
Note, that from now on exercises can have multiple parts. All of the parts are counted as separate exercises, so for example the following exercise counts as two separate exercises. Exercises with multiple parts can also typically be submitted even if all parts are not ready -- then points for the completed parts are added to your points count.

</text-box>


<programming-exercise name='From where to where? (2 parts)' tmcname='part02-Part02_16.FromWhereToWhere'>


<!-- Tämä tehtävä on ensimmäinen kaksiosainen tehtävä. Kun teet molemmat osat, saat tehtävästä kaksi tehtäväpistettä. Voit palauttaa tehtävän myös siten, että vain ensimmäinen osa on tehtynä. -->
This exercise is the first two part exercise. When you complete both parts, you will get two exercise points. You can also submit the exercise only after completing the first part.


<h2>Where to</h2>

<!-- Kirjoita ohjelma, joka tulostaa kokonaisluvut 1:stä käyttäjän antamaan lukuun asti. -->
Write a program, which prints integers from 1 to a number given by the user.

<sample-output>

Where to? **3**
1
2
3

</sample-output>

<sample-output>

Where to? **5**
1
2
3
4
5

</sample-output>

<!-- **Vihje:** käyttäjältä lukemasi luku toimii nyt lopetusehdon ylärajana. Muista että Javassa `a <= b` tarkoittaa _a pienempi tai yhtä suuri kuin b_. -->
**hint** the number read from the user is now the upper limit of the condition. Remember that in Java `a <= b` means _a is smaller or equal to b_.


<h2>Where from</h2>

<!-- Lisää ohjelmaan käyttäjältä kysyttävä alaraja. -->
Ask the user for the starting point as well.

<sample-output>

Where to? **8**
Where from? **5**
5
6
7
8

</sample-output>

<!-- Jos tavoite on suurempi kuin lähtökohta ei tulostu mitään: -->
If the upper limit is larger than the starting point, nothing is printed:

<sample-output>

Where to? **12**
Where from? **16**

</sample-output>

<!-- **Huom!** muista että ala- ja yläraja voivat olla myös negatiivisia! -->
**NB** remember that the lower- and the upper limits can be negative!

</programming-exercise>


## On Stopping a Loop Execution

<!-- Toistolauseen suoritus ei lopu heti kun toistolauseen ehtolauseke voisi evaluoitua todeksi. Toistolauseen ehtolauseke evaluoidaan aina kun saavutaan toistolauseen alkuun, eli (1) kun ohjelman seuraava suoritettava lause on toistolause, ja (2) kun toistolauseeseen liittyvän lohkon sisältämän ohjelmakoodin suoritus on saatu loppuun. -->
A loop does not stop executing immediately when its condition evaluates to true. A loop's condition is evaluated at the start of a loop, i.e., (1) when the next statement to be executed is a loop, and (2) the execution of the loop body has finished.

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
Even though `number` equals 2 at one point, the loop runs forever.


<!-- **Toistolauseen ehto tarkistetaan silloin kun toistolauseen toistaminen aloitetaan sekä silloin kun koodin suoritus on päässyt toistolauseen lopettavaan aaltosulkuun asti.** Mikäli toistolauseen ehdon lauseke on evaluoituu todeksi eli muotoon `true`, suoritus jatkuu toistolauseen alusta. Mikäli lauseke evaluoituu epätodeksi eli muotoon `false`, suoritus siirtyy toistolausetta seuraavaan lauseeseen. -->
**The condition of a loop is evaluated when the execution of a loop starts and when the execution of the loop body has reached the closing curly bracket.** If the condition evaluates to `true`, execution continues from the top of the loop body. If the condition evaluates to `false`, execution continues from the first statement following the loop.


<!-- Vastaava sääntö pätee myös for-toistolauseelle. Alla olevassa esimerkissä toistolauseen suoritus -- väärin ymmärrettynä -- pitäisi lopettaa heti, kun muuttujan `i` arvo on 100. Näin ei kuitenkaan käy. -->
This also applies to for-loops. In the example below, loop execution -- when understood incorrectly -- should end when `i` equals 100. However, it doesn't.

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


## Repeating Functionality

<!-- Eräs yleinen ongelmatyyppi on "tee jotain tietty määrä kertoja". Näissä ohjelmissa esiintyy toisto, jonka jokaisella toistokerralla tehdään haluttu toiminnallisuus sekä muutetaan kertojen lukumäärää laskevaa laskurimuuttujaa. -->
One common program type is "do something certain amount of times".
What's common to all these programs is repetition. Some functionality is done repeatedly, and a counter variable is used to keep track of the repetitions.

<!-- Seuraava ohjelma laskee tulon 4*3 hieman kömpelöllä tavalla eli summana 3 + 3 + 3 + 3: -->
The following program calculates the product 4*3 somewhat clumsily, i.e., as the sum 3 + 3 + 3 + 3:

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
Or by using a for-loop as seen in the following.

```java
int result = 0;

for (int i = 0; i < 4; i++) {
    result += 3;
}

System.out.println(result);
```

<!-- Alla ohjelman suoritus on kuvattuna while-toistolausetta käyttäen. -->
The program execution using a while-loop is visualized below.


<code-states-visualizer input='{"code":"public class Example {\n    public static void main(String[] args) {\n        int tulos = 0;\n\n        int i = 0;\n        while (i < 4) {\n            tulos += 3;\n            i++;\n        }\n\n        System.out.println(tulos);\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"tulos":0},"ordered_varnames":["tulos"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":0,"i":0},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":0,"i":0},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":3,"i":0},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":3,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":3,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":3,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":6,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":6,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"24","frame_id":24}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":6,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":6,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":9,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":9,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":9,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":9,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":12,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"47","frame_id":47}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"12\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"12\n","event":"return","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"tulos":12,"i":4,"__return__":["VOID"]},"ordered_varnames":["tulos","i","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<text-box type="hint" name="Simulating program execution">

<!-- Kun muuttujien määrä kasvaa, ohjelman ymmärtäminen muuttuu haastavammaksi. Ohjelman suorituksen ymmärtämistä edesauttaa ohjelman suorituksen simulointi. -->
When the number of variables increases, understanding a program becomes harder. Simulating program execution can help in understanding it.

<!-- Tämä toimii niin, että luot paperilapulle taulukon, joka sisältää sarakkeet kullekin ohjelman muuttujalle, ehdolle, ym, sekä erillisen kohdan ohjelman tulostuksille. Tämän jälkeen käyt ohjelmaa rivi riviltä läpi ja kirjoitat sarakkeisiin ohjelman tilan (eli muuttujien arvojen) muutokset, sekä tulostusalueelle ohjelman tuottamat tulostukset. -->
You can simulate program execution by drawing a table containing a column for each variable and condition of a program, and a separate space for program output. You then go through the source code line by line, and write down the changes to the state of the program (the values of each variable or condition), and the program output.

<!-- Alla olevaan taulukkoon on kirjoitettu auki edellisen esimerkin muuttujien `tulos` ja `i` arvot kullakin toistolauseen ehdon `i < 4` vertailuhetkellä. -->
The values of variables `result` and `i` from the previous example have been written out onto the table below at each point the condition `i < 4` is evaluated.

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

<programming-exercise name='Sum of a sequence' tmcname='part02-Part02_17.SumOfASequence'>

<!-- Tee ohjelma, joka laskee summan 1+2+3+...+n, missä n on käyttäjän syöttämä luku. -->
Implement a program, which calculates the sum 1+2+3+...+n where n is given as user input.

<!-- Esimerkkitulostuksia: -->
Sample output:

<sample-output>

<!-- Mihin asti? **3** -->
<!-- Summa on 6 -->
Last number? **3**
The sum is 6

</sample-output>

<!-- Edellisessä esimerkissä laskettiin 1 + 2 + 3 = 6 -->
The previous example calculated 1 + 2 + 3  = 6

<sample-output>

<!-- Mihin asti? **7** -->
<!-- Summa on 28 -->
Last number? **7**
The sum is 28

</sample-output>

<!-- Ja nyt laskettiin 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28 -->
And this one calculated 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28

</programming-exercise>


<programming-exercise name='Sum of a sequence - the sequel' tmcname='part02-Part02_18.SumOfASequenceTheSequel'>

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
First number? **3**
Last number? **5**
The sum is 12

</sample-output>

<!-- Edellisessä laskettiin 3 + 4 + 5 = 12 -->
calculates  3 + 4 + 5 = 12

<sample-output>

<!-- Ensimmäinen: **2** -->
<!-- Viimeinen: **8** -->
<!-- Summa on 35 -->
First number? **2**
Last number? **8**
The sum is: 35

</sample-output>

<!-- Ja nyt laskettiin 2 + 3 + 4 + 5 + 6 + 7 + 8 = 35 -->
calculates 2 + 3 + 4 + 5 + 6 + 7 + 8 = 35

</programming-exercise>


<programming-exercise name='Factorial' tmcname='part02-Part02_19.Factorial'>

<!-- Tee ohjelma, joka laskee käyttäjän syöttämän luvun kertoman. -->
Implement a program, which calculates the factorial of a number given by the user.

<!-- Kertoma `n!` lasketaan kaavalla 1 * 2 * 3 * ... * n. Esimerkiksi luvun 4 kertoma on 24, eli 4! = 1 * 2 * 3 * 4 = 24. Lisäksi on määritelty, että luvun 0 kertoma on 1, eli 0! = 1. -->
Factorial of n, `n!`, is calculated 1 * 2 * 3 * ... * n. For example the factorial of 4 is 24 or 4! = 1 * 2 * 3 * 4 = 24. Additionally it has been specified, that the factorial of 0 is 1, so 0! = 1.

<!-- Esimerkkitulostuksia: -->
Sample output:

<sample-output>

<!-- Anna luku: **3** -->
<!-- Kertoma on 6 -->
Give a number: **3**
Factorial: 6

</sample-output>

<!-- Nyt laskettiin 1 * 2 * 3 = 6 -->
<!-- TODO: not quite a good way to say this -->
calculated 1 * 2 * 3 = 6

<sample-output>

<!-- Anna luku: **10** -->
<!-- Kertoma on 3628800 -->
Give a number: **10**
Factorial: 3628800

</sample-output>

<!-- Ja nyt laskettiin 1 * 2 * 3 * ... * 8 * 9 * 10 = 3628800 -->
calculated 1 * 2 * 3 * ... * 8 * 9 * 10 = 3628800

<!-- _Lisätietoa_: Kertomaa käytetään erityisesti todennäköisyyslaskennassa tilanteissa, missä halutaan esimerkiksi tarkastella jonkin joukon kaikkia erilaisia järjestyksiä. Esimerkiksi viiden hengen ryhmän voi järjestää 5! erilaiseen jonoon, ja 52 kortin korttipakka voi olla 52! erilaisessa järjestyksessä. Kertomaa voi käyttää myös <a href="http://fi.wikipedia.org/wiki/Kombinaatio" target="_blank" rel="noopener">kombinaatioiden</a> laskemiseen; esimerkiksi 52 kortin korttipakasta on mahdollista jakaa 52! / (5! * (52 - 5)!) erilaisella viiden kortin kättä, ja 40 numeron joukosta voi tehdä yhteensä 40! / (7! * (40 - 7)!) erilaista 7 numeron lottoriviä. -->
_Additional info_: Factorials are used especially in probability calculus when examining different possible orders of a set. For example a group of five people can form 5! different lines, and a pack of 52 cards can be in 52! different orders. Factorial can also be used to calculate <a href="https://en.wikipedia.org/wiki/Combination" target="_blank" rel="noopener"> combinations </a>; For example it is possible to deal 52! / (5! * (52-5)!) different hands from a 52 card pack, and you can form 40! / (7! * (40 - 7)!) different 7 number bingo lines from 40 numbers.

</programming-exercise>


## On the Structure of Programs Using Loops

<!-- Edellisissä esimerkeissä olemme keskittyneet ohjelmiin, joissa toistolauseessa olevaa koodia toistetaan tietty määrä. Tämä määrä on voinut rajoittua käyttäjän syötteen perusteella -- tällaisissa ohjelmissa for-toistolause on varsin näppärä. -->
In the previous examples, we have concentrated on cases where the loop is executed a predetermined number of times. The number of repetitions can be based on user input -- in these cases, the for-loop is quite handy.

<!-- Ohjelmissa, joissa toistolauseessa olevaa koodia tulee suorittaa kunnes käyttäjä syöttää tietyn syötteen, for-toistolause ei toimi kovin hyvin. Tällöin aiemmin harjoittelemamme while-true -toistolause toimii hyvin. -->
In programs where the loop body has to be executed until the user gives certain input, the for-loop is not too great. In these cases, the while-true loop we practiced earlier works well.

<!-- Tarkastellaan lyhyesti hieman laajempaa ohjelmaa, joka lukee käyttäjältä kokonaislukuja. Ohjelma käsittelee negatiiviset luvut epäkelpoina lukuina, positiiviset luvut hyväksyttävinä lukuina, sekä nollan lukemisen lopettamista ilmaisevana lukuna. Kun käyttäjä syöttää nollan, ohjelma tulostaa hyväksyttyjen lukujen summan, hyväksyttyjen lukujen lukumäärän sekä epäkelpojen lukujen lukumäärän. -->
Let's take a look at a somewhat more complex program that reads integers from the user. The program handles negative numbers as invalid, and zero stops the loop. When the user enters zero, the program prints the sum of valid numbers, the number of valid numbers and the number of invalid numbers.

<!-- Alla on kuvattuna eräs mahdollinen ratkaisu, joka ei kuitenkaan ole tyylin kannalta ideaali. -->
A possible solution is detailed below. However, the style of the example is not ideal.

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
In the code above, the computation executed after the loop has ended has been implemented inside of the loop. This approach is not recommended as it can easily lead to very complex program structure. If something else --e.g., reading more input -- is to be done when the loop ends, it could also easily end up being placed inside of the loop. As more and more functionality is needed, the program becomes increasingly harder to read.

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


<programming-exercise name='Repeating, breaking and remembering (5 parts)' tmcname='part02-Part02_20.RepeatingBreakingAndRemembering'>

<!-- Seuraavassa tehtävässä tehdään yksi ohjelma, mutta ohjelman rakentaminen tapahtuu hyvin pienissä paloissa. Tämä on ehdottoman suositeltava tapa aina kun ohjelmoit. -->
Next, we'll implement a program one piece at a time. This is always strongly recommended when coding.

<!-- Tehtäväsarja muodostaa yhden isomman ohjelman, jonka toiminnallisuus toteutetaan pienissä paloissa. Jos et tee tehtäväsarjaa loppuun asti, voit lähettää sen tarkastettavaksi vajaatekoisenakin. Tämä onnistuu painamalla testausnapin oikealla puolella olevasta "submit"-napista eli pienestä ylöspäinosoittavasta nuolesta. Vaikka palautusautomaatti valittaakin vielä tekemättä olevien tehtävänosien testeistä, kirjautuvat jo tekemiesi osien pisteet. -->
The series of exercises form a larger program whose functionality is implemented in small pieces. If you do not finish the whole series, you can still submit the parts you've completed to be checked. This can be done by clicking the "submit" button (the arrow pointing up) to the right of the "test" button. Although the submission system complains about the tests of unfinished parts, you get points for the parts you have finished.


<!-- Huom: muistathan, että jokaisen isomman tehtävän "alitehtävä" on saman arvoinen tehtävä kuin yksi alikohdaton tehtävä. Tämä tehtävä vastaa siis viittä normaalia tehtävää. -->
NB: Remember that each sub-part of the series is equivalent to one individual exercise. As such, the series is equivalent to five individual exercises.

<h2>Reading</h2>

<!-- Tee ohjelma, joka kysyy käyttäjältä lukuja (ohjelma tulostaa käyttäjälle aluksi "Syötä luvut:"), kunnes käyttäjä antaa luvun -1. Kun käyttäjä syöttää luvun -1, ohjelma tulostaa "Kiitos ja näkemiin!" ja päättyy. -->
Implement a program that asks the user for numbers(the program first prints "Write numbers: ") until the user gives the number -1, When the user writes -1, the program prints "Thx! Bye!" and ends.

<sample-output>

Give numbers:
**5**
**2**
**4**
**-1**
Thx! Bye!

</sample-output>


<h2>Sum of numbers</h2>

<!-- Laajenna edellistä ohjelmaa siten, että ohjelma ilmoittaa käyttäjän syöttämien lukujen summan. (Lukua -1 ei lasketa mukaan.) -->
Extend the program so, that it prints the sum of the numbers (not including the -1) the user has written.

<sample-output>

Give numbers:
**5**
**2**
**4**
**-1**
Thx! Bye!
Sum: 11

</sample-output>


<h2>Sum and the number of numbers</h2>

<!-- Laajenna edellistä ohjelmaa siten, että ohjelma ilmoittaa myös käyttäjien antamien lukujen lukumäärän. (Lukua -1 ei lasketa mukaan.) -->
Extend the program so, that it also prints the number of numbers (not including the -1) the user has written.

<sample-output>

Give numbers:
**5**
**2**
**4**
**-1**
Thx! Bye!
Sum: 11
Numbers: 3

</sample-output>


<h2>Average of numbers</h2>

<!-- Muuta edellistä ohjelmaa siten, ohjelma ilmoittaa lukujen keskiarvon. (Lukua -1 ei lasketa mukaan.) -->
Extend the program so, that it prints the mean of the numbers (not including the -1) the user has written.

<sample-output>

Give numbers:
**5**
**2**
**4**
**-1**
Thx! Bye!
Sum: 11
Numbers: 3
Average: 3.666666666666

</sample-output>


<h2>Even and odd numbers</h2>

<!-- Laajenna edellistä ohjelmaa siten, että  ohjelma ilmoittaa parillisten ja parittomien lukujen määrän. (Lukua -1 ei lasketa mukaan.) -->
Extend the program so that it prints the number of even and odd numbers (excluding the -1).

<sample-output>

Give numbers:
**5**
**2**
**4**
**-1**
Thx! Bye!
Sum: 11
Numbers: 3
Average: 3.666666666666
Even: 2
Odd: 1

</sample-output>

</programming-exercise>


<text-box variant='hint' name='Implementing a program small part at a time'>

<!-- Edellisessä tehtävässä harjoiteltiin tehtävän osien kautta ohjelman tekemistä pienissä paloissa. -->
In the previous exercise, we used a series of exercises to practice implementing a program one piece at a time.

<!-- Kun teet ohjelmaa, oli se sitten harjoitustehtävä tai oma projektisi, mieti minkälaisia osia ohjelma tarvitsee toimiakseen, ja etene näitä pieniä osia yksitellen toteuttaen. Jokaisen osan toteuttamisen jälkeen kokeile tähänastisen ohjelmasi toimintaa. -->
When you are writing a program, whether it's an exercise or a personal project, figure out the types of parts the program needs to function and proceed by implementing them one part at a time. Make sure to test the program right after implementing each part.

<!-- Älä koskaan yritä ratkaista koko ongelmaa kerralla, sillä tällöin ohjelman suorittaminen ja testaaminen kesken ongelmanratkaisuprosessin on vaikeaa. Aloita jollain helpolla asialla jonka tiedät varmasti osaavasi. Kun yksi ohjelman osa on saatu toimimaan, voit siirtyä ratkaisemaan seuraavaa ongelmaa. -->
Never try solving the whole problem at once, because that makes running and testing the program in the middle of the problem-solving process difficult. Start with something easy that you know you can do. When one part works, you can move on to the next.

<!-- Osa kurssin tehtävistä on valmiiksi osiin pilkottuja. Usein osat pitää vielä pilkkoa ohjelmoinnin kannalta vieläkin pienempiin paloihin. Kannattaa tehdä siten, että suoritat ohjelman lähes jokaisen uuden koodirivin jälkeen. Tällöin varmistat, että ratkaisu on etenemässä haluttuun suuntaan. -->
Some of the exercises are already split into parts. However, it's often the case in programming that these parts need to be split into even smaller parts. You should almost always run the program after every new line of code. This ensures that the solution is moving in the right direction.

</text-box>
