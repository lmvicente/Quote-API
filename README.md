# Quote-API
Simple API using NodeJs/Express.  <br /> This allows you to get, post, pull, and delete quotes.

# GET
'/' : General "Home" Screen <br />
'/data' : Get the starter quotes

# POST
'/data' : Add new quote and author to the list.<br />
Requires quote and author in the request body.<br />
Example with Postman: https://prnt.sc/0jLMsCSpuwQq 

# PUT
'/data' : Update old quote with a new quote. <br />
Requires oldQuote and newQuote in the request body. <br />
Example with Postman: https://prnt.sc/jgs2OYeMBI4-

# DELETE 
'/data' : Delete an old quote using the ID. <br />
Requires id in the request body. (Uses the ID given in the GET endpoint) <br />
Example with Postman: https://prnt.sc/ioG-hKlUYIAd
