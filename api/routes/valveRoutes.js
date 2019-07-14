import valveController from '../controllers/valveController'

const routeFunction = function(app) {
  app.route('/')
  .get(valveController.returnValveStatus)
  .post(valveController.changeValveStatus)

  app.route('/logs')
  .get(valveController.returnLogs)
}

export default routeFunction