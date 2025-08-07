const app = Vue.createApp({
    data() {
        return {
            myname: 'Vraj Patel',
            myid: '1243437',
            // Random User Module
            user: [],

            // Weather Module
            weather: {
                city: 'London', // Default city for initial load
                province: 'Ontario', // Default province for initial load
                country: 'Canada' // Default country for initial load
            },
            weatherData: [],

            // Dictionary Module
            dictionary: [],
            meaningofword: '' // Default word for initial load
        }
    },

    methods: {
        // Fetch Random User
        createRandomUser() {
            const url1 = `https://comp6062.liamstewart.ca/random-user-data`;
            fetch(url1)
                .then(response => {return response.json();})
                .then(data => {
                    console.log(data);
                    this.user = data;
                })
                .catch(error => console.error(error));
        },

        provideWeatherData() {
            const url2 = `https://comp6062.liamstewart.ca/weather-data?city=${this.weather.city}&province=${this.weather.province}&country=${this.weather.country}`;
            fetch(url2)
                .then(response => {return response.json();})
                .then(data => {
                    console.log(data);
                    this.weatherData = data;
                })
                .catch(error => console.error(error));
        },

        getDefinitionfromdictionary() {
            const url3 = `https://comp6062.liamstewart.ca/api/define?word=${this.meaningofword}`;
            fetch(url3)
                .then(response => {return response.json();})
                .then(data => {
                    console.log(data);
                    this.dictionary = data;
                })
                .catch(error => console.error(error));
        }
    },

    created() {
        // Auto-load on page load
        this.createRandomUser();
        this.provideWeatherData();
        this.getDefinitionfromdictionary();
    }
});

app.mount('#app');
