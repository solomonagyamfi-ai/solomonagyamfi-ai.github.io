# Deploy Solomon Gyamfi's Portfolio with GitHub Pages

The site is built as plain HTML, CSS and JavaScript, so no build command or paid hosting is required.

## Repository details

- GitHub username: `solomonagyamfi-ai`
- Required personal Pages repository: `solomonagyamfi-ai.github.io`
- Expected live URL: `https://solomonagyamfi-ai.github.io/`
- Publishing branch: `main`
- Publishing folder: repository root (`/`)

## One-time GitHub setup

1. Sign in to GitHub.
2. Select **New repository**.
3. Enter `solomonagyamfi-ai.github.io` as the repository name.
4. Set visibility to **Public**.
5. Create the repository without adding starter files if you will push this prepared folder with Git.
6. In the repository, open **Settings → Pages**.
7. Under **Build and deployment**, select **Deploy from a branch**.
8. Select branch **main**, folder **/(root)**, then save.

GitHub notes that publication may take up to 10 minutes after a push.

## Push from Windows PowerShell

Open PowerShell inside the unzipped `github-portfolio` folder and run:

```powershell
git init
git add .
git commit -m "Launch professional data analytics portfolio"
git branch -M main
git remote add origin https://github.com/solomonagyamfi-ai/solomonagyamfi-ai.github.io.git
git push -u origin main
```

## Verify after deployment

1. Open `https://solomonagyamfi-ai.github.io/` in an incognito window.
2. Test the navigation on desktop and mobile.
3. Open all five case-study links.
4. Test the email, LinkedIn and GitHub links.
5. Confirm the GitHub avatar is professional and displays correctly.
6. Ask at least three peers, instructors or industry professionals for focused feedback.

## Suggested feedback questions

- Can you understand my professional value within 10 seconds?
- Which project appears strongest and why?
- Is any section confusing or too long?
- Do all links, filters and mobile navigation work?
- What would make you more confident in my analytical ability?

## Continuous improvement rhythm

- Review links monthly.
- Replace a weaker project whenever a stronger one is completed.
- Move the most relevant project to the top for each target role.
- Update screenshots and findings when analysis changes.
- Keep confidential data, credentials and API keys out of the repository.
- Record improvements with clear Git commit messages.

