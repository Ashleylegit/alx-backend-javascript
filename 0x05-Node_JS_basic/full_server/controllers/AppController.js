/*
* A module that simulates an app controller
*/

class AppController {
	//A function that returns a 200 status message
	static getHomepage(request, response) {
    response.send(200, 'Hello Holberton School!');
  }
}

export default AppController;
