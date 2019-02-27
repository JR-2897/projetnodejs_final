<script>
const myApiUrl = "http://localhost:3000/api/v1/projects/";

export default {
	getProjects () {
		return fetch(myApiUrl)
		.then ((response) => {
			return response.json();
		})
	},
	createProject(name, description, begin_date, end_date, total_cost, status) {
		fetch(myApiUrl, {
			method: 'post',
			headers: {
				'Accept':'application/json',
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
				"name":name,
				"description":description,
				"begin_date":begin_date,
				"end_date":end_date,
        "total_cost":total_cost,
        "status":status
			})
		})
		.then((response) => {
			return response.json();
		})
	},
	getProject(id) {
		return fetch(myApiUrl + id)
		.then((response) => {
      return response.json();
    })
	}
}
</script>
