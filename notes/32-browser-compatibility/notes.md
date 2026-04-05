# Browser Compatibility

## 1. Concept

Different browsers may interpret CSS differently.

---

## 2. Problems

- unsupported features
- inconsistent rendering

---

## 3. Solutions

- use modern standards
- test across browsers
- provide fallbacks

---

## 4. Example

```css
color: var(--main, blue);
```

Fallback ensures compatibility.

---

## 5. Tools

- Can I Use
- Autoprefixer

---

## 6. Mental Model

Write for modern browsers → fallback for older ones

---

## 7. Common Mistakes

- ignoring compatibility
- relying on unsupported features
- no fallbacks

---

## 8. Mini Exercise

Test a page on multiple browsers.

---

## 9. Summary

Compatibility ensures consistent experience across platforms.