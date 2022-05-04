Vue.createApp({
    created(){
        this.logout();
    },
    data() {
        return {
          data:[],
        }
      
    },
    methods: {
        async logout() {
            await axios.get('http://localhost:3000/logout', {
            })
                .then((res) => {
                    if (res.status === 200) {
                        alert(res.data.msg);
                        window.location.href = '../www/index.html'
                        localStorage.removeItem('dataUser');
                    }
                })
                .catch((err) => {
                    alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
                }) 
        }
    },
}).mount('#app')