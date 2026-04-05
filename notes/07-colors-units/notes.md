# Colors & Units

## 1. Concept

CSS uses:
- colors → define appearance
- units → define size

Both are fundamental to styling.

---

## 2. Colors

### Named colors

```css
color: red;
```

### HEX

```css
color: #ff0000;
```

### RGB

```css
color: rgb(255, 0, 0);
```

### RGBA (with opacity)

```css
color: rgba(255, 0, 0, 0.5);
```

---

## 3. Units

### Absolute

- px → pixels

```css
font-size: 16px;
```

### Relative

- % → relative to parent
- em → relative to parent font
- rem → relative to root font
- vw / vh → viewport size

```css
width: 50%;
font-size: 2rem;
height: 100vh;
```

---

## 4. When to use what

- px → precise control
- rem → scalable UI
- % → flexible layouts
- vw/vh → responsive design

---

## 5. Mental Model

Units define **scale**  
Colors define **visual identity**

---

## 6. Common Mistakes

- Mixing units randomly
- Using px everywhere
- Not understanding rem vs em

---

## 7. Mini Exercise

Create a box:
- width in %
- height in vh
- text in rem

---

## 8. Summary

Units and colors are the foundation of visual consistency in CSS.