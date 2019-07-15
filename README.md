# Valve status API
Simple API to check if a valve is in open or closed state

## Routes

GET: http://valvestatus.herokuapp.com 
  * Get current valve status

POST: http://valvestatus.herokuapp.com 
  * Change valve status. Needs json data with key: 'status' and value: 'Open' or 'Closed' e.g. {'status': 'Open'}. No other state than 'Open' or 'Closed' are accepted. API responds with http status 201 upon succesful valve status change. See also [this test](https://github.com/Altesmi/valvestatusapi/blob/master/requests/requestTest.py) which shows how to call the API using Python and requests library

GET http://valvestatus.herokuapp.com/logs
  * Retrieve valve status logs. The database only stores 100 most recent status