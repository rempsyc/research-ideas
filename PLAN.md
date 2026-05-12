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
|   |-- ideas/               # individual idea notes
|   |-- maps/                # orientation pages
|   |-- domains/             # topical entry points
|   |-- essays/              # blog posts and public reflections
|   |-- projects/            # current project notes
|   |-- publications/        # publication notes
|   `-- README.md            # note workflow documentation
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

## Future Architecture Question

Consider whether the garden should eventually distinguish three public knowledge layers:

1. **Ideas**: early-stage and developing notes.
2. **Projects**: current studies, collaborations, materials, and project roadmaps.
3. **Publications**: published papers, preprints, datasets, talks, and related outputs.
4. **Essays**: blog posts, public reflections, and conceptual writing.

There are at least three possible architectures:

- **Single Quartz site, one graph**: simplest to maintain; tags and folders distinguish `ideas`, `projects`, and `publications`, while the graph shows all cross-stage links.
- **Single Quartz site, filtered sections**: one website with separate entry points and potentially custom graph/filter behavior for ideas, projects, and publications.
- **Multiple Quartz builds**: separate sites or subpaths, such as `/ideas/`, `/projects/`, and `/publications/`, each with its own graph and public-facing emphasis.

The likely best next experiment is to keep one Quartz site for now, but add type metadata to notes:

```yaml
type: idea | project | publication | essay
visibility: public | quiet-public | private
```

This would allow future filtering without splitting the repository too early. Publications could later become the most publicly advertised layer and be linked from the official website, while ideas and current projects could remain public but less prominently advertised.
