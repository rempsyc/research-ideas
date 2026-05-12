# Research Ideas Garden Plan

## Summary

This repository is now a Quartz-first public research idea garden. The main content lives in `garden/` as Markdown notes. Quartz builds those notes into a searchable, linked, graph-based website at:

```text
https://rempsyc.github.io/research-ideas/
```

Quarto has been removed from the publishing workflow to avoid maintaining two separate site structures.

## Current Architecture

```text
research-ideas/
|-- garden/                 # public Markdown notes
|   |-- index.md             # garden home page
|   |-- maps/                # orientation pages
|   |-- domains/             # topical entry points
|   `-- *.md                 # individual idea notes
|-- quartz-demo/             # vendored Quartz software and config
|-- .github/workflows/       # GitHub Pages publishing workflow
|-- README.md
|-- LICENSE.md
`-- PLAN.md
```

## Workflow

- Add or edit public notes in `garden/`.
- Use wiki-style links such as `[[dream-behavior-and-waking-behavior]]`.
- Use `quartz: true` to publish a note into the Quartz garden.
- Use `quartz: false` for public repo notes that should not appear in the Quartz site.
- Keep private or raw ideas outside the repo, such as in OneNote.

## Note Metadata

Recommended front matter:

```yaml
---
title: Example idea
quartz: true
status: seed | developing | active | paused | archived
maturity: 1-5
tags:
  - example
---
```

## Build And Publishing

Local build:

```powershell
cd quartz-demo
npm ci
npx quartz build -d ../garden -o ../_site
```

GitHub Actions builds the same Quartz site on each push to `main` and deploys `_site/` to GitHub Pages.

## Curation Principles

- Preserve raw inspiration by converting it into public-safe, studyable notes.
- Avoid dumping private reflections directly into the public garden.
- Prefer one focused note per research question or conceptual cluster.
- Use maps and domain notes to create hierarchy without losing the nonlinear graph.
- Keep citations as "key references to organize" until they are ready for a formal bibliography workflow.
