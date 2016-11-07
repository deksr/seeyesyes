![](http://www.w3devcampus.com/wp-content/uploads/logoAndOther/logo_JavaScript.png
)
# Intro to JavaScript Data Types, Variables & Arrays

| Learning Objectives |
| :--- |
| Identify JavaScript's Data Types |
| Define Variables |
| Create and Manipulate Arrays |

## Roadmap

1. Intro to JavaScript (5 mins)
2. Explore JavaScript's Data Types (25 mins)
3. Variables (10 mins)
4. Arrays (35 mins)
5. Further Study

### 1. Intro to JavaScript<small> (5 mins)</small>

> _Atwood's Law:_<br>
> "Any application that can be written in JavaScript will eventually be written in JavaScript."<br>
> _\- Jeff Atwood, co-founder of Stack Overflow_
 
![](http://static3.businessinsider.com/image/55d4f958bd86ef13008b46b0-1200/and-for-good-measure-heres-a-look-at-how-those-rankings-have-changed-over-the-past-seven-years.jpg)

**? - Any thoughts as to why JavaScript has become so popular?**

#### JavaScript's Role

The main purpose of JavaScript is to provide behavior to our web applications via client-side script.

![](http://csharpcorner.mindcrackerinc.netdna-cdn.com/UploadFile/47548d/introduction-of-javascript/Images/JavaScript%20Introduction.jpg)

>The popularity of a technology known as _Node.js_ has resulted in JavaScript also being used on the server-side. We'll learn more about _Node.js_ in week 7.

#### A Few Facts About JavaScript:

- Created in 10 days in 1995 by Brendan Eich.
- Not to be confused with Java (although both have syntaxes based upon the "C" programming language).
- JavaScript is an implementation of ECMAScript, a standard maintained by the European Computer Manufacturers Association).
- Currently, the version that is **fully** implemented by browsers is ECMAScript 5. However, the newest version, ES2015 (formerly known as ES6), is well on it's way to being implemented. [This website](http://kangax.github.io/compat-table/es6/) reports the implementation status in all major browsers. ES2015 adds lots of new features and we will briefly cover a tidbit of them in WDI.
- JavaScript's an object oriented programming (OOP) language despite not having _classes_ used in "classical" OOP languages. However, JS has recently jumped on the "class" bandwagon with ES2015.

### 2. Explore JavaScript's Data Types<small> (25 mins)</small>

JavaScript is an _untyped_ language. This means that we do not explicitly specify the _type_ of data we are working with. In _strongly typed_ languages such as Java, data types are explicitly specified. Coming soon near you however, is a language called _TypeScript_, which adds strong typing to JS.

However, although we don't specify data types in JavaScript, every piece of data still has a **type**!  The type being defined by the actual type of data we are using in a given scenario.  For example, when we assign some text to a variable like this:

```js
var myName = "Joe Cool";
```
the variable `myName` **would have a data type of ________?**

Currently, JavaScript has six data types (ES2015 adds a new _symbol_ data type).

![](http://slidenerd.com/wp-content/uploads/2014/09/Snap-2014-09-27-at-10.28.06.png)

Let's examine each of these...

#### Setup

We are going to use Chrome's DevTools in this lesson to inspect and manipulate data.

Open Chrome and press `command+option+j` to open the _console_. The _console_ allows us to enter JS expressions and statements.

#### Explore JavaScript's Data Types

##### string

A _string_ represents textual data with zero or more characters wrapped by single or double quotation marks such as `"John"` or `'Jane'`. A pair of quotes with nothing between them is still a _string_ - an _empty string_.

```
> 'Hello World'
< "Hello World"
> typeof "I'm a string"
< "string"
```

Notice that the `typeof` operator itself always returns a string describing the data type.

>ES2015 Note: In addition to using single and double quotes to delimit a string, ES2015 adds a a third way by using the back-tick character to create what's called a _template string_.

##### number

A _number_ represents a numeric value.

Unlike many other programming languages, there is no distinction between integer (`15`, `3`, etc.) and floating-point/decimal types (`17.24`, `3.1416`, etc.).

Internally, JS represents all numbers as floating-point values.

```
> 15
< 15
> typeof 15
< "number"
> typeof 12.34
< "number"
> typeof '12.34'  // what will this return as the type?  
```

##### boolean

Whereas strings and numbers can have a virtually unlimited number of different values, the _boolean_ data type only has two possible values: __true__ and __false__.

<hr>
**Before moving on to more data types, lets pair up and think of a couple examples where we might use each of the three data types we've covered thus far (string, number & boolean) to represent data in our programs.<br><br>For example, we would represent a person's name in our program using a _string_ - right?<br><br>In five minutes, I'll ask you to share what you've come up with...**
<br>

**? - If we needed to store a person's _social security number_, would you use a number or a string? Why?**

<hr>

Let's continue looking at the other data types...

##### null

The _null_ data type has only one value: __null__.

We often assign the value _null_ to a variable to represent the fact that it has no "real" value :)

```
> typeof null
< "object"  // Fail! Remember, JS was written in 10 days by one dude!
```

##### undefined

A variable that has not been assigned a value is of type _undefined_.

Also, a function by default returns _undefined_ if a value was not returned by it.

Lastly, you will see _undefined_ a lot in the console when it evaluates an expression or statement that does not return a value.

```
> typeof undefined
< "undefined"
> console.log('hello')
  "hello"
< undefined
```

##### object

Virtually all programming languages have the concept of two classifications of data types:

- **Primitive** data types
- **Complex** data types

Variables that hold a _primitive_ data type can hold only one value at a time. Therefore, the five data types that we've looked at thus far are classified as _primitive_ data types.

That brings us to _complex_ data types. _Complex_ data types can be thought of as containers capable of holding several pieces of data.

Accordingly, in JavaScript, the **object** data type is a _complex_ type.

Typically, when we discuss _objects_ in JS, we are referring to plain vanilla _objects_ that have a collection of zero or more properties (key/value pairs) like this:

- **Object**<br>`{name: 'Joe Cool'}`

However, there are several other types of data we will work with that are special versions of the JS object.  Here they are:


- **Array**<br>`[1, 2, 3]`
- **Date**<br>`new Date()`
- **RegExp**<br>`/.*/`
- **Function**<br>`function() {}`

Note that it is okay to refer to these as their own data type, for example, if asked what type of data `['cat', 'dog', 'fish']` is, it would be acceptable to answer "an array". However, _technically_, there are only six data types, and _array_ is not one of them :)

We will learn more about _objects_ in the next lesson.

For now, let's just verify what `typeof` returns:

```
> typeof {course: 'WDI', cohort: 10}
< "object"
> typeof []
< "object"
> typeof /./
< "object"
```

Although _functions_ are also considered objects (_callable objects_ to be exact), the `typeof` operator returns a more helpful data type:

```
> typeof function(){}
< "function"
```

Yay, we've covered all six data types!

>Note: There's an important concept of **value types** and **reference types**. These are discussed in the Further Study section of this lesson and will also be discussed later in WDI.

**? - Do all variables have a data type?**

### 3. Variables<small> (10 mins)</small>

_Variables_ are ubiquitous in computer programming. Think of them as containers in memory for storing data.

We name variables with _identifiers_ and we declare variables using the `var` keyword:

```js
var myVar;
```
>With ES2015, there's a new `var` in town known as `let` 

**? - What is the identifier of the variable above?**

We can also assign a value to a variable at the time we declare it by using the assignment operator `=`:

```js
var name = "Fred Flintstone";  // two birds with one stone!
```

and change it's value later...

```js
name = "Barney";  // note that we only declare a "var" once
```

Multiple variables can be defined in a single statement, separated by commas:

```js
var name = 'Wilma',
    age,
    town = 'Bedrock';

// above is equivalent to
var name = 'Wilma';
var age;
var town = 'Bedrock';
```

**? - What does the variable `age` equal?**

##### Naming Variables

In JavaScript, when naming variables, the convention is to name the identifiers using _Lower Camel Case_, e.g.,  `myLittleHouse`.

Identifiers in JS:

- Are case-sensitive!
- Must begin with a letter
- Can contain letters, digits, underscores, and dollar signs

**? - Are the following valid variable declarations?**

```
var hello;
Var car1 = 'BMW';
var good_bye = "Adios " + "Muchacho";
var car-2 = 'Toyota';
var 1_person = 'Sally';
```

**Any questions regarding variables?**

### 4. Arrays<small> (25 mins)</small>

#### What are Arrays?

- In JS, technically there is no "array" data type. Arrays are actually a special type of object.
- Arrays are often the data structure of choice to hold a "list" of data items.
- Each item in an array is called an _element_.
- Elements can contain data of the same or different types, however, they most commonly hold the same type of data such as a list of strings.
- Elements in an array can even be objects, functions, even other arrays!
- Arrays dynamically grow and shrink in size as we add data to, and remove data from them.

#### Creating Arrays

There are two ways to create an array...

```js
// using a Constructor Function (less common syntax)
var nums = new Array(2, 4, 18);

// using Array Literal syntax (recommended best practice)
var nums = [2, 4, 18];
```

**IMPORTANT: In WDI, we will often show you alternative ways of doing things, including ways that are not necessarily the best or recommended way. Why do you think we do this?**

#### Accessing the Elements in an Array

We access elements in an array using **bracket notation**, passing in the "index" of the element you want to access:

```js
var superheroes = ['Batman', 'Swamp Thing', 'Captain Marvel'];
var firstHero = superheroes[0];  // 'Batman'
```

Since when is `0` the first item in anything?  Since computer science came along! Internally, programs prefer to think in terms of "offsets" in memory and we access the first item using an offset of zero - this is referred to as being "zero-based".

**? - How would we access the element that contains the value "Captain Marvel"?**

>FYI, the individual characters in a string can be accessed using bracket notation also - try it!

#### Working with Arrays

It's time to practice working with arrays.

To start, in the console, create an array with several elements containing your favorite sports teams, animals, baby names, or whatever... Be sure to assign your array to a variable. You have 3 minutes...

The following are most, but not all, of the methods available on array objects:

1. `Array.push()`
2. `Array.pop()`
3. `Array.shift()`
4. `Array.unshift()`
5. `Array.concat()`
6. `Array.indexOf()`
7. `Array.lastIndexOf()`
8. `Array.join()`
9. `Array.slice()`
10. `Array.splice()`

Let's pair up and I'll divvy out these methods...

Each pair will then have 5 minutes to research their assigned method.

Be prepared to explain your findings with the class:

- **What's the purpose of the method?**
- **What is the return value of the method?**
- **Is the original array mutated (changed)?**

## Further Study

### Data Type Classifications

Part of becoming a developer is learning to talk like one. This of course requires learning the vocabulary of programming.

When hanging with devs, you may hear some of the following lingo in regards to data types...

#### Primitive Data Types

Variables holding a **primitive** data type can hold only one value at a time.

In JS, we can further group primitive data types into two sub-types:

- Simple Data Types
  - string
  - number
  - boolean

- Special Data Types
  - undefined
  - null

#### Complex Data Types

Complex data types can be thought of as containers consisting of primitive data type values.

Accordingly, the **object** data type is a complex type.

>Note: You will come across **arrays** being referred to as a data type - and that's cool. In fact, your instructors may refer to arrays as if they are a data type. However, be aware that technically, arrays in JS are just special objects (as are functions).

Complex data types are also referred to as **reference types**. This is because when we assign one object to another, we are simply assigning a "reference" to the original object, whereas primitive types copy their value when assigning one variable to another. Let's see this in action by copying the following in to the console:

```js
// primitives (value type)
var x = 5;
var y = x;
console.log(x, y);
x = 10;
console.log(x, y);  // y is still equal to 5

// complex (reference type)
var o = {x: 5};
var p = o;
console.log(o, p);
o.x = 10;
console.log(o, p);  // p.x changed too!
```

Notice how the value of `y` did not change, yet object `p` did. Again, this is because `p` simply holds a reference, or points to, `o`.

### Type Conversion

JavaScript is very relaxed when it comes to data types. Contrary to non-dynamic languages, a variable can change its type.

```js
var m = 15;  // I'm a number
m = 'hey';   // Now I'm a string!
```

#### Beware of Implicit Conversion

JavaScript is friendly and tries to help us whenever it can. However, we all know that sometimes its better to be left alone.

__Try adding a string to a number.  What did JS do?__

__Now try comparing a number and a string containing the same digits using the equality (`==`) comparison operator__

```js
13 == "13"  // returns true!
```

This is why, unless there's a reason not to, use the _strict equality operator_ (`===`) as it will not perform type conversion. 

#### Explicit Type Conversion

We can easily convert a number to a string using the `toString()` and `toFixed()` methods:

```js
var n = 123.456;
var s1 = n.toString();  // "123.456"
var s2 = n.toFixed(2);  // "123.46"
```

There are a couple of handy methods used to convert strings to numbers: `parseInt()` and `parseFloat()`

```js
var s = "1234.567";
var n1 = parseInt(s);  // 1234
var n2 = parseFloat(s);  // 1234.456
```
Remember however, that the data type for both flavors, integer and float (short for floating-point), is _number_.

### Array - Practice

#### Simple Iteration with a `for` loop

Iterating through the elements of an array, one at a time, is a very common practice in programming.

We can use a `for` loop to iterate over the elements of an array like this:

```js
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
for (var i = 0; i < teams.length; i++) {
  console.log(teams[i]);
}
```

However, `for` loops are sooooo old school. Take a look at the next section to see how the cool kids iterate through an array. 

#### Iterating Over an Array's Elements

JavaScript arrays have several advanced _iterator methods_.

These methods require a function be supplied as an argument, so they are a little more complex to work with UNTIL you get comfortable with functions in general, and functions being supplied as arguments.

As an example, lets look at the `forEach` method that we can use instead of a `for` loop to iterate the elements:

```js
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Clippers'];
teams.forEach(function(el) {
    console.log(el);
});
```

Would you agree that this code's intention is clearer than that of the for loop?

The following are a couple of other iterator methods for you to research and practice with:

- `Array.filter()`
- `Array.map()`

Finding a particular element within an array, or it's index (position) within the array, is very common. These two "newer" array methods work great for this task:

- `Array.find()`
- `Array.findIndex()`

Feel free to use these arrays to practice with:

```js
var names1 = ["Plato", "Linus", "Rashad", "Aidan", "Hunter", "Rudyard", "Kaseem", "Armand", "Clayton"];
var names2 = ["Ferris", "Erich", "Alvin", "Brody", "Justin"];
```

## References

[MDN JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

0



[Click here to view as a presentation](https://presentations.generalassemb.ly/e4a2445216746d1fde4c6f5e93782bec#/1)

---

<img src="http://4.bp.blogspot.com/-zRlTGTWQWDc/UFbvX12cZVI/AAAAAAAAAZM/uzPsKSSBvEg/s1600/control+flow.png" style="width: 400px">

# Control Flow in JavaScript

---
## Learning Objectives
<br>

- Understand what is "truthy" and "falsey" in JavaScript

- Use the `if...else` statement to perform branching

- Use the `for` statement to perform looping

- Use the `while` statement to perform looping

---
## Roadmap                             

- What is Control Flow? (5 mins)

- Conditional Expressions - (15 mins)

- Branching Statements (15 mins)

- Looping Statements (15 mins)

- Closing Questions (5 mins)

- Practice Exercises (20 mins)

- Bonus Material

---
## Lesson Setup
<br>

- We will use _JS Bin_ ([jsbin.com](jsbin.com)) to work with the concepts and complete the exercises in this lesson.

- For best results, ensure that only the **JavaScript** and **Console** panes are open.

---
## What is Control Flow?
<br>

>#### "The execution sequence of instructions in a program determined at run time with the use of control structures"

---

### Basic Types of Control Flow

- **Sequence**:
  - Statements execute one at a time in sequence.

- **Branching**:
  - Different code paths are executed based upon a conditional expression.

- **Looping**:
  - Code is repeatedly executed while a condition is truthy.

---

## Conditional Expressions <small>(15 mins)</small>
<br>

- In JavaScript, what is considered to be True/Truthy & False/Falsey?

- Comparison Expressions

---
### What is True/Truthy & What is False/Falsey?

- To test what is truthy and what is falsey, let's type the following code into JS Bin:

  ```js
  if (true) {
    console.log('truthy!');
  } else {
    console.log('falsey!');
  }
  ```

- **?: Clicking the `Run` button at this point will always print what to the console?**

- Now we can easily test expressions by typing it in the place of `true`. 

---
### What is True/Truthy & What is False/Falsey?
<br>

- Why this _truthy_ and _falsey_ business? Why not just use _true_ and _false_?

- Answer: _Truthy_ and _falsey_ are JavaScript's attempt to treat non-boolean expressions as booleans (`true` or `false`) at runtime.

- For example, the number `3`, is considered to be _truthy_ - test it out.

---
### What is True/Truthy & What is False/Falsey?

- Most things in JS are _truthy_, so it's easier to remember what's _falsey_...

- There are two datatypes that are always falsey:<br>`null` and `undefined`

- There are four values that are falsey:<br>`false`, `0` (zero), `NaN` (special value of number), and an _empty string_ (FYI, a string with a value of a space is not empty).

- Everything else is truthy!

- **Take a couple of minutes to test a few of the above.**

---
### The Not Operator

- The _not operator_ (`!`), also known as the "bang" operator, "flips" a true or truthy expression to the boolean value of `false`, and vice-versa.  For example, test the following expressions:

  ```js
  !false === true // true
  !null === true // true
  !3 === false // true
  !'' === true // true
  ```

- A double `!` operator is a great way to force a truthy expression into its actual boolean value of `true` or `false`:

  ```js
  console.log(!!3); // outputs true
  ```

---

### Boolean Logic<br><small><em>Comparison Operators</em></small>

- Let's review these Comparison Operators that you saw in the pre-work:
  - **`===`** (strict equality - best practice)
  - **`==`** (performs type conversion if necessary)
  - **`!=`**
  - **`<`**
  - **`>`**
  - **`<=`**
  - **`>=`**

- Now let's review these Logical Combinators:
  - **`||`**
  - **`&&`**

---
### Conditional Expressions
<br>

- The `if`, `for` and `while` statements all require a _conditional expression_. For example:

  ```js
  var x = 1;
  while (x <= 10) {
    var msg = 'Item ' + x;
    console.log(msg);
    x++;
  }
  ```
  Where, `x <= 10` is the conditional expression.
  
- **?: If `x <= 10` was replaced with just `x`, would it still be considered a valid conditional expression?**

---
## Review Questions
<br>

- **Name the two datatypes that are considered to be falsey in JavaScript.**

- **Name the four values that are considered to be falsey in JavaScript.**

- **Is an "empty" object (an object with no properties) truthy or falsey?**

- **What value does `!!0` equal?**

---
## The <span style="text-transform:lowercase">if..else</span> Branching Statement <small>(15 mins)</small>
<br>

- As you saw in the pre-work, the `if` and the optional `else` clause allows us to conditionally execute code.

---
### The <span style="text-transform:lowercase">if</span> Branching Statement <small>Single Path</small>

- Single path `if`:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  ```js
  if (val === 1) {
    console.log('This code will run only if val equals 1');
  }
  ```

- Parens surrounding the logical expression are required.

- If you have only a single statement that needs to execute, you can write that statement without using curly braces (block statement):

  ```js
  if (val === 1) console.log('This code will run only if val equals 1');
  ```
  This code is the same as the example above.

---
### The <span style="text-transform:lowercase">if..else</span> <small>(dual path)</small>
<br>

- Dual paths `if` with `else`:

  ```js
  if (val === 1) {
    console.log('val is one');
  } else {
    console.log('val is not one');
  }
  ```

---
### The <span style="text-transform:lowercase">if..else</span> <small>(three or more paths)</small>

- If you have three or more code paths use `if` with as many `else if` statements as necessary and optionally a final `else`:

  ```js
  if (val === 1) {
    console.log('val is one');
  } else if (val === 2) {
    console.log('val is two');
  } else if (val === 3) {
    console.log('val is three');
  } else {
    console.log('not one, two, or three');
  }
  ```

- Any questions regarding branching with `if...else`?

---
### Exercise - Branching Statements
<br>

- Write the `if...else` statement that console.logs the following based upon the value of a variable named `color`:
  - If the value is `green`, log `Go`
  - If the value is `yellow`, log `Slow`
  - If the value is `red`, log `Stop`
  - If the value is anything else, log `Whatever`

---

## Looping Statements <small>(15 mins)</small>
<br>

- Looping statements provide us with the ability to execute a block of code multiple times while a conditional statement is truthy.

- We'll take a look at these statements:

  - **`while`**

  - **`do while`**

  - **`for`**

---
### Looping Statements<br><small><em>while</em></small>

- The first looping statement we'll look at is `while`:

  ```js
  var word = '';
  var words = [];
  while (word !== 'end') {
    word = prompt('Enter a word ("end" to quit)');
    if (word !== 'end') words.push(word);
    console.log("You've entered: " + words.join(', '));
  }
  ```

- Use `while` when you want to continue to execute a block of code _while_ a condition is true.

- Beware of infinite loops!

---
### Looping Statements<br><small><em>do...while</em></small>

- You may choose to use the `do...while` statement instead of `while` to force the code block to execute at least once.

  ```js
  var step = 1;
  do {
    console.log('Step ' + step);
    step++;
  } while (step < 6);
  ```

- Again, beware of infinite loops!

---
### Looping Statements<br><small><em>for</em></small>

- The next looping statement we'll look at is the `for` statement:

  ```js
  var colors = ['red', 'white', 'blue'];
  for (var idx = 0; idx < colors.length; idx++) {
    console.log(colors[idx]);
  }
  ```

- Notice the `for` loop has three parts after the _for_ keyword:
  - The _initializer_ which runs only once before looping begins. It is usually used to declare and initialize a looping variable, but can be any statement.
  - The _condition_ which will be evaluated before each loop. If truthy, the code block will execute.
  - The last statement will execute after each loop and is typically used to increment or decrement the looping variable.

---
### Looping Statements<br><small><em>break</em></small>

- Use the `break` statement within any loop to immediately exit the code block and execute code following it.

  ```js
  var word = '';
  var words = [];
  while (word !== 'end') {
    word = prompt('Enter a word ("end" to quit)');
    if (word !== 'end') {
      words.push(word);
    } else {
      break;
    }
    console.log("You've entered: " + words.join(', '));
  }
  ```
  
---

### Question - Looping Statements
<br>

- **When using a `while` or `do...while` loop, we must be careful not put the program's execution into an __________ loop.**

- **How can we avoid the above scenario?**

---

## Closing Questions <small>(5 mins)</small>

I'll give you a couple of minutes to review the following questions, meanwhile, I'll warm up the picker :)

- **In your own words, how would you describe _Control Flow_?**

- **The three primary types of _control flow_ are:<br>1) Sequence<br>2) ___________<br>3) ___________**

- **What looping statement ensures that its code block is executed at least once?**

---

## Practice Exercises <small>(15 mins)</small>

---

### Practice Exercises
#### Exercise 1 - Branching

- The following JavaScript code will accept string input from the user and store the string in a variable named `choice`:

  ```js
  var choice = prompt('Enter a, b or c');
  ```

- **Write an `if` statement that  `console.logs` the following messages**:
  - _a_ entered - "a is for apple"
  - _b_ entered - "b is for banana"
  - _c_ entered - "c is for cantaloupe"
  - anything else - "you're a rebel"

---

### Practice Exercises
#### Exercise 2 - Looping
<br>

- **Use one of the looping statements to continue to execute the code you wrote in the previous exercise until the phrase _no more fruit_ is entered by the user.**

---
## Bonus Material

---
### Ternary Operator

- The _ternary_ operator is ideal when you need to return one of two values depending upon a condition:

  ```js
  var message = score > 100 ? "You rock!" : "Keep trying!";
  ```
  
  The above one line of code replaces this code:
  
  ```js
  var message;
  if (score > 100) {
    message = "You rock!";
  } else {
    message = "Keep trying!";
  }
  ```

- It can also be used to evaluate one of two expressions, so you can actually run a method if you'd like:

  ```js
  score > 100 ? gameWinner() : gameLoop();
  ```

---
### <span style="text-transform:lowercase">switch</span> Statement
<br>

- Look into using the `switch` statement instead of `if...else` if you have more than three code paths and your conditionals always check the same variable.

- Here's the documentation for the [switch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
0


![](https://scalerablog.files.wordpress.com/2015/05/meme-functions.jpg
)
# JavaScript Functions & Scope

| Learning Objectives - SWBAT |
| :--- |
| Understand the Use Case of Functions |
| Define & Invoke Functions With & Without Parameters |
| Describe Scope |

## Roadmap
1. Why Functions Anyway? (5 mins)
2. Defining and Calling Functions (40 mins)
3. Parameters (15 mins)
4. Scope (15 mins)
5. Further Study

### 1. Why Functions Anyway?<small> (5 mins)</small>

One way of answering this question is to imagine the world of programming **without** functions...

Without functions:

- ...we would not be able to break up our programs into more manageable chunks - our code would be a huge monolithic scroll. As developers, we solve complex problems with complex programs; and as humans, we tackle complexity by breaking it down into more manageable pieces.

- ...if we needed to execute the same code more than once (outside of a loop), we would have to write the same code again and again. In programming, there's a key principle known as **DRY** - Don't Repeat Yourself!

- ...we could not easily find a section of code that needs debugging and/or modification.

Coding without functions would be unproductive, error-prone, tedious; nay, **impossible**!

#### So, what is a function?

A function is a group of statements that can be called by other sections of code, including other functions, as many times as necessary.

Typically, a JavaScript **program** consists of a collection of functions, and either event listeners, or a small amount of application code that kicks off the application by calling a "main" function. **Otherwise, if ALL of the program's code was in functions and there weren't any event listeners, what would happen when the program is loaded into the browser?**

### 2. Defining and Calling Functions<small> (40 mins)</small>

Having endured the pre-work, you should be somewhat familiar with functions.

#### Defining Functions

There are two primary ways to define functions in JS:

**Function Declaration**

```js
function sayHello(name) {
    console.log('Hello ' + name + '!');
}
```

**Function Expression**

```js
var sayHello = function(name) {
    console.log('Hello ' + name + '!');
};
```

**? - What similarities between the two approaches are there?**

**? - Differences?**

#### Calling Functions

In both cases, we could call, or **invoke**, the function like this:

```js
sayHello('Mickey');
// "Hello Mickey!"
```

#### Function Declarations vs. Function Expressions

##### Why Are There Function Expressions?

Well, functions in JS were always meant to be treated like first-class objects. In fact, they **are** objects - we can pass them as arguments to other functions, we can return them as the result of a function, and we can even dynamically add properties on them.

Soon enough, you will learn about the convenience of using **anonymous functions**, and these babies are made possible by function expressions.

Lastly, function expressions can be **immediately invoked**, which can come in handy as you'll see when we talk about scope.

With the above in mind, function expressions just feel right to JS developers.

##### Why Are There Function Declarations?

A developer coming over from most other programming languages would be more familiar with the Function Declaration method of defining functions.

One advantage function declarations (also called function definitions) have is that they are fully parsed by the interpreter prior to execution and can therefore be invoked even if they are defined later in the source code. For example:

```js
var t = f1();  // thank you function declarations :)
var s = f2();  // blows chunks!


function f1() { return "I'm coming from a function declaration"; }

var f2 = function() { return "I'm coming from a function expression"; };
```

For all practical purposes, the above distinction is really the only "functional" difference you need to be concerned with.

Beware, attempting to execute a function expression before it's been defined is the source of many an error for new JS developers!

#### Practice Writing Functions

You're going to write two functions, one as a function declaration & the other as a function expression.

This will be an individual exercise, however, feel free to seek guidance from your neighbors and instructors if you get stuck.

##### JS Bin (Code Playground)

Writing functions in the console sucks. So, let's use one of the many "code playgrounds", [JS Bin](http://jsbin.com/?js,console). Open it up and ensure that only the JavaScript & Console panels are open.

##### Write a Function Declaration

Write a function named _computeArea_ using the function declaration approach.

It will have two parameters: _width_ & _height_.

It will compute the area of a rectangle (_width_ X _height_) and return a string in the following form:
>The area of a rectangle with a width of ___ and a height of ___ is ___ square units.

Invoke the function to test it.

##### Write a Function Expression

Write a function named _planetHasWater_ using the function expression syntax.

It will have one parameter: _planet_.

Return _true_ if the _planet_ argument is either "Earth" or "Mars", otherwise return _false_.

Bonus points if you ensure the function will work regardless of the casing of the _planet_ being passed in ('earth', 'MARS', etc.).

Invoke the function a couple of times to test it!

### 3. Parameters/Arguments<small> (15 mins)</small>

There are a few tidbits about parameters/arguments to ponder:

- First, let me answer a common question:  _"What's the difference between a parameter and an argument?"_

  This question is best answered with an example (no need to run this):
  
  ```js
   var drive = function(miles) {    // miles is a parameter
     if (miles > 500) {
       return 'Take a break';
     } else {
       return 'Pedal to the metal';
     }
   };
   
   var result = drive(222);     // 222 is an argument
  ```

  So, they are called parameters when we are defining the function, and arguments when we are calling the function.
  
  FYI, in this example, our single argument is a number literal (`222`), however, you will commonly pass in variables as arguments also...

- Parameters in essence become local variables inside the function body. Therefore, in the example above, `miles` can be accessed anywhere within the function.

  **? - If we pass in a variable as an argument that holds a primitive type (string, number, boolean), and we change the parameter within the function, will the source variable's value also change?**
  
- Just like when naming variables and functions, we should name the parameters of our functions with meaningful names as well.

- Inside of the function we are automatically provided a variable named `arguments`.  `arguments` is an object that behaves like an array, that is, it has a `length` property and we can access the "elements" of `arguments` using _bracket notation_:

  ```js
   var func = function(p1, p2, p3) {
     console.log(arguments, arguments.length);
   };
   
   func(5, true, null, 'extra!');
   
   // console output: [5, true, null, "extra!"]   4
  ```
  
  Notice that we passed **more** arguments than there are parameters! JavaScript is very flexible and won't complain about this. That extra arg shows up nicely in the `arguments` variable.
  
  If we were to pass in fewer args than params, then the params without a matching argument would be set to `undefined`. 

  **? - In the above example, when `func` is executing, what are the values for `p1`, `p2` & `p3`?**
  
#### Functions as Arguments

  In JavaScript, it's amazingly easy to pass around functions just like objects (because they are objects).

  Tomorrow, you'll see this concept in action when you start to use JS to manipulate the DOM (document object model, aka, elements) and handle events.
  
##### Anonymous Functions

Often methods will require a function be provided as an argument.  For example, the `forEach` method on arrays:
  
```js
var a = ['red', 'green', 'blue'];
  
a.forEach(function(color) {
  console.log(color);
});
```
  
Since the function provided to the `forEach` will never be called anywhere else in the code, why create a separate named function and pass it in?  An **anonymous function** as shown above really comes in handy!
  
##### ES2015 Arrow Functions

ES2015 has given us yet another type of function, the _arrow function_.  It is a shorthand way of writing _anonymous functions_.
  
Let's see how we could use an _arrow function_ in the `forEach` example above:
  
```js
var a = ['red', 'green', 'blue'];
  
a.forEach(color => console.log(color));
```

Because we had a single statement, we didn't even need curly braces!  We'll be sure to sprinkle in _arrow functions_ here and there in future lessons.
  
### 4. Scope<small> (15 mins)</small>

#### What is Scope?

>Disclaimer: This discussion of scope will not cover a third type of scope, block scope, being ushered in with ES2015's `let` keyword.

In general, the concept of **scope** in computer programming pertains to the accessibility of variables and functions from a given point of the code. In other words, as you write a line of code, what variables and functions do you have access to?

JavaScript has a single **global scope** and as many **local scopes** as there are functions. That's right, each function creates a new scope as shown in this diagram:

![](http://www.datchley.name/content/images/2015/08/js-es5-scope-2.png)

**? - How many scopes are there in the above diagram?**

#### You can look out, but you can't look in!

A key takeaway is that functions have access to the set of variables and functions defined within their own scope AND in the **outer** scopes, but **not the inner** scopes.

**? - What variables and functions are _accessible_ within the scope of `foo`?**

**? - What variables and functions are _accessible_ within the scope of `bar`?**

**? - Does the function `foo` have access to the variable `c`?**

Now let's examine this code:

```js
var x = 5;

var myFun1 = function () {
  console.log(x);   // logs out 5
  myFun2();
  
  var myFun2 = function () {
    console.log(x);   // logs out 5
  };
};

myFun1();
```
Note how we go right up the _scope chain_ looking for a variable (or function). Once the variable is found, the JS runtime engine will stop looking up the chain because, well, it found what it was looking for. If it progresses all the way up to the global scope and still does not find the the variable it's looking for, an error will be thrown.

**? - In the example above, what if `myFun1` had its own variable `x` defined like this:<br>`var x = 100;`<br>What would the value of `x` be within `myFun1`?**<br>**Within `myFun2`?** 

#### Global Scope

In our browsers, the global scope is represented by the `window` object. As far as scopes are concerned, it is at the top of the food chain and it's properties are available to **every** function we write.

It is generally bad form for our programs to create variables in the global scope.  Doing so risks us overwriting data in use by JS libraries/frameworks or other routines. Creating global variables is referred to as "polluting the global scope", and we all know that it's not nice to pollute!

If we define a variable within the global scope, it becomes a property on the `window` object. You can see this in action by typing `var smog = 'sucks'` in the console, then type `window.` (don't forget the dot), scroll down and find the pollution we have created - yuck!

One way we can prevent our code from leaking into the global scope is by wrapping it with a construct known as an Immediately Invoked Function Expression, or "IIFE" (pronounced "iffy").  It looks like this:

```js
(function() {
  'use strict';

  // your code here...
  
})();
```
**? - Why does this construct virtually prevent variables and functions from being created in the global scope?**

One day, when _modules_ are fully implemented in JavaScript, we won't have to screw around with IIFE's :)

**? - Scope refers to the set of ________ and ________ that are accessible within a given point in the code.**

**? - When is a new scope created?**

### 5. Further Study

#### Nesting Functions

As the examples above have shown, we can define functions within functions!

Why would we want to do this? Well, Perhaps an outer function needs a "helper" function that would only be relevant only to a given function. It would be good programming practice to "hide" that function from the rest of the program by nesting it within the function that actually needs it.

For example (no need to execute this):

```js
function openNewAccount(name, openingBalance) {
  var acctNum = generateAcctNum();
  
  // createAccount is a function available outside this function
  var acct = createAccount(acctNum, openingBalance);
  return acct;
  
  // helper function that provides a unique account number
  function generateAcctNum() {
    return Date.now();  // super amazing algorithm :)
  }
}
```

As you can see, there's a nifty `generateAcctNum` function in there and it's only relevant to when a new account is opened, so it's nested within the `openNewAcount` function.


## References

[MDN Functions Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
0



# The Tragedy of Obediah Jecht

![curlies](images/curlies.png)

## Objects in JavaScript

| Lesson Objectives: SWBAT                     |
| :------------------------------------------- |
| Create JavaScript Objects using Object Literals |
| Use JS Objects to Model Real World Objects |
| Create nested (JS) Objects by referencing other (JS) Objects and Arrays. |
| Delete properties from (JS) Objects at run-time. |
| Define what "key-value" pairs and "properties" mean in reference to (JS) Objects. |
| Identify the properties and values in a given (JS) Object. |
| Reference or update a value in a (JS) Object by its property. |

## Roadmap

1. Intro to Object Oriented Programming
2. Creating Objects - the Birth of Obediah Jecht
3. Designing Objects - the Life of Obediah Jecht
4. Removing Properties from Objects - Obediah Jecht's Tragic Epiphany
5. Outro

## Intro to Object Oriented Programming (OOP)

As web developers, we practice Object Oriented Programming techniques. 
With OOP, our programs are crafted from objects, which have data and 
behavior, and are used to model real world objects.  During the 
program's execution, these objects interact with each other to 
accomplish the programming goal.

**When have you seen real world objects modeled in a website?**

## Creating Objects - The Birth of Obediah Jecht

<img alt="object birth comic" src="images/baby-object.jpg" width=350px>

> Obediah, son of Obayashi and Obedience Jecht, came into this world as 
any other, just the shell of who he would become:

`{}`

>  Moments after his birth, the Jechts wanted to give their son a name, 
one that made their family proud. Of course, he was given the family 
name:

`lastName: "Jecht"`

> …but he was also given a strong first name.

 `firstName: "Obediah"`

> However, Obediah is a long name and at the time, a common one too. He needed a unique nickname, one so odd that he'd have no problem being seen as an individual:

``` javascript
var obJecht = {
  firstName: "Obediah",
  lastName: "Jecht",
  age: 0,
  hair: null
};
```

#### Object Literal Syntax …and the World Met Obediah

Let's look at Obediah and how he shows a model of a brand new bouncing 
baby boy.

Our Obediah was born using an __object literal__. When we need a 
single object, this is a great way of providing it. Simply name the 
variable, and assign it to an empty object, like so:

`var emptyObject = {};`

Alternatively, you can fill that object when defining it:

``` javascript
var filledObject = {
  firstKey: true,
  secondKey: "this is a value"
};
```

Take a look at the `filledObject`. As you can see, Javascript objects 
contain a collection of zero or more undordered _properties_.

__Properties__ have two features:

- a __key__ (alternatively known as a _name_)
- a __value__

Together, these are known as __key:value__ pairs. Within a JS object, 
the _key_ and _value_ are separated by a colon, and the _properties_ are 
separated by commas. A _value_ can be any type of data.

**What kinds of types of data do we know about?**

In the case of Obediah, we have two two `String` values for our 
`firstName` and`lastName` keys, and a `Number` value for our `age` key.

When properties contain data (eg. `lastName`, `firstName`, and `age`) 
they're referred to as __attributes__.

A _value_ can also be a function. We'll learn more about this later, but 
just know that a property is called a __method__ when its value is a 
function.

Both _methods_ and _attributes_ are _properties_. Additionally, Objects 
in JS are dynamic, meaning their properties can be changed, added & 
removed during runtime.

#### Questions!

1. What is the name for `{}` in `var x = {};`?
2. A property is made up of a _______ _______ pair.
3. What's the difference between an attribute and a method?

## Designing Objects - the Life of Obediah Jecht

![](images/abnermeaning.jpg)

> As time went on, Obediah grew up.

`obJecht.age += 5;`

**This is what we mean by objects are dynamic!**

> And he learned to yell for his momma:

``` javascript
obJecht.callForMomma = function() {
  alert('MOMMY!!');
};
```

`obJecht.callForMomma` is a _custom method_ created by us - it's like 
any other function, but attached to `obJecht` under the name 
`callForMomma`.

> His bald head became a thick mane of brown hair:

`obJecht['hair'] = true;`

`obJecht.hairColor = "brown";`

> And under that hair was an especially great mind.

`obJecht.mind = "beautiful";`

We declared a key and assigned a value to it. Now we have access to the 
_attribute_ `hairColor: "brown"` as well as the _attribute_ 
`mind: "beautiful"`. 

As we see with `obJecht['hair']`, we can access properties of an object 
with either a period or brackets containing quotes.

All of these are _properties_ on Obediah, the `obJecht` object.

#### The People and Things in Obediah's Life

> For his 5th birthday, Obediah was given an adorable teddy bear,:

``` javascript
var teddy = {
  cute: true,
  eyes: "buttons"
};
```

> Obediah loved his teddy bear, and often reminded others that it was 
  HIS teddy bear.

`obJecht.toys = teddy;`

> He was also given a flashy yo-yo that he also took quite a bit of 
pride in.

- Can anyone tell me how I would build a `yoYo` object with two custom 
  attributes?
- How would we create a friend for Obediah?
- Now that Obediah has two toys, how do you think we should store them 
  in `toys` key?

#### Referencing in Javascript Objects

In Javascript, referencing to another object is as easy as setting a 
_property_. For instance, `obJecht.toys` is simply a reference to the 
teddy object. We can even access the teddy properties through `obJecht`.

`obJecht.toys.eyes`

We can also make arrays of other objects or primitive types.

`obJecht.toys = [teddy, yoYo]`

**How could we access the teddy's eyes through Obediah now?**

When accessing variables within an array, you must refer to them by 
their index.

Since we've put teddy first, his index number is `0`. Remember that in 
computing, index numbers start from 0.

#### Obediah the Genius - Practice

> As Obediah aged, he excelled in school, finishing high school three 
> years early. 
> 
> But so ravenous was his hunger for knowledge, he decided to 
> immediately head for Cambridge.

###### Let's practice what we've learned:

- Add 10 to the Obediah's age property
- Create a _name_ `graduateHS` on the Obediah and set the *value* to `true`.

> There Obediah started to read a lot of existential philosophy and 
> built a set of troubling beliefs.

- Create a __key__ `favAuthors` and assign it to an array of 
  `"Nick Bostrom"`, `"Soren Kierkegaard"`, and `"Albert Camus"`.

## Removing Properties from Objects - Obediah Jecht's Tragic Epiphany

![](images/abnerunreal.jpg)

> Obediah became obessessed with the idea of being, as he had a sneaking 
>  suspicion about reality. One day he tells me:
> 
> "I believe the world is nothing but a series of objects in a program."
> He murmured.
> 
> "By the very nature that we understand the idea of how to program a 
> universe, it is therefore more likely that we are, in fact, in one of 
> the infinite simulations of a universe than our actual universe."
> 
> He seemed unhinged and I couldn't follow his logic. I asked him to 
> elaborate…
> 
> "Well look at this house!" bellowed Obediah as he pointed to my home. 
> "It has 2 rooms, 3 bathrooms, and it's painted gray! They're just 
> simple attributes when you think about it!"

**Make that house into an object using object literal notation!**

> "You see!" Obediah exlaimed. "Everything in nature is actually an 
> object!"
> 
> And then Obediah became very serious and detached, sounding more 
> disturbed by the second.
> 
> "In fact, the very nature of nature... our very understanding of the 
> universe. We sit on a singular planet in an enormous galaxy… It's as 
> if we don't move… we may as well just be data in a server… a server 
> in the middle of a desert the size of the universe…"
> 
> "We're all just inanimate objects."

`obJecht.mindBlown = true;`

> I shook my friend Obediah, but he did not respond. We quickly ran him 
> to the hospital, and the doctor confirmed our worst fears:
> 
> "Obediah's mind was blown and there is no coming back" reported the 
> doctor.
> 
> Her voice shook with despair. "He'll begin to lose his memories soon…"
> 
> And sure enough, Obediah began to forget. First, he forgot the color 
> of his flashy yo-yo.

`obJecht.toys[1].color = null;`

**Here we have not deleted the _property_, but instead set it to `null`.**

Now the null value is attached to the `color` _key_.

>  He forgot his favorite authors first.

`delete obJecht.favAuthors;`

Now, we've actually removed the property entirely. We can no longer 
access `obJecht.favAuthors`.

**How would we make Obediah forget his toys? What happens to `teddy` and `yoYo`?**

> Eventually, he was no longer himself. He lost his identity.

`obJecht = {};`

We've now assigned him to an empty object. In runtime, this will wipe 
the object of all custom properties.

## Outro

Now you know the great tragedy of Obediah Jecht. We all hope that in 
time he comes back to us, but, knowing the JS compiler, it's unlikely.

Let's go over what we learned:

- How do we create an object using an object literal?
- What is another term for an object property?
- Object properties can contain what kinds of data types?

#### References

[MDN JS Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

[MDN Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

[MDN Intro to Object-Oriented JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
0
