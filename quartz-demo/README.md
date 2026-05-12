# Quartz Site

This folder contains the Quartz 4 site generator used to publish the public research ideas garden.

The Markdown files in the repository-level `garden/` folder are the source notes. Quartz builds those notes into the public site deployed under:

```text
https://rempsyc.github.io/research-ideas/
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
