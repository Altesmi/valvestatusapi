# Valve status API
Simple API to check if a valve is in open or closed state

## Routes

GET: http://valvestatus.herokuapp.com 
  * Get current valve status

POST: http://valvestatus.herokuapp.com 
  * Change valve status. Needs json data with ey: 'status' and value: 'Open' or 'Closed'

GET http://valvestatus.herokuapp.com/logs
  * Retrieve valve status logs. The database only stores 100 most recent statuses