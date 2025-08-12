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
`Gildan Heavy Cotton T-Shirt for [color] Lovers, Size [size], Pack of [pack]`

**Variants**:
- Colors: Black, Navy, Red, White, etc.
- Sizes: XS, S, M, L, XL, 2XL, 3XL, 5XL, etc.
- Pack Quantities: 1, 2, 5, 12, etc.

**Generated Output**:
```
Gildan Heavy Cotton T-Shirt for Black Lovers, Size S, Pack of 1
Gildan Heavy Cotton T-Shirt for Navy Lovers, Size M, Pack of 2
Gildan Heavy Cotton T-Shirt for Red Lovers, Size L, Pack of 5
... (all possible combinations)
```


---

## ⚙️ Tech Stack

### Core Technologies
- **Next.js 15.4.5** - React framework with App Router
- **React 19.1.0** - UI library with latest features
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS v4** - Utility-first CSS framework

### Key Libraries
- **React Select** - Advanced dropdown components with creatable options
- **Sonner** - Beautiful toast notifications
- **Lucide React** - Modern icon library
- **Class Variance Authority (CVA)** - Component variant management
- **clsx & tailwind-merge** - Conditional styling utilities

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Next Themes** - Theme management system

### Deployment
- **Vercel** - Seamless deployment and hosting

Planned future features:
- **AI-based content suggestions**
- **CSV export functionality**
- **User accounts with saved templates**

---

## ✨ Current Features

- ✅ **Intuitive Interface**: Clean, modern UI with glassmorphism design and responsive layout
- ✅ **Triple Placeholder System**: Use `[color]`, `[size]`, and `[pack]` placeholders in your base title
- ✅ **Flexible Color Input**: Add colors via comma-separated input with real-time parsing
- ✅ **Advanced Size Selection**: CreatableSelect dropdown with predefined sizes (XS to 5XL) plus custom size creation
- ✅ **Pack Quantity Support**: Add numeric pack quantities with validation (numbers only)
- ✅ **Smart Generation Logic**: Only replaces placeholders that exist in your base title
- ✅ **Real-time Generation**: Instantly generate all possible combinations with a single click
- ✅ **One-Click Copy**: Copy all generated listings to clipboard with toast feedback
- ✅ **Results Management**: Clear results and start fresh anytime
- ✅ **Visual Feedback**: Live count display, numbered listing preview, and toast notifications
- ✅ **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

---

## 🎬 How to Use

**Step 1**: Enter your base product title with placeholders
```
Gildan Heavy Cotton T-Shirt for [color] Lovers, Size [size], Pack of [pack]
```

**Step 2**: Add your variants
- **Colors**: Type comma-separated values like "Black, Navy, Red, White"
- **Sizes**: Select from dropdown (XS-5XL) or type custom sizes like "XXS, 4XL"
- **Packs**: Type numeric values like "1, 2, 5, 12" (numbers only)

**Step 3**: Click "Generate Listings" and get results like:
```
Gildan Heavy Cotton T-Shirt for Black Lovers, Size XS, Pack of 1
Gildan Heavy Cotton T-Shirt for Black Lovers, Size XS, Pack of 2
Gildan Heavy Cotton T-Shirt for Navy Lovers, Size S, Pack of 1
... (all possible combinations)
```

**Step 4**: Copy all results to clipboard with one click or clear to start over!

---

## 📌 Project Status

> ✅ **MVP Complete**: Basic functionality implemented and working  
> 🛠️ **Active Development**: Adding new features and improvements  
> 🎯 **Next Milestone**: CSV export functionality and template saving

---

## 🗺️ Roadmap

### Phase 1: Core Features (✅ Complete)
- [x] Triple placeholder system (`[color]`, `[size]`, `[pack]`)
- [x] Advanced title generation with smart logic
- [x] Comma-separated color input with real-time parsing
- [x] CreatableSelect for sizes with predefined + custom options
- [x] Numeric pack quantity validation and input
- [x] One-click copy to clipboard with toast notifications
- [x] Results management (clear/reset functionality)
- [x] Modern glassmorphism UI design
- [x] Full responsive design (mobile, tablet, desktop)
- [x] TypeScript implementation

### Phase 2: Enhanced Functionality (📋 Planned)
- [ ] CSV/Excel export functionality
- [ ] Template saving and loading
- [ ] Bulk description generation
- [ ] Undo/Redo functionality
- [ ] Theme switching (dark/light mode)
- [ ] Drag and drop reordering of results

### Phase 3: Advanced Features (🗺 Future Vision)
- [ ] AI-powered content suggestions and optimization
- [ ] User accounts with cloud sync
- [ ] Usage analytics and insights
- [ ] Multiple marketplace optimizations (Amazon, eBay, Etsy)
- [ ] Batch processing for large datasets
- [ ] API integration for direct platform uploads
- [ ] Collaborative team features

---

## 🛠️ Troubleshooting

### Common Issues

**Issue**: "Nothing happens when I click Generate"  
**Solution**: Make sure you've entered a base title with at least one placeholder (`[color]`, `[size]`, or `[pack]`) and selected at least one variant for each placeholder used in your title.

**Issue**: "Pack values aren't being accepted"  
**Solution**: Pack quantities must be numeric values only (e.g., 1, 2, 5, 12). Letters or special characters will be rejected.

**Issue**: "Copy to clipboard doesn't work"  
**Solution**: This feature requires HTTPS or localhost. If you're on a different domain, manually select and copy the text.

**Issue**: "Custom sizes aren't being added"  
**Solution**: After typing your custom size in the dropdown, press Enter to create and add it to your selection.

**Issue**: "Colors entered with commas aren't showing up"  
**Solution**: Make sure there are no extra spaces or special characters. Use format: "Black, Navy, Red" (comma + space separation works best).

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
[Portfolio](https://jobayerahmed.vercel.app/) | [LinkedIn](https://www.linkedin.com/in/jobayerahmmed7/) | [GitHub](https://github.com/jobayer-ahmed7)

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

## 👥 Contributing

This is a personal tool born out of necessity, and contributions are welcome! Feel free to check the [issues](https://github.com/ahmed-jobayer/list-engine/issues) for ways to help out.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourFeature`)
3. Commit your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---



