# MyAccountApp

Mobile Application Development – Practical Tutorial 04: **Data Transfer Between Screens and Form Handling**
(Department of Statistics & Computer Science, University of Kelaniya)

A small Expo / React Native app that walks a user through creating an account across three screens.
It shows how to capture form input, validate it, pass data from one screen to the next with Expo Router,
and go back without losing what was typed.

## What we built

| Screen | File | What it does |
| --- | --- | --- |
| Registration | `src/app/index.tsx` | Form for username, email, phone number, year of birth, password and confirm password |
| Review | `src/app/review.js` | Shows the entered details and the calculated age. **Edit Info** goes back; **Confirm & Submit** continues |
| Success | `src/app/success.js` | Greets the user by name: "Hello, *name*!" |

### Concepts practised

- **`TextInput` + `useState`**: each field is a controlled input stored in local state.
- **Form validation**: `Alert.alert` shows an error if any field is empty, the year of birth isn't a valid
  4-digit year, or the two passwords don't match.
- **Passing parameters**: `router.push({ pathname: '/review', params: { ... } })` sends the data to the next screen.
- **Reading parameters**: `useLocalSearchParams()` reads them on the Review and Success screens.
- **Navigation stack**: `router.back()` on **Edit Info** pops the Review screen, so the Registration form
  still has everything the user typed.
- **Comments**: `//` comments outside the `return` statement and `{/* */}` JSX comments inside it.

### Task 4: Independent practice

1. **Age calculation**: the Registration screen has a "Year of Birth" input. The age is worked out as
   `current year - year of birth`, passed to the Review screen, and shown as `Age: [calculated age]`.
2. **Conditional navigation**: on the Review screen, pressing **Confirm & Submit** with an age under 18 shows an
   Alert ("You must be at least 18 years old to proceed.") and stays on the screen instead of going to Success.

## Running the app

```bash
npm install
npx expo start
```

Scan the QR code with the Expo Go app on an Android phone (or press `a` for an Android emulator).

## Output screens

Screenshots of each screen are in the [`Output_Screens`](Output_Screens) folder.
