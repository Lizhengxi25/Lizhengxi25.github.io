---
title: lambda-recursion
date: 2024-08-29
location: "Beijing, China"
tags: ["posts"]
---

_In my younger and more vulnerable years my mentor gave me some advice that I've been turning over in my mind ever since._

_"In research," he told me, "taste is everything. Your work should set the standard—become the paradigm others follow. Hold that confidence, that ambition, regardless of where you stand today."_

_Half a year into writing this blog, I have yet to pen a single article about computer science proper—just a few of competitive programming tutorials. The truth is, I simply haven't produced any investigation worth turning into an article. Today's piece, "On the Recursion of Lambda Expressions," stems from a small investigation I'm quite pleased with. It embodies taste in two dimensions: the elegance of a one-liner reflects the aesthetic of simplicity; the subtleties of language fundamentals reflect depth of understanding. This is not a discovery from zero to one, but rather an investigation conducted with care and effort._


## Background

In UCB CS61A homework 3, there is a task about ```lambda``` recursion:

#### Q6: Anonymous Factorial

> This question demonstrates that it's possible to write recursive functions without assigning them a name in the global frame.

**The recursive factorial function can be written as a single expression by using a conditional expression.**

``` python
>>> fact = lambda n: 1 if n == 1 else mul(n, fact(sub(n, 1)))
>>> fact(5)
120
```

However, this implementation relies on the fact (no pun intended) that ```fact``` has a name, to which we refer in the body of ```fact```. To write a recursive function, we have always given it a name using a ```def``` or assignment statement so that we can refer to the function within its own body. In this question, your job is to define ```fact``` recursively without giving it a name!

Write an expression that computes n factorial using only call expressions, conditional expressions, and ```lambda``` expressions (no assignment or ```def``` statements).

> Note: You are not allowed to use make_anonymous_factorial in your return expression.

The ```sub``` and ```mul``` functions from the operator module are the only built-in functions required to solve this problem.

```python {.line-numbers}
from operator import sub, mul

def make_anonymous_factorial():
    """Return the value of an expression that computes factorial.

    >>> make_anonymous_factorial()(5)
    120
    >>> from construct_check import check
    >>> # ban any assignments or recursion
    >>> check(HW_SOURCE_FILE, 'make_anonymous_factorial',
    ...     ['Assign', 'AnnAssign', 'AugAssign', 'NamedExpr', 'FunctionDef', 'Recursion'])
    True
    """
    return 'YOUR_EXPRESSION_HERE'
```

Use Ok to test your code:

```sh
python3 ok -q make_anonymous_factorial
```

## Solution

At first glance, recursion seems paradoxical: a function must call itself by name, yet this task forbids using ```def``` or assignment statements. Fortunately, Python supports higher-order functions—functions that can accept other functions as parameters. More fundamentally, functions in Python are first-class objects, meaning they can be passed as arguments just like any other value.

With this observation, we can first simplify the problem by exploring whether it’s possible to make a function call itself indefinitely — independent of computing factorials.

```python
def A(a):
    a(a)

A(A)

( lambda a: a(a) ) ( lambda a: a(a) )
```

The two ways above both achieve our goal: the first one is easier to understand, while the second one is technically correct (without ```def```).

Then, we can try to add something to this function using tail-recursion, for example, counting and accumulating.

```python
def A(a, k):
    a(a, k + 1) + 1

A(A, 1)

( lambda a, k: a(a, k + 1) ) (( lambda a, k: a(a, k + 1) ), 1)
```

Adding a condition:

```python
def A(a, k):
    if k < 5:
        return a(a, k + 1) + 1
    else:
        return 0

A(A, 1)

( lambda a, k: a(a, k + 1) + 1 if k < 5 else 0) (( lambda a, k: a(a, k + 1) + 1 if k < 5 else 0), 1)
```

Now, with these investigation, it is much easier for us to complete the original task:

```python
def A(a, k):
    if k > 0:
        return a(a, k - 1) * k
    else:
        return 1

A(A, 5)

( lambda a, k: a(a, k - 1) * k if k > 0 else 1) ( (lambda a, k: a(a, k - 1) * k if k > 0 else 1) , 5)
```

Aligning with the original requirement, we use another function to contain it:

```python
def ANS(t):
    A(A, t)

def A(a, k):
    if k > 0:
        return a(a, k - 1) * k
    else:
        return 1

ANS(5)

(lambda t: ( lambda a, k: a(a, k - 1) * k if k > 0 else 1) ( (lambda a, k: a(a, k - 1) * k if k > 0 else 1) , t)) (5)
```

Function ```A``` is complex and the first call does not need such complex function; hence, we can simpify the expression a little bit by introducing a simple recusion function ```B```:

```python
def ANS(t):
    B(A, t)

def B(a, k):
    a(a, k)

def A(a, k):
    if k > 0:
        return a(a, k - 1) * k
    else:
        return 1

ANS(5)

(lambda t: ( lambda a, k: a(a, k)) ( (lambda a, k: a(a, k - 1) * k if k > 0 else 1) , t)) (5)
```

That's it.
