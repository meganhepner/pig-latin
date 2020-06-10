FUNCTIONING CODE



# _pig-latin_


#### _starting out with forms, 6.3.20_

#### By _**Megan Hepner, Ruthie Newman**_

## Description


## Setup/Installation Requirements

* use the terminal to clone this repository 
* to clone this content, copy the url provided by the 'clone or download' button in GitHub
* in terminal use the command 'git clone (GitHub url)'
* open the content in a web browser

## Support and contact details

_For question, concerns, or if you would like to make contributions to this work, please contact Megan Hepner_

## Technologies Used

Html, CSS, Bootstrap, JavaScript, JQuery

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program does nothing to non-alphabetical characters** | User input : "3" | Output : "3"|

| **Program adds "way" to single-letter words beginning with a vowel** | User input: "i" | Output: "iway" |

| **Program checks first letter of multi-letter word to see if it's a vowel.** | User Input: "irish" | Output: "true" |

| **If true, add 'way' to the end of the word.** | User Input : "irish" | Output: "irishway" |

| **If the first letter is not a vowel, the program checks to see if the second letter is a vowel.** | Input: "pig" | Output: "true" |

| **If the first letter is not a vowel, the program checks to see if the first letter is a q.** | Input: "quest" | Output: "true" |

| **If the first letter of a multi-letter word is a q, the program checks to see if the second letter is a vowel.** | Input: "quest" | Output: "true" |

| **If the second letter is a vowel, the program checks to see if the second letter is a u.** | Input: "pig" | Output: "true" |

| **If the second letter is a u, the program moves the q along with the u to end of the word and adds  'way'.** | Input: "quest" | Output: "estquway" |

| **If the first letter is not a vowel or a 'q' then the program will search for the first next occurance of a vowel and return the index.** | Input: "string" | Output: "[3]" 

| **The program will the use the index to .slice the consonants up until the first occurance of a vowel.** | Input: "string" | Output: "str" |

| **The program will then take the consonants that have been slice from the beginning of the word and add it to the end.** | Input: "string" | Output: "ingstr" |

| **The program will then add 'ay' to the end of the word, after the consonants** | Input: "string" | Output: "ingstray" |



### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Megan Hepner_**