#!/usr/bin/env python3
"""Prepare a job photo for the site.

Usage:  python3 docs/prepare-photo.py path/to/photo.jpg  <project>  <number>
Example: python3 docs/prepare-photo.py ~/Downloads/IMG_1234.jpeg loft-conversion 11

Needs: pip install pillow numpy

What it does
- crops the black bars off phone screenshots (no effect on normal photos)
- writes assets/images/<project>/<n>.webp      full size, max 1000px wide (lightbox)
-        assets/images/<project>/<n>-md.webp   640px wide (grid tiles on sharp phone screens)
-        assets/images/<project>/<n>-sm.webp   480px wide (grid tiles, default)
- prints a tiny blurred placeholder to paste into the tile/card button as:
      style="background-image:url(...)"
  (optional: without it the tile just shows the plain slate colour until the photo arrives)
"""
import sys, os, io, base64
from PIL import Image, ImageOps
import numpy as np

src, project, n = sys.argv[1], sys.argv[2], sys.argv[3]
root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "assets", "images", project)
os.makedirs(root, exist_ok=True)

im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
rows = np.where(np.array(im.convert("L")).mean(axis=1) > 14)[0]
im = im.crop((0, rows[0], im.width, rows[-1] + 1))      # trim black bars top/bottom

def save(width, suffix, q):
    w = min(width, im.width)
    out = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
    out.save(os.path.join(root, f"{n}{suffix}.webp"), "WEBP", quality=q, method=6)
    return out

save(1000, "", 80); save(640, "-md", 72); sm = save(480, "-sm", 74)

tiny = sm.resize((18, max(1, round(18 * sm.height / sm.width))), Image.LANCZOS)
buf = io.BytesIO(); tiny.save(buf, "WEBP", quality=40, method=6)
print(f"Written 3 files to assets/images/{project}/ ({n}.webp, {n}-md.webp, {n}-sm.webp)")
print("Placeholder (optional):")
print('style="background-image:url(data:image/webp;base64,' + base64.b64encode(buf.getvalue()).decode() + ')"')
