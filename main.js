class concept {
    constructor(name, topic, conceptDescription, exampleLink){
        this.name = name;
        this.topic = topic;
        this.description = conceptDescription;
        this.example = exampleLink;
    }
    getName(){
        return this.name;
    }
    getTopic(){
        return this.topic;
    }
    getDescription(){
        return this.description;
    }
    getExample(){
        return this.example;
    }
}

//#####################################################################
//Globals
let concepts = [];
const nav_items = {
    Extra: {
        name:"Extra",
        topic:"Extra",
        description:"The const keyword introduced in ES6 allows developers to define a read-only block scope reference to a variable. This means unlike values defined with the let keyword, const values are immutable and will cause TypeErrors should their values attempt to be changed. Consts must also be initialized upon definition.It's worth noting that when defining a const object, the values of the object properties can be changed. However, using the Object. freeze() method can make the property immutable.",
        example:["Hello", "console.log('fuck off ya cunt')"],
        alt:"n/a"
    },
    Constants: {
        name:"Constants",
        topic:"Constants",
        description:"The const keyword introduced in ES6 allows developers to define a read-only block scope reference to a variable. This means unlike values defined with the let keyword, const values are immutable and will cause TypeErrors should their values attempt to be changed. Consts must also be initialized upon definition.It's worth noting that when defining a const object, the values of the object properties can be changed. However, using the Object. freeze() method can make the property immutable.",
        example:["//Valid declaration","let x = 5;", "//This will cause an Error", "const y;", "//This is Fine","const z=3", "//This will cause TypeError as we cant reassign constants", "z=5"],
        alt:"n/a"
    },
    Block_Scope: {
        name:"Block Scope",
        topic:"Scoping",
        description:"Before ES6 there was only function scope. That is to say that a variable declared outside of a function would have global scope. Variables defined within a block (set of Curley braces {}) were accessible outside the block.ES6 has introduced block-level scoping meaning that anything defined within a block is scoped only with that block. In the example below we can see that the es6 variable declared within the if statement cannot be accessed outside of the if block. The const keyword introduced in ES6 allows developers to define a read-only block scope reference to a variable. This means unlike values defined with the let keyword, const values are immutable and will cause TypeErrors should their values attempt to be changed. Consts must also be initialized upon definition.It's worth noting that when defining a const object, the values of the object properties can be changed. However, using the Object. freeze() method can make the property immutable.",
        example:["function example(){let a=0}","// This will cause a type error as a is being ","//called outside of the code block where it is defined","console.log(a)"],
        alt:"n/a"
    },
    Arrow_Functions: {
        name:"Arrow Functions",
        topic:"Arrow Functions",
        description:"The Arrow syntax has proved one of the more popular ES6 additions. The Arrow Function Expression syntax allows for a more compact alternative to the traditional function expression. It should be noted that Arrow functions do not have their own binding to the 'this' keyword, meaning that when using 'this' in an arrow function, 'this' is targeting global scope. The Arrow syntax has also cleaned up 1 line functions since we can forget the Curley braces (see example 1). Arrow functions have become particularly popular in the use of DOM-level methods such as addEventListener.",
        example:["//Example 1: One line function", "const exampleArrowFunction = () => console.log('Hello World');", "// Example 2 Dom level method declaration", "document.addEventListener('click', ()=>{});"],
        alt:"n/a"
    },
    lexical_this: {
        name:"Lexical This",
        topic:"Arrow Functions",
        description:"Pre-ES6 the convention was that if you wanted to use the 'this' keyword inside a nested function using the outer function as the 'this' context, you would need to assign 'this' to a variable and use the variable. ES6 with the introduction of the arrow syntax offers a convenient alternative. Arrow functions do not have their own 'this' context and instead inherit that of their parent as demonstrated in the blow example.",
        example:["function example(){", "let a = 2;", "//output = 2", "console.log(this.a);"," //output = 2", "let example2 = () => console.log(this.a);"],
        alt:"n/a"
    },
    Default_Parameter_Handling: {
        name:"Default Parameter Handling",
        topic:"Extended Parameter Handling",
        description:"Default values introduced in ES6 allow developers to initialise functions with default values even if arguments are undefined or omitted entirely. The default parameter can take many forms such as a number, string or even another function. See examples for demonstrations of these features.",
        example:["const multiply = (a, b=3) => {return a * b}", "//returns 9", "multiply(2);", "//returns 36", "multiply(12);", "//returns 66", "multiply(33);"],
        alt:"n/a"
    },
    Rest_Parameter: {
        name:"Rest Parameter",
        topic:"Extended Parameter Handling",
        description:"ES6 introduced the 'rest syntax' allows for the implementation of variadic functions, which is a function with an undefined number of parameters passed as an array. The syntax requires three full stops '...' to be placed in front of the arguments (these can only be 1 of these for a function definition), causing all parameters (including user-defined params) to be placed in a standard JavaScript array.",
        example:["function example(...theParams){", "let total = 0;", "for(param of theParams){total+=param;}", "}","const z=3"],
        alt:"n/a"
    },
    Spread_Operator: {
        name:"Spread Operator",
        topic:"Extended Parameter Handling",
        description:"The ES6 Spread syntax introduced a compact way of including all values/elements of an iterable such as an array or object into a list, this list could then be used as a function argument. It's tempting to think the spread is the same as 'rest' but they are closer to opposites! Rest groups all function arguments into a single array argument whilst spread splits an array into individual arguments. There are many handy use cases such as copying an array into a new one or concatenating two arrays.",
        example:["let data = [1, 3, 5];", "const multiply = (a, b, c) => {return a * b}", "function example(...theParams){", "//output = 15","console.log(multiply(...data));", "}"],
        alt:"n/a"
    },
    String_Interpolation: {
        name:"String Interpolation",
        topic:"Template Literals",
        description:"String Interpolation is the process of evaluating a string literal with placeholders such that the placeholders are replaced with custom desired values. Any expression can be placed inside the placeholder such as an operator or function call. These are a very convenient way to create hassle-free customised strings, all we need to do is place our string between a pair of backticks and declare placeholders like so ${placeholder}.",
        example:["let input = 'template literal'", "let string  =`This is a ${input}`", "console.log(string);", "//output: 'This is a template literal'","const z=3"],
        alt:"n/a"
    },
    Raw_String_Access: {
        name:"Raw String Access",
        topic:"Template Literals",
        description:"The String.raw() function is a tag function, to be used on template literals. The function takes a template literal as input and outputs a 'raw string'. In practice, the use cases for this function are extremely few and far between.",
        example:[],
        alt:"n/a"
    },
    Binary_and_Octal_Literals: {
        name:"Binary and Octal Literals",
        topic:"Extended Literals",
        description:"ES6 doesn't offer developers literal forms for binary or octal numbers. Pre-ES6 the parseInt function was needed to process a binary string. With ES6 there is now a way to represent binary values in a literal form. All that is required is the '0b' prefix, for example 0b111 = 111. The same functionality has been given to octal values, using the '0o' prefix.",
        example:["//octal liteal", "let a= 0o543; // 355", "//binary literal", "let b = 0b111; // 7"],
        alt:"n/a"
    },
    Unicode_String: {
        name:"Unicode String",
        topic:"Extended Literal",
        description:"Before ES6 it was only possible to represent Unicode characters with 4 digits, meaning a surrogate pair was required to represent the full Unicode range. ES6 introduces the Unicode string the /u{} syntax can be used to represent the full range of 6 digit Unicode characters.",
        example:["//unicode expression literal for letter z", "let letter_z = '\u{7A}';"],
        alt:"n/a"
    },
    RegExp_Literal: {
        name:"RegExp Literals",
        topic:"Extended Literal",
        description:"In ES5, when using regular expressions it was the convention to call the constructor function of the RegExp Object. ES6 offers an alternative, the regular expression literal, this alternative takes the RegEx pattern between two dashes and will provide a compilation of the expression when the script is loaded if the expression remains constant. This can improve performance.",
        example:["//regular expression literal", "", "const re = /ab+c/;"],
        alt:"n/a"
    },
    RegExp_Sticky_Matching: {
        name:"Regexp Sticky Matching",
        topic:"Enhanced Regular Expressions",
        description:"TThe sticky matching or /y flag as it is sometimes known is a boolean read-only value that indicates if there is a regex matching starting from the index of the last index property. A regex with both /g and /y will ignore /g.",
        example:["const regex1 = new RegExp('foo', 'y');", "regex1.lastIndex = 6;", "//output true", "console.log(regex1.sticky);"],
        alt:"n/a"
    },
    Property_Shorthand: {
        name:"Property Shorthand",
        topic:"Enhanced Object Properties",
        description:"It is common to assign an object property to a variable with the same name as the property itself. ES6 introduced a new shorthand that makes declaring an object that little bit simpler. The property value shorthand syntax automatically converts variables to key values pairs, the key is the passed in the variable name, and the value takes the data held by the passed variable.",
        example:["let x = 5;", "//This will cause an Error", "const y;", "//This is Fine","const z=3", "//This will cause TypeError", "z=5"],
        alt:"n/a"
    },
    Computed_property_Names: {
        name:"Computed Property Names",
        topic:"Enhanced Object Properties",
        description:"The const keyword introduced in ES6 allows developers to define a read-only block scope reference to a variable. This means unlike values defined with the let keyword, const values are immutable and will cause TypeErrors should their values attempt to be changed. Consts must also be initialized upon definition.It's worth noting that when defining a const object, the values of the object properties can be changed. However, using the Object. freeze() method can make the property immutable.",
        example:["let x = 5;", "//This will cause an Error", "const y;", "//This is Fine","const z=3", "//This will cause TypeError", "z=5"],
        alt:"n/a"
    },
    Arry_Matching: {
        name:"Array Matching",
        topic:"Destructuring",
        description:"The const keyword introduced in ES6 allows developers to define a read-only block scope reference to a variable. This means unlike values defined with the let keyword, const values are immutable and will cause TypeErrors should their values attempt to be changed. Consts must also be initialized upon definition.It's worth noting that when defining a const object, the values of the object properties can be changed. However, using the Object. freeze() method can make the property immutable.",
        example:["let FirstName = 'david';", "let age = 22;", "let user = {FirstName: FirstName, age: age};"],
        alt:"n/a"
    },
    Destructuring: {
        name:"Destructuring",
        topic:"Destructuring",
        description:"When destructuring an Object or Array it could be possible that the property/element we are considering is not assigned. We can circumvent an error by setting a default value, meaning the variable will always have an assignment.",
        example:[],
        alt:"n/a"
    },
    Value_Export_and_Import: {
        name:"Value Export and Import",
        topic:"Modules",
        description:"In ES5 the 'require' syntax was the conventional way to indicate module dependency. ES6 introduced Modules and with it the import/export declarations. The Import declaration is used to import read-only live binding which is exported by another module. On the other end, the export declaration is used to create javascript modules so that they can be used by other programs.",
        example:["//import a package", "import express from express;", "//export individual variables", "export let name1, name2;"],
        alt:"n/a"
    },
    Default_and_Wildcard: {
        name:"Default and Wild Card",
        topic:"Modules",
        description:"It is possible to export everything from a module into your program using es6 wildcards which is simply a *. Although these are seldom used in practice and many argue these represent bad Practice.In ES6 Exports can be Named or Default. ES6 introduced default exporting. A default export is where only one value from a file is exported. This is in the form of a class, function or Object.",
        example:["//wildcard import statement", "import * as Foo from './foo';", "//export individual variables", "export let name1, name2;"],
        alt:"n/a"
    },
    Class_Definition: {
        name:"Class Definition",
        topic:"Classes",
        description:"A big addition to ES6 was the class ability to define classes. A class in this context is a blueprint for an object. Whilst we could use objects pre ES6 the syntax was lacking and required lots of repetition to achieve the same functionality. Object classes allow us to define the fields and methods a type of object can have and pass parameters into a constructor. For example, if we wanted to model a user as an object, pre ES6 we would need to define the data fields that a user would have every time we wanted to add a user. In ES6 however, we can define a user blueprint with all the data fields a user would have and then use this blueprint to create as many users as we want.",
        example:["class car {", "constructor(brand, model, price, color){", "this.brand = brand;", "this.model = model;","this.price = price;", "this.color = color;", "}","}"],
        alt:"n/a"
    },
    Class_Inheritance: {
        name:"Class Inheritance",
        topic:"Classes",
        description:"ES6 classes were capable of inheritance right out of the box. The implementation of inheritance closely follows other object-orientated languages like java. Inheritance allows a class to have all the methods of a parent class. To implement this all we need to do is use the extended keyword as in the example bellow.",
        example:["class animal {", "constructor(legs){", "this.legs = legs;", " }","walk(){", "console.log(`Walking`)", "}", "}", "class bird extends animal(){", "constructor(legs){", "super(legs);", "}", "fly(){","console.log(`flying`)", "}", "}", "let bird = new bird();", "bird.walk();", "//output: walking as bird inherits walking method from animal"],
        alt:"n/a"
    },
    Static_members: {
        name:"Static Members",
        topic:"Classes",
        description:"Classes in ES6 permit the use of static methods. Static methods are simply class methods than cannot be called on instances of the class, only the class itself.",
        example:[],
        alt:"n/a"
    },
    Getter_and_Setter: {
        name:"Getters and Setters",
        topic:"Classes",
        description:"The const keyword introduced in ES6 allows developers to define a read-only block scope reference to a variable. This means unlike values defined with the let keyword, const values are immutable and will cause TypeErrors should their values attempt to be changed. Consts must also be initialized upon definition.It's worth noting that when defining a const object, the values of the object properties can be changed. However, using the Object. freeze() method can make the property immutable.",
        example:["class person{", "constructor(name, age){", "this.name = name;", "this.age = age;","}", "getName(){", "return this._name;", "}", "setName(name){", "this.name = name;", "}", "}"],
        alt:"n/a"
    },
    Symbol_Type: {
        name:"Symbol Type",
        topic:"Symbol Type",
        description:"The symbol is a unique and immutable data structure, it's an object whose constructor returns a symbol value which is guaranteed to be unique. One of the primary uses for symbols is to add property keys to an object that will not collide with future keys added to the object.",
        example:["const symbol = Symbol('description')"],
        alt:"n/a"
    },
    Global_symbols: {
        name:"Global Symbols",
        topic:"Symbol Type",
        description:"Es6 allows developers to share symbols globally. If you want to share a symbol the Symbol.for() method should be used.",
        example:["Symbol.for('foo');"],
        alt:"n/a"
    },
    Iterator_and_For_Of_Operator: {
        name:"Iterator / For of Operator",
        topic:"Iterators",
        description:"The For of loop was introduced as a method of iterating over every value of each unique property in the. They can be used on strings, Arrays, Maps and Sets.",
        example:["let numbers = [1,2,3,4];", "for(number of numbers) {", " console.log(number)", "}","//output", "//1", "//2", "//3", "//4"],
        alt:"n/a"
    },
    /*
    Gerator_Function_iterator_Protocol: {
        name:"Generator function Iterator Protocol",
        topic:"Generators",
        description:"Generators are functions that can be stopped during execution and then continue from where it left off. generators typically return an object on which next() can be called, the next will return an object containing a value and a done value which is a boolean value, if done is equal to true then execution of the function will cease and no more values will be returned.",
        example:["let x = 5;", "//This will cause an Error", "const y;", "//This is Fine","const z=3", "//This will cause TypeError", "z=5"],
        alt:"n/a"
    },
    */
    Set_Data_Structure: {
        name:"Set Data-Structure",
        topic:"Map/Set",
        description:"The set is an iterable data structure introduced in Es6 which is very similar to an array, the main difference is that it can't contain duplicate values. Sets are ordered meaning elements in a set are iterated in their inserted order.",
        example:["let myset = new Set();", "let set_data = [1, 2, 2, 3, 3, 4];", "//After loop myset = {1,2,3,4}"],
        alt:"n/a"
    },
    Map_Data_Structure: {
        name:"Map Data-Structure",
        topic:"Map/Set",
        description:"The Map data structure is javascript's implementation of a hashmap. Whilst there is very little difference between a map and a standard object, the map offers a dedicated syntax for traditional hashmap operations which is cleaner to use than the object dot syntax.",
        example:["let mymap = new Map();", "let map_data = ['a', 'b', 'c', 'd', 'e'];", "for(let i=0; i < map_data.length; i++){mymap.set(i, map_data[i])}", "console.log(mymap)", "//output: {a=>1, b=>2, c=>3, d=>4}"],
        alt:"n/a"
    },
    Weak_Map_Data_Structure: {
        name:"Weak Link Data-Structure",
        topic:"Map/Set",
        description:"The Weak Map data structure was added in ES6 alongside the standard Map. The Weak map Shares all the same properties as a standard map, however, the key difference is that the key in a weak map can only be of type object, and values can be any data type. Weak map keys are also weakly referenced and can be subject to garbage collection.",
        example:[],
        alt:"n/a"
    },
    /*
    Typed_Arrays: {
        name:"Typed Arrays",
        topic:"Typed Arrays",
        description:"The const keyword introduced in ES6 allows developers to define a read-only block scope reference to a variable. This means unlike values defined with the let keyword, const values are immutable and will cause TypeErrors should their values attempt to be changed. Consts must also be initialized upon definition.It's worth noting that when defining a const object, the values of the object properties can be changed. However, using the Object. freeze() method can make the property immutable.",
        example:["let x = 5;", "//This will cause an Error", "const y;", "//This is Fine","const z=3", "//This will cause TypeError", "z=5"],
        alt:"n/a"
    },*/
    Object_Property_Assignment: {
        name:"Object Property Assignment",
        topic:"New Built-In-Methods",
        description:"Object.assign() is a method first introduced in ES6. It is used to copy properties from one or more source objects to a target object, it then returns the modified target object.",
        example:["const source1 = {a:1, b:2};", "const source2 = {c:3, d:4};", "let target = {};", "let returned_target = Object.assign(target, source1, source2);", "console.log(returned_target);", "//output {a:1, b:2, c:3, d:4}"],
        alt:"n/a"
    },
    Array_Element_Finding: {
        name:"Array Element Finding",
        topic:"New Built-In-Methods",
        description:"The Array find method is a built-in array function that takes a call back as a parameter and returns the first element in an array where the callback returns a truthy value",
        example:["const data = [2,4,6,8];", "let search = data.find(element => element > 6);", "console.log(search);", "//expected output: 8"],
        alt:"n/a"
    },
    String_Repeating: {
        name:"String Repeating",
        topic:"New Built-In-Methods",
        description:"The repeat string method is used to repeat a given string, the method takes the number of repeats as a parameter and will return the new string containing all the repeats.",
        example:["const message = 'Hello World'", "let repeat_message = message.repeat(10);", "console.log(repeat_message);", "//Ouptput: 'Hello World' repeated 10 times","const z=3"],
        alt:"n/a"
    },
    String_Searching: {
        name:"String Searching",
        topic:"New Built-In-Methods",
        description:"The search method is a string method that takes a regular expression as a parameter and returns the first match between the string and regular expression and -1 if no match is found.",
        example:["let text = 'This is a Sentence!'", "//any character that is not a word or whitespace", "const y;", "const regex = /[^\w\s]/g", "console.log(text.search(regex));", "//Output: 19"],
        alt:"n/a"
    },
    Type_Checking: {
        name:"Type Checking",
        topic:"New Built-In-Methods",
        description:"The typeof operator allows us to check the type of a value. The type returned by typeof will be one of Undefined, String, Number, Object, Symbol, Boolean, Bigint.",
        example:["let x = 5;", "//This will cause an Error", "const y;", "//This is Fine","const z=3", "//This will cause TypeError", "z=5"],
        alt:"n/a"
    },
    /*
    Number_Saftey_Checking: {
        name:"Number Safety Checking",
        topic:"New Built-In-Methods",
        description:"The const keyword introduced in ES6 allows developers to define a read-only block scope reference to a variable. This means unlike values defined with the let keyword, const values are immutable and will cause TypeErrors should their values attempt to be changed. Consts must also be initialized upon definition.It's worth noting that when defining a const object, the values of the object properties can be changed. However, using the Object. freeze() method can make the property immutable.",
        example:["let x = 5;", "//This will cause an Error", "const y;", "//This is Fine","const z=3", "//This will cause TypeError", "z=5"],
        alt:"n/a"
    },
    Number_Comparison: {
        name:"Number Comparison",
        topic:"New Built-In-Methods",
        description:"The const keyword introduced in ES6 allows developers to define a read-only block scope reference to a variable. This means unlike values defined with the let keyword, const values are immutable and will cause TypeErrors should their values attempt to be changed. Consts must also be initialized upon definition.It's worth noting that when defining a const object, the values of the object properties can be changed. However, using the Object. freeze() method can make the property immutable.",
        example:["let x = 5;", "//This will cause an Error", "const y;", "//This is Fine","const z=3", "//This will cause TypeError", "z=5"],
        alt:"n/a"
    },
    */
    Number_Truncation: {
        name:"Number Truncation",
        topic:"New Built-In-Methods",
        description:"The Math.trunc() function was added to give javascript an explicit method of truncation. The .trunc function takes a floating-point number and returns an integer of that same number only without everything following the decimal.",
        example:["let numbers = [22.4, 30.8, 1.9];", "//Output : 22", "console.log(Math.trunc(numbers[0]))", "//Output : 30","console.log(Math.trunc(numbers[1]))", "//Output : 1", "console.log(Math.trunc(numbers[2]))"],
        alt:"n/a"
    },
    Number_Sign_Determination: {
        name:"New Built-In-Methods",
        topic:"New Built-In Methods",
        description:"The Math.sign() function takes a number as input and returns 1, 0 or -1. If the number is positive 1 will be returned. If the number =0 then 0 will be returned and if the number is negative then -1 will be returned.",
        example:["let signs = [30, 0, -45]", "//Output: 1", "console.log(Math.sign(signs[0]))", "//Output: 0", "console.log(Math.sign(signs[1]))", "//Output: -1", "console.log(Math.sign(signs[2]))"],
        alt:"n/a"
    },
    Promise_Usage: {
        name:"Promise Usage",
        topic:"Promises",
        description:"The const keyword introduced in ES6 allows developers to define a read-only block scope reference to a variable. This means unlike values defined with the let keyword, const values are immutable and will cause TypeErrors should their values attempt to be changed. Consts must also be initialized upon definition.It's worth noting that when defining a const object, the values of the object properties can be changed. However, using the Object. freeze() method can make the property immutable.",
        example:["let x = 5;", "//This will cause an Error", "const y;", "//This is Fine","const z=3", "//This will cause TypeError", "z=5"],
        alt:"n/a"
    },
    Promise_Combination: {
        name:"Promise Combination",
        topic:"Promises",
        description:"The const keyword introduced in ES6 allows developers to define a read-only block scope reference to a variable. This means unlike values defined with the let keyword, const values are immutable and will cause TypeErrors should their values attempt to be changed. Consts must also be initialized upon definition.It's worth noting that when defining a const object, the values of the object properties can be changed. However, using the Object. freeze() method can make the property immutable.",
        example:["let x = 5;", "//This will cause an Error", "const y;", "//This is Fine","const z=3", "//This will cause TypeError", "z=5"],
        alt:"n/a"
    },
    Proxying: {
        name:"Proxying",
        topic:"Meta-Programming",
        description:"The const keyword introduced in ES6 allows developers to define a read-only block scope reference to a variable. This means unlike values defined with the let keyword, const values are immutable and will cause TypeErrors should their values attempt to be changed. Consts must also be initialized upon definition.It's worth noting that when defining a const object, the values of the object properties can be changed. However, using the Object. freeze() method can make the property immutable.",
        example:["let x = 5;", "//This will cause an Error", "const y;", "//This is Fine","const z=3", "//This will cause TypeError", "z=5"],
        alt:"n/a"
    },
    Reflection: {
        name:"Reflection",
        topic:"Meta-Programming",
        description:"The const keyword introduced in ES6 allows developers to define a read-only block scope reference to a variable. This means unlike values defined with the let keyword, const values are immutable and will cause TypeErrors should their values attempt to be changed. Consts must also be initialized upon definition.It's worth noting that when defining a const object, the values of the object properties can be changed. However, using the Object. freeze() method can make the property immutable.",
        example:["let x = 5;", "//This will cause an Error", "const y;", "//This is Fine","const z=3", "//This will cause TypeError", "z=5"],
        alt:"n/a"
    },
    Collation: {
        name:"Collation",
        topic:"Internalisation/Localisation",
        description:"The const keyword introduced in ES6 allows developers to define a read-only block scope reference to a variable. This means unlike values defined with the let keyword, const values are immutable and will cause TypeErrors should their values attempt to be changed. Consts must also be initialized upon definition.It's worth noting that when defining a const object, the values of the object properties can be changed. However, using the Object. freeze() method can make the property immutable.",
        example:["let x = 5;", "//This will cause an Error", "const y;", "//This is Fine","const z=3", "//This will cause TypeError", "z=5"],
        alt:"n/a"
    },
    Number_Formatting: {
        name:"Number Formatting",
        topic:"Internalisation/Localisation",
        description:"The const keyword introduced in ES6 allows developers to define a read-only block scope reference to a variable. This means unlike values defined with the let keyword, const values are immutable and will cause TypeErrors should their values attempt to be changed. Consts must also be initialized upon definition.It's worth noting that when defining a const object, the values of the object properties can be changed. However, using the Object. freeze() method can make the property immutable.",
        example:["let x = 5;", "//This will cause an Error", "const y;", "//This is Fine","const z=3", "//This will cause TypeError", "z=5"],
        alt:"n/a"
    },
    Currency_Formatting: {
        name:"Currency Formatting",
        topic:"Internalisation/Localisation",
        description:"The const keyword introduced in ES6 allows developers to define a read-only block scope reference to a variable. This means unlike values defined with the let keyword, const values are immutable and will cause TypeErrors should their values attempt to be changed. Consts must also be initialized upon definition.It's worth noting that when defining a const object, the values of the object properties can be changed. However, using the Object. freeze() method can make the property immutable.",
        example:["let x = 5;", "//This will cause an Error", "const y;", "//This is Fine","const z=3", "//This will cause TypeError", "z=5"],
        alt:"n/a"
    },
    Date_Time_Formatting: {
        name:"Date/Time Formatting",
        topic:"Internalisation/Localisation",
        description:"The const keyword introduced in ES6 allows developers to define a read-only block scope reference to a variable. This means unlike values defined with the let keyword, const values are immutable and will cause TypeErrors should their values attempt to be changed. Consts must also be initialized upon definition.It's worth noting that when defining a const object, the values of the object properties can be changed. However, using the Object. freeze() method can make the property immutable.",
        example:["let x = 5;", "//This will cause an Error", "const y;", "//This is Fine","const z=3", "//This will cause TypeError", "z=5"],
        alt:"n/a"
    },


    

}

//######################################################################
//Event Listeners
generate_nav();
var topicLinks = document.querySelectorAll('.topic');
let description = document.getElementById("description-p");
let topic_heading = document.getElementById("topic");
let concept_heading = document.getElementById("concept");
let example_div = document.getElementById("feature-example");
let test = document.getElementById('test_cunt');
topicLinks.forEach((el)=>{
    el.addEventListener('click', ()=>{
        let innercode = generate_code_example(el.id.replace("_"," "));
        console.log(innercode)
            document.getElementById('example_js').innerHTML = innercode;

        });
    });
    
    let test_data = get_data('Extra');
    /*
    let inner_code = generate_code_example(test_data[1]);
    document.getElementById('example_js').innerHTML = inner_code;
    console.log(inner_code);
    */
//    populate(test_data[1]);
     document.getElementById('example_js').innerHTML= generate_code_example(test_data[1]);
    //console.log(document.getElementById('feature-example'))
//######################################################################
//utility functions

function getProperties(name){
    const url = `data/${name}.json`;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState===4 && request.status==200){
            var properties = JSON.parse(this.responseText);
            console.log(properties);
            return properties;
        }
    }
    request.open('GET', url);
    request.send();
}

function remove_(str){
    return str.replace(/_+/g, ' ');
}

function remove_img(element){
    
    element.removeChild(element.lastChild);
}

function add_img(element, src, alt){
    const img = document.createElement('img');
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
    img.setAttribute("class", "exampleImg");
    element.appendChild(img);
    console.log(img);
    console.log(`alt: ${alt}`);
    console.log(`url: ${url}`);

}

function generate_nav(){
    let nav = document.getElementById('nav');
    let topics = [
    'Constants',
    'Scoping',
    'Arrow Functions',
    'Extended Parameter Handling',
    'Template Literals', 
    'Extended Literals',
    'Enhanced Regular Expressions',
    'Enhanced Object Properties',
    'Destructuring',
    'Modules',
    'Classes',
    'Symbol Type',
    'Iterators',
    'Generators',
    'Map/Set',
    'Typed Arrays',
    'New Built-In-Methods',
    'Promises',
    'Meta-Programming',
    'Internalisation/Localisation'
    ]
    let nav_list = `<ul>`;


    for(let i=0; i<topics.length; i++){
        let topic = create_topic(topics[i]);
        nav_list+=topic;
    }
    nav_list+=`</ul>`;

    let nav_element = document.createElement('div');
    nav_element.innerHTML = nav_list;
    nav.appendChild(nav_element);
}

function create_topic(topic_title){
    let topic = `<li class="outer-list-els">${topic_title}<br><ul class="inner-list-els">`;
    for(key in nav_items){
        if(nav_items[key].topic === `${topic_title}`){
            let item = `<li><button id="${nav_items[key].name.replace(" ", "_")}" class="topic">${nav_items[key].name}</button></li>`;
            topic+=item;
        }
    }
    topic+=`</ul></li>`;
    return topic
}

function append_description(topic_name){
    let description = '';
    let description_element = document.createElement('p');
    for(key in nav_items){
        if(nav_items[key].name===`${topic_name}`){
            description = nav_items[key].description;
            description_element.textContent = description;
        }
    }
    return description_element;
}

function get_data(topic_name){
    console.log(`Given topic name is ${topic_name}`)
    let data = [];
    for(key in nav_items){
        if(nav_items[key].name===`${topic_name}`){
            data[0] = nav_items[key].topic;
            data[1] = nav_items[key].name;
            data[2] = nav_items[key].description;
            data[3] = nav_items[key].example;
        }
    }
    //console.log(data)
    return data;
}

function generate_code_example(topic_name){
    let lines;
    let example='';
    //let example = `<pre><code id=example_js class="language-javascript"></pre></code>`;
    let example_div = document.getElementById("feature-example");
    for(key in nav_items){
        if(nav_items[key].name===`${topic_name}`){
            lines = nav_items[key].example;
            for(let i=0; i< lines.length; i++){
                //console.log(lines[i])
                //console.log(example)
                example+= `${lines[i]}\n`;
                //console.log(example)
            }
            example.replace("undefined", "")
        }
    }
    //example+=`</pre></code>`;
    //example_div.innerHTML = example;
    //console.log(example_div);

    return example;
    
}

