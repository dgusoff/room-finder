## what is this, anyway?

So, I had this vision...

After watching the [SharePoint Spaces](https://www.microsoft.com/en-us/microsoft-365/blog/2018/05/21/sharepoint-innovations-transform-content-collaboration-with-mixed-reality-and-ai/) demo that came out the the 2018 SharePoint Conference, I thought the bar was pretty low, and I could build somehting more useful than that myself.

I'd played around a bit with Babylon.js and work with SharePoint Web Parts on a daily basis and wondered what it would take to get a 3D Babylon-driven application embedded into a SharePoint web part.  That's what this repo is all about.

In the first verison I was able to get a simple Babylon app embedded into the Web Part in about 30 minutes.  My long-term goal is to render a 3D model of my comapny's office with clickable areas to view availability of conference rooms in the office.



This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
