/*=============== SHOW / HIDE PASSWORD ===============*/
const togglePassword = (inputId, iconId) => {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);

  if (!input || !icon) return;

  icon.addEventListener("click", () => {
    input.type = input.type === "password" ? "text" : "password";

    icon.classList.toggle("ri-eye-fill");
    icon.classList.toggle("ri-eye-off-fill");
  });
};

togglePassword("password", "loginPassword");
togglePassword("passwordCreate", "loginPasswordCreate");


/*=============== SWITCH BETWEEN LOGIN & REGISTER ===============*/
const loginAccessRegister = document.getElementById("loginAccessRegister");
const buttonRegister = document.getElementById("loginButtonRegister");
const buttonAccess = document.getElementById("loginButtonAccess");

const loginSection = document.querySelector(".login__access");
const registerSection = document.querySelector(".login__register");


const showForm = (show, hide) => {
  hide.style.display = "none";
  show.style.display = "block";
};


buttonRegister.addEventListener("click", () => {
  loginAccessRegister.classList.add("active");
  showForm(registerSection, loginSection);
});


buttonAccess.addEventListener("click", () => {
  loginAccessRegister.classList.remove("active");
  showForm(loginSection, registerSection);
});


/*=============== COUNTRY & CITY DATA ===============*/
const citiesByCountry = {
  SA: [
    "Riyadh",
    "Jeddah",
    "Makkah",
    "Madinah",
    "Dammam",
    "Khobar",
    "Dhahran",
    "Taif",
    "Buraidah",
    "Unaizah",
    "Abha",
    "Khamis Mushait",
    "Najran",
    "Jazan",
    "Hail",
    "Tabuk",
    "Qatif",
    "Hofuf",
    "Mubarraz",
    "Yanbu",
    "Jubail",
    "Al Kharj",
    "Bisha",
    "Ar Rass",
    "Arar",
    "Sakaka",
    "Al Qunfudhah",
    "Al Lith",
    "Mahayel",
    "Rabigh",
    "Al Majmaah",
    "Al Baha",
    "Baljurashi",
    "Sharurah",
    "Sabya",
    "Baish",
    "Rijal Alma",
    "Al Duwadimi",
    "Wadi ad-Dawasir",
    "Al Mithnab",
    "Al Bukayriyah",
    "Az Zulfi",
    "Shaqraa",
    "Howtat Bani Tamim",
    "Rafha",
    "Al Qurayyat",
    "Nairyah",
    "Ras Tanura",
    "Al Uyaynah",
    "Al Muwayh",
    "Thadiq",
    "Al Hinakiyah"
  ],

  US: [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Miami"
  ],

  UK: [
    "London",
    "Manchester",
    "Birmingham",
    "Liverpool",
    "Leeds"
  ],

  CA: [
    "Toronto",
    "Vancouver",
    "Montreal",
    "Calgary",
    "Ottawa"
  ],

  AU: [
    "Sydney",
    "Melbourne",
    "Brisbane",
    "Perth",
    "Adelaide"
  ],

  DE: [
    "Berlin",
    "Munich",
    "Hamburg",
    "Frankfurt",
    "Cologne"
  ],

  FR: [
    "Paris",
    "Lyon",
    "Marseille",
    "Nice",
    "Toulouse"
  ]
};


/*=============== UPDATE CITIES ===============*/
function updateCities() {
  const countrySelect = document.getElementById("country");
  const citySelect = document.getElementById("city");

  if (!countrySelect || !citySelect) return;

  const selectedCountry = countrySelect.value;

  citySelect.innerHTML = '<option value="">Select a city</option>';

  if (citiesByCountry[selectedCountry]) {
    citiesByCountry[selectedCountry].forEach((city) => {
      const option = document.createElement("option");

      option.value = city;
      option.textContent = city;

      citySelect.appendChild(option);
    });
  }
}