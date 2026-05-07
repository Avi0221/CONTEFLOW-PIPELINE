# ai-content-pipeline

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run hello
```

To run the API server:

```bash
bun run start
```

Create a local `.env` file before running any agent or server commands:

```bash
GROQ_API_KEY=your_groq_api_key
LANGFUSE_PUBLIC_KEY=your_langfuse_public_key
LANGFUSE_SECRET_KEY=your_langfuse_secret_key
LANGFUSE_BASE_URL=https://us.cloud.langfuse.com
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

API endpoints after the server starts:

```bash
GET  http://localhost:3000/health
GET  http://localhost:3000/runs
POST http://localhost:3000/pipeline
```

This project was created using `bun init` in bun v1.3.13. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
