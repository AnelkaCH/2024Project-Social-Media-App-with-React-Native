# Social Media App with React Native 📱

(Note: This project was made in 2024, but I decided to upload it to GitHub in 2026 to keep it safe :D. Also, I have lost a lot of my original assets when transferring data to my new laptop so I will put screenshots of it that I have on my phone of the app. Please let me know.)

I wanted to push myself to the limits, so I tried making a simple social media app, or you can call a 'dupe Instagram LOL.'

This is a React Native social media app with register, login, a photo feed with 'like' and 'unlike', and a profile screen. This is also the first project where I used Redux, which means it was the first time I really had to think about where data lives in an app.

I made this in 2024, and haven't tested it again since. I'm not sure it still runs or not, so I'm sorry if there are any problems.

## What it does

**Auth flow**
- Register screen = validates username, email (regex check), and password, then saves to Redux store
- Login screen = checks input against stored credentials, redirects on success
- Logout = confirmation modal, clears login state and returns to login screen

**Feed**
- Scrollable photo feed loaded from static data
- Like / unlike individual posts = each post tracks its own `likeStatus` independently
- Profile screen shows your stored username, email, and password (read-only)

**Navigation**
- Stack navigator wraps auth screens (Login / Register)
- Bottom tab navigator (Home + Profile) is shown only when logged in
- Navigation switches automatically based on Redux `isLogin` state = no manual redirect needed

## Built with

- React Native (CLI)
- React Navigation
- Redux (`createStore`, `combineReducers`, `useSelector`, `useDispatch`)
- `react-native-elements` 
- `useState`, `useEffect`, `Modal`
- Regex email validation

## Getting started

```bash
npm install
npx react-native run-android
```

## What I learned

The short answer: redux

It was genuinely hard at first, no matter how many times I tried tackling it. The pattern of 'action' to 'reducer' to 'store' to 'component' felt like a lot of extra steps just to store a username. It only started making sense when I thought about it from the problem it solves. The login state needs to be readable in `MainNavigator`, `ProfileScreen`, and `HomeScreen` all at once. Prop-drilling that through three layers of navigation would've been a mess. Redux suddenly made sense.

The `isLogin` flag in Redux controlling which navigator renders was probably the most satisfying thing I figured out in this project. It's honestly really cool.

The per-post like state was also a good logic puzzle. The trick was using `map()` to return a new array where only the tapped post's `likeStatus` was flipped and not all of them. That `if (item.id === id)` check inside `map()` is something I now use instinctively.

## Screenshots

<img width="191" height="328" alt="image" src="https://github.com/user-attachments/assets/9e152efa-f832-4885-a12c-9609509ae4b4" />
<img width="191" height="328" alt="image" src="https://github.com/user-attachments/assets/0c01b587-bcd7-4632-8f7a-a9d0297a50ba" />
<img width="191" height="328" alt="image" src="https://github.com/user-attachments/assets/04a9b49b-e020-4400-92ae-61462a870af6" />

## Notes

- User data is stored in Redux only, meaning no database.
- Post images are loaded from Picsum (random placeholders).
- Built as part of my self-study in mobile development with some guidance from structured learning materials
- Built for Android; iOS not tested

## Acknowledgements

This project was developed as part of a React Native learning course. While some starter files were provided, the application logic, landmark dataset, and overall implementation were developed by me as part of the learning process.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
