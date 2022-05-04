Vue.createApp({
    created(){
        this.onresult();
    },
    data() {
        return {
          data:[],
        }
      
    },
    methods: {
        async onresult() {
            await axios.get('http://localhost:3000/result', {
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
                const dates = [
                    new Date(2017, 4, 13),
                    new Date(2018, 2, 12),
                    new Date(2016, 0, 10),
                    new Date(2016, 0, 9)
                  ];
                  const maxDate = (dates) => new Date(Math.max(dates));
                  
                  
                  maxDate(dates);
                  console.log(maxDate);
        }
    },
}).mount('#app')