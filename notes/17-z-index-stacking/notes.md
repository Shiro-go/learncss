# Z-Index & Stacking Context

## 1. Concept

Controls which elements appear **on top of others**.

---

## 2. z-index

```css
div {
  position: relative;
  z-index: 10;
}
```

Higher value = closer to user

---

## 3. Important Rule

z-index only works on:
- positioned elements (relative, absolute, etc.)

---

## 4. Stacking Context

Some elements create their own stacking layer:
- position + z-index
- opacity < 1
- transform

---

## 5. Mental Model

Think layers:
- background
- content
- overlays

---

## 6. Common Mistakes

- z-index not working → no positioning
- fighting stacking contexts
- using huge values (9999)

---

## 7. Mini Exercise

Create overlapping boxes and control order.

---

## 8. Summary

z-index controls depth — but stacking context defines limits.