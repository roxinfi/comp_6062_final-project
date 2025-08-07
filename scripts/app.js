const app = Vue.createApp({
    data() {
        return {
            // Random User Module
            user: {
                firstName: '',
                lastName: '',
                age: '',
                picture: ''
            },

            // Weather Module
            weather: {
                city: 'London', // Default values for initial load
                province: 'Ontario',
                country: 'Canada'
            },
            weatherData: {
                temperature: '',
                wind: '',
                description: ''
            },

            // Dictionary Module
            dictionary: {
                word: ''
            },
            dictionaryData: {
                phonetic: '',
                definition: ''
            }
        }
    },

    methods: {
        // Fetch Random User
        getRandomUser() {
            fetch('https://comp6062.liamstewart.ca/random-user-data')
                .then(response => {return response.json();})
                .then(data => {
                    this.user.firstName = data.user_profile.first_name;
                    this.user.lastName = data.user_profile.last_name;
                    this.user.age = data.user_profile.age;
                    this.user.picture = data.user_profile.avatar_url;
                })
                .catch(error => console.error('Error in fetching user data from API:', error));
        },

        getWeatherData() {
            const url = `https://comp6062.liamstewart.ca/weather-data?city=${this.weather.city}&province=${this.weather.province}&country=${this.weather.country}`;
            fetch(url)
                .then(response => {return response.json();})
                .then(data => {
                    this.weatherData.temperature = data.weather_data.temperature;
                    this.weatherData.wind = data.weather_data.wind_speed;
                    this.weatherData.description = data.weather_data.weather_description;
                })
                .catch(error => console.error('Error in fetching weather data from API:', error));
        },

        getDefinition() {
            const url = `https://comp6062.liamstewart.ca/api/define?word=${this.dictionary.word}`;
            fetch(url)
                .then(response => {return response.json();})
                .then(data => {
                    this.dictionaryData.phonetic = data.phonetic;
                    this.dictionaryData.definition = data.definition;
                })
                .catch(error => console.error('Error in fetching dictionary data from API:', error));
        }
    },

    created() {
        // Auto-load on page load
        this.getRandomUser();
        this.getWeatherData();
    }
});

app.mount('#app');
