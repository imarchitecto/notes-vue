const App = {
    data() {
        return {
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        inputKeyPress(event) {
            if (event.key === 'Enter') {
                this.addNewNote()
            }
        },
        removeNote(i) {
            this.notes.splice(i, 1)
        }
    },
    watch: {
        inputValue(value) {
            if (value === 'Антон балбес') {
                this.inputValue = 'Пошла нахуй Снежана'
                this.notes.push('Я дохую говорю, пора бы мне закрыть лицо')
            }
        }
    }
}


Vue.createApp(App).mount('#app')

