---
layout: ../../layouts/Layout.astro
---

# 📝 Markdown Demo

Trang này được viết hoàn toàn bằng **Markdown**!

## Astro hỗ trợ Markdown

Astro cho phép bạn viết content bằng Markdown (`.md`) và tự động render thành HTML.

### Tính năng:

- ✅ **File-based routing**: `pages/blog/markdown-demo.md` → `/blog/markdown-demo`
- ✅ **Frontmatter**: Metadata với YAML
- ✅ **Auto-render**: Markdown → HTML tự động
- ✅ **Layout support**: Có thể dùng layout như Astro files

## Code Example

```javascript
// JavaScript code block
function hello() {
  console.log("Hello from Markdown!");
}
```

```python
# Python code block
def greet(name):
    return f"Hello, {name}!"
```

## Markdown Syntax

### Bold & Italic

**Bold text** và *italic text*

### Lists

**Unordered:**
- Item 1
- Item 2
  - Nested item
  - Another nested

**Ordered:**
1. First
2. Second
3. Third

### Links

[Về trang chủ](/) | [About page](/about)

### Blockquotes

> "Astro là framework tuyệt vời cho content-focused websites!"
>
> — Developer yêu thích Markdown

### Tables

| Feature | Astro | Other |
|---------|-------|-------|
| Markdown | ✅ | ❌ |
| Islands | ✅ | ❌ |
| Fast | ✅ | ❌ |

---

## Khi nào dùng Markdown?

✅ **Nên dùng** cho:
- Blog posts
- Documentation
- Static content pages
- Articles

❌ **Không nên dùng** cho:
- Interactive UI
- Complex layouts
- Dynamic pages

---

[← Quay lại trang chủ](/)
