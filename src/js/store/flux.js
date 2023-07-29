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
					homeAddress: "1905 Snowhite St.",
					phone: "(305) 476-2006",
					email: "johnst@exampleemail.com"
				},
				{
					id: 2,
					name: "Jane Doe",
					homeAddress: "4545 NW 36th St.",
					phone: "(780) 345-1001",
					email: "missjdoe@exampleemail.com"
				},
				{
					id: 3,
					name: "John Deer",
					homeAddress: "7383 SW 1st St.",
					phone: "(805) 451-1331",
					email: "johndeer@exampleemail.com"
				},
				{
					id: 4,
					name: "James Shakespeare",
					homeAddress: "23 SW 45th Ave.",
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

			//add contact to the list
			addContact: (contact) => {
				// pulls contacts from the store
				let listOfContacts = getStore().contacts;
				// creates an id for the new contact and add rest of its info
				const newContact = {
					id: listOfContacts.length + 1,
					...contact
				};
				// adds new contact to the list
				setStore({ contacts: [...listOfContacts, newContact] });
			},

			//edit contact from the list
			editContact: (id, updatedContact) => {
				// pulls contacts from the store
				let listOfContacts = getStore().contacts;
				// if contact with id exists then update it
				const contactIndex = listOfContacts.findIndex(contact => contact.id === id);
				if (contactIndex !== -1) {
					const updatedContacts = [...listOfContacts];
					updatedContacts[contactIndex] = { id, ...updatedContact };
					// updates the contacts' info in the store
					setStore({ contacts: updatedContacts });
				}
			},
		}
	};
};

export default getState;
