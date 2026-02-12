import supabase from './supabase.js'
// console.log(supabase);
//signin--------------------
async function signInform() {
    event.preventDefault()
    var sname = document.getElementById("name").value
    var semail = document.getElementById("email").value
    var spassword = document.getElementById("password").value
    var scpassword = document.getElementById("cpassword").value


    if (spassword !== scpassword) {
        alert("Passwords should be identical")
        return
    }
    const { data, error } = await supabase.auth.signUp({
  email: 'semail',
  password: 'spassword',
})
if(error) console.log("signup failed " + error.massage);


    var signindata = { sname, semail, spassword }
    localStorage.setItem("signindata", JSON.stringify(signindata))
    alert(sname + " Registered Successfully")
    
    // Clear fields after successful submission
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
    document.getElementById("cpassword").value = ""
    
     window.location.href = "/dashboard.html"  // Removed temporarily
}
//login----------------------

async function logInform() {
    event.preventDefault()
    
    var logemail = document.getElementById("lemail").value
    var logpass = document.getElementById("lpassword").value
    
    // ✅ Use ONLY Supabase for authentication
    const { data, error } = await supabase.auth.signInWithPassword({
        email: logemail,
        password: logpass
    })
    
    // ✅ Check for errors first
    if (error) {
        alert("Login failed: " + error.message)
        return
    }
    
    // ✅ Login successful - show success message
    Swal.fire({
        title: "Congratulations!",
        text: "You logged in successfully",
        icon: "success"
    });
    
    // Clear fields after successful login
    document.getElementById("lemail").value = ""
    document.getElementById("lpassword").value = ""
    
    window.location.href = "/dashboard.html"
}
// async function logInform() {
//     event.preventDefault()
//     var logemail = document.getElementById("lemail").value
//     var logpass = document.getElementById("lpassword").value

//     var getData = JSON.parse(localStorage.getItem("signindata"))
//     if (!getData) {
//         alert("No user found! Please sign up first.")
//         return
//     }
//      const { data, error } = await supabase.auth.signInWithPassword({
//         email: logemail,
//         password: logpass
//     })
//      Swal.fire({
//         title: "Congratulations!",
//         text: "You logged in successfully",
//         icon: "success"
//     });
    

//     if (getData.semail !== logemail) {
//         alert("Invalid Email")
//     }
//     else if (getData.spassword !== logpass) {
//         alert("Invalid Password")
//     }
//     else {
//         Swal.fire({
//             title: "Congratulations!",
//             text: "You logIn successfully",
//             icon: "success"
//         });
        
//         // Clear fields after successful login
//         document.getElementById("lemail").value = ""
//         document.getElementById("lpassword").value = ""
        
//         // window.location.href = "/dashboard.html"  // Removed temporarily
//     }
// }

window.logInform= logInform
window.signInform = signInform