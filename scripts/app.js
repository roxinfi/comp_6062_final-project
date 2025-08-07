const errormessage = 'Error in fetching data from API: ';

const app = Vue.createApp({
    data() {
        return {

            myname: 'Vraj Patel',
            myid: '12434376',
            // Random User Module
            user: {},

            // Weather Module
            weather: {
                city: 'London', // Default city for initial load
                province: 'Ontario', // Default province for initial load
                country: 'Canada' // Default country for initial load
            },
            weatherData: {},

            // Dictionary Module
            dictionary: {},
            meaningofword: '' // Default word for initial load
        }
    },

    methods: {
        // Fetch Random User
        getRandomUser() {
            const url1 = `https://comp6062.liamstewart.ca/random-user-data`;
            fetch(url1)
                .then(response => {return response.json();})
                .then(data => {
                    this.user = data;
                })
                .catch(error => console.error(errormessage, error));
        },

        getWeatherData() {
            const url2 = `https://comp6062.liamstewart.ca/weather-data?city=${this.weather.city}&province=${this.weather.province}&country=${this.weather.country}`;
            fetch(url2)
                .then(response => {return response.json();})
                .then(data => {
                    this.weatherData = data;
                })
                .catch(error => console.error(errormessage, error));
        },

        getDefinition() {
            const url3 = `https://comp6062.liamstewart.ca/api/define?word=${this.meaningofword}`;
            fetch(url3)
                .then(response => {return response.json();})
                .then(data => {
                    this.dictionary = data;
                })
                .catch(error => console.error(errormessage, error));
        }
    },

    created() {
        // Auto-load on page load
        this.getRandomUser();
        this.getWeatherData();
        this.getDefinition();
    }
});

app.mount('#app');
