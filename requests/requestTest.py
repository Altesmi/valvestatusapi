import requests
import datetime

URL = 'http://valvestatus.herokuapp.com'

LOG_URL = 'http://valvestatus.herokuapp.com/logs'

# post to server and save the time the post request was sent
dataToSendServer = {'status': 'Open'}

postReq = requests.post(url=URL,json=dataToSendServer)

timePostReqSent = datetime.datetime.utcnow()

# perform get request to server

getReq = requests.get(url=URL)

#if requests is successfull getReq.json()['status'] should be open
data = getReq.json()
print(data)

if data['status'] == 'Open':
  #calculate timedelta
  servertime = datetime.datetime.strptime(data['datetime'],'%Y-%m-%dT%H:%M:%S.%fZ')
  delta = timePostReqSent - servertime
  print('SERVER STATUS MATCHES THE SENT STATUS')
  print('DIFFERENCE COMPUTER AND SERVER TIME')
  print(delta)
else:
  print('SERVER SENT STATUS=CLOSED, SHOULD HAVE SENT STATUS=OPEN')


#Get logs from the server and print them

r = requests.get(url=LOG_URL)

logs = r.json()

for log in logs:
  print(str(datetime.datetime.strptime(log['datetime'],'%Y-%m-%dT%H:%M:%S.%fZ')) + '\t' + log['status'])

