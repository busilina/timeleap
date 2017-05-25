# timeleap
a javascript library that helps testing date-dependent web applications

# getting started
- let's suppose today [new Date()] is: 10/01/2017
- simulate a whole date (in future or past): timeleap.goto({year: 2018, month: 12, day: 20}) // new Date() -> 20/12/2018
- simulate year and month but keep system day: timeleap.goto({year: 2018, month: 4}) // new Date() -> 10/4/2018
- simulate only year and keep system month and day: timeleap.goto({year: 2018}) // new Date() -> 10/1/2018
- simulate only month and keep system year and day: timeleap.goto({month: 4}) // new Date() -> 10/4/2017
- simulate only day and keep system year and month: timeleap.goto({day: 20}) // new Date() -> 20/1/2017

- stop simulation and go back to system date: timeleap.back();
