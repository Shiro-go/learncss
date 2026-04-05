# CSS Variables (Custom Properties)

## 1. Concept

CSS variables allow you to store values and reuse them across your stylesheet.

---

## 2. Syntax

```css
:root {
  --main-color: red;
}

p {
  color: var(--main-color);
}
```

---

## 3. Why They Matter

- reduce repetition  
- enable theming  
- dynamic updates  

They can even be changed at runtime with JavaScript :contentReference[oaicite:0]{index=0}

---

## 4. Example (Theme)

```css
:root {
  --bg: white;
}

[data-theme="dark"] {
  --bg: black;
}

body {
  background: var(--bg);
}
```

---

## 5. Mental Model

Variables = reusable values + dynamic behavior

---

## 6. Common Mistakes

- not using `:root`
- unclear naming
- overusing variables unnecessarily

---

## 7. Mini Exercise

Create:
- a primary color variable
- a dark/light mode switch

---

## 8. Summary

CSS variables make styles reusable, flexible, and dynamic.