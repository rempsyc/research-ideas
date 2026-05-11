# Quartz Demo

This folder contains a small Quartz 4 sidecar demo for the public research ideas site.

The main Quarto book remains the canonical published site. This demo builds the Markdown files in the repository-level `garden/` folder into a graph-oriented Quartz site that is deployed under:

```text
https://rempsyc.github.io/research-ideas/garden-demo/
```

## Local build

```powershell
cd quartz-demo
npm ci
npx quartz build -d ../garden
```

The local Quartz output goes to `quartz-demo/public/`, which is ignored by Git.

## License note

This folder contains vendored Quartz software code, which is licensed under the MIT License. The research notes and public-facing written content remain covered by the repository's CC BY 4.0 content license unless otherwise noted.
