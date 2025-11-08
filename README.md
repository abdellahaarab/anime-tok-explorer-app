

# 🎬 Anime Explorer (أنمي توك)

A modern **Anime Explorer Web App** built with **HTML**, **CSS**, and **Vanilla JavaScript** — powered by the **Jikan API** (unofficial MyAnimeList API).  
Browse, search, and explore anime effortlessly with a clean, responsive, and bilingual interface (Arabic & English).


----------

## 🌟 Features

✅ **Live Anime Data:** Fetches anime details dynamically from the [Jikan API](https://jikan.moe/).  
✅ **Responsive Design:** Works smoothly on desktop and mobile devices.  
✅ **Dark / Light Mode Toggle:** Switch between elegant light and dark themes.  
✅ **Pagination Support:** Navigate through multiple pages of anime results.  
✅ **RTL Arabic Layout:** Fully localized right-to-left interface for Arabic users.  
✅ **Simple & Fast:** Built with plain HTML, CSS, and JavaScript — no frameworks needed.

----------

## 🧱 Project Structure

```
anime-tok-explorer-app/
│
├── index.html          # Main Anime Explorer page
├── video.html          # Anime episodes / videos page (placeholder)
├── faq.html            # FAQ page
├── details.html        # Anime details (optional)
├── styles/
│   └── style.css       # Additional CSS styling
└── images/
    └── 1337369.png     # Hero background image

```

----------

## 🖼️ Preview

![IMAGE](https://raw.githubusercontent.com/abdellahaarab/anime-tok-explorer-app/refs/heads/main/images/1262882.jpg)


----------

## ⚙️ How It Works

1.  On page load, the app fetches anime data from the **Jikan API**:
    
    ```javascript
    const apiBase = "https://api.jikan.moe/v4/anime";
    fetch(`${apiBase}?page=1`)
    
    ```
    
2.  It displays a **grid of anime cards** including:
    
    -   Title
        
    -   Type (TV, Movie, OVA...)
        
    -   Number of episodes
        
    -   Rating (⭐ Score)
        
3.  You can navigate between pages using “Next” and “Previous” buttons.
    
4.  Toggle **Dark Mode 🌙 / Light Mode ☀️** using the button in the top navbar.
    

----------

## 💡 Example API Response (Jikan)

```json
{
  "data": [
    {
      "mal_id": 1,
      "title": "Cowboy Bebop",
      "episodes": 26,
      "type": "TV",
      "score": 8.75,
      "images": { "jpg": { "image_url": "https://cdn.myanimelist.net/images/anime/4/19644.jpg" } }
    }
  ]
}

```

----------

## 🧠 Technologies Used

Technology

Purpose

**HTML5**

Structure and layout

**CSS3**

Custom styling and transitions

**Vanilla JavaScript (ES6)**

Dynamic data fetching and UI updates

**Jikan API**

Fetches anime information (MyAnimeList open API)

----------

## 🪄 Key UI Elements

### 🧭 Navigation Bar

Fixed top navbar with links:

-   **Home (الرئيسية)**
    
-   **Episodes (الحلقات)**
    
-   **FAQ (الأسئلة الشائعة)**
    
-   **Dark/Light Mode Toggle**
    

### 🦸‍♂️ Hero Section

A welcoming section with a background image (`images/1337369.png`) and overlay text:

> "مرحباً بك في مستكشف الأنمي – اكتشف عالماً واسعاً من الأنمي المميز عبر واجهة Jikan المفتوحة"

### 🧩 Anime Grid

Dynamic cards generated using JavaScript with hover animation, title, and rating.

### 📄 Pagination

Next/Previous buttons for navigating API pages.

----------

## 🧰 How to Run Locally

1.  **Download or clone** this repository:
    
    ```bash
    git clone https://github.com/abdellahaarab/anime-tok-explorer-app.git
    cd anime-tok-explorer-app
    
    ```
    
2.  Open `index.html` in your browser — no server setup required!  
    _(Optionally, you can use VS Code’s “Live Server” extension for auto-refresh.)_
    

----------

## 🌐 Deployment

You can easily host this project for free using:

Platform

URL

**GitHub Pages**

Upload your project → Settings → Pages → Deploy from main branch

**Netlify**

Drag and drop your folder

**Vercel**

`vercel deploy` (automatically detects static site)

----------

## 🧩 Future Improvements

-   🔍 Add a search bar for anime titles
    
-   📱 Improve mobile responsiveness
    
-   🗂️ Add category filters (genre, rating, year)
    
-   💬 Add language switcher (Arabic ↔ English)
    

----------

## 📜 License

This project is open source and available under the **MIT License**.  
Feel free to use, modify, or improve it with proper credit.

----------

## 👨‍💻 Author

**DKN4 Hackers**  
🎥 YouTube: [@dkn4.hackers](https://www.youtube.com/@dkn4.hackers)  
💡 Developer | Content Creator | Tech Enthusiast


