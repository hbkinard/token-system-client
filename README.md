**_A few design notes:_**

After thinking through “a simple UI” in my design process, I decided to have four main components (a game center component, a card refill component, a user status component, and a ledger component) all in one arcade container instead of routing them to different “pages”. Were this app to grow in features and content, I would employ Angular routing and services to manage data flow and usability. 

The card refill component does input validation such that between 1 and 1,000 tokens can be purchased at a time, and users cannot enter non-number characters.

**_Additional Feature #1: Payment system_**

We will eventually need to implement a payment system so that users can elect to pay with a credit card, PayPal, or other payment source. With this feature, I would definitely move the “card-refill” component off of the main arcade “page” and route to its own spot. Security considerations are very important with this feature. How do we ensure safe transactions? For example, if we are using Node.js to handle service requests and database operations, are our CORS settings secure? What if the user disputes a charge? In that case, we need to expand our transaction ledger to include more info about the transaction, but we should be mindful of security and what information is being displayed on a web page.


**_Additional Feature #2: Gifting tokens to another user_**

An example use case is a parent who can, within their own account, add tokens to their child’s account so that the child can play games but cannot purchase tokens. This feature assumes a backend that stores user accounts, handles authentication, etc. The parent could “connect” with the child and hence have access to the token gifting functionality. If a child created an account without a payment source, then what content would they be served in place of transaction history and card refill? One great thing about web frameworks like Angular is that we can easily cater content to the type of user logged in. So, in place of transaction history, we could offer game history in the form of stats like win/loss percentage, time played, and even perhaps rankings compared to other players in the system. 


**_Additional Feature #3: Discounts for bulk token purchases_**

This feature falls into the user engagement category and may not apply to every type of token tracking system. It would apply to an arcade, so if we want to encourage users to visit our site, we could adapt the “card-refill” component to give discounts for bulk token purchases. To take the user engagement idea a little further, what if our system allowed certain accomplishments in games to earn more tokens?
