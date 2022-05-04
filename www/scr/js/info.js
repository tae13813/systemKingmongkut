Vue.createApp({
    created(){
        this.oninfo();
    },
    data() {
        return {
          data:[],
        }
      
    },
    methods: {
        async oninfo() {
            await axios.post('http://localhost:3000/showUser', {
            })
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res.data.data1);
                        this.data=res.data.data1;
                        // localStorage.setItem("dataUser", JSON.stringify(res.data.data));
                      //     window.location.href = '../www/Menu.html';
                    }
                })
                .catch((err) => {
                    alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
                }) 
        }
    },
}).mount('#app')