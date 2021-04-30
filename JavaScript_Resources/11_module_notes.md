# Unit: Visualation - Module 11 (UFO Sightings)
## Create a table to organize UFO data:
	- Stored as JavaScript array (list)
	- Table has ability to:
		- filter data based on criterion
## JavaScript - designed to enhance HTML
	- backbond of many popular visualization libs
	- Plotly
	- Use to create custom dashboards
	- provides high level of customization:
		- dashboards deliver visual data like
		- maps, graphs
	- Utilize HTML and Bootstrap skills

# What You Will Learn
By the end of this module, you will be able to: 

- Explain the strengths and weaknesses of JavaScript "standard" and JavaScript version ES6+.
- Describe JavaScript syntax and ideal use cases.
- Build and deploy JavaScript functions, including built-in functions.
- Convert JavaScript functions to arrow functions.
- Build and deploy forEach (JavaScript for loop).
- Create, populate, and dynamically filter a table using JavaScript and HTML

# 11.0.4
JavaScript, Bootstrap, and UFOs
In this module, you'll build a table using data stored in a JavaScript array. You'll also create filters to make this table fully dynamic, meaning that it will react to user input, and then place the table into an HTML file for easy viewing.

You'll customize your webpage using Bootstrap, and equip your table with several fully functional filters that will allow users to interact with our visualizations. Watch the video to learn more about the specific data project you'll be working on.

## Project Topic:
Writing about topic: UFO
- Javascript file filed with sighting info:
	- countries
	- cities
	- states
	- type of sighting
- Plan: Display Javascript as table
	- manipulate data by adding filters
	- posting article online : put article, table of data to support findings, and filteres to make visualiations come to life

# 11.0.4
JavaScript, Bootstrap, and UFOs
In this module, you'll build a table using data stored in a JavaScript array. You'll also create filters to make this table fully dynamic, meaning that it will react to user input, and then place the table into an HTML file for easy viewing.

You'll customize your webpage using Bootstrap, and equip your table with several fully functional filters that will allow users to interact with our visualizations. Watch the video to learn more about the specific data project you'll be working on.

# 11.1.1
Overview of ES6+
Dana rolls up her sleeves to get to work. Her first step is to learn a bit about JavaScript: What are the functions of this language? What versions are out there? The first thing she discovers is that JavaScript was developed back in 1995, which means it's certainly proved its worth, since it's still so ubiquitous today! Dana also finds out that there was a major update to JavaScript not too long ago, called ECMAScript. She knows that updates are part of every major language—they fix bugs, provide efficiencies, and generally improve things for developers, so she's delighted that there was such a significant update so recently.

Now, dive in and see just what this update does for JavaScript—and for Dana.
ECMAScript. It sounds as alien as the UFOs Dana is researching. She has heard of JavaScript before—it's been around forever—so what is this new term that she's uncovered?

ECMAScript, also referred to as "ES," is a scripting language designed to help standardize JavaScript. This means that ES provides guidelines and rules for JavaScript to follow, such as how a function should be created to run correctly, also known as the proper syntax.

Because ES has provided standardization for JavaScript, it also brings updates to the language. There are updates to every major coding language that fix bugs, update code, and provide overall quality of life improvements for the developers. ES6 is no exception!

There have been many updates to ES over the years, though the sixth update was a major one. You'll probably see "ES6+" mentioned out in the wild pretty often; this is a reference to the "big" update (ES6) as well as the later ones. It's also commonly known as "ES2015" or "ECMAScript 2015." (It was such an important update that it's even known by its year!) There are quite a few different ways to reference this language, but we'll be referring to it as ES6, JavaScript, or JS in this module.



Benefits of the ES6 Update
We've briefly mentioned that the ES6 update was useful, but let's talk a bit more about why it was such a big deal.

Imagine two laptops, one old and one new, side by side. They're similar enough: they're close in size and shape and can complete many of the same tasks, but the newer laptop has an edge. It is faster and can perform tasks with greater efficiency than the older model.

JavaScript after the ES6 update is like the newer computer. This update included many updates to the syntax, which streamlined the code and made it easier to both read and write. Additional, quality of life improvements were implemented as well, such as adding Python-like generators and for...of loops. Even functions were updated and streamlined!

NOTE
for...of loops is a new syntax associated with JavaScript, so it's okay to not be familiar with it yet! We'll discuss this syntax in more detail as we learn more about the language.

Later editions of ECMAScript brought about new additions as well, but they are for more advanced uses of the language. In this module, our focus will be on basic JavaScript and ES6 capabilities such as arrow functions. Both are still used today, and there's a chance you'll come up against older versions of JavaScript during interviews as well.

# 11.1.2
JavaScript in the Real World
While JavaScript is increasingly used in advanced programming and machine learning settings, Dana is curious about it because she's heard it can make websites more functional and dynamic, which she definitely wants her webpage to be. Dana envisions a really cool, interactive dashboard, but she'll have to dig into the details to learn more!
JavaScript is one of the powerhouse languages out in the wild today. While its strength is in creating visually appealing and dynamic content, it is starting to grow into other fields as well. Tensorflow, a popular machine learning tool, even has its own JavaScript library now.

It's pretty easy to start feeling daunted by everything JavaScript can do, so Dana is more interested in examples of similar websites—ones that use filters on lots of data.

Online shopping websites: These are a great example of dynamic content. They contain filters for departments, and then filters for items within those departments. Filters on top of filters!
Ecological data: The National Ecological Observatory Network (NEON) (Links to an external site.) has very large and diverse datasets; these are also displayed on their website as dynamic tables with multiple filters.
Weather data: The National Snow & Ice Data Center (NSIDC) (Links to an external site.) also has very large datasets presented in table format on their website. These tables include filters and parameters that can be applied to their table.

# 11.1.3
Writing JavaScript
While JavaScript is clearly capable of a variety of tasks, Dana plans to start with something a bit more manageable. Instead of building an entire dashboard right away, first she'll create a filterable table to display the data. She decides to dig into the syntax of the language. It's very different from other languages Dana has encountered before, so she wants to be sure she understands the basics before she begins to build anything.
One major component of each coding language is its syntax. For example, Python is a pretty clean and easy-to-read language; there aren't many semicolons, and the indentation and spacing makes sense. SQL, on the other hand, includes semicolons, but it also has guidelines and requirements when it comes to indentation and spacing.

JavaScript is no different: there are guidelines and requirements for writing it. But because JavaScript can be added to an HTML page, there are more guidelines and requirements than for languages that can only live in a .js file or Jupyter notebook such as Python. There are a few important things to remember about JavaScript syntax. We'll start with the following:

Case sensitivity
Semicolons
Statements and expressions
Code blocks
We'll be sure to get in lots of practice so that Dana can feel 100% confident in her skills.

Case Sensitivity
JavaScript is case sensitive. Case sensitivity means that JavaScript considers upper- and lower-case words to be different. For example, if we were to assign the words "data" and "Data" as variables, we would be able to save different information in each word. Of course, actually doing this with the word "data" could lead to confusion pretty quickly. Instead, just remember JavaScript cares about capital letters.

Similarly, JavaScript uses different naming conventions than Python that involve case sensitivity. Different languages utilize different methods to link words without using spaces, which is called a case style.



JavaScript's code style, according to coding guidelines and syntax, is camel case. You'll encounter this case often as you begin to practice your coding. It's especially useful when declaring variables.

NOTE
Camel case is the preferred naming convention in JavaScript. This is especially helpful in cases where Python data is used. For example, we would know that variables named with snake case originated from the Python side of things.

Semicolons
Much like SQL, when coding in JavaScript it's good practice to end statements with a semicolon. Technically, they are optional when it comes to executing your code, but they are helpful because they tell JavaScript that a particular line or block of code is complete. It's considered a best practice to include semicolons throughout your code. You'll encounter many semicolons throughout this module.

Let's use a print statement as an example. In JavaScript, a print statement is called a console log. To print "Hello, world!" to the console, we would use this line:

// Printing a string with JavaScript
console.log("Hello, world!");
NOTE
While the print() function does exist in JavaScript, it will actually try to print to a printer instead of our console.

This statement is almost identical to a basic Python print statement, as shown below.

# Printing a string with Python
print("Hello, world!")
Both methods will print the string (in this case, "Hello, world!"). But in addition to switching "print" with "console.log," in JavaScript, a semicolon has been added at the end of the statement.

Testing Simple Statements
Simple JavaScript statements such as console.log() can be tested using DevTools. For example, follow these steps to test console.log("Hello, world!").

Go to a site like Google (Links to an external site.) and activate your DevTools. This is where we'll access our console; the console is the command line interface tool we'll use to test JavaScript, much like our terminal is used to test Python.

You can use any site to open your DevTools; it isn't a requirement to use the Google search page.

Click the "Console" tab at the top of the screen.

Chrome DevTools open with the Console tab selected

Type console.log("Hello, world!"); on the first line and then press Enter.DevTools tab with the statement console.log("Hello, world!"); executed

The Console tab in DevTools will become a very important tool when we begin to code later on. The Console tab will allow us to see if an error has occurred and, if so, which line of code is causing the disruption.



Statements and Expressions
When describing JavaScript code, the terms "statements" and "expressions" are both used, and often. Here's how to distinguish between the two:

Statements perform actions.
Expressions create values.
Assigning a variable is an example of a statement. Using arithmetic to create a new value is an expression.

Code Blocks
Code blocks, which we will see more often as we start writing functions, are denoted by curly brackets. Code inside the curly brackets are typically indented two to four spaces. This isn't required to run the code, but it does make reading it easier and follows the coding guidelines.

# 11.2.1
JavaScript Components
Now that Dana knows where she'll encounter JavaScript in the wild—as well as some of the key differences between JavaScript and Python—it's time to get down to business. Understanding the basics of a programming language from text is one thing, but putting that understanding into practice is another. Dana is ready to dive in and start working with some of the basic components: variables and lists.
We're going to begin our practice by familiarizing ourselves with some basic JavaScript components: variables and arrays.

Variables
Before ES6 came along, there was a single way to declare a variable: var. You've already worked with variables in Python, but this concept in JavaScript is a bit different. Let's compare a Python variable to a JavaScript variable:

Python	JavaScript
y = 2	var y = 2;
Python's way of assigning a variable is quite simple: type the name of the variable followed by its value: y = 2.

JavaScript is similar, but with two additions: add var before the variable, and then add a semicolon after the value, like this: var y = 2;.



Let's test our JavaScript variable assignment using DevTools. If you still have your console open and ready to go, great! If not, go ahead and bring another up to practice with.

SKILL DRILL
If needed, visit a webpage such as Google (Links to an external site.) and activate your DevTools. Click the Console tab to activate the console. Then do the following:

On the first line, type var y = 2;and press Enter.
On the next line, type console.log(y); and press Enter.
The value of y should print to your console.

Of the many additions that came along with ES6, two more ways to declare variables were also introduced: let and const.

This can be a bit trickier than it seems, because in JavaScript a variable isn't always just a variable. There are specific uses for different variables, and using let and const instead of var helps developers define what the uses are. Let's check them out in more detail.



Create Variables with let
The biggest difference between var and let is that the var declaration is global, meaning it applies to the program instead of being contained in a block of code.

When a developer chooses to use let, it basically means "I might want to use this variable again later to hold different data, but in this code block I'll only use it once." In ES6+, let is typically used in place of var. We'll be using let in this module, but both are encountered out in the wild.

Create Variables with const
The const declaration is more specific than let. Instead of being contained within a block of code, const tells JavaScript that the variable won't be reassigned or redeclared, either in a block of code or within the program as a whole. The following table highlights the key differences of var, let, and const:

Least specific	var	Variable used in entire program
let	Variable used in a code block
Most specific	const	Variable used once
Now that we've discovered three different ways to declare variables in JavaScript, let's take a look at arrays.

Arrays
When coding in Python, data can be grouped together in a list. The same is true of JavaScript. In fact, Dana was inspired to learn JavaScript because the data is already stored in a JavaScript array! Let's take a look at the data to see what we're working with. Start by downloading the JavaScript file below:

Download data.js (Links to an external site.)

GITHUB
This data.js file is a large part of this project. Save it in the new repository you cloned to your computer.

When you open the file, you'll see that it contains a lot of data. Look at the construction of this array.

First, the name of the array, data, is declared with var:

var data = [
The structure of the array begins much like a Python list: with a square bracket. But the data inside is arranged a bit differently.

Each entry is inside the square brackets, like a Python list. That's where the similarities begin to taper off.

In this particular JavaScript array, we're not recording a single item and moving on to the next, much like a simple list (such as [1, 2, 3]). However, here we're recording an entire event: date, location, type, and even comments are saved inside a single array. Not only that, but multiple events are recorded. Because we have so much information, the array looks more like a Python dictionary than a simple Python list. Take a look at the example below:

  {
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  },
Within a set of curly brackets, we can see the key-value pairs such as the date, city, and state.

While this looks somewhat similar to a Python dictionary, there is one key difference. Scroll to the last link of the data file and see if you can spot the difference. You can use keyboard shortcuts to reach the bottom quickly, instead of scrolling through the whole file.



There's a lot going on in this file: for Dana's article to be a success, she will need to make these sightings easier for people to visually parse by converting them from their current state, a JavaScript array, into an HTML table.



Convert the Array to a Table
To convert the array to a table, we're going to take the following code and turn it into the table shown below:

The transition of data from JavaScript array to an HTML table

The first step in transitioning the data from an array to a table is to create the appropriate variables using var, let, or const. Open VS Code and create a file in our repo folder named app.js. This is where we'll keep the code that builds the HTML table and fills it with data from data.js.

# 11.2.2
Organize Your Repository
Dana has started to get into a JavaScript coding rhythm. But before she begins to create code for real and then commit scripts to her repo, she needs to organize it.

Building a page that contains JavaScript will require Dana to link additional JavaScript files to the index.html file that she'll be working on later. This means keeping track of multiple things at once: an HTML file, JavaScript files, images (for customizing the webpage) and a CSS style sheet. Therefore, it's a good idea for Dana to establish a solid folder structure now instead of when she's elbow deep in creating her JavaScript functions.
Before we get too far along with our coding, we need to set up a file organization system for our repo. The end result of this project will be an HTML page or application, so we need to establish the proper folder structure accordingly. At a high level, here's what we'll do:

Create the index.html file.
Create a subfolder to hold the CSS file (style.css).
Create a subfolder for images.
Create a subfolder to hold JavaScript.
First, in the repo folder we established earlier ("UFOs"), create the index.htmlfile. This file is the window to our work: the table and Dana's article summary (along with titles and filters) will all be displayed through this file. We won't be coding it yet—that will come later—but we're creating it now so that it will be ready for us when it's time to build the page.

Next, create a subfolder in the repo folder named "static." This static folder will hold our static CSS file; this only means that it isn't being moved or altered externally. In VS code, right-click the menu and select "New Folder," and then name it "static."

Inside the static folder, create another subfolder named "css" to hold the style.css file. You can use the same right-click method to bring up the creation menu, but this time select "New File." We'll customize our webpage using the style.css sheet, but for now we can leave it blank. Here's what the folder structure should look like so far when viewing it in VS Code.

Folder structure of the new UFO repo, currently shown with a static folder and css subfolder, with a style.css file inside it, and app.js, data.js, and index.html files in the main UFO folder.

The next subfolder we'll create is our "static" folder to hold whatever images we want to add to our website when it's time to customize it. Create the folder now and name it "images." But for now, move on to the next step—we'll add images later.

The third and final subfolder we'll create is one to hold our JavaScript. Name the folder "js" and move the data.js andapp.jsfiles into it so that your folder structure looks like this:

The final structure of the UFO repo folder containing an index.html file in the main folder, a static subfolder with css, images, and js subfolders, and style.css, app.js, and data.js files in their respective folders.

Establishing this folder structure is a best practice when creating webpages with JavaScript. It's important to keep things organized when creating a webpage using JavaScript components, as there are even more moving pieces than a static website. We'll be linking to images and a style sheet as well as JavaScript scripts. The organization presented here provides clearly designated spots to store the code we'll be working on, making it easier to locate them as we go.