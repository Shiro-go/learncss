# Mobile First Design

## 1. Concept

Design for small screens first, then scale up.

---

## 2. Approach

```css
/* mobile */
body {
  font-size: 14px;
}

/* larger screens */
@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}
```

---

## 3. Why Mobile First

- better performance
- simpler design
- modern standard

---

## 4. Mental Model

Start simple → add complexity

---

## 5. Common Mistakes

- desktop-first design
- too many overrides
- inconsistent scaling

---

## 6. Mini Exercise

Design a layout mobile first, then expand it.

---

## 7. Summary

Mobile-first ensures better scalability and UX.