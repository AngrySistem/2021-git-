const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: ['Заметка 0', 'Заметка 1'],
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if(this.inputValue != '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        delNote(x) {
            this.notes.splice(x, 1)
        },
        toUpperCase(x) {
            return x.toUpperCase()
        }
    },
    computed: {
        doublecount() {
            console.log('d')
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if(value.length > 5) {
                this.inputValue = ''
            }
        }
    }
}

Vue.createApp(App).mount('#app')