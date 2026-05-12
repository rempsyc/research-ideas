---
title: Garden notes README
quartz: false
type: documentation
visibility: public
---

# Garden Notes

This folder is a lightweight Markdown note area for future Quartz-compatible or Obsidian-style workflows.

Quartz is the main published output. Notes in this folder are plain Markdown and may use wiki-style links such as `[[reading-as-intervention]]`.

All content committed here should be public-safe. Private or raw ideas should remain outside this repository.

## Quartz publishing

Notes can control whether they appear in the Quartz site with the `quartz` front matter field:

```yaml
---
title: Example note
quartz: true
---
```

Use `quartz: false` to keep a public note in this folder while excluding it from the Quartz graph. Quartz also excludes notes with `draft: true`.
