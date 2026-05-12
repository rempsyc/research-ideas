# Research Ideas

This repository is a public, version-controlled research idea garden maintained by [Rémi Thériault](https://remi-theriault.com/).

The main output is a Quartz digital garden for students, collaborators, and interested readers. The garden organizes public ideas, open questions, methods, and conceptual links as short Markdown notes.

## Workflow

- Quartz is the public research garden.
- The `garden/` folder is the single source of truth for public notes.
- Git commit history provides versioning and timestamps.
- Notes can use wiki-style links, tags, backlinks, and the graph view.
- Public notes should include only shareable material.
- Private or raw ideas should remain outside this repository, such as in personal OneNote.

## Local rendering

Build the garden from the repository root:

```powershell
cd quartz-demo
npm ci
npx quartz build -d ../garden -o ../_site
```

The rendered output goes to `_site/`, which is ignored by Git.

## Publishing

This repository includes a GitHub Actions workflow at `.github/workflows/publish.yml`.

On each push to `main`, the workflow builds the Quartz garden from the `garden/` Markdown notes and publishes the generated `_site/` output to GitHub Pages. In the GitHub repository settings, set Pages to deploy from GitHub Actions.

The public URL should be:

```text
https://rempsyc.github.io/research-ideas/
```

## Adding a garden note

Add public exploratory Markdown notes to `garden/`. Use `quartz: true` in the note front matter to include the note in the Quartz graph, or `quartz: false` to keep it out of the Quartz build.

Example:

```yaml
---
title: Example idea
quartz: true
type: idea
visibility: quiet-public
status: seed
maturity: 2
tags:
  - attention
---
```

Use `type: project` for current project notes, `type: publication` for publication notes, and `type: essay` for blog posts or public reflections. Use `visibility: public` for pages you would actively link from your main website, and `visibility: quiet-public` for public notes that are discoverable but less advertised.

## License

Unless otherwise noted, the written research content in this repository is licensed under the [Creative Commons Attribution 4.0 International License](LICENSE.md).

The `quartz-demo/` folder includes vendored Quartz software code, which is MIT-licensed. That software license is separate from the CC BY 4.0 license for the research notes.
