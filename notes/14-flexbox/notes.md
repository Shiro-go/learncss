# Flexbox

## 1. Concept

Flexbox is a **one-dimensional layout system** for arranging elements in a row or column. :contentReference[oaicite:1]{index=1}

---

## 2. Flex Container

```css
.container {
  display: flex;
}
```

Children automatically become flex items.

---

## 3. Main Axis vs Cross Axis

- main axis → direction of layout
- cross axis → perpendicular direction :contentReference[oaicite:2]{index=2}

---

## 4. Direction

```css
.container {
  flex-direction: row; /* or column */
}
```

---

## 5. Alignment

```css
.container {
  justify-content: center; /* main axis */
  align-items: center;     /* cross axis */
}
```

---

## 6. Flex Growth

```css
.item {
  flex: 1;
}
```

Elements grow to fill space.

---

## 7. Mental Model

Flexbox = alignment + spacing system

---

## 8. Common Mistakes

- Confusing align vs justify
- Forgetting axis direction
- Not using flex when needed

---

## 9. Mini Exercise

Create a navbar:
- items aligned horizontally
- centered vertically

---

## 10. Summary

Flexbox is the easiest way to align and distribute elements.