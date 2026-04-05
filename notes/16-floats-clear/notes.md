# Floats & Clear

## 1. Concept

Floats were originally used to wrap text around elements (like images).

Now they are mostly **legacy layout tools**.

---

## 2. Float

```css
img {
  float: left;
}
```

Element moves left or right.

---

## 3. Problem

Floated elements are removed from normal flow → layout breaks easily.

---

## 4. Clear

```css
div {
  clear: both;
}
```

Prevents elements from wrapping around floats.

---

## 5. Modern Use

⚠️ Avoid for layout  
Use flexbox or grid instead

---

## 6. Mental Model

Float = text wrapping tool (not layout system)

---

## 7. Common Mistakes

- Using float for layout
- Forgetting to clear
- Collapsing parent containers

---

## 8. Mini Exercise

Float an image and wrap text around it.

---

## 9. Summary

Floats are outdated for layout — but still useful to understand legacy code.