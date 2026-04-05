# CSS Selectors

## 1. Concept

Selectors define which elements CSS applies to.

## 2. Basic Selectors

### Element

```css
p {
  color: red;
}
```

### Class

```css
.myClass {
  color: blue;
}
```

### ID

```css
#myId {
  color: green;
}
```

## 3. Grouping

```css
h1, p {
  color: red;
}
```

## 4. Descendant

```css
div p {
  color: red;
}
```

## 5. Pseudo-classes

```css
a:hover {
  color: red;
}
```

## 6. Attribute selector

```css
input[type="text"] {
  border: 1px solid black;
}
```

## 7. Mental Model

Selectors = targeting system

## 8. Common Mistakes

- Overusing IDs
- Complex selectors
- Ignoring specificity

## 9. Mini Exercise

Create:
- a class selector
- a hover effect
- a nested selector

## 10. Summary

Selectors are the foundation of applying CSS.