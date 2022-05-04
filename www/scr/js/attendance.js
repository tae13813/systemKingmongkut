Vue.createApp({
    created(){
        this.onAttendance();
    },
    data() {
        return {
          data:[],
        }
      
    },
    methods: {
        async onAttendance() {
            await axios.get('http://localhost:3000/showCheck', {
            })
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res.data.data1);
                        this.data=res.data.data1;
                        // localStorage.setItem("dataUser", JSON.stringify(res.data.data));
                      //     window.location.href = '../www/Menu.html';
                    }
                    else{
                        alert(res)
                    }
                })
                .catch((err) => {
                    alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
                }) 
        },
      
    },
}).mount('#app')