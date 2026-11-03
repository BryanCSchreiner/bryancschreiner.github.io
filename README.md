# bryancschreiner.github.io

Personal site for Bryan Schreiner, live at https://bryancschreiner.github.io

## What's in here

| File | What it does |
| --- | --- |
| `index.html` | Page layout. You rarely need to touch this. |
| `assets/js/content.js` | **All the words on the site.** Edit this to update projects, jobs, awards, etc. |
| `assets/js/render.js` | Turns content.js into the page. Don't edit. |
| `assets/css/style.css` | Colors, fonts, spacing. |
| `assets/img/headshot.jpg` | Your photo. Replace with a new file of the same name to swap it. |

## Updating content

1. On GitHub, open `assets/js/content.js` and click the pencil icon.
2. Make your change. To add a project, copy an existing `{ ... },` block in the
   `projects` list, paste it, and edit the text. Add `hidden: true,` to any item
   to hide it without deleting it.
3. Click **Commit changes**. The live site updates within a minute or two.

If the page shows up blank after an edit, there's usually a missing comma or
quote mark near the line you changed. Open the file's history on GitHub to
compare with the last working version.

## Previewing on your computer

Download the folder and double-click `index.html`. It opens in your browser
exactly as it will look online.
