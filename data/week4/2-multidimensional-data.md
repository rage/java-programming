---
path: '/week-4/2-multidimensional-data'
title: 'Multidimensional data'
hidden: false
---

<text-box variant='learningObjectives' name='Learning Objectives'>

 -  Know ways to represent multidimensional data
  - Can create and use multidimensional arrays

</text-box>

Previously we have used one dimensional arrays, where the index tells us the location of a value in the only dimension.
We can also create multidimensional arrays. Then we need the indexes of a value in each dimension to access the value.
This comes handy when our data is multidimensional, for example when dealing with coordinates.

A two dimensional array with two rows and three columns can be created like so:

```java
int rows = 2;
int columns = 3;
int[][] twoDimensionalArray = new int[rows][columns];
```

In the array we created above, each row refers to an array with a certain number of columns.
We can iterate over a two dimensional array using two nested for loops like so:

```java
int rows = 2;
int columns = 3;
int[][] twoDimensionalArray = new int[rows][columns];

System.out.println("row, column, value");
for (int row = 0; row < twoDimensionalArray.length; row++) {
    for (int column = 0; column < twoDimensionalArray[row].length; column++) {
        int value = twoDimensionalArray[row][column];
        System.out.println("" + row + ", " + column + ", " + value);
    }
}
```

The program output is as follows:

<sample-output>

row, column, value
0, 0, 0
0, 1, 0
0, 2, 0
1, 0, 0
1, 1, 0
1, 2, 0

</sample-output>

We can see that the default value of variables type `int` is 0.

We can change the values in the array just like before.
Below we set new values to three elements of the array.

```java
int rows = 2;
int columns = 3;
int[][] twoDimensionalArray = new int[rows][columns];

twoDimensionalArray[0][1] = 4;
twoDimensionalArray[1][1] = 1;
twoDimensionalArray[1][0] = 8;

System.out.println("row, column, value");
for (int row = 0; row < twoDimensionalArray.length; row++) {
    for (int column = 0; column < twoDimensionalArray[row].length; column++) {
        int value = twoDimensionalArray[row][column];
        System.out.println("" + row + ", " + column + ", " + value);
    }
}
```

The program output is as follows:

<sample-output>

row, column, value
0, 0, 0
1, 0, 4
2, 0, 0
0, 1, 8
1, 1, 1
2, 1, 0

</sample-output>


<programming-exercise name='Array as a string'>

Create in the exercise base a method called `public static String arrayAsString(int[][] array)`. It should create a string representation of the array it receives as the parameter and return it. Below there are a few examples of how the method is expected to  work.

```java
int rows = 2;
int columns = 3;
int[][] matrix = new int[rows][columns];
matrix[0][1] = 5;
matrix[1][0] = 3;
matrix[1][2] = 7;
System.out.println(arrayAsString(matrix));
```

<sample-output>

050
307

</sample-output>

```java
int[][] matrix = {
    {3, 2, 7, 6},
    {2, 4, 1, 0},
    {3, 2, 1, 0}
};

System.out.println(arrayAsString(matrix));
```

<sample-output>

3276
2410
3210

</sample-output>

</programming-exercise>

<text-box variant="hint" name="Methods that return a list">

So far, we have created methods that return value types such as `int` and `double`. However, you can also create a method that returns a `List`. Below we show a method that declares a return value that is a list of integers.

```java
public static List<Integer> createListOfIntegers() {
   List<Integer> values = new ArrayList<Integer>();
   values.add(4);
   values.add(2);
   values.add(5);

   return values;
}
```

Note that, just like for `int` and `double`, we state the type of the returned value directly after `public static`. In this case we thus return a value of the `List<Integer>` type. Moreover, as before, we use the `return` keyword to determine the value that is returned.

</text-box>


<programming-exercise name='Elements on the diagonal'>

For a matrix with an equal amount of rows and columns, we refer to those elements for which the row index is the same as the column index as the diagonal of a matrix. Hence, these elements are exactly those that lie in a straight line from top left to bottom right of the matrix. In the template of this assignment there is already contained a method
`public static List<Integer> getElementsOnDiagonal(int[][] matrix)`. In this assignment, you should complete this method.  Below there are a few examples of how the method is expected to work:

``` java
int rows = 3;
int[][] matrix = new int[rows][rows];

matrix[0][0] = 5;
matrix[1][1] = 8;
matrix[2][2] = 10;

System.out.println(getElementsOnDiagonal(matrix));
```

<sample-output>

[5, 8, 10]

</sample-output>

``` java
int[][] matrix = {
    {3, 2, 7, 6},
    {2, 4, 1, 0},
    {3, 2, 1, 0},
    {2, 3, 4, 1}
};

System.out.println(getElementsOnDiagonal(matrix));
```

<sample-output>

[3, 4, 1, 1]

</sample-output>


</programming-exercise>
