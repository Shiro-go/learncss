# CSS Functions (calc, clamp, etc.)

## 1. Concept

CSS functions allow dynamic calculations and responsive values.

---

## 2. calc()

```css
width: calc(100% - 50px);
```

Useful for combining units.

---

## 3. clamp()

```css
font-size: clamp(1rem, 2vw, 2rem);
```

- minimum
- preferred
- maximum

---

## 4. min() / max()

```css
width: min(500px, 100%);
```

---

## 5. Mental Model

Functions = dynamic values without JavaScript

---

## 6. Common Mistakes

- overcomplicating expressions
- mixing incompatible units
- not using clamp for responsiveness

---

## 7. Mini Exercise

Create responsive text using `clamp()`.

---

## 8. Summary

CSS functions make layouts fluid and adaptive.