# 🚀 CONTEFLOW PIPELINE

### AI-Powered Multi-Agent Content Marketing Automation Platform

Transform a single topic into:

* 📝 SEO-Optimized Blog Posts
* 📱 Social Media Content
* 📧 Email Newsletters
* 🔍 Complete SEO Metadata

Built using modern AI orchestration with React, Node.js, Groq LLMs, Supabase, and Langfuse observability.

---

## 🌐 Live Demo

### 🔗 Live Website

[ConteFlow Pipeline Live Demo](https://conteflow-pipeline.vercel.app/)

### 💻 GitHub Repository

[ConteFlow Pipeline Repository](https://github.com/Avi0221/CONTEFLOW-PIPELINE?utm_source=chatgpt.com)

---

# ✨ Features

## 🤖 Multi-Agent AI Pipeline

The platform uses multiple specialized AI agents working together:

| Agent           | Purpose                                         |
| --------------- | ----------------------------------------------- |
| 📝 Blog Agent   | Generates long-form SEO blog articles           |
| 📱 Social Agent | Creates LinkedIn, Twitter/X & Instagram content |
| 📧 Email Agent  | Builds engaging email newsletters               |
| 🔍 SEO Agent    | Generates SEO metadata, FAQs & keyword strategy |

---

## ⚡ Core Capabilities

* AI Blog Generation
* SEO Optimization
* Social Media Automation
* Email Newsletter Creation
* Content Repurposing
* Supabase Database Integration
* Langfuse AI Observability
* Real-time API Pipeline
* Full Stack MERN Architecture
* Responsive Modern UI

---

# 🏗️ Tech Stack

## Frontend

* React.js
* TypeScript
* Vite
* Tailwind CSS
* Axios

## Backend

* Node.js
* Express.js
* TypeScript

## AI & APIs

* Groq SDK
* Llama 3.3 70B
* Langfuse

## Database

* Supabase

## Deployment

* Vercel (Frontend)
* Render / Railway / Node Server

---

# 🧠 System Architecture

```bash
User Input
    ↓
Blog Generation Agent
    ↓
 ┌───────────────┬───────────────┬───────────────┐
 ↓               ↓               ↓
Social Agent   Email Agent     SEO Agent
 ↓               ↓               ↓
Social Posts   Newsletter      SEO Metadata
```
---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Avi0221/CONTEFLOW-PIPELINE.git
cd CONTEFLOW-PIPELINE
```

---

## 2️⃣ Install Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:3001
```

---

## 3️⃣ Install Backend

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:3000
```

---

# 🔑 Environment Variables

Create `.env` file inside backend:

```env
GROQ_API_KEY=your_groq_api_key

LANGFUSE_PUBLIC_KEY=your_langfuse_public_key
LANGFUSE_SECRET_KEY=your_langfuse_secret_key
LANGFUSE_BASE_URL=https://cloud.langfuse.com

SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

# 📡 API Endpoints

## Health Check

```http
GET /api/health
```

---

## Generate Full AI Pipeline

```http
POST /api/pipeline
```

### Request Body

```json
{
  "topic": "AI in Content Marketing",
  "audience": "startup founders",
  "tone": "professional"
}
```

---

## Fetch Previous Runs

```http
GET /api/runs
```

---

# 📂 Project Structure

```bash
CONTEFLOW-PIPELINE/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── server/
│   ├── agents/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   └── config/
│
└── README.md
```

---

# 🧪 Future Improvements

* 🔥 AI Streaming Responses
* 🔐 Authentication
* 📊 Analytics Dashboard
* 🧠 RAG Integration
* 📅 Content Scheduler
* 📤 WordPress Publishing
* 📈 SEO Scoring Engine
* 🎨 Rich Text Editor
* ⚙️ Queue System with BullMQ

---

# 👨‍💻 Author

POD-39 | AiForEveryOne|Training

👥 Group Members
Avinash
Dev Kumar Mahato
Falak Fatima
Himanshu kumar
Hrittika Dey
Nandini Kumari

---

# ⭐ Support

If you found this project helpful:

⭐ Star the repository
🍴 Fork the project
🚀 Contribute to improvements

---

# 📜 License

This project is licensed under the MIT License.
