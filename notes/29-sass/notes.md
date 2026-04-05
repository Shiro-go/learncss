# Sass (CSS Preprocessor)

## 1. Concept

Sass extends CSS with programming features.

---

## 2. Features

- variables
- nesting
- mixins
- functions

---

## 3. Example

```scss
$primary: red;

.button {
  color: $primary;
}
```

---

## 4. Nesting

```scss
.card {
  .title {
    color: red;
  }
}
```

---

## 5. CSS vs Sass Variables

- Sass → static (compile time)
- CSS variables → dynamic (runtime) :contentReference[oaicite:2]{index=2}

---

## 6. Mental Model

Sass = CSS + programming features

---

## 7. Common Mistakes

- over-nesting
- unreadable code
- abusing mixins

---

## 8. Mini Exercise

Create a reusable button using Sass variables.

---

## 9. Summary

Sass improves productivity but should be used carefully.