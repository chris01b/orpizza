# ||pizza
## Motivation
Make discounted prices at &pizza accessible to everyone and earn a few dollars along the way.
## What this repo does
Hosts a website which directs users to pay me for a code that [my Firebase Cloud Function](https://github.com/chris01b/orpizza-backend) generates on the spot from a hidden page on [&pizza's website](https://andpizza.com). The website takes design elements from &pizza's website in order to seemlessly guide users through the payment process. It is no longer active in order to prevent abuse.
## Legal
During the period this was active, &pizza had no terms of use on its site. Terms of use can restrict the ways promo codes are used. &pizza should invest more in their legal department to ensure reselling promo codes breaks their TOS. As of this commit, &pizza has not responded to my emails or created a TOS.
## Install
```
npm install
```
## Run
```
npm run start
```
Navigate to http://localhost:8080. Please note that Stripe is no longer active. After paying for the code, the site would poll the Firebase Cloud Functions route for the promo code and then direct users to &pizza's checkout.
## Site Archive
Visit https://orpizza.org. Please note that the two named individuals were not involved in this project. They created abuse which led me to shut it down.
