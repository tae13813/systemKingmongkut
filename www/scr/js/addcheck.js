Vue.createApp({
    data() {
        return {
            form: {
                idStd:"",
                idCourse:"" ,
                check:"" ,
               
            }
        }
    },
    methods: {
        async onAddCheck() {
           
                await axios.post('http://localhost:3000/addcheck', {
                    idStd:this.form.idStd,
                    idCourse: this.form.idCourse,
                    check: this.form.check, 
                })
                    .then((res) => {
                        if (res.status === 200) {
                            alert(res.data.msg);
                          
                        }
                    })
                    .catch((err) => {
                        alert('ไม่ถูกต้อง')
                    }) 
            
            
        },
        async onUpdatecheck() {
               
            console.log(this.form.idStd);
            await axios.post('http://localhost:3000/updatecheck', {
                idStd:this.form.idStd,
                idCourse: this.form.idCourse,
                point: this.form.point, 


            })
                .then((res) => {
                
                    if (res.status === 200) {
                      
                        alert(res.data.msg);
                     console.log(res.data.data._id);
                      
                    }
                })
                .catch((err) => {
                    alert('ไม่ถูกต้อง')
                    console.log(this.form.idStd);
                }) 
        
        
    }
    },
}).mount('#app')