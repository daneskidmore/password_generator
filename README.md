
# Password Generator

## Installation 
----
Deployment: 

GitHub:
___

## Technology Used
* HTML
* CSS
* JavaScript
* GitLab
* GitHub

## Sample Image

----
## Description
This week’s homework project was to use JavaScript to generate a randomn password. Once the button is pressed it prompts user to chose a password length between 8 and 128 characterss. Next the user must confirm if they'd like combinaiton lowercase, uppercase, numeric, and/or special characters. After the user runs through all the prompts a password will be genertated and dispayed on the browser window. The user has the option to press the button again and run through the prompts and issued a new password. 

I created a function to check the requested length to ensure it is within desired range. If the user chooses a number lower than 8 or higher than 128, then the page will prompt the user to pick a new number. 

I  created a function to ensure the user confirmed at minimum one option was chosen in the promtps. If the user choses 'cancel' on all prompts then they will be reprompted to choose at least one type of characters:
```
    function checkForResponse() {
      while(lowerCase === false && upperCase === false && numbers === false && special === false){
        alert("please choose at least one type of character.");
        lowerCase = confirm("Would you like lower case letters?");
        upperCase = confirm("Would you like upper case letters?");
        numbers = confirm("Would you like numbers?");
        special = confirm("Would you liek special characters?");
      };
    };
```

After running through prompts the password will run through a loop to check ff it is missing an element. If it does not, then it will clear the password and loop again until are desired elements are there (case, number, character)
```
  if (lowerCase === true){
    lowerPref = passwordLetters.some(char => checkOptions(char,lowerCharactersArray));
  }else {lowerPref = true}
```

<hr>

## Learnings

I had a hard time with this, and relied on study groups to help me piece this together. I had to use resource time hours to help me with this and found the code to be too commplicated and I'd like to look back and try and simplify down the road. 

<hr>

Copyright (c) 2020 Dane Wesley Skidmore

