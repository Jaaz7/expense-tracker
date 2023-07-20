# Expense Tracker

Expense Tracker is an application that helps to keep an accurate record of your money inflow and outflow.<br>
Users can utilize it to see their transactions and have a better understanding of one's financial situation: how much was spent, how much was earned and what's the total balance.
<br>
<br>
<img src="https://github.com/Jaaz7/expense-tracker/assets/130407877/abf90895-24f9-43c1-96b5-37353c86fcae" width=90% height=90%>
<br>
## Wireframes
- **Planning the project**<br><br>
  - This is the inception of the idea, I ended up adding more and tweaked around with the design for a better user experience. An expense tracker app wouldn't be good without clear instructions of what's an expense and what's an income, putting a minus symbol in front of the amount to indicate an expense is not an optimal user experience so I quickly worked to change that.
   - <img src="https://github.com/Jaaz7/expense-tracker/assets/130407877/4ea85572-ec9f-4d5a-8714-60946bcfa3b9" width=90% height=90%>

## Features
- **The Toggle Button**
  - This button has two functionalities, to choose between expense or income.
  - It allows for an easy and interactive choice from the user when entering a new value.
  - Either choice when selected and submitted will pass the nature of the transaction to the table row.
  - Either choice when selected and submitted will do the math on the application header.
  - Improved user experience with setting the focus: each time the toggle button is clicked the name input will be automatically focused.
  - <img src="https://github.com/Jaaz7/expense-tracker/assets/130407877/f117cc93-ba50-4155-8e82-b00870095404" width=30% height=30%>

- **The Submit Button**
  - The form only allows submission when all the inputs are correctly filled.
  - Once a value is added and the button submitted, it will create a row with the transaction's clear information.
  - It will also accurately add or subtract the numbers in the header: total, income and expense.
  - Improved user experience with setting the focus: the name input gets focused each time a new value is submitted.
  - <img src="https://github.com/Jaaz7/expense-tracker/assets/130407877/02fde726-28d2-4ae8-925c-8f9a06f9e926" width=10% height=10%>

- **The Delete Button**
  - Once a value is added, a new row will appear with a delete button at the end, when clicked this button will delete the respective row.
  - The button also accurately updates the number in the header with the respective deleted value.
  - Improved user experience with setting the focus: the name input gets focused each time a new value is deleted.
  - <img src="https://github.com/Jaaz7/expense-tracker/assets/130407877/7e82752b-14d0-45cd-90de-2ca785a9f671" width=70% height=70%>
 
- **Responsiveness**
  - The website was tested on several devices and it shows full responsiveness whether seen on PC, tablet or mobile devices.
  - A new delete button was added for small viewport width devices.
  - <img src="https://github.com/Jaaz7/expense-tracker/assets/130407877/2187c8e3-e69b-48b2-b846-267f9933ed2d" width=40% height=40%>
 

## Features left to Implement
- A counter to see the number of transactions currently visible.

## Testing

  ### Bugs<br>
  - I had in mind that I'd use a javascript 'for loop' to add and delete rows but it never really worked out as intended, so I replaced it with template literals instead.
  - Total number would appear with 10+ decimals sometimes like this "20.000000000003", so I limited the input to maximum two decimals.
  - Text inside of the "name" td in the row would overflow, fixed that with overflow-wrap in CSS so the text continues below.
  - Small delete button for small vewports wasn't deleting the row, fixed it with a "||" symbol inside the if statement to acknowledge both buttons and erased the 'switch' condition I previously had.
  - Fixed a bug where the input value was resetting after inserting a period mark.

### Unfixed Bugs
  - No unfixed bugs.

### Validator Testing
  - The website passed within the following validating websites:
    <br><br>
    - HTML<br>
    - No errors were returned when passing through the [W3 validator](https://validator.w3.org/nu/).<br><br>
    - CSS<br>
    - No errors were found when passing through [Jigsaw](https://jigsaw.w3.org/css-validator/).<br><br>
    - Javascript
    - No errors were found when passing through [jshint](https://jshint.com/).<br><br>
        
## Deployment

- **The site was deployed to GitHub pages. The steps to deploy are as follows:**<br><br>
  - In the Github repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Main Branch
  - Once the Main Branch has been selected, the page provided the link to the completed website.
  - The live link can be found here - https://jaaz7.github.io/expense-tracker/

## Credits
- I used some ideas from [this](https://www.youtube.com/watch?v=vkqZC_rEkVA) tutorial for adding/deleting the rows.
- Most of the javascript ideas / bug fixing were tackled by reviewing the 'Love-Maths' project's code.
- Special thanks to my colleagues for all the help provided in slack.
- Special thanks to the tutors at Code Institute for all the help provided.
- Special thanks to my mentor for helping me grow with this project. 

## Media
Link to the image source:
- [Background image](https://www.freepik.com/free-vector/piggy-bank-with-gold-coins-3d-cartoon-style-icon-saving-investing-accumulating-money-flat-vector-illustration-income-finance-banking-wealth-currency-concept_29119345.htm#page=2&query=piggy&position=38&from_view=search&track=sph)