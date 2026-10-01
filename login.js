/*=============== SHOW HIDE PASSWORD LOGIN ===============*/
const passwordAccess = (loginPass, loginEye) =>{
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye)

   iconEye.addEventListener('click', () =>{
      // Change password to text
      input.type === 'password' ? input.type = 'text'
						              : input.type = 'password'

      // Icon change
      iconEye.classList.toggle('ri-eye-fill')
      iconEye.classList.toggle('ri-eye-off-fill')
   })
}
passwordAccess('password','loginPassword')

/*=============== SHOW HIDE PASSWORD CREATE ACCOUNT ===============*/
const passwordRegister = (loginPass, loginEye) =>{
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye)

   iconEye.addEventListener('click', () =>{
      // Change password to text
      input.type === 'password' ? input.type = 'text'
						              : input.type = 'password'

      // Icon change
      iconEye.classList.toggle('ri-eye-fill')
      iconEye.classList.toggle('ri-eye-off-fill')
   })
}
passwordRegister('passwordCreate','loginPasswordCreate')

/*=============== SHOW HIDE LOGIN & CREATE ACCOUNT ===============*/
const loginAcessRegister = document.getElementById('loginAccessRegister'),
      buttonRegister = document.getElementById('loginButtonRegister'),
      buttonAccess = document.getElementById('loginButtonAccess')

buttonRegister.addEventListener('click', () => {
   loginAcessRegister.classList.add('active')
})

buttonAccess.addEventListener('click', () => {
   loginAcessRegister.classList.remove('active')
})


const showForm = (show, hide) => {
  hide.style.display = "none";
  hide.classList.remove("active");
  
  show.style.display = "block";
  setTimeout(() => {
    show.classList.add("active");
  }, 10);
};

buttonRegister.addEventListener("click", () => {
  showForm(document.querySelector(".login__register"), document.querySelector(".login__access"));
});

buttonAccess.addEventListener("click", () => {
  showForm(document.querySelector(".login__access"), document.querySelector(".login__register"));
});
const citiesByCountry = {
   SA: [
   "Riyadh", "Jeddah", "Makkah", "Madinah", "Dammam", "Khobar", "Dhahran",
   "Taif", "Buraidah", "Unaizah", "Abha", "Khamis Mushait", "Najran", "Jazan", "Hail", "Tabuk",
   "Qatif", "Hofuf", "Mubarraz", "Yanbu", "Jubail", "Al Kharj", "Bisha", "Ar Rass", "Arar",
   "Sakaka", "Al Qunfudhah", "Al Lith", "Mahayel", "Rabigh", "Al Majmaah", "Al Baha", "Baljurashi",
   "Sharurah", "Sabya", "Baish", "Rijal Alma", "Al Duwadimi", "Wadi ad-Dawasir", "Al Mithnab",
   "Al Bukayriyah", "Az Zulfi", "Shaqraa", "Howtat Bani Tamim", "Rafha", "Al Qurayyat", "Nairyah",
   "Ras Tanura", "Al Uyaynah", "Al Muwayh", "Thadiq", "Al Hinakiyah"
   ],
    US: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'],
    UK: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds'],
    CA: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
    AU: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
    DE: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne'],
    FR: ['Paris', 'Lyon', 'Marseille', 'Nice', 'Toulouse']
  };

  function updateCities() {
    const countrySelect = document.getElementById('country');
    const citySelect = document.getElementById('city');
    const selectedCountry = countrySelect.value;

    // Clear current options
    citySelect.innerHTML = '<option value="">Select a city</option>';

    if (citiesByCountry[selectedCountry]) {
      citiesByCountry[selectedCountry].forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
      });
    }
  }

  const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showLoginBtn = document.getElementById("showLoginBtn");
const showRegisterBtn = document.getElementById("showRegisterBtn");

// عند الضغط على "Register"
showRegisterBtn.addEventListener("click", () => {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

// عند الضغط على "Login"
showLoginBtn.addEventListener("click", () => {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});


  flatpickr("#birthdate", {
    dateFormat: "d/m/Y", // يوم/شهر/سنة
    locale: "en"         // يخليها بالإنجليزي
  });