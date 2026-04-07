# Dependency Policy

## Why Exact Pinning Was Applied

On **2026-03-31**, a supply-chain attack was discovered involving two malicious versions of the popular HTTP library `axios`:

- `axios@1.14.1`
- `axios@0.30.4`

Both versions carried a hidden dependency on **`plain-crypto-js@4.2.1`**, a backdoored package that exfiltrates data to **`sfrclak.com`** — an attacker-controlled domain. The attack exploits npm's default behaviour of accepting semver ranges (`^`, `~`), which can silently pull in a newly-published malicious version on the next `npm install`.

In response, all semver ranges in this project's `package.json` have been replaced with exact pinned versions resolved directly from `package-lock.json`. The `.npmrc` file now enforces `save-exact=true` so that any future `npm install <pkg>` also defaults to exact pinning.

---

## Threat Assessment for This Project

| Indicator | Present in `package.json`? | Present in `package-lock.json`? |
|---|---|---|
| `axios` (any version) | No | No |
| `plain-crypto-js` (any version) | No | No |
| `sfrclak.com` domain reference | No | No |

**This project was not affected.** Neither `axios` nor any related malicious package appears anywhere in the dependency tree.

---

## Package Version Pin Table

| Package | Old range | Exact version pinned |
|---|---|---|
| `next` | `16.1.6` | `16.1.6` |
| `react` | `19.2.3` | `19.2.3` |
| `react-dom` | `19.2.3` | `19.2.3` |
| `@tailwindcss/postcss` | `^4` | `4.2.1` |
| `@types/node` | `^20` | `20.19.37` |
| `@types/react` | `^19` | `19.2.14` |
| `@types/react-dom` | `^19` | `19.2.3` |
| `eslint` | `^9` | `9.39.4` |
| `eslint-config-next` | `16.1.6` | `16.1.6` |
| `tailwindcss` | `^4` | `4.2.1` |
| `typescript` | `^5` | `5.9.3` |

---

## Rules for Future Dependency Updates

1. **Never run `npm update` blindly.** It resolves against semver ranges and can silently pull in a newly-published version — including malicious ones.

2. **Run `npm audit` before adding or updating any package.** Review the output carefully; do not dismiss advisories.

3. **Update packages individually.** Use `npm install <package>@<exact-version>` for each update, verify the change, and commit both `package.json` and `package-lock.json` together in the same commit.

4. **Never install packages whose `postinstall` scripts reference unknown or external domains.** Inspect `package-lock.json` for `hasInstallScript: true` entries and audit their `postinstall` target before running install.

5. **Review `package-lock.json` diffs on every PR** that touches dependencies. Unexpected transitive additions are a red flag.

---

## Known Safe and Compromised `axios` Versions

| Status | Versions |
|---|---|
| **Compromised** | `1.14.1`, `0.30.4` |
| **Safe** | `≤ 1.14.0` and `≥ 1.14.2` (verify with `npm audit` regardless) |

If `axios` is ever added to this project, ensure the version is not `1.14.1` or `0.30.4` and verify the resolved version in `package-lock.json` before committing.