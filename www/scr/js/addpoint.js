Vue.createApp({
    data() {
        return {
            form: {
                idStd:"",
                idCourse:"" ,
                point:"" ,
              
                
               
            }
        }
    },
    methods: {
        async onAddpoint() {
               


                await axios.put('http://localhost:3000/addpoint', {
                    idStd:this.form.idStd,
                    idCourse: this.form.idCourse,
                    point: this.form.point, 
    
                })
                    .then((res) => {
                    
                        if (res.status === 200) {
                           // if(idStd==)
                            alert(res.data.msg);
                          
                        }
                    })
                    .catch((err) => {
                        alert('ไม่ถูกต้อง')
                    }) 
            
            
        },
        async onUpdatepoint() {
               
            console.log(this.form.idStd);
            await axios.post('http://localhost:3000/updatepoint', {
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