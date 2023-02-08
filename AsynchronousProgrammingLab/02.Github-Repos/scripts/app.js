function loadRepos() {

	const usernameElement = document.getElementById('username').value;
	const reposElement = document.getElementById('repos');
	const url = `https://api.github.com/users/${usernameElement}/repos`;

	fetch(url)
		.then(errorResponse)
		.then(output)
		.catch(error)

	function errorResponse(response) {
		if (response.ok == false) {
			throw new Error(`${response.status} ${response.statusText}`);
		}
		return response.json();
	}

	function output(data) {
		reposElement.innerHTML = '';
		for (const repo of data) {
			reposElement.innerHTML +=
				`
			<li>
			<a href="${repo.html_url}">
				${repo.full_name}
			</a>
				</li>
			`
		}
	}

	function error(err) {
		reposElement.innerHTML = `${err.message}`;
	}
}
