# Yicong Xu's personal website

Jekyll source for [0cbh0.github.io](https://0cbh0.github.io), covering neuronal differentiation, omics methods, and software and hardware reverse engineering.

## Pages and content

- `index.html` and `_includes/profile_intro.html`: the homepage introduction. `about.md` describes the research and engineering interests.
- `_data/projects.json`: recent project descriptions, GitHub links, topics, and last-update dates. The current selection covers activity from November 10, 2022 to November 10, 2026; update this selection as projects change.
- `resume.md`: the English CV as a web page.
- `static/files/Yicong_Xu_CV.pdf`: the downloadable English CV; replace it when updating the resume.

## Local preview

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Open `http://127.0.0.1:4000/`. To build without starting a server:

```sh
bundle exec jekyll build
```

The Gemfile uses Jekyll 3.10.0 and GitHub Pages-compatible plugin versions. GitHub Pages builds from the repository's configured publishing branch.

## Theme

Based on the [HCZ Material theme](https://github.com/codeasashu/hcz-jekyll-blog), with its original MIT license retained in `LICENSE`.
