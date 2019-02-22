<script>
	const myApiUrl = "http://localhost:3000/api/v1/employees/";

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
		/*deleteProjects(id) {
			fetch(myApiUrl + id, {
				method: 'delete',
				headers: {
					'Accept':'application/json',
					'Content-Type':'application/json'
				},
				body:JSON.stringify({
					"name":name,
  					"description":description,
  					"price":price,
  					"vat":vat
				})
			})
			.then((response) => {
				return response.json();
			})
		},
		editProduct(id, name, description, price, vat) {
			fetch(myApiUrl + id, {
				method: 'put',
				headers: {
					'Accept':'application/json',
					'Content-Type':'application/json'
				},
				body:JSON.stringify({
					"name":name,
  					"description":description,
  					"price":price,
  					"vat":vat
				})
			})
			.then((response) => {
				return response.json();
			})
		},*/
		getProduct(id) {
			return fetch(myApiUrl + id)
			.then((response) => {
                return response.json();
            })
		}

	}
</script>
