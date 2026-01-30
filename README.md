# ClawAi-King-Booster

## Project Structure
- `apps/web`: Next.js Farcaster + Base Mini App
- `apps/bot`: Clawn / OpenClaw runtime
- `packages/`: Shared packages and mocks

## Bot Installation (Phase 0+0.5: Multi-Provider)
1. Navigate to `apps/bot`.
2. Install dependencies: `npm install` (local fallback mode).
3. Configuration:
   - Copy `.env.example` to `.env.local`
   - `.env.local` pre-filled with multiple provider keys (Gemini, Mistral, Groq, etc.).
4. Run test: `npx ts-node test.ts`
   - Verifies provider rotation and task execution.
