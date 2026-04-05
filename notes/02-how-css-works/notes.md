# How CSS Works

## 1. Concept

CSS works using three core mechanisms:

- Cascade
- Specificity
- Inheritance

These determine which styles are applied.

## 2. The Cascade

Later rules override earlier ones.

```css
p {
  color: red;
}

p {
  color: blue;
}
```

Result: blue

## 3. Specificity

Priority order:

- element → low
- class → medium
- id → high

```css
p { color: red; }
.myClass { color: blue; }
#myId { color: green; }
```

Result: green

## 4. Inheritance

Some styles are passed from parent to child.

```css
body {
  color: red;
}
```

## 5. Mental Model

CSS is a decision system:
multiple rules compete → one wins

## 6. Common Mistakes

- Overusing `!important`
- Ignoring specificity conflicts
- Writing duplicate rules

## 7. Mini Exercise

Create conflicting styles using:
- tag
- class
- id

Observe which wins.

## 8. Summary

CSS applies rules based on priority, not order alone.