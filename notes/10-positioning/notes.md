# Positioning

## 1. Concept

Positioning controls where elements appear on the page.

---

## 2. Types

### Static (default)

```css
position: static;
```

- normal flow

---

### Relative

```css
position: relative;
top: 10px;
```

- moves relative to itself

---

### Absolute

```css
position: absolute;
top: 0;
left: 0;
```

- positioned relative to nearest positioned parent :contentReference[oaicite:2]{index=2}

---

### Fixed

```css
position: fixed;
```

- stays fixed on screen

---

### Sticky

```css
position: sticky;
```

- switches between relative and fixed

---

## 3. Offset Properties

- top
- right
- bottom
- left

---

## 4. Mental Model

Position removes elements from normal flow (except relative).

---

## 5. Common Mistakes

- Using absolute without parent context
- Forgetting `position: relative` on container
- Layout breaking unexpectedly

---

## 6. Mini Exercise

Create:
- a relative container
- an absolute child inside it

---

## 7. Summary

Positioning gives precise control over layout — but must be used carefully.