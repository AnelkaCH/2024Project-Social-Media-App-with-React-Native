# Social Media App with React Native

I wanted to push myself to the limits, so I tried making a simple social media app, or you can call a 'dupe Instagram LOL.'

This is a React Native social media app with register, login, a photo feed with 'like' and 'unlike', and a profile screen. This is also the first project where I used Redux, which means it was the first time I really had to think about where data lives in an app.

I made this in 2024, and haven't tested it again since. I'm not sure it still runs or not, so I'm sorry if there are any problems.

---

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

---

## Built with

- React Native (CLI)
- React Navigation — Stack Navigator + Bottom Tab Navigator
- Redux (`createStore`, `combineReducers`, `useSelector`, `useDispatch`)
- `react-native-elements` — icons, modal handling
- `useState`, `useEffect`, `Modal`
- Regex email validation

---

## Getting started

```bash
npm install
npx react-native run-android
```

---

## What I learned

The short answer: redux

It was genuinely hard at first, no matter how many times I tried tackling it. The pattern of 'action' to 'reducer' to 'store' to 'component' felt like a lot of extra steps just to store a username. It only started making sense when I thought about it from the problem it solves. The login state needs to be readable in `MainNavigator`, `ProfileScreen`, and `HomeScreen` all at once. Prop-drilling that through three layers of navigation would've been a mess. Redux suddenly made sense.

The `isLogin` flag in Redux controlling which navigator renders was probably the most satisfying thing I figured out in this project — it means the app just *reacts* to state. Log in, tabs appear. Log out, they disappear. No imperative navigation calls.

The per-post like state was also a good logic puzzle. The trick was using `map()` to return a new array where only the tapped post's `likeStatus` was flipped and not all of them. That `if (item.id === id)` check inside `map()` is something I now use instinctively.

---

## Notes

- User data is stored in Redux only — it does **not** persist if the app is closed and reopened (no database)
- Post images are loaded from Picsum (random placeholders).
- Built as part of my self-study in mobile development with some guidance from structured learning materials
- Built for Android; iOS not tested
