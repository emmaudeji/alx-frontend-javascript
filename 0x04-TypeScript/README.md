0x03. ES6 data manipulation
===========================

Resources
---------

**Read or watch**:

-   [Array](https://alx-intranet.hbtn.io/rltoken/KDAVab6oKKsFBXJc2-ll-A "Array")
-   [Typed Array](https://alx-intranet.hbtn.io/rltoken/nhlRl04I3ZqeEP80ZxCeeA "Typed Array")
-   [Set Data Structure](https://alx-intranet.hbtn.io/rltoken/C8x3dhHo0p3uE7S9-EyP9Q "Set Data Structure")
-   [Map Data Structure](https://alx-intranet.hbtn.io/rltoken/XR-ql9v9-PWcXnvTc749gw "Map Data Structure")
-   [WeakMap](https://alx-intranet.hbtn.io/rltoken/NEy8fk2QRytajR8hgXkCog "WeakMap")
- [youtube](https://www.youtube.com/watch?v=XShQO3BvOyM)
- [The Net Ninja React Tutorial Series](https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI)

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://alx-intranet.hbtn.io/rltoken/pHP_gg36nEFY-PHOJeeyYA "explain to anyone"), **without the help of Google**:

-   How to use map, filter and reduce on arrays
-   Typed arrays
-   The Set, Map, and Weak link data structures

Requirements
------------

-   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
-   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
-   All your files should end with a new line
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `js` extension
-   Your code will be tested using `Jest` and the command `npm run test`
-   Your code will be verified against lint using ESLint
-   Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
-   All of your functions must be exported

Setup
-----

### Install NodeJS 12.11.x

(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

```

```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3

```

### Install Jest, Babel, and ESLint

in your project directory:

-   Install Jest using: `npm install --save-dev jest`
-   Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
-   Install ESLint using: `npm install --save-dev eslint`

Configuration files
-------------------

### `package.json`

Click to show/hide file contents

### `babel.config.js`

Click to show/hide file contents

### `.eslintrc.js`

Click to show/hide file contents

### and...

Don't forget to run `$ npm install` when you have the `package.json`

Tasks
-----

### 0\. Basic list of objects

mandatory

Create a function named `getListStudents` that returns an array of objects.

Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

The array contains the following students in order:

-   `Guillaume`, id: `1`, in `San Francisco`
-   `James`, id: `2`, in `Columbia`
-   `Serena`, id: `5`, in `San Francisco`

```
bob@dylan:~$ cat 0-main.js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

bob@dylan:~$
bob@dylan:~$ npm run dev 0-main.js
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `0-get_list_students.js`

 Done? Help Check your code Get a sandbox

### 1\. More mapping

mandatory

Create a function `getListStudentIds` that returns an array of ids from a list of object.

This function is taking one argument which is an array of objects - and this array is the same format as `getListStudents` from the previous task.

If the argument is not an array, the function is returning an empty array.

You must use the `map` function on the array.

```
bob@dylan:~$ cat 1-main.js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));

bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js
[]
[ 1, 2, 5 ]
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `1-get_list_student_ids.js`

 Done? Help Check your code Get a sandbox

### 2\. Filter

mandatory

Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.

It should accept a list of students (from `getListStudents`) and a `city` (string) as parameters.

You must use the `filter` function on the array.

```
bob@dylan:~$ cat 2-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));

bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `2-get_students_by_loc.js`

 Done? Help Check your code Get a sandbox

### 3\. Reduce

mandatory

Create a function `getStudentIdsSum` that returns the sum of all the student ids.

It should accept a list of students (from `getListStudents`) as a parameter.

You must use the `reduce` function on the array.

```
bob@dylan:~$ cat 3-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);

bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js
8
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `3-get_ids_sum.js`

 Done? Help Check your code Get a sandbox

### 4\. Combine

mandatory

Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade

It should accept a list of students (from `getListStudents`), a `city` (String), and `newGrades` (Array of "grade" objects) as parameters.

`newGrades` is an array of objects with this format:

```
  {
    studentId: 31,
    grade: 78,
  }

```

If a student doesn't have grade in `newGrades`, the final grade should be `N/A`.

You must use `filter` and `map` combined.

```
bob@dylan:~$ cat 4-main.js
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));

bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 86
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 'N/A'
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `4-update_grade_by_city.js`

 Done? Help Check your code Get a sandbox

### 5\. Typed Arrays

mandatory

Create a function named `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position.

It should accept three arguments: `length` (Number), `position` (Number), and `value` (Number).

If adding the value is not possible the error `Position outside range` should be thrown.

```
bob@dylan:~$ cat 5-main.js
import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js
DataView {
  byteLength: 10,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
    byteLength: 10
  }
}
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `5-typed_arrays.js`

 Done? Help Check your code Get a sandbox

### 6\. Set data structure

mandatory

Create a function named `setFromArray` that returns a `Set` from an array.

It accepts an argument (Array, of any kind of element).

```
bob@dylan:~$ cat 6-main.js
import setFromArray from "./6-set.js";

console.log(setFromArray([12, 32, 15, 78, 98, 15]));

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js
Set { 12, 32, 15, 78, 98 }
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `6-set.js`

 Done? Help Check your code Get a sandbox

### 7\. More set data structure

mandatory

Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.

It accepts two arguments: a `set` (Set) and an `array` (Array).

```
bob@dylan:~$ cat 7-main.js
import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js
true
false
false
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `7-has_array_values.js`

 Done? Help Check your code Get a sandbox

### 8\. Clean set

mandatory

Create a function named `cleanSet` that returns a string of all the set values that start with a specific string (`startString`).

It accepts two arguments: a `set` (Set) and a `startString` (String).

When a value starts with `startString` you only append the rest of the string. The string contains all the values of the set separated by `-`.

```
bob@dylan:~$ cat 8-main.js
import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js
jovi-aparte-appetit

bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `8-clean_set.js`

 Done? Help Check your code Get a sandbox

### 9\. Map data structure

mandatory

Create a function named `groceriesList` that returns a map of groceries with the following items (name, quantity):

```
Apples, 10
Tomatoes, 10
Pasta, 1
Rice, 1
Banana, 5

```

Result:

```
bob@dylan:~$ cat 9-main.js
import groceriesList from "./9-groceries_list.js";

console.log(groceriesList());

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `9-groceries_list.js`

 Done? Help Check your code Get a sandbox

### 10\. More map data structure

mandatory

Create a function named `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.

It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.

For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error `Cannot process` should be thrown.

```
bob@dylan:~$ cat 10-main.js
import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);

bob@dylan:~$
bob@dylan:~$ npm run dev 10-main.js
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 100,
  'Rice' => 100,
  'Banana' => 5
}
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `10-update_uniq_items.js`

 Done? Help Check your code Get a sandbox

### 11\. Weak link data structure

#advanced

Export a `const` instance of `WeakMap` and name it `weakMap`.

Export a new function named `queryAPI`. It should accept an endpoint argument like so:

```
  {
    protocol: 'http',
    name: 'getUsers',
  }

```

Track within the `weakMap` the number of times `queryAPI` is called for each endpoint.

When the number of queries is >= 5 throw an error with the message `Endpoint load is high`.

```
bob@dylan:~$ cat 100-main.js
import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);

bob@dylan:~$
bob@dylan:~$ npm run dev 100-main.js
1
2
.../100-weak.js:16
    throw new Error('Endpoint load is high');
   ...
bob@dylan:~$

```

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x03-ES6_data_manipulation`
-   File: `100-weak.js`

 Done? Help Check your code Get a sandbox

Copyright © 2022 ALX, All rights reserved.Toggle navigation[](https://alx-intranet.hbtn.io/)

0x04. Typescript
================

JavaScriptTypeScript

-   By Johann Kerbrat, Engineering Manager at Uber Works
-   Weight: 1
-   Ongoing project - started 

    Jun 22, 2022

    , must end by 

    Jun 23, 2022

     - you're done with 0% of tasks.
-   **Manual QA review must be done** (request it when you are done with the project)

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/baea85b5e9a9fb5c36ec.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20220622%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220622T080918Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c95241da1555a5381eb43a02157a2104e7536a655588c845349b2d4b8f6a116f)

Resources
---------

**Read or watch**:

-   [TypeScript in 5 minutes](https://alx-intranet.hbtn.io/rltoken/iRzgJkkaCRQdVlrERbY1Og "TypeScript in 5 minutes")
-   [TypeScript documentation](https://alx-intranet.hbtn.io/rltoken/U2ehqajGPvrABFnDyF0tvQ "TypeScript documentation")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://alx-intranet.hbtn.io/rltoken/4qhNVhVqu7TeC7ucdi01Rw "explain to anyone"), **without the help of Google**:

-   Basic types in Typescript
-   Interfaces, Classes, and functions
-   How to work with the DOM and Typescript
-   Generic types
-   How to use namespaces
-   How to merge declarations
-   How to use an ambient Namespace to import an external library
-   Basic nominal typing with Typescript

Requirements
------------

-   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
-   All your files should end with a new line
-   All your files will be transpiled on Ubuntu 18.04
-   Your TS scripts will be checked with `jest` (version 24.9.* )
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `ts` extension when possible
-   The Typescript compiler should not show any warning or error when compiling your code

Configuration Files
-------------------

Please use these files for the following tasks

### `package.json`

Click to show/hide file contents

### `.eslintrc.js`

Click to show/hide file contents

### `tsconfig.json`

Click to show/hide file contents

### `webpack.config.js`

Click to show/hide file contents

Tasks
-----

### 0\. Creating an interface for a student

mandatory

Copy the following configuration files (provided above) into the `task_0` directory: `package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`

Write your code in the `main.ts` file:

-   Write an interface named Student that accepts the following elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`
-   Create two students, and create an array named `studentsList` containing the two variables
-   Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
-   Each row should contain the first name of the student and the location

Requirements:

-   When running, Webpack should return `No type errors found`.
-   Every variable should use TypeScript when possible.

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x04-TypeScript`
-   File: `task_0/js/main.ts, task_0/package.json, task_0/.eslintrc.js, task_0/tsconfig.json, task_0/webpack.config.js`

 Done? Help Get a sandbox

### 1\. Let's build a Teacher interface

mandatory

Create a directory `task_1` and copy these configuration files into this folder: `package.json`, `tsconfig.json`, `webpack.config.js`

-   `firstName(string)` and `lastName(string)`. These two attributes should only be modifiable when a Teacher is first initialized
-   `fullTimeEmployee(boolean)` this attribute should always be defined
-   `yearsOfExperience(number)` this attribute is optional
-   `location(string)` this attribute should always be defined
-   Add the possibility to add any attribute to the Object like `contract(boolean)` without specifying the name of the attribute

Example:

```
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

```

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x04-TypeScript`
-   File: `task_1/js/main.ts, task_1/webpack.config.js, task_1/tsconfig.json, task_1/package.json`

 Done? Help

### 2\. Extending the Teacher class

mandatory

Write an interface named `Directors` that extends `Teacher`. It requires an attribute named `numberOfReports(number)`

Example:

```
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17

```

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x04-TypeScript`
-   File: `task_1/js/main.ts`

 Done? Help

### 3\. Printing teachers

mandatory

Write a function `printTeacher`:

-   It accepts two arguments `firstName` and `lastName`
-   It returns the first letter of the firstName and the full lastName
-   Example: `printTeacher("John", "Doe") -> J. Doe`

Write an interface for the function named `printTeacherFunction`.

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x04-TypeScript`
-   File: `task_1/js/main.ts`

 Done? Help

### 4\. Writing a class

mandatory

Write a Class named `StudentClass`:

-   The constructor accepts `firstName(string)` and `lastName(string)` arguments
-   The class has a method named `workOnHomework` that return the string `Currently working`
-   The class has a method named `displayName`. It returns the firstName of the student
-   The constructor of the class should be described through an Interface
-   The class should be described through an Interface

Requirements:

-   You can reuse the Webpack configuration from the previous exercise to compile the code.
-   When running `npm run build`, no TypeScript error should be displayed.
-   Every variable should use TypeScript when possible.

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x04-TypeScript`
-   File: `task_1/js/main.ts`

 Done? Help

### 5\. Advanced types Part 1

mandatory

Create the `DirectorInterface` interface with the 3 expected methods:

-   `workFromHome()` returning a string
-   `getCoffeeBreak()` returning a string
-   `workDirectorTasks()` returning a string

Create the `TeacherInterface` interface with the 3 expected methods:

-   `workFromHome()` returning a string
-   `getCoffeeBreak()` returning a string
-   `workTeacherTasks()` returning a string

Create a class `Director` that will implement `DirectorInterface`

-   `workFromHome` should return the string `Working from home`
-   `getToWork` should return the string `Getting a coffee break`
-   `workDirectorTasks` should return the string `Getting to director tasks`

Create a class `Teacher` that will implement `TeacherInterface`

-   `workFromHome` should return the string `Cannot work from home`
-   `getCoffeeBreak` should return the string `Cannot have a break`
-   `workTeacherTasks` should return the string `Getting to work`

Create a function `createEmployee` with the following requirements:

-   It can return either a `Director` or a `Teacher` instance
-   It accepts 1 arguments:
    -   `salary`(either number or string)
-   if `salary` is a number and less than 500 - It should return a new `Teacher`. Otherwise it should return a `Director`

Expected result:

```
console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director

```

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x04-TypeScript`
-   File: `task_2/js/main.ts, task_2/webpack.config.js, task_2/tsconfig.json, task_2/package.json`

 Done? Help

### 6\. Creating functions specific to employees

mandatory

Write a function `isDirector`:

-   it accepts `employee` as an argument
-   it will be used as a type predicate and if the employee is a director

Write a function `executeWork`:

-   it accepts `employee` as an argument
-   if the employee is a Director, it will call `workDirectorTasks`
-   if the employee is a Teacher, it will call `workTeacherTasks`

Expected result:

```
executeWork(createEmployee(200));
Getting to work
executeWork(createEmployee(1000));
Getting to director tasks

```

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x04-TypeScript`
-   File: `task_2/js/main.ts`

 Done? Help

### 7\. String literal types

mandatory

Write a String literal type named `Subjects` allowing a variable to have the value `Math` or `History` only. Write a function named `teachClass`:

-   it takes `todayClass` as an argument
-   it will return the string `Teaching Math` if `todayClass` is `Math`
-   it will return the string `Teaching History` if `todayClass` is `History`

Expected result:

```
teachClass('Math');
Teaching Math
teachClass('History');
Teaching History

```

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x04-TypeScript`
-   File: `task_2/js/main.ts`

 Done? Help Get a sandbox

### 8\. Ambient Namespaces

mandatory

Create a directory called `task_3` and copy these configuration files into it: `package.json`, `webpack.config.js`, `tsconfig.json`.

The first part of will require that you build an `interface` and a `type`. Inside a file named `interface.ts`:

-   Create a type `RowID` and set it equal to `number`
-   Create an interface `RowElement` that contains these 3 fields:
    -   `firstName`: `string`
    -   `lastName`: `string`
    -   `age?`: `number`

You are building the next part of the application architecture. The goal is to save the entities to a database. Because of time constraints, you can't write a connector to the database, and you decided to download a library called `crud.js`. Copy this file into the `task_3/js` directory.

Here it is

```
export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}

```

Write an ambient file within `task_3/js`, named `crud.d.ts` containing the type declarations for each crud function. At the top of the file import `RowID` and `RowElement` from `interface.ts`.

In `main.ts`

-   At the top of the file create a [triple slash directive](https://alx-intranet.hbtn.io/rltoken/B4p_xR_SfvDoTgMInmd5cA "triple slash directive") that includes all the dependencies from `crud.d.ts`
-   Import the `rowID` type and `rowElement` from `interface.ts`
-   Import everything from `crud.js` as `CRUD`

Create an object called `row` with the type `RowElement` with the fields set to these values:

-   `firstName`: `Guillaume`
-   `lastName`: `Salva`

Create a `const` variable named `newRowID` with the type `RowID` and assign the value the `insertRow` command.

Next, create a `const` variable named `updatedRow` with the type `RowElement` and update `row` with an age field set to `23`

Finally, call the `updateRow` and `deleteRow` commands.

Expected result:

```
const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125

```

Requirements:

-   When running `npm run build`, no TypeScript error should be displayed.
-   Every variable should use TypeScript when possible.
-   The main file and the ambient file should both import the types defined in the interface file.
-   You can easily test your ambient file by looking at the intellisense of your IDE when using the 3rd party functions.

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x04-TypeScript`
-   File: `task_3/js/main.ts, task_3/js/interface.ts, task_3/js/crud.d.ts`

 Done? Help

### 9\. Namespace & Declaration merging

mandatory

Create a new directory `task_4` and copy the above `tsconfig.json` and put this `package.json` in there

```
{
  "name": "task_4",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "typescript": "^3.6.4"
  }
}

```

In `task_4/js/subjects`:

-   Create a file `Teacher.ts` and write a `Teacher` interface in a namespace named `Subjects`.

    -   the interface requires `firstName` and `lastName` as string
-   Create a file `Subject.ts` and write a `Subject` class in the same namespace named `Subjects`.

    -   the class has one attribute `teacher` that implements the `Teacher` interface
    -   the class has one setter method `setTeacher` that accepts a `teacher` in argument (and as setter, set the instance attribute `teacher` with it)
-   Create a file `Cpp.ts` and make the following modifications in the same namespace.

    -   Using declaration merging, add a new optional attribute `experienceTeachingC` (number) to the `Teacher` interface
    -   Create a class `Cpp` extending from `Subject`
    -   Write a method named `getRequirements` that will return a string `Here is the list of requirements for Cpp`
    -   Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`
    -   If the teacher doesn't have any experience in teaching C, then the method should return a string `No available teacher`
-   Create a file `React.ts` and write a `React Class` in the same namespace.

    -   Add a new attribute `experienceTeachingReact?` (number) to the `Teacher` interface
    -   In the class, write a method named `getRequirements` that will return a string `Here is the list of requirements for React`
    -   Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`
    -   If the teacher doesn't have any experience in teaching React, then the method should return a string `No available teacher`
-   Create a file `Java.ts` and write a `Java Class` in the same namespace.

    -   Add a new attribute `experienceTeachingJava?` (number) to the `Teacher` interface
    -   In the class, write a method named `getRequirements` that will return a string `Here is the list of requirements for Java`
    -   Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`
    -   If the teacher doesn't have any experience in teaching Java, then the method should return a string `No available teacher`

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x04-TypeScript`
-   File: `task_4/package.json, task_4/tsconfig.json, task_4/js/subjects/Cpp.ts, task_4/js/subjects/Java.ts, task_4/js/subjects/React.ts, task_4/js/subjects/Subject.ts, task_4/js/subjects/Teacher.ts`

 Done? Help

### 10\. Update task_4/js/main.ts

mandatory

-   create and export a constant `cpp` for Cpp Subjects
-   create and export a constant `java` for Java Subjects
-   create and export a constant `react` for React Subjects
-   create and export one Teacher object `cTeacher` with `experienceTeachingC = 10`
-   for Cpp subject, log to the console `C++`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher` and print the strings they return
-   for Java subject, log to the console `Java`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return
-   for React subject, log to the console `React`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x04-TypeScript`
-   File: `task_4/js/main.ts`

 Done? Help

### 11\. Brand convention & Nominal typing

mandatory

Create a directory `task_5` and copy these configuration files into the root of `task_5`: `package.json`, `tsconfig.json`, `webpack.config.js`

Create two interfaces `MajorCredits` and `MinorCredits` in `task_5/js/main.ts`:

-   Each interface defines a number named `credits`
-   Add a brand property to each interface in order to uniquely identify each of them

Create two functions named `sumMajorCredits` and `sumMinorCredits` in `task_5/js/main.ts`:

-   Each function takes two arguments `subject1` and `subject2`
-   `sumMajorCredits` returns `MajorCredits` value and `sumMinorCredits` returns `MinorCredits` value
-   Each function sums the credits of the two subjects

**Repo:**

-   GitHub repository: `alx-frontend-javascript`
-   Directory: `0x04-TypeScript`
-   File: `task_5/js/main.ts, task_5/package.json, task_5/webpack.config.js, task_5/tsconfig.json`

 Done? Help

Ready for a manual review

Copyright © 2022 ALX, All rights reserved.