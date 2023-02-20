# Infer version

Infer a project's version from its configuration files.

## Status

| Source     | Shields                                                                |
| ---------- | ---------------------------------------------------------------------- |
| Project    | ![latest_release] ![license] ![line_count] ![language_count]           |
| Health     | ![documentation] ![review_action] ![codacy_quality] ![codacy_coverage] |
| Publishers | ![npm_version] ![npm_downloads]                                        |
| Repository | ![open_issues] ![closed_issues] ![open_pulls] ![closed_pulls]          |
| Activity   | ![contributors] ![monthly_commits] ![last_commit]                      |

## Installation

```bash
npm i infer-version
```

## Usage

```ts
import { version } from "infer-version";

version(".");

// Example output: "1.0.0"
// If there are no configuration files: null
```

## Tests

To run tests:

```bash
nps test
```

## Documentation

This repository's documentation is hosted on [Read the Docs](https://infer-version.readthedocs.io/en/latest).

To generate the documentation locally:

```bash
quickdocs
```

## Linters

To run linters:

```bash
nps lint
```

## Formatters

To run formatters:

```bash
nps format
```

## Continuous integration

This repository uses GitHub Actions to lint and test each commit. Each commit should be formatted and its corresponding documentation should be updated.

## Versioning

This repository adheres to semantic versioning standards. For more information on semantic versioning visit [semver](https://semver.org).

Bump2version is used to version and tag changes. For example:

```bash
bump2version patch
```

## Changelog

Please read this repository's [changelog](CHANGELOG.md) for details on changes that have been made.

## Contributing

Please read this repository's guidelines on [contributing](CONTRIBUTING.md) for details on the process for submitting pull requests. Moreover, our [code of conduct](CODE_OF_CONDUCT.md) declares our collaboration standards.

## Contributors

- [Joel Lefkowitz](https://github.com/joellefkowitz) - Initial work

## Remarks

Lots of love to the open source community!

<p align='center'>
    <img width=200 height=200 src='https://media.giphy.com/media/osAcIGTSyeovPq6Xph/giphy.gif' alt='Be kind to your mind' />
    <img width=200 height=200 src='https://media.giphy.com/media/KEAAbQ5clGWJwuJuZB/giphy.gif' alt='Love each other' />
    <img width=200 height=200 src='https://media.giphy.com/media/WRWykrFkxJA6JJuTvc/giphy.gif' alt="It's ok to have a bad day" />
</p>

[latest_release]: https://img.shields.io/github/v/tag/joellefkowitz/infer-version "Latest release"
[license]: https://img.shields.io/github/license/joellefkowitz/infer-version "License"
[line_count]: https://img.shields.io/tokei/lines/github/joellefkowitz/infer-version "Line count"
[language_count]: https://img.shields.io/github/languages/count/joellefkowitz/infer-version "Language count"
[documentation]: https://img.shields.io/readthedocs/infer-version "Documentation"
[review_action]: https://img.shields.io/github/actions/workflow/status/JoelLefkowitz/infer-version/review.yml "Review action"
[codacy_quality]: https://img.shields.io/codacy/grade/cb2202d9612c4d5580024f4786a53723 "Codacy quality"
[codacy_coverage]: https://img.shields.io/codacy/coverage/cb2202d9612c4d5580024f4786a53723 "Codacy coverage"
[npm_version]: https://img.shields.io/npm/v/infer-version "NPM Version"
[npm_downloads]: https://img.shields.io/npm/dw/infer-version "NPM Downloads"
[open_issues]: https://img.shields.io/github/issues/joellefkowitz/infer-version "Open issues"
[closed_issues]: https://img.shields.io/github/issues-closed/joellefkowitz/infer-version "Closed issues"
[open_pulls]: https://img.shields.io/github/issues-pr/joellefkowitz/infer-version "Open pull requests"
[closed_pulls]: https://img.shields.io/github/issues-pr-closed/joellefkowitz/infer-version "Closed pull requests"
[contributors]: https://img.shields.io/github/contributors/joellefkowitz/infer-version "Contributors"
[monthly_commits]: https://img.shields.io/github/commit-activity/m/joellefkowitz/infer-version "Monthly commits"
[last_commit]: https://img.shields.io/github/last-commit/joellefkowitz/infer-version "Last commit"
