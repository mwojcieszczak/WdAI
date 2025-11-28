const URL = "https://dummyjson.com/products"

const fetchData = async (url) =>{
	const res = await fetch(url)

	return await res.json()
}

const fillTable = (table, products) => {

	table.innerHTML = "<tr><th>Photo</th><th>Title</th><th>Description</th></tr>"

	products.forEach(product => {
		const tr = document.createElement("tr")

		const photo = document.createElement("td")
		const title = document.createElement("td")
		const description = document.createElement("td")
		const image = document.createElement("img")

		image.src = product.thumbnail

		photo.appendChild(image)

		title.innerText = product.title
		description.innerText = product.description

		tr.appendChild(photo)
		tr.appendChild(title)
		tr.appendChild(description)

		table.appendChild(tr)
	});
}


window.onload = async () =>{
	const table = document.getElementById("table")
	const search = document.getElementById("search")
	const sort = document.getElementById("sort")

	const data = await fetchData(URL)

	fillTable(table, data.products)

	search.oninput = () =>{
		const value = search.value

		const filtered = data.products.filter((product)=> product.title.toLowerCase().indexOf(value.toLowerCase()) > -1 )

		fillTable(table, filtered)
	}

	sort.onchange  = () =>{
		const value = search.value

		const filtered = data.products.filter((product)=> product.title.toLowerCase().indexOf(value.toLowerCase()) > -1 )

		switch(sort.value){
			case "orig":
				fillTable(table, filtered)
				break
			case "asc":
				filtered.sort((p1, p2)=>{
					if (p1.title>p2.title) return 1
					if (p1.title<p2.title) return -1
					return 0
				})
				fillTable(table, filtered)
				break
			case "desc":
				filtered.sort((p1, p2)=>{
					if (p1.title<p2.title) return 1
					if (p1.title>p2.title) return -1
					return 0
				})
				fillTable(table, filtered)
				break
		}
	}

}