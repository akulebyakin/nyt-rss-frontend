# NYT‑RSS Frontend (React + Vite)

Single‑page app that consumes the backend’s [http://localhost:8080/api/articles/technology](http://localhost:8080/api/articles/technology) endpoint
and shows the NYT Technology headlines with an ENG/ESP translation

Default frontend url: [http://localhost:5173](http://localhost:5173)

---

## Prerequisites

| Tool        | Version         |
|-------------|-----------------|
| **Node.js** | 18 LTS or newer |
| **npm**     | 9.x             |

---

## Install & run (dev)

- Install the application

```bash
cd nyt-rss-frontend
npm install         # grabs React, Vite, Tailwind, i18next
npm run dev         # http://localhost:5173
```

- Open [http://localhost:5173](http://localhost:5173)

---

## Environment variables (optional)

#### Override proxy target if backend isn’t on :8080

```text
VITE_API_BASE_URL=http://api.example.com
```
