# Build Website Exura

**Forged through Rune. Shaped with Exura.**

A small website built with Rune and the Exura series: ExuraCSS for the look, ExuraJS for the reactive parts, ExuraPHP for the API. Write the page in many small files, and Rune bundles them into one: `dist/index.php`.

**[Explore Rune ↗](https://github.com/devneet-id/rune)**
**[Explore Exura ↗](https://github.com/devneet-id/exura)**

---

## Made with Rune

This app holds two **runites**, both engraved from the origin runes of **[Rune](https://github.com/devneet-id/rune)**, a lore-driven, modular concept beneath PHP:

| Runite | Job |
| ------ | --- |
| `cast` | builds, serves, stores and ships the website |
| `exura` | installs and removes the Exura series from the CDN |

| Rune | Role in this app |
| ---- | ---------------- |
| Aether | opens and closes the flow |
| Chanter | registers the casts |
| Whisper | speaks to the user and asks |
| Weaver | fills the templates while bundling |
| Crafter | bundles `src/` into `dist/index.php` |
| Forger | fetches, writes, removes and copies files |
| Cipher | gives every bundle its hash |
| Keeper | remembers the shards in `.echoes` |
| Specter | serves and watches beside the flow |

Want to engrave your own? Start from the **[Rune repository](https://github.com/devneet-id/rune)**.

### Requirements

* PHP 8.1+ with `curl` (or `allow_url_fopen`)
* Composer

### Install

```bash
composer install
php exura setup
php cast start
```

Then open `http://127.0.0.1:8000`.

---

## The Website

```
src/
├── exura/            exura.css · exura.js · exura.php (php exura setup)
├── index.head.html   goes into <head>
├── index.html        goes into <body>
├── index.css         becomes <style>
├── index.js          becomes <script>
└── index.php         runs on top, before the page
dist/
├── index.php         the bundle (php cast build)
└── assets/
    └── background.jpg
```

* Edit only `src/`. `dist/index.php` is made by `php cast build`.
* Put images and fonts in `dist/assets/`. The page reads them as `assets/...`.
* **The background** is `dist/assets/background.jpg`. Drop your own image there, no rebuild needed.

| Exura part | In this page |
| ---------- | ------------ |
| ExuraCSS | layout as attributes (`flex`, `size`, `text`, `button`) and dark mode with `body[dark]` |
| ExuraJS | the `<exura-rune>` module: state → effect → render |
| ExuraPHP | the endpoint `GET ?/rune`, answered as JSON |

### Where Exura lives

`php exura setup` asks where to put Exura and remembers it in the runite itself (`const EXURA_DIST`):

| Folder | What happens |
| ------ | ------------ |
| `src/exura/` *(this repo)* | `php cast build` bundles Exura into `dist/index.php` — one file to ship |
| `dist/exura/` | the files stay apart; link them in `src/index.head.html` |

For `dist/exura/`, add to `src/index.head.html`:

```html
<link rel="stylesheet" href="exura/exura.css">
<script src="exura/exura.js"></script>
```

`src/index.php` requires `exura/exura.php` by itself when Exura is not bundled.

---

## Registered Casts

### cast

| Cast | Description |
| ---- | ----------- |
| `build` | Bundle `src/` into `dist/index.php`. |
| `serve` | Serve `dist/` on `127.0.0.1:8000`. |
| `watch` | Rebuild when `src/` changes. |
| `start` | Build, then serve and watch. |
| `store` | Keep the assets as shards. |
| `ready` | Make `ready/` for production. |

### exura

| Cast | Spells | Description |
| ---- | ------ | ----------- |
| `setup` | `--dist` `--tags` `--install` | Set where and which version, then install. |
| `css` | `--install` `--remove` `--tags` `--part=clip` | Install or remove `exura.css` (or `exura-clip.css`). |
| `js` | `--install` `--remove` `--tags` | Install or remove `exura.js`. |
| `php` | `--install` `--remove` `--tags` | Install or remove `exura.php`. |

* `--tags` is a tag (`1.1.0`) or a branch (`1.x`, the latest of 1.x). Without it, `EXURA_TAGS` is used.
* `css`, `js` and `php` install by default; `--remove` deletes the file.

---

## Try it

Run every command inside this folder.

**The main screens** — every cast with its echo:

```bash
php cast
php exura
```

**Exura** — install the series:

```bash
php exura setup                                        # asks: where? install now?
php exura setup --dist=src/exura/ --tags=1.1.0 --install
```

**Exura, one by one:**

```bash
php exura css                                          # install exura.css
php exura css --part=clip                              # install exura-clip.css (emoji icons)
php exura js --tags=1.x                                # the latest of 1.x
php exura php --remove                                 # remove exura.php
```

**Build** — many files become one:

```bash
php cast build
```

**Develop** — `serve` and `watch` run until **Ctrl+C**:

```bash
php cast serve                                         # http://127.0.0.1:8000
php cast watch                                         # rebuild on every change in src/
php cast start                                         # build, then serve & watch in their own windows
```

**The API** — ExuraPHP answers inside the same file:

```bash
curl "http://127.0.0.1:8000/?/rune"
```

**Ship** — a folder you can upload to any PHP host:

```bash
php cast ready                                         # build + store, then copy into ready/
```

**Share** — the runites and their shards as one relic:

```bash
php cast store
php cast reliquary --runite-relic                      # cast -> cast.rune
```

---

## What you learn

| Runite · Cast | Lesson |
| ------------- | ------ |
| `cast build` | Crafter: item, seed, shard, spark |
| `cast serve`, `watch`, `start` | Specter: a dev server, an observer, casts beside the flow |
| `cast store`, `ready` | Keeper shards, Forger copies |
| `exura setup` | Whisper asks; a runite rewrites its own settings |
| `exura css`, `js`, `php` | Forger: fetch, write and remove files |

**A website is many files, Rune makes it one, Exura gives it shape.**

---

## References

* [Rune](https://github.com/devneet-id/rune) — Application foundation and tooling.
* [Rune Lore](https://github.com/devneet-id/rune-lore) — The full documentation, from the void to the beyond.
* [ExuraCSS](https://github.com/devneet-id/exuracss) — Styling framework.
* [ExuraJS](https://github.com/devneet-id/exurajs) — JavaScript framework.
* [ExuraPHP](https://github.com/devneet-id/exuraphp) — PHP framework.

---

**Built to create. Designed to evolve.**

**DEVNEET ©**
