# Research Ideas Scaffold Plan

## Summary

This repository will become a public, version-controlled research idea garden. Quarto will remain the primary published output: a clean, navigable research book that can be shared with students, collaborators, and interested readers.

The `garden/` folder will be added as a lightweight Markdown note area that can later be copied into, or adapted for, a Quartz-style digital garden. Quartz itself will not be installed yet. Private or raw ideas will stay outside this repository, such as in personal OneNote.

## Goals

- Keep the repository simple, public-facing, and markdown-first.
- Use Quarto for the polished, shareable research book.
- Organize ideas by status, projects, domains, methods, and open questions.
- Add a reusable idea template with front matter for status, visibility, maturity, tags, and dates.
- Preserve future compatibility with Quartz-style notes without adding extra dependencies.
- Document a practical workflow in the README.

## Planned Structure

```text
research-ideas/
|-- _quarto.yml
|-- index.qmd
|-- roadmap.qmd
|-- active-projects.qmd
|-- open-questions.qmd
|-- collaboration-opportunities.qmd
|-- methods-and-measures.qmd
|-- ideas/
|   |-- index.qmd
|   |-- template.qmd
|   |-- seed-ideas.qmd
|   |-- developing-ideas.qmd
|   `-- mature-ideas.qmd
|-- projects/
|   |-- index.qmd
|   |-- book-interventions.qmd
|   |-- polarization-interventions.qmd
|   `-- ai-simulations.qmd
|-- domains/
|   |-- index.qmd
|   |-- polarization.qmd
|   |-- prosociality.qmd
|   |-- social-identity.qmd
|   |-- contemplative-science.qmd
|   `-- ai-and-society.qmd
|-- garden/
|   |-- README.md
|   |-- narrative-transportation.md
|   |-- common-ingroup-identity.md
|   `-- reading-as-intervention.md
|-- README.md
`-- PLAN.md
```

## Quarto Book Navigation

Update `_quarto.yml` so the book has a clear public structure and turns off chapter numbering. The book should include search, table of contents, clean HTML output, and no unnecessary formats or dependencies.

The initial navigation should include:

- Home
- Roadmap
- Active projects
- Open questions
- Collaboration opportunities
- Methods and measures
- Ideas
- Projects
- Domains
- References, if the bibliography remains useful

Repository links should be added later once the GitHub remote and preferred public URL are settled.

## Public Pages

Replace the default Quarto template pages with concise placeholder pages written for a public academic audience.

Each page should explain what belongs there without sounding like software documentation. Pages should be useful immediately, even before many ideas have been added.

Suggested page roles:

- `index.qmd`: purpose of the public research idea book.
- `roadmap.qmd`: near-term research priorities and possible directions.
- `active-projects.qmd`: ongoing projects suitable for student or collaborator orientation.
- `open-questions.qmd`: unresolved questions that may become studies or papers.
- `collaboration-opportunities.qmd`: ways students or collaborators could get involved.
- `methods-and-measures.qmd`: recurring methodological ideas, measures, datasets, and design notes.

## Idea Template

Add `ideas/template.qmd` with this front matter:

```yaml
---
title:
status: seed | developing | active | paused | archived
visibility: private | shareable | public
maturity: 1-5
tags:
  -
created:
updated:
related:
  -
---
```

The template should include these sections:

```markdown
# Core idea

# Why it matters

# Research question

# Possible study design

# Measures / data

# Collaborators / students

# Risks / limitations

# Next action

# Related ideas
```

The `visibility` field is metadata only. It does not make a public repository private. Any non-public material should remain outside this repository.

## Garden Notes

Add a `garden/` folder for future Quartz-compatible notes. These notes should use plain Markdown rather than QMD.

The garden should:

- Keep notes short and linkable.
- Use wiki-style links where useful, such as `[[reading-as-intervention]]`.
- Avoid depending on Quartz-specific setup for now.
- Serve as a staging area for concepts that may later become polished Quarto pages.

Initial notes:

- `narrative-transportation.md`
- `common-ingroup-identity.md`
- `reading-as-intervention.md`

## README Workflow

Add or update the root `README.md` to explain:

- Quarto is the polished, shareable research book.
- `garden/` is a future-compatible Markdown note area for Quartz or Obsidian-style workflows.
- Git commit history provides versioning and timestamps.
- Public pages should include only shareable material.
- Private/raw ideas should remain in OneNote or another private system.
- Render locally with `quarto render`.

## Test Checklist

After implementation:

- Run `quarto render` from the repository root.
- Confirm the site renders without errors.
- Confirm `_book/` remains ignored and untracked.
- Run `git status --short` and review all source changes.
- Open the rendered book locally and spot-check navigation.
- Confirm no private notes or unintended content were added.

## Constraints

- Do not install Quartz yet.
- Do not add npm, Node, or other unnecessary dependencies.
- Do not overengineer metadata, automation, or publishing.
- Keep the repository easy to read in GitHub, RStudio, and Quarto.
- Keep private research ideas outside this repository.
