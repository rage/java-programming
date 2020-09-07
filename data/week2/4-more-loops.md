---
path: '/week-2/4-more-loops'
title: 'More loops'
hidden: false
---


<text-box variant='learningObjectives' name='Learning Objectives'>

 - You're familiar with the condition of the `while` loop condition.
 - You know how to use the `for` loop.
 - You recognize situations where a `while` loop should be used and those where a `for` loop is more appropriate.

</text-box>

The "while-true" loop we've been using is very handy when the program has to repeat a functionality until the user provides certain input.

Next, we'll come to know a few other ways to implement loops.


## While Loop with a Condition

So far we have been using a loop with the boolean `true` in its parenthesis, meaning the loop continues forever (or until the loop is ended with the `break` command ).

Actually, the parenthesis of a loop can contain a conditional expression, or a condition, just like the parenthesis of an `if` statement. The `true` value can be replaced with an expression, which is evaluated as the program is executed. The expression is defined the same way as the condition of a conditional statement.

The following code prints the numbers 1,2,...,5. When the value of the variable `number` is more than 5, the `while`-condition evaluates to false and the execution of the loop ends for good.

```java
int number = 1;

while (number < 6) {
    System.out.println(number);
    number++;
}
```

The code above can be read "As long as the value of the variable number is less than 6, print the value of the variable number and increase the value of the variable number by one".


<code-states-visualizer input='{"code":"public class Example {\n    public static void main(String[] args) {\n        int number = 1;\n\n        while (number < 6) {\n            System.out.println(number);\n            number++;\n        }\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"8","frame_id":8}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":1},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":2},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"number":2},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"14","frame_id":14}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"number":2},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"18","frame_id":18}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":2},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":3},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"23","frame_id":23}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"number":3},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"24","frame_id":24}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"number":3},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"28","frame_id":28}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":3},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"32","frame_id":32}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":4},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"number":4},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"number":4},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":4},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":5},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"number":5},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"44","frame_id":44}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"number":5},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":5},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"number":6},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"53","frame_id":53}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"number":6},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"step_line","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"number":6},"ordered_varnames":["number"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"58","frame_id":58}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"1\n2\n3\n4\n5\n","event":"return","line":9,"stack_to_render":[{"func_name":"main:9","encoded_locals":{"number":6,"__return__":["VOID"]},"ordered_varnames":["number","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"60","frame_id":60}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


Above, the value of the variable `number` is increased by one every time the loop body is executed.

## For Loop

Above, we learned how a `while` loop with a condition can be used to go through numbers in a certain interval.

The structure of this kind of loop is the following.

```java
int i = 0;
while (i < 10) {
    System.out.println(i);
    i++;
}
```

The above loop can be split into three parts. First we introduce the variable `i`, used to count the number of times the loop has been executed so far, and set its value to 0: `int i = 0;`. This is followed by the definition of the loop -- the loop's condition is `i < 10` so the loop is executed as long as the value of the variable `i` is less than 10. The loop body contains the functionality to be executed `System.out.println(i);`, which is followed by increasing the value of the variable `i++`. The command `i++` is shorthand for `i = i + 1`.

The same can be achieved with a `for` loop like so.

```java
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}
```

A `for` loop contains four parts: (1) introducing the variable for counting the number of executions; (2) the condition of the loop; (3) increasing (or decreasing or changing) the value of the counter variable; and (4) the functionality to be executed.


```java
for (*introducing a variable*; *condition*; *increasing the counter*) {
    // Functionality to be executed
}
```

Loop execution is shown below step by step.

<code-states-visualizer input='{"code":"public class Example {\n    public static void main(String[] args) {\n        for (int i = 0; i < 5; i++) {\n           System.out.println(i);\n        }   \n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":0},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":0},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":0},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":1},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"12","frame_id":12}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":1},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":1},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":2},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"21","frame_id":21}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":2},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":2},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":3},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"30","frame_id":30}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":3},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":3},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":4},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"39","frame_id":39}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n","event":"step_line","line":4,"stack_to_render":[{"func_name":"main:4","encoded_locals":{"i":4},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n4\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":4},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"47","frame_id":47}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n4\n","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{"i":5},"ordered_varnames":["i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"48","frame_id":48}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n4\n","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"0\n1\n2\n3\n4\n","event":"return","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"__return__":["VOID"]},"ordered_varnames":["__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"54","frame_id":54}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>

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


We will continue practicing loops in the following exercises. You can use either a `while` loop with a condition, or a `for` loop.


<programming-exercise name='Counting'>

Write a program that reads an integer from the user. Next, the program prints numbers from 0 to the number given by the user. You can assume that the user always gives a positive number. Below are some examples of the expected functionality.

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


<programming-exercise name='Counting to hundred'>

Write a program, which reads an integer from the user. Then the program prints numbers from that number to 100. You can assume that the user always gives a number less than 100. Below are some examples of the expected functionality.


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

## On Stopping a Loop Execution

A loop does not stop executing immediately when its condition evaluates to true. A loop's condition is evaluated at the start of a loop, meaning when (1) the loop starts for the first time or (2) the execution of a previous iteration of the loop body has just finished.

Let's look at the following loop.

```java
int number = 1;

while (number != 2) {
    System.out.println(number);
    number = 2;
    System.out.println(number);
    number = 1;
}
```

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

Even though `number` equals 2 at one point, the loop runs forever.

**The condition of a loop is evaluated when the execution of a loop starts and when the execution of the loop body has reached the closing curly bracket.** If the condition evaluates to `true`, execution continues from the top of the loop body. If the condition evaluates to `false`, execution continues from the first statement following the loop.

This also applies to `for` loops. In the example below, it would be incorrect to assume that the loop execution ends when `i` equals 100. However, it doesn't.

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

One common subproblem type is to "do something a certain amount of times".
What's common to all these programs is repetition. Some functionality is done repeatedly, and a counter variable is used to keep track of the repetitions.

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
Or by using a for loop as seen in the following.

```java
int result = 0;

for (int i = 0; i < 4; i++) {
    result += 3;
}

System.out.println(result);
```

The program execution using a while loop is visualized below.


<code-states-visualizer input='{"code":"public class Example {\n    public static void main(String[] args) {\n        int tulos = 0;\n\n        int i = 0;\n        while (i < 4) {\n            tulos += 3;\n            i++;\n        }\n\n        System.out.println(tulos);\n    }\n}","stdin":"","trace":[{"stdout":"","event":"call","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"1","frame_id":1}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":3,"stack_to_render":[{"func_name":"main:3","encoded_locals":{},"ordered_varnames":[],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"2","frame_id":2}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":5,"stack_to_render":[{"func_name":"main:5","encoded_locals":{"tulos":0},"ordered_varnames":["tulos"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"4","frame_id":4}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":0,"i":0},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"7","frame_id":7}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":0,"i":0},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"11","frame_id":11}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":3,"i":0},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"13","frame_id":13}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":3,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"15","frame_id":15}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":3,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"16","frame_id":16}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":3,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"20","frame_id":20}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":6,"i":1},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"22","frame_id":22}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":6,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"24","frame_id":24}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":6,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"25","frame_id":25}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":6,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"29","frame_id":29}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":9,"i":2},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"31","frame_id":31}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":9,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"33","frame_id":33}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":9,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"34","frame_id":34}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":7,"stack_to_render":[{"func_name":"main:7","encoded_locals":{"tulos":9,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"38","frame_id":38}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":12,"i":3},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"40","frame_id":40}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":8,"stack_to_render":[{"func_name":"main:8","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"42","frame_id":42}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":6,"stack_to_render":[{"func_name":"main:6","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"43","frame_id":43}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"","event":"step_line","line":11,"stack_to_render":[{"func_name":"main:11","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"47","frame_id":47}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"12\n","event":"step_line","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"tulos":12,"i":4},"ordered_varnames":["tulos","i"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"51","frame_id":51}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}},{"stdout":"12\n","event":"return","line":12,"stack_to_render":[{"func_name":"main:12","encoded_locals":{"tulos":12,"i":4,"__return__":["VOID"]},"ordered_varnames":["tulos","i","__return__"],"parent_frame_id_list":[],"is_highlighted":true,"is_zombie":false,"is_parent":false,"unique_hash":"52","frame_id":52}],"globals":{},"ordered_globals":[],"func_name":"main","heap":{}}],"userlog":"Debugger VM maxMemory: 455M\n"}'></code-states-visualizer>


<text-box type="hint" name="Simulating program execution">

As the number of variables increases, understanding a program becomes harder. Simulating program execution can help in understanding it.

You can simulate program execution by drawing a table containing a column for each variable and condition of a program, and a separate space for program output. You then go through the source code line by line, and write down the changes to the state of the program (the values of each variable or condition), and the program output.

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

<programming-exercise name='Sum of a sequence'>

Implement a program, which calculates the sum 1+2+3+...+n where n is given as user input.

Sample output:

<sample-output>

Last number? **3**
The sum is 6

</sample-output>

The previous example calculated 1 + 2 + 3  = 6

<sample-output>

Last number? **7**
The sum is 28

</sample-output>

And this one calculated 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28

</programming-exercise>


<programming-exercise name='Sum of a sequence - the sequel'>

Implement a program which calculates the sum of a closed interval, and prints it. Expect the user to write the smaller number first and then the larger number.

You can base your solution to this exercise to the solution of last exercise -- add the functionality for the user to enter the starting point as well.

<!-- Esimerkkitulostuksia: -->
Sample output:

<sample-output>


First number? **3**
Last number? **5**
The sum is 12

</sample-output>

The above example internally calculated  3 + 4 + 5 = 12

<sample-output>

First number? **2**
Last number? **8**
The sum is: 35

</sample-output>

And now the internal calculation was 2 + 3 + 4 + 5 + 6 + 7 + 8 = 35

</programming-exercise>


<programming-exercise name='Factorial'>

Implement a program which calculates the factorial of a number given by the user.

Factorial of n, denoted `n!`, is calculated as 1 * 2 * 3 * ... * n. For example, the factorial of 4 is 24 or 4! = 1 * 2 * 3 * 4 = 24. Additionally, it has been specified that the factorial of 0 is 1, so 0! = 1.

Sample output:

<sample-output>

Give a number: **3**
Factorial: 6

</sample-output>

<!-- Nyt laskettiin 1 * 2 * 3 = 6 -->
<!-- TODO: not quite a good way to say this -->
The internal calculation here was 1 * 2 * 3 = 6

<sample-output>

<!-- Anna luku: **10** -->
<!-- Kertoma on 3628800 -->
Give a number: **10**
Factorial: 3628800

</sample-output>

And now the internal calculation was 1 * 2 * 3 * ... * 8 * 9 * 10 = 3628800

_Additional info_: Factorials are used especially in probability calculus when examining different possible orders of a set. For example, a group of five people can form 5! different lines, and a pack of 52 cards can be in 52! different orders. Factorial can also be used to calculate <a href="https://en.wikipedia.org/wiki/Combination" target="_blank" rel="noopener">combinations</a>; For example it is possible to deal 52! / (5! * (52-5)!) different hands from a 52 card pack, and you can form 40! / (7! * (40 - 7)!) different 7 number lottery lines from 40 numbers.

</programming-exercise>


## On the Structure of Programs Using Loops

In the previous examples, we have concentrated on cases where the loop is executed a predetermined number of times. The number of repetitions can be based on user input -- in these cases, the for loop is quite handy.

In programs where the loop body has to be executed until the user gives certain input, the for loop is not too great. In these cases, the while-true loop we practiced earlier works well.

Let's take a look at a somewhat more complex program that reads integers from the user. The program handles negative numbers as invalid, and zero stops the loop. When the user enters zero, the program prints the sum of valid numbers, the number of valid numbers and the number of invalid numbers.

A possible solution is detailed below. However, the style of the example is not ideal.

```java
Scanner reader = new Scanner(System.in);

System.out.print("Write numbers, negative numbers are invalid: ");
int sum = 0;
int validNumbers = 0;
int invalidNumbers = 0;

while (true) {
    int input = Integer.valueOf(reader.nextLine());

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

In the code above, the computation executed after the loop has ended has been implemented inside of the loop. This approach is not recommended as it can easily lead to very complex program structure. If something else -- for example, reading more input -- is to be done when the loop ends, it could also easily end up being placed inside of the loop. As more and more functionality is needed, the program becomes increasingly harder to read.

Let's stick to the following loop structure:

```java
Scanner reader = new Scanner(System.in);

// Create variables needed for the loop

while (true) {
    // read input

    // end the loop -- break

    // check for invalid input -- continue

    // handle valid input
}

// functionality to execute after the loop ends
```

In other words, the program structure is cleaner if the things to be done after the loop ends are placed outside of it.

```java
Scanner reader = new Scanner(System.in);

System.out.print("Write numbers, negative numbers are invalid: ");
int sum = 0;
int validNumbers = 0;
int invalidNumbers = 0;

while (true) {
    int input = Integer.valueOf(reader.nextLine());

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


<programming-exercise name='Repeating, breaking and remembering (5 parts)'>

Next, we'll implement a program one piece at a time. This is always strongly recommended when coding.

<h2>Reading</h2>

Implement a program that asks the user for numbers (the program first prints "Write numbers: ") until the user gives the number -1. When the user writes -1, the program prints "Thx! Bye!" and ends.

<sample-output>

Give numbers:
**5**
**2**
**4**
**-1**
Thx! Bye!

</sample-output>

<h2>Sum of numbers</h2>

Extend the program so that it prints the sum of the numbers (not including the -1) the user has written.

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

Extend the program so that it also prints the number of numbers (not including the -1) the user has written.

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

Extend the program so that it prints the mean of the numbers (not including the -1) the user has written.

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


<text-box variant='hint' name='Implementing a program a small part at a time'>

In the previous exercise, we used a series of exercises to practice implementing a program one piece at a time.

When you are writing a program, whether it's an exercise or a personal project, figure out the types of parts the program needs to function and proceed by implementing them one part at a time. Make sure to test the program right after implementing each part.

Never try solving the whole problem at once, because that makes running and testing the program in the middle of the problem-solving process difficult. Start with something easy that you know you can do. When one part works, you can move on to the next.

Some of the exercises are already split into parts. However, it's often the case in programming that these parts need to be split into even smaller parts. You should almost always run the program after every new line of code. This ensures that the solution is moving in the right direction.

</text-box>
