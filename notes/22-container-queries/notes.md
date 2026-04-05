# Container Queries

## 1. Concept

Allows styling based on **container size**, not viewport.

---

## 2. Example

```css
@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}
```

---

## 3. Why It Matters

Components become reusable and independent.

---

## 4. Mental Model

Media queries → screen-based  
Container queries → component-based

---

## 5. Common Mistakes

- confusing with media queries
- not defining container

---

## 6. Mini Exercise

Create a card that changes layout based on its container.

---

## 7. Summary

Container queries enable true component-based design.