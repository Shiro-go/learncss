# Specificity & Cascade

## 1. Concept

When multiple CSS rules apply to the same element, CSS decides which one wins using:

- Cascade
- Specificity
- Source order

## 2. Specificity Hierarchy

From weakest → strongest:

- element → `p`
- class → `.class`
- id → `#id`
- inline → `style=""`

Example:

```css
p { color: red; }
.text { color: blue; }
#title { color: green; }
```

Result → green

## 3. Specificity Score (mental model)

Think in layers:

- ID = 100
- Class = 10
- Element = 1

Higher total wins.

## 4. Cascade Rule

If specificity is equal:
→ last declared rule wins

## 5. !important

```css
p {
  color: red !important;
}
```

⚠️ Overrides everything → avoid unless necessary

## 6. Mental Model

CSS = conflict resolution system

Rules fight → strongest wins

## 7. Common Mistakes

- Overusing `!important`
- Writing overly complex selectors
- Not understanding why styles don’t apply

## 8. Mini Exercise

Create:
- one class
- one id
- one tag

Make them conflict and predict the result.

## 9. Summary

Specificity determines which rule applies — mastering it removes most CSS confusion.