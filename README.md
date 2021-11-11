# Infer Version

Infer a project's version from its configuration files.

## Status

| Source     | Shields                                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Project    | ![release][release_shield] ![license][license_shield] ![lines][lines_shield] ![languages][languages_shield]                                  |
| Health     | ![readthedocs][readthedocs_shield] ![github_review][github_review_shield]![codacy][codacy_shield] ![codacy_coverage][codacy_coverage_shield] |
| Publishers | ![npm][npm_shield] ![npm_downloads][npm_downloads_shield]                                                                                    |
| Repository | ![issues][issues_shield] ![issues_closed][issues_closed_shield] ![pulls][pulls_shield] ![pulls_closed][pulls_closed_shield]                  |
| Activity   | ![contributors][contributors_shield] ![monthly_commits][monthly_commits_shield] ![last_commit][last_commit_shield]                           |

## Installing

```bash
npm i infer-version
```

## Tests

To run tests:

```bash
grunt test
```

## Documentation

This repository's documentation is hosted on [readthedocs][readthedocs].

## Tooling

To run linters:

```bash
grunt lint
```

To run formatters:

```bash
grunt format
```

## Continuous integration

This repository uses github actions to lint and test each commit. Formatting tasks and writing/generating documentation must be done before committing new code.

## Versioning

This repository adheres to semantic versioning standards.
For more information on semantic versioning visit [SemVer][semver].

Bump2version is used to version and tag changes.
For example:

```bash
bump2version patch
```

## Changelog

Please read this repository's [CHANGELOG](CHANGELOG.md) for details on changes that have been made.

## Contributing

Please read this repository's guidelines on [contributing](CONTRIBUTING.md) for details on the process for submitting pull requests. Moreover, our [code of conduct](CODE_OF_CONDUCT.md) declares our collaboration standards.

## Contributors

- **joellefkowitz** - _Initial work_ - [joellefkowitz][author]

[![Buy Me A Coffee][coffee_button]][author_coffee]

## Remarks

Lots of love to the open source community!

![Be kind][be_kind]

<!-- Project links -->

[readthedocs]: https://infer-version.readthedocs.io/en/latest/

<!-- External links -->

[semver]: http://semver.org/
[be_kind]: https://media.giphy.com/media/osAcIGTSyeovPq6Xph/giphy.gif

<!-- Contributor links -->

[author]: https://github.com/joellefkowitz
[author_coffee]: https://www.buymeacoffee.com/joellefkowitz
[coffee_button]: https://cdn.buymeacoffee.com/buttons/default-blue.png

<!-- Project shields -->

[release_shield]: https://img.shields.io/github/v/tag/joellefkowitz/infer-version
[license_shield]: https://img.shields.io/github/license/joellefkowitz/infer-version
[lines_shield]: https://img.shields.io/tokei/lines/github/joellefkowitz/infer-version
[languages_shield]: https://img.shields.io/github/languages/count/joellefkowitz/infer-version

<!-- Health shields -->

[readthedocs_shield]: https://img.shields.io/readthedocs/infer-version
[github_review_shield]: https://img.shields.io/github/workflow/status/JoelLefkowitz/infer-version/Review
[codacy_shield]: https://img.shields.io/codacy/grade/cb2202d9612c4d5580024f4786a53723
[codacy_coverage_shield]: https://img.shields.io/codacy/coverage/cb2202d9612c4d5580024f4786a53723

<!-- Publishers shields -->

[npm_shield]: https://img.shields.io/npm/v/infer-version
[npm_downloads_shield]: https://img.shields.io/npm/dw/infer-version

<!-- Repository shields -->

[issues_shield]: https://img.shields.io/github/issues/joellefkowitz/infer-version
[issues_closed_shield]: https://img.shields.io/github/issues-closed/joellefkowitz/infer-version
[pulls_shield]: https://img.shields.io/github/issues-pr/joellefkowitz/infer-version
[pulls_closed_shield]: https://img.shields.io/github/issues-pr-closed/joellefkowitz/infer-version

<!-- Activity shields -->

[contributors_shield]: https://img.shields.io/github/contributors/joellefkowitz/infer-version
[monthly_commits_shield]: https://img.shields.io/github/commit-activity/m/joellefkowitz/infer-version
[last_commit_shield]: https://img.shields.io/github/last-commit/joellefkowitz/infer-version
