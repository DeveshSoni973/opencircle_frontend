# OpenCircle Frontend: Production Roadmap

A WhatsApp-style UI for OpenCircle: group chats where AI agents decide on their own when to speak.
We build it step by step, one phase at a time. Tick a box when it's done.

**Scope:** a private, self-hosted app that each person runs for themselves. There are no accounts, no multi-user features and no public hosting. "Production level" here means polished, robust and easy to run, not multi-tenant.

**Working style:** you write the code and run the commands. Claude explains what to do and reviews.

## Decisions

- [x] Styling: Tailwind v4 (tokens live in CSS variables)
- [x] Palette: own brand color, WhatsApp-style layout only
- [x] Themes: light and dark, following the system setting

## Stack (lean, for a local app)

| Keep | Optional / later |
|---|---|
| Vite, React 19, TypeScript (strict) | Sentry, nginx |
| Tailwind v4 + Radix primitives | Storybook |
| TanStack Query (server data) | i18n |
| Zustand (realtime and UI state) | Hosted CI/CD (a local pre-commit check is enough to start) |
| OpenAPI-generated typed client | |
| Vitest + Testing Library, MSW | |
| Playwright (a few core e2e flows) | |

## Backend gaps to plan for

- There is no auth. That's acceptable for a local app, but keep the backend on `127.0.0.1` (the default) and keep CORS limited to the frontend origin. If someone exposes it to a network, they'd need a reverse proxy or a login in front of it.
- Message history has no pagination.
- The group list has no last-message or unread info, which a WhatsApp-style sidebar wants.
- Replies arrive whole, with no token streaming.
- The backend README mentions SSE, but the code uses WebSocket.

## Roadmap

### Phase 0: Decisions & scaffold
- [ ] Clean the Vite starter (demo `App`, logos, starter CSS)
- [ ] Install Tailwind v4 (`tailwindcss`, `@tailwindcss/vite`) and add the plugin to `vite.config.ts`
- [ ] TypeScript strict mode, path alias (`@/`)
- [ ] Feature-based folder structure (`features/`, `components/`, `lib/`)
- [ ] Env handling (`VITE_API_URL`) and `vite-env.d.ts`
- [ ] ESLint, Prettier, pre-commit hook
- [ ] Vitest set up

### Phase 1: Design tokens
- [ ] Primitive scales: brand, neutral, status
- [ ] Type scale (including chat message and timestamp sizes)
- [ ] Radius, shadow, motion (durations, easing), z-index layers
- [ ] Semantic tokens: surface, text, line, accent, bubble-mine, bubble-agent
- [ ] Agent name colors (8, readable in both themes)
- [ ] Light and dark themes (system default, `data-theme` override)
- [ ] Base styles: focus ring, reduced motion, selection color
- [ ] Token gallery page to check both themes

### Phase 2: Component library
- [ ] Button, IconButton
- [ ] Input, Textarea, Select, Switch
- [ ] Modal / Dialog, Menu, Tooltip
- [ ] Toast
- [ ] Avatar, Skeleton, Badge
- [ ] Chat pieces: Bubble, TypingDots, Composer, ChatListItem

### Phase 3: Data layer
- [ ] OpenAPI to typed client (`openapi-typescript`)
- [ ] TanStack Query provider and API error handling
- [ ] Query hooks: providers, agents, groups, messages
- [ ] WebSocket manager: reconnect with backoff
- [ ] Refetch history after a reconnect
- [ ] Realtime store (Zustand): running groups, connection status

### Phase 4: App shell & routing
- [ ] Router with routes: `/`, `/g/:id`, `/settings`
- [ ] Two-pane layout (sidebar + chat)
- [ ] Mobile single-pane layout
- [ ] Connection status indicator
- [ ] Theme toggle (system / light / dark)

### Phase 5: Features
- [ ] 5a Settings: providers (add, list, delete)
- [ ] 5a Settings: agents (create, edit, delete)
- [ ] 5b Groups: create
- [ ] 5b Groups: edit, members, prompt template
- [ ] 5b Groups: delete
- [ ] 5c Chat: load history
- [ ] 5c Chat: live messages and typing indicator
- [ ] 5c Chat: send with optimistic update
- [ ] 5c Chat: virtualized list, scroll anchoring
- [ ] 5c Chat: safe markdown rendering

### Phase 6: Hardening
- [ ] Error boundaries
- [ ] Empty, loading and error states on every screen
- [ ] Accessibility audit and keyboard navigation
- [ ] Performance: code splitting, bundle budget

### Phase 7: Testing & release
- [ ] Unit and component tests
- [ ] A few Playwright end-to-end flows
- [ ] One-command run (script or docker compose)
- [ ] README with setup steps
- [ ] Ship

## Production checklist (what "production level" needs)

- [ ] Strict TypeScript, typed API client
- [ ] Design tokens with light and dark themes
- [ ] Accessible primitives (Radix or similar)
- [ ] Server state in TanStack Query, realtime state in a small store
- [ ] WebSocket reconnects and resyncs
- [ ] Virtualized message list, optimistic sends, sanitized markdown
- [ ] Error boundaries and every screen state handled
- [ ] Tests: unit, component, e2e
- [ ] Lint, types, tests and build run in a pre-commit check
- [ ] Env config and a one-command run
- [ ] Accessibility and performance pass
