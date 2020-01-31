**SuperSmoothie**

LIVE APP: https://flowingcreyes-supersmoothie.herokuapp.com/

---
**OVERVIEW**

SuperSmoothie is a smoothie generator and forum for users to get quality and delicious smoothie reciped pulled from a database and showed to them. Emailing recipes to oneself is an option with each and every recipe.

---
**STEPS**

(configure database permissions in db/config)

(add megasecret, cookieSecret, API keys in a .env)

1. npm install
2. run: sequelize db:migrate && sequelize db:migrate --env test
3. npm start
4. go to localhost:3000
