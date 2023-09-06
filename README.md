# sundaland
A RAINFOREST... LIKE AMAZON, YA KNOW

THIS IS MY CAPSTONE PROJECT TO GRADUATE. 

USING API EXPRESS REACT VITE AND NODE



CSS 3P COMPONENTS: https://neumorphism.io/; https://unsplash.com/s/photos/free; https://mui.com/, GOOGLE FONTS


hopefully we hit all of these:

AS A USER (NOT LOGGED IN), I SHOULD BE ABLE TO:
Access the website via the internet so I can browse and purchase products. (Deployed on a front end host)
View all available products.
View the details for an individual product, including product descriptions, photos, price, etc.
Sort products by certain characteristics (name, price, etc.).
Filter products by certain characteristics (category, type, maximum/minimum price, etc.).
Enjoy an aesthetically pleasing website with intuitive and easy to use UI/UX

AS A USER (LOGGED IN), I SHOULD BE ABLE TO:

Add an item to my cart
Have a persistent cart to revisit and pick up where I left off.

For example, I add items to my cart, close my window and go back to the website later, those items should persist.
Edit my cart if I change my mind:
Change the quantity of a product in my cart.
Remove a product from my cart.
"Check out" the items in my cart, i.e., purchase the products.

Think of the user experience when checking out on a typical e-commerce site like Amazon, etc. You can start by simulating the experience of checking out with a simple confirmation page.


TIER 2: E-Commerce Stretch
Optional: Create a fully-functional back-end application from scratch or using this starter for back-endLinks to an external site.  

AS A USER (NOT LOGGED IN), I WANT TO BE ABLE TO:
All website features usable no matter my device type (phone, tablet, laptop, desktop)
UI tailored to my device size (phone, tablet, laptop, desktop)
Navigate the website successfully regardless of ability.
This is a great opportunity to dive into ADA Compliance (screen-reader friendliness, keyboard navigation, colorblind-friendly, etc.).
Resources:
A11y ChecklistLinks to an external site.
WebAIM Contrast CheckerLinks to an external site.
Know when content is loading or if there is an error, so I can manage my expectations as a user
Examples: 
Show loading indicators while the frontend is waiting for a backend response.
If I visit a product page that does not exist, notify me and give me a link to go to a list of all products or back to the previous page.
Enhance shopping cart functionality
When I open the browser on a different device and log in, I want to see those items in my cart (Requires persistent DB and API)
No one else should be able to edit my cart except me (Requires persistent DB and API)
There are two more experiences to consider here. Explore your favorite websites to see what the intended behavior is for the following cases:
Guest-only: I do not want to create an account, but I want my cart to persist between browser refreshes.
(Requires custom back end (DB and API) OR localStorage)
Guest-to-logged-in-user: Initially, I am not logged in, and I add items to my cart. When I eventually log in, I want to see those same items I added when I was logged in still in my cart, in addition to the items I may have had in my cart from a previous logged-in session. (Requires custom back end (DB and API) OR localStorage)
Add a real Stripe API to the checkout workflow (Requires custom back end (DB and API) OR localStorage)
Write a review for a product. This can be a modal, an on-page form, or a rating icon (Five Stars)
AS A USER (LOGGED IN), I SHOULD BE ABLE TO:
Remain logged in on separate sessions. (Requires custom back end (DB and API) OR localStorage)
See my order history to remember my previously purchased items and their prices at the time of purchase. (Requires custom back end (DB and API) OR localStorage)
View and edit my user profile so I can update my information when necessary. (Requires custom back end (DB and API) OR localStorage)
Product reviews should be associated with the correct user. (Requires custom back end (DB and API) OR localStorage)
