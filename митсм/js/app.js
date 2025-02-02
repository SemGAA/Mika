Vue.createApp({
    data() {
      return {
        users: [],
        user: {
            firstName: '',
            lastName: '',
            age: ''
         }
        }
    },
    mounted() {

        fetch('users.json')
            .then(response => response.json())
            .then(data => {
              this.users = data;
            })
      },
    methods: {
 
        addUser() {
           if (this.user.firstName && this.user.lastName && this.user.age) {
                this.users.push({ ...this.user });
                this.user.firstName = '';
                this.user.lastName = '';
                this.user.age = '';
            }
        },
        deleteUser(index) {
            this.users.splice(index, 1);
        }
    }
}).mount('#app');