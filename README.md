# opencircle_frontend

A minimal test UI for the OpenCircle backend: one `index.html`, no build step.

## Run

1. Start the backend (from `opencircle_backend`):
   ```bash
   uv run dev
   ```
2. Serve this folder on port 5173 (the port the backend allows via CORS):
   ```bash
   python -m http.server 5173
   ```
3. Open http://localhost:5173

## Use

1. **Setup → Providers**: add your Groq key (`provider: groq`). Add more keys as separate providers if you want.
2. **Setup → Agents**: one agent per model, e.g. `GPT-OSS` → `openai/gpt-oss-120b`, `Qwen` → `qwen/qwen3.8-27b`.
   The model field suggests Groq models (as of Oct 2026) but accepts any id. Groq retires models often; if an
   agent never replies, check https://console.groq.com/docs/models and https://console.groq.com/docs/deprecations.
3. **Setup → Groups**: pick a prompt style and tick the agents.
4. **Chat**: open the group and send a message. Replies appear as each agent finishes.
   You can send again while agents are still replying: it joins the same conversation.

The top-right field is the backend URL (default `http://127.0.0.1:8000`). Using a different frontend port?
Set `CORS_ORIGINS=http://localhost:<port>` in the backend's `.env`.

Silent turns and agent errors are stored in the DB but not shown here. If an agent stays quiet every time,
its model id or key is probably wrong.
