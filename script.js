(function () {
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text) {
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Img, name, text)

        customers.push(customer)
    }

    createCustomer(1, 'Messi', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt suscipit veniam odio dolorum. Voluptatum eius autem expedita odit temporibus explicabo saepe esse voluptatibus maxime. Nostrum doloremque odit expedita quis quibusdam?')
    createCustomer(2, 'Madona', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt suscipit veniam odio dolorum. Voluptatum eius autem expedita odit temporibus explicabo saepe esse voluptatibus maxime. Nostrum doloremque odit expedita quis quibusdam?')
    createCustomer(3, 'Sunil Chetri', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt suscipit veniam odio dolorum. Voluptatum eius autem expedita odit temporibus explicabo saepe esse voluptatibus maxime. Nostrum doloremque odit expedita quis quibusdam?')
    createCustomer(4, 'Ronaldo', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt suscipit veniam odio dolorum. Voluptatum eius autem expedita odit temporibus explicabo saepe esse voluptatibus maxime. Nostrum doloremque odit expedita quis quibusdam?')

    btn.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains('prevBtn')) {
                if (index === 0) {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++
                if (index === customers.length) {
                    index = 0
                }

                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })
})()