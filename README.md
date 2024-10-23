## My initial attempt at recreating Wordle using React & React-Bootstrap
### I'll call it... Vordle, you know, since it's propped up with Vite
#### Things I think I'll need:
##### Tracked Data & Logic:
**Logic**
- Pre-determined 5-letter word the user will guess against
- The user's individual guesses
    - For each guess:
    - Check that they're submitting a valid 5-letter word
        - If not, provide invalid word message
    - Determine if letter is in the word and in the correct spot
        - If letter is in the word:
            - If letter is in the correct spot: Green
            - If letter is in the incorrect spot: Yellow
        - If letter is not in the word: Gray
- The number of user guesses
    - User is only allowed 6 guesses
        - Display the correct word when user does not guess correctly in allotted attempts
**Data**
- Initial data structures:
```js
word = "abcde"; // pulled from Wordnik

guess = [
    {
        letter: string;
        inWord: boolean;
        inCorrectPosition: boolean;
    },
    {
        letter: string;
        inWord: boolean;
        inCorrectPosition: boolean;
    },
    {
        letter: string;
        inWord: boolean;
        inCorrectPosition: boolean;
    },
    {
        letter: string;
        inWord: boolean;
        inCorrectPosition: boolean;
    },
    {
        letter: string;
        inWord: boolean;
        inCorrectPosition: boolean;
    },
]
```

##### Components:
- GameLoop (state manager -- may leave in App component)
    - Keyboard (presentational)
        - Individual Keys (presentational)
    - AttemptsBoard (presentational)
        - AttemptRow (presentational) -> tied to individual attempt
            - AttemptLetter (presentational) -> tied to individual letter per attempt

##### React Tools:
- Hooks
    - useState
    - useContext (for more practice and less prop drilling)
    - useEffect (to fetch a 5-letter word onmount from [Wordnik API](https://developer.wordnik.com/))
- No need for Redux given the small complexity

##### Future Features:
- Allow for page reload without losing progress
- Allow only one word a day
    - Run a github action 12:00am Pacific to get a new word from Wordnik
- Separate out game modes:
    - Reset button to let the user play multiple words a day
    - Traditional (see one-word-a-day above)
- Supporting Returning Users
    - Streaks
    - Statistics
    - Reminders to play


