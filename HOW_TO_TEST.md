# Hướng dẫn kiểm tra sự khác biệt Astro vs React SPA

## 🔍 Các bước test trong DevTools

### Test 1: View Page Source
```
1. Right-click trên trang > "View Page Source" (hoặc Ctrl/Cmd + U)
2. Quan sát:
   ✅ Astro: Thấy toàn bộ HTML content đã render sẵn
   ❌ React SPA: Chỉ thấy <div id="root"></div> trống
```

### Test 2: Disable JavaScript
```
1. Mở DevTools (F12)
2. Cmd/Ctrl + Shift + P > gõ "Disable JavaScript"
3. Reload trang
4. Quan sát:
   ✅ Astro: Phần static vẫn hiển thị (Hero, Features, Footer)
   ⚠️  Chỉ LiveClock và PricingCalculator mất đi (vì chúng cần JS)
   ❌ React SPA: Trang trắng hoàn toàn
```

### Test 3: Network Tab - JavaScript Bundle
```
1. DevTools > Network tab
2. Filter: JS
3. Reload trang
4. So sánh:
   ✅ Astro: Chỉ tải JS cho các islands (nhỏ gọn)
      - LiveClock bundle
      - PricingCalculator bundle
   ❌ React SPA: Tải cả app bundle (lớn)
      - vendor.js (React, ReactDOM, ...)
      - app.js (toàn bộ code)
```

### Test 4: Elements Tab - Tìm astro-island
```
1. DevTools > Elements tab
2. Ctrl/Cmd + F > search: "astro-island"
3. Quan sát:
   ✅ Sẽ thấy các thẻ <astro-island> bao quanh LiveClock và PricingCalculator

Ví dụ:
<astro-island uid="Z1PfDB2" component-url="/_astro/LiveClock.xxx.js" ...>
  <!-- Component React -->
</astro-island>
```

### Test 5: Performance - First Contentful Paint
```
1. DevTools > Performance tab
2. Reload và record
3. Stop recording
4. Xem metrics:
   ✅ Astro: FCP rất nhanh (~200-500ms)
   ❌ React SPA: FCP chậm hơn (phải chờ JS execute)
```

### Test 6: Network Waterfall
```
1. DevTools > Network tab
2. Reload trang
3. Quan sát waterfall:
   ✅ Astro:
      1. HTML (đã có content) ← FCP ngay đây
      2. CSS
      3. JS cho islands (load sau)

   ❌ React SPA:
      1. HTML (trống)
      2. JS bundle ← Phải chờ đến đây
      3. FCP sau khi JS execute
```

## 🎯 Điểm khác biệt chính

| Feature | Astro (Island Architecture) | React SPA |
|---------|----------------------------|-----------|
| **HTML Source** | Đầy đủ content | Gần như trống |
| **JS Bundle** | Chỉ cho interactive parts | Toàn bộ app |
| **FCP** | Rất nhanh | Chậm hơn |
| **Without JS** | Static content vẫn hiện | Trang trắng |
| **SEO** | Tuyệt vời (HTML có sẵn) | Cần SSR/SSG riêng |
| **Hydration** | Từng phần (selective) | Toàn bộ app |

## 📝 Ghi chú về demo này

Trong demo này:

- **LiveClock** (`client:only="react"`):
  - Chỉ render ở client
  - Không có HTML trong source
  - Tải JS ngay lập tức

- **PricingCalculator** (`client:load`):
  - Có thể có placeholder HTML
  - Hydrate ngay khi trang load
  - Tương tác ngay được

- **Static content** (Hero, Features, Footer):
  - HTML có sẵn trong source
  - Không cần JS
  - Hiển thị ngay lập tức

## 🚀 Lợi ích của Island Architecture

1. **Performance**: Ít JS hơn = tải nhanh hơn
2. **SEO**: HTML có sẵn = search engines index dễ
3. **UX**: Nội dung static hiện ngay, không chờ JS
4. **Flexibility**: Dùng React/Vue/Svelte chỉ khi cần

## 🔗 Resources

- [Astro Islands Documentation](https://docs.astro.build/en/concepts/islands/)
- [Client Directives](https://docs.astro.build/en/reference/directives-reference/#client-directives)
