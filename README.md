# Grapevine

A React Native mobile app that connects **creators** and **brands** for social media collaborations. Users link their Instagram, TikTok, and YouTube accounts to a unified profile, discover partners, share content, and message each other in real time.

---

## Features

- **Multi-type onboarding** — separate registration flows for Creators, Brands, and Agencies
- **Social feed** — For You and Connected post tabs with likes, comments, and shares
- **Cross-platform content** — share and display Instagram, TikTok, and YouTube content natively
- **Creator & brand discovery** — explore page with filtering, featured users, and leaderboards
- **Real-time messaging** — chat rooms powered by Socket.io
- **Network connections** — OAuth flows for Instagram, TikTok, and Google/YouTube
- **Profile pages** — own and other-user profiles, edit profile, settings
- **Friend system** — send, accept, and ignore connection requests
- **Grapes wallet** — in-app currency system for brand collaborations
- **Activity & notifications** — notification feed and activity history

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React Native 0.68 + Expo SDK 45 |
| Navigation | React Navigation 6 (stack + bottom tabs) |
| State / Data | React Query 3 |
| Forms | Formik + Yup |
| UI Library | NativeBase 3 |
| HTTP | Axios |
| Real-time | Socket.io client |
| Storage | AsyncStorage |
| Auth | JWT (Bearer token) |
| Fonts | Gilroy (via expo-font) |

---

## Getting Started

### Prerequisites

- Node.js 16+
- Yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your device, or an iOS/Android simulator

### Installation

```bash
git clone https://github.com/your-username/grapevine-Instagram.git
cd grapevine-Instagram
yarn install
```

### Environment Variables

This project uses hardcoded API URLs and OAuth credentials in development. Before running, review the values in:

- [`src/API/ci.axios.js`](src/API/ci.axios.js) — backend base URL
- [`src/API/Google/getToken.js`](src/API/Google/getToken.js) — Google OAuth credentials
- [`src/API/Tiktok/getToken.js`](src/API/Tiktok/getToken.js) — TikTok OAuth credentials

Copy `.env.example` to `.env` and fill in your own values, then wire them up via `app.config.js` and `expo-constants` (see [Expo docs on environment variables](https://docs.expo.dev/guides/environment-variables/)).

```bash
cp .env.example .env
```

### Running

```bash
# Start the Expo development server
yarn start

# Or target a specific platform
yarn ios
yarn android
```

Scan the QR code with Expo Go, or press `i` / `a` to open a simulator.

---

## Project Structure

```
grapevine-Instagram/
├── App.js                        # Root component, providers
├── app.json                      # Expo config
├── assets/                       # Images, icons, fonts, logos
└── src/
    ├── API/                      # Raw Axios API calls (grouped by domain)
    ├── AtomComponents/           # Primitive UI building blocks
    ├── MoleculeComponents/       # Composed UI components
    ├── Components/               # Page-level section components
    ├── Pages/
    │   ├── SignedInPages/        # Authenticated screens
    │   └── SignedOutPages/       # Auth & onboarding screens
    ├── Hooks/                    # React Query hooks wrapping API calls
    ├── Navigation/               # Stack, tab, and auth navigators
    ├── Context/                  # React context providers
    ├── Layout/                   # Screen layout wrappers
    ├── Modal/                    # Modal components
    ├── Theme/                    # Theme config and color system
    ├── StaticData/               # Static lookup data
    └── FormValidationSchema/     # Yup validation schemas
```

---

## OAuth Setup

### Instagram
OAuth is proxied through the Grapevine backend (`/instagram/login`). No client-side credentials needed.

### TikTok
Create an app at [TikTok for Developers](https://developers.tiktok.com/) and add your `client_key` and `client_secret` to your environment.

### Google / YouTube
Create OAuth 2.0 credentials at [Google Cloud Console](https://console.cloud.google.com/apis/credentials). Add your `client_id`, `client_secret`, and `redirect_uri` to your environment.

---

## Backend

The app connects to a REST API. The default base URL is configured in [`src/API/ci.axios.js`](src/API/ci.axios.js). A local backend URL is also commented out for development use.

---

## License

MIT
