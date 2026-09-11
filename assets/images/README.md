# Images folder

The site currently uses inline SVG placeholders in `index.html` for the profile photo
and project screenshots, so it works out of the box with zero external image files.

To use real images:

1. Add your image files to this folder (e.g. `profile.jpg`, `project-1.png`).
2. In `index.html`, replace the relevant `<svg>...</svg>` block with an `<img>` tag, e.g.:

   ```html
   <img src="assets/images/profile.jpg" alt="Photo of Dylan Akia">
   ```

3. Keep file sizes small (compress photos, prefer `.webp`/`.jpg` for photos and `.svg`
   for icons/logos) to keep the site fast-loading.
