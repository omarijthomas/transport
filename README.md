# Faith Care Transportation Website

A responsive starter website for Faith Care Transportation.

## Included
- Responsive home page and navigation
- Services, about, service area, capability statement, FAQ, and contact sections
- Editable business details in `script.js`
- Basic inquiry form that opens an email draft (not a hosted form submission)
- Mobile menu and responsive styling

## IMPORTANT BEFORE PUBLIC LAUNCH
The phone number, email, service area, business hours, imagery, and some service descriptions are placeholders. Replace them with verified details.
- Do not claim certifications, licenses, insurance coverage, vehicle accessibility, or 24/7 availability unless confirmed.
- Confirm rights and suitability of all images before commercial use. The current photos are loaded from Unsplash URLs.
- The inquiry form does not send/store submissions automatically; it opens the visitor's email app. Configure and test a form service if you need submissions delivered reliably.
- Do not collect sensitive health information through a basic contact form.
- Add a privacy policy appropriate to your actual business and data practices.

## Preview locally
Open `index.html` in a browser. For best testing, use VS Code with the Live Server extension or run a local static server.

## Deploy to Vercel using GitHub
1. Create a GitHub account if you do not already have one.
2. Create a new repository, for example `faith-care-transportation`.
3. Upload the contents of this folder (not the ZIP file itself) to the repository.
4. In Vercel, sign in and choose **Add New → Project**.
5. Import the GitHub repository.
6. For this static HTML/CSS/JS site, you usually do not need a framework build command. Set the output directory to `.` if asked, and leave build command blank.
7. Deploy. Test the generated `vercel.app` address on a phone and computer.
8. To update the website later, edit the files in GitHub and commit the changes. Vercel will redeploy automatically.
9. To use your own domain, purchase one from a registrar and add it under the project's Vercel **Settings → Domains**. Follow Vercel's displayed DNS instructions exactly.

## Updating contact details
Open `script.js` and edit the `SITE_CONFIG` values near the top:
- `phoneDisplay`
- `phoneLink` (international format with country code, no spaces)
- `email`
- `serviceArea`
- `address`

Edit the page wording in `index.html` and the visual styling in `styles.css`.
