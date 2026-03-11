# canteen
this website is useful for ordering/pre-ordering the food from the college canteen 
1. Install Git

Download and install:

👉 Git

After installation check:

Open Command Prompt and type:

git --version

If it shows version → Git installed successfully ✅

2. Create GitHub Account

Go to:

👉 https://github.com

Create an account if you don't have one.

3. Create New Repository

Login to GitHub

Click New Repository

Repository name:

college-canteen-system

Select:

Public

Click Create Repository

4. Open Your Project Folder

Example project folder:

canteen-project

Inside it you may have:

frontend
backend
api
css
js

Open Command Prompt in this folder.

Shortcut:

Shift + Right Click → Open PowerShell here
5. Initialize Git

Run:

git init

This creates a .git folder for version control.

6. Add All Files
git add .

This stages all files for commit.

7. Commit Files
git commit -m "Initial commit - canteen project"

This saves your first version.

8. Connect to GitHub Repository

Copy the repository URL from GitHub.

Example:

https://github.com/anish/college-canteen-system.git

Run:

git remote add origin https://github.com/yourusername/college-canteen-system.git
9. Push Project to GitHub

Run:

git branch -M main
git push -u origin main

Enter your GitHub username and password/token if asked.

10. Check GitHub

Refresh your repository page.

You will now see:

index.html
menu.html
api/
css/
js/

Your project is now uploaded 🎉

11. Updating Code Later

If you change something in the project:

Run:

git add .
git commit -m "Updated canteen features"
git push

GitHub will update automatically.

12. Your GitHub Workflow
Edit Code
   ↓
git add .
   ↓
git commit
   ↓
git push
   ↓
GitHub Repository Updated

✅ Extra tip (very useful for college projects):

Add a README.md file explaining your project.

Example:

Smart College Canteen System
Features:
- Online food ordering
- Token system
- Admin panel
- Live order status

Teachers often check this on GitHub.

If you want, I can also show you how to deploy your project so anyone can open your canteen website online (like a real website) using:

Vercel

Netlify

It takes only 3 minutes after uploading to GitHub.
