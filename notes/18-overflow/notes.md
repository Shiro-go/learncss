# Overflow

## 1. Concept

Controls what happens when content exceeds container size.

---

## 2. Values

```css
div {
  overflow: hidden;
}
```

- hidden → cuts content
- scroll → always scrollbars
- auto → scroll if needed
- visible → default

---

## 3. Example

```css
div {
  width: 200px;
  height: 100px;
  overflow: auto;
}
```

---

## 4. Mental Model

Overflow = content control boundary

---

## 5. Common Mistakes

- content disappearing (hidden)
- unwanted scrollbars
- not controlling layout overflow

---

## 6. Mini Exercise

Create a box with overflowing text and test all values.

---

## 7. Summary

Overflow defines how content behaves outside its container.