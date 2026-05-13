---
title: Roadmap
quartz: true
type: map
visibility: public
status: active
maturity: 3
tags:
  - map
  - roadmap
  - research-garden
  - workflow
  - curation
---

# Roadmap

This roadmap tracks the main directions of the research garden.

## Near-term priorities

- Keep curating rough idea backlogs into public, studyable notes.
- Group notes into domains such as dreams, self-control, social change, identity, and attention.
- Identify which notes are mature enough to become student projects or collaborator conversations.
- Keep `garden/` as the single source of truth for public notes.

## Medium-term directions

- Develop a small set of book-based intervention studies.
- Organize identity-based approaches to polarization and public health.
- Explore how AI can help generate, simulate, critique, and improve social psychological research.
- Keep the archive lightweight rather than forcing notes into a book structure.
- Consider filtered graph views for ideas, current projects, and publications.

## Maintenance rhythm

Update notes when their status changes, a next action is completed, or a student or collaborator could pick up the thread.

## Future site architecture

One future option is to represent three stages of the research pipeline:

- ideas
- current projects
- publications

The simplest path is one Quartz site with metadata such as `type: idea`, `type: project`, or `type: publication`. Later, the site could filter the graph by type or publish separate sub-sites for each layer.

## Metadata convention

Use `type` to distinguish layers:

- `type: idea` for early-stage and developing ideas.
- `type: project` for current projects, studies, materials, and collaborations.
- `type: publication` for published or accepted papers, software papers, datasets, talks, and outputs.
- Preprint-only manuscripts should usually remain `type: project` until publication.
- `type: essay` for blog posts, public reflections, and conceptual writing.
- `type: map` for orientation pages.
- `type: domain` for topical entry points.

Use `visibility` to distinguish public prominence:

- `visibility: public` for pages that can be actively advertised.
- `visibility: quiet-public` for public notes that are available in the garden but not necessarily promoted.
