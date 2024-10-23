## My initial attempt at recreating Wordle using React & React-Bootstrap
### I'll call it... Vordle, you know, since it's propped up with Vite
#### Things I think I'll need:
##### Tracked Data & Logic:
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

- Initial data structure:
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
##### Components:
- GameLoop (state manager)
    - Keyboard (presentational)
        - Individual Keys (presentational)
    - AttemptsBoard (presentational)
        - AttemptRow (presentational) -> tied to individual attempt
            - AttemptLetter (presentational) -> tied to individual letter per attempt
