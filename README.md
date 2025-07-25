# 🧩 Widgetly — Lightweight Feedback Widget for Any Website

**Widgetly** is a simple, embeddable feedback widget that lets you collect user input directly from your website with ease. Built with a modern tech stack, Widgetly helps product owners, designers, and developers understand user sentiment without disrupting the user experience.

---

## 🚀 Features

- ✅ **Embeddable Widget**: Add a tiny snippet of code to integrate the widget into any site.  
- 🖤 **Minimalist & Responsive UI**: Clean, modern, and responsive design that works across all devices.  
- ⚡ **Real-time Feedback Collection**: Get feedback instantly and view it in your dashboard.  
- 🔐 **Secure & Scalable Backend**: Built with best practices for security and performance.  
- 🎯 **Customizable Widget**: Easily adapt the widget's appearance to match your brand.  
- 📊 **Admin Dashboard**: View, filter, and manage all collected feedback from a central place.

---

## 📸 Preview

> _Add animated preview GIFs or screenshots here to show the widget in action and the dashboard interface._

---

## 🛠️ Tech Stack

**Frontend**  
- React (with Vite)  
- Tailwind CSS  
- TypeScript  

**Backend**  
- Next.js (API routes)  
- MongoDB / PostgreSQL  
- Prisma / Mongoose ORM  

**Other Tools**  
- Shadcn/UI or custom components  
- Vercel / Render for deployment  
- GitHub Actions (optional) for CI/CD

---

## 🔧 How to Use

### 1. Embed Widget in Your Site

Add this code snippet to your HTML (before `</body>`):

```html
<script src="https://yourdomain.com/widgetly.js" data-project-id="your-project-id"></script>
```

### 2. Configure Widget (Optional)

You can pass additional options using `data-*` attributes like:

```html
<script
  src="https://yourdomain.com/widgetly.js"
  data-project-id="your-project-id"
  data-theme="dark"
  data-position="bottom-right">
</script>
```

---

## 💻 Development

```bash
# Clone the repo
git clone https://github.com/HeatBlastee/Widgetly.git
cd Widgetly

# Install dependencies
npm install

# Run dev server
npm run dev
```

---

## 📦 Folder Structure

```
Widgetly/
├── components/
├── lib/
├── pages/             # Next.js API routes and pages
├── prisma/ or models/ # ORM schema
├── public/
├── styles/
└── README.md
```

---

## 📈 Future Enhancements

- User authentication & project management  
- Widget analytics dashboard  
- Theme builder and widget preview  
- Export feedback (CSV/JSON)  
- Email notifications  

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!  
Feel free to fork the repo and submit a pull request.

---

## 📬 Contact

**Mann Patel**  
🔗 [GitHub](https://github.com/HeatBlastee)  
🔗 [LinkedIn](https://www.linkedin.com/in/mann-patel-321aa8289/)  

---

## ⭐️ Show Your Support

If you like this project, give it a ⭐ on GitHub and share it with your developer community!
