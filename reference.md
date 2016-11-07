# Living within the Box

![Transmogrify](http://www.lovine.com/hobbes/comics/chimage.php?image=transmogrifier2.gif)

## CSS Box Model & Positioning

| Lesson Objectives - SWBAT:               |
| :--------------------------------------- |
| Explain how margin, border, padding, and content relate to one another in the box model |
| Adjust element spacing using padding and margin |
| Describe the difference between block, inline, and inline-block elements |
| Explain the difference between and use cases of static, relative, absolute, and fixed positioning |
| Use floats to position/remove content from the standard document flow. |
| Create a page with multicolumn layout    |
| Identify the element's boxes when viewing a website. |
| Use Chrome's Web Inspector to explore an element's box properties. |

##### Road Map

1. Intro to the Box Model
2. The Box Model and Its Components
3. Display
4. Positioning
5. Floats and Clears
6. Outro

## Intro to the Box Model

![Panels](http://www.collectivenext.com/sites/default/files/styles/medium/public/blog-images/understanding-comics-p61.png?itok=iibrRHw2)

I'm going to first make a crazy comparison, and follow it up with a wild
assumption.

First, for the comparison:

>  *Website design is quite similar to comics' panel layout.*
>
> — Ezra Arez Raez, 2016

Now for the wild assumption: open chrome and visit any site.

Now, if you'll relax your eyes as you stare into that website, I'm sure you'll
make out a number of rectangles in that site - go ahead, count them! In fact,
turn on your chrome inspector to prove it!

I can assume this because, much like comics - predominantly relying on the
rectangular panel for the majority of their page layout - **the web is made of
rectangles.**

We use HTML to decide what rectangles we want and what should go in them.

We use CSS to decide how they should look (recall this morning's lesson), and
where they should go.

##### Assets

Today we'll be working from the `starter_code/` directory.

## The Box Model and its Components

You may be familiar with the following diagram:

![box-model](http://s6.postimg.org/gi8r6c341/css_box_model.png)

Open Chrome's Dev Tools by using cmd+opt+i.

Click "Elements" (in the dev tools toolbar), then `<div id="box-model">` in the
page source. Find the multicolored rectangles at the bottom of "Styles."

- **Margin** - The empty area around a border, where we don't want anything else
  on the page to render.
- **Border** - A solid (or dashed, or dotted, etc.) line around the padding and
  content. Can be zero pixels (invisible) or bigger.
- **Padding** - The area between the border and the content, where we can give
  the content some breathing room
- **Content** - The contents of the box; also what we size when we set a width
  and height in CSS.
- **Box-Sizing** - `box-sizing` is an interesting property. By default it's set
  to `content-box`, but we often assume sizing works in terms `border-box`. The
  difference is subtle but important. `content-box` sets the `height` and
  `width` properties of a box to the content, whereas `border-box` assigns them
  to border, therefore including the border's size and padding.

Let's add to our `.box-model` class and see what these do:

``` css
.box-model {
  margin: 50px auto;
  border: 3px solid red;
  padding: 50px;
  width: 100px;
}
```

#### Love thy Dev Tools

Chrome's Dev Tools are one of the nicest things to ever happen to developers.
This is because we can alter our webpages __while__ viewing them in the browser!

Take the next few minutes to play with the following:

- **Margins** - Remember that the values for a single margin property works
  clockwise from the top, `margin: Abovepx Rightpx Belowpx Leftpx;`
- **Borders** - Find new textures and sizes.
- **Padding** - See what negative values can accomplish.
- **Height, Width, and Box-Sizing** - See what these do to your box!

> Remember, if you've ever gone too far off the deep-end, simply refresh the
page!

## Display

![inline vs block](http://netdna.webdesignerdepot.com/uploads/2012/08/boxmodel-block-vs-inline.png)

At the heart of positioning is the `display` property. There are five values
that greatly effect our webpage.

1. An **inline** element renders without a line break above or below it, so that
   other content is right next to it. __Inline elements can't be given a width,
   height, or E/W margins.__
2. A **block** element renders with a line break above and below it, so they
   don't have anything next to them. By default, they take up the entire width
   of their parent element. Block elements can be given a height and a width.
3. An **inline-block** element is placed as an inline element (on the same line
   as adjacent content), but it behaves like a block element. This makes the
   element a block box but will allow other elements to sit next to it on the
   same line.
4. If you assign **none** as the value of the display, this will make the
   element and its content disappear from the page entirely!
5. **flex** is a new and interesting display option for CSS3. We'll cover it in 
   greater detail in a later lesson on responsive CSS, so I don't want to spend 
   too much time on it now. However just to mention, it reduces the need for 
   floats (see below in "Positioning") and removes the margins between things. 
   It essentially makes your positioning more *flexible*, while simultaneously 
   making your site less accommodating (`display: flex;` will not work with 
   browsers IE9 and older).

Lets see the difference between inline, block, and inline-block by adding these
rules to our stylesheet.

``` css
.inline-vs-block {
  border: 3px dotted gray;
}

.inline {
  display: inline;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}
```

#### Practice Display

In `<div id="inline-vs-block">`, notice what happens when you change width,
height, margin, and padding for inline, block, and inline-block elements.

Take a few minutes to alter these in the Chrome Dev Tools.

## Positioning

![](http://66.media.tumblr.com/tumblr_lmvr2tIqya1qi9hg0o1_500.gif)

The `position` property in CSS allows the content to move around the page in
four separate fashions: static, relative, absolute, and fixed.

##### Static Positioning

HTML elements are `position: static` by default. A "static positioned" element
is always positioned according to the normal flow of the page and are not
affected by the top, bottom, left, and right properties.

##### Relative Positioning

Declaring `position:relative` allows you to position the element top, bottom,
left, or right relative to where it would normally occur.

##### Absolute Positioning

Setting `position: absolute` on an element lets you position it according to
the edges of its parent element. This has the side effect of removing it from
the flow – that is, other elements will act like it isn't there.

##### Fixed Positioning

An element with `position: fixed` is positioned relative to the edges of the
browser window.  It will not move even if the window is scrolled, so a fixed
positioned element will stay right where it is.

### CSS Directions

Siblings to the `position` property, the `left`, `right`, `top`, and `bottom`
properties are known as the CSS Directions. By Default, they're set to `auto`,
and these properties do nothing while `position: static;`. They move an element
by adding a pixel amount to the respective direction between it and the nearest
element or border.

Again, let's see what happens when we add these new position properties to our
code (go ahead and overwrite classes `.spacing container`, `.one`, `.two`,
`.three`, and `.four`).

``` css
.spacing-container {
  height: 500px;
  width: 500px;
  background-color: gray;
  position: relative;
}

.one {
  background-color: red;
  position: static;
}

.two {
  background-color: blue;
  position: relative;
  top: -100px;
  left: 100px;
}

.three {
  background-color: green;
  position: absolute;
  top: 200px;
  left: 200px;
}

.four {
  background-color: black;
  position: fixed;
  right: 100px;
  top: 80%;
}
```

## Floats

The float property defines whether or not an element should stick to the side
and contain it's own line.

![Float Layout](https://cloud.githubusercontent.com/assets/40461/8234489/3b61ef02-15d4-11e5-8864-435fb6e0c3cc.png)

Note that "absolutely positioned" elements ignore the float property as they are
removed from the normal document flow - same with "fixed" elements.

Floated elements remain a part of the flow of the web page.

There are four valid values for the float property. "Left" and "right" float
elements those directions, respectively. "None" (the default) ensures the
element will not float and "inherit" which will assume the float value from that
element's parent element.

### Clear

As a sister attribute to Float, `clear` allows an element to ignore float rules,
and move itself *past* the float. You can set a clear to `left`, `right`,
`both`, and `none` (default).

Compare these two photos. A footer with `clear:none;`.

![](https://css-tricks.com/wp-content/csstricks-uploads/unclearedfooter.png)

Versus a footer with `clear: both` or `clear: left`:

![](https://css-tricks.com/wp-content/csstricks-uploads/clearedfooter.png)

Finally, let's see how these floats work!

``` css
.img-example {
  float: left;
  width: 400px;
}

.columns > div {
  float: left;
  width: 50%;
}
```

## Outro

Like drawing comics, CSS positioning takes time to master. It can be a struggle
early on, but consistent practice will eventually lead to full grokking.

As you can see, viewing html elements as the rectangular panels that they are
will assist you in conquering this tricky CSS beast.

##### Final Questions

- Explain the difference between `margin`, `border`, `padding`, and `content`.
- How do floats work with clears to create a multicolumn layout?
- Compare inline-block, block, and inline.

#### References

[Box-Sizing](https://css-tricks.com/box-sizing/)

[All About Floats](https://css-tricks.com/all-about-floats/)

[CSS Positioning Tutorial](http://www.barelyfitz.com/screencast/html-training/css/positioning/)


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