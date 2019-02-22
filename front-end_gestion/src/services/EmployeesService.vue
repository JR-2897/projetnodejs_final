<script>
	const myApiUrl = "http://localhost:3000/api/v1/employees/";

	export default {
		getEmployees () {
			return fetch(myApiUrl)
			.then ((response) => {
				return response.json();
			})
		},
		createEmployee(name, first_name, username, address, phone_number, email_address, office) {
			fetch(myApiUrl, {
				method: 'post',
				headers: {
					'Accept':'application/json',
					'Content-Type':'application/json'
				},
				body:JSON.stringify({
					"name":name,
  				"first_name":first_name,
  				"username":username,
  				"address": {
            "street":street,
            "city":city,
             "postal_code":postal_code
          },
          "phone_number":phone_number,
          "email_address":email_address,
          "office":office
				})
			})
			.then((response) => {
				return response.json();
			})
		}
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
		},
		getProduct(id) {
			return fetch(myApiUrl + id)
			.then((response) => {
                return response.json();
            })
		}*/

	}
</script>
