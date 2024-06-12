
# npm install react-cookie
# npm install react-icons
# npm install react-circular-progressbar

npm install gh-pages --save-dev

# Add the following 5 lines in package.json
"homepage": "https://<username>.github.io/<repository>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

npm run deploy

loging to git and click + in the right corner and add "retirementclock"

git init
git add .
git commit -m 'Initial commit'
git remote add origin https://github.com/premudayan/retirementclock.git
git remote -v   ///verify remore url

git branch     /// check what is the default branch and update the brach below
git push -u origin master    /// This will ask you to authenticate

// https://app.netlify.com/sites/myretirementclock/overview

Deployment Example for Netlify
    Create Account: Sign up at Netlify.
    Connect Repository: Link your GitHub repository.
    Set Build Command: Use npm run build and set the publish directory to build.
    Deploy: Netlify will handle the build and deployment automatically. Your app will be live on a free subdomain or a custom domain if you configure one.

#After any changes do the following:
git add .
git commit -m "Updated background image"
git push origin master