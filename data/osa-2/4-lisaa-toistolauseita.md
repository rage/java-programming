---
path: '/osa-2/4-lisaa-toistolauseita'
title: 'Lisää toistolauseita'
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tutustut while-toistolauseen ehtoon.
- Opit käyttämään for-toistolausetta.
- Tiedät tilanteita, joihin while-toistolause sopii, ja tilanteita, joihin for-toistolause sopii.

</text-box>


Tähän mennessä käyttämämme "while-true" -toistolause on erittäin näppärä silloin, kun ohjelmassa tulee toistaa toiminnallisuutta kunnes käyttäjä syöttää tietynlaisen syötteen.

Tutustutaan seuraavaksi muutamaan muuhun toiston toteutustapaan.


## While-toistolause ehdolla

Olemme tähän mennessä käyttäneet toistolausetta, jonka suluissa on totuusarvo `true`, jolloin toistoa on jatkettu ikuisesti (tai kunnes toistolauseessa päädytään komentoon `break`).

Toistolauseen sulut sisältävät oikeastaan ehtolausekkeen, aivan samalla tavalla kuin `if`-komentoa seuraavat sulut. Arvon `true` voi korvata lausekkeella, joka evaluoidaan ohjelman suorituksen yhteydessä. Lauseke määritellään täsmälleen samalla tavalla kuin ehtolauseen lauseke.

Seuraavassa esimerkissä tulostetaan luvut 1, 2, ..., 5.  Kun `luku`-muuttujan arvo on yli 5, `while`-ehto ei ole enää voimassa ja toistaminen lopetetaan.


```java
int luku = 1;

while (luku < 6) {
    System.out.println(luku);
    luku++;
}
```

Lue ylläoleva "niin pitkään kuin muuttujan luku arvo on pienempi kuin 6, tulosta muuttujan luku arvo ja kasvata muuttujan luku arvoa yhdellä".


<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        int luku = 1;\n\n        while (luku < 6) {\n            System.out.println(luku);\n            luku++;\n        }\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":1},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":2},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":2},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"14","frame_id":14}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":2},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":2},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":3},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"23","frame_id":23}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":3},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"24","frame_id":24}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":3},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":3},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":4},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":4},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":4},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":4},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":5},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":5},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"luku":5},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":5},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"luku":6},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"luku":6},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"luku":6},"ordered_varnames":["luku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"return","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"luku":6,"__return__":["VOID"]},"ordered_varnames":["luku","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


Yllä muuttujan `luku` arvoa kasvatetaan yhdellä aina kun toistolauseen lohko suoritetaan.

Alla on video toistolauseen käytöstä.

<youtube id='us9GXUZ60ws'></youtube>


## For-toistolause

Edellä näimme miten `while`-toistolauseen ehdon avulla voidaan käydä läpi lukuja tietystä luvusta tiettyyn lukuun.

Tällaisen toistolauseen rakenne on seuraava.

```java
int i = 0;
while (i < 10) {
    System.out.println(i);
    i++;
}
```

Ylläolevan toistolauseen voi pilkkoa kolmeen osaan. Ensin esittelemme toistolauseessa toistokertojen laskemiseen käytettävän muuttujan `i` ja asetamme sen arvon nollaksi: `int i = 0;`. Tätä seuraa toistolauseen määrittely -- toistolauseen ehto on `i < 10` eli toistolausetta suoritetaan niin pitkään kuin muuttujan `i` arvo on pienempi kuin 10. Toistolauseessa on toistettava toiminnallisuus `System.out.println(i);`, jota seuraa toistolauseessa käytettävän muuttujan kasvatus `i++`.

Saman toteuttaminen tapahtuu `for`-toistolauseella seuraavasti.

```java
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}
```

For-toistolause koostuu neljästä osasta: (1) toistokertojen laskemiseen käytettävän muuttujan esittelystä; (2) toistolauseen ehdosta; (3) laskemiseen käytetyn muuttujan kasvattamisesta (tai pienentämisestä tai muuttamisesta); ja (4) toistettavasta toiminnallisuudesta.


```java
for (*muuttujan esittely*; *ehto*; *kasvatus*) {
    // toistettava toiminnallisuus
}
```

Alla on kuvattuna toistolauseen suoritus askeleittain.

<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        for (int i = 0; i < 5; i++) {\n           System.out.println(i);\n        }   \n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":0},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":0},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":0},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":1},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":1},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":1},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":2},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":2},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":2},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":3},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":3},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":3},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":4},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":4},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n4\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":4},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"47","frame_id":47}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n4\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":5},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n4\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n4\n","event":"return","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

Yllä olevassa esimerkissä ohjelma tulostaa luvut nollasta neljään. Arvoalueen voi määrittää myös muuttujien avulla -- alla olevassa  esimerkissä määritellään muuttujat `alku` ja `loppu`, joiden avulla määritellään toistolauseen käsittelemä lukualue.

```java
int alku = 3;
int loppu = 7;
for (int i = alku; i < loppu; i++) {
    System.out.println(i);
}
```


<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        int alku = 3;\n        int loppu = 7;\n        for (int i = alku; i < loppu; i++) {\n            System.out.println(i);\n        }  \n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"alku":3},"ordered_varnames":["alku"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"alku":3,"loppu":7},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":3,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"10","frame_id":10}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"i":3,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":3,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"17","frame_id":17}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":4,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"i":4,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":4,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"26","frame_id":26}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":5,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"27","frame_id":27}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"i":5,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":5,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"35","frame_id":35}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":6,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"36","frame_id":36}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"i":6,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n6\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":6,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n6\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"i":7,"alku":3,"loppu":7},"ordered_varnames":["alku","loppu","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"45","frame_id":45}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n6\n","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"alku":3,"loppu":7},"ordered_varnames":["alku","loppu"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"49","frame_id":49}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"3\n4\n5\n6\n","event":"return","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"alku":3,"loppu":7,"__return__":["VOID"]},"ordered_varnames":["alku","loppu","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

Seuraavissa tehtävissä jatketaan toistolauseiden harjoittelua. Voit käyttää tehtävissä joko ehdollista while-toistolausetta, tai for-toistolausetta.

<programming-exercise name='Nollasta lukuun' tmcname='osa02-Osa02_17.NollastaLukuun'>

Kirjoita ohjelma, joka lukee käyttäjältä kokonaisluvun. Tämän jälkeen ohjelma tulostaa luvut nollasta käyttäjän syöttämään lukuun. Voit olettaa, että käyttäjä syöttää aina positiivisen luvun. Alla on muutamia esimerkkejä ohjelman toivotusta toiminnasta.

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


<programming-exercise name='Luvusta sataan' tmcname='osa02-Osa02_18.LuvustaSataan'>

Kirjoita ohjelma, joka lukee käyttäjältä kokonaisluvun. Tämän jälkeen ohjelma tulostaa luvusta lähtien luvut sataan asti. Voit olettaa, että käyttäjä syöttää aina luvun, joka on pienempi kuin 100. Alla on muutamia esimerkkejä ohjelman toivotusta toiminnasta.


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
... (monta lukua välissä) ...
98
99
100

</sample-output>

</programming-exercise>


<text-box variant='hint' name='Moniosaisia tehtäviä'>

Huomaa, että tästä lähtien tehtävissä saattaa olla useampia osia. Jokainen osa lasketaan yksittäiseksi tehtäväksi, eli esimerkiksi seuraava tehtävä vastaa kahta yksiosaista tehtävää. Useampiosaiset tehtävät voi tyypillisesti palauttaa myös vaikka tehtävä ei olisi vielä valmis -- tällöin valmiista osista lisätään pisteet kirjanpitoon.

</text-box>


<programming-exercise name='Mihin ja mistä? (2 osaa)' tmcname='osa02-Osa02_19.MihinJaMista'>


Tämä tehtävä on ensimmäinen kaksiosainen tehtävä. Kun teet molemmat osat, saat tehtävästä kaksi tehtäväpistettä. Voit palauttaa tehtävän myös siten, että vain ensimmäinen osa on tehtynä.


<h2>Mihin asti?</h2>

Kirjoita ohjelma, joka tulostaa kokonaisluvut 1:stä käyttäjän antamaan lukuun asti.

<sample-output>

Mihin asti? **3**
1
2
3

</sample-output>

<sample-output>

Mihin asti? **5**
1
2
3
4
5

</sample-output>

**Vihje:** käyttäjältä lukemasi luku toimii nyt lopetusehdon ylärajana. Muista että Javassa `a <= b` tarkoittaa _a pienempi tai yhtä suuri kuin b_.


<h2>Mistä lähtien?</h2>

Lisää ohjelmaan käyttäjältä kysyttävä alaraja.

<sample-output>

Mihin asti? **8**
Mistä lähtien? **5**
5
6
7
8

</sample-output>

Jos tavoite on suurempi kuin lähtökohta ei tulostu mitään:

<sample-output>

Mihin asti? **12**
Mistä lähtien? **16**

</sample-output>

**Huom!** muista että ala- ja yläraja voivat olla myös negatiivisia!

</programming-exercise>


## Toistolauseen suorituksen loppumisesta

Toistolauseen suoritus ei lopu heti kun toistolauseen ehtolauseke voisi evaluoitua todeksi. Toistolauseen ehtolauseke evaluoidaan aina kun saavutaan toistolauseen alkuun, eli (1) kun ohjelman seuraava suoritettava lause on toistolause, ja (2) kun toistolauseeseen liittyvän lohkon sisältämän ohjelmakoodin suoritus on saatu loppuun.

Tarkastellaan seuraavaa toistolausetta.

```java
int luku = 1;

while (luku != 2) {
    System.out.println(luku);
    luku = 2;
    System.out.println(luku);
    luku = 1;
}
```

Ohjelman tulostus seuraavanlainen:

<sample-output>
1
2
1
2
1
2
...
</sample-output>

Vaikka muuttujan `luku` arvo on välillä 2, toistolauseen suoritus ei lopu koskaan.

TODO: miksi alla oleva ei ole boldattu?

**Toistolauseen ehto tarkistetaan silloin kun toistolauseen toistaminen aloitetaan sekä silloin kun koodin suoritus on päässyt toistolauseen lopettavaan aaltosulkuun asti.** Mikäli toistolauseen ehdon lauseke on evaluoituu todeksi eli muotoon `true`, suoritus jatkuu toistolauseen alusta. Mikäli lauseke evaluoituu epätodeksi eli muotoon `false`, suoritus siirtyy toistolausetta seuraavaan lauseeseen.


Vastaava sääntö pätee myös for-toistolauseelle. Alla olevassa esimerkissä toistolauseen suoritus -- väärin ymmärrettynä -- pitäisi lopettaa heti, kun muuttujan `i` arvo on 100. Näin ei kuitenkaan käy.

```java
for (int i = 0; i != 100; i++) {
    System.out.println(i);
    i = 100;
    System.out.println(i);
    i = 0;
}
```

Yllä olevan ohjelman suoritus ei pääty koskaan.


## Toistetaan toiminnallisuutta

Eräs yleinen ongelmatyyppi on "tee jotain tietty määrä kertoja". Näissä ohjelmissa esiintyy toisto, jonka jokaisella toistokerralla tehdään haluttu toiminnallisuus sekä muutetaan kertojen lukumäärää laskevaa laskurimuuttujaa.

Seuraava ohjelma laskee tulon 4*3 hieman kömpelöllä tavalla eli summana 3 + 3 + 3 + 3:

```java
int tulos = 0;

int i = 0;
while (true) {
    tulos += 3; // tarkoittaa samaa kuin tulos = tulos + 3;
    i++;  // tarkoittaa samaa kuin i = i + 1;

    if (i == 4) {
        break;
    }
}

System.out.println(tulos);
```

Saman toiminnallisuuden voi toteuttaa myös seuraavasti.

```java
int tulos = 0;

int i = 0;
while (i < 4) {
    tulos += 3; // tarkoittaa samaa kuin tulos = tulos + 3;
    i++;  // tarkoittaa samaa kuin i = i + 1;
}

System.out.println(tulos);
```

Tai for-lauseen avulla seuraavasti.

```java
int tulos = 0;

for (int i = 0; i < 4; i++) {
    tulos += 3;
}

System.out.println(tulos);
```

Mitä enemmän ohjelmassa on muuttujia, sitä haastavampaa ohjelman askeleittaisen suorituksen seuraaminen on. Ohjelman ymmärtämisen kannalta suorituksen seuraaminen on kuitenkin tärkeää.

Yksi näppärä tapa muuttujien arvojen tarkasteluun toistolauseessa on taulukko. Seuraavaan taulukkoon on kirjoitettu auki edellisen esimerkin muuttujien `tulos` ja `i` arvot kullakin toistolauseen ehdon `i < 4` vertailuhetkellä.


<table class="table">
  <tr>
    <th>tulos</th>
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

Toistolauseen suoritus loppuu kun muuttujan `tulos` arvo on 12 ja muuttujan `i` arvo on 4 (ehto `i < 4` on tällöin epätotta). Alla ohjelman suoritus on kuvattuna while-toistolausetta käyttäen.


<code-states-visualizer input='{"code":"public class Esimerkki {\n    public static void main(String[] args) {\n        int tulos = 0;\n\n        int i = 0;\n        while (i < 4) {\n            tulos += 3;\n            i++;\n        }\n\n        System.out.println(tulos);\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"tulos":0},"ordered_varnames":["tulos"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":0,"i":0},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":0,"i":0},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":3,"i":0},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":3,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":3,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":3,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":6,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":6,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"24","frame_id":24}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":6,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":6,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":9,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":9,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":9,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":9,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":12,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"47","frame_id":47}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"12\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"12\n","event":"return","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"tulos":12,"i":4,"__return__":["VOID"]},"ordered_varnames":["tulos","i","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<programming-exercise name='Lukusarjan summa' tmcname='osa02-Osa02_20.LukusarjanSumma'>

Tee ohjelma, joka laskee summan 1+2+3+...+n, missä n on käyttäjän syöttämä luku.

Esimerkkitulostuksia:

<sample-output>

Mihin asti? **3**
Summa on 6

</sample-output>

Edellisessä esimerkissä laskettiin 1 + 2 + 3 = 6

<sample-output>

Mihin asti? **7**
Summa on 28

</sample-output>

Ja nyt laskettiin 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28

</programming-exercise>


<programming-exercise name='Rajatun lukusarjan summa' tmcname='osa02-Osa02_21.RajatunLukusarjanSumma'>

Kirjoita ohjelma, joka laskee rajatun välin lukujen summan ja tulostaa sen. Oleta, että käyttäjä antaa ensin pienemmän luvun ja sitten suuremman luvun.

Voit hyödyntää edelliseen tehtävään tekemääsi vastausta tämän tehtävän vastauksen lähtökohtana -- edellisessä toteutetun toiminnallisuuden lisäksi käyttäjä määrää myös aloituskohdan.

Esimerkkitulostuksia:

<sample-output>

Ensimmäinen: **3**
Viimeinen: **5**
Summa on 12

</sample-output>

Edellisessä laskettiin 3 + 4 + 5 = 12

<sample-output>

Ensimmäinen: **2**
Viimeinen: **8**
Summa on 35

</sample-output>

Ja nyt laskettiin 2 + 3 + 4 + 5 + 6 + 7 + 8 = 35

</programming-exercise>


<programming-exercise name='Kertoma' tmcname='osa02-Osa02_22.Kertoma'>

Tee ohjelma, joka laskee käyttäjän syöttämän luvun kertoman.

Kertoma `n!` lasketaan kaavalla 1 * 2 * 3 * ... * n. Esimerkiksi luvun 4 kertoma on 24, eli 4! = 1 * 2 * 3 * 4 = 24. Lisäksi on määritelty, että luvun 0 kertoma on 1, eli 0! = 1.

Esimerkkitulostuksia:

<sample-output>

Anna luku: **3**
Kertoma on 6

</sample-output>

Nyt laskettiin 1 * 2 * 3 = 6

<sample-output>

Anna luku: **10**
Kertoma on 3628800

</sample-output>

Ja nyt laskettiin 1 * 2 * 3 * ... * 8 * 9 * 10 = 3628800

_Lisätietoa_: Kertomaa käytetään erityisesti todennäköisyyslaskennassa tilanteissa, missä halutaan esimerkiksi tarkastella jonkin joukon kaikkia erilaisia järjestyksiä. Esimerkiksi viiden hengen ryhmän voi järjestää 5! erilaiseen jonoon, ja 52 kortin korttipakka voi olla 52! erilaisessa järjestyksessä. Kertomaa voi käyttää myös <a href="http://fi.wikipedia.org/wiki/Kombinaatio" target="_blank" rel="noopener">kombinaatioiden</a> laskemiseen; esimerkiksi 52 kortin korttipakasta on mahdollista jakaa 52! / (5! * (52 - 5)!) erilaisella viiden kortin kättä, ja 40 numeron joukosta voi tehdä yhteensä 40! / (7! * (40 - 7)!) erilaista 7 numeron lottoriviä.

</programming-exercise>


## Toistolausetta käyttävien ohjelmien rakenteesta

Edellisissä esimerkeissä olemme keskittyneet ohjelmiin, joissa toistolauseessa olevaa koodia toistetaan tietty määrä. Tämä määrä on voinut rajoittua käyttäjän syötteen perusteella -- tällaisissa ohjelmissa for-toistolause on varsin näppärä.

Ohjelmissa, joissa toistolauseessa olevaa koodia tulee suorittaa kunnes käyttäjä syöttää tietyn syötteen, for-toistolause ei toimi kovin hyvin. Tällöin aiemmin harjoittelemamme while-true -toistolause toimii hyvin.

Tarkastellaan lyhyesti hieman laajempaa ohjelmaa, joka lukee käyttäjältä kokonaislukuja. Ohjelma käsittelee negatiiviset luvut epäkelpoina lukuina, positiiviset luvut hyväksyttävinä lukuina, sekä nollan lukemisen lopettamista ilmaisevana lukuna. Kun käyttäjä syöttää nollan, ohjelma tulostaa hyväksyttyjen lukujen summan, hyväksyttyjen lukujen lukumäärän sekä epäkelpojen lukujen lukumäärän.

Alla on kuvattuna eräs mahdollinen ratkaisu, joka ei kuitenkaan ole tyylin kannalta ideaali.

```java
Scanner lukija = new Scanner(System.in);

System.out.print("Anna lukuja, negatiiviset luvut eivät kelpaa: ");
int summa = 0;
int hyvaksytytLuvut = 0;
int epakelvotLuvut = 0;

while (true) {
    int luettu = Integer.valueOf(lukija.nextLine());

    if (luettu == 0) {
        System.out.println("Hyväksyttävien lukujen summa: " + summa);
        System.out.println("Hyväksyttyjä lukuja: " + hyvaksytytLuvut);
        System.out.println("Epäkelvot luvut: " + epakelvotLuvut);
        break;
    }

    if (luettu < 0) {
        epakelvotLuvut++;
        continue;
    }

    summa += luettu;
    hyvaksytytLuvut++;
}
```

Yllä kuvatussa lähestymistavassa toistolauseen päättymisen jälkeen tapahtuva laskenta on toteutettu toistolauseen sisälle. Lähestymistapa ei ole suositeltava, sillä se johtaa helposti hyvin monimutkaiseen ohjelman rakenteeseen. Jos toistolauseen lopettamisen yhteydessä pitäisi tehdä muutakin -- esimerkiksi lukea lisää syötteitä -- asetettaisiin kyseinenkin toiminnallisuus helposti ehtolauseen sisälle. Lisätoiminnallisuuden kertyessä, ohjelma muuttuisi yhä vaikeammin ja vaikeammin luettavaksi.

Pitäydytään seuraavassa toistolauseen muodossa:

```java
Scanner lukija = new Scanner(System.in);

// toistolauseessa tarvittavien muuttujien luominen

while (true) {
    // syötteen lukeminen

    // toistolauseesta poistuminen -- break

    // epäkelpojen syötteiden rajaaminen pois -- continue

    // hyväksyttävien syötteiden käsittely
}

// toistolauseesta poistumisen jälkeen suoritettava toiminnallisuus
```

Toisin sanoen, oleva ohjelma on selkeämpi jos toistolauseesta poistumisen jälkeen tehtävät asiat ovat toistolauseen ulkopuolella.

```java
Scanner lukija = new Scanner(System.in);

System.out.print("Anna lukuja, negatiiviset luvut eivät kelpaa: ");
int summa = 0;
int hyvaksytytLuvut = 0;
int epakelvotLuvut = 0;

while (true) {
    int luettu = Integer.valueOf(lukija.nextLine());

    if (luettu == 0) {
        break;
    }

    if (luettu < 0) {
        epakelvotLuvut++;
        continue;
    }

    summa += luettu;
    hyvaksytytLuvut++;
}

System.out.println("Hyväksyttävien lukujen summa: " + summa);
System.out.println("Hyväksyttyjä lukuja: " + hyvaksytytLuvut);
System.out.println("Epäkelvot luvut: " + epakelvotLuvut);
```


<programming-exercise name='Silmukat, lopetus ja muistaminen (5 osaa)' tmcname='osa02-Osa02_23.SilmukatLopetusJaMuistaminen'>

Seuraavassa tehtävässä tehdään yksi ohjelma, mutta ohjelman rakentaminen tapahtuu hyvin pienissä paloissa. Tämä on ehdottoman suositeltava tapa aina kun ohjelmoit.

Tehtäväsarja muodostaa yhden isomman ohjelman, jonka toiminnallisuus toteutetaan pienissä paloissa. Jos et tee tehtäväsarjaa loppuun asti, voit lähettää sen tarkastettavaksi vajaatekoisenakin. Tämä onnistuu painamalla testausnapin oikealla puolella olevasta "submit"-napista eli pienestä ylöspäinosoittavasta nuolesta. Vaikka palautusautomaatti valittaakin vielä tekemättä olevien tehtävänosien testeistä, kirjautuvat jo tekemiesi osien pisteet.

Huom: muistathan, että jokaisen isomman tehtävän "alitehtävä" on saman arvoinen tehtävä kuin yksi alikohdaton tehtävä. Tämä tehtävä vastaa siis viittä normaalia tehtävää.


<h2>Lukujen lukeminen</h2>

Tee ohjelma, joka kysyy käyttäjältä lukuja (ohjelma tulostaa käyttäjälle aluksi "Syötä luvut:"), kunnes käyttäjä antaa luvun -1. Kun käyttäjä syöttää luvun -1, ohjelma tulostaa "Kiitos ja näkemiin!" ja päättyy.

<sample-output>

Syötä luvut:
**5**
**2**
**4**
**-1**
Kiitos ja näkemiin!

</sample-output>


<h2>Lukujen summa</h2>

Laajenna edellistä ohjelmaa siten, että ohjelma ilmoittaa käyttäjän syöttämien lukujen summan. (Lukua -1 ei lasketa mukaan.)

<sample-output>

Syötä luvut:
**5**
**2**
**4**
**-1**
Kiitos ja näkemiin!
Summa: 11

</sample-output>


<h2>Lukujen summa ja lukumäärä</h2>

Laajenna edellistä ohjelmaa siten, että ohjelma ilmoittaa myös käyttäjien antamien lukujen lukumäärän. (Lukua -1 ei lasketa mukaan.)

<sample-output>

Syötä luvut:
**5**
**2**
**4**
**-1**
Kiitos ja näkemiin!
Summa: 11
Lukuja: 3

</sample-output>


<h2>Lukujen keskiarvo</h2>

Muuta edellistä ohjelmaa siten, ohjelma ilmoittaa lukujen keskiarvon. (Lukua -1 ei lasketa mukaan.)

<sample-output>

Syötä luvut:
**5**
**2**
**4**
**-1**
Kiitos ja näkemiin!
Summa: 11
Lukuja: 3
Keskiarvo: 3.666666666666

</sample-output>


<h2>Parilliset ja parittomat</h2>

Laajenna edellistä ohjelmaa siten, että  ohjelma ilmoittaa parillisten ja parittomien lukujen määrän. (Lukua -1 ei lasketa mukaan.)

<sample-output>

Syötä luvut:
**5**
**2**
**4**
**-1**
Kiitos ja näkemiin!
Summa: 11
Lukuja: 3
Keskiarvo: 3.666666666666
Parillisia: 2
Parittomia: 1

</sample-output>

</programming-exercise>


<text-box variant='hint' name='Ohjelmien tekeminen pienissä paloissa'>

Edellisessä tehtävässä harjoiteltiin tehtävän osien kautta ohjelman tekemistä pienissä paloissa.

Kun teet ohjelmaa, oli se sitten harjoitustehtävä tai oma projektisi, mieti minkälaisia osia ohjelma tarvitsee toimiakseen, ja etene näitä pieniä osia yksitellen toteuttaen. Jokaisen osan toteuttamisen jälkeen kokeile tähänastisen ohjelmasi toimintaa.

Älä koskaan yritä ratkaista koko ongelmaa kerralla, sillä tällöin ohjelman suorittaminen ja testaaminen kesken ongelmanratkaisuprosessin on vaikeaa. Aloita jollain helpolla asialla jonka tiedät varmasti osaavasi. Kun yksi ohjelman osa on saatu toimimaan, voit siirtyä ratkaisemaan seuraavaa ongelmaa.

Osa kurssin tehtävistä on valmiiksi osiin pilkottuja. Usein osat pitää vielä pilkkoa ohjelmoinnin kannalta vieläkin pienempiin paloihin. Kannattaa tehdä siten, että suoritat ohjelman lähes jokaisen uuden koodirivin jälkeen. Tällöin varmistat, että ratkaisu on etenemässä haluttuun suuntaan.

</text-box>
