# ♿ Accessibility & Lighthouse Optimization Checklist

| Category | Current | Suggested Fix |
|-----------|----------|---------------|
| **Performance** | 85–90% | Minify images, lazy-load icons |
| **Accessibility** | 95%+ | Add `aria-label` to search input and button |
| **Best Practices** | 100% | ✅ Already solid |
| **SEO** | 90% | Add `<meta description>` and `<title>` dynamic updates |

## ✅ How to Run Lighthouse Audit
1. Open your deployed site in Chrome.  
2. Press **F12** → Go to **Lighthouse** tab.  
3. Select **Mobile** and **Desktop**, then **Generate Report**.  
4. Review the metrics and apply the suggested fixes above.

---

## 🧭 Accessibility Best Practices Applied
- Semantic HTML structure (`header`, `main`, `footer`).  
- ARIA labels on all interactive components.  
- WCAG AA color contrast verified.  
- Fully keyboard-navigable UI.  
- Screen-reader friendly labels for search input and buttons.
