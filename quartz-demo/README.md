# Quartz Demo

This folder contains a small Quartz 4 sidecar demo for the public research ideas site.

The main Quarto book remains the canonical published site. This demo builds the Markdown files in `quartz-demo/content/` into a graph-oriented Quartz site that is deployed under:

```text
https://rempsyc.github.io/research-ideas/garden-demo/
```

## Local build

```powershell
cd quartz-demo
npm ci
npx quartz build
```

The local Quartz output goes to `quartz-demo/public/`, which is ignored by Git.
