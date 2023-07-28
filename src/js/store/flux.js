const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			contacts: [
				{
					id: 1,
					name: "John St Cloud",
					home_address: "1905 Snowhite St.",
					phone: "(305) 476-2006",
					email: "johnst@exampleemail.com"
				},
				{
					id: 2,
					name: "Jane Doe",
					home_address: "4545 NW 36th St.",
					phone: "(780) 345-1001",
					email: "missjdoe@exampleemail.com"
				},
				{
					id: 3,
					name: "John Deer",
					home_address: "7383 SW 1st St.",
					phone: "(805) 451-1331",
					email: "johndeer@exampleemail.com"
				},
				{
					id: 4,
					name: "James Shakespeare",
					home_address: "23 SW 45th Ave.",
					phone: "(205) 345-1311",
					email: "literature@exampleemail.com"
				},
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			//delete contact from the list
			deleteContact: (contact) => {
				//pulls the contacts in the store
				let listOfContacts = getStore().contacts;
				//filters the contact and generates new array
				setStore({ contacts: listOfContacts.filter((item) => item !== contact) });
			},

			// //edit contact from the list
			// editContact: (contact) => {
			// 	//pulls the contacts in the store
			// 	let listOfContacts = getStore().contacts;

			// },

		}
	};
};

export default getState;
