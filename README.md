# bus-mall

#### Here I write the problem domain then the steps I made to solve the problem...

### Problem Domain

"You’ve been hired by a startup called BusMall, whose product is similar to the SkyMall catalog found in the seatback pockets on airplanes: a catalog of assorted high-markup products provided to a captive audience seeking a mental escape from the drudgery of travel. The difference with BusMall is that instead of their catalog being placed in airplanes, they are placed on local busses while commuting through traffic.

Since catalogs are expensive to print and distribute, and the products cost money to make and warehouse, and BusMall is a lean startup that needs to carefully watch its expenditures, BusMall wants to feature only the items in its catalog that are the most likely to sell.

This means that BusMall wants to do market analysis on proposed products to test their potential customer interest… before actually putting them into the catalog and getting the manufacturing wheels in motion.

To make this market analysis maximally effective, BusMall wants you to build an app that displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side) so you’ll need to manage the size and the aspect ratio of the images.

The app’s purpose is to have the group members choose which product, of the three displayed images, that they would be most likely to purchase, and then store, calculate, and visually display the resulting data.

To keep the product selection process as untainted as possible, you have been instructed to not allow any results to be shown to users until there have been a total of 25 selections made.

The marketing team is not only interested in the total number of clicks, but also the percentage of times that an item was clicked when it was shown. So, you’ll also need to keep track of how many times each image is displayed and do the calculations.

You are also responsible for the look and feel of the app, so don’t forget a custom font, color palette, layout with semantic HTML, and so on."

### Procedure of solving as steps:

1. Create repo named bus-mall that contains: README.md, CSS(reset.css,style.css),JS(app.js,chart.js), .gitignore and img/
2. Create .eslintrc file which is contain a copy of eslintrc.json file from our class repo.
3. Fill reset.css from https://meyerweb.com/eric/tools/css/reset/ ,link reset.css then style.css in index.html
4. Download all the images that exist in assets directory from out class repo and put it in img directory.
5. Prepare HTMl to start working on JavaScript to create random functions that generate images randomly
6. Generate 3 images out of 20 images from img directory to show side by side randomly in the browser.
7. Make the ability to receive clicks on those displayed images, and count the clicks for each picture.
8. Track how many times each image is displayed, for statistical purposes.
9. After receiving clicks, all the three images should be updated randomly without be repeated.
10. Next, make sure that the images in every round didn't repeat at least with direct next round.
11. After 25 selections / clicks(number of rounds mentioned in Problem domain), prevent clicking on images.
12. Display list of products with clicks received with each list.
13. Add chart.js and connect it to index.html, or work on single js file.
14. Connect the chart which show after finish rounds and click on button.
15. Make styling using CSS to enhance the appearance.
16. Create local storage that stores product names, source, likes(clicks), and shown(views).
