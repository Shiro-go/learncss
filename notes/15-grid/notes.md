# CSS Grid

## 1. Concept

Grid is a **two-dimensional layout system** (rows + columns). :contentReference[oaicite:3]{index=3}

---

## 2. Grid Container

```css
.container {
  display: grid;
}
```

---

## 3. Define Columns

```css
.container {
  grid-template-columns: 1fr 1fr 1fr;
}
```

---

## 4. Gap

```css
.container {
  gap: 10px;
}
```

---

## 5. Placement

```css
.item {
  grid-column: span 2;
}
```

---

## 6. Mental Model

Grid = full layout system

- rows
- columns
- precise placement

---

## 7. Grid vs Flexbox

- Flexbox → 1D (row OR column)
- Grid → 2D (rows AND columns) :contentReference[oaicite:4]{index=4}

---

## 8. Common Mistakes

- Using flexbox when grid is better
- Not defining columns
- Overcomplicating layout

---

## 9. Mini Exercise

Create a 3-column layout with equal width.

---

## 10. Summary

Grid is the most powerful layout tool in CSS.