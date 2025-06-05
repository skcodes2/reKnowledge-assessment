# 🌍 Earthquake Data Visualization

## 🚀 Features

### 📊 Interactive Chart + Table
- View earthquake data as a scatter plot and a tabular list
- Click or hover a row to highlight the matching point on the chart
- Click a chart point to filter + scroll to its corresponding row in the table

### 🔄 Two-Way Interactivity
- Row click → highlight chart point
- Chart click → filter table to relevant row

### 🧠 State Handling Approaches
- **Props pattern** for basic prop drilling
- **React Context API** to manage selected earthquake globally
- **Zustand** store for global state like filtered, paginated, and selected data

### ➕ Additional Features
- Pagination (200 items per page)
- Filters (magnitude & depth ranges)
- Sorting (magnitude & depth in both directions)
- Responsive layout with Tailwind CSS

---

## 📦 External Dependencies

| Package                   | Purpose |
|---------------------------|---------|
| `react`, `react-dom`      | Core React app |
| `zustand`                 | State management store |
| `@tanstack/react-query`   | Efficient data fetching |
| `@tanstack/react-router`  | App routing and navigation |
| `papaparse`               | CSV parsing for earthquake data |
| `recharts`                | Interactive data visualization |
| `@tailwindcss/vite`       | Tailwind setup with Vite |
| `pnpm`                    | Package manager |

---

## 🛠 Setup Instructions

```bash
git clone https://github.com/skcodes2/reKnowledge-assessment.git

cd reKnowledge-assessment

npm install 

npm run dev


