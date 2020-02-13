# Dynamic Port - Node.js Homework

Command line program that takes user data and dynamically creates a PDF Github portfolio.


## How it Runs

User starts by entering their github profile name, followed by their favorite color.
A user can't choose white as a color, because the text used in the portfolio is white.
A few async functions fire off - one that makes and API call to Github and one that
grabs the userdata entered. 


![Image 1](/assets/scrn1.png)
##### (Basic example of input)


Using the user and API data from Github, the JS generates an HTML template literal and
writes a new index.html file. Then using NPM Puppeteer, the index.html is thrown into 
the default browser, a screenshot is taken, then Puppeteer writes a PDF file in A4 format.
We have ourselves a portfolio!


![Image 2](/assets/scrn2.png)
##### (index.html and portfolio.pdf will be written to directory)


Here's what it looks like. Using puppeteer, we're able to link a seperate .css stylesheet
in the HTML template literal. So we can still style in a CSS spreadsheet without building
a giant HTML template in our JS. 


![Image 3](/assets/scrn3.png)
##### (Portfolio generate by Dynamic Port app)


Now let's assume a user goes rogue and decides their favorite color is white. Austen enters
white as a color - will it generate a fully white portfolio?


![Image 3](/assets/scrn4.png)
->##### (Portfolio generated by entering 'white')<-


Thankfully, there's an *if* function that looks for that. It will default the background
of the portfolio to lightblue - a very pleasant color for a professional portfolio.
