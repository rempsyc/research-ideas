# Research Ideas

This repository is a public, version-controlled research idea garden maintained by [Rémi Thériault](https://remi-theriault.com/).

The main output is a Quarto book for students, collaborators, and interested readers. The book organizes public ideas, active projects, open questions, methods, and collaboration opportunities.

## Workflow

- Quarto is the polished, shareable research book.
- The `garden/` folder is a lightweight Markdown note area that could later be adapted for Quartz or Obsidian-style workflows.
- Git commit history provides versioning and timestamps.
- Public pages should include only shareable material.
- Private or raw ideas should remain outside this repository, such as in personal OneNote.

## Local rendering

Render the book from the repository root:

```powershell
quarto render
```

The rendered output goes to `_book/`, which is ignored by Git.

## Publishing

This repository includes a GitHub Actions workflow at `.github/workflows/publish.yml`.

On each push to `main`, the workflow renders the Quarto book, builds the small Quartz demo into `_book/garden-demo/`, and publishes the generated `_book/` output to GitHub Pages. In the GitHub repository settings, set Pages to deploy from GitHub Actions.

The public URL should be:

```text
https://rempsyc.github.io/research-ideas/
```

The Quartz demo should be available at:

```text
https://rempsyc.github.io/research-ideas/garden-demo/
```

## Adding a public idea

1. Copy `ideas/template.qmd`.
2. Rename the copy with a short, descriptive file name.
3. Fill in the front matter and sections.
4. Add the page to `_quarto.yml` if it should appear in the public book navigation.

## License

Unless otherwise noted, the written content in this repository is licensed under the [Creative Commons Attribution 4.0 International License](LICENSE.md).
