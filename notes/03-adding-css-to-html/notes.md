# Adding CSS to HTML

## 1. Concept

There are 3 ways to use CSS:

- Inline
- Internal
- External

## 2. Inline CSS

```html
<p style="color: red;">Hello</p>
```

Not recommended.

## 3. Internal CSS

```html
<style>
p {
  color: red;
}
</style>
```

## 4. External CSS (Best)

```html
<link rel="stylesheet" href="style.css">
```

```css
p {
  color: red;
}
```

Most scalable approach. :contentReference[oaicite:1]{index=1}

## 5. Mental Model

- Inline → quick testing
- Internal → small pages
- External → real projects

## 6. Common Mistakes

- Wrong file path
- Forgetting `<link>`
- Using inline everywhere

## 7. Mini Exercise

Create:
- index.html
- style.css

Link them and change background color.

## 8. Summary

External CSS is the standard for real development.