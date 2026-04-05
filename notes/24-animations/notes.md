# Animations

## 1. Concept

Animations allow complex multi-step motion.

---

## 2. Keyframes

```css
@keyframes move {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}
```

---

## 3. Usage

```css
div {
  animation: move 1s infinite;
}
```

---

## 4. Mental Model

Animations = timeline of changes

---

## 5. Common Mistakes

- overusing animations
- poor performance
- distracting UI

---

## 6. Mini Exercise

Create a bouncing element.

---

## 7. Summary

Animations bring interfaces to life but must be used carefully.