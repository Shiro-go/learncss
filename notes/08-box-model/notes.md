# Box Model

## 1. Concept

Every element in CSS is a box. :contentReference[oaicite:0]{index=0}

The box model defines how size and spacing work.

---

## 2. Components

From inside → outside:

- content
- padding
- border
- margin

```css
div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

---

## 3. Important Rule

Total size ≠ width

Total width =
content + padding + border + margin :contentReference[oaicite:1]{index=1}

---

## 4. box-sizing

```css
box-sizing: border-box;
```

✔ includes padding + border inside width  
✔ much easier to work with

---

## 5. Mental Model

Everything = rectangle

Spacing is built in layers.

---

## 6. Common Mistakes

- Forgetting padding increases size
- Layout breaking unexpectedly
- Not using `border-box`

---

## 7. Mini Exercise

Create a box and:
- add padding
- add border
- observe size changes

---

## 8. Summary

The box model is the foundation of layout — without it, CSS feels random.