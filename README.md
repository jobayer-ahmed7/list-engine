# 🧠 ListEngine

**ListEngine** is a productivity-focused tool built for e-commerce sellers who need to generate large sets of product listing titles and descriptions efficiently. Designed especially for platforms like **Amazon** and **Walmart**, ListEngine automates one of the most repetitive and time-consuming parts of the product listing process — creating unique titles for each product variant (e.g., color and size combinations).

## 🌐 Live Demo

**Try it now:** [https://listengine.vercel.app](https://listengine.vercel.app)

> 🚀 The application is live and ready to use! No installation required.

---

## 🚀 Project Vision

As a product lister working in the e-commerce space, I often face a frustrating and repetitive challenge:  
When listing items that come in many variants — such as 10 colors and 8 sizes — I have to manually write out **80 unique product titles**. These titles follow a pattern, but writing them out manually wastes time and drains focus.

This tool is my attempt to solve that real-world problem using my web development skills.

---

## 🎯 What ListEngine Will Do

- Let users define a **base product title** structure  
- Accept dynamic variant inputs like **colors**, **sizes**, or **materials**  
- Automatically generate all **possible combinations** of product titles  
- Provide an easy way to **copy**, **export**, or **save** generated results  
- (Future Scope) Allow bulk generation of **bullet point descriptions** or **SEO-optimized content**

---

## 💡 Example Use Case

**Base Product**:  
`Gildan Heavy Cotton Taped Neck T-Shirt for Women, 100% Cotton Short Sleeve`

**Variants**:
- Colors: Red, Navy, Purple, etc.
- Sizes: S, M, L, XL, 2XL, 3XL, etc.

**Generated Output**:

Gildan Heavy Cotton Taped Neck T-Shirt for Women, 100% Cotton Short Sleeve Navy Tee, M

Gildan Heavy Cotton Taped Neck T-Shirt for Women, 100% Cotton Short Sleeve Red Tee, XL

... (all other combinations)


---

## ⚙️ Tech Stack

- **Next.js** (Frontend)
- **Tailwind CSS** (Styling)
- **TypeScript** (Typing & maintainability)

Planned future features:
- **AI-based content suggestions**
- **CSV export**
- **User accounts with saved templates**

---

## ✨ Current Features

- ✅ **Intuitive Interface**: Clean, modern UI with responsive design
- ✅ **Dynamic Placeholders**: Use `[color]` and `[size]` placeholders in your base title
- ✅ **Custom Variants**: Add custom colors and sizes beyond the predefined options
- ✅ **Real-time Generation**: Instantly generate all possible combinations
- ✅ **One-Click Copy**: Copy all generated listings to clipboard
- ✅ **Results Management**: Clear results and start fresh anytime
- ✅ **Visual Feedback**: Count display and organized listing preview

---

## 🎬 Demo

**Step 1**: Enter your base product title with placeholders
```
Gildan Heavy Cotton T-Shirt for [color] Lovers, Size [size], Premium Quality
```

**Step 2**: Select or add custom colors and sizes
- Colors: Black, White, Navy, Red + custom "Forest Green"
- Sizes: S, M, L, XL + custom "XXS"

**Step 3**: Generate and get results like:
```
Gildan Heavy Cotton T-Shirt for Black Lovers, Size S, Premium Quality
Gildan Heavy Cotton T-Shirt for White Lovers, Size M, Premium Quality
... (20 total combinations)
```

---

## 📌 Project Status

> ✅ **MVP Complete**: Basic functionality implemented and working  
> 🛠️ **Active Development**: Adding new features and improvements  
> 🎯 **Next Milestone**: CSV export functionality and template saving

---

## 🗺️ Roadmap

### Phase 1: Core Features (✅ Complete)
- [x] Basic title generation
- [x] Custom color/size input
- [x] Copy to clipboard
- [x] Responsive design

### Phase 2: Enhanced Functionality (🚧 In Progress)
- [ ] Bulk description generation
- [ ] Template saving and loading
- [ ] Undo/Redo functionality

### Phase 3: Advanced Features (📋 Planned)
- [ ] AI-powered content suggestions
- [ ] User accounts and cloud sync
- [ ] Analytics and usage tracking
- [ ] Multiple marketplace optimizations
- [ ] Batch processing for large datasets

---

## 🛠️ Troubleshooting

### Common Issues

**Issue**: "Nothing happens when I click Generate"  
**Solution**: Make sure you've entered a base title with `[color]` and `[size]` placeholders, and selected at least one color and size.

**Issue**: "Copy to clipboard doesn't work"  
**Solution**: This feature requires HTTPS or localhost. If you're on a different domain, manually select and copy the text.

**Issue**: "Custom colors/sizes aren't being added"  
**Solution**: After typing your custom value, press Enter or click away from the input field to confirm the addition.

### Getting Help

If you encounter any issues:
1. Check the browser console for error messages
2. Ensure you're using a modern browser (Chrome, Firefox, Safari, Edge)
3. Try refreshing the page
4. [Open an issue](https://github.com/yourusername/list-engine/issues) with details about your problem

---

## 👤 Author

**Jobayer Ahmed**  
Javascript Developer & E-commerce Product Lister  
[Portfolio](https://jobayerahmed.vercel.app/) | [LinkedIn](https://www.linkedin.com/in/jobayerahmmed7/) | [GitHub](https://github.com/ahmed-jobayer)

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have the following installed on your machine:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

### Local Development

To get a local copy of the project up and running, follow these simple steps:

1. **Clone the Repository**
   ```shell
   git clone https://github.com/ahmed-jobayer/list-engine
   cd list-engine
   ```

2. **Install Dependencies**
   ```shell
   npm install
   ```

3. **Run the Development Server**
   ```shell
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
   
   > **Note**: You can also try the live version at [https://listengine.vercel.app](https://listengine.vercel.app)

4. **Build for Production**
   ```shell
   npm run build
   npm start
   ```

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check code quality
<!-- 
### Deployment

The easiest way to deploy ListEngine is to use [Vercel](https://vercel.com/), the platform from the creators of Next.js: -->

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with zero configuration

Alternatively, you can deploy to other platforms like Netlify, Railway, or any hosting service that supports Node.js applications.

---

## 🧪 Testing

Tests can be run using Jest. To execute tests, run:

```shell
npm run test
```

Ensure all new code is accompanied by appropriate tests.

---

## 👥 Contributing

This is a personal tool born out of necessity, and contributions are welcome! Feel free to check the [issues](https://github.com/ahmed-jobayer/list-engine/issues) for ways to help out.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourFeature`)
3. Commit your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---



