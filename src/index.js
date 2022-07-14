/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request) {
		const errorPage = `
		<!DOCTYPE html>
			<head>
				<body>
					<div>
						<h1>503 Internal Server Error<h1/>
				 	<div/>
					<div>
						<img src="Larry.jpg" alt="LarryBoy">
						<h5>Please try again later<h5/>
					<div/>
				</body>
			</head>
		</html>
		`
		return new Response(errorPage, {headers: {'content-type': 'text/html'}});
	},
};
