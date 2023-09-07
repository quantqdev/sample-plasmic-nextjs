### Commands

```bash
pnpm dlx create-plasmic-app@latest
pnpm dev
plasmic sync
```

### Notes

- Synchronizing does not delete old pages after renaming
- Hosted components must use name export
- Integrations are proxied by Plasmic BE, local server should use ngrok (set headers `ngrok-skip-browser-warning=1`, `client=Plasmic`)