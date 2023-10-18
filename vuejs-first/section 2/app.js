const app = Vue.createApp({
    template: "<h1>abc {{param1}}</h1>",
    data() {
        return {
            param1: "p1",
        }
    },
});
app.mount('#app')


const app1 = Vue.createApp({
    template: `
        {{isShow ? firstName + lastName : ""}}
        <button v-on:click="firstName='1 nốt nhạc'">changeName</button>
        <button v-on:click="onChangeName">changeNameByMethod</button>
        <button @click="onChangeNameAnotation">changeNameByMethodAnotation</button>

        <div class="model" v-if="isShowModel">
        <h1 >
            Model Content
        </h1>
        </div>
    `,
    data() {
        return {
            firstName: "david",
            lastName: "moi",
            isShow: true,
            isShowModel: true
        }
    },
    methods: {
        onChangeName() {
            console.log("app", this);
            this.firstName = 'lionel';
            this.lastName = 'ronaldo'
        },

        onChangeNameAnotation() {
            this.firstName = 'Alexsandra';
            this.lastName = 'william'
            this.isShowModel = !this.isShowModel;
        }
    },
});
app1.mount('#app1')



const app2 = Vue.createApp({
    data() {
        return {

        }
    },
    methods: {
        onLogEvent() {
            console.log("mouse over ver ver ver...");
        },

        onLeaveEvent() {
            console.log("leave leave...");
        },
        onDBEvent() {
            console.log("dup ...");
        },
    },

});


const app3 = Vue.createApp({
    data() {
        return {
            linkImg: "abcd",
            products: [
                {
                    name: "iphone",
                    price: 100
                },
                {
                    name: "samamsung ",
                    price: 200.000
                },
                {
                    name: "xiaomi",
                    price: 300
                },
                {
                    name: "nokia",
                    price: 400
                }
            ]
        }
    },
    methods: {

    },
    computed: {
        productsComputed() {
            console.log(this.products.filter((item) => item.price > 250).map((i) => i.price));
            return this.products.filter((item) => item.price > 250).map((i) => i.price);
        },
    }

});

app3.mount('#app3')