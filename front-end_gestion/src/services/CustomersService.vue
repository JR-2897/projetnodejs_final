<script>
const myApiUrl = "http://localhost:3000/api/v1/customers/";

export default {
	getCustomers () {
		return fetch(myApiUrl)
		.then ((response) => {
			return response.json();
		})
	},
	createCustomer(company, street, city, postal_code, name, first_name, phone_number, email_address, business_line) {
		fetch(myApiUrl, {
			method: 'post',
			headers: {
				'Accept':'application/json',
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
				"company":company,
				"address": {
          "street":street,
          "city":city,
          "postal_code":postal_code
        },
				"contact": {
          "name":name,
					"first_name":first_name,
	         "phone_number":phone_number,
	         "email_address":email_address,
        },
        "business_line":business_line
			})
		})
		.then((response) => {
			return response.json();
		})
	},
	getCustomer(id) {
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
	},
	updateCustomer(id, company, street, city, postal_code, name, first_name, phone_number, email_address, business_line) {
		fetch(myApiUrl + id, {
			method: 'put',
			headers: {
				'Accept':'application/json',
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
				"company":company,
				"address": {
          "street":street,
          "city":city,
          "postal_code":postal_code
        },
				"contact": {
          "name":name,
					"first_name":first_name,
	        "phone_number":phone_number,
	        "email_address":email_address,
        },
        "business_line":business_line
			})
		})
		.then((response) => {
			return response.json();
		})
	}

}
</script>
