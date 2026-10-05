# Project structure

This repository is organized to keep the codebase maintainable and easy to navigate.

## Suggested layout
```text
.
├── README.md
├── LICENSE
├── .gitignore
├── .env.example
├── docs/
│   ├── ARCHITECTURE.md
│   ├── SETUP.md
│   └── CONTRIBUTING.md
├── src/
│   ├── app/
│   ├── components/
│   └── services/
├── tests/
├── scripts/
└── config/
```

## Notes
- Keep source code under `src/`.
- Keep operational documentation in `docs/`.
- Keep automation scripts in `scripts/`.
- Keep environment variables out of source control.
