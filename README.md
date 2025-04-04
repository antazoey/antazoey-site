# Portfolio Site

My portfolio website.

## Installation

```bash
npm install
```

## Running locally

```bash
npm start
```

The app should now be running on `http://localhost:8080/#`.

## Deployment

### One-time setup

First, make sure you have host repo cloned somewhere locally:

```bash
git clone git@github.com:antazoey/antazoey.github.io.git
```

Then, add the environment variable to your `*.profile`:

```bash
export PORTFOLIO_SITE_PATH=/path/to/local/repo
```

### Updating the site

To deploy changes to the site, run:

```bash
npm run deploy
```
