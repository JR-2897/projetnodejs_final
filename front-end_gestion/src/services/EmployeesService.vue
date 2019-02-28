<script>
const myApiUrl = "http://localhost:3000/api/v1/employees/";

export default {
	getEmployees () {
		return fetch(myApiUrl)
		.then ((response) => {
			return response.json();
		})
	},
	createEmployee(name, first_name, username, birth_date ,street, city, postal_code, phone_number, email_address, office) {
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
				"birth_date":birth_date,
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
	},
	getEmployee(id) {
		return fetch(myApiUrl + id)
		.then((response) => {
    	return response.json();
    })
	},
	deleteCustomer(id) {
		return fetch(myApiUrl + id, {
			method: "delete"
		})
		.then((response) => {
			return response.json();
		})
	}
}
</script>
