# Media Queries

## 1. Concept

Media queries allow CSS to adapt to different screen sizes.

---

## 2. Basic Syntax

```css
@media (max-width: 768px) {
  body {
    background: red;
  }
}
```

---

## 3. Common Breakpoints

- mobile → < 768px
- tablet → 768–1024px
- desktop → > 1024px

---

## 4. Use Cases

- responsive layout
- hiding elements
- adjusting sizes

---

## 5. Mental Model

"If screen matches condition → apply styles"

---

## 6. Common Mistakes

- too many breakpoints
- desktop-first approach
- inconsistent design

---

## 7. Mini Exercise

Change layout when screen width < 600px.

---

## 8. Summary

Media queries are the foundation of responsive design.