# FriendFinder


<hr>

Overview: <br>
This application is designed to help you find a matching friend with likes and personalities. 

Answer a few questions to find out who is the best match for your personality.


Code Explanation
Our server.js file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and also the routes, which we have externalized
There are 2 separate HTML files (home.html and survey.html) that serve as the front-end portion of our code; they determine what the user sees (the homepage and the survey, which will also show the resulting best match)<br>
Our 2 routing files (htmlRoutes.js and apiRoutes.js) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in our server-side data or add new friends.<br>
Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object
A modal is then toggled, displaying the the best match to the person who just took the survey
<br>
<br>
Friends are stored as such:
{
	
	scores: [5, 1, 2, 3, 1, 2, 5, 1, 1, 1]
}

<h1>Technologies utilized</h1>

<ul>
	<li>Bootstrap</li>
	<li>Javascript</li>
	<li>HTML</li>
	<li>Node</li>
	<li>JQuery</li>
	<li>Node.js</li>
	<li>Express.js</li>
</ul>
