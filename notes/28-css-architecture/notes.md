# CSS Architecture (BEM)

## 1. Concept

CSS architecture organizes styles for scalability and maintainability.

---

## 2. BEM Methodology

- Block → standalone component
- Element → part of block
- Modifier → variation

---

## 3. Example

```css
.card {}
.card__title {}
.card--highlighted {}
```

---

## 4. Why It Matters

- avoids specificity issues
- improves readability
- scales to large projects

Using simple class-based selectors improves performance and clarity :contentReference[oaicite:1]{index=1}

---

## 5. Mental Model

One class per role → predictable styling

---

## 6. Common Mistakes

- nesting too much
- mixing naming conventions
- overengineering small projects

---

## 7. Mini Exercise

Create a card component using BEM naming.

---

## 8. Summary

Good architecture prevents CSS from becoming unmanageable.