# Display Property

## 1. Concept

The `display` property controls how elements behave in layout.

It defines how elements are placed and sized.

---

## 2. Main Values

### Block

```css
div {
  display: block;
}
```

- takes full width
- starts on new line

---

### Inline

```css
span {
  display: inline;
}
```

- stays in line
- ignores width/height

---

### Inline-block

```css
button {
  display: inline-block;
}
```

- inline behavior
- but accepts width/height

---

### None

```css
display: none;
```

- removes element completely

---

## 3. Modern Values

- flex
- grid

(covered later)

---

## 4. Mental Model

Display = layout behavior switch

---

## 5. Common Mistakes

- Trying to set width on inline elements
- Confusing inline vs inline-block
- Using `display: none` instead of visibility

---

## 6. Mini Exercise

Create:
- a block element
- an inline element
- an inline-block element

Compare behavior.

---

## 7. Summary

Display defines how elements exist in layout — it’s critical for structure.