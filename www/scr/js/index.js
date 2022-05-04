Vue.createApp({
    data() {
        return {
            username: ""
        }
    },
    methods: {
        
    },
    async mounted() {
        await axios.get('http://localhost:3000/checkUserLogin')
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    if (res.data === null) {
                        window.location.href = './../../login.html';
                    } else {
                        this.username = res.data.username;
                    }
                }
            })
            .catch((err) => {
                alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
            }) 
    },

}).mount('#app')